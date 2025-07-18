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
    <strong>Desenvolvimento de APIs = Um SQL</strong>
  </p>
  <p>
    Transforme rapidamente seu banco de dados em uma API REST e um Servidor MCP, faça proxy de qualquer API e obtenha proteção de segurança de nível empresarial.
  </p>
  <p>
    <a href="https://docs.apisql.cn/">
      <img src="https://img.shields.io/badge/Docs-Documentação-blue.svg" alt="Docs" />
    </a>
    <a href="https://www.apisql.cn/pricing/">
      <img src="https://img.shields.io/badge/Edições-Preços-green.svg" alt="Editions" />
    </a>
    <a href="https://www.apisql.cn/">
      <img src="https://img.shields.io/badge/Website-apisql.cn-orange.svg" alt="Website" />
    </a>
  </p>
</div>

---

**apiSQL** é uma plataforma poderosa para o desenvolvimento e gerenciamento de APIs. Com seu Gateway de API integrado que suporta tunelamento seguro, você pode facilmente fazer proxy de qualquer API interna ou externa, ou conectar-se a bancos de dados e expô-los como APIs ou Servidores MCP (Model Context Protocol) com segurança de nível empresarial — mais rápido, mais simples e mais seguro do que construir do zero.

<br>

### 💡 A Origem do apiSQL

---

O apiSQL começou como uma ferramenta interna simples para expor rapidamente as operações `SELECT`, `INSERT`, `UPDATE` e `DELETE` do MySQL como APIs.

**Por exemplo: para desenvolver uma API de consulta:**
```sql
SELECT * FROM area
```

Isso gera uma API que suporta os métodos `GET` e `POST`. URL de demonstração (pública, sem autenticação):

https://open.apisql.cn/api/demo-area/all

**Paginar o resultado (página 2, 10 linhas por página, timeout de 30s):**

https://open.apisql.cn/api/demo-area/all?meta[pageNum]=2&meta[pageSize]=10&meta[timeout]=30

Você também pode: ordenar campos, exportar para Excel/CSV, definir ambientes e depurar em uma interface estilo Postman integrada — os parâmetros são gerados automaticamente, sem precisar trocar de ferramenta.

<br><br>

**Exemplo de uma API de "upsert" (inserir ou atualizar) com MySQL:**
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

**API de função personalizada para calcular a distância entre cidades:**
```sql
SELECT calc_city_distance(:name1, :name2) AS distance_desc;
```

<br><br>

**Chamar um procedimento armazenado para criar uma API de transação de transferência:**
```sql
CALL transfer_funds(:from_account_id, :to_account_id, :amount)
```

<br><br>

### Simples. Elegante. Eficiente.

---

Com o uso contínuo, percebemos: **o banco de dados é o backend definitivo**.

Por que reinventar a roda? Aproveite o desempenho, a estabilidade e o poder testados e comprovados dos bancos de dados, expondo-os de forma segura e direta como APIs.

O apiSQL evoluiu de uma ferramenta interna leve para uma plataforma de API completa:

- **Suporte a múltiplos bancos de dados**: de MySQL a Oracle, PostgreSQL, SQLServer e modernas plataformas de big data.
- **De lógica básica a complexa**: suporta procedimentos armazenados, funções definidas pelo usuário, SQL transacional e até scripts JavaScript para lógica no nível de "cloud functions".
- **Segurança de nível empresarial**: suporte integrado para Chaves de API, lista de permissões de IP, JWT e muito mais.
- **De ferramenta a plataforma**: multi-inquilino, multi-projeto, colaboração em equipe, documentação automática, implantação privada, suporte a K8s e múltiplas edições (Gratuita, Pro, Empresarial, SaaS).
- **Integração com IA**: faça proxy de APIs existentes, gere APIs a partir de SQL e exponha bancos de dados como Servidores MCP para integração com agentes de IA como Coze e Dify.

<br><br>

### ✨ Principais Funcionalidades

---

#### 🗄️ Suporte a Múltiplos Bancos de Dados

- **Bancos de Dados Relacionais**: SQLite, MySQL, PostgreSQL, Oracle, SQLServer
- **OLTP/Analíticos**: Doris, SelectDB, StarRocks, TiDB, Huawei DWS (GaussDB)
- **Suporte Completo a Objetos**: tabelas, views, procedimentos armazenados, UDFs → APIs

