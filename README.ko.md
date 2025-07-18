<p align="right">
 📘 
  <a href="./readme.md">English</a> | 
  <a href="./README.zh-Hans.md">简体中文</a> | 
  <a href="./README.zh-Hant.md">繁體中文</a> | 
  <a href="./README.ja.md">日本語</a> | 
  <a href="./README.ko.md">한국어</a> | 
  <a href="./README.de.md">Deutsch</a> | 
  <a href="./README.fr.md">Français</a> | 
  <a href="./README.it.md">Italiano</a> | 
  <a href="./README.pt.md">Português</a> | 
  <a href="./README.es.md">Español</a> | 
  <a href="./README.ru.md">Русский</a>
</p>



<br><br>

<div align="center">

  <h1 style="font-size: 28px; font-weight: 800; background-image: linear-gradient(to right, #06b6d4, #6bc283); -webkit-background-clip: text; background-clip: text; color: transparent;">
    <span>api</span><strong>SQL</strong>
  </h1>

  <p>
    <strong>API 개발 = 한 줄의 SQL</strong>
  </p>
  <p>
    데이터베이스를 빠르게 REST API 및 MCP 서버로 전환하고, 외부 또는 내부 API를 프록시하며, 엔터프라이즈급 보안을 구현하세요.
  </p>
  <p>
    <a href="https://docs.apisql.cn/">
      <img src="https://img.shields.io/badge/Docs-Documentation-blue.svg" alt="Docs" />
    </a>
    <a href="https://www.apisql.cn/pricing/">
      <img src="https://img.shields.io/badge/Editions-Pricing-green.svg" alt="Editions" />
    </a>
    <a href="https://www.apisql.cn/">
      <img src="https://img.shields.io/badge/Website-apisql.cn-orange.svg" alt="Website" />
    </a>
  </p>
</div>

---

**apiSQL**은 API 개발과 관리를 위한 강력한 플랫폼입니다. 내장 API 게이트웨이를 통한 보안 터널링으로, 내부 또는 외부 API를 쉽게 프록시하거나 데이터베이스를 안전하게 API 또는 MCP 서버(Model Context Protocol)로 노출할 수 있습니다. 개발보다 빠르고 간단하며 안전합니다.

<br>

### 💡 apiSQL의 시작

---

apiSQL은 원래 MySQL의 `SELECT`, `INSERT`, `UPDATE`, `DELETE`를 빠르게 API로 노출하기 위한 내부 도구로 시작되었습니다.

**예: 조회 API 생성**
```sql
SELECT * FROM area
```

이 쿼리는 `GET` 및 `POST` 메서드를 지원하는 API를 생성합니다. 데모 URL (공개, 인증 없음):

https://open.apisql.cn/api/demo-area/all

**결과를 페이징 처리 (2페이지, 페이지당 10개, 타임아웃 30초):**

https://open.apisql.cn/api/demo-area/all?meta[pageNum]=2&meta[pageSize]=10&meta[timeout]=30

또한 필드 정렬, Excel/CSV 내보내기, 환경 정의, 내장 Postman 스타일 인터페이스로 디버깅도 가능합니다 — 파라미터는 자동 생성되며, 도구 전환 없이 바로 사용 가능합니다.

<br><br>

**MySQL을 활용한 Upsert API 예시:**
```sql
INSERT INTO `user_upsert` (id, name, age) 
VALUES 
  (:id, :name, :age)
ON DUPLICATE KEY UPDATE 
  id = VALUES(id),
  name = VALUES(name),
  age = VALUES(age);
```

<br><br>

**도시 간 거리 계산을 위한 사용자 정의 함수 API 예시:**
```sql
SELECT calc_city_distance(:name1, :name2) AS distance_desc;
```

<br><br>

**이체 트랜잭션 생성을 위한 저장 프로시저 호출 API 예시:**
```sql
CALL transfer_funds(:from_account_id, :to_account_id, :amount)
```

<br><br>

### 단순. 우아함. 효율적.

---

사용이 지속되면서 우리는 깨달았습니다: **데이터베이스야말로 최고의 백엔드입니다.**

바퀴를 다시 만들 필요는 없습니다. 검증된 성능, 안정성, 확장성을 갖춘 데이터베이스를 직접 노출하여 API로 활용하세요.

apiSQL은 가벼운 내부 도구에서 고급 API 플랫폼으로 진화했습니다:

- **다양한 데이터베이스 지원**: MySQL, Oracle, PostgreSQL, SQLServer, 최신 빅데이터 플랫폼까지
- **간단한 쿼리부터 복잡한 로직까지**: 저장 프로시저, 사용자 정의 함수, 트랜잭션 SQL, 클라우드 함수 수준의 JS 스크립트 지원
- **엔터프라이즈급 보안**: API 키, IP 허용 목록, JWT 등 다양한 인증 방식 내장
- **도구를 넘어 플랫폼으로**: 멀티 테넌시, 멀티 프로젝트, 팀 협업, 자동 문서화, 사설 배포, K8s 지원, 다양한 에디션 (Free, Pro, Enterprise, SaaS)
- **AI 통합**: 기존 API 프록시, SQL 기반 API 생성, MCP 서버로 DB를 노출하여 Coze, Dify 같은 AI 에이전트와 연동

