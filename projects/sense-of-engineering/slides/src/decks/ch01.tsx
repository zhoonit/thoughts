import { Slide, Stack, Code } from "@revealjs/react";
import type { CSSProperties, ReactNode } from "react";

// ── Shared styles ──
const breadcrumbStyle: CSSProperties = {
  position: "absolute",
  top: "12px",
  left: "24px",
  fontSize: "0.7em",
  color: "#777",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

const headMessageStyle: CSSProperties = {
  fontSize: "0.72em",
  color: "#42affa",
  fontStyle: "italic",
  margin: "-6px 0 18px 0",
  borderLeft: "3px solid #42affa",
  padding: "4px 0 4px 12px",
  textAlign: "left",
};

const partLabelStyle: CSSProperties = {
  fontSize: "0.55em",
  color: "#888",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  marginBottom: "12px",
};

const ledeStyle: CSSProperties = {
  fontSize: "0.8em",
  color: "#bbb",
  marginTop: "24px",
  maxWidth: "80%",
  marginLeft: "auto",
  marginRight: "auto",
  lineHeight: 1.5,
};

function Crumb({ children }: { children: ReactNode }) {
  return <div style={breadcrumbStyle}>{children}</div>;
}

function Head({ children }: { children: ReactNode }) {
  return <p style={headMessageStyle}>{children}</p>;
}

function Cover({
  part,
  title,
  lede,
}: {
  part: string;
  title: string;
  lede?: string;
}) {
  return (
    <Slide>
      <div style={partLabelStyle}>Ch 1 · Part {part}</div>
      <h2>{title}</h2>
      {lede && <p style={ledeStyle}>{lede}</p>}
    </Slide>
  );
}

function Break() {
  return (
    <Slide>
      <div style={{ textAlign: "center", padding: "60px 0" }}>
        <div
          style={{
            fontSize: "0.7em",
            color: "#888",
            letterSpacing: "0.3em",
          }}
        >
          ─── BREAK ───
        </div>
        <h1 style={{ fontSize: "3.2em", margin: "40px 0 20px 0" }}>

        </h1>
        <p style={{ color: "#aaa", fontSize: "0.85em" }}>

        </p>
      </div>
    </Slide>
  );
}

export default function Ch01() {
  return (
    <>
      {/* ── Cover ── */}
      <Slide>
        <div style={partLabelStyle}>Chapter 1</div>
        <h1>A Sense of Engineering</h1>
        <p style={{ fontSize: "1.2em", color: "#ccc" }}>
          Why Engineering Matters
        </p>
      </Slide>

      {/* ── Contents / Agenda ── */}
      <Slide>
        <h2>Contents</h2>
        <ol style={{ fontSize: "0.95em", lineHeight: 1.7 }}>
          <li>엔지니어링이란?</li>
          <li>엔지니어링과 AI</li>
          <li>AI의 한계 — 비용과 의도</li>
          <li style={{ color: "#888" }}>
            <em>— 휴식 —</em>
          </li>
          <li>어엿한 엔지니어 — 문제 정의와 분해</li>
          <li>실전 예시</li>
          <li>마치며 — Define → Divide → Conquer</li>
        </ol>
      </Slide>

      {/* ═══ Part 1 ═══ */}
      <Cover
        part="1"
        title="엔지니어링이란?"
        lede="정의부터 시작하자. 소프트웨어 엔지니어링이 단순 프로그래밍과 무엇이 다른지, 그리고 엔지니어는 코더와 어떻게 다른지."
      />

      <Stack>
        <Slide>
          <Crumb>Part 1 · 엔지니어링이란?</Crumb>
          <h2>엔지니어링의 정의</h2>
          <Head>Claude 가 정리한 정의 — 키워드가 다섯 개 보인다.</Head>
          <blockquote className="r-fit-text">
            <p>
              Engineering is the application of scientific, mathematical, and
              practical knowledge to design, build, and maintain structures,
              machines, systems, and processes that solve problems or meet human
              needs.
            </p>
            <p>
              What unites all branches is a shared methodology:{" "}
              <strong>
                identifying a problem, understanding the constraints
              </strong>
              ,{" "}
              <strong>designing a solution, testing it, and iterating</strong>{" "}
              until it works reliably.
            </p>
            <p>— Claude</p>
          </blockquote>
        </Slide>

        <Slide>
          <Crumb>Part 1 · 엔지니어링이란?</Crumb>
          <h2>5가지 키워드</h2>
          <Head>엔지니어링 = 문제 → 제약 → 설계 → 테스트 → 반복.</Head>
          <ol>
            <li>
              <strong>문제 식별</strong> — 무엇이 문제인지 안다
            </li>
            <li>
              <strong>제약 이해</strong> — 비용, 안전, 시간, 자원의 한계를 안다
            </li>
            <li>
              <strong>설계</strong> — 제약 안에서 해법을 구상한다
            </li>
            <li>
              <strong>테스트</strong> — 해법이 동작하는지 검증한다
            </li>
            <li>
              <strong>반복</strong> — 안 되면 고치고, 다시 돌린다
            </li>
          </ol>
        </Slide>
        <Slide>
          <Crumb>Part 1 · 엔지니어링이란?</Crumb>
          <h2>소프트웨어 엔지니어링에 대보면</h2>
          <Head>
            비용 / 안전 / 시간 / 자원 — 제약의 축을 구체화한다.
          </Head>
          <table>
            <thead>
              <tr>
                <th>제약</th>
                <th>소프트웨어에서의 구체</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>비용</td>
                <td>구현 비용 · 처리 비용</td>
              </tr>
              <tr>
                <td>안전</td>
                <td>서비스 안정성 · 보안</td>
              </tr>
              <tr>
                <td>시간</td>
                <td>구현 시간 · 요청당 처리 시간</td>
              </tr>
              <tr>
                <td>자원</td>
                <td>기술 스택 · 컴퓨팅 자원</td>
              </tr>
            </tbody>
          </table>
          <p>
            문제 식별 · 설계 · 테스트 · 반복은 그대로 이식된다. 다만{" "}
            <strong>
              소프트웨어 엔지니어링의 문제는 대개 시간이 흐르면서 발생한다.
            </strong>
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 1 · 엔지니어링이란?</Crumb>
          <h2>프로그래밍 vs 소프트웨어 엔지니어링</h2>
          <Head>
            소프트웨어 엔지니어링 = <em>시간으로 적분된 프로그래밍</em>.
          </Head>
          <blockquote>
            <p>
              <strong>
                "Software engineering is programming integrated over time."
              </strong>
            </p>
            <p>— Software Engineering at Google</p>
          </blockquote>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>프로그래밍</th>
                <th>소프트웨어 엔지니어링</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>목표</td>
                <td>
                  <strong>지금</strong> 돌아가게
                </td>
                <td>
                  <strong>시간이 지나도</strong> 돌아가게
                </td>
              </tr>
              <tr>
                <td>시간 축</td>
                <td>순간 (t=0)</td>
                <td>적분 (∫dt)</td>
              </tr>
              <tr>
                <td>성공 기준</td>
                <td>"돌아간다"</td>
                <td>"계속 돌아간다"</td>
              </tr>
            </tbody>
          </table>
        </Slide>

        <Slide>
          <Crumb>Part 1 · 엔지니어링이란?</Crumb>
          <h2>시간이 야기하는 세 가지 압력</h2>
          <Head>
            6 개월 후에 안 돌아간다면, 그건 엔지니어링이 아니라 일회용
            스크립트다.
          </Head>
          <ul>
            <li>
              <strong>누적되는 유지보수</strong> — 의존성 업데이트, OS 변경,
              보안 취약점이 쌓인다
            </li>
            <li>
              <strong>트래픽 증가</strong> — 100 명 → 10 만 명, 1GB → 1TB,
              설계의 한계가 드러난다
            </li>
            <li>
              <strong>누적되는 컨텍스트</strong> — 작성자 퇴사, 의도 소실, "왜
              이렇게 짰는지 아무도 모른다"
            </li>
          </ul>
          <p>
            엔지니어링이란 코드를 짜는 행위가 아니라,{" "}
            <strong>
              <span style={{ color: "#fbbf24" }}>
                시간이 지나도 코드가 가치를 유지하도록 만드는 행위
              </span>
            </strong>
            다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 1 · 엔지니어링이란?</Crumb>
          <h2>코더 vs 엔지니어</h2>
          <Head>
            같은 코드를 짜도, 시간 감각과 결정의 책임이 다르다.
          </Head>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>코더 (테크니션)</th>
                <th>엔지니어</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>핵심 능력</td>
                <td>명세대로 구현한다</td>
                <td>문제를 정의하고 제약 안에서 설계한다</td>
              </tr>
              <tr>
                <td>시간 감각</td>
                <td>"지금 돌아가면 된다"</td>
                <td>"6 개월 후에도 돌아가야 한다"</td>
              </tr>
              <tr>
                <td>AI 와의 관계</td>
                <td>AI 가 대체할 수 있다</td>
                <td>AI 를 도구로 쓴다</td>
              </tr>
              <tr>
                <td>의사 결정</td>
                <td>"어떻게 (How)"</td>
                <td>"왜 (Why)" + "무엇을 (What)"</td>
              </tr>
            </tbody>
          </table>
        </Slide>

        <Slide>
          <Crumb>Part 1 · 엔지니어링이란?</Crumb>
          <h2>WYSIWYG 의 계보와 AI</h2>
          <Head>
            코더의 역할을 대체하려는 시도는 <em>유구하다</em>.
          </Head>
          <ul>
            <li>
              <strong>플래시 게임</strong> — 개발자가 아닌 사람도 쉽게
              프로그램을 구성할 수 있게 해준 도구
            </li>
            <li>
              <strong>나모 웹 에디터</strong> — 같은 시대의 풍운아, "코드 없이
              홈페이지"
            </li>
            <li>
              <strong>AI</strong> — 같은 계보의 최신판. 다만 이전과 다르게{" "}
              <strong>전가의 보도 같은 도구</strong>
            </li>
          </ul>
          <p>
            AI 는 코더를 대체한다. 그렇다면 엔지니어의 역할도 대체할 수 있을까?
            그 질문에 답하려면 AI 의 본질부터 봐야 한다.
          </p>
        </Slide>
      </Stack>

      {/* ═══ Part 2 ═══ */}
      <Cover
        part="2"
        title="엔지니어링과 AI"
        lede="AI 의 본질을 이해해야 그 한계도 보인다. 통계적 분포 피팅, 그리고 그 바깥의 일."
      />

      <Stack>
        <Slide>
          <Crumb>Part 2 · 엔지니어링과 AI</Crumb>
          <h2>모델이란?</h2>
          <Head>
            본질은 <em>행렬 곱셈의 집합</em>. 현상을 수학적으로 피팅한다.
          </Head>
          <ul>
            <li>
              모델 = <strong>실제 현상과 결과를 피팅하는 작업</strong>
            </li>
            <li>입력 → 출력 관계를 수학적으로 근사</li>
            <li>
              딥러닝 = <strong>matrix multiplication 의 집합</strong>
            </li>
            <li>행렬 곱 → 비선형 함수 → 행렬 곱 → ... (수백 레이어)</li>
            <li>
              파라미터를 데이터에 맞춰 조정 = <strong>학습 (training)</strong>
            </li>
          </ul>
          <Code language="">{`모든 모델 = f(x) = y

강수 확률:  f([90일 구름 레이더, 기온, ...]) = 강수 확률
LLM:        f("python 으로 hello world 짜줘") = "print('hello world')"`}</Code>
        </Slide>

        <Slide>
          <Crumb>Part 2 · 엔지니어링과 AI</Crumb>
          <h2>분포 가설</h2>
          <Head>
            언어 모델은 <em>인류가 쓴 텍스트의 통계적 분포</em>를 압축한 것.
          </Head>
          <blockquote>
            <p>
              <strong>
                "비슷한 맥락에서 등장하는 단어는 비슷한 의미를 가진다."
              </strong>
            </p>
            <p>— Distributional Hypothesis</p>
          </blockquote>
          <p>
            "고양이는 <strong>_</strong>에서 잔다" ≈ "강아지는{" "}
            <strong>_</strong>에서 잔다"
          </p>
          <p>
            트랜스포머와 어텐션은 이 피팅을 <strong>매우 효과적으로</strong>{" "}
            해내는 구조다. 문맥의 어떤 부분에 주목할지를 학습하면서, 긴
            텍스트에서도 맥락을 잃지 않는다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 2 · 엔지니어링과 AI</Crumb>
          <h2>분포 바깥의 일</h2>
          <Head>
            통계적 피팅이라는 본질이 <em>새로움 (novelty)</em> 에 약한 이유.
          </Head>
          <ul>
            <li>한 번도 본 적 없는 환경</li>
            <li>한 번도 쓰인 적 없는 코드 패턴</li>
            <li>이 조직에만 존재하는 제약</li>
          </ul>
          <p>
            → 여기서부터는{" "}
            <strong>
              <span style={{ color: "#fbbf24" }}>분포에 없는 영역</span>
            </strong>
            이다. 이 감각을 기억해두자.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 2 · 엔지니어링과 AI</Crumb>
          <h2>말하는 백과사전</h2>
          <Head>
            백과사전은 <em>참고</em>하는 것이지, 문제를 해결하지는 않는다.
          </Head>
          <blockquote>
            현재의 AI 는 <strong>"말하는 백과사전"</strong>에 가깝다.
          </blockquote>
          <ul>
            <li>엄청나게 많이 알고 있고, 유창하게 대답한다</li>
            <li>어떤 질문이든 합리적으로 들리는 답을 내놓는다</li>
            <li>
              하지만 <strong>문제 해결은 사람이 한다</strong>
            </li>
          </ul>
          <p style={{ color: "#aaa", fontSize: "0.85em" }}>
            "충분히 큰 모델이면 사람처럼 풀지 않을까?" 는 충분히 타당한
            반론이다. 다만 현재 과학은 "이성 / 생각이 무엇인가" 에 답하지
            못한다. 확정적 답을 줄 수 있는 사람은 없다 — 다만, 근거는 있다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 2 · 엔지니어링과 AI</Crumb>
          <h2>ARC-AGI-3 (2026.03)</h2>
          <Head>
            규칙 · 목표 · 언어 힌트 <em>없음</em>. 순수 novelty 테스트.
          </Head>
          <ul>
            <li>64 × 64 컬러 그리드 환경에 에이전트를 떨어뜨린다</li>
            <li>
              <strong>규칙이 없다</strong> — 환경의 법칙을 스스로 탐색
            </li>
            <li>
              <strong>목표가 없다</strong> — "이기는 조건" 을 스스로 발견
            </li>
            <li>
              <strong>언어 힌트가 없다</strong> — 자연어 설명 일절 없음
            </li>
          </ul>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>점수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Human</strong>
                </td>
                <td>
                  <strong>100%</strong>
                </td>
              </tr>
              <tr>
                <td>Gemini 3.1</td>
                <td>0.37%</td>
              </tr>
              <tr>
                <td>GPT-5.4</td>
                <td>0.26%</td>
              </tr>
              <tr>
                <td>Opus 4.6</td>
                <td>0.25%</td>
              </tr>
              <tr>
                <td>Grok-4.20</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>엔지니어링된 에이전트 (30 일 최고)</td>
                <td>12.58%</td>
              </tr>
            </tbody>
          </table>
        </Slide>

        <Slide>
          <Crumb>Part 2 · 엔지니어링과 AI</Crumb>
          <h2>현재 AI 의 능력 지도</h2>
          <Head>
            이미 알려진 패턴 재조합은 탁월, 스스로 탐색하고 목표 설정은 사실상
            없음.
          </Head>
          <ul>
            <li>
              <strong>잘 하는 것</strong> — 기존에 있는 지식을 엮어 보는 능력.
              분포 안의 문제 해결
            </li>
            <li>
              <strong>사실상 못하는 것</strong> — 완전히 새로운 환경에서 스스로
              탐색하고, 목표를 스스로 설정하는 것
            </li>
            <li>
              <strong>아직 모르는 것</strong> — novelty 가 존재하는 문제에도
              유효한지
            </li>
          </ul>
          <p>
            정의를 말해주는 것과 정의대로 행동하는 것은 다르다 — 처음 질문이
            여기서 다시 돌아온다.
          </p>
        </Slide>
      </Stack>

      {/* ═══ Part 3 ═══ */}
      <Cover
        part="3"
        title="AI 의 한계 — 비용과 의도"
        lede="기술적으로 풀 수 있다 쳐도, 비용이 남는다. 그리고 비용보다 더 근본적인 것, 의도."
      />

      <Stack>
        <Slide>
          <Crumb>Part 3 · AI 의 한계</Crumb>
          <h2>비용 — 가정 실험</h2>
          <Head>
            지금 API 가격은 원가 이하다. <em>영원히</em>는 아니다.
          </Head>
          <p>
            가정하자: AI 가 기술적으로 모든 태스크를 100% 풀 수 있다. 그래도
            문제는 남는다 — 돈이다.
          </p>
          <table>
            <thead>
              <tr>
                <th>모델</th>
                <th>추정 운영 비용 (1M 토큰)</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Haiku (경량)</td>
                <td>~$1.25</td>
                <td>간단한 태스크용</td>
              </tr>
              <tr>
                <td>Opus (대형)</td>
                <td>$50 ~ $125</td>
                <td>Haiku 대비 100 ~ 200 배</td>
              </tr>
              <tr>
                <td>Mythos (차세대)</td>
                <td>$125 ~ $180</td>
                <td>추정치, 변수 많음</td>
              </tr>
            </tbody>
          </table>
        </Slide>

        <Slide>
          <Crumb>Part 3 · AI 의 한계</Crumb>
          <h2>무어의 법칙이 AI 에도?</h2>
          <Head>10 배는 쉽지만, 100 배는 알 수 없다.</Head>
          <ul>
            <li>변수는 많다 — 캐시 히트율, 배치 효율, 하드웨어 발전</li>
            <li>
              10 배 개선은 가능해 보인다. <strong>100 배 개선</strong> 은
              미지수
            </li>
            <li>
              지금 AI 회사들은 시장 선점을 위해{" "}
              <strong>원가 이하로 API 를 제공</strong> 하고 있다
            </li>
            <li>언젠가는 진짜 비용을 치러야 한다</li>
          </ul>
          <blockquote>
            "아편전쟁으로 치면 지금은 아편을 푸는 단계다."
          </blockquote>
        </Slide>

        <Slide>
          <Crumb>Part 3 · AI 의 한계</Crumb>
          <h2>의도 — 정답이 없는 문제들</h2>
          <Head>
            엔지니어가 고유하게 하는 일은 <em>의도 결정</em> 이다.
          </Head>
          <ol>
            <li>
              <strong>추상화</strong> — 어디까지 단순화할 것인가
            </li>
            <li>
              <strong>모델링</strong> — 현실을 소프트웨어로 어떻게 표현할 것인가
            </li>
            <li>
              <strong>의도 표현</strong> — 코드가 "왜" 이런 모양인지
            </li>
            <li>
              <strong>트레이드오프 관리</strong> — 속도 vs 품질, 단기 vs 장기,
              비용 vs 성능
            </li>
            <li>
              <strong>변화 대응</strong> — 요구사항이 바뀌면 기존 설계를 어떻게
              진화시키나
            </li>
          </ol>
          <p>
            이 다섯에는 <strong>정답이 없다</strong>. 상황마다, 가치관마다,
            조직의 맥락마다 다르다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 3 · AI 의 한계</Crumb>
          <h2>결정은 AI 가 하지 않는다</h2>
          <Head>정답이 없는 문제는 책임이 따르는 문제다.</Head>
          <blockquote>
            <p>목돈이 생겼다. 집을 살까? 채권에 투자할까? 예금해둘까?</p>
            <p>
              AI 에게 물어보면 각 선택지의 장단점을 잘 정리해준다. 하지만{" "}
              <strong>
                <span style={{ color: "#fbbf24" }}>
                  결정은 AI 가 하지 않는다.
                </span>
              </strong>{" "}
              <br/>
              결정에 대한 책임을 질수도 없다.
            </p>
          </blockquote>
          <ul>
            <li>"모놀리스로 갈까, 마이크로서비스로 갈까?"</li>
            <li>"이 기술 부채를 지금 갚을까, 다음 분기에 갚을까?"</li>
          </ul>
          <p>
            맥락에 의존하고, 결과에 책임이 따르고, 정답이 없다. 말하는
            백과사전은 이런 문제를 <strong>대신 풀어주지 않는다</strong>.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 3 · AI 의 한계</Crumb>
          <h2>그래서, 엔지니어는 무엇을 하는가</h2>
          <Head>
            의도 결정의 <em>출발점</em> = 문제 정의.
          </Head>
          <ul>
            <li>
              AI 가 대부분의 결정을 해준다 쳐도, 최초 프롬프트는{" "}
              <strong>누군가 넣어줘야 한다</strong>
            </li>
            <li>
              누군가는 "네이버처럼 만들어주세요" 를{" "}
              <strong>말이 되는 요구사항의 뭉치</strong> 로 바꿔줘야 한다
            </li>
            <li>
              엔지니어가 고유하게 하는 일 ={" "}
              <strong>
                <span style={{ color: "#fbbf24" }}>의도 결정</span>
              </strong>
            </li>
            <li>
              그 출발점 ={" "}
              <strong>
                <span style={{ color: "#fbbf24" }}>문제 정의</span>
              </strong>
            </li>
          </ul>
          <p>
            풀 문제를 잘못 잡으면, AI 는{" "}
            <strong>
              <span style={{ color: "#fbbf24" }}>
                잘못된 문제를 아주 유창하게
              </span>
            </strong>{" "}
            풀어줄 뿐이다. 이제 직접 해보자.
          </p>
        </Slide>
      </Stack>

      {/* ── 휴식 ── */}
      <Break minutes={15} />

      {/* ═══ Part 4 ═══ */}
      <Cover
        part="4"
        title="어엿한 엔지니어 — 문제 정의와 분해"
        lede="Gap 분석으로 문제를 정의하고, MECE 와 Logic Tree 로 분해한다. 모든 예시는 도서관 하나로 통일해서 축만 바꿔가며 본다."
      />

      <Stack>
        <Slide>
          <Crumb>Part 4 · 어엿한 엔지니어</Crumb>
          <h2>많은 주니어가 건너뛰는 단계</h2>
          <Head>뭔가 안 된다 → 바로 코드를 고친다.</Head>
          <p>
            문제를 정확히 정의하지 않으면, 내가 풀고 있는 게 진짜 문제인지조차
            모른다.
          </p>
          <p>
            엔지니어링의{" "}
            <strong>
              <span style={{ color: "#fbbf24" }}>
                첫 단계는 문제를 정의하는 것
              </span>
            </strong>
            이다.
            놀랍게도 많은 주니어 개발자들이 이 단계를 건너뛴다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 4 · 어엿한 엔지니어</Crumb>
          <h2>Gap 분석</h2>
          <Head>"안 된다"는 불만이지, 문제 정의가 아니다.</Head>
          <div className="mermaid">
            {`
            %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
            flowchart LR
              A["현재 상태<br/>As-Is"] -- "GAP = 문제" --> B["희망 상태<br/>To-Be"]
            `}
          </div>
          <p>
            현재와 희망 사이의 Gap 을 <strong>명시적으로 적는 순간</strong>{" "}
            무엇을 해결해야 하는지가 보인다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 4 · 어엿한 엔지니어</Crumb>
          <h2>예시 — 도서관</h2>
          <Head>세 줄로 정리되는 순간, 비로소 손댈 데가 보인다.</Head>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>현재 상태</td>
                <td>도서관 운영자인데, 사람들이 책을 잘 안 읽는다</td>
              </tr>
              <tr>
                <td>희망 상태</td>
                <td>사람들이 책을 더 많이 읽었으면 좋겠다</td>
              </tr>
              <tr>
                <td>
                  <strong>GAP</strong>
                </td>
                <td>
                  <strong>사람들이 책을 더 많이 읽게 만들어야 한다</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            → 다음 질문:{" "}
            <strong>왜 이 Gap 이 존재하는가? 어떻게 좁힐 수 있는가?</strong>
          </p>
        </Slide>
      </Stack>

      {/* ═══ Part 4 · MECE ═══ */}
      <Stack>
        <Slide>
          <Crumb>Part 4 · 어엿한 엔지니어 · MECE</Crumb>
          <h2>MECE</h2>
          <Head>문제를 분해할 때 겹침 없이, 빠짐 없이 나누는 원칙.</Head>
          <ul>
            <li>
              <strong>Mutually Exclusive (ME)</strong> — 상호 배타. 각 가지가
              겹치지 않는다
            </li>
            <li>
              <strong>Collectively Exhaustive (CE)</strong> — 전체 포괄. 합치면
              빠짐 없이 전체를 커버한다
            </li>
          </ul>
          <p>Logic Tree 를 다루기 전에 짚고 가야 할 핵심 근육이다.</p>
        </Slide>

        <Slide>
          <Crumb>Part 4 · 어엿한 엔지니어 · MECE</Crumb>
          <h2>Mutually Exclusive (ME) 위반 — 겹친다</h2>
          <Head>🙋 20 대 학생은 어디에 넣지?</Head>
          <div className="mermaid">
            {`
%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
flowchart TD
  subgraph bad["❌ 위반: 겹친다"]
    A["사람 분류"] --> A1["학생"]
    A --> A2["직장인"]
    A --> A3["20대"]
  end
  subgraph good["✅ 충족: 겹치지 않는다"]
    B["사람 분류"] --> B1["남자"]
    B --> B2["여자"]
  end
  style A fill:#3a1414,stroke:#ff6b6b,stroke-width:2px,color:#ffdada
  style A1 fill:#3a1414,stroke:#ff6b6b,stroke-width:2px,color:#ffdada
  style A2 fill:#3a1414,stroke:#ff6b6b,stroke-width:2px,color:#ffdada
  style A3 fill:#3a1414,stroke:#ff6b6b,stroke-width:2px,color:#ffdada
  style B fill:#0f2e1a,stroke:#4ade80,stroke-width:2px,color:#d1fae5
  style B1 fill:#0f2e1a,stroke:#4ade80,stroke-width:2px,color:#d1fae5
  style B2 fill:#0f2e1a,stroke:#4ade80,stroke-width:2px,color:#d1fae5
  style bad fill:#1a0808,stroke:#ff6b6b,stroke-width:2px,color:#ff9a9a
  style good fill:#081a0f,stroke:#4ade80,stroke-width:2px,color:#86efac
            `}
          </div>
          <p>
            왼쪽은 <span style={{ color: "#ff9a9a" }}>"학생"</span> 과{" "}
            <span style={{ color: "#ff9a9a" }}>"20대"</span> 가 겹친다. 같은
            대상을 두 번 세게 된다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 4 · 어엿한 엔지니어 · MECE</Crumb>
          <h2>Collectively Exhaustive (CE) 위반 — 빠진 게 있다</h2>
          <Head>🍄 동물과 식물로 나누면 균류는 어디로 가나?</Head>
          <div className="mermaid">
            {`
%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
flowchart TD
  subgraph bad["❌ 위반: 빠졌다"]
    C["생물 분류"] --> C1["동물"]
    C --> C2["식물"]
  end
  subgraph good["✅ 충족: 전체 커버"]
    D["생물 분류"] --> D1["동물"]
    D --> D2["식물"]
    D --> D3["균류/미생물"]
  end
  style C fill:#3a1414,stroke:#ff6b6b,stroke-width:2px,color:#ffdada
  style C1 fill:#3a1414,stroke:#ff6b6b,stroke-width:2px,color:#ffdada
  style C2 fill:#3a1414,stroke:#ff6b6b,stroke-width:2px,color:#ffdada
  style D fill:#0f2e1a,stroke:#4ade80,stroke-width:2px,color:#d1fae5
  style D1 fill:#0f2e1a,stroke:#4ade80,stroke-width:2px,color:#d1fae5
  style D2 fill:#0f2e1a,stroke:#4ade80,stroke-width:2px,color:#d1fae5
  style D3 fill:#0f2e1a,stroke:#fbbf24,stroke-width:3px,color:#fde68a
  style bad fill:#1a0808,stroke:#ff6b6b,stroke-width:2px,color:#ff9a9a
  style good fill:#081a0f,stroke:#4ade80,stroke-width:2px,color:#86efac
            `}
          </div>
          <p>
            직관적으로 전부인 것 같아도{" "}
            <span style={{ color: "#fde68a" }}>
              <strong>빠지는 범주가 없는지</strong>
            </span>{" "}
            점검해야 CE 다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 4 · 어엿한 엔지니어 · MECE</Crumb>
          <h2>MECE 분해 팁</h2>
          <Head>
            가장 쉬운 MECE 분해 = <em>하나의 양을 구성 요소로 나누기</em>.
          </Head>
          <ul>
            <li>
              <strong>매출</strong> = 거래 건수 × 건당 단가
            </li>
            <li>
              <strong>전환율</strong> = 유입 × 클릭률 × 구매율
            </li>
            <li>
              <strong>응답 시간</strong> = 네트워크 시간 + 서버 처리 시간 +
              렌더링 시간
            </li>
          </ul>
          <p>
            곱셈이나 덧셈으로 분해하면 <strong>겹칠 수가 없고</strong>, 합치면
            전체가 된다.
          </p>
        </Slide>
      </Stack>

      {/* ═══ Part 4 · Logic Tree 4종 ═══ */}
      <Stack>
        <Slide>
          <Crumb>Part 4 · 어엿한 엔지니어 · Logic Tree</Crumb>
          <h2>4 가지 Logic Tree</h2>
          <Head>
            대체재가 아니라 <em>도구함</em> 이다.
          </Head>
          <table>
            <thead>
              <tr>
                <th>도구</th>
                <th>방향</th>
                <th>언제 쓰나</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Issue Tree</td>
                <td>수평 (발산)</td>
                <td>막연한 큰 문제 앞에서</td>
              </tr>
              <tr>
                <td>Hypothesis Tree</td>
                <td>수평 (수렴)</td>
                <td>의심 가는 원인이 있을 때</td>
              </tr>
              <tr>
                <td>5 Whys</td>
                <td>수직</td>
                <td>표면 증상 → 근본 원인 추적</td>
              </tr>
              <tr>
                <td>Fishbone</td>
                <td>수평 (카테고리)</td>
                <td>여러 팀 협업 원인 탐색</td>
              </tr>
            </tbody>
          </table>
          <p>
            실전:{" "}
            <strong>
              Issue/Fishbone 으로 펼치고 → Hypothesis 로 좁히고 → 막힌 가지에서
              5 Whys 로 파고든다.
            </strong>
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 4 · Logic Tree</Crumb>
          <h2>1. Issue Tree</h2>
          <Head>
            "어떤 하위 문제들이 있을까?" — <em>발산형</em>. 문제 구조를
            탐색한다.
          </Head>
          <div className="mermaid">
            {`
            %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
            flowchart TD
              R["사람들이 책을 더 읽게 만들려면?"]
              R --> A["접근성 문제"]
              R --> B["동기 부여 문제"]
              R --> C["콘텐츠 문제"]
              A --> A1["도서관 위치/시간"]
              A --> A2["온라인 대출 시스템"]
              B --> B1["독서 습관 프로그램"]
              B --> B2["커뮤니티/독서 모임"]
              C --> C1["장서 구성"]
              C --> C2["큐레이션/추천"]
            `}
          </div>
          <p>
            모호한 큰 문제를 MECE 하게 쪼개서{" "}
            <strong>각 하위 문제를 독립적으로 다룰 수 있게</strong> 만든다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 4 · Logic Tree</Crumb>
          <h2>2. Hypothesis Tree</h2>
          <Head>
            "이것이 원인일 것이다" — <em>수렴형</em>. 검증 기준이 명확하다.
          </Head>
          <div className="mermaid">
            {`
            %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
            flowchart TD
              R["가설: 대출 건수가<br/>줄어든 이유는?"]
              R --> H1["H1: 접근성이 나빠졌다"]
              R --> H2["H2: 흥미가 떨어졌다"]
              R --> H3["H3: 대체재가 생겼다"]
              H1 --> V1["검증: 방문자 수 추이"]
              H2 --> V2["검증: 장르별 대출 변화"]
              H3 --> V3["검증: 전자책/오디오북 이용률"]
              V1 --> R1["변화 없음 X"]
              V2 --> R2["특정 장르 급감 O"]
              V3 --> R3["이용 급증 O"]
            `}
          </div>
          <p>
            각 가설은 <strong>검증 가능한 지표</strong>를 갖는다. H1 이 기각되면
            H2·H3 에 집중 — 틀린 가설을 빠르게 버리는 게 목표다.
          </p>
          <p style={{ fontSize: "0.85em", color: "#aaa" }}>
            Issue Tree 가 "뭐가 있을까?" 라면, Hypothesis Tree 는 "이게 맞는가?"
            를 묻는다.
          </p>

        </Slide>
        <Slide>
          <Crumb>Part 4 · Logic Tree</Crumb>
          <h2>Issue Tree vs Hypothesis Tree</h2>
          <Head>
            가설 <em>없을 때</em> 발산, <em>있을 때</em> 수렴.
          </Head>
          <ul>
            <li>
              <strong>Issue Tree — 발산형</strong>: "어떤 하위 문제가 있을까?"
              문제 구조를 <em>탐색</em> 하는 도구
            </li>
            <li>
              <strong>Hypothesis Tree — 수렴형</strong>: "이게 원인일 것이다"
              를 세운 뒤, 검증 가능한 형태로 좁혀나간다. 가설을 <em>검증</em>{" "}
              하는 도구
            </li>
          </ul>
        </Slide>

        <Slide>
          <Crumb>Part 4 · Logic Tree</Crumb>
          <h2>3. 5 Whys</h2>
          <Head>
            "왜?" 를 반복하면 <em>근본 원인</em> 에 도달한다. 수직 탐색.
          </Head>
          <div className="mermaid">
            {`
            %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
            flowchart TD
              W1["왜? 대출 건수가 지난 분기 대비 감소"]
              W2["왜? 방문자가 원하는 책을 못 찾고 돌아간다"]
              W3["왜? 신간 입고가 느리다"]
              W4["왜? 예산이 베스트셀러 목록 중심으로 짜인다"]
              W5["왜? 수요 파악을 과거 대출 기록에만 의존한다"]
              R["근본 원인: 잠재 수요를 측정하는 체계가 없다"]
              W1 --> W2 --> W3 --> W4 --> W5 --> R
            `}
          </div>
          <p style={{ fontSize: "0.85em", color: "#aaa" }}>
            "숫자 5" 에 집착하지 말자. 핵심은{" "}
            <strong>"지금 보는 게 증상인가, 원인인가?"</strong> 를 계속 자문하는
            것. 3 번 만에 끝날 수도, 7 번 걸릴 수도 있다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 4 · Logic Tree</Crumb>
          <h2>4. Fishbone (Ishikawa)</h2>
          <Head>
            원인을 <em>카테고리별</em> 로 정리 — 협업에 강하다.
          </Head>
          <div className="mermaid">
            {`
            %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
            flowchart LR
              E["대출 건수 30% 감소"]
              ACC["접근성<br/>개관 시간 · 온라인 대출"] --> E
              COL["장서<br/>신간 · 인기 장르"] --> E
              PRM["홍보<br/>신간 안내 · SNS"] --> E
              PRG["프로그램<br/>독서 모임 · 큐레이션"] --> E
              ENV["환경<br/>공간 · 냉난방 · 조명"] --> E
            `}
          </div>
          <p>
            "사서는 장서 가지, 시설팀은 환경 가지, 홍보 담당은 홍보 가지" 식
            으로 <strong>역할 분배가 바로 된다</strong>.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 4 · Logic Tree</Crumb>
          <h2>5 Whys vs Fishbone</h2>
          <Head>한 줄기냐, 여러 영역이냐 — 가정이 다르다.</Head>
          <ul>
            <li>
              <strong>5 Whys — 수직, 단일 사슬</strong>: 하나의 인과 관계를
              따라 한 층씩 내려간다. 원인이 <em>한 줄기</em> 라고 가정할 때 강함
            </li>
            <li>
              <strong>Fishbone — 수평, 다중 카테고리</strong>: 여러 원인을
              카테고리별로 <em>동시에</em> 펼친다. 원인이{" "}
              <em>여러 영역에 분산</em> 되어 있을 때 강함
            </li>
          </ul>
          <p>
            실전 조합:{" "}
            <strong>
              Fishbone 으로 수색 범위를 정한 뒤, 가장 의심되는 가지에서 5 Whys
              로 파고든다.
            </strong>
          </p>
        </Slide>
      </Stack>

      {/* ═══ Part 4 · 가설 검증 ═══ */}
      <Stack>
        <Slide>
          <Crumb>Part 4 · 어엿한 엔지니어 · 가설 검증</Crumb>
          <h2>Breakable Toys</h2>
          <Head>
            완벽한 솔루션이 아니라, <em>부서도 괜찮은 프로토타입.</em>
          </Head>
          <blockquote>
            <p>
              <strong>"부서도 괜찮은 장난감을 만들어라."</strong>
            </p>
            <p>— Apprenticeship Patterns</p>
          </blockquote>
          <ul>
            <li>
              가설이 틀리면? <strong>좋은 소식</strong> — 틀린 방향을 빨리 배제
            </li>
            <li>가설이 맞으면? 그때 본격적으로 설계</li>
            <li>
              핵심: <strong>가설 → 실험 → 검증</strong> 사이클을 빠르게
            </li>
          </ul>
        </Slide>

        <Slide>
          <Crumb>Part 4 · 어엿한 엔지니어 · 가설 검증</Crumb>
          <h2>매몰 비용의 함정</h2>
          <Head>
            실무에서 Breakable Toys 를 못 하는 이유는 대부분 <em>심리</em> 다.
          </Head>
          <blockquote>"이미 3 일 걸렸는데 버리기 아깝다"</blockquote>
          <ul>
            <li>
              이것이 <strong>매몰 비용의 오류 (sunk cost fallacy)</strong>
            </li>
            <li>
              3 일짜리 프로토타입을 버리는 게,{" "}
              <strong>잘못된 방향으로 3 개월을 달리는 것</strong> 보다 훨씬 싸다
            </li>
            <li>
              한 번에 완벽한 답을 내려고 하지 말고, 작은 실험으로 방향을 잡자
            </li>
          </ul>
          <p>이것이 엔지니어링의 반복 (iteration) 이다.</p>
        </Slide>
      </Stack>

      {/* ═══ 실전 예시 ═══ */}
      <Cover
        part="4.5"
        title="실전 예시"
        lede="도구함을 실제 소프트웨어 문제에 적용해보자. 5 Whys · Issue Tree · Fishbone."
      />

      <Stack>
        <Slide>
          <Crumb>Part 4 · 실전 예시 1</Crumb>
          <h2>예시 1 — 작품 ID 버그</h2>
          <Head>
            표면 증상 뒤의 <em>의도 부재</em> 를 수직으로 파고든다.
          </Head>
          <blockquote>
            "작품 ID 123456789012345678 을 조회했는데 ...5680 이 나와요"
          </blockquote>
          <Code language="typescript">{`// 문제: JSON.parse → IEEE 754 double → 정밀도 손실
const id = "123456789012345678";
const parsed = JSON.parse(id);
console.log(parsed);
// 123456789012345680  ← 마지막 자릿수가 바뀐다!`}</Code>
        </Slide>

        <Slide>
          <Crumb>Part 4 · 실전 예시 1</Crumb>
          <h2>예시 1 — 근본 원인 추적 (5 Whys)</h2>
          <Head>
            float 저장이 원인이 아니라, <em>타입에 대한 의도 부재</em> 가
            원인이다.
          </Head>
          <div className="mermaid">
            {`
            %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
            flowchart TD
              W1["왜? 조회 ID 와 반환 ID 가 다르다"]
              W2["왜? ID 값이 어딘가에서 변형된다"]
              W3["왜? ID 를 float 으로 저장했다"]
              W4["왜? JSON.parse 가 number 로 파싱"]
              W5["왜? ID 필드 타입을 명시하지 않았다"]
              R["근본 원인: 설계 시 데이터 타입에 대한 의도 부재"]
              W1 --> W2 --> W3 --> W4 --> W5 --> R
            `}
          </div>
        </Slide>

        <Slide>
          <Crumb>Part 4 · 실전 예시 1</Crumb>
          <h2>예시 1 — 미감으로 포착하기</h2>
          <Head>
            소프트웨어에 대한 <em>미감</em> 이 있었다면, 구린 냄새를 먼저
            느꼈어야 한다.
          </Head>
          <ol>
            <li>
              <strong>id 가 너무 길다</strong> — 18 자리 숫자?
            </li>
            <li>
              <strong>그런데 숫자로 파싱한다</strong> — 숫자 범위를 넘어가진
              않을까?
            </li>
          </ol>
          <p>
            일단 구린 냄새가 난다. IEEE 754 / Number System 에 대해 생각해 볼
            수 있다면, 정확히 <strong>그 이유도</strong> 알 수 있다.
          </p>
          <p style={{ fontSize: "0.85em", color: "#aaa" }}>
            이런 내용은 향후 <em>절차와 순서</em> 에 대해 다룰 때 같이 다룬다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 4 · 실전 예시 2</Crumb>
          <h2>예시 2 — 매출 하락 (Issue Tree)</h2>
          <Head>매출 = 거래 건수 × 건당 단가. 이 축으로 MECE 분해한다.</Head>
          <div className="mermaid">
            {`
            %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
            flowchart TD
              R["매출 20% 하락"]
              R --> A["거래 건수 변화?"]
              R --> B["건당 매출 변화?"]
              A --> A1["신규 고객 유입 감소?"]
              A --> A2["기존 고객 재구매율 하락?"]
              A --> A3["이탈률 증가?"]
              B --> B1["평균 주문 금액 감소?"]
              B --> B2["할인/프로모션 영향?"]
              A1 --> D1["마케팅 채널별<br/>유입 데이터"]
              A2 --> D2["코호트별<br/>재구매 주기"]
              A3 --> D3["이탈 사유 서베이"]
              B1 --> D4["상품 카테고리별<br/>주문 금액"]
              B2 --> D5["프로모션 기간별<br/>매출 비교"]
            `}
          </div>
        </Slide>

        <Slide>
          <Crumb>Part 4 · 실전 예시 3</Crumb>
          <h2>예시 3 — API 오류율 (Fishbone)</h2>
          <Head>
            수평으로 펼쳐서 <em>팀 간 역할 분배</em> 에 바로 쓴다.
          </Head>
          <div className="mermaid">
            {`
            %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
            flowchart LR
              E["API 오류율 20%"]
              INF["인프라<br/>CPU · 메모리 · 네트워크"] --> E
              COD["코드<br/>최근 배포 · 타임아웃"] --> E
              DAT["데이터<br/>커넥션 풀 · 유입"] --> E
              EXT["외부<br/>3rd party · CDN"] --> E
              PRO["프로세스<br/>알람 · 롤백"] --> E
            `}
          </div>
          <p>
            "인프라는 정상인가? → 정상. 최근 배포가 있었나? → 있었다. → 배포
            내용 확인" — 패닉에 빠지지 않고 체계적으로 좁혀간다.
          </p>
        </Slide>
      </Stack>

      {/* ═══ Part 5 ═══ */}
      <Cover
        part="5"
        title="마치며"
        lede="Define → Divide → Conquer. AI 와 함께 일하는 방법을 한 줄로 줄이면."
      />

      <Stack>
        <Slide>
          <Crumb>Part 5 · 마치며</Crumb>
          <h2>Define → Divide → Conquer</h2>
          <Head>1, 2 는 사람. AI 는 3 에서 힘을 발휘한다.</Head>
          <ol>
            <li>
              <strong>Define</strong> — 문제를 정의한다 (Gap 분석)
            </li>
            <li>
              <strong>Divide</strong> — 문제를 분해한다 (Logic Tree)
            </li>
            <li>
              <strong>Conquer</strong> — 분해된 하위 문제를 AI 와 함께 해결한다
            </li>
          </ol>
          <p>
            1 번은 사람이 해야 한다. 2 번은 AI 도움을 받을 수 있겠지만 결국
            사람이 해야 한다. 잘 정의되고 잘 분해된 문제에 대해서는 AI 가
            놀라울 정도로 잘 답한다.
          </p>
          <p>
            하지만 문제를 잘못 정의하면? AI 는{" "}
            <strong>잘못된 문제를 아주 유창하게 풀어줄 뿐이다.</strong>
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 5 · 마치며</Crumb>
          <h2>엔지니어링 감각</h2>
          <Head>
            좋은 엔지니어 = AI 에게 <em>좋은 질문</em> 을 던질 수 있는 사람.
          </Head>
          <blockquote>
            <p>
              엔지니어링 감각이 없으면 AI 에게 <strong>좋은 질문</strong>을 할
              수 없다.
            </p>
            <p>
              엔지니어링 감각이 없으면 AI 가 가지고 온 결과물을{" "}
              <strong>판단</strong>할 수 없다.
            </p>
          </blockquote>
          <p>
            좋은 질문 = 문제를 정확히 정의하고, 적절히 분해하고, 제약을
            명시하고, 검증 기준을 제시하는 것.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 5 · 마치며</Crumb>
          <h2>에필로그 — 이 강의 노트는 어떻게 만들어졌나</h2>
          <Head>
            본 강의 노트 자체가 <em>Define → Divide → Conquer</em> 의 살아있는
            예시.
          </Head>
          <ul>
            <li>
              <strong>Define</strong> — 1 장 내용과 얼개는 필자가 직접
              선정/구성
            </li>
            <li>
              <strong>Divide</strong> — 얼개를 AI 에게 리뷰시키고 빈틈을 메꿨다.
              bun / typescript / docusaurus / reveal.js 의 멀티모듈 레포 결정은
              필자, 구현은 AI
            </li>
            <li>
              <strong>Conquer</strong> — 글 절반은 AI, 나머지 절반은 필자. 이후
              코드와 글을 다시 읽고 손봄
            </li>
          </ul>
          <p>
            → 지금 시점에서는,{" "}
            <strong>
              <span style={{ color: "#fbbf24" }}>
                문제 정의와 구조 판단을 사람이 쥐고 있어야
              </span>
            </strong>{" "}
            비로소 의미 있는 결과물이 나왔다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 5 · 마치며</Crumb>
          <h2>다음 강의 주제들</h2>
          <Head>
            이어지는 장은 <em>소프트웨어 엔지니어링 세부</em> 미감 포인트들.
          </Head>
          <p style={{ color: "#aaa" }}>
            한 장씩 예고편을 돌려본다. 각 주제는 이후 장에서 따로 다룬다.
          </p>
        </Slide>

        <Slide>
          <Crumb>Part 5 · 마치며 · 다음 강의</Crumb>
          <h3>절차와 순서, 그리고 흐름</h3>
          <Head>
            마법은 없다. 프로그램이 동작하려면 누군가는 무언가를 챙기고 있어야
            한다.
          </Head>
          <ul>
            <li>프로토콜, 예외, 시스템 흐름</li>
            <li>협업과 경계 넘기</li>
            <li>"왜 지금 이 순서로 일어나는가?" 를 읽는 감각</li>
          </ul>
        </Slide>

        <Slide>
          <Crumb>Part 5 · 마치며 · 다음 강의</Crumb>
          <h3>중복과 재사용</h3>
          <Head>어디까지는 복붙하고, 어디부터는 가져다 쓸까?</Head>
          <ul>
            <li>객체, 상속, 함수형, 구성(composition)</li>
            <li>인터페이스와 경계</li>
            <li>"일찍 추상화" 와 "성급한 추상화" 사이의 선 긋기</li>
          </ul>
        </Slide>

        <Slide>
          <Crumb>Part 5 · 마치며 · 다음 강의</Crumb>
          <h3>의미 단위</h3>
          <Head>
            어디서부터 어디까지를 "나" 라고 부를 수 있는가? 코드에서 이름을
            지어준다는 것.
          </Head>
          <ul>
            <li>코드 쪼개기, 상태(state)</li>
            <li>field presence, 일관성</li>
            <li>복잡도(complexity) 의 실제 모양</li>
          </ul>
        </Slide>

        <Slide>
          <Crumb>Part 5 · 마치며 · 다음 강의</Crumb>
          <h3>도구</h3>
          <Head>소프트웨어 엔지니어가 접하는 도구들의 작동 방식.</Head>
          <ul>
            <li>기계와 연결 — 그 아래에서 무슨 일이 일어나는가</li>
            <li>깃, 셸, 환경 변수</li>
            <li>도커, 쿠버네티스</li>
          </ul>
        </Slide>

        <Slide>
          <Crumb>Part 5 · 마치며 · 다음 강의</Crumb>
          <h3>트레이드오프</h3>
          <Head>
            엄마가 좋아? 아빠가 좋아? 선택을 해야 한다. 선택에 후회는 없어야
            한다.
          </Head>
          <ul>
            <li>스루풋 vs 레이턴시</li>
            <li>속도 vs 크기</li>
            <li>CAP 과 분산 시스템의 제약</li>
          </ul>
        </Slide>

        <Slide>
          <Crumb>Part 5 · 마치며 · 다음 강의</Crumb>
          <h3>강건함</h3>
          <Head>고객이 또 뭔가 바꿔달라 했다. 괜찮을까?</Head>
          <ul>
            <li>테스트 — 무엇을, 어떤 수준으로</li>
            <li>호환성과 무중단 배포</li>
            <li>변화 앞에서 무너지지 않는 설계</li>
          </ul>
        </Slide>
      </Stack>

      {/* ═══ End ═══ */}
      <Slide>
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <h1 style={{ fontSize: "3em" }}>End of Doc.</h1>
          <p style={{ color: "#888", marginTop: "40px" }}>
            질문은 언제든 환영합니다.
          </p>
        </div>
      </Slide>
    </>
  );
}
