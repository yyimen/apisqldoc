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
    <strong>API-Entwicklung = Ein SQL</strong>
  </p>
  <p>
    Verwandeln Sie Ihre Datenbank blitzschnell in eine REST API und einen MCP-Server, proxyen Sie beliebige APIs und erreichen Sie Unternehmenssicherheit auf höchstem Niveau.
  </p>
  <p>
    <a href="https://docs.apisql.cn/">
      <img src="https://img.shields.io/badge/Docs-Dokumentation-blue.svg" alt="Docs" />
    </a>
    <a href="https://www.apisql.cn/pricing/">
      <img src="https://img.shields.io/badge/Editionen-Preise-green.svg" alt="Editions" />
    </a>
    <a href="https://www.apisql.cn/">
      <img src="https://img.shields.io/badge/Website-apisql.cn-orange.svg" alt="Website" />
    </a>
  </p>
</div>

---

**apiSQL** ist eine leistungsstarke Plattform für die Entwicklung und Verwaltung von APIs. Mit einem integrierten API-Gateway, das sichere Tunnellösungen unterstützt, können Sie interne oder externe APIs ganz einfach weiterleiten oder Ihre Datenbank sicher als API oder MCP-Server (Model Context Protocol) veröffentlichen – schneller, einfacher und sicherer als beim klassischen Coding.

<br>

### 💡 Ursprung von apiSQL

---

apiSQL begann als internes Tool, um MySQL-Befehle wie `SELECT`, `INSERT`, `UPDATE`, `DELETE` schnell als APIs verfügbar zu machen.

**Beispiel: Eine einfache Abfrage als API:**
```sql
SELECT * FROM area
```

Diese Abfrage erzeugt eine API, die sowohl `GET` als auch `POST` unterstützt. Demo-URL (öffentlich zugänglich):

https://open.apisql.cn/api/demo-area/all

**Paginierung (Seite 2, 10 Zeilen, 30s Timeout):**

https://open.apisql.cn/api/demo-area/all?meta[pageNum]=2&meta[pageSize]=10&meta[timeout]=30

Zusätzliche Features: Sortierung, Export nach Excel/CSV, Umgebungswechsel, integrierter Debugger im Postman-Stil mit automatischer Parametergenerierung.

<br><br>

**Upsert API-Beispiel mit MySQL:**
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

**Eigene Funktion zur Entfernungsmessung zwischen Städten:**
```sql
SELECT calc_city_distance(:name1, :name2) AS distance_desc;
```

<br><br>

**Stored Procedure API für Transaktionen:**
```sql
CALL transfer_funds(:from_account_id, :to_account_id, :amount)
```

<br><br>

### Einfach. Elegant. Effizient.

---

Mit wachsender Nutzung wurde klar: **Die Datenbank ist das ultimative Backend**.

Warum das Rad neu erfinden? Die erprobte Leistung und Stabilität von Datenbanken direkt und sicher als API anbieten – das ist apiSQL.

Die Evolution von apiSQL:

- **Mehr Datenbank-Unterstützung**: Von MySQL zu Oracle, PostgreSQL, SQLServer, modernen Big-Data-Plattformen
- **Von CRUD bis Logik**: Unterstützung für Prozeduren, UDFs, Transaktionen und JavaScript-Skripte wie in Cloud Functions
- **Sicherheitsfeatures für Unternehmen**: API Keys, IP-Whitelist, JWT u. v. m.
- **Vom Tool zur Plattform**: Multi-Tenant, Multi-Projekt, Teamarbeit, Auto-Dokus, Private Deployment, K8s
- **AI-Integration**: Datenbank als MCP-Server für Dify, Coze & Co.

<br><br>

### ✨ Hauptfunktionen

---

#### 🗄️ Multi-Datenbank-Unterstützung

