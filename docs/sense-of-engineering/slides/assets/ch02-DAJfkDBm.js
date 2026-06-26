import{j as e,w as s,n as l,U as i}from"./index-B2Y-2TBV.js";const u={position:"absolute",top:"12px",left:"24px",fontSize:"0.7em",color:"#777",letterSpacing:"0.12em",textTransform:"uppercase"},p={fontSize:"0.72em",color:"#42affa",fontStyle:"italic",margin:"-6px 0 18px 0",borderLeft:"3px solid #42affa",padding:"4px 0 4px 12px",textAlign:"left"},o={fontSize:"0.55em",color:"#888",letterSpacing:"0.18em",textTransform:"uppercase",marginBottom:"12px"},a={fontSize:"0.8em",color:"#bbb",marginTop:"24px",maxWidth:"80%",marginLeft:"auto",marginRight:"auto",lineHeight:1.5},x={color:"#fbbf24"},c={fontSize:"0.85em",color:"#aaa"},f={fontSize:"0.8em",color:"#bbb",borderLeft:"3px solid #555",padding:"2px 0 2px 12px",textAlign:"left"};function r({children:h}){return e.jsx("div",{style:u,children:h})}function n({children:h}){return e.jsx("p",{style:p,children:h})}function d({part:h,title:g,lede:j}){return e.jsxs(s,{children:[e.jsxs("div",{style:o,children:["Ch 2 · Part ",h]}),e.jsx("h2",{children:g}),j&&e.jsx("p",{style:a,children:j})]})}function y(){return e.jsx(s,{children:e.jsxs("div",{style:{textAlign:"center",padding:"60px 0"},children:[e.jsx("div",{style:{fontSize:"0.7em",color:"#888",letterSpacing:"0.3em"},children:"─── BREAK ───"}),e.jsx("h1",{style:{fontSize:"3.2em",margin:"40px 0 20px 0"},children:"휴식"}),e.jsx("p",{style:{color:"#aaa",fontSize:"0.85em"},children:'정확한 절차의 절반까지 봤다. 돌아와서 예외와 "빠른 절차"를 본다.'})]})})}const t="%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true }}}%%";function S(){return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx("div",{style:o,children:"Chapter 2"}),e.jsx("h1",{children:"Procedure and Order"}),e.jsx("p",{style:{fontSize:"1.2em",color:"#ccc"},children:"절차와 순서"}),e.jsxs("p",{style:a,children:["프로그램은 결국 ",e.jsx("strong",{children:"절차"}),'다. 좋은 절차는 단순하고, 빈틈이 없고, 효율적이다. 프로토콜 · 자원과 오너십 · 예외 · 배칭이라는 네 개의 렌즈로 "절차의 미감"을 들여다본다.']})]}),e.jsxs(s,{children:[e.jsx("h2",{children:"Contents"}),e.jsxs("ol",{style:{fontSize:"0.95em",lineHeight:1.7},children:[e.jsx("li",{children:"프로그래밍이라는 말 — 절차의 미감"}),e.jsx("li",{children:"프로토콜 — 단순하고 빈틈없는 약속"}),e.jsx("li",{children:"자원과 오너십 — 주인이 하나이고, 반드시 치워지는가"}),e.jsx("li",{style:{color:"#888"},children:e.jsx("em",{children:"— 휴식 —"})}),e.jsx("li",{children:"예외 — 빨리, 시끄럽게, 책임지고 받는가"}),e.jsx("li",{children:"배칭과 풀링 — 고정 비용을 나눠 부담하는가"}),e.jsx("li",{children:"마치며 — 마법은 없다 / AI 시대의 엔지니어"})]})]}),e.jsx(d,{part:"1",title:"프로그래밍이라는 말",lede:"'프로그램'은 코드만의 것이 아니다. 방송의 진행 순서, 공연의 차례 — 무언가의 진행 목록이자 순서다. 코드의 절차는 현실의 절차와 다르지 않다."}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 1 · 프로그래밍이라는 말"}),e.jsx("h2",{children:"프로그램 = 명령어의 집합"}),e.jsx(n,{children:'"무엇을 어떤 순서로 할 것인가." 은행 번호표, 병원 입원, 택배 — 다 절차 설계다.'}),e.jsxs("ul",{children:[e.jsx("li",{children:"방송 → 진행 순서"}),e.jsx("li",{children:"공연 → 차례"}),e.jsxs("li",{children:["컴퓨터 → ",e.jsx("strong",{children:"명령어의 집합"})]})]}),e.jsxs("p",{children:["그래서 이 장의 내용은 현실과 다르지 않다. 매일 겪는 절차 — 번호표를 뽑고, 입원하고, 택배를 부치는 일 — 의 설계 원리가 그대로 코드에 적용된다. 주제는 ",e.jsx("strong",{children:"절차를 어떻게 설계하는가"}),"."]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 1 · 프로그래밍이라는 말"}),e.jsx("h2",{children:"절차의 미감 — 두 축"}),e.jsx(n,{children:"이번 장 내내 같은 두 질문으로 절차를 평가한다."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"상식적인가?"}),' — 처음 보는 사람도 "아, 그렇게 흘러가겠구나"를 예측할 수 있는가']}),e.jsxs("li",{children:[e.jsx("strong",{children:"단순한가?"})," — 군더더기 없이, 꼭 필요한 단계만 있는가"]})]}),e.jsx("p",{style:c,children:"아름답지 않은 절차의 증상: ① 사람을 화나게 한다 (같은 정보 3번 입력시키는 가입 절차) ② 이해가 안 간다 (왜 이 단계가 필요한지 아무도 모름)."})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 1 · 프로그래밍이라는 말"}),e.jsx("h2",{children:"Fedex — 절차 하나로 세운 회사"}),e.jsx(n,{children:"이긴 건 더 좋은 트럭·비행기가 아니라 더 나은 절차였다."}),e.jsxs("blockquote",{style:{fontSize:"0.85em"},children:["창업자 ",e.jsx("strong",{children:"프레드 스미스"}),"가 학생 시절 스케치한 아이디어: 모든 화물을 일단 ",e.jsx("strong",{children:"중앙 허브 한 곳(멤피스)"}),"으로 모아 밤사이 분류한 뒤 목적지로 다시 내보낸다."]}),e.jsx("div",{className:"mermaid",children:`
${t}
flowchart TD
  subgraph nohub["❌ 직항 (N×N 노선)"]
    A1["도시 A"] <--> B1["도시 B"]
    A1 <--> C1["도시 C"]
    B1 <--> C1
    A1 <--> D1["도시 D"]
  end
  subgraph hub["✅ 허브 배칭 (N 노선)"]
    H(("HUB<br/>멤피스"))
    A2["도시 A"] <--> H
    B2["도시 B"] <--> H
    C2["도시 C"] <--> H
    D2["도시 D"] <--> H
  end
  style nohub fill:#1a0808,stroke:#ff6b6b,color:#ff9a9a
  style hub fill:#081a0f,stroke:#4ade80,color:#86efac
  style H fill:#0f2e1a,stroke:#fbbf24,stroke-width:3px,color:#fde68a
