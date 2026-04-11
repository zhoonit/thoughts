

# 들어가기


## 목차

- [자기소개 (10분)](#자기소개-10분)
- [S1. 엔지니어링이란? (15분)](#s1-엔지니어링이란-15분)
  - [엔지니어링 정의](#엔지니어링-정의)
  - [소프트웨어 엔지니어링](#소프트웨어-엔지니어링)
  - [테크니션 vs 엔지니어](#테크니션-vs-엔지니어)
- [S2. 엔지니어링과 AI (20분)](#s2-엔지니어링과-ai-20분)
  - [모델이란?](#모델이란)
  - [언어 모델 — 분포 가설](#언어-모델--분포-가설)
  - [말하는 백과사전](#말하는-백과사전)
  - [ARC-AGI-3](#arc-agi-3)
- [S3. AI의 한계 — 비용과 의도 (10분)](#s3-ai의-한계--비용과-의도-10분)
  - [재무적 관점](#재무적-관점)
  - [의도의 문제](#의도의-문제)
- [휴식 + Q&A (15분)](#휴식--qa-15분)
- [S4. 어엿한 엔지니어? — 문제 정의와 탐색 (35분)](#s4-어엿한-엔지니어--문제-정의와-탐색-35분)
  - [4-1. Gap 분석 (5분)](#4-1-gap-분석-5분)
  - [4-2. Logic Tree (15분)](#4-2-logic-tree-15분)
  - [4-3. 가설 검증 (5분)](#4-3-가설-검증-5분)
  - [4-4. 실전 예시 3개 (10분)](#4-4-실전-예시-3개-10분)
- [S5. AI와 같이 한다면? (10분)](#s5-ai와-같이-한다면-10분)
- [마치며 + 설문 (5분)](#마치며--설문-5분)



## 자기소개 (10분)

> 이 부분은 멘토가 직접 작성합니다.



## S1. 엔지니어링이란? (15분)



### 엔지니어링 정의

강의 시작 전에 Claude에게 "엔지니어링이 뭐냐"고 물어봤다. 원문을 그대로 보여주겠다:

> Engineering is the application of scientific, mathematical, and practical knowledge to design, build, and maintain structures, machines, systems, and processes that solve problems or meet human needs.
>
> What unites all branches is a shared methodology: **identifying a problem, understanding the constraints** (cost, safety, materials, time), **designing a solution, testing it, and iterating** until it works reliably. Engineers balance creativity with rigor — they innovate, but within the bounds of physics, budgets, and safety standards.

꽤 잘 정리해줬다. 여기서 키워드를 뽑아보면:

1. **문제 식별** — 무엇이 문제인지 안다
2. **제약 이해** — 비용, 안전, 시간, 자원의 한계를 안다
3. **설계** — 제약 안에서 해법을 구상한다
4. **테스트** — 해법이 동작하는지 검증한다
5. **반복** — 안 되면 고치고, 다시 돌린다

정의를 읽어보면 고개를 끄덕이게 된다. 그런데 한 가지 질문을 던지고 싶다.

> **"방금 Claude에게 엔지니어링 정의를 물어봤다. 정의를 잘 말해준다. 그런데 정의를 안다는 것과 엔지니어링을 한다는 것은 같은가?"**

이 질문을 머릿속에 놓고 두 시간을 같이 보내보자.



### 소프트웨어 엔지니어링

Google의 Software Engineering at Google(일명 SWE Book)에서는 소프트웨어 엔지니어링을 이렇게 정의한다:

> **"Software engineering is programming integrated over time."**
>
> 소프트웨어 엔지니어링은 시간으로 적분된 프로그래밍이다.

이게 무슨 뜻인가? 프로그래밍과 엔지니어링의 차이를 한 줄로 정리하면 이렇다:

| | 프로그래밍 | 소프트웨어 엔지니어링 |
|---|---|---|
| 목표 | **지금** 돌아가게 만든다 | **시간이 지나도** 돌아가게 만든다 |
| 시간 축 | 순간 (t=0) | 적분 (∫dt) |
| 성공 기준 | "돌아간다" | "계속 돌아간다" |

"지금 돌아가게 만드는 것"은 프로그래밍이다. 그건 코드를 쓸 줄 아는 사람이라면 — 아니, 이제는 AI라면 — 누구나 할 수 있다.

문제는 **시간**이다. 시간이 지나면서 소프트웨어에 세 가지 압력이 누적된다:

1. **누적되는 유지보수** — 코드는 쓰는 순간부터 낡기 시작한다. 의존성이 업데이트되고, OS가 바뀌고, 보안 취약점이 발견된다. "한 번 짜고 끝"인 코드는 없다. 6개월 후에 돌아가지 않으면, 그건 엔지니어링이 아니라 일회용 스크립트다.

2. **트래픽 증가** — 사용자 100명일 때 돌아가던 코드가 사용자 10만 명이 되어도 돌아가나? 데이터가 1GB일 때 괜찮던 쿼리가 1TB일 때도 괜찮은가? 시간이 지나면 사용량이 늘고, 설계의 한계가 드러난다.

3. **누적되는 컨텍스트** — 이게 제일 과소평가되는 문제다. 코드가 늘어나면 "왜 이렇게 짰는지"를 아는 사람이 줄어든다. 원래 작성자가 퇴사하고, 요구사항의 배경이 구전으로만 남고, 어느 날 보면 아무도 이 코드가 왜 이런 모양인지 모른다. 코드는 있지만 의도가 사라진 거다.

이 세 가지를 다루는 게 엔지니어링이다. 코드를 짜는 행위가 아니라, **시간이 지나도 코드가 가치를 유지하도록 만드는 행위**가 엔지니어링이다.



### 테크니션 vs 엔지니어

코더(테크니션)와 엔지니어의 차이를 정리하면 이렇다:

| | 코더 (테크니션) | 엔지니어 |
|---|---|---|
| 핵심 능력 | 명세대로 구현한다 | 문제를 정의하고 제약 안에서 설계한다 |
| 시간 감각 | "지금 돌아가면 된다" | "6개월 후에도 돌아가야 한다" |
| AI와의 관계 | AI가 대체할 수 있다 | AI를 도구로 쓴다 |
| 의사결정 | "어떻게(How)" | "왜(Why)" + "무엇을(What)" |

솔직히 말하겠다. 코딩만 하는 사람 — "이거 구현해줘"라고 하면 구현하고, "저거 고쳐줘"라고 하면 고치는 사람 — 그 역할은 줄어들 것이다. AI가 그 일을 점점 더 잘하고 있기 때문이다.

> **"코더는 없어질 수 있다. 그런데 엔지니어는?"**

이건 열어두겠다. 다만 한 가지 전망은 공유한다: 소프트웨어 엔지니어는 **전문직**이 될 것이다. 의사나 변호사처럼. 헤드카운트는 줄어들고, 인건비는 올라갈 것이다. 한 사람이 AI와 함께 열 사람 몫을 해내는 세상이 오면, 그 한 사람의 가치는 올라간다. 어쩌면 국가 자격증이 필요해지는 날이 올 수도 있다 — 슬랍(slop: AI가 만들어낸 저품질 소프트웨어)으로부터 사회를 보호하기 위해서.

그래서 이 강의의 주제가 "엔지니어링 감각"이다. 코딩 스킬이 아니라, AI 시대에도 변하지 않을 감각.



## S2. 엔지니어링과 AI (20분)



### 모델이란?

"AI"라는 단어가 너무 많이 쓰이다 보니 실체가 흐려진다. 근본으로 돌아가자.

모델(Model)이란 **실제 현상과 결과를 피팅하는 작업**이다. 현실 세계에서 관찰된 데이터를 가져다가, "이 입력이 들어오면 이 출력이 나온다"는 관계를 수학적으로 근사하는 것이다.

딥러닝 모델의 본질은 결국 **matrix multiplication의 집합**이다. 행렬을 곱하고, 비선형 함수를 통과시키고, 또 행렬을 곱하고 — 이 과정을 수십, 수백 레이어 반복한다. 그 행렬들의 값(파라미터)을 데이터에 맞춰 조정하는 게 학습(training)이다.

거창하게 들리지만 핵심은 단순하다: **비선형적인 탐색 공간에서 입력과 출력의 관계를 피팅하기 위한 행렬 곱셈의 집합.** 그 이상도, 그 이하도 아니다.



### 언어 모델 — 분포 가설

그러면 언어 모델(Language Model)은 무엇을 피팅하는가?

언어학에 **분포 가설(Distributional Hypothesis)**이라는 개념이 있다:

> **"비슷한 맥락에서 등장하는 단어는 비슷한 의미를 가진다."**

"고양이는 ___에서 잔다"와 "강아지는 ___에서 잔다" — 빈칸에 들어갈 단어들이 비슷하다면, "고양이"와 "강아지"는 의미적으로 가깝다는 뜻이다. 언어 모델은 이 분포를 학습한다. 거대한 텍스트 데이터에서 "이 맥락 다음에 어떤 단어가 올 확률이 높은가"를 피팅한 것이다.

트랜스포머(Transformer)와 어텐션(Attention) 메커니즘은 이 피팅을 매우 효과적으로 해내는 구조다. 문맥의 어떤 부분에 주목할지를 학습하면서, 긴 텍스트에서도 맥락을 잃지 않는다.

결과적으로 언어 모델은 **인류가 쓴 텍스트의 통계적 분포를 압축한 것**이다. 그래서 정의를 잘 말해주고, 코드를 잘 짜주고, 번역을 잘 해준다 — 그 모든 게 텍스트 데이터에 들어있었으니까.



### 말하는 백과사전

AI의 본질에 대한 직관을 하나 공유하겠다.

> **현재의 AI는 "말하는 백과사전"에 가깝다.**

엄청나게 많은 것을 알고 있고, 물어보면 유창하게 대답한다. 어떤 질문이든 합리적으로 들리는 답을 내놓는다. 하지만 백과사전이 문제를 해결하지는 않는다. 백과사전은 참고하는 것이다.

여기서 반론이 나올 수 있다:

> "사람이 문제를 해결하는 것도 결국 뇌에 저장된 지식과 경험을 조합하는 거 아닌가? 그러면 충분히 큰 모델은 사람처럼 문제를 풀 수 있는 거 아닌가?"

솔직히 이건 열어두겠다. 현대 과학은 아직 "이성이란 무엇인가", "생각이란 무엇인가", "감각이란 무엇인가"에 대해 답을 내지 못했다. AI가 정말로 "이해"하는 건지, 아니면 이해하는 것처럼 보이는 건지 — 이 질문에 확정적으로 대답할 수 있는 사람은 없다.

다만, 근거를 하나 보여주겠다. 현재 AI가 못하는 게 있다는 근거.



### ARC-AGI-3

2026년 3월에 발표된 ARC-AGI-3 벤치마크가 있다. 이전 버전(ARC-AGI-1, ARC-AGI-2)은 정적인 시각 퍼즐이었는데, 프론티어 모델들이 거의 풀어버렸다(Gemini 3.1 Pro가 ARC-AGI-1에서 98%). 그래서 더 어려운 버전이 나왔다.

ARC-AGI-3의 방식은 이렇다:
- 64x64 컬러 그리드 환경에 에이전트를 떨어뜨린다
- **규칙이 없다** — 환경의 법칙을 스스로 탐색해야 한다
- **목표가 없다** — "이기는 조건"을 스스로 발견해야 한다
- **언어 힌트가 없다** — 자연어 설명이 일절 없다

결과:

| | 점수 |
|---|---|
| **Human** | **100%** |
| Gemini 3.1 | 0.37% |
| GPT-5.4 | 0.26% |
| Opus 4.6 | 0.25% |
| Grok-4.20 | 0% |
| 30일 최고점 (엔지니어링된 에이전트) | 12.58% |

사람은 100% 푼다. 최고 성능의 AI는 0.37%. 엔지니어들이 30일 동안 매달려서 만든 에이전트 시스템이 12.58%.

이 벤치마크가 시사하는 바가 크다. 현재 AI는 **이미 알려진 패턴을 재조합하는 데는 뛰어나지만, 완전히 새로운 환경에서 탐색하고 목표를 스스로 설정하는 능력은 사실상 없다.** 정의를 말해주는 것과 정의대로 행동하는 것은 다르다 — S1에서 던진 그 질문이 여기서 다시 돌아온다.



## S3. AI의 한계 — 비용과 의도 (10분)



### 재무적 관점

가정을 하나 해보자: AI가 기술적으로 모든 태스크를 100% 풀 수 있다고 치자. 그래도 문제가 있다. 돈이다.

현재 추정되는 1M(백만) 토큰당 operational cost:

| 모델 | 추정 운영 비용 (1M 토큰) | 비고 |
|---|---|---|
| Haiku (경량) | ~$1.25 | 간단한 태스크용 |
| Opus (대형) | $50 ~ $125 | Haiku 대비 100~200배 규모 |
| Mythos (차세대 초대형) | $125 ~ $180 | 추정치, 변수 많음 |

변수가 많다 — 캐시 히트율, 배치 효율, 하드웨어 발전 등. 기술이 발전하면 100배 정도는 개선될 수 있다. 하지만 현재 시점에서 "AI로 모든 걸 대체하겠다"는 건 경제적으로 말이 안 된다.

> **"아편전쟁으로 치면 지금은 아편을 푸는 단계다."**

지금 AI 회사들은 시장을 선점하기 위해 원가 이하로 API를 제공하고 있다. 사용자를 중독시키는 단계다. 영원히 이 가격이 유지될 거라고 생각하면 안 된다. 언젠가는 진짜 비용을 치러야 한다.



### 의도의 문제

비용보다 더 근본적인 한계가 있다. 소프트웨어 엔지니어가 하는 일의 핵심은 **"의도를 결정하는 것"**이다.

엔지니어만이 다루는 문제 5가지:

1. **추상화** — 현실의 복잡성을 어디까지 단순화할 것인가
2. **모델링** — 현실을 소프트웨어로 어떻게 표현할 것인가
3. **의도 표현** — 코드가 "왜" 이런 모양인지를 명확히 하는 것
4. **트레이드오프 관리** — 속도 vs 품질, 단기 vs 장기, 비용 vs 성능
5. **변화 대응** — 요구사항이 바뀌었을 때 기존 설계를 어떻게 진화시킬 것인가

이 다섯 가지에는 **정답이 없다.** 상황마다 다르고, 가치관에 따라 다르고, 조직의 맥락에 따라 다르다.

비유를 들어보자. 목돈이 생겼다. 집을 살까? 채권에 투자할까? 예금해둘까? — 이 질문에 "정답"이 있는가? 없다. 개인의 상황, 리스크 허용도, 미래 전망에 따라 달라진다. AI에게 물어보면 각 선택지의 장단점을 잘 정리해준다. 하지만 **결정은 AI가 하지 않는다.** 결정에 대한 책임을 질 수 없기 때문이다.

소프트웨어 엔지니어링도 마찬가지다. "이 시스템을 모놀리스로 갈까, 마이크로서비스로 갈까?" "이 기능을 지금 만들까, 나중에 만들까?" "이 기술 부채를 지금 갚을까, 다음 분기에 갚을까?" — 이 결정들은 맥락에 의존하고, 결과에 책임이 따르고, 정답이 없다. 말하는 백과사전은 이런 문제를 대신 풀어주지 않는다.



## 휴식 + Q&A (15분)

> 15분 쉬면서 질문 받겠습니다. 지금까지 이야기한 내용 중 궁금한 거, 반론, 아무거나 좋습니다.



## S4. 어엿한 엔지니어? — 문제 정의와 탐색 (35분)

전반부에서는 "엔지니어링이 뭔지", "AI가 왜 엔지니어링을 대체할 수 없는지"를 이야기했다. 후반부에서는 실전으로 들어간다. 엔지니어처럼 생각하는 법을 연습해보자.

엔지니어링의 첫 단계는 **문제를 정의하는 것**이다. 놀랍게도 많은 주니어 개발자들이 이 단계를 건너뛴다. "뭔가 안 된다 → 바로 코드를 고친다"로 직행하는 거다. 그런데 문제를 정확히 정의하지 않으면, 풀고 있는 게 진짜 문제인지조차 모른다.



### 4-1. Gap 분석 (5분)

문제 정의의 가장 기본적인 프레임워크는 **Gap 분석**이다:

```
현재 상태 (As-Is)  →  희망 상태 (To-Be)  →  그 사이의 GAP이 "문제"
```

예시:

| | 내용 |
|---|---|
| 현재 상태 | 도서관 운영자인데, 사람들이 책을 잘 안 읽는다 |
| 희망 상태 | 사람들이 책을 더 많이 읽었으면 좋겠다 |
| **GAP** | **사람들이 책을 더 많이 읽게 만들어야 한다** |

단순해 보이지만 이게 출발점이다. "사람들이 책을 안 읽어요"는 불만이지, 문제 정의가 아니다. 현재와 희망 사이의 Gap을 명시적으로 적는 순간, 비로소 "무엇을 해결해야 하는지"가 보인다.

Gap이 정의되면 다음 질문은: **왜 이 Gap이 존재하는가? 이 Gap을 어떻게 좁힐 수 있는가?** 여기서 Logic Tree가 등장한다.



### 4-2. Logic Tree (15분)


#### Logic Tree란?

Logic Tree는 문제를 체계적으로 분해하는 도구다. 핵심 원칙은 **MECE(Mutually Exclusive, Collectively Exhaustive)**:

- **Mutually Exclusive (상호 배타)** — 각 가지가 서로 겹치지 않는다
- **Collectively Exhaustive (전체 포괄)** — 모든 가지를 합치면 전체를 커버한다

MECE가 아닌 분해 vs MECE인 분해:

```
[non-MECE]  "매출이 왜 줄었나?"
 ├─ 마케팅 문제     ← 겹침: 마케팅이 안 되면 신규 유저도 줄지 않나?
 ├─ 제품 품질 문제
 └─ 신규 유저 감소

[MECE]  "매출이 왜 줄었나?"
 ├─ 거래 건수 감소
 │   ├─ 신규 고객 감소
 │   └─ 기존 고객 이탈
 └─ 건당 단가 하락
     ├─ 할인율 증가
     └─ 저단가 상품 비중 증가
```

MECE로 분해하면 빠뜨리는 게 없고 중복 분석이 없다. 이게 엔지니어링적 사고의 기본 근육이다.


#### 4개 Logic Tree

실전에서 자주 쓰는 Logic Tree 4가지를 소개한다.

**1. Issue Tree**

문제를 하위 이슈로 분해한다. "이 문제는 어떤 하위 문제들로 구성되어 있는가?"를 재귀적으로 물어보는 거다.

```
매출 하락
 ├─ 거래 건수 감소?
 │   ├─ 신규 고객 유입 감소?
 │   └─ 기존 고객 이탈 증가?
 └─ 건당 매출 감소?
     ├─ 할인율 증가?
     └─ 저단가 상품 비중 증가?
```

전체 구조를 파악할 때 좋다. "숲을 먼저 보고, 나무를 본다."

**2. Hypothesis Tree**

Issue Tree와 비슷하지만, 각 가지가 **검증 가능한 가설**이다. "이것이 원인일 것이다"라는 가설을 세우고, 데이터로 검증한다.

```
매출 하락의 원인 가설
 ├─ H1: 최근 UI 변경으로 전환율이 떨어졌다
 │   └─ 검증: A/B 테스트 전후 전환율 비교
 ├─ H2: 경쟁사가 할인 행사를 시작했다
 │   └─ 검증: 경쟁사 가격 모니터링 데이터
 └─ H3: 서버 응답 속도 저하로 이탈이 늘었다
     └─ 검증: 응답 시간 p95 추이 + 이탈률 상관관계
```

**3. 5 Whys**

도요타에서 만든 기법이다. "왜?"를 5번 반복하면 근본 원인에 도달한다.

```
문제: 서버가 다운되었다
 왜? → 메모리 부족으로 OOM이 발생했다
  왜? → 특정 API가 메모리를 과도하게 사용했다
   왜? → 대용량 쿼리 결과를 메모리에 전부 올렸다
    왜? → 페이징 처리가 없었다
     왜? → 초기 설계 시 데이터량 증가를 고려하지 않았다
```

표면 증상에서 근본 원인까지 수직으로 파고드는 도구다.

**4. Fishbone (Ishikawa) Diagram**

원인을 카테고리별로 정리한다. 제조업에서 유래했지만, 소프트웨어에서도 유용하다.

```
                         ┌─ 인프라: 서버 스펙, 네트워크
                         ├─ 코드: 버그, 비효율적 알고리즘
API 오류율 20% ←─────────┼─ 데이터: 잘못된 입력, 스키마 불일치
                         ├─ 프로세스: 배포 절차, 테스트 부재
                         └─ 외부: 서드파티 API 장애
```

원인이 어느 카테고리에 속하는지 한눈에 보인다. 여러 팀이 협업할 때 특히 유용하다 — "이건 인프라 문제인가, 코드 문제인가, 프로세스 문제인가"를 정리해주니까.

(참고: [12 Different Logic Trees](https://scottmillett.medium.com/12-different-logic-trees-and-reasoning-concepts-fa3aebcbd6f0))



### 4-3. 가설 검증 (5분)

Logic Tree로 문제를 분해하고, 가설을 세웠다. 이제 검증할 차례다.

여기서 중요한 마인드셋이 하나 있다. Apprenticeship Patterns라는 책에 나오는 개념인데:

> **"부서도 괜찮은 장난감(Breakable Toys)을 만들어라."**

가설 검증은 완벽한 솔루션을 만드는 게 아니다. 부서져도 괜찮은 수준의 프로토타입을 빠르게 만들어서, **내 가설이 맞는지를 확인하는 것**이다.

가설이 틀리면? 좋은 소식이다. 틀린 방향을 빨리 배제했으니까. 가설이 맞으면? 그때 본격적으로 설계하면 된다.

핵심은 **가설 → 실험 → 검증의 사이클을 빠르게 도는 것**이다. 한 번에 완벽한 답을 내려고 하지 말고, 작은 실험으로 방향을 잡아가는 것. 이게 엔지니어링의 반복(iteration)이다 — S1에서 이야기한 그 다섯 번째 키워드.



### 4-4. 실전 예시 3개 (10분)

지금까지 배운 도구를 실전에 적용해보자.


#### 예시 1: 작품 ID float 버그 (5 Whys)

> **문제: "작품 ID 123456789012345678을 조회했는데, 123456789012345680이 나와요."**

5 Whys로 파고들어 보자:

```
왜? → 조회한 ID와 반환된 ID가 다르다
 왜? → ID 값이 어딘가에서 변형되고 있다
  왜? → ID를 float으로 저장하고 있었다
   왜? → TypeScript에서 JSON.parse() 시 number 타입으로 파싱됨
    왜? → ID 필드의 타입을 명시적으로 지정하지 않았다
```

TypeScript에서 큰 정수를 float(IEEE 754 double)으로 다루면 정밀도 손실이 발생한다:

```typescript
// 문제 코드 — number 타입으로 파싱하면 정밀도가 날아간다
const data = JSON.parse('{"id": 123456789012345678}');
console.log(data.id); // 123456789012345680 — 마지막 자릿수가 바뀐다!

// 해결 — ID를 문자열로 다룬다
const data2 = JSON.parse('{"id": "123456789012345678"}');
console.log(data2.id); // "123456789012345678" — 안전하다
```

근본 원인은 "ID를 float으로 저장한 것"이 아니다. 그건 증상이다. 근본 원인은 **"ID 필드의 타입을 명시적으로 지정하지 않은 것"** — 즉, 설계 시 데이터 타입에 대한 의도가 없었던 것이다.


#### 예시 2: 매출 하락 (Issue Tree)

> **문제: "XX 회사에서 이번 달 매출이 20% 하락했습니다."**

Issue Tree로 분해:

```
매출 20% 하락
 ├─ 거래 건수 변화?
 │   ├─ 신규 고객 유입 감소?     → 마케팅 채널별 유입 데이터 확인
 │   ├─ 기존 고객 재구매율 하락?  → 코호트별 재구매 주기 분석
 │   └─ 이탈률 증가?            → 최근 이탈 사유 서베이
 └─ 건당 매출 변화?
     ├─ 평균 주문 금액 감소?     → 상품 카테고리별 주문 금액 추이
     └─ 할인/프로모션 영향?      → 프로모션 기간별 매출 비교
```

이렇게 분해하면 "매출이 떨어졌어요"라는 모호한 문제가 **데이터로 검증 가능한 5개의 구체적인 질문**으로 바뀐다. 각 가지를 데이터로 확인하면, 어디가 진짜 문제인지가 드러난다.


#### 예시 3: API 오류율 20% (Fishbone)

> **문제: "API 오류율이 갑자기 20%가 되었습니다."**

Fishbone으로 원인을 카테고리별로 정리:

```
                    ┌─ 인프라
                    │   ├─ 서버 CPU/메모리 부족?
                    │   └─ 네트워크 이슈 (DNS, LB)?
                    │
                    ├─ 코드
                    │   ├─ 최근 배포에 버그?
                    │   └─ 타임아웃 설정 변경?
                    │
API 오류율 20% ─────┼─ 데이터
                    │   ├─ DB 커넥션 풀 고갈?
                    │   └─ 잘못된 데이터 유입?
                    │
                    ├─ 외부 의존성
                    │   ├─ 서드파티 API 장애?
                    │   └─ CDN 이슈?
                    │
                    └─ 프로세스
                        ├─ 모니터링 알람 누락?
                        └─ 롤백 절차 부재?
```

실제 장애 상황에서 이 다이어그램을 머릿속에 그리면, 패닉에 빠지지 않고 체계적으로 원인을 좁혀갈 수 있다. "인프라는 정상인가? → 정상. 최근 배포가 있었나? → 있었다. → 배포 내용 확인" — 이런 식으로.



## S5. AI와 같이 한다면? (10분)

지금까지 이야기한 내용을 정리하고, 앞으로의 방향을 이야기하겠다.

엔지니어링은 "문제를 정의하고, 제약 안에서 설계하고, 검증하고, 반복하는 것"이었다. AI는 이 과정에서 강력한 도구가 될 수 있다. 하지만 도구일 뿐이다.

AI와 함께 엔지니어링하는 방법론을 한 줄로 줄이면:

> **Define → Divide → Conquer**

1. **Define** — 문제를 정의한다 (Gap 분석)
2. **Divide** — 문제를 분해한다 (Logic Tree)
3. **Conquer** — 분해된 하위 문제를 AI와 함께 하나씩 해결한다

여기서 1번과 2번은 사람이 해야 한다. AI는 3번에서 힘을 발휘한다. 잘 정의되고 잘 분해된 문제에 대해서는 AI가 놀라울 정도로 잘 답한다. 하지만 문제를 잘못 정의하면? AI는 잘못된 문제를 아주 유창하게 풀어줄 뿐이다.

> **"엔지니어링 감각 = AI에게 좋은 질문을 하는 능력"**

좋은 질문이란 결국: 문제를 정확히 정의하고, 적절히 분해하고, 제약을 명시하고, 검증 기준을 제시하는 것이다. 이 강의 시리즈가 기르려는 게 바로 그 감각이다.

앞으로 연강에서 다룰 주제 목록:

- **의도와 의심, 그리고 판단** — 가설과 검증
- **절차와 순서, 그리고 흐름** — 프로토콜, 예외, 시스템 흐름
- **도구 잘 다루기** — 깃, 셸, 기계
- **테스트** — 왜, 어떻게, 얼마나
- **리뷰** — 코드를 읽는 눈
- **의미 단위** — 상태, field presence, 일관성, 복잡도
- **코드 재사용** — 객체, 상속, 함수형, 구성, 인터페이스
- **트레이드오프** — 스루풋 vs 레이턴시, 품질 vs 속도
- **호환성과 무중단** — 변경해도 깨지지 않는 시스템



## 마치며 + 설문 (5분)

> 이 부분은 멘토가 직접 작성합니다. 설문 링크 포함.



---
### 아래 내용은 글감이므로 참고만 필요
---
## ARC-AGI-3 논문 https://arxiv.org/pdf/2603.24621v1

This paper is **"ARC-AGI-3: A New Challenge for Frontier Agentic Intelligence"**, published on March 24, 2026, by the ARC Prize Foundation (led by François Chollet). Here's what it covers:

## What is ARC-AGI-3?

ARC-AGI-3 is an interactive benchmark for studying agentic intelligence through novel, abstract, turn-based environments in which agents must explore, infer goals, build internal models of environment dynamics, and plan effective action sequences without explicit instructions. [arXiv](https://arxiv.org/abs/2603.24621) It's the third iteration in the ARC-AGI benchmark series, and it represents a major departure from its predecessors.

## How it differs from ARC-AGI-1 and ARC-AGI-2

The earlier benchmarks were static, grid-based visual puzzles — you show an AI a pattern and ask it to produce the correct output. ARC-AGI-3 changes the format completely: each environment is a turn-based game with its own internal logic, and there are no instructions, no descriptions, and no stated win conditions. [Awesome Agents](https://awesomeagents.ai/news/arc-agi-3-interactive-benchmark/) An agent is dropped into a novel 64×64 color grid environment and must figure everything out through exploration.

By 2025–2026, the earlier versions were approaching saturation. Gemini 3.1 Pro scored 98% on ARC-AGI-1 and 77.1% on ARC-AGI-2 [OfficeChai](https://officechai.com/ai/arc-agi-3/), so a harder challenge was needed.

## What agents must do

The benchmark tests several key capabilities: modeling (turning raw observations into a generalizable world model), goal-setting (identifying desirable future states without explicit instructions), and planning and execution (strategically mapping an action path while course-correcting in response to feedback). [ARC Prize](https://arcprize.org/competitions/2026/arc-agi-3)

Each environment has multiple levels of increasing difficulty. The agent needs to figure out the rules, discover what "winning" looks like, and carry what it learns forward across levels — all without any natural language cues.

## The headline result

Humans can solve 100% of the environments, while frontier AI systems score below 1% as of March 2026. [arXiv](https://arxiv.org/html/2603.24621v1) Specifically, Gemini 3.1 scored 0.37%, GPT-5.4 scored 0.26%, Opus 4.6 scored 0.25%, and Grok-4.20 scored 0%. [Emergent Mind](https://www.emergentmind.com/papers/2603.24621) During a 30-day developer preview, the best system (not a raw LLM, but an engineered agent) scored 12.58%. [Awesome Agents](https://awesomeagents.ai/news/arc-agi-3-interactive-benchmark/)

## Design principles

The benchmark maintains several key properties from previous versions: it avoids relying on language or external knowledge, uses only "Core Knowledge" priors (basic concepts humans are born with), and is calibrated using extensive human testing. Every task was human-calibrated with over 400 untrained participants to ensure 100% solvability. [arXiv](https://arxiv.org/pdf/2603.24621)

To prevent overfitting — a real concern since evidence emerged that some frontier models had seen ARC-AGI data in training — only 25 environments are publicly available, while 110 are held private for evaluation. [OfficeChai](https://officechai.com/ai/arc-agi-3/)

## The competition

ARC Prize 2026 is now live with over $2 million in prizes, split across an ARC-AGI-3 track and a final-year ARC-AGI-2 track. [ARC Prize](https://arcprize.org/blog/arc-agi-3-launch) All winning solutions must be open-sourced. The competitions are hosted on Kaggle.

## Why it matters

The paper argues that this enormous human-AI gap demonstrates that current AI systems, despite excelling at static reasoning and coding tasks, still lack the kind of fluid, adaptive intelligence that lets humans naturally explore and learn in unfamiliar environments. As long as there is a gap between AI and human learning, we do not have AGI — and ARC-AGI-3 makes that gap measurable by testing intelligence across time, not just final answers.
## 웹 브라우저 게임 역사에 대해소개 (10분)

최근에 재미있는 유튜브를 보았음.

플래시 게임은 기술적 장벽을 낮추는 역할을 했었음 

참고: https://www.youtube.com/watch?v=usGgol1JJwU

최근 개발씬에서 느끼는 AI 도 마찬가지... 소프트웨어 개발을 누구나 할수있다? 이건 몸소 체험하고 있는 사실임. 

그러나 소프트웨어 엔지니어를 완전 대체할수 있을까?

Spoiler alert: 본 강의 시리즈는 그것이 불가능한 이유에 대해서 이야기하고, 불가능하다는 이야기를 하려고함.
왜? 엔지니어만 결정할수 있는 것들이 있음. AI 가 결정하기 어려운 이유는 보통 결정에 대해 책임질수 없고, 정답이 없기 때문임.

예: 비슷한 종류: 집을 살까? 채권에 투자할까? 아님 예금해둘까?


## LLM?

AI 는 ??


## 소프트웨어 엔지니어 (10분)


### 엔지니어링

- 시간으로 적분된 프로그래밍
- 테크니션

### 소프트웨어 엔지니어링


### 시간이 야기하는 문제들

1. 누적되는 유지보수 문제
2. 트래픽
3. 누적되는 컨텍스트

### 왜 문제에요?


### 엔지니어링이란?

1. 분석

잘하는 것? 못하는것?

## 15분 질문 & 휴식

앞으로 이야기할 내용들.

## AI 가 이걸 해결할 수 있을까요? (25분)

### AI 에 대한 설명 (10분)


- 트랜스포머 & 비정형
- 언어모델
- ==> 말하는 백과사전

## 왜 못할까요?

## 비용 (5분)

## 의도 (5분)

- 복잡한 현실의 세계문제를 구조화하여 해결하는 행위
	- 추상화?
	- 모델링
	- 명확한 의도의 표현
	- 트로이드 오프의 관리
	- 변화에 대한 대응

- 말하는 백과사전은 저런 문제를 해결할수 없음.

##  쏘마에서는 무엇을 해볼 수 있을까요? (15분)

### 미감 기르기

- 완성된 작품을 봤을떄? 나는...이렇게 느껴요
	- 왜? 
- 
- 구체적으로는 이런것들...
	- 타입시스템
	- 조기 검출
	- 

### 좋은 습관 기르기 

- 걸고 넘어지는 습관
- 검증하는 습관
- 직접 해보는 습관

### 연습

- 리뷰하는 연습
	- 리뷰하기
- 빠르게 바이어블한 프러덕 만드는것 중요하다.
	- 그러나 동시에 계속 기업형 프로젝트에 관심이 있는 팀
	- 대규모 트래픽을 고려한 소프트웨어 엔지니어링 / Ops / SRE 등..

### 설문 (5분)
