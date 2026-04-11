import { $ } from "bun";
import { readdir, rm, mkdir, cp, writeFile, stat } from "fs/promises";
import { join } from "path";

const ROOT = join(import.meta.dir, "..");
const DIST = join(ROOT, "dist");
const PROJECTS_DIR = join(ROOT, "projects");

async function dirExists(path: string): Promise<boolean> {
  try {
    const s = await stat(path);
    return s.isDirectory();
  } catch {
    return false;
  }
}

function toTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

async function main() {
  console.log("=== Building lecture platform ===\n");

  // 1. Clean dist
  await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });

  // 2. Discover and build projects
  const projects = await readdir(PROJECTS_DIR);
  const projectLinks: { name: string; slug: string; hasNotes: boolean; hasSlides: boolean }[] = [];

  for (const project of projects) {
    const projectDir = join(PROJECTS_DIR, project);
    if (!(await dirExists(projectDir))) continue;

    let hasNotes = false;
    let hasSlides = false;

    // Build notes
    const notesDir = join(projectDir, "notes");
    if (await dirExists(notesDir)) {
      console.log(`[${project}/notes] Building...`);
      await $`bun run --cwd ${notesDir} build`.quiet();
      await cp(join(notesDir, "build"), join(DIST, project, "notes"), {
        recursive: true,
      });
      hasNotes = true;
      console.log(`[${project}/notes] Done.`);
    }

    // Build slides
    const slidesDir = join(projectDir, "slides");
    if (await dirExists(slidesDir)) {
      console.log(`[${project}/slides] Building...`);
      await $`bun run --cwd ${slidesDir} build`.quiet();
      await cp(join(slidesDir, "dist"), join(DIST, project, "slides"), {
        recursive: true,
      });
      hasSlides = true;
      console.log(`[${project}/slides] Done.`);
    }

    projectLinks.push({
      name: toTitle(project),
      slug: project,
      hasNotes,
      hasSlides,
    });

    console.log();
  }

  // 3. Generate landing page
  const projectListHtml = projectLinks
    .map(
      (p) => `
      <li class="project">
        <h2>${p.name}</h2>
        <div class="links">
          ${p.hasNotes ? `<a href="/${p.slug}/notes/">Notes</a>` : ""}
          ${p.hasSlides ? `<a href="/${p.slug}/slides/">Slides</a>` : ""}
        </div>
      </li>`
    )
    .join("\n");

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lectures</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: "Pretendard", -apple-system, BlinkMacSystemFont, sans-serif;
      background: #0f0f0f;
      color: #e4e4e7;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      padding: 4rem 2rem;
    }
    .container { max-width: 600px; width: 100%; }
    h1 { font-size: 2rem; margin-bottom: 2rem; font-weight: 700; }
    .projects { list-style: none; }
    .project {
      padding: 1.5rem;
      margin-bottom: 1rem;
      background: #1e1e1e;
      border-radius: 0.5rem;
      border: 1px solid #3f3f46;
    }
    .project h2 { font-size: 1.25rem; margin-bottom: 0.75rem; }
    .links { display: flex; gap: 1rem; }
    .links a {
      color: #60a5fa;
      text-decoration: none;
      font-size: 0.95rem;
    }
    .links a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Lectures</h1>
    <ul class="projects">
      ${projectListHtml}
    </ul>
  </div>
</body>
</html>`;

  await writeFile(join(DIST, "index.html"), html);
  console.log("=== Landing page generated ===");
  console.log(`=== Build complete: ${DIST} ===`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