- **RDBMS**: SQLite, MySQL, PostgreSQL, Oracle, SQLServer
- **OLTP/Analytik**: Doris, SelectDB, StarRocks, TiDB, Huawei DWS (GaussDB)
- **API-Generierung für Objekte**: Tabellen, Views, Prozeduren, Funktionen

#### ⚙️ Schnelle API-Erstellung

- **SQL-basiert**: `SELECT/INSERT/UPDATE/DELETE` → sofortige REST API  
- **Transaktionen möglich**: mehrstufige SQL mit Transaktionskontrolle  
- **Funktionen**: Paginierung, Sortierung, verschachtelte Aufrufe, Excel-Export  
- **Auto-Dokumentation**: REST-Dokus mit Validierung, Pflichtfeldern, Regex  
- **Debugger**: eingebautes Tool mit Beispielen (cURL, JS, Go)

#### 🧩 Erweiterbare Skripte

- **Pre/Post-Skripte**: JavaScript vor/nach API-Aufruf (wiederverwendbar)  
- **Cloud-Logik**: Nutzung von npm-Paketen möglich  
- **Globale Logikbausteine**: für Effizienz und Konsistenz

#### 🛡️ Unternehmenssicherheit & Gateway

- **Authentifizierung**: API Key, IP-Whitelist, JWT etc.  
- **API-Proxy & Verstärkung**: Auth, Logging, Throttling vereinheitlichen  
- **Sicheres Tunneling**: interner Zugriff über Internet ermöglichen

#### 🤖 AI-Integration

- **AI-Gateway**: z. B. OpenAI oder lokale Modelle wie Ollama  
- **MCP-Server-Support**: DB → MCP (mit SSE, Streams), ideal für AI Agents

<br><br>

### 🚀 Schnellstart

---

1. **Jetzt testen**: [apisql.cn](https://www.apisql.cn/) besuchen und kostenlos registrieren  
2. **Dokumentation lesen**: [Schnellstart-Anleitung](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/020@%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/readme.html)  
3. **Deployment wählen**:  
   - **SaaS**: sofort einsatzbereit  
   - **Selbst gehostet (kostenlos)**: [Hier herunterladen](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/030@%E5%85%8D%E8%B4%B9%E7%89%88-%E7%A7%81%E6%9C%89%E9%83%A8%E7%BD%B2/readme.html)

<br><br>

### 📦 Editionen

---

| Edition         | Zielgruppe              | Deployment     | Hauptfunktionen                          |
|------------------|--------------------------|----------------|-------------------------------------------|
| **Free**         | Einzelpersonen, kleine Teams | Selbst gehostet | Kernfunktionen zur API-Entwicklung        |
| **Pro**          | Entwickler, KMUs           | Selbst gehostet | Erweiterte Funktionen                     |
| **Enterprise**   | Große Unternehmen          | Selbst gehostet | Multi-Projekt, Multi-User, Enterprise     |
| **SaaS**         | Alle                       | Cloud           | Wartungsfrei, sofort nutzbar, Pay-as-you-go |

👉 [Funktionsvergleich ansehen](https://www.apisql.cn/pricing/)

> ⚠️ **Hinweis**  
> apiSQL bietet eine voll funktionsfähige kostenlose Version für den Eigenbetrieb und kommerzielle Nutzung. Das Projekt ist jedoch **nicht Open Source**.

<br><br>

### 🛣️ Roadmap

---

- 🏁 **[Bald] DB als MCP-Server**: SSE & Streaming HTTP  
- 🛠️ **[In Arbeit] VS Code Plugin**: apiSQL direkt im Editor nutzen

<br><br>

### 🔗 Links

---

- 🌐 [Offizielle Website](https://www.apisql.cn/)  
- 📘 [Dokumentation](https://docs.apisql.cn/)  
- 🔥 [Best-Practice-Video (Bilibili)](https://www.bilibili.com/video/BV1eHGyzFE7x)  
- 💬 **Support**: Bitte ein GitHub-Issue erstellen