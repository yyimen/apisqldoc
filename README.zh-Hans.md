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
   <strong>API 开发 = 一句 SQL</strong>
  </p>
  <p>
    快速将数据库封装成REST API 和 MCP Server，代理任意 API 并实现企业级安全防护
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

**apiSQL** 是一个强大的 API 开发管理平台，自带的API网关支持内网穿透，可以用来代理任何API，也可以连接数据数据库，快速将数据库封装为API和MCP Server（人工智能上下文协议服务器），安全的发布至外网，比起从头开始编写代码更快速、更简洁、更安全。



<br>

### 💡 apiSQL的由来
---

apiSQL 最初只是我们为内部使用开发的一个简单工具，目的是将 MySQL 的 SELECT、INSERT、UPDATE、DELETE 快速封装为可调用的 API。

**例如：开发一个查询的API，代码如下**
```SQL
SELECT * FROM area
``` 

##### 这样生成的API接口，同时支持 GET 和 POST 两种方法，演示免认证地址为：（浏览器可查看）

https://open.apisql.cn/api/demo-area/all




##### 获取第2个分页，每页10行数据，超时30秒，只需增加参数（浏览器可查看）
https://open.apisql.cn/api/demo-area/all?meta[pageNum]=2&meta[pageSize]=10&meta[timeout]=30


还可以：排序字段、正序/倒序、导出Exce、导出CSV、指定开发环境、自带类似Postman调口接调工具，边开发边调试，自动生成参数，不用单独记忆，无需频繁的切换工具。



<br><br>


**再例如MySQL开发一个同时支持【插入】和【更新】API接口**
```SQL
INSERT INTO `user_upsert` (id, name, age) 
VALUES 
  (:id, :姓名, :年龄)
ON DUPLICATE KEY UPDATE 
  id   =   VALUES(id),
  name =   VALUES(name),
  age  =   VALUES(age);
```
<br><br>


**自定义函数UDF转API（实现查询两个城市直线距离）**

```SQL
SELECT calc_city_distance(:name1, :name2) AS distance_desc;
```


<br><br>


**调用存储过程，实现一个转账事务的API：**
```SQL
CALL transfer_funds(:from_account_id, :to_account_id, :amount)

--说明 :from_account_id 为 转账人ID

--说明 :to_account_id 为 收款人ID

--说明 :amount 为 账转金额

```


<br><br>


### 简洁、优雅、高效！


<br><br>


随着实践深入，我们认为：**数据库本身就是最佳的后端**。无需重复造轮子，将数据库久经考验的高性能、稳定和强大功能，用最直接、最安全的方式封装成API服务，提供给前端调用，不香吗？

于是，apiSQL 从一个轻量工具逐步演进为一个全能 API 平台：

*   **支持更多的数据库**：从只支持 MySQL，扩展到支持 Oracle、SQLServer、PostgreSQL、新型数据库乃至各大数据平台。
  
*   **从简单查询到复杂逻辑**：从基础 CRUD，到支持存储过程、自定义函数、事务性多步 SQL，再到通过 JavaScript 脚本实现任意复杂度的业务逻辑，媲美云函数。

*   **从开放到安全**：从简单的 API 发布，到实现 API Key、IP 白名单、JWT（JSON Web Tokens）等多维度、企业级的安全认证体系。

*   **从工具到企业平台**：从一个单一功能，成长为支持多租户、多项目、多成员协作、快速生成API文档、私有化部署、K8s 编排的企业级平台，并提供免费版、专业版、企业版和开箱即用的 SaaS 云服务。

*   **从数据库 API 到 AI 场景集成**：不仅能内网穿透代理现有 API，连接数据库不写代码生成API，以及将数据库发布为 MCP Server 对接云端的 Coze、Dify 等 AI Agent，成为 AI 操作数据库的机械手臂。

<br><br>

### ✨ 核心特性

---

#### 🗄️ 多数据库支持

- **主流关系型数据库**：SQLite、MySQL、PostgreSQL、Oracle、SQLServer
- **OLTP数据库**：Doris、SelectDB、StarRocks、TiDB、华为 DWS（GaussDB）
- **对象全面覆盖**：支持将数据表、视图、存储过程、自定义函数统一封装为 API



#### ⚙️ 极速 API 构建

