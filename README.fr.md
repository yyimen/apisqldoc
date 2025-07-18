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
    <strong>Développement d'API = Une seule requête SQL</strong>
  </p>
  <p>
    Transformez rapidement votre base de données en une API REST et un serveur MCP, interposez n’importe quelle API, et atteignez un niveau de sécurité professionnel.
  </p>
  <p>
    <a href="https://docs.apisql.cn/">
      <img src="https://img.shields.io/badge/Docs-Documentation-blue.svg" alt="Docs" />
    </a>
    <a href="https://www.apisql.cn/pricing/">
      <img src="https://img.shields.io/badge/Editions-Tarification-green.svg" alt="Editions" />
    </a>
    <a href="https://www.apisql.cn/">
      <img src="https://img.shields.io/badge/Site-Web-apisql.cn-orange.svg" alt="Site Web" />
    </a>
  </p>
</div>

---

**apiSQL** est une plateforme puissante de développement et de gestion d'API. Grâce à sa passerelle API intégrée avec tunnel sécurisé, vous pouvez facilement exposer une base de données ou interposer n'importe quelle API, tout en bénéficiant d'une sécurité de niveau entreprise — plus rapide, plus simple et plus sûr que du développement manuel.

<br>

### 💡 Origine de apiSQL

---

apiSQL a été initialement conçu comme un outil interne pour exposer rapidement des requêtes MySQL (`SELECT`, `INSERT`, `UPDATE`, `DELETE`) en tant qu'API.

**Exemple : créer une API de requête**
```sql
SELECT * FROM area
```

Cette requête génère une API compatible `GET` et `POST`. URL de démonstration (publique, sans authentification) :

https://open.apisql.cn/api/demo-area/all

**Pagination (page 2, 10 lignes, timeout de 30s)** :

https://open.apisql.cn/api/demo-area/all?meta[pageNum]=2&meta[pageSize]=10&meta[timeout]=30

Et aussi : tri, export Excel/CSV, environnements personnalisés, interface de test intégrée de type Postman avec paramètres auto-générés.

<br><br>

**Exemple d’API insert/update (upsert) MySQL :**
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

**Fonction personnalisée pour calculer la distance entre deux villes :**
```sql
SELECT calc_city_distance(:name1, :name2) AS distance_desc;
```

<br><br>

**Appel d’une procédure stockée pour un transfert :**
```sql
CALL transfer_funds(:from_account_id, :to_account_id, :amount)
```

<br><br>

### Simple. Élégant. Efficace.

---

Avec l’usage, nous avons compris : **la base de données est le backend ultime**.

Pourquoi réinventer la roue ? Profitez de la puissance et de la stabilité des bases de données pour exposer des APIs de manière directe et sécurisée.

apiSQL a évolué d’un petit outil à une plateforme API complète :

- **Support multi-base** : MySQL, PostgreSQL, Oracle, SQLServer, plateformes Big Data modernes.
- **Du simple CRUD à la logique métier complexe** : procédures stockées, fonctions personnalisées, transactions, scripts JavaScript comme des fonctions cloud.
- **Sécurité d’entreprise intégrée** : API Key, IP whitelist, JWT, etc.
- **De l’outil à la plateforme** : multi-locataire, multi-projets, travail d’équipe, documentation auto, déploiement privé, K8s.
- **Intégration IA** : transformer la base en serveur MCP pour l’intégration avec Coze, Dify, etc.

<br><br>

### ✨ Fonctionnalités principales

---

#### 🗄️ Support multi-base de données

- **Bases relationnelles** : SQLite, MySQL, PostgreSQL, Oracle, SQLServer
- **OLTP / analytique** : Doris, SelectDB, StarRocks, TiDB, Huawei DWS (GaussDB)
- **Objets convertibles en API** : tables, vues, procédures, fonctions

#### ⚙️ Génération rapide d’API

- **API à partir de SQL** : `SELECT`, `INSERT`, `UPDATE`, `DELETE` → REST API automatique  
- **Support des transactions** : exécution SQL multi-étapes  
- **Fonctions pratiques** : pagination, tri, appels imbriqués, export Excel/CSV  
- **Docs automatiques** : avec types, champs requis, regex, valeurs possibles  
- **Outil de test intégré** : style Postman avec exemples cURL, JS, Go...

#### 🧩 Extensions avec scripts

- **Hooks avant/après** : scripts JavaScript réutilisables avant/après exécution  
- **Niveau cloud function** : packages npm, logique avancée  
- **Scripts partagés** : mutualisation du code entre plusieurs APIs

#### 🛡️ Sécurité de niveau entreprise

- **Méthodes d’authentification** : API Key, IP whitelist, JWT...  
- **Proxy API et gestion centralisée** : auth, logs, limites de débit  
- **Tunnel sécurisé** : exposer une source interne sur Internet en toute sécurité

#### 🤖 Intégration IA

- **Passerelle IA** : OpenAI, Ollama local, modèles personnalisés  
- **Serveur MCP** : base → protocole MCP, compatible SSE/stream avec Coze, Dify

<br><br>

### 🚀 Démarrage rapide

---

1. **Essayez dès maintenant** : visitez [apisql.cn](https://www.apisql.cn/)  
2. **Consultez la documentation** : [Guide de démarrage rapide](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/020@%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/readme.html)  
3. **Choisissez un mode de déploiement** :  
   - **SaaS** : prêt à l’emploi, sans installation  
   - **Version gratuite auto-hébergée** : [Téléchargement ici](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/030@%E5%85%8D%E8%B4%B9%E7%89%88-%E7%A7%81%E6%9C%89%E9%83%A8%E7%BD%B2/readme.html)

<br><br>

### 📦 Éditions disponibles

---

| Édition       | Pour qui               | Déploiement    | Fonctionnalités clés                        |
|---------------|------------------------|----------------|---------------------------------------------|
| **Gratuite**  | Indépendants, petites équipes | Auto-hébergé   | API de base                                 |
| **Pro**       | Développeurs, PME       | Auto-hébergé   | Fonctions avancées                          |
| **Entreprise**| Grandes organisations   | Auto-hébergé   | Projets multiples, gestion utilisateurs      |
| **SaaS**      | Tous                    | Cloud           | Sans maintenance, prêt à l’emploi, scalable |

👉 [Comparer les éditions](https://www.apisql.cn/pricing/)

> ⚠️ **Remarque**  
> Une version gratuite puissante est disponible pour usage personnel ou commercial. **Le projet n’est pas open-source**.

<br><br>

### 🛣️ Feuille de route

---

- 🏁 **[Bientôt] Base = Serveur MCP** : support SSE + HTTP Streaming  
- 🛠️ **[En cours] Plugin VS Code** : développez et testez directement dans VS Code

<br><br>

### 🔗 Liens utiles

---

- 🌐 [Site officiel](https://www.apisql.cn/)  
- 📘 [Documentation](https://docs.apisql.cn/)  
- 🔥 [Démonstration sur Bilibili](https://www.bilibili.com/video/BV1eHGyzFE7x)  
- 💬 **Support** : veuillez ouvrir un ticket GitHub
