import { Slide, Stack, Code, Markdown } from "@revealjs/react";

export default function Ch01() {
  return (
    <>
      {/* ── 인트로 ── */}
      <Slide>
        <h1>들어가기</h1>
        <p>A Sense of Engineering</p>
      </Slide>

      <Slide>
        <h2>자기소개</h2>
        <blockquote>멘토가 직접 작성</blockquote>
        <div className="mermaid">
        {
          `
          %%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%
          flowchart LR
            A[Start] --> B{Is it?};
            B -- Yes --> C[OK];
            C --> D[Rethink];
            D --> B;
            B -- No ----> E[End];
          `
        }
        </div>
      </Slide>

      {/* ── 엔지니어링이란 ── */}
      <Stack>
        <Slide>
          <h2>엔지니어링?</h2>
          <blockquote className="r-fit-text">
            <p>
              Engineering is the application of scientific, mathematical, and
              practical knowledge to design, build, and maintain structures,
              machines, systems, and processes that solve problems or meet human
              needs.
            </p>
            <p>
              What unites all branches is a shared methodology:{" "}
              <strong>identifying a problem, understanding the constraints</strong>
              , <strong>designing a solution, testing it, and iterating</strong>{" "}
              until it works reliably.
            </p>
            <p>— Claude</p>
          </blockquote>
        </Slide>

        <Slide>
          <h2>엔지니어링의 방법론</h2>
          <ol>
            <li><strong>문제 식별</strong> — 무엇이 문제인지 안다</li>
            <li><strong>제약 이해</strong> — 비용, 안전, 시간, 자원의 한계를 안다</li>
            <li><strong>설계</strong> — 제약 안에서 해법을 구상한다</li>
            <li><strong>테스트</strong> — 해법이 동작하는지 검증한다</li>
            <li><strong>반복</strong> — 안 되면 고치고, 다시 돌린다</li>
          </ol>
        </Slide>

        <Slide>
          <h2>AI foil</h2>
          <blockquote>
            <p>"방금 Claude에게 엔지니어링 정의를 물어봤다."</p>
            <p>정의를 잘 말해준다.</p>
          </blockquote>
          <p><strong>"정의를 안다는 것과 엔지니어링을 한다는 것은 같은가?"</strong></p>
        </Slide>
      </Stack>

      {/* ── 소프트웨어 엔지니어링 ── */}
      <Stack>
        <Slide>
          <h2>소프트웨어 엔지니어링</h2>
          <blockquote>
            <p><strong>"Software engineering is programming integrated over time."</strong></p>
            <p>소프트웨어 엔지니어링은 시간으로 적분된 프로그래밍이다.</p>
            <p>— Software Engineering at Google</p>
          </blockquote>
          <table>
            <thead>
              <tr><th></th><th>프로그래밍</th><th>소프트웨어 엔지니어링</th></tr>
            </thead>
            <tbody>
              <tr><td>목표</td><td><strong>지금</strong> 돌아가게 만든다</td><td><strong>시간이 지나도</strong> 돌아가게 만든다</td></tr>
              <tr><td>시간 축</td><td>순간 (t=0)</td><td>적분 (∫dt)</td></tr>
              <tr><td>성공 기준</td><td>"돌아간다"</td><td>"계속 돌아간다"</td></tr>
            </tbody>
          </table>
        </Slide>

        <Slide>
          <h2>시간이 야기하는 문제들</h2>
          <ul>
            <li><strong>누적되는 유지보수</strong> — 의존성 업데이트, OS 변경, 보안 취약점</li>
            <li><strong>트래픽 증가</strong> — 100명 → 10만 명, 1GB → 1TB</li>
            <li><strong>누적되는 컨텍스트</strong> — 작성자 퇴사, 의도 소실, "왜 이렇게 짰는지 아무도 모른다"</li>
          </ul>
        </Slide>
      </Stack>

      {/* ── AI와 모델 ── */}
      <Stack>
        <Slide>
          <h2>모델이란?</h2>
          <p><strong>모델 = 실제 현상과 결과를 피팅하는 작업</strong></p>
          <ul>
            <li>입력 → 출력 관계를 수학적으로 근사</li>
            <li>본질: <strong>matrix multiplication의 집합</strong></li>
            <li>행렬 곱 → 비선형 함수 → 행렬 곱 → ... (수백 레이어)</li>
            <li>파라미터를 데이터에 맞춰 조정 = <strong>학습(training)</strong></li>
          </ul>
        </Slide>

        <Slide>
          <h2>분포 가설</h2>
          <blockquote>
            <p><strong>"비슷한 맥락에서 등장하는 단어는 비슷한 의미를 가진다."</strong></p>
            <p>— Distributional Hypothesis</p>
          </blockquote>
          <p>"고양이는 <strong>_</strong>에서 잔다" ≈ "강아지는 <strong>_</strong>에서 잔다"</p>
          <p>→ 언어 모델 = <strong>인류가 쓴 텍스트의 통계적 분포를 압축한 것</strong></p>
        </Slide>

        <Slide>
          <h2>말하는 백과사전</h2>
          <blockquote>현재의 AI는 <strong>"말하는 백과사전"</strong>에 가깝다.</blockquote>
          <ul>
            <li>엄청나게 많이 알고 있고, 유창하게 대답한다</li>
            <li>하지만 <strong>백과사전이 문제를 해결하지는 않는다</strong></li>
            <li>백과사전은 참고하는 것이다</li>
          </ul>
        </Slide>

        <Slide>
          <h2>ARC-AGI-3</h2>
          <p>규칙 없음 · 목표 없음 · 언어 힌트 없음</p>
          <p>64x64 그리드에 에이전트를 떨어뜨려 스스로 탐색</p>
          <table>
            <thead>
              <tr><th></th><th>점수</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Human</strong></td><td><strong>100%</strong></td></tr>
              <tr><td>Gemini 3.1</td><td>0.37%</td></tr>
              <tr><td>GPT-5.4</td><td>0.26%</td></tr>
              <tr><td>Opus 4.6</td><td>0.25%</td></tr>
              <tr><td>Grok-4.20</td><td>0%</td></tr>
              <tr><td>30일 최고점 (엔지니어링된 에이전트)</td><td>12.58%</td></tr>
            </tbody>
          </table>
        </Slide>

        <Slide>
          <h2>AI의 비용</h2>
          <p>추정 operational cost (1M 토큰):</p>
          <table>
            <thead>
              <tr><th>모델</th><th>추정 운영 비용</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td>Haiku (경량)</td><td>~$1.25</td><td>간단한 태스크용</td></tr>
              <tr><td>Opus (대형)</td><td>$50 ~ $125</td><td>Haiku 대비 100~200배</td></tr>
              <tr><td>Mythos (차세대)</td><td>$125 ~ $180</td><td>추정치, 변수 많음</td></tr>
            </tbody>
          </table>
          <blockquote>"아편전쟁으로 치면 지금은 아편을 푸는 단계다."</blockquote>
        </Slide>
      </Stack>

      {/* ── 의도 ── */}
      <Slide>
        <h2>의도</h2>
        <p>엔지니어만이 다루는 문제 5가지:</p>
        <ol>
          <li><strong>추상화</strong> — 어디까지 단순화할 것인가</li>
          <li><strong>모델링</strong> — 현실을 소프트웨어로 어떻게 표현할 것인가</li>
          <li><strong>의도 표현</strong> — 코드가 "왜" 이런 모양인지</li>
          <li><strong>트레이드오프</strong> — 속도 vs 품질, 단기 vs 장기</li>
          <li><strong>변화 대응</strong> — 요구사항이 바뀌면 기존 설계를 어떻게 진화시키나</li>
        </ol>
        <p>집을 살까? 채권? 예금? — <strong>정답 없음, 결정은 AI가 하지 않는다</strong></p>
      </Slide>

      {/* ── 휴식 ── */}
      <Slide>
        <h2>휴식 + Q&amp;A</h2>
        <p>15분 쉬면서 질문 받겠습니다.</p>
        <p>지금까지 이야기한 내용 중 궁금한 거, 반론, 아무거나 좋습니다.</p>
      </Slide>

      {/* ── 문제 해결 프레임워크 ── */}
      <Stack>
        <Slide>
          <h2>Gap 분석</h2>
          <Code language="">{`현재 상태 (As-Is)  ──→  GAP  ──→  희망 상태 (To-Be)`}</Code>
          <p><strong>GAP = 문제</strong></p>
          <ul>
            <li>"안 읽어요"는 불만</li>
            <li>현재와 희망 사이의 Gap을 명시하면 → 비로소 "무엇을 해결할지"가 보인다</li>
          </ul>
        </Slide>

        <Slide>
          <h2>예시: 도서관</h2>
          <table>
            <thead>
              <tr><th></th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td>현재 상태</td><td>도서관 운영자인데, 사람들이 책을 잘 안 읽는다</td></tr>
              <tr><td>희망 상태</td><td>사람들이 책을 더 많이 읽었으면 좋겠다</td></tr>
              <tr><td><strong>GAP</strong></td><td><strong>사람들이 책을 더 많이 읽게 만들어야 한다</strong></td></tr>
            </tbody>
          </table>
          <p>→ Gap이 정의되면: <strong>왜 이 Gap이 존재하는가?</strong></p>
        </Slide>

        <Slide>
          <h2>Logic Tree</h2>
          <p><strong>문제를 체계적으로 분해하는 도구</strong></p>
          <p>핵심 원칙: MECE</p>
        </Slide>

        <Slide>
          <h2>MECE</h2>
          <p><strong>Mutually Exclusive, Collectively Exhaustive</strong></p>
          <ul>
            <li>상호 배타 — 각 가지가 겹치지 않는다</li>
            <li>전체 포괄 — 모든 가지를 합치면 전체를 커버한다</li>
          </ul>
          <table>
            <thead>
              <tr><th>non-MECE</th><th>MECE</th></tr>
            </thead>
            <tbody>
              <tr><td>마케팅 문제</td><td>거래 건수 감소 → 신규↓ / 기존 이탈↑</td></tr>
              <tr><td>제품 품질 문제</td><td>건당 단가 하락 → 할인↑ / 저단가 비중↑</td></tr>
              <tr><td>신규 유저 감소 ← 겹침!</td><td></td></tr>
            </tbody>
          </table>
        </Slide>

        <Slide>
          <h2>4가지 Logic Tree</h2>
          <ol>
            <li><strong>Issue Tree</strong> — 문제를 하위 이슈로 분해</li>
            <li><strong>Hypothesis Tree</strong> — 검증 가능한 가설로 분해</li>
            <li><strong>5 Whys</strong> — "왜?"를 5번 반복 → 근본 원인</li>
            <li><strong>Fishbone</strong> — 원인을 카테고리별로 정리</li>
          </ol>
        </Slide>
      </Stack>

      {/* ── 가설 검증과 예시 ── */}
      <Stack>
        <Slide>
          <h2>가설 검증</h2>
          <blockquote>
            <p><strong>"부서도 괜찮은 장난감(Breakable Toys)을 만들어라."</strong></p>
            <p>— Apprenticeship Patterns</p>
          </blockquote>
          <ul>
            <li>완벽한 솔루션이 아니라, <strong>가설이 맞는지 확인하는 프로토타입</strong></li>
            <li>틀리면? 좋은 소식 — 틀린 방향을 빨리 배제</li>
            <li><strong>가설 → 실험 → 검증</strong> 사이클을 빠르게</li>
          </ul>
        </Slide>

        <Slide>
          <h2>예시 1: 작품 ID 버그</h2>
          <blockquote>"작품 ID 123456789012345678을 조회했는데 ...5680이 나와요"</blockquote>
          <Code language="typescript">{`// 문제: number 타입으로 파싱 → 정밀도 손실
const data = JSON.parse('{"id": 123456789012345678}');
console.log(data.id);
// 123456789012345680  ← 마지막 자릿수가 바뀐다!`}</Code>
          <p><strong>5 Whys →</strong> ID를 float으로 저장 → 타입을 명시하지 않음 → <strong>의도 부재</strong></p>
        </Slide>

        <Slide>
          <h2>예시 1: 올바른 접근</h2>
          <Code language="typescript">{`// 해결: ID를 문자열로 다룬다
const data = JSON.parse('{"id": "123456789012345678"}');
console.log(data.id);
// "123456789012345678"  ← 안전`}</Code>
          <p>근본 원인: "float으로 저장한 것"이 아니라 <strong>설계 시 데이터 타입에 대한 의도가 없었던 것</strong></p>
        </Slide>

        <Slide>
          <h2>예시 2: 매출 하락</h2>
          <blockquote>매출 = 거래 건수 x 건당 단가</blockquote>
          <p>Issue Tree로 분해:</p>
          <Code language="">{`매출 20% 하락
 ├─ 거래 건수 감소?
 │   ├─ 신규 고객 유입 감소?
 │   ├─ 기존 고객 재구매율 하락?
 │   └─ 이탈률 증가?
 └─ 건당 매출 감소?
     ├─ 평균 주문 금액 감소?
     └─ 할인/프로모션 영향?`}</Code>
        </Slide>

        <Slide>
          <h2>예시 3: API 오류율</h2>
          <blockquote>"API 오류율이 갑자기 20%가 되었습니다."</blockquote>
          <p>Fishbone 카테고리:</p>
          <ul>
            <li><strong>인프라</strong> — 서버 CPU/메모리, 네트워크(DNS, LB)</li>
            <li><strong>코드</strong> — 최근 배포 버그, 타임아웃 설정 변경</li>
            <li><strong>데이터</strong> — DB 커넥션 풀 고갈, 잘못된 데이터 유입</li>
            <li><strong>외부</strong> — 서드파티 API 장애, CDN 이슈</li>
            <li><strong>프로세스</strong> — 모니터링 알람 누락, 롤백 절차 부재</li>
          </ul>
        </Slide>
      </Stack>

      {/* ── 정리 ── */}
      <Stack>
        <Slide>
          <h2>Define → Divide → Conquer</h2>
          <ol>
            <li><strong>Define</strong> — 문제를 정의한다 (Gap 분석)</li>
            <li><strong>Divide</strong> — 문제를 분해한다 (Logic Tree)</li>
            <li><strong>Conquer</strong> — 분해된 하위 문제를 AI와 함께 해결한다</li>
          </ol>
          <p>1, 2는 사람이 한다. AI는 3에서 힘을 발휘한다.</p>
          <p>잘못 정의하면? AI는 <strong>잘못된 문제를 유창하게 풀어줄 뿐</strong>이다.</p>
        </Slide>

        <Slide>
          <h2>엔지니어링 감각</h2>
          <blockquote><strong>"엔지니어링 감각 = AI에게 좋은 질문을 하는 능력"</strong></blockquote>
          <p>좋은 질문 = 문제를 정확히 정의하고, 적절히 분해하고, 제약을 명시하고, 검증 기준을 제시하는 것</p>
        </Slide>
      </Stack>

      {/* ── 마무리 ── */}
      <Stack>
        <Slide>
          <h2>연강 주제</h2>
          <ul>
            <li>의도와 의심, 그리고 판단 — 가설과 검증</li>
            <li>절차와 순서, 그리고 흐름 — 프로토콜, 예외, 시스템 흐름</li>
            <li>도구 잘 다루기 — 깃, 셸, 기계</li>
            <li>테스트 — 왜, 어떻게, 얼마나</li>
            <li>리뷰 — 코드를 읽는 눈</li>
            <li>의미 단위 — 상태, field presence, 일관성, 복잡도</li>
            <li>코드 재사용 — 객체, 상속, 함수형, 구성, 인터페이스</li>
            <li>트레이드오프 — 스루풋 vs 레이턴시, 품질 vs 속도</li>
            <li>호환성과 무중단 — 변경해도 깨지지 않는 시스템</li>
          </ul>
        </Slide>

        <Slide>
          <h2>마치며</h2>
          <blockquote>멘토가 직접 작성 (설문 링크 포함)</blockquote>
        </Slide>
      </Stack>
    </>
  );
}
