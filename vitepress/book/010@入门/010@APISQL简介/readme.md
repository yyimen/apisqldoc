# apiSQL简介

  快速将数据库封装成REST API 和 MCP Server，代理任意 API 并实现企业级安全防护

## 核心功能

⭐ **快速开发**： 将数据库增删改查/视图/存储过程直接发布为HTTPS API

⭐ **脚本扩展**： 支持通过前置JS脚本进行请求预处理，后置脚本实现响应二次加工

⭐ **混合架构**： 既能对接数据库，也可代理已有第三方API实现统一管理

⭐ **企业级安全**： 集成IP白名单、AK/SK密钥、Token令牌、JSON Web Token（JWT）认证等

⭐ **云原生架构**： 服务端基于K8S实现自动伸缩扩容，流量高峰自动扩展Pod资源

⭐ **分布式架构**： 客户端跨地区分布式部署数据网关，支持多活架构与智能负载均衡

⭐ **国产化适配**： 支持华为openEuler、统信UOS、麒麟等信创操作系统及国产服务器硬件

![APISQL系统架构示意图](./images/APISQL_DiagramV1b.png)

<div style="text-align: center;">APISQL系统架构示意图</div>

<br>
<br>

## 版本对比
<table>
    <thead>
        <tr>
            <th>模块</th>
            <th>功能</th>
            <th>说明</th>
            <th>免费版</th>
            <th>专业版</th>
            <th>企业版</th>
            <th>在线云版本</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="5">基础部署与访问</td>
            <td>私有部署</td>
            <td>支持私有化本地部署</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>不适用</td>
        </tr>
        <tr>
            <td>支持https访问</td>
            <td>支持https访问并自动续期ssl证书</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>多账号登陆</td>
            <td>支持使用多个账号登陆</td>
            <td>单admin账号</td>
            <td>单admin账号</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>自定义Logo</td>
            <td>可自定义平台Logo</td>
            <td>✘</td>
            <td>✘</td>
            <td>✔</td>
            <td>不适用</td>
        </tr>
        <tr>
            <td>自定义登陆页面</td>
            <td>自定义登陆页面</td>
            <td>✘</td>
            <td>✘</td>
            <td>✔</td>
            <td>不适用</td>
        </tr>
        <tr>
            <td rowspan="1">数据网关</td>
            <td>数据网关</td>
            <td>安装多个数据网关，支持跨地区连接不同机房的数据库</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td rowspan="3">数据源</td>
            <td>数据库</td>
            <td>支持多种关系型数据库如MySQL、PostgreSQL、SQL Server、Oracle、SQLite、StarRocks、达梦、通过Http扩展连接自定义数据库</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>多环境</td>
            <td>可以为开发环境和生产环境各配置一个数据库，但表名需一样</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>数据管理</td>
            <td>Web端浏览数据库和表以及写SQL语句操作数据库</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td rowspan="6">API管理</td>
            <td>支持SQL</td>
            <td>API开发，支持使用SQL，多个SQL语句，不限增加删改查及调存储过程</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>支持JavaScript</td>
            <td>支持使用JavaScript编程语言，实现丰富自定义功能。</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>支持API代理</td>
            <td>支持将现有单个或多个API代理发布，提供认证、访问日志等统一管理</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>支持前后置脚本</td>
            <td>可配置前置js脚本进行请求处理，后置脚本对响应数据再加工等操作</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>公共脚本</td>
            <td>可创建公共脚本，以供多个API接口复用，避免重复创建脚本</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>API文档</td>
            <td>将请求和响应提取成API文档一部分，详细到字段类型级别</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td rowspan="4">访问控制</td>
            <td>访问控制</td>
            <td>支持API Key、JWT、IP等多种API认证</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>过期时间</td>
            <td>支持访问控制策略指定时间过期</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>多环境授权</td>
            <td>区分属于开发环境还是生产环境的访问控制策略</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>使用平台用户认证</td>
            <td>使用平台用户、密码进API认证</td>
            <td>✘</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td rowspan="3">高级特性</td>
            <td>项目中心</td>
            <td>支持创建多个项目，每个项目添加只读、开发、管理员用户参与项目</td>
            <td>✘</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>用户管理</td>
            <td>增加用户、禁用/启用用户、重置密码、删除用户等操作</td>
            <td>✘</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>动态特性</td>
            <td>REST功能：不写SQL生成接口；SUDB：一个接口调用整个数据库；</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td rowspan="4">企业与集群能力</td>
            <td>主控负载均衡</td>
            <td>核心程序一主控、多work节点协同工作，高可用、负载均衡。</td>
            <td>✘</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>数据网关集群模式</td>
            <td>同一机房，将多个数据网关分布式部署，组成高可用集群、负载均衡</td>
            <td>✘</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>K8S环境</td>
            <td>支持K8S私有化环境部署，自动扩缩容</td>
            <td>✘</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>授权验证</td>
            <td>连接互联网进行授权许可验证</td>
            <td>✔</td>
            <td>✔</td>
            <td>本地授权</td>
            <td>不适用</td>
        </tr>
        <tr>
            <td rowspan="3">数据统计与日志</td>
            <td>数据统计概览</td>
            <td>API总数，已上线API，近30天每天API调用次数、入站/出站量等统计</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>接口日志</td>
            <td>提供接口访问日志，时间、接口路径、耗时、客户端IP、HTTP状态等</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
        <tr>
            <td>操作日志</td>
            <td>系统人员操作的日志：时间、事件、用户名、客户端IP等</td>
            <td>✘</td>
            <td>✔</td>
            <td>✔</td>
            <td>✔</td>
        </tr>
    </tbody>
