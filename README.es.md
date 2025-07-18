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
    <strong>Desarrollo de API = Una sola sentencia SQL</strong>
  </p>
  <p>
    Transforma rápidamente tu base de datos en una API REST y un servidor MCP, intermedia cualquier API y alcanza seguridad a nivel empresarial.
  </p>
  <p>
    <a href="https://docs.apisql.cn/">
      <img src="https://img.shields.io/badge/Docs-Documentación-blue.svg" alt="Docs" />
    </a>
    <a href="https://www.apisql.cn/pricing/">
      <img src="https://img.shields.io/badge/Ediciones-Precios-green.svg" alt="Editions" />
    </a>
    <a href="https://www.apisql.cn/">
      <img src="https://img.shields.io/badge/Sitio-Web-apisql.cn-orange.svg" alt="Sitio Web" />
    </a>
  </p>
</div>

---

**apiSQL** es una plataforma potente para el desarrollo y gestión de APIs. Con una pasarela API integrada que admite túneles seguros, puedes exponer APIs desde tu base de datos o intermediar APIs existentes, con seguridad empresarial—más rápido, simple y seguro que desarrollarlas desde cero.

<br>

### 💡 Origen de apiSQL

---

apiSQL nació como una herramienta interna para exponer rápidamente consultas SQL como APIs (`SELECT`, `INSERT`, `UPDATE`, `DELETE`).

**Por ejemplo, para crear una API de consulta:**
```sql
SELECT * FROM area
```

Esto genera una API que admite métodos `GET` y `POST`. Demo pública sin autenticación:

https://open.apisql.cn/api/demo-area/all

**Paginación (página 2, 10 filas por página, timeout de 30 segundos):**

https://open.apisql.cn/api/demo-area/all?meta[pageNum]=2&meta[pageSize]=10&meta[timeout]=30

También puedes: ordenar, exportar a Excel/CSV, seleccionar entorno, y usar el depurador incorporado estilo Postman con parámetros autogenerados.

<br><br>

**Ejemplo de API de inserción/actualización (upsert):**
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

**Función personalizada para calcular la distancia entre dos ciudades:**
```sql
SELECT calc_city_distance(:name1, :name2) AS distance_desc;
```

<br><br>

**Llamada a procedimiento almacenado para una transferencia:**
```sql
CALL transfer_funds(:from_account_id, :to_account_id, :amount)
```

<br><br>

### Sencillo. Elegante. Eficiente.

---

Con la experiencia, descubrimos que: **la base de datos es el backend definitivo**.

¿Por qué reinventar la rueda? Aprovecha el rendimiento y solidez probados de las bases de datos, convirtiéndolas directamente en APIs seguras.

apiSQL ha evolucionado de una herramienta interna a una plataforma API completa:

- **Compatibilidad con múltiples bases de datos**: MySQL, PostgreSQL, Oracle, SQLServer y plataformas modernas.
- **De CRUD a lógica avanzada**: procedimientos, funciones, SQL transaccional, scripts JavaScript como funciones en la nube.
- **Seguridad empresarial**: API Keys, listas blancas de IP, JWT, etc.
- **De herramienta a plataforma**: multitenant, multiproyecto, colaboración, documentación automática, K8s, SaaS.
- **Integración con IA**: publicar bases como servidores MCP conectables a Coze, Dify, etc.

<br><br>

### ✨ Características clave

---

#### 🗄️ Compatibilidad con múltiples bases de datos

- **Relacionales**:  SQLite, MySQL, PostgreSQL, Oracle, SQLServer
- **OLTP / Analíticas**: Doris, SelectDB, StarRocks, TiDB, Huawei DWS (GaussDB)
- **Objetos convertibles a API**: tablas, vistas, funciones, procedimientos

#### ⚙️ Generación rápida de APIs

- **SQL a API REST**: `SELECT/INSERT/UPDATE/DELETE`  
- **Soporte de transacciones**: ejecución SQL en múltiples pasos  
- **Funciones útiles**: paginación, ordenación, llamadas anidadas, exportación a Excel  
- **Documentación automática**: tipos, campos requeridos, validación regex, valores posibles  
- **Depurador integrado**: estilo Postman, con ejemplos en cURL, JS, Go...

#### 🧩 Extensión por scripts

- **Hooks previos y posteriores**: scripts reutilizables con JavaScript  
- **Poder como función en la nube**: paquetes npm, lógica compleja  
- **Scripts globales compartidos**: mayor productividad y coherencia

#### 🛡️ Seguridad a nivel empresarial

- **Autenticación**: API Key, IP whitelist, JWT, etc.  
- **Proxy y mejora de API**: autenticación, registros, límites de tráfico unificados  
- **Túnel seguro**: publica fuentes internas de forma segura en Internet

#### 🤖 Integración con IA

- **Pasarela IA**: OpenAI, modelos locales como Ollama  
- **Servidor MCP**: tu base de datos → protocolo MCP con SSE/streaming, compatible con agentes como Dify, Coze

<br><br>

### 🚀 Empezar ahora

---

1. **Probar ya**: visita [apisql.cn](https://www.apisql.cn/)  
2. **Leer la documentación**: [Guía de inicio rápido](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/020@%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/readme.html)  
3. **Elige el método de implementación**:  
   - **SaaS**: en la nube, sin instalación  
   - **Versión gratuita self-hosted**: [Descargar aquí](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/030@%E5%85%8D%E8%B4%B9%E7%89%88-%E7%A7%81%E6%9C%89%E9%83%A8%E7%BD%B2/readme.html)

<br><br>

### 📦 Ediciones disponibles

---

| Edición        | Para quién            | Implementación  | Características principales                |
|----------------|-----------------------|------------------|--------------------------------------------|
| **Gratis**     | Desarrolladores, equipos pequeños | Auto-alojada     | APIs básicas                               |
| **Pro**        | Equipos medianos       | Auto-alojada     | Funciones avanzadas                         |
| **Enterprise** | Empresas grandes       | Auto-alojada     | Multiproyecto, multiusuario, completo       |
| **SaaS**       | Todos                  | Nube             | Listo para usar, sin mantenimiento          |

👉 [Ver comparativa de ediciones](https://www.apisql.cn/pricing/)

> ⚠️ **Atención**  
> apiSQL ofrece una versión gratuita muy potente para uso comercial y self-hosted, pero **el proyecto no es open source**.

<br><br>

### 🛣️ Hoja de ruta

---

- 🏁 **[Próximamente] DB como MCP Server**: soporte completo para SSE y HTTP streaming  
- 🛠️ **[En desarrollo] Extensión VS Code**: desarrolla y depura apiSQL desde tu editor

<br><br>

### 🔗 Enlaces útiles

---

- 🌐 [Sitio oficial](https://www.apisql.cn/)  
- 📘 [Documentación](https://docs.apisql.cn/)  
- 🔥 [Demo en Bilibili](https://www.bilibili.com/video/BV1eHGyzFE7x)  
- 💬 **Soporte**: por favor, abre un issue en GitHub