`}),e.jsxs("p",{children:["옆 도시 짐도 멀리 돌지만, 이 절차가 처음으로"," ",e.jsx("strong",{children:'"전국 어디든 익일 배송"'}),"을 가능케 했다. 승부를 가른 건 ",e.jsx("strong",{children:"무엇을 어떤 순서로 할지"}),"다. (배칭에서 다시 만난다)"]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 1 · 프로그래밍이라는 말"}),e.jsx("h2",{children:"나폴레옹 군대의 트리아지 — 누구를 먼저 살릴 것인가"}),e.jsx(n,{children:"먼저 온 순서(FIFO)? 계급순? 라레이는 절차를 뒤집었다."}),e.jsxs("p",{children:["1790년대 수석 군의관 ",e.jsx("strong",{children:"도미니크 장 라레이"}),"는 계급·도착 순서를 무시하고 오직 ",e.jsx("strong",{children:"부상의 심각도와 생존 가능성"}),"으로만 환자를 분류(triage)했다."]}),e.jsxs("ul",{style:{fontSize:"0.85em"},children:[e.jsx("li",{children:"즉시 수술 안 하면 죽는 환자 — 최우선"}),e.jsx("li",{children:"기다려도 지장 없는 환자 — 대기"}),e.jsx("li",{children:"가망 없는 환자 — 진통제만"})]}),e.jsxs("p",{children:["프로그래밍의 ",e.jsx("strong",{children:"우선순위 큐(Priority Queue)"}),"의 현실판. 좋은 프로그램은 모든 요청을 똑같이 대하지 않는다 — 무엇이 급한지, 무엇을 버릴지 ",e.jsx("strong",{children:"절차의 우선순위"}),"를 안다."]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 1 · 프로그래밍이라는 말"}),e.jsx("h2",{children:"헨리 포드의 조립 라인 — 움직이는 것은 누구인가"}),e.jsx(n,{children:'사람이 차 주위를 돌까, 차가 사람 앞으로 올까? "누가 움직이는가"만 바꿨다.'}),e.jsx("p",{children:"초기 공장은 작업자가 섀시 주위를 맴돌며 조립했다(사람이 데이터를 쫓아다님). 헨리 포드는 1913년 주객을 전도시킨다 — 작업자는 제자리, 자동차가 컨베이어 벨트를 타고 사람 앞으로 온다."}),e.jsxs("p",{children:["모델 T 조립 시간이 ",e.jsx("strong",{children:"12시간 → 1시간 30분"}),". 프로그래밍의"," ",e.jsx("strong",{children:"제어의 역전(IoC)"}),"과 같다 — 프레임워크(벨트)가 데이터를 흘려보내고 나는 내 역할만 수행. 절차가 단순해지자"," ",e.jsx("strong",{children:"처리량(throughput)"}),"이 폭발했다."]})]})]}),e.jsx(d,{part:"2",title:"프로토콜",lede:"둘 이상의 주체가 무엇을 어떤 순서로 주고받을지 미리 정한 약속. 좋은 약속을 가르는 축은 둘 — 단순한가, 그리고 빈틈 없는가."}),e.jsx(l,{children:e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜"}),e.jsx("h2",{children:"프로토콜이란?"}),e.jsx(n,{children:"핵심은 순서와 사전 합의. 모르면 — 정당해 보여도 — 통과 못 한다."}),e.jsx("p",{children:'은행 번호표("먼저 온 사람이 먼저"), 택배 운송장(보내는 사람·받는 사람·내용물을 정해진 양식으로) — 다 프로토콜이다.'}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"그림판 파일 열기:"})," ",e.jsx("code",{children:".txt"}),"→메모장,"," ",e.jsx("code",{children:".png"}),'→그림판. OS-앱 간 "이 확장자는 이 프로그램"이라는 약속']}),e.jsxs("li",{children:[e.jsx("strong",{children:"병원 입원:"})," 접수 → 진료 → 수속 → 병실 → 처치. 단계마다 넘기는 정보(차트·동의서·보험)가 정해짐. 하나 건너뛰면 막힘"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"초병의 수하:"}),' 초병이 "천둥" 하면 상대는 약속된 암구호 "번개"로 받는다. 짝이 안 맞으면 저지']})]})]})}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜 · 단순한가"}),e.jsx("h2",{children:"① 왕복 횟수 — 꼭 필요한 만큼인가"}),e.jsx(n,{children:"빈틈을 닫는 데 필요한 최소 횟수가 정확히 3번. 더도 덜도 아니다."}),e.jsx("div",{className:"mermaid",children:`
${t}
sequenceDiagram
  participant C as Client
  participant S as Server
  C->>S: SYN (나 연결할게)
  S->>C: SYN-ACK (그래, 나도 준비됨)
  C->>S: ACK (좋아, 시작하자)
  Note over C,S: 연결 수립 — 이제 데이터 전송
`}),e.jsxs("p",{children:['"내가 보낼 수 있다" + "네가 받을 수 있다"를 ',e.jsx("strong",{children:"양쪽 모두"})," ","확인해야 빈틈이 없다. 1번이면 상대가 들었는지 모르고, 4·5번은 군더더기다. 이게 단순함이다. ✅"]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜 · 단순한가"}),e.jsx("h2",{children:"② 무상태 — 너를 기억하지 않아도 되는가"}),e.jsx(n,{children:"직관과 반대로, 상태를 안 들고 있는(stateless) 프로토콜이 더 아름답다."}),e.jsxs("ul",{children:[e.jsxs("li",{children:["HTTP: 모든 요청이 ",e.jsx("strong",{children:"자기 자신만으로 완결"})," (누구인지 · 무엇을 원하는지를 매번 담아 옴)"]}),e.jsx("li",{children:'서버는 "아까 그 사람"을 기억할 필요 없음 → 아무 서버나 처리, 한 대가 죽고 다른 대가 이어받아도 흐름이 안 끊김'})]}),e.jsx(i,{language:"typescript",children:`// ❌ 세션을 서버 '메모리'에 들면 → 그 한 대에 묶인다
const serverA = { sessions: { tok_123: "alice" } };
const serverB = { sessions: {} };          // 늘려 띄운 두 번째 인스턴스

// 로드밸런서가 alice 의 '다음' 요청을 serverB 로 보낸다
serverB.sessions["tok_123"];               // undefined
// → 로그인했는데 로그아웃된 것처럼 보인다 (sticky session 으로 묶여야 함)`}),e.jsxs("p",{style:c,children:["무상태로 바꾸면? 토큰 자체가 신원을 담는다(서명된 JWT). 어느 서버든",e.jsx("strong",{children:" 토큰만 검증"}),"하면 되고, 누구의 세션도 기억할 필요가 없다. 더 단순하고 더 잘 버틴다. ✅"]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜 · 단순한가"}),e.jsx("h2",{children:"③ 단방향 — 한 방향으로만 흐르는가"}),e.jsx(n,{children:"이벤트는 위로, 상태는 아래로. 데이터가 한 바퀴 정해진 방향으로만 돈다."}),e.jsxs("ul",{style:{fontSize:"0.85em"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"예측 가능:"})," 양방향은 A→B→A 핑퐁(무한 루프). 단방향엔 그 고리가 없다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SSoT:"}),' 상태는 한 곳. 뷰는 "바꿔달라"고 요청만 한다']}),e.jsxs("li",{children:[e.jsx("strong",{children:"추적 가능:"})," 값이 틀리면 스트림을 거꾸로 한 번만 따라가면 된다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"디커플링:"})," 바꾸는 로직은 그리는 UI를 몰라도 된다"]})]}),e.jsx(i,{language:"typescript",children:`// 데이터는 Action → State → View 의 원을 한 방향으로만 돈다
function dispatch(action) {           // 상태를 바꾸는 유일한 통로 (좁은 문)
  if (action.type === "INCREMENT") state.count += 1;
  render();                           // VIEW 는 state 를 '읽기만' 한다
}
// count 가 틀리면? 볼 곳은 dispatch 단 하나.`})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜 · 단순한가"}),e.jsx("h2",{children:"단방향 vs 양방향 — 스파게티의 정체"}),e.jsx(n,{children:"양방향은 State와 View가 한 덩어리로 얽혀 서로를 바꾼다."}),e.jsx(i,{language:"typescript",children:`// ❌ 양방향: 누가 누구를 바꾸는지 경계가 없다
const counter = {
  count: 0,
  userClicksUp() {     // UI 가 데이터를 직접 바꾸고
    this.count += 1; this.saveToDB();
  },
  onDBSync(newCount) { // DB 동기화가 UI 를 직접 바꾼다
    this.count = newCount; this.flashUI();
  },
  // ⚠️ DB 응답이 onDBSync 를 다시 부르면? → 핑퐁 루프
};`}),e.jsxs("p",{style:c,children:["화면 count가 틀리면 — 단방향은 dispatch 하나만, 양방향은 userClicksUp? onDBSync? 둘이 서로 불렀나? 전부 뒤져야 한다. 양방향이 꼭 필요한 때도 있다(실시간 협업·채팅). 하지만"," ",e.jsx("strong",{children:"기본값은 단방향"}),"이어야 한다."]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜 · 단순한가"}),e.jsx("h2",{children:"단방향이 지켜지는가 — 공항 재진입 (ANA 61편, 1999)"}),e.jsx(n,{children:"흐름을 거꾸로 탈 수 있다면, 검문 단계가 통째로 우회된다."}),e.jsx("blockquote",{style:{fontSize:"0.78em"},children:'니시자와 유지는 하네다 단면도에서 "1층 수하물 수취 → 2층 역주행 환승 시 X-레이 검문 우회" 허점을 발견·제보했으나 무시당하자 직접 악용한다. 칼을 위탁 수하물로 반입해 동선을 역주행, 검문 없이 ANA 61편에 탑승해 기장을 살해하고 조종을 시도했다(부기장·승객이 제압).'}),e.jsx("div",{className:"mermaid",children:`
${t}
flowchart LR
  A["검문 (X-ray)"] --> B["탑승 게이트"]
  B --> C["도착"]
  C --> DD["수하물 수취"]
  DD --> E["출구"]
  E -. "❌ 역주행 = 검문 우회" .-> B
  style E fill:#3a1414,stroke:#ff6b6b,stroke-width:2px,color:#ffdada
`}),e.jsxs("p",{children:["그 결과 정착한 규칙이"," ",e.jsx("strong",{style:x,children:'"역방향 재진입 금지"'})," — 구멍을 닫는 한 줄. 단순한 한 방향 절차일수록 ",e.jsx("strong",{children:"역방향을 막았는지"})," 반드시 확인해야 한다. ❌→✅"]})]})]}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜 · 빈틈 없는가"}),e.jsx("h2",{children:"핵심 질문 — 상대가 어디까지 알아야 하는가"}),e.jsx(n,{children:"너무 많이 알면 결합이 강해지고, 너무 적게 알면 빈틈이 생긴다."}),e.jsx("div",{className:"mermaid",children:`
${t}
sequenceDiagram
  participant A as 접근자
  participant S as 초병
  A-->>S: (접근)
  S->>A: 정지! 누구냐? — "천둥" (challenge)
  A->>S: "번개" (response)
  Note over A,S: 암구호 일치 → 통과 / 불일치 → 저지