<br><br>

### ✨ 주요 기능

---

#### 🗄️ 멀티 데이터베이스 지원

- **관계형 DB**: SQLite, MySQL, PostgreSQL, Oracle, SQLServer
- **OLTP/분석형**: Doris, SelectDB, StarRocks, TiDB, Huawei DWS (GaussDB)
- **모든 오브젝트 지원**: 테이블, 뷰, 저장 프로시저, UDF → API

#### ⚙️ 빠른 API 생성

- **SQL 기반 API**: `SELECT/INSERT/UPDATE/DELETE`만 작성하면 REST API 생성 — 백엔드 코드 불필요
- **트랜잭션 지원**: 다단계 SQL 및 트랜잭션 제어 가능
- **강력한 기능**: 페이징, 정렬, 중첩 호출, Excel/CSV 내보내기, 커스텀 파라미터
- **자동 문서화**: 필수 필드, enum, 정규식 등 자동 문서 생성
- **내장 디버거**: Postman 스타일 도구 (cURL, JS, Go 코드 스니펫 포함)

#### 🧩 스크립트 확장성

- **Pre/Post 훅**: API 실행 전후에 JavaScript 삽입 가능 (글로벌 스크립트 재사용 가능)
- **클라우드 함수 수준**: 외부 서비스 호출, 변환, 검증용 npm 패키지 사용 가능
- **재사용 로직**: 공통 스크립트를 통해 빠른 개발과 일관성 확보

#### 🛡️ 엔터프라이즈 보안 및 게이트웨이

- **다중 인증 지원**: API 키, IP 화이트리스트, JWT 등
- **API 프록시 및 보안 강화**: 인증, 로깅, 제한 등을 중앙에서 관리
- **터널링 및 노출**: 내부 데이터 소스를 안전하게 외부에 노출 가능

#### 🤖 AI 통합 준비

- **AI 게이트웨이**: OpenAI 또는 로컬 LLM (예: Ollama) 프록시, 요청 라우팅, 클러스터 지원
- **MCP 서버**: DB를 MCP (Model Context Protocol)로 변환 — Dify, Coze 등 AI 에이전트와의 연동을 위한 SSE 및 스트리밍 지원

<br><br>

### 🚀 시작하기

---

1. **지금 체험**: [apisql.cn](https://www.apisql.cn/)에서 무료 체험 등록
2. **문서 읽기**: [빠른 시작 가이드](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/020@%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/readme.html) 따라하기
3. **배포 방식 선택**:
   - **SaaS**: 설치 필요 없음, 즉시 사용 가능, 클라우드 확장형
   - **무료 사설 버전**: [다운로드 링크](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/030@%E5%85%8D%E8%B4%B9%E7%89%88-%E7%A7%81%E6%9C%89%E9%83%A8%E7%BD%B2/readme.html)에서 설치 후 서버에 배포

<br><br>

### 📦 에디션

---

| 에디션         | 대상                       | 배포 방식     | 주요 기능                                 |
|----------------|----------------------------|--------------|-------------------------------------------|
| **Free**       | 개인, 소규모 팀             | 자체 호스팅   | 핵심 API 기능                              |
| **Pro**        | 전문가, 중형 팀             | 자체 호스팅   | 고급 기능                                 |
| **Enterprise** | 대기업                     | 자체 호스팅   | 멀티 프로젝트, 멀티 사용자, 풀스택 지원    |
| **SaaS**       | 모든 사용자                 | 클라우드 호스팅 | 설치 필요 없음, 바로 사용, 종량제 과금     |

👉 [전체 비교 보기](https://www.apisql.cn/pricing/)

> ⚠️ **주의 사항**  
> apiSQL은 자체 호스팅 및 상용 사용이 가능한 무료 버전을 제공하지만, 이 프로젝트는 **오픈소스가 아닙니다**.

<br><br>

### 🛣️ 로드맵

---

- 🏁 **[예정] DB를 MCP 서버로**: SSE 및 스트리밍 HTTP 완전 지원
- 🛠️ **[개발 중] VS Code 플러그인**: VS Code 내에서 apiSQL 개발/디버깅

<br><br>

### 🔗 링크

---

- 🌐 [공식 홈페이지](https://www.apisql.cn/)
- 📘 [문서](https://docs.apisql.cn/)
- 🔥 [베스트 프랙티스 데모 (Bilibili)](https://www.bilibili.com/video/BV1eHGyzFE7x)

- 💬 **문의**: 궁금한 점은 Issue로 남겨주세요.