</table>

<br>
<br>

## 应用场景


### 政企应用集成

✔️ ​**企业级系统互联**
企业内部ERP/OA/CRM/HR/WMS之间的快速集成，企业SCM系统与上下游ERP跨国集成，支持API传多个参数、运行多步SQL事务，请求多次预处理和响应多步加工等。

✔️ **智慧校园统一数据开放平台**
围绕API“发布-管理-分享-监控”，提供全面、权威的数据资源，涵盖人事、财务、科研、资产、教务、研究生、学工、就业、图书、宿舍等系统接口，高效服务全校师生和职能部门。

✔️ **药品流向数据跨地区获取**
支持跨地区、分布式API网关，及时获取到各地医药批发、零售药店的药品流向数据，提升制药厂和药品经营监管单位的效率。

✔️ **跨系统数据同步**
内网ERP订单、MES生产物料主数据、物流发货情况数据同步提交至明道云API和其他电商SaaS软件API。

✔️ **数据大屏API开发**
为数据大屏提供快速公网可访问的API，例如对接阿里云DataV、开发的大屏前端。

✔️ **轻量化ESB解决方案**
实现现有API注册、开发新API、安全API管理、监控和统计、开发中和生产上线的版本管理等企业服务总线核心功能。

✔️ **OLTP数据库API开发**
MySQL、Oracle、SQLServer、PostgreSQL、SQLite、达梦等OLTP关系型数据库，单表和整库CRUD一个URL的API搞定。

✔️ **OLAP数据库API发布**
Apache Doris、SelectDB、StarRocks、TiDB、华为DWS(GaussDB)等OLAP数据库，整个库、表快速发布为API。

✔️ **API开发管理平台**
作为企业级API开发管理平台、支持数据库生成API，支持分页、多参数、请求体和响应多步js脚本；支持批量接入已有API，以及API安全的访问控制。

✔️ **应用集成与统一管理平台**
作为应用集成平台，将多个分支机构内部数据、已有API发布到互联网，供企业内部应用、上下游企业、政府监管系统、SaaS软件等安全调用统一管理。

✔️ **企业数据服务平台**
业务人员常需数据导出Excel，赋能IT部门快速开发出Excel、CSV的后端API，方便企业应用调用，释放数据生产力。

✔️ **小任务应用平台**
小任务也能发挥大作用，例如定时扫描数据库表，当库存值小于预警值时，后置脚本通过webhook推送消息到微信群通知用户。

<br>
<br>

### AI大模型方面

✔️ ​**大模型API公网化服务**
支持将本地局域网的DeepSeek API发布至公网自用，或将算力资源以模型API形式进行出租，无需端口映射、服务器、公网IP及HTTPS证书配置。

✔️ ​**多云API资源池整合**
可接入多个云厂商的DeepSeek API构建资源池，实现大模型API高可用部署，保障业务连续性及服务可靠性。

✔️ ​**智能体实时数据接口**
将本地数据库以API方式快速发布至互联网，为AI智能体（Agent）及自建RAG系统提供实时参数调用能力，解决对话式AI的用户数据权限难题。

✔️ ​**全球分布式API网关**
支持全球分布式部署APISQL网关，仅需基础网络条件即可实现OpenAI、xAI Grok、Google Gemini等国际大模型API的中转服务，通过二次分发多APIkey满足多项目调用需求。

<br>

### 个人应用方面

✔️ ​**个人开发者公网调试支持**
为内网个人开发环境提供HTTPS备案域名访问能力，数据库API快速上线公网，助力小程序等应用便捷调试。

✔️ ​**毕业设计快速开发平台**
提供零服务器依赖的后端开发解决方案，简化学生毕业设计中的API开发与部署流程。

✔️ ​**轻量级脚本运行环境**
API网关集成Node.js能执行多步JavaScript脚本。例如：免费SSL证书三个月到期前，自动续签。

✔️ ​**敏捷原型开发工具**
支持主流数据库一键转为API，一个固定请求的API地址，玩转所有数据库、所有表的CURD增删改查，节省后端开发成本。