`}),e.jsxs("p",{children:["컴퓨터의 ",e.jsx("strong",{children:"challenge-response 인증"}),'과 같은 구조. 한쪽이 질문, 상대가 사전 합의된 답을 돌려줘야 신뢰 성립. 서로 "알아야 하는" 것을 정확히 주고받는, 빈틈 없는 약속. ✅']}),e.jsx("p",{style:c,children:'그런데 — 쌔한 데 없는가? 암구호가 매번 같으면 엿들은 사람이 따라 할 수 있다. 빈틈은 보통 "당연히 맞겠지" 하고 확인을 건너뛴 자리에서 벌어진다.'})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜 · 빈틈 없는가"}),e.jsx("h2",{children:"신고한 값을 검증 없이 믿으면"}),e.jsx(n,{children:'"이 데이터를 길이 N만큼 돌려줘" — N을 그대로 믿으면? (TLS 하트비트)'}),e.jsx(i,{language:"typescript",children:`// 서버 메모리: 페이로드 바로 뒤에 개인키가 붙어 있다
const memory = "hi" + "::PRIVATE-KEY-3f9a-비밀번호-세션쿠키::";
//              ↑ payload(2바이트)  ↑ 인접 메모리 (응답에 들어가면 안 된다)

const payload = "hi";       // 실제로 보낸 건 2바이트
const claimedLen = 40;      // 그런데 길이는 40이라고 '신고'한다

// ❌ 신고한 길이를 그대로 믿고 잘라서 echo — 검증 단계가 없다
const echoed = memory.slice(0, claimedLen);
// → "hi::PRIVATE-KEY-3f9a-..."  인접 메모리가 응답에 실린다`}),e.jsxs("p",{children:["신고한 길이 N과 실제 페이로드 길이를 ",e.jsx("strong",{children:"대조하는 단계"}),"가 빠지면 어떻게 되는가. 이게 웹의 절반을 턴 사건의 정체다."]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜 · 빈틈 없는가"}),e.jsx("h2",{children:"Heartbleed — 웹의 절반을 턴 한 줄 (CVE-2014-0160)"}),e.jsx(n,{children:"검증 한 줄의 부재가 2012년부터 잠들어 있다가 2014년 4월에 터졌다."}),e.jsx("blockquote",{children:e.jsxs("p",{children:['1바이트 페이로드에 "길이는 65535"라 신고 → 서버는 그대로 믿고'," ",e.jsx("strong",{children:"인접 메모리 최대 64KB"}),"를 응답에 실어 보냄. 거기엔 세션 쿠키 · 비밀번호 · 심지어"," ",e.jsx("strong",{style:x,children:"서버 개인키(private key)"}),"가 있었다."]})}),e.jsxs("ul",{style:{fontSize:"0.85em"},children:[e.jsx("li",{children:"요청은 흔적도 없고, 얼마든지 반복 가능"}),e.jsxs("li",{children:["OpenSSL은 어디에나 있었기에 하룻밤 사이 신뢰받는 HTTPS 서버의"," ",e.jsx("strong",{children:"약 17%(수십만 대)"}),"가 노출. 캐나다 국세청에선 사회보험번호가 털림"]}),e.jsxs("li",{children:["패치 = 신고 길이와 실제 길이를 비교하는 ",e.jsx("strong",{children:"단 한 줄"})]})]}),e.jsxs("p",{style:c,children:["HTTP ",e.jsx("code",{children:"Content-Length"}),"도 같은 자기 신고 — 검증 안 하면 request smuggling. 같은 결함 계열이다: 상대의 신고를 검증 없이 믿었다. ❌→✅"]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜"}),e.jsx("h2",{children:"프로토콜 미학 체크리스트"}),e.jsx(n,{children:"단순한가 · 빈틈 없는가 — 두 축으로 약속을 평가한다."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"단순한가?"}),e.jsx("th",{children:"빈틈 없는가?"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"왕복 횟수가 꼭 필요한 만큼인가"}),e.jsx("td",{children:"알아야 할 내용을 빠짐없이 주고받는가"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"무상태로 둘 수 있는가"}),e.jsx("td",{children:"치팅 가능한 지점은 없는가"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"데이터가 한 방향으로만 흐르는가"}),e.jsx("td",{children:"상대를 의심하는가 (신고값을 검증하는가)"})]})]})]})]})]}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜 · 실습 1"}),e.jsx("h2",{children:"실습 1 — 대기열 프로토콜"}),e.jsx(n,{children:"동시 10만 명. 공정하게 줄 세우고 순서대로 입장시켜라."}),e.jsx(i,{language:"typescript",children:`// ❌ 순진한 폴링: 각자 1초마다 "내 차례야?"
const 대기자 = 100000;
const 초당요청 = 대기자;        // 초당 10만 요청
// 줄은 한 칸도 안 줄었는데 서버만 두들겨 맞는다`}),e.jsxs("p",{children:['"여러 번 이야기해야 하나?"에서 탈락. 한 가지 답안 ='," ",e.jsx("strong",{children:"토큰 + 위치 + 하트비트."})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜 · 실습 1"}),e.jsx("h2",{children:"대기열 — 토큰 + 위치 + 하트비트"}),e.jsx(n,{children:"토큰=무상태, 하트비트=빈틈(유령 대기자), entryTicket=치팅 방지."}),e.jsx("div",{className:"mermaid",children:`
${t}
sequenceDiagram
  participant U as User
  participant Q as Queue Server
  U->>Q: enqueue (입장 요청)
  Q-->>U: { token, position: 41023, etaSec: 120 }
  loop 하트비트 (이탈 감지)
    U->>Q: heartbeat(token)
    Q-->>U: { position: 1200, status: "waiting" }
  end
  Q-->>U: { status: "admitted", entryTicket }
  Note over U,Q: entryTicket 으로만 실제 예매 진입
`}),e.jsxs("ul",{style:c,children:[e.jsx("li",{children:'토큰으로 식별 — 서버가 "아까 그 사람"을 기억 안 함 (무상태)'}),e.jsx("li",{children:"하트비트 — 떠난 사람은 줄에서 빼야 뒤가 당겨짐 (다음 절: 오너십)"}),e.jsx("li",{children:"입장은 서버 발급 entryTicket 으로만 — 우긴다고 입장 X (치팅 방지)"})]})]})]}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜 · 실습 2"}),e.jsx("h2",{children:"실습 2 — 90% 할인 이벤트 프로토콜"}),e.jsx(n,{children:"선착순 100명 쿠폰. 동시 5만 명 클릭. 101명 발급·1인 다중 발급 금지."}),e.jsx("p",{children:"무너지기 쉬운 두 지점:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"중복 발급 (멱등성 부재):"})," 더블클릭·재시도로 같은 요청이 두 번"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"재고 차감 경쟁 (race):"}),' "확인 → 차감"이 비원자적이면 둘 다 "1장 남음" 읽고 둘 다 발급']})]}),e.jsx(i,{language:"typescript",children:`// ❌ read-then-write 경쟁
let stock = 1;
const aSeen = stock;     // A가 본 재고: 1
const bSeen = stock;     // B가 본 재고: 1 (아직 아무도 안 깎음)
if (aSeen > 0) stock--;  // A 발급
if (bSeen > 0) stock--;  // B 발급 → 초과발급, stock = -1`})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 2 · 프로토콜 · 실습 2"}),e.jsx("h2",{children:"한 가지 답안 — 멱등성 키 + 원자적 차감"}),e.jsx(n,{children:'멱등성 = "동일 내용 한 번만"의 변주. 원자 차감 = 초과발급 지점 차단.'}),e.jsx(i,{language:"typescript",children:`async function issueCoupon(userId, eventId) {
  // 멱등성 키 (userId, eventId) 유니크: 2번째 요청은 첫 결과 그대로
  const existing = await db.findIssued(userId, eventId);
  if (existing) return existing;

  // 원자적 차감: 확인 + 차감을 한 문장으로
  const ok = await db.exec(
    \`UPDATE events SET issued = issued + 1
       WHERE id = $1 AND issued < quota\`, [eventId]
  );
  if (ok.rowCount === 0) throw new SoldOutError();   // 영향 행 0 → 매진

  return db.insertIssued(userId, eventId); // 유니크 제약 = 중복의 마지막 방어선
}`}),e.jsxs("p",{style:c,children:["Redis 대안: ",e.jsx("code",{children:"DECR"})," 원자 연산 / Lua 스크립트. (DECR이 lock 없이 안전한 이유는 3.4 액터에서 다시 본다)"]})]})]}),e.jsx(d,{part:"3",title:"자원과 오너십",lede:"자원은 확보(acquire)하고 다 쓰면 해제(release)해야 하는 것. 모든 자원에는 오너십이 따른다 — 이 자원을 책임지고 치울 주체가 누구인가."}),e.jsx(l,{children:e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십"}),e.jsx("h2",{children:"셀프 vs 서빙 — 치우는 주체가 명확한가"}),e.jsx(n,{children:"둘 다 OK. 애매하면 쓰레기가 쌓인다."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"패스트푸드(self-serve):"})," 내가 받고 내가 치움 (오너십 = 손님)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"서빙 식당:"})," 종업원이 가져다주고 종업원이 치움 (오너십 = 가게)"]})]}),e.jsxs("p",{children:["좋은 자원 절차를 가르는 질문은 하나로 모인다 —"," ",e.jsx("strong",{children:"누가 이 자원의 주인인가."})," 주인이 분명하고 하나면 대부분의 문제가 사라지고, 흐려질수록 lock · 릭 · 데드락이 줄줄이 따라온다."]})]})}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십 · 미학"}),e.jsx("h2",{children:"① 오너십은 하나인가 — SSoT"}),e.jsx(n,{children:'같은 데이터가 두 곳에 있으면, 어긋나는 순간 "어느 게 진짜?"는 답이 없다.'}),e.jsx(i,{language:"typescript",children:`let cartView    = { stock: 3 };  // 화면이 들고 있는 값
let serverState = { stock: 3 };  // 서버가 들고 있는 값