#### ⚙️ Geração Rápida de APIs

- **API baseada em SQL**: Escreva `SELECT/INSERT/UPDATE/DELETE` e obtenha uma API REST — sem necessidade de código de backend.
- **Suporte a Transações**: SQL com múltiplos passos e controle total de transações.
- **Recursos Avançados**: paginação, ordenação, chamadas aninhadas, exportação para Excel/CSV, parâmetros personalizados.
- **Documentação Automática**: Geração automática de documentação RESTful com campos obrigatórios, enums e validação por regex.
- **Depurador Integrado**: Ferramenta estilo Postman com snippets para cURL, JS, Go.

#### 🧩 Extensibilidade com Scripts

- **Hooks de Pré/Pós-execução**: Anexe JavaScript antes ou depois da execução da API (reutilize com scripts globais).
- **Poder de "Cloud Functions"**: Use pacotes npm para validar, transformar ou chamar serviços externos.
- **Lógica Reutilizável**: Scripts compartilhados para um desenvolvimento mais rápido e consistente.

#### 🛡️ Gateway e Segurança de Nível Empresarial

- **Suporte a Múltiplas Autenticações**: Chave de API, lista de permissões de IP (IP whitelist), JWT e mais.
- **Proxy e Melhorias de API**: Centralize autenticação, logs e limitação de taxa (throttling) em todas as suas APIs.
- **Tunelamento e Exposição**: Exponha com segurança fontes de dados internas pela internet.

#### 🤖 Integração Pronta para IA

- **Gateway de IA**: Faça proxy do OpenAI ou de LLMs locais (ex: Ollama), roteie requisições e suporte a clusters.
- **Servidor MCP**: Converta um banco de dados em um Servidor MCP (Model Context Protocol), habilitando SSE e streaming para agentes de IA como Dify e Coze.

<br><br>

### 🚀 Comece Agora

---

1.  **Experimente Agora**: Visite [apisql.cn](https://www.apisql.cn/) e registre-se para um teste gratuito.
2.  **Leia a Documentação**: Siga o [Guia de Início Rápido](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/020@%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/readme.html).
3.  **Escolha sua Implantação**:
    - **SaaS**: Zero configuração, usável instantaneamente, versão em nuvem escalável.
    - **Versão Privada Gratuita**: [Baixe aqui](https://docs.apisql.cn/apisql/010@%E5%85%A5%E9%97%A8/030@%E5%85%8D%E8%B4%B9%E7%89%88-%E7%A7%81%E6%9C%89%E9%83%A8%E7%BD%B2/readme.html) e implante em seu próprio servidor.

<br><br>

### 📦 Edições

---

| Edição       | Para                     | Implantação    | Principais Funcionalidades               |
|--------------|--------------------------|----------------|------------------------------------------|
| **Gratuita** | Indivíduos, Pequenas Equipes | Auto-hospedado | Funcionalidade principal de API          |
| **Pro**      | Devs Pro, Equipes Médias   | Auto-hospedado | Recursos avançados                       |
| **Empresarial**| Grandes Organizações     | Auto-hospedado | Multi-projeto, multi-usuário, full-stack |
| **SaaS**     | Todos                    | Na nuvem       | Sem complicações, pronto para uso, pague conforme o uso |

👉 [Veja a comparação completa](https://www.apisql.cn/pricing/)

> ⚠️ **Atenção**  
> O apiSQL oferece uma versão gratuita totalmente funcional para uso auto-hospedado e comercial, mas o projeto **não é de código aberto**.

<br><br>

### 🛣️ Roadmap

---

- 🏁 **[Em Breve] DB como Servidor MCP**: Suporte completo a SSE e HTTP por streaming.
- 🛠️ **[Em Desenvolvimento] Plugin para VS Code**: Desenvolva e depure o apiSQL diretamente no VS Code.

<br><br>

### 🔗 Links

---

- 🌐 [Site Oficial](https://www.apisql.cn/)
- 📘 [Documentação](https://docs.apisql.cn/)
- 🔥 [Demonstração de Melhores Práticas (Bilibili)](https://www.bilibili.com/video/BV1eHGyzFE7x)

- 💬 **Suporte**: Por favor, abra uma issue para tirar dúvidas.