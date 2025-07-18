<p align="right">
 📘 
  <a href="./README.md">English</a> | 
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
    <strong>API 開発 = たった1つの SQL</strong>
  </p>
  <p>
    データベースを高速で REST API および MCP サーバーに変換し、あらゆる API をプロキシし、エンタープライズ級のセキュリティを実現します。
  </p>
  <p>
    <a href="https://docs.apisql.cn/">
      <img src="https://img.shields.io/badge/Docs-ドキュメント-blue.svg" alt="Docs" />
    </a>
    <a href="https://www.apisql.cn/pricing/">
      <img src="https://img.shields.io/badge/エディション-価格-green.svg" alt="Editions" />
    </a>
    <a href="https://www.apisql.cn/">
      <img src="https://img.shields.io/badge/Webサイト-apisql.cn-orange.svg" alt="Website" />
    </a>
  </p>
</div>

---

**apiSQL** は、API の開発と管理のための強力なプラットフォームです。内蔵の API ゲートウェイは安全なトンネリングをサポートしており、内部または外部の API を簡単にプロキシでき、データベースを安全かつ迅速に API または MCP サーバーとして公開することができます。従来のコーディングよりも高速、簡単、そして安全です。

<br>

### 💡 apiSQL 誕生の背景

---

apiSQL はもともと、`SELECT`、`INSERT`、`UPDATE`、`DELETE` などの SQL をすばやく API として公開する社内向けツールとして開発されました。

**例：クエリ用 API の作成**
```sql
SELECT * FROM area
```

この SQL で `GET` と `POST` の両方に対応した API が自動生成されます。デモ用（認証不要）：

https://open.apisql.cn/api/demo-area/all

**ページネーション（2ページ目、1ページ10件、タイムアウト30秒）：**

https://open.apisql.cn/api/demo-area/all?meta[pageNum]=2&meta[pageSize]=10&meta[timeout]=30

さらに、並び替え、CSV/Excel 出力、環境切替、Postman風の組み込みデバッガも使用可能で、パラメータは自動生成されます。

<br><br>

**MySQL のアップサート（挿入＋更新）API の例：**
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

**独自関数による都市間距離の取得：**
```sql
SELECT calc_city_distance(:name1, :name2) AS distance_desc;
```

<br><br>

**資金移動のストアドプロシージャ呼び出し：**
```sql
CALL transfer_funds(:from_account_id, :to_account_id, :amount)
```

<br><br>

### シンプル。エレガント。効率的。

---

私たちは実感しました：**データベースこそが究極のバックエンド**。

繰り返し車輪の再発明をするよりも、実績あるデータベースのパフォーマンスと信頼性を、安全かつ直接 API として活用するのが最善です。

apiSQL は以下のように進化しました：

- **対応 DB の拡張**：MySQL だけでなく、PostgreSQL、Oracle、SQLServer、ビッグデータプラットフォームにも対応
- **CRUD から複雑なロジックへ**：ストアドプロシージャ、UDF、トランザクション、多段 SQL、JavaScript によるカスタムロジック
- **セキュリティ強化**：API キー、IP ホワイトリスト、JWT など多層的な認証に対応
- **ツールからプラットフォームへ**：マルチテナント、マルチプロジェクト、チーム開発、K8s、ドキュメント自動生成
- **AI との統合**：MCP サーバーとして DB を公開し、Coze や Dify などの AI エージェントと連携

<br><br>

### ✨ 主な特徴

---

#### 🗄️ 多様なデータベースに対応

- **リレーショナル DB**：SQLite, MySQL, PostgreSQL, Oracle, SQLServer
- **分析/OLTP DB**：Doris, SelectDB, StarRocks, TiDB, Huawei DWS (GaussDB)
- **対象オブジェクト**：テーブル、ビュー、関数、ストアドプロシージャ

#### ⚙️ 高速な API 作成

- **SQL だけで REST API を作成**  
- **マルチステップ SQL とトランザクション対応**  
- **ページネーション、ソート、ネスト呼び出し、Excel/CSV 出力対応**  
- **API ドキュメント自動生成**：型、必須判定、正規表現、列挙値を含む  
- **組み込みデバッガ**：Postman スタイル、curl/JS/Go の例付き

#### 🧩 スクリプトによる柔軟な拡張

- **前後処理スクリプト（JavaScript）**：共通スクリプトの再利用可能  
- **npm パッケージでクラウド関数並の柔軟性**  
- **スクリプトの共通化で効率アップ**

#### 🛡️ エンタープライズセキュリティ

- **多様な認証方式**：API キー、IP 制限、JWT  
- **API プロキシと強化**：認証、ログ、レート制限などを集中管理  
- **安全なトンネリング**：社内システムを安全に公開可能

#### 🤖 AI 時代に対応した統合性

- **AI ゲートウェイ**：OpenAI やローカル LLM（Ollama など）を統合  
- **MCP サーバー**：DB を MCP 化し、Coze/Dify など AI エージェントと SSE/ストリーミングで連携

<br><br>

### 🚀 クイックスタート

---

1. **今すぐ試す**：[apisql.cn](https://www.apisql.cn/) にアクセスして無料登録  
2. **ドキュメントを見る**：[クイックスタートガイド](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/020@%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/readme.html)  
3. **デプロイ方法を選ぶ**：  
   - **SaaS（クラウド）**：インストール不要ですぐに利用可能  
   - **無料版（自前サーバー）**：[こちらからダウンロード](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/030@%E5%85%8D%E8%B4%B9%E7%89%88-%E7%A7%81%E6%9C%89%E9%83%A8%E7%BD%B2/readme.html)

<br><br>

### 📦 エディション比較

---

| エディション   | 対象ユーザー         | デプロイ方法   | 主な特徴                              |
|----------------|----------------------|----------------|-----------------------------------------|
| **無料版**     | 個人、少人数チーム     | 自己ホスト型    | API 開発の基本機能                    |
| **Pro版**      | プロ開発者、中規模企業 | 自己ホスト型    | より多くの高度な機能                   |
| **エンタープライズ** | 大企業               | 自己ホスト型    | マルチプロジェクト、マルチユーザー対応   |
| **SaaS クラウド**| すべてのユーザー       | クラウド型       | 運用不要・すぐ使える・従量課金型         |

👉 [価格・機能比較はこちら](https://www.apisql.cn/pricing/)

> ⚠️ **注意**  
> apiSQL は商用利用も可能な強力な無料版を提供していますが、**現在オープンソースではありません**。

<br><br>

### 🛣️ 今後のロードマップ

---

- 🏁 **[近日公開] DB を MCP サーバーに**：SSE / ストリーム対応を強化  
- 🛠️ **[開発中] VS Code 拡張機能**：VS Code 内で直接開発・デバッグ可能

<br><br>

### 🔗 関連リンク

---

- 🌐 [公式サイト](https://www.apisql.cn/)  
- 📘 [ドキュメント](https://docs.apisql.cn/)  
- 🔥 [Bilibili デモ動画](https://www.bilibili.com/video/BV1eHGyzFE7x)  
- 💬 **サポート**：GitHub の Issue よりお問い合わせください