serverState.stock -= 1;          // 주문이 들어와 서버 재고만 줄었다
// cartView=3, serverState=2 — 어느 게 진짜 재고인가?`}),e.jsxs("p",{children:["상태는 한 곳(store)에 두고 나머지는 ",e.jsx("strong",{children:"파생"}),"시킨다. DB도 마찬가지 — 같은 사실을 두 테이블에 중복 저장하면 정합성이 깨진다. 정규화의 핵심이 SSoT. (비정규화 시엔 ",e.jsx("strong",{children:"동기화 오너"}),"를 반드시 지정)"]}),e.jsxs("p",{style:c,children:["주인이 없으면? ",e.jsx("strong",{children:"좀비 프로세스"})," — 자식이 죽었는데 부모가"," ",e.jsx("code",{children:"wait"}),"로 종료 상태를 안 거두면 프로세스 테이블에 시체가 남는다. 재부팅 외 답이 없는 경우가 많다 — 치울 주체가 사라졌으니까."]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십 · 미학"}),e.jsx("h2",{children:"② lock — 공유 · 상태의 냄새"}),e.jsx(n,{children:"직관과 반대로, lock이 필요하다는 건 좋은 신호가 아니다."}),e.jsx(i,{language:"typescript",children:`let counter = 0;
const a_read = counter;   // A가 본 값: 0
const b_read = counter;   // B가 본 값: 0 (아직 아무도 안 올림)
counter = a_read + 1;
counter = b_read + 1;
// ❌ counter = 1 — 두 번 올렸는데 한 번만 반영 (lost update)`}),e.jsxs("p",{children:["lock이 필요해진 이유를 거슬러 보면 — 카운터가 (1)"," ",e.jsx("strong",{children:"공유"}),"되고 (2) ",e.jsx("strong",{children:"상태(가변)"}),"이기 때문. 둘 중 하나만 없어도 경쟁이 없다. lock은 틀린 게 아니라(때로 불가피),"," ",e.jsx("strong",{children:'"여기서 오너십이 공유되고 상태가 생겼다"는 냄새 신호'}),"다. 걸기 전에 한 번 묻자: ",e.jsx("em",{children:"lock 없이, 주인을 하나로 만들 수는 없는가?"})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십 · 미학"}),e.jsx("h2",{children:"두 자원 풀이 맞물려 멈춘 날 — Airflow × YARN 데드락"}),e.jsx(n,{children:"공유되는 유한한 자원 풀은 조용히 서로를 묶는다."}),e.jsxs("p",{style:{fontSize:"0.85em"},children:["필자가 겪은 일이다. Airflow DAG의 각 태스크는 YARN에 잡을 제출하고,"," ",e.jsx("strong",{children:"그 잡이 끝날 때까지 자기 워커 슬롯을 쥔 채 기다린다"})," — 슬롯(자원 A)을 쥐고 YARN 큐(자원 B)를 기다리는 셈."]}),e.jsxs("p",{style:{fontSize:"0.85em"},children:["어느 날 YARN 큐가 꽉 차자 제출된 잡들이 줄줄이 대기에 걸렸고,"," ",e.jsx("strong",{children:'모든 슬롯이 "YARN을 기다리는 태스크"로 가득 찼다.'})," ","슬롯이 동나자 ",e.jsx("strong",{children:"이 사건과 무관한 다른 DAG 둘까지"})," 멈춰 섰다."]}),e.jsxs("p",{children:["자원을 쥔 채 다른 자원을 기다리고(hold-and-wait), 누구도 강제로 뺏지 못하니(no preemption) 시스템 전체가 ",e.jsx("strong",{children:"데드락"}),'. "누가 언제 놓아주는가"가 불분명했다.']})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십 · 미학"}),e.jsx("h2",{children:"③ 어떤 경우에도 치워지는가 — 확보/해제는 짝"}),e.jsx(n,{children:"문제는 예외다. 정상 경로에서만 해제하면 예외 시 통째로 건너뛴다."}),e.jsxs("table",{style:{fontSize:"0.85em"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"확보 (acquire)"}),e.jsx("th",{children:"해제 (release)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"malloc"}),e.jsx("td",{children:"free"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"connection acquire"}),e.jsx("td",{children:"connection release"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"session create"}),e.jsx("td",{children:"session destroy"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"lock"}),e.jsx("td",{children:"unlock"})]})]})]}),e.jsx(i,{language:"typescript",children:`// ❌ 예외 나면 release 영영 호출 안 됨 → 커넥션 누수
async function badQuery(pool) {
  const conn = await pool.acquire();
  const rows = await conn.query("SELECT ...");  // throw 되면?
  pool.release(conn);                            // 도달 못함
  return rows;
}
// ✅ finally 로 오너십 명시: 성공이든 예외든 반드시
async function goodQuery(pool) {
  const conn = await pool.acquire();
  try { return await conn.query("SELECT ..."); }
  finally { pool.release(conn); }
}`})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십 · 미학"}),e.jsx("h2",{children:"언어가 오너십을 강제하기도 — using / with / defer / Drop"}),e.jsx(n,{children:'"해제를 잊지 않게" 언어 차원에서 오너십을 묶어주는 장치.'}),e.jsx(i,{language:"typescript",children:`// TS 5.2+ : 스코프를 벗어날 때 [Symbol.dispose]() 자동 호출
async function withUsing(pool) {
  await using conn = pool.acquireDisposable(); // 스코프 종료 시 자동 release
  return await conn.query("SELECT ...");
}`}),e.jsx(i,{language:"python",children:`# Python with: __enter__ / __exit__ 가 acquire/release 를 묶는다
with open("config.json") as f:   # 블록 벗어나면 자동 close (예외 나도)
    data = f.read()`}),e.jsxs("p",{style:c,children:["C# ",e.jsx("code",{children:"using"}),", Go ",e.jsx("code",{children:"defer"}),", Rust ",e.jsx("code",{children:"Drop"})," ","도 같은 계보. 안 치우면 ",e.jsx("strong",{children:"메모리 릭 → OOM"}),". 해제 책임이 어느 쪽인지 합의가 안 되면 — 상대가 조용히 사라져도 모른 채 자원을 붙잡는다. ",e.jsx("strong",{children:"TCP Keepalive"}),'는 "살아있어?"로 죽은 연결을 정리하고, 이미 닫힌 연결에 쓰면 ',e.jsx("code",{children:"Connection reset"}),"."]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십 · 미학"}),e.jsx("h2",{children:"④ 한 번 만들고 재활용하는가"}),e.jsx(n,{children:"연결 생성은 비싸다 — TCP handshake + TLS + 인증."}),e.jsxs("ul",{children:[e.jsx("li",{children:"매 요청마다 새로 열면 느리다 → 한 번 만들고 재활용?"}),e.jsxs("li",{children:["먼저 닫은 쪽은 한동안 ",e.jsx("strong",{children:"TIME_WAIT"}),"로 포트 점유 (지연 패킷이 다음 연결 오염 방지)"]}),e.jsxs("li",{children:["단기 대량 open/close → 포트 ",e.jsx("code",{children:"TIME_WAIT"}),' 고갈 → "주소 사용 불가" 에러. 역시 ',e.jsx("strong",{children:'"재활용(풀링)하라"'}),"는 신호"]})]}),e.jsx("p",{style:c,children:"곧 설명할 풀링에서 조금 더 본다."})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십"}),e.jsx("h2",{children:"자원 · 오너십 미학 체크리스트"}),e.jsx(n,{children:"결국 한 질문 — 누가 이 자원의 주인인가."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"오너십이 뚜렷하고 한 명인가?"})," (Single Source of Truth)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lock 없이 가능한가?"})," — 필요하다는 건 공유 · 상태가 생겼다는 냄새. 꼭 나쁜 건 아니나, 없이 되는지 한 번 확인"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"어떤 경우에도 명시적으로 치워지는가?"})," (예외에도 finally / using)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"한 번 생성하고 재활용하는가?"})," 아니면 그때그때 만드나"]})]})]})]}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십 · 실습 1"}),e.jsx("h2",{children:"실습 1 — 커넥션 누수"}),e.jsx(n,{children:"CPU도 메모리도 널널한데 시스템이 멈췄다. 무엇이 자원을 갉아먹었나?"}),e.jsx(i,{language:"typescript",children:`function handleRequest(shouldFail) {
  const conn = pool.acquire();             // 자원 획득
  // 🚨 여기서 예외가 터지면, 아래 release 는 영영 실행되지 않는다
  if (shouldFail) throw new Error("DB 쿼리 중 에러!");
  pool.release();                          // 정상 반납 (예외 시 도달 못 함)
  return conn;
}
// 에러 요청 3번이 연달아 자원을 쥔 채 죽는다 → 풀이 한 칸씩 말라간다
// ❌ 멀쩡한 새 요청: "Timeout: 남은 커넥션이 없습니다" (남은 커넥션 0개)`}),e.jsxs("p",{children:["에러는 매번 ",e.jsx("code",{children:"catch"}),"로 ",e.jsx("strong",{children:"처리됐다."})," 사용자에겐 깔끔히 500을 돌려줬다. 그런데도 풀은 말라간다 —"," ",e.jsx("strong",{children:"샌 건 자원이지 연산이 아니다."})," 에러 핸들링과 자원 해제는 다른 문제다."]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십 · 실습 1"}),e.jsx("h2",{children:"한 가지 답안 — finally로 오너십을 강제"}),e.jsx(n,{children:"빌린 자(오너)는 무슨 일이 있어도 자원을 뱉어내야 한다."}),e.jsx(i,{language:"typescript",children:`function handleRequest(shouldFail) {
  const conn = pool.acquire();
  try {
    if (shouldFail) throw new Error("DB 쿼리 중 에러!");
    return conn;
  } finally {
    pool.release();          // ✅ 성공이든 예외든 반드시 반납
  }
}
// 에러는 똑같이 3번 나도 풀이 마르지 않는다 (남은 커넥션 유지)`}),e.jsxs("p",{children:["치우는 책임을 명시하지 않은 자원은 ",e.jsx("strong",{children:"쓰레기산(leak)"}),"이 되어 시스템의 목을 조른다. 그래서 ",e.jsx("code",{children:"using"})," ·"," ",e.jsx("code",{children:"with"})," · ",e.jsx("code",{children:"defer"})," · ",e.jsx("code",{children:"Drop"})," 이 아예 언어 차원에서 해제를 묶어 이 실수를 원천 차단한다. ❌→✅"]})]})]}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십 · 실습 2"}),e.jsx("h2",{children:"실습 2 — 공유 계좌, 동시 출금"}),e.jsx(n,{children:"잔고 10,000원. 두 사람이 같은 순간 7,000원씩. lock 없이 막을 수 있나?"}),e.jsx(i,{language:"typescript",children:`let balance = 10000;            // 모두가 공유하는 잔고
function withdraw(amount) {
  const seen = balance;         // 1) 잔고를 읽고
  if (seen >= amount) {         // 2) 충분한지 확인하고
    balance = seen - amount;    // 3) 깎는다 — 1·2·3 사이에 끼어들 수 있다
    return "출금 ✅";
  }
  return "잔고 부족 ❌";
}
withdraw(7000); withdraw(7000); // ❌ 둘 다 성공, 잔고 -4000`}),e.jsxs("p",{children:["앞의 lost update와 정확히 같은 자리 — ",e.jsx("strong",{children:"공유"}),"되는 잔고를"," ",e.jsx("strong",{children:"여럿이 동시에"})," 만진다. 흔한 처방은 lock이지만, 우리는 안다 — 그건 냄새다. ",e.jsx("em",{children:"lock 없이, 잔고의 주인을 하나로 만들 수는 없을까?"})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십 · 실습 2"}),e.jsx("h2",{children:"한 가지 답안 — 액터(Actor)"}),e.jsx(n,{children:"잔고를 단 하나의 주체가 독점. 아무도 직접 못 만지고, 메시지로 부탁만 한다."}),e.jsx("div",{className:"mermaid",children:`
${t}
sequenceDiagram
  participant A as 출금자 A
  participant B as 출금자 B
  participant M as 📬 Mailbox
  participant ACC as Actor (잔고 독점)
  A->>M: withdraw(7000)
  B->>M: withdraw(7000)
  Note over M: 동시에 와도 줄을 세운다
  M->>ACC: ① withdraw(7000)
  ACC-->>A: ✅ 성공 (잔고 3000)
  M->>ACC: ② withdraw(7000)
  ACC-->>B: ❌ 잔고 부족 (3000 < 7000)
