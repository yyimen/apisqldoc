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
    <strong>API development = One SQL</strong>
  </p>
  <p>
    Rapidly turn your database into a REST API and MCP Server, proxy any API, and achieve enterprise-grade security protection.
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

**apiSQL** is a powerful platform for API development and management. With its built-in API Gateway supporting secure tunneling, you can easily proxy any internal or external API, or connect to databases and expose them as APIs or MCP Servers (Model Context Protocol) with enterprise-grade security—faster, simpler, and safer than building from scratch.

<br>

### 💡 The Origin of apiSQL

---

apiSQL started as a simple internal tool to quickly expose MySQL's `SELECT`, `INSERT`, `UPDATE`, `DELETE` as APIs.

**For example: to develop a query API:**
```sql
SELECT * FROM area
```

This generates an API supporting both `GET` and `POST` methods. Demo URL (public, no auth):

https://open.apisql.cn/api/demo-area/all

**Paginate the result (page 2, 10 rows per page, 30s timeout):**

https://open.apisql.cn/api/demo-area/all?meta[pageNum]=2&meta[pageSize]=10&meta[timeout]=30

You can also: sort fields, export to Excel/CSV, define environments, and debug in a built-in Postman-style interface—parameters auto-generated, no switching tools.

<br><br>

**Example of an upsert API with MySQL:**
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

**Custom function API to calculate city distance:**
```sql
SELECT calc_city_distance(:name1, :name2) AS distance_desc;
```

<br><br>

**Call a stored procedure to create a transfer transaction API:**
```sql
CALL transfer_funds(:from_account_id, :to_account_id, :amount)
```

<br><br>

### Simple. Elegant. Efficient.

---

With continued use, we realized: **the database is the ultimate backend**.

Why reinvent the wheel? Leverage the battle-tested performance, stability, and power of databases by exposing them securely and directly as APIs.

apiSQL has evolved from a lightweight internal tool to a full-featured API platform:

- **Multi-database support**: from MySQL to Oracle, PostgreSQL, SQLServer, and modern big data platforms.
- **From basic to complex logic**: supports stored procedures, user-defined functions, transactional SQL, and even JavaScript scripts for cloud-function-level logic.
- **Enterprise-grade security**: built-in support for API Keys, IP whitelisting, JWT, and more.
- **From tool to platform**: multi-tenant, multi-project, team collaboration, auto-docs, private deployment, K8s support, and multiple editions (Free, Pro, Enterprise, SaaS).
- **AI integration**: proxy existing APIs, generate APIs from SQL, and expose databases as MCP Servers for integration with AI agents like Coze and Dify.

<br><br>

### ✨ Key Features

---

#### 🗄️ Multi-Database Support

- **Relational Databases**: SQLite、MySQL, PostgreSQL, Oracle, SQLServer
- **OLTP/Analytical**: Doris, SelectDB, StarRocks, TiDB, Huawei DWS (GaussDB)
- **Full Object Support**: tables, views, stored procedures, UDFs → APIs

#### ⚙️ Rapid API Generation

- **SQL-first API**: Write `SELECT/INSERT/UPDATE/DELETE`, get a REST API—no backend code needed
- **Transactional Support**: Multi-step SQL with full transaction control
- **Power Features**: paging, sorting, nested calls, Excel/CSV export, custom parameters
- **Auto Docs**: Auto-generated RESTful docs with required fields, enums, regex validation
- **Built-in Debugger**: Postman-style tool with cURL, JS, Go snippets

#### 🧩 Script Extensibility

- **Pre/Post Hooks**: Attach JavaScript before or after API execution (reuse with global scripts)
- **Cloud-function Power**: Use npm packages to validate, transform, fetch external services
- **Reusable Logic**: Shared scripts for faster dev and consistency

#### 🛡️ Enterprise-Grade Gateway & Security

- **Multi-auth Support**: API Key, IP whitelist, JWT, more
- **API Proxy & Enhancements**: Centralize auth, logging, throttling across your APIs
- **Tunneling & Exposure**: Safely expose internal data sources over the internet

#### 🤖 AI-Ready Integration

- **AI Gateway**: Proxy OpenAI or local LLMs (e.g. Ollama), route requests, support clusters
- **MCP Server**: Convert DB to MCP (Model Context Protocol), enabling SSE and streaming for AI agents like Dify, Coze

<br><br>

### 🚀 Get Started

---

1. **Try Now**: Visit [apisql.cn](https://www.apisql.cn/) and register for a free trial
2. **Read the Docs**: Follow the [Quick Start Guide](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/020@%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/readme.html)
3. **Choose Your Deployment**:
   - **SaaS**: Zero setup, instantly usable, scalable cloud version
   - **Free Private Version**: [Download here](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/030@%E5%85%8D%E8%B4%B9%E7%89%88-%E7%A7%81%E6%9C%89%E9%83%A8%E7%BD%B2/readme.html) and deploy on your server

<br><br>

### 📦 Editions

---

| Edition       | For                     | Deployment   | Key Features                          |
|---------------|--------------------------|--------------|----------------------------------------|
| **Free**      | Individuals, Small Teams | Self-hosted  | Core API functionality                 |
| **Pro**       | Pro Devs, Mid-size Teams | Self-hosted  | Advanced features                      |
| **Enterprise**| Large Organizations      | Self-hosted  | Multi-project, multi-user, full-stack  |
| **SaaS**      | Everyone                 | Cloud-hosted | Hassle-free, ready-to-use, pay-as-you-go |

👉 [View full comparison](https://www.apisql.cn/pricing/)

> ⚠️ **Please Note**  
> apiSQL provides a fully functional free version for self-hosted and commercial use, but the project is **not open-source**.

<br><br>

### 🛣️ Roadmap

---

- 🏁 **[Upcoming] DB as MCP Server**: Full support for SSE & Streamable HTTP
- 🛠️ **[In Dev] VS Code Plugin**: Develop/debug apiSQL right inside VS Code

<br><br>

### 🔗 Links

---

- 🌐 [Official Website](https://www.apisql.cn/)
- 📘 [Documentation](https://docs.apisql.cn/)
- 🔥 [Best Practice Demo (Bilibili)](https://www.bilibili.com/video/BV1eHGyzFE7x)

- 💬 **Support**: Please open an issue for questions.