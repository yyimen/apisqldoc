<p align="right">
 📘 
  <a href="./readme.md">English</a> | 
  <a href="./README.zh-Hans.md">簡體中文</a> | 
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
   <strong>API 開發 = 一句 SQL</strong>
  </p>
  <p>
    快速將資料庫封裝成 REST API 和 MCP Server，代理任意 API 並實現企業級安全防護
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

**apiSQL** 是一個功能強大的 API 開發管理平台，內建的 API 閘道支援內網穿透，可用於代理任何 API，也可連接資料庫，快速將資料庫封裝為 API 和 MCP Server（人工智慧上下文協定伺服器），安全地發布至外網，相較於從零開始編寫程式碼，更為快速、簡潔、安全。



<br>

### 💡 apiSQL 的由來
---

apiSQL 最初只是我們為內部使用而開發的簡易工具，旨在將 MySQL 的 SELECT、INSERT、UPDATE、DELETE 快速封裝為可呼叫的 API。

**例如：開發一個查詢 API，程式碼如下**
```SQL
SELECT * FROM area
``` 

##### 如此產生的 API 介面，同時支援 GET 與 POST 兩種方法，示範免認證網址如下：（可直接用瀏覽器開啟）

https://open.apisql.cn/api/demo-area/all




##### 若要取得第 2 頁，每頁 10 筆資料，逾時 30 秒，僅需加上參數即可（可直接用瀏覽器開啟）
https://open.apisql.cn/api/demo-area/all?meta[pageNum]=2&meta[pageSize]=10&meta[timeout]=30


此外，還支援排序欄位、升冪/降冪、匯出 Excel、匯出 CSV、指定開發環境，並內建類似 Postman 的介面調試工具，讓您邊開發邊偵錯，自動產生參數，無需額外記憶，也免去頻繁切換工具的麻煩。



<br><br>


**再以 MySQL 為例，開發一個同時支援【插入】與【更新】的 API 介面**
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


**將自訂函數 (UDF) 轉換為 API（以查詢兩城市間直線距離為例）**

```SQL
SELECT calc_city_distance(:name1, :name2) AS distance_desc;
```


<br><br>


**呼叫預存程序，實現一個轉帳交易的 API：**
```SQL
CALL transfer_funds(:from_account_id, :to_account_id, :amount)

--說明 :from_account_id 為 轉帳人ID

--說明 :to_account_id 為 收款人ID

--說明 :amount 為 轉帳金額

```


<br><br>


### 簡潔、優雅、高效！


<br><br>


隨著實踐的深入，我們體認到：**資料庫本身就是最佳的後端**。何不將資料庫久經考驗的高效能、穩定性與強大功能，以最直接、最安全的方式封裝成 API 服務，供前端直接呼叫，豈不美哉？

於是，apiSQL 從一個輕量級工具，逐步演化為一個全方位的 API 平台：

*   **支援更多資料庫**：從僅支援 MySQL，擴展至 Oracle、SQLServer、PostgreSQL、新型資料庫乃至各大數據平台。
  
*   **從簡單查詢到複雜邏輯**：從基礎的 CRUD，發展到支援預存程序、自訂函數、交易型多步驟 SQL，再到能透過 JavaScript 指令碼實現任意複雜度的業務邏輯，媲美雲端函數。

*   **從開放到安全**：從單純的 API 發布，進化到實現 API Key、IP 白名單、JWT (JSON Web Tokens) 等多維度的企業級安全認證體系。

*   **從工具到企業平台**：從單一功能，成長為支援多租戶、多專案、多成員協作、快速生成 API 文件、私有化部署、K8s 編排的企業級平台，並提供免費版、專業版、企業版及開箱即用的 SaaS 雲端服務。

*   **從資料庫 API 到 AI 場景整合**：不僅能透過內網穿透代理現有 API，連接資料庫免寫程式碼生成 API，還能將資料庫發布為 MCP Server，對接雲端的 Coze、Dify 等 AI Agent，成為 AI 操作資料庫的機械手臂。

<br><br>

### ✨ 核心特性

---

#### 🗄️ 多資料庫支援

- **主流關聯式資料庫**：SQLite、MySQL、PostgreSQL、Oracle、SQLServer
- **OLAP 資料庫**：Doris、SelectDB、StarRocks、TiDB、GaussDB
- **物件全面覆蓋**：支援將資料表、視圖、預存程序、自訂函數統一封裝為 API



#### ⚙️ 極速 API 建構