`}),e.jsx(i,{language:"typescript",children:`function createAccountActor(initial) {
  let balance = initial;        // 이 잔고의 주인은 오직 이 액터 (캡슐화)
  const mailbox = [];           // 들어온 요청을 줄 세운다
  return {
    send: (msg) => mailbox.push(msg),    // 바깥은 '부탁'만 한다
    run: () => { while (mailbox.length) {
      const m = mailbox.shift();         // 한 번에 하나씩, 순서대로
      if (balance >= m.amount) balance -= m.amount;
    }},
  };
}`})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십 · 실습 2"}),e.jsx("h2",{children:"액터 — lock 없이 race가 사라진 이유"}),e.jsx(n,{children:"두 번째 출금은 첫 번째가 완전히 끝난 뒤에야 처리된다."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"오너십이 하나인가?"})," ✅ 잔고는 액터 안에만. SSoT가 코드 구조로 강제됨"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lock 없이 가능한가?"})," ✅ 직렬화는 우편함에서 온다. 공유 메모리를 잠그는 게 아니라, 애초에"," ",e.jsx("strong",{children:"공유하지 않는다"})]})]}),e.jsxs("p",{children:["이게 ",e.jsx("strong",{children:"액터 모델(Actor Model)"})," — Erlang/Elixir(통신 교환기), Akka가 이 위에 섰다. 앞 할인 실습의 Redis"," ",e.jsx("code",{children:"DECR"}),"이 lock 없이 안전한 이유도 같다."]}),e.jsxs("p",{style:c,children:['쎄한데? — 직렬화가 곧 병목. 한 우편함은 한 번에 하나만 처리하니 처리량 상한이 생긴다. "계좌마다 액터 하나"처럼 상태를 잘게 쪼개 늘린다(샤딩). 원칙은 그대로 — ',e.jsx("strong",{children:"하나의 상태엔 하나의 주인."})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 3 · 자원과 오너십 · 실습 2"}),e.jsx("h2",{children:"왜 Redis는 일부러 싱글스레드인가"}),e.jsx(n,{children:"멀티코어 시대에 한 스레드만 쓰는 게 손해처럼 보이지만 —"}),e.jsxs("p",{children:["Redis는 모든 명령을 ",e.jsx("strong",{children:"한 줄로 세워 순서대로"})," 실행한다. 덕분에 ",e.jsx("code",{children:"INCR"})," · ",e.jsx("code",{children:"DECR"})," · ",e.jsx("code",{children:"SETNX"})," ","같은 연산이 ",e.jsx("strong",{children:"lock 한 줄 없이 원자적"}),"이다."]}),e.jsxs("p",{children:["공유 메모리를 여러 스레드가 lock으로 다투는 대신, 데이터의 주인을 하나로 두고 요청을 직렬화한 것 — ",e.jsx("strong",{children:"액터 모델의 현실판"}),'. 앞의 "원자적 차감"이 안전했던 이유가 정확히 이것이다.']})]})]}),e.jsx(y,{}),e.jsx(d,{part:"4",title:"예외 던지기",lede:"예외는 '정상 흐름으론 더 진행 불가'라는 신호. 손이 끼면 비상 버튼 — 잘못된 상태로 굴러가느니 즉시 멈추는 게 훨씬 싸다."}),e.jsx(l,{children:e.jsxs(s,{children:[e.jsx(r,{children:"Part 4 · 예외 던지기"}),e.jsx("h2",{children:"현실 예시 — 공장 라인 비상 버튼"}),e.jsx(n,{children:"비효율 같지만, 잘못된 상태로 굴러가는 것보다 즉시 정지가 훨씬 싸다."}),e.jsxs("p",{children:["컨베이어 벨트에 손이 끼었다. ",e.jsx("strong",{children:"비상 버튼을 누른다."})," 라인 전체가 멈춘다."]}),e.jsxs("p",{children:["예외의 미학을 가르는 질문은 다섯 — 에러를"," ",e.jsx("strong",{children:"못 본 척할 수 없게"})," 강제하는가, 정상 흐름과"," ",e.jsx("strong",{children:"분리"}),"되는가, ",e.jsx("strong",{children:"삼키지"})," 않는가,"," ",e.jsx("strong",{children:"최상위"}),"까지 책임지고 받는가, 그리고"," ",e.jsx("strong",{children:"빨리"})," 실패하는가."]})]})}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 4 · 예외 · 미학"}),e.jsx("h2",{children:"① 강제하는가 — 못 본 척할 수 있는가"}),e.jsx(n,{children:"반환값으로 알리기. 평판은 나쁘지만, 핵심은 '못 본 척할 수 있느냐'다."}),e.jsx(i,{language:"typescript",children:`// ❌ errno 스타일: 검사를 빠뜨려도 아무도 막지 않는다
const data = readFileOrErrno("config.json"); // 실패 시 빈 값/에러코드
use(data);  // err 검사를 잊었다 → 조용히 잘못된 값으로 진행`}),e.jsx(i,{language:"go",children:`// ✅ Go: 에러가 일급 반환값 — 처리하든 _ 로 명시적으로 버리든 골라야
data, err := readFile("config.json")
if err != nil {
    return err   // 호출자가 에러를 마주 보도록 강제된다
}
use(data)`}),e.jsx("p",{style:c,children:"교훈: '반환값은 나쁘다'가 아니다. errno는 흘려보낼 수 있어서 ❌, Go는 마주 보도록 강제해서 ✅. ❌→✅"})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 4 · 예외 · 미학"}),e.jsx("h2",{children:"② 흐름을 분리하는가 — 정상 경로가 더러워지는가"}),e.jsx(n,{children:"Go의 '강제'는 대가가 있다 — 줄마다 if err. throw는 정반대를 택한다."}),e.jsx(i,{language:"typescript",children:`try {
  const cfg = readConfigOrThrow("config.json"); // 정상 경로엔 검사가 없다
  const db  = connectOrThrow(cfg);
  return queryOrThrow(db);
} catch (e) {
  // 세 단계 어디서 터지든, 처리는 여기 한 곳
}`}),e.jsx("div",{className:"mermaid",children:`
${t}
graph TD
  subgraph ret ["❌ 반환값 — 정상·에러가 한 줄마다 얽힌다"]
    R1["readConfig"] --> RC1{"err?"}
    RC1 -->|yes| RH["에러 처리"]
    RC1 -->|no| R2["connect"]
    R2 --> RC2{"err?"}
    RC2 -->|yes| RH
    RC2 -->|no| R3["query"]
    R3 --> RC3{"err?"}
    RC3 -->|yes| RH
    RC3 -->|no| ROK["정상 결과"]
  end
  subgraph thr ["✅ throw — 정상 경로는 직선, 에러는 밖으로"]
    T1["readConfig"] --> T2["connect"] --> T3["query"] --> TOK["정상 결과"]
    T1 -. throw .-> TC["catch — 한 곳"]
    T2 -. throw .-> TC
    T3 -. throw .-> TC
  end
  style RH fill:#3a1414,stroke:#ff6b6b,color:#ffdada
  style TC fill:#0f2e1a,stroke:#4ade80,color:#d1fae5
