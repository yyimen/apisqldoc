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
    <strong>Sviluppo API = Una singola query SQL</strong>
  </p>
  <p>
    Converte rapidamente un database in un’API REST e un server MCP, può proxyare qualsiasi API e implementa sicurezza di livello enterprise.
  </p>
  <p>
    <a href="https://docs.apisql.cn/">
      <img src="https://img.shields.io/badge/Docs-Documentazione-blue.svg" alt="Docs" />
    </a>
    <a href="https://www.apisql.cn/pricing/">
      <img src="https://img.shields.io/badge/Edizioni-Prezzi-green.svg" alt="Editions" />
    </a>
    <a href="https://www.apisql.cn/">
      <img src="https://img.shields.io/badge/Sito-Web-apisql.cn-orange.svg" alt="Sito Web" />
    </a>
  </p>
</div>

---

**apiSQL** è una potente piattaforma per lo sviluppo e la gestione delle API. Con un gateway API integrato che supporta tunneling sicuro, consente di pubblicare database o proxyare API esistenti in modo sicuro, più veloce, semplice e affidabile rispetto allo sviluppo da zero.

<br>

### 💡 Origine di apiSQL

---

apiSQL è nato come uno strumento interno per convertire rapidamente le istruzioni `SELECT`, `INSERT`, `UPDATE`, `DELETE` di MySQL in API pronte all’uso.

**Esempio: creare un’API per interrogazione**
```sql
SELECT * FROM area
```

Questa query genera un’API che supporta i metodi `GET` e `POST`. Esempio pubblico senza autenticazione:

https://open.apisql.cn/api/demo-area/all

**Paginazione (pagina 2, 10 righe per pagina, timeout 30s):**

https://open.apisql.cn/api/demo-area/all?meta[pageNum]=2&meta[pageSize]=10&meta[timeout]=30

Puoi anche ordinare, esportare in Excel/CSV, cambiare ambiente, e usare il debugger integrato in stile Postman con parametri generati automaticamente.

<br><br>

**Esempio di API upsert (inserimento + aggiornamento):**
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

**Funzione personalizzata per calcolare la distanza tra due città:**
```sql
SELECT calc_city_distance(:name1, :name2) AS distance_desc;
```

<br><br>

**Chiamata a procedura per trasferimento fondi:**
```sql
CALL transfer_funds(:from_account_id, :to_account_id, :amount)
```

<br><br>

### Semplice. Elegante. Efficiente.

---

Con l’esperienza, abbiamo capito che: **il database è il backend perfetto**.

Perché reinventare la ruota? Approfitta delle prestazioni e affidabilità dei database per esporre API direttamente e in modo sicuro.

apiSQL si è evoluto da uno strumento semplice a una piattaforma API completa:

- **Supporto a più database**: MySQL, PostgreSQL, Oracle, SQLServer e piattaforme moderne
- **Da CRUD a logica avanzata**: procedure, funzioni, transazioni, JavaScript lato server
- **Sicurezza enterprise**: API Key, whitelist IP, JWT e altro
- **Da tool a piattaforma**: multitenant, multi-progetto, collaborazione, documentazione automatica, supporto K8s
- **Integrazione AI**: pubblica il database come MCP Server, compatibile con Coze, Dify e altri agenti AI

<br><br>

### ✨ Caratteristiche principali

---

#### 🗄️ Supporto per più database

- **Relazionali**: SQLite, MySQL, PostgreSQL, Oracle, SQLServer
- **OLTP / analitici**: DDoris, SelectDB, StarRocks, TiDB, Huawei DWS (GaussDB)
- **Oggetti supportati**: tabelle, viste, funzioni, procedure

#### ⚙️ Creazione rapida di API

- **SQL a REST API**: `SELECT/INSERT/UPDATE/DELETE`  
- **Supporto transazioni**: script SQL multi-step  
- **Funzioni utili**: paginazione, ordinamento, export Excel/CSV  
- **Documentazione automatica**: con tipi, obbligatorietà, regex, valori  
- **Debugger integrato**: stile Postman, esempi cURL, JS, Go...

#### 🧩 Estensione con script

- **Hook prima/dopo esecuzione**: JavaScript riutilizzabili  
- **Potenza da cloud function**: pacchetti npm, logica avanzata  
- **Script condivisi**: maggiore produttività e coerenza

#### 🛡️ Sicurezza a livello enterprise

- **Autenticazione**: API Key, IP whitelist, JWT  
- **Proxy e gestione centralizzata**: autenticazione, log, rate limiting  
- **Tunneling sicuro**: esponi fonti interne in modo sicuro su internet

#### 🤖 Integrazione AI

- **Gateway AI**: OpenAI, modelli locali (es. Ollama)  
- **Server MCP**: database → protocollo MCP con SSE/streaming compatibile con Dify, Coze

<br><br>

### 🚀 Iniziare subito

---

1. **Prova ora**: visita [apisql.cn](https://www.apisql.cn/)  
2. **Leggi la guida**: [Guida rapida](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/020@%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/readme.html)  
3. **Scegli una modalità di distribuzione**:  
   - **SaaS**: pronto all’uso, nessuna installazione  
   - **Self-hosted gratuito**: [Scarica qui](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/030@%E5%85%8D%E8%B4%B9%E7%89%88-%E7%A7%81%E6%9C%89%E9%83%A8%E7%BD%B2/readme.html)

<br><br>

### 📦 Edizioni disponibili

---

| Edizione      | Destinatari           | Distribuzione  | Caratteristiche principali                |
|---------------|------------------------|----------------|--------------------------------------------|
| **Gratuita**  | Sviluppatori, team piccoli | Self-hosted    | API di base                               |
| **Pro**       | Aziende medie           | Self-hosted    | Funzioni avanzate                         |
| **Enterprise**| Grandi aziende          | Self-hosted    | Progetti multipli, utenti multipli        |
| **SaaS**      | Tutti                   | Cloud          | Pronto all’uso, nessuna manutenzione      |

👉 [Confronta le edizioni](https://www.apisql.cn/pricing/)

> ⚠️ **Nota**  
> apiSQL offre una potente versione gratuita anche per uso commerciale. **Non è open-source.**

<br><br>

### 🛣️ Roadmap

---

- 🏁 **[Prossimamente] DB come MCP Server**: supporto completo SSE/stream  
- 🛠️ **[In sviluppo] Plugin per VS Code**: sviluppa e testa direttamente da VS Code

<br><br>

### 🔗 Link utili

---

- 🌐 [Sito ufficiale](https://www.apisql.cn/)  
- 📘 [Documentazione](https://docs.apisql.cn/)  
- 🔥 [Demo su Bilibili](https://www.bilibili.com/video/BV1eHGyzFE7x)  
- 💬 **Supporto**: contattaci tramite GitHub Issue