- **標準 SQL 支援**：基於標準 SQL 語句 (SELECT, INSERT, UPDATE, DELETE)，可一鍵生成 REST API，無需手寫後端程式碼  
- **交易型 SQL 指令碼**：支援多步驟 SQL 執行，具備交易控制能力，滿足複雜業務處理需求  
- **實用功能**：支援多組自訂參數、分頁、排序、巢狀呼叫、生成 Excel 等 API 能力  
- **自動文件生成**：根據參數類型自動生成 RESTful 介面文件，標註是否必填、列舉值範圍、正則表達式約束等  
- **內建偵錯工具**：整合 Postman 風格的偵錯器，自動生成呼叫範例 (cURL、JavaScript、Go 等語言)


#### 🧩 靈活的指令碼擴充能力

- **前後置指令碼**：支援在 API 執行前後掛載多個 JavaScript 指令碼 (支援共用指令碼複用)，可用於資料加工、驗證、流程控制等
- **媲美雲端函數**：可引入外部 npm 套件，實現複雜邏輯，如資料驗證、清洗、呼叫第三方服務等
- **共用指令碼機制**：編寫一次，即可在多個介面中複用，提升開發效率與一致性



#### 🛡️ 企業級閘道與安全體系

- **多重認證機制**：支援 API Key、IP 白名單、JWT 等，滿足不同場景的存取控制需求  
- **API 統一代理與增強**：可批量代理現有 API，統一接入認證、日誌、流量限制等功能  
- **內網穿透能力**：全版本均支援安全的內網穿透，可將私有資料來源安全地發布至公網  



#### 🤖 面向 AI 與未來的整合能力

- **AI 閘道能力**：可代理外部 AI 模型 (如 OpenAI)，或發布本地模型 (如 Ollama)，實現統一呼叫與負載平衡叢集  
- **MCP Server 支援**：支援將資料庫轉換為 MCP (Model Context Protocol) 服務，基於 SSE 與 Streamable HTTP，與 Dify、Coze 等 AI Agent 無縫整合  

<br><br>

### 🚀 快速入門
---
1.  **立即體驗**：訪問 [apisql.cn](https://www.apisql.cn/) 官網，註冊即可免費試用。
2.  **查閱文件**：參閱[快速入門指南](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/020@%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/readme.html)，只需幾分鐘即可發布您的第一個 API。
3.  **選擇您的部署方式**：
    *   **SaaS 雲端服務**：無需部署，註冊即用。享受極致性價比，輕鬆應對海量請求。
    *   **免費版私有部署**：下載[免費版](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/030@%E5%85%8D%E8%B4%B9%E7%89%88-%E7%A7%81%E6%9C%89%E9%83%A8%E7%BD%B2/readme.html)，在您自己的伺服器上部署 apiSQL 免費版。



<br><br>
### 📦 版本與服務
---
我們提供多種版本以滿足不同使用者的需求：

| 版本 | 目標使用者 | 部署方式 | 核心特性 |
|---|---|---|---|
| **免費版** | 個人開發者、小型團隊 | 私有化部署 | 核心 API 開發功能 |
| **專業版** | 專業開發者、中型企業 | 私有化部署 | 更多進階功能 |
| **企業版** | 大型企業 | 私有化部署 | 多專案、多使用者等完整的企業級解決方案 |
| **SaaS 雲端服務**| 所有使用者 | 雲端託管 | 免維運、開箱即用、按量付費 |

詳細功能比較請參閱 [官方定價頁面](https://www.apisql.cn/pricing/)。

> ⚠️ **請注意**  
> apiSQL 提供功能強大的免費版本，可供私有部署與商業使用，但**本專案目前並未開源**。



<br><br>

### 🛣️ 近期路線圖 (Roadmap)
---
我們正致力於建構一個更強大、更智慧的 API 未來：

- 🏁   **[待發布] 資料庫即 MCP Server**: 完善對 SSE 和 Streamable HTTP 的支援，將資料庫一鍵發布為標準的 MCP Server。
- 🛠️ **[開發中] VS Code 插件**: 無需離開編輯器，將 apiSQL 作為中介軟體，直接在 VS Code 中開發和偵錯 API。

<br><br>

### 🔗 相關連結
---
- 🌐 **官網**: [https://www.apisql.cn/](https://www.apisql.cn/)
- 📘 **文件**: [https://docs.apisql.cn/](https://docs.apisql.cn/)
- 🔥【apiSQL 最佳實踐】 [https://www.bilibili.com/video/BV1eHGyzFE7x](https://www.bilibili.com/video/BV1eHGyzFE7x)
- 💬 **技術支援**: 請掃描 QR Code 加入微信群
  
  
  ![联系方式](./vitepress/book/010@入门/020@快速入门/images/WeCom_Group_QRcode.png)