`})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 4 · 예외 · 미학"}),e.jsx("h2",{children:"강제와 분리는 트레이드오프 — Java checked exception"}),e.jsx(n,{children:"둘 다 가지려던 시도가, 동시에 왜 어려운지 보여주는 반면교사."}),e.jsx(i,{language:"java",children:`// throw 하면서도 호출자에게 처리(또는 throws 선언)를 강제한다
String read() throws IOException { ... }
// ⚠️ 그 강제가 중간 단계 전부로 번진다 —
//    맨 아래 예외 하나 때문에 위 모든 시그니처에 throws IOException 이 줄줄이`}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Go"})," = 강제를 택함 (분리를 내줌)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"throw"})," = 분리를 택함 (강제를 내줌)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"checked exception"})," = 순진하게 합치려다 분리를 잃음"]})]}),e.jsx("p",{children:"강제와 분리는 한쪽을 얻으면 한쪽을 내주는 트레이드오프. 어느 쪽도 공짜로 둘 다 갖지는 못한다."})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 4 · 예외 · 미학"}),e.jsx("h2",{children:"③ 삼키지 않는가 — 빈 catch"}),e.jsx(n,{children:"throw가 핸들러로 보내줘도, 핸들러가 아무것도 안 하면 도루묵."}),e.jsx(i,{language:"typescript",children:`try {
  chargeCard();        // throw "결제 게이트웨이 타임아웃"
  confirmOrder();      // 실행 안 됨
} catch (e) {
  // ❌ 삼킴: 로그도 재던지기도 없음
  //    → 결제도 실패, 주문도 미확정, 아무도 모른다
}`}),e.jsxs("p",{children:["빈 ",e.jsx("code",{children:"catch "})," = 비상 버튼의 배선을 끊어둔 것. 손이 끼었는데 라인이 안 멈춘다."]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 4 · 예외 · 미학"}),e.jsx("h2",{children:"④ 최상위에서 받는가 — 스레드 · 비동기"}),e.jsx(n,{children:"별도 스레드에 top-level 핸들러가 없으면, 예외는 아무에게도 보고 안 되고 조용히 죽는다."}),e.jsx(i,{language:"python",children:`import threading

def worker():
    raise RuntimeError("백그라운드 작업 실패")  # 메인 try/except 로 안 잡힘

t = threading.Thread(target=worker)
try:
    t.start(); t.join()
except RuntimeError:
    print("메인에서 잡음")   # ❌ 절대 안 옴 — 예외는 worker 스레드 안에서

# ✅ 전역 훅으로 모든 스레드 미처리 예외를 한 곳에서
def hook(args): report_to_monitoring(args.exc_value)
threading.excepthook = hook`}),e.jsxs("p",{style:f,children:[e.jsx("strong",{children:"📝 일화:"})," top-level 핸들러 없이 스레드를 돌렸다가 백그라운드 워커가 조용히 죽어 있던 걸 ",e.jsx("strong",{children:"3개월 뒤"})," 알게 됐다. 배치/집계가 어느 순간부터 안 돌았는데 에러 로그가 0줄."]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 4 · 예외 · 미학"}),e.jsx("h2",{children:"⑤ 빨리 실패하는가 — fail fast"}),e.jsx(n,{children:"문제를 발견하면 가능한 한 빨리, 가능한 한 시끄럽게 실패하라."}),e.jsxs("ul",{children:[e.jsx("li",{children:"잘못된 입력은 그 자리에서 멈춘다"}),e.jsx("li",{children:"조용히 기본값으로 때우면 → 한참 뒤 엉뚱한 곳에서 터져 원인 추적 불가"})]}),e.jsxs("p",{children:["앞의 ",e.jsx("strong",{children:"공장 라인 비상 버튼"}),"이 정확히 이것 — 잘못된 상태로 굴러가느니 즉시 멈추는 게 싸다."]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 4 · 예외"}),e.jsx("h2",{children:"예외 미학 체크리스트"}),e.jsx(n,{children:"빨리, 시끄럽게, 책임지고 받는가."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"강제하는가?"})," — 호출자가 못 본 척할 수 없는가 (errno ❌ / Go ✅)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"흐름을 분리하는가?"})," — 정상 경로가 더러워지지 않는가 (throw ✅ / checked ❌)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"삼키지 않는가?"})," — 빈 catch로 없는 척 안 하는가"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"최상위에서 받는가?"})," — 스레드 · 비동기에도 최종 핸들러"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"빨리 실패하는가?"})," — 잘못된 상태를 끌고 가지 않는가"]})]})]})]}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 4 · 예외 · 실습 1"}),e.jsx("h2",{children:"실습 1 — 조용히 죽은 액터 (Silent Death)"}),e.jsx(n,{children:"필자 일화: 상장폐지 티커 하나에 액터 루프가 죽었는데, 3개월을 몰랐다 — 로그 0줄."}),e.jsx(i,{language:"typescript",children:`const inbox = ["AAPL", "DELISTED", "GOOG", "MSFT"];
const lookup = (t) => {
  if (!(t in prices)) throw new Error(\`\${t}: 상장폐지된 티커\`);
  return prices[t];
};
// ❌ 백그라운드 액터 루프 — 루프 안에 try/catch 가 없다
function runActor() {
  while (inbox.length) {
    const t = inbox.shift();
    processed.push(\`\${t}=\${lookup(t)}\`);  // DELISTED 에서 throw → 루프 탈출
  }
}
// AAPL 처리 후 종료. GOOG·MSFT 는 영영 처리 안 됨, 에러 로그도 없음`}),e.jsxs("p",{children:["메시지 ",e.jsx("strong",{children:"하나"}),"의 실패가 액터 ",e.jsx("strong",{children:"전체"}),'를 죽였다. 프로세스는 멀쩡히 "살아있는 것처럼" 보인다.']})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 4 · 예외 · 실습 1"}),e.jsx("h2",{children:"한 가지 답안 — 메시지 경계마다 핸들러"}),e.jsx(n,{children:"한 건은 그 자리에서 시끄럽게 실패시키되(보고), 폭발이 루프까지 번지지 않게."}),e.jsx(i,{language:"typescript",children:`function runActor() {
  while (inbox.length) {
    const t = inbox.shift();
    try {
      processed.push(\`\${t}=\${lookup(t)}\`);
    } catch (e) {
      errors.push(e.message);  // ✅ 보고한다 — catch 가 비면 3.4의 침묵으로 회귀
      // 루프는 계속 — 메시지 하나가 액터 전체를 죽이지 않는다
    }
  }
}`}),e.jsxs("p",{children:['"빨리 실패하라"와 모순 아닌가? fail fast는 ',e.jsx("strong",{children:"잘못된 상태"}),"를 끌고 가지 말라는 것이지, 입력 하나가 전체를 죽이라는 게 아니다. 핵심은 ",e.jsx("strong",{children:"터지는 경계(bulkhead)를 어디 둘 것인가."})]}),e.jsxs("p",{style:c,children:["이게 Erlang ",e.jsx("strong",{children:'"let it crash"'}),"가 정작 죽게 두지 않는 이유 — ",e.jsx("strong",{children:"수퍼바이저(supervisor)"}),'가 그 죽음을 관찰하고 액터를 되살린다. 보고되고 복구되는 한에서 "터지게 둔다." 조용한 죽음과는 정반대.']})]})]}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 4 · 예외 · 실습 2"}),e.jsx("h2",{children:"실습 2 — 과도한 try-catch의 악취"}),e.jsx(n,{children:'"앱이 죽으면 안 되니까" 의심 가는 모든 줄을 try-catch로 둘렀다.'}),e.jsx(i,{language:"typescript",children:`// ❌ 에러를 막겠다고 모든 단계를 잘게 쪼개 감쌌다
try { user = { id: 1, name: "Alice" }; }
catch (e) { return "유저 로드 실패"; }