- **标准 SQL 支持**：基于标准 SQL 语句（SELECT、INSERT、UPDATE、DELETE），可一键生成 REST API，无需手写后端代码  
- **事务性 SQL 脚本**：支持多步 SQL 执行，具备事务控制能力，满足复杂业务处理需求  
- **实用功能**：支持多组自定义参数、分页、排序、嵌套调用、生成 Excel 等 API 能力  
- **自动文档生成**：根据参数类型自动生成 RESTful 接口文档，标注是否必填、枚举值范围、正则约束等  
- **内建调试工具**：集成 Postman 风格调试器，自动生成调用示例（cURL、JavaScript、Go 等语言）


#### 🧩 灵活脚本扩展能力

- **前后置脚本**：支持在 API 执行前后挂载多个 JavaScript 脚本（支持公共脚本复用），可用于数据加工、校验、流程控制等
- **媲美云函数**：可引入外部 npm 包，实现复杂逻辑，如数据校验、清洗、调用第三方服务等
- **公共脚本机制**：编写一次，多个接口复用，提高开发效率和一致性



#### 🛡️ 企业级网关与安全体系

- **多重认证机制**：支持 API Key、IP 白名单、JWT 等，满足不同场景的访问控制需求  
- **API 统一代理与增强**：可批量代理现有 API，统一接入认证、日志、限流等功能  
- **内网穿透能力**：全版本均支持安全的内网穿透，将私有数据源安全发布到公网  



#### 🤖 面向 AI 与未来的集成能力

- **AI 网关能力**：可代理外部 AI 模型（如 OpenAI）、或发布本地模型（如 Ollama），实现统一调用和负载集群  
- **MCP Server 支持**：支持将数据库转为 MCP（Model Context Protocol）服务，基于 SSE 与 Streamable HTTP，与 Dify、Coze 等 AI Agent 无缝集成  

<br><br>

### 🚀 快速入门
---
1.  **立即体验**：访问 [apisql.cn](https://www.apisql.cn/) 官网，注册即可免费试用。
2.  **查阅文档**：查阅[快速入门指南](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/020@%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/readme.html)，只需几分钟即可发布您的第一个 API。
3.  **选择您的部署方式**：
    *   **SaaS 云服务**：无需部署，注册即用。享受极致性价比，轻松应对海量请求。
    *   **免费版私有部署**：下载[免费版](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/030@%E5%85%8D%E8%B4%B9%E7%89%88-%E7%A7%81%E6%9C%89%E9%83%A8%E7%BD%B2/readme.html)，在您自己的服务器部署 apiSQL免费版。



<br><br>
### 📦 版本与服务
---
我们提供多种版本以满足不同用户的需求：

| 版本         | 目标用户           | 部署方式     | 核心特性                               |
|--------------|--------------------|--------------|----------------------------------------|
| **免费版**   | 个人开发者、小型团队 | 私有化部署   | 核心 API 开发功能                  |
| **专业版**   | 专业开发者、中型企业 | 私有化部署   | 更多高级功能                   |
| **企业版**   | 大型企业           | 私有化部署   | 多项目、多用户等完整的企业级解决方案        |
| **SaaS 云服务**| 所有用户           | 云端托管     | 免运维、开箱即用、按量付费               |

详细功能对比请参考 [官方定价页面](https://www.apisql.cn/pricing/)。

> ⚠️ **请注意**  
> apiSQL 提供功能强大的免费版本，可供私有部署和商业使用，但**项目当前并未开源**。



<br><br>

### 🛣️ 近期路线 (Roadmap)
---
我们正在构建更强大、更智能的 API 未来：

- 🏁   **[待发布] 数据库即 MCP Server**: 完善对 SSE 和 Streamable HTTP 的支持，将数据库一键发布为标准的 MCP Server。
- 🛠️ **[开发中] VS Code 插件**: 无需离开编辑器，将 apiSQL 作为中间件，直接在 VS Code 中开发和调试 API。

<br><br>

### 🔗 相关链接
---
- 🌐 **官网**: [https://www.apisql.cn/](https://www.apisql.cn/)
- 📘 **文档**: [https://docs.apisql.cn/](https://docs.apisql.cn/)
- 🔥【apiSQL最佳实践】 [https://www.bilibili.com/video/BV1eHGyzFE7x](https://www.bilibili.com/video/BV1eHGyzFE7x)
- 💬 **技术支持**: 请扫码加入微信群
  
  ![联系方式](./vitepress/book/010@入门/020@快速入门/images/WeCom_Group_QRcode.png)