try {
  throw new Error("DB 타임아웃");
  profile = { age: 25 };
} catch (e) {
  profile = { age: 0 };   // 에러를 삼키고 기본값으로 '좀비처럼' 살려둔다
}

try { isSuccess = true; } catch (e) { isSuccess = false; }
// 프로필 조회가 실패했는데도 멈추지 않고 흘러간다`}),e.jsxs("ul",{style:c,children:[e.jsxs("li",{children:[e.jsx("strong",{children:"정상 경로 오염:"})," 진짜 하려던 일이 파편화돼 읽을 수 없다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"가변 상태 강제:"})," 변수를 전부 위로 끌어올려"," ",e.jsx("code",{children:"let"}),"으로. 불변성(",e.jsx("code",{children:"const"}),")이 깨진다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"좀비 상태(fail fast 위배):"})," 빈 껍데기(age:0)를 쥐고 끝까지 굴러간다"]})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 4 · 예외 · 실습 2"}),e.jsx("h2",{children:"한 가지 답안 — 트랜잭션 경계에서 한 번만 잡는다"}),e.jsx(n,{children:"try-catch는 코드 단위가 아니라 비즈니스 로직(트랜잭션)의 단위로."}),e.jsx(i,{language:"typescript",children:`// ✅ 정상 경로는 방해물 없이 직선으로 흐른다
try {
  const user    = getUser();
  const profile = getProfile();   // 여기서 터지면 즉시 catch로 직행
  const isSuccess = true;
  return \`완료: \${user.name}, 나이 \${profile.age}, 성공 \${isSuccess}\`;
} catch (e) {
  // ✅ 에러 처리는 이 한 곳에서 전담 (빨리 실패하기)
  return \`❌ 작업 중단: \${e.message}\`;
}`}),e.jsxs("p",{children:["정상 경로가 직선으로 펴졌고, ",e.jsx("code",{children:"let"}),"은 ",e.jsx("code",{children:"const"}),"로 돌아왔으며, 중간에 실패하면 즉시 멈춘다. try-catch는"," ",e.jsx("strong",{children:"비상 버튼"})," — 부품마다 달아 시도 때도 없이 누르면 공장이 안 돌아간다. 라인 전체를 멈추는 ",e.jsx("strong",{children:"메인 버튼 하나"}),"면 충분하다."]})]})]}),e.jsx(d,{part:"5",title:"배칭과 풀링",lede:"정확한 절차 다음은 빠른 절차. 배칭=모아서 한 번에, 풀링=미리 만들어 돌려쓰기. 둘 다 고정 비용을 여러 건에 나눠 부담하는 발상."}),e.jsx(l,{children:e.jsxs(s,{children:[e.jsx(r,{children:"Part 5 · 배칭과 풀링"}),e.jsx("h2",{children:"현실 예시"}),e.jsx(n,{children:"고정 비용을 한 건이 통째로 떠안고 있지 않은가?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"물탱크:"})," 꼭지마다 본관에서 직접 끌면 찔끔. 옥상에 미리 모아두면 충분한 압력 (= 버퍼링)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fedex 허브:"})," 도시쌍 직항(N×N) 대신 중앙 허브로 모아 분류 후 재배송 — 개별은 약간 돌지만 전체 처리량 극대화 (= 배칭의 극단)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"렌터카 · 공유 오피스:"})," 필요할 때마다 새로 사지 않고 빌려 쓰고 반납 (= 풀링)"]})]}),e.jsx("div",{className:"mermaid",children:`
${t}
graph TD
  subgraph nohub ["❌ 직항 (N×N 노선)"]
    A1["도시 A"] <--> B1["도시 B"]
    A1 <--> C1["도시 C"]
    B1 <--> C1
    A1 <--> D1["도시 D"]
  end
  subgraph hub ["✅ 허브 배칭 (N 노선)"]
    H(("HUB"))
    A2["도시 A"] <--> H
    B2["도시 B"] <--> H
    C2["도시 C"] <--> H
    D2["도시 D"] <--> H
  end
  style nohub fill:#1a0808,stroke:#ff6b6b,color:#ff9a9a
  style hub fill:#081a0f,stroke:#4ade80,color:#86efac
`})]})}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 5 · 배칭과 풀링 · 배칭"}),e.jsx("h2",{children:"① N+1 — 한 건씩 쿼리하는 냄새"}),e.jsx(n,{children:"쎄한 신호 하나 — 한 건씩 처리하며 고정 비용을 건수만큼 반복해 문다."}),e.jsx(i,{language:"typescript",children:`// ❌ N+1: 목록 1 + 항목마다 1 = 1+N 쿼리
const users = db.getUsers();              // 1
for (const u of users) db.getPosts(u.id); // N

// ✅ 배칭: IN (...) 한 번 (또는 join 1번)
db.getUsers();                                // 1
db.getPostsByUserIds(users.map(u => u.id));   // 1`}),e.jsx("p",{children:"같은 일을 모으면 고정 비용(쿼리 왕복)을 한 번만 낸다."})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 5 · 배칭과 풀링 · 배칭"}),e.jsx("h2",{children:"② 버퍼링 — 1바이트마다 syscall하는 냄새"}),e.jsx(n,{children:"한 줄 쓸 때마다 flush하면 매번 커널로 내려가는 write 시스템콜."}),e.jsx(i,{language:"python",children:`import sys

N = 1_000_000

# ❌ 버퍼 미사용: 한 건마다 flush → write() 시스템콜 100만 번
for i in range(N):
    sys.stdout.write(f"{i}\\n")
    sys.stdout.flush()           # 매 줄마다 커널로 — syscall N번  (≈ 0.50s)

# ✅ 버퍼링: 메모리에 모았다가 한 번에 내보낸다
buf = [f"{i}\\n" for i in range(N)]
sys.stdout.write("".join(buf))   # 단 한 번의 write
sys.stdout.flush()               # syscall 1회                    (≈ 0.05s, 10배)`}),e.jsxs("p",{style:c,children:["연산량은 똑같다 — 다른 건 ",e.jsx("strong",{children:"커널을 몇 번 건드렸는가"}),"다. 로그 라이브러리 · 파일 IO · 소켓 전송이 전부 내부에 버퍼를 두는 이유."]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 5 · 배칭과 풀링 · 배칭"}),e.jsx("h2",{children:"③ 벡터화 — 루프 대신 배열 통째로"}),e.jsx(n,{children:"같은 냄새가 CPU 연산에도. 원소마다 인터프리터가 한 바퀴씩 돈다(고정 비용)."}),e.jsx(i,{language:"python",children:`import numpy as np

N = 10_000_000

# ❌ 한 건씩: 파이썬 루프 — 원소마다 인터프리터 오버헤드
ys = [x * 2 + 1 for x in range(N)]          # ≈ 0.15s

# ✅ 벡터화: 배열 전체를 한 번의 연산으로 (C 레벨, SIMD)
ys = np.arange(N) * 2 + 1                    # 루프 없음 — "모아서 한 번에" (≈ 0.008s, 18배)`}),e.jsxs("p",{children:["결과 배열은 동일. 차이는 1천만 번의 인터프리터 왕복을"," ",e.jsx("strong",{children:"한 번의 네이티브 호출로 합쳤다"}),"는 것뿐. N+1이 쿼리를, 버퍼링이 syscall을, 벡터화는 연산 디스패치를 모은다."]})]})]}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 5 · 배칭과 풀링 · 풀링"}),e.jsx("h2",{children:"④ 한 번 만들고 재활용하는가 — 풀링"}),e.jsx(n,{children:"그때그때 자원을 생성하면, 만드는 고정 비용(handshake·인증)을 매번 문다."}),e.jsx(i,{language:"typescript",children:`// ❌ 매 요청 새 연결: handshake/인증 매번 + TIME_WAIT 누적
async function handle(req) {
  const conn = await createConnection();   // 비싸다!
  try { return await conn.query(req.sql); }
  finally { await conn.close(); }
}
// ✅ 풀에서 빌려 쓰고 반납: 연결은 한 번 만들고 재활용
const pool = createPool({ min: 5, max: 20 });
async function handlePooled(req) {
  const conn = await pool.acquire();       // 기존 연결 재사용
  try { return await conn.query(req.sql); }
  finally { pool.release(conn); }          // close X, 반납 O (오너십!)
}`}),e.jsxs("p",{style:c,children:['풀링은 결국 자원 절의 "한 번 만들고 재활용하는가?"에 "그렇다"고 답하는 구현. 배칭의 대가 = ',e.jsx("strong",{children:"지연(latency)"}),'. "모은다" = "기다린다". 100건 모으려고 99번째가 99건을 기다린다.']})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 5 · 배칭과 풀링"}),e.jsx("h2",{children:"배칭 · 풀링 미학 체크리스트"}),e.jsx(n,{children:"고정 비용을 나눠 부담하는가."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"모아서 한 번에 하는가?"})," — 고정 비용(쿼리/syscall/ 디스패치)을 건마다 물고 있지 않은가"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"한 번 만들고 재활용하는가?"})," — 비싼 자원을 요청마다 새로 만들지 않는가"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"양과 간격을 조절할 수 있는가?"}),' — "100건 또는 50ms" 상한으로 무한 대기 방지']}),e.jsxs("li",{children:[e.jsx("strong",{children:"latency-free 경로가 있는가?"})," — 급한 건은 배치를 우회해 즉시 처리"]})]})]})]}),e.jsx(l,{children:e.jsxs(s,{children:[e.jsx(r,{children:"Part 5 · 배칭과 풀링 · 실습 1"}),e.jsx("h2",{children:"실습 1 — 배치 플러시 설계"}),e.jsx(n,{children:"초당 수만 건 이벤트. 한 건씩 보내면 네트워크가 맞고, 무한정 모으면 영영 안 나간다."}),e.jsx(i,{language:"typescript",children:`// ❌ 한 건마다 즉시 전송 → 전송 횟수가 이벤트 수와 1:1 (N+1과 같은 냄새)
for (const e of events) send([e]);`}),e.jsx(i,{language:"typescript",children:`// ✅ maxSize + maxWait: 먼저 닿는 쪽에서 flush
function createBatcher({ maxSize, onFlush }) {
  let buf = [];
  const flush = (reason) => {
    if (buf.length === 0) return;
    onFlush([...buf], reason); buf = [];
  };
  return {
    add(e) { buf.push(e); if (buf.length >= maxSize) flush("size"); }, // 양 상한
    tick() { flush("wait"); },                                          // 간격 상한
  };
}`}),e.jsxs("p",{children:['양만 있으면 마지막 한 줌이 영영 안 나가고, 간격만 있으면 폭주할 때 배치가 터진다. 둘을 같이 둬야 "무한정 안 기다리고, 한 건씩도 아닌" 지점이 잡힌다. 급한 건(결제 확인)은 ',e.jsx("strong",{children:"latency-free 경로"}),"로 우회."]})]})}),e.jsx(l,{children:e.jsxs(s,{children:[e.jsx(r,{children:"Part 5 · 배칭과 풀링 · 실습 2"}),e.jsx("h2",{children:"실습 2 — 배치와 실시간을 한 번에 (람다 아키텍처)"}),e.jsx(n,{children:"정확하려면 모아서 한 번에(느림), 빠르려면 한 건씩 즉시(부정확). 둘 다 두고 합친다."}),e.jsx("div",{className:"mermaid",children:`
${t}
graph LR
  IN["들어오는 이벤트"] --> SPEED["Speed Layer<br/>(실시간, 근사값)"]
  IN --> BATCH["Batch Layer<br/>(주기적, 정확값)"]
  SPEED --> SERVE["Serving Layer<br/>(병합 조회)"]
  BATCH --> SERVE
  SERVE --> OUT["응답"]
  style SPEED fill:#0d2440,stroke:#3b82f6,color:#dbeafe
  style BATCH fill:#0f2e1a,stroke:#16a34a,color:#dcfce7
`}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Speed layer:"})," 방금 데이터 즉시 반영(부정확해도) — latency-free 경로"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Batch layer:"})," 주기적으로 전체 정확 재계산 — 배칭의 처리량"]}),e.jsx("li",{children:'조회 시 둘을 병합 → "빠르면서도 결국 정확한" 결과'})]}),e.jsx("p",{style:c,children:'체크리스트의 "양·간격 조절"과 "latency-free 경로"를 시스템 규모로 끌어올린 설계.'})]})}),e.jsx(d,{part:"6",title:"마치며",lede:"네 개의 렌즈가 남긴 질문을 한자리에 모으면, 그게 곧 절차를 보는 눈이다."}),e.jsxs(l,{children:[e.jsxs(s,{children:[e.jsx(r,{children:"Part 6 · 마치며"}),e.jsx("h2",{children:"프로그램의 절차"}),e.jsx(n,{children:"네 주제 모두 같은 질문으로 수렴한다."}),e.jsx("blockquote",{children:e.jsx("p",{children:e.jsx("strong",{children:"마법은 없다. 어디선간 누가 무언가하고 있다."})})}),e.jsxs("ul",{style:{fontSize:"0.85em"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"프로토콜:"})," 무엇을 어떤 순서로 — 단순/빈틈없이/효율적으로"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"자원·오너십:"})," 확보한 건 누군가 반드시 치움 — 주인 하나, 어떤 경우에도 명시적으로"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"예외:"})," 빨리·시끄럽게 — 삼키지 말고 최상위까지 책임"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"배칭·풀링:"})," 고정 비용 나눠 부담 — 지연 트레이드오프를 조절 가능하게"]})]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 6 · 마치며"}),e.jsx("h2",{children:"절차 미감 체크리스트 — 네 렌즈 총정리"}),e.jsx(n,{children:'코드를 짜기 전에 "어떤 절차로 갈지"를 고르는 자.'}),e.jsxs("table",{style:{fontSize:"0.78em"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"렌즈"}),e.jsx("th",{children:"핵심 질문"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"프로토콜"})}),e.jsx("td",{children:"왕복 최소? 무상태? 단방향? 빠짐없이 주고받고 신고값을 의심하는가"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"자원·오너십"})}),e.jsx("td",{children:"주인이 하나(SSoT)? lock 없이? 어떤 경우에도 해제(finally/using)? 재활용?"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"예외"})}),e.jsx("td",{children:"강제? 분리? 안 삼킴? 최상위에서 받음? 빨리 실패하는가"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"배칭·풀링"})}),e.jsx("td",{children:"모아서 한 번에? 재활용? 양·간격 조절? latency-free 경로가 있는가"})]})]})]}),e.jsxs("p",{children:["네 주제 모두 결국"," ",e.jsx("strong",{style:x,children:'"이 절차에 빈틈은 없는가? 그리고 단순한가?"'})," ","로 수렴한다. 그 감각이 절차의 미감이다."]})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Part 6 · 마치며"}),e.jsx("h2",{children:"AI가 코드를 다 짜는 시대에"}),e.jsx(n,{children:"1장으로 돌아온다 — 코드 짜는 일은 점점 AI의 몫이 된다. 그래도 남는 일이 둘."}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{style:x,children:"좋은 설계."})," 무상태로 둘지, 액터로 공유를 없앨지, 배치할지 — AI에게 시키기 전에 사람이 쥐는"," ",e.jsx("strong",{children:"의도 결정"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{style:x,children:"감각있는 리뷰."})," 쎄함을 인지하고 바로 대처하는 감각"]})]}),e.jsxs("blockquote",{style:{fontSize:"0.85em"},children:["AI가 코드를 다 짜는 시대에, 엔지니어를 엔지니어로 만드는 건 결국 둘 —"," ",e.jsx("strong",{children:"좋은 설계를 고르는 눈, 그리고 근거로 리뷰하는 눈."})]})]})]}),e.jsx(s,{children:e.jsxs("div",{style:{textAlign:"center",padding:"80px 0"},children:[e.jsx("h1",{style:{fontSize:"3em"},children:"End of Doc."}),e.jsx("p",{style:{color:"#888",marginTop:"40px"},children:"질문은 언제든 환영합니다."})]})})]})}export{S as default};
