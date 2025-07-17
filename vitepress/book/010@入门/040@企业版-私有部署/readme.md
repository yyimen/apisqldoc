# apiSQL 企业版私有化部署指南

> 为了满足大型企业和组织对数据安全与合规性的严格要求，关键系统软件必须进行私有化部署。apiSQL 企业版支持私有化部署，本文档将详细指导您如何在本地 Linux 服务器上使用 Docker 完成部署，并提供在线与离线两种安装方式，您可以根据服务器网络环境选择最适合的方案。

## 1. 环境准备

### 1.1 硬件要求

- **最低配置**：1核 CPU / 2GB 内存 / 10GB 存储空间
- **操作系统**：Linux (x86_64)

### 1.2 软件要求

- **Docker Engine**:
  - 最低版本: `19.03`
  - 推荐版本: `20.10.15` 或更高
  - 安装请参考 Docker 官方文档：[Install Docker Engine](https://docs.docker.com/engine/install/)

- **Docker Compose**:
  - 若 Docker Engine 版本大于等于 `20.10.15`，则已内置 `docker compose` 命令。
  - 若 Docker Engine 版本较低，则需单独安装 `docker-compose`。

<br>

## 2. 在线安装 (推荐)

此方法适用于可直接访问公网的服务器，能够一键完成所有组件的下载与部署。

### 2.1 准备安装目录

为便于管理，我们推荐将所有相关文件存放在一个独立的目录中。请执行以下命令创建：

```bash
mkdir -p /opt/apisql
```

### 2.2 一键安装命令

执行以下命令来下载镜像并启动服务。所有数据和日志将自动存放在 `/opt/apisql` 目录下，以后迁移和备份只需复制data目录。

```bash
docker run -d \
  --name apisql-ee \
  --restart unless-stopped \
  -e APISQL_INIT_ADMIN_PASSWORD=apisql8088 \
  -v /opt/apisql/data:/data \
  -v /opt/apisql/logs:/logs \
  -p 8088:80 \
  -p 8443:443 \
  registry.cn-hangzhou.aliyuncs.com/ymlib/apisql-ee:latest
```

### 2.3 参数说明

- `-d`: 后台运行容器。
- `--name apisql-ee`: 指定容器名称为 `apisql-ee`，便于后续管理。
- `--restart unless-stopped`: 设置容器重启策略。当 Docker 服务启动或容器意外退出时，将自动重启此容器。
- `-e APISQL_INIT_ADMIN_PASSWORD=apisql8088`: 设置初始管理员密码。
- `-v /opt/apisql/data:/data`: 将宿主机的 `/opt/apisql/data` 目录挂载到容器内，用于持久化存储应用数据。
- `-v /opt/apisql/logs:/logs`: 将宿主机的 `/opt/apisql/logs` 目录挂载到容器内，用于持久化存储日志文件。
- `-p 8088:80`: 将宿主机的 `8088` 端口映射到容器的 `80` (HTTP) 端口。
- `-p 8443:443`: 将宿主机的 `8443` 端口映射到容器的 `443` (HTTPS) 端口。
- `registry.cn-hangzhou.aliyuncs.com/ymlib/apisql-ee:latest`: 指定要运行的 Docker 镜像。

### 2.4 访问系统

安装成功后，在浏览器中通过以下地址访问 apiSQL：

```
# HTTP 访问
http://<服务器IP>:8088

# HTTPS 访问
https://<服务器IP>:8443
```

### 2.5 初始账户

- **用户名**: `admin`
- **密&emsp;码**: `apisql8088`

> **安全提示**：为确保生产环境安全，强烈建议您在首次登录后立即修改默认密码！

<br>

## 3. 离线安装 (内网环境)

此离线安装方案专为政务、国企、医疗、军工等高安全领域的客户设计。在这些场景中，服务器通常部署于无法访问互联网的物理隔离网络，安装包往往需要经过多次“摆渡”才能最终抵达目标服务器。

 

### 3.1 下载离线安装包

首先，在可以访问外网的机器上下载离线安装包。

- **下载地址** (请在电脑端微信中打开):
  https://drive.weixin.qq.com/s?k=AI8APQeSAAcVA9D0E8

下载 `apisql-ee-v1.3.8.tar.gz` 文件。软件会持续更新，建议您下载最新版本。

### 3.2 上传并解压

1.  **在目标服务器上创建安装目录**：
    ```bash
    mkdir -p /opt/apisql
    ```

2.  **上传安装包**：
    将下载的 `apisql-ee-v1.3.8.tar.gz` 上传至目标服务器的 `/opt/apisql` 目录。
    ```bash
    # 示例命令，请替换为您的实际文件名和服务器IP
    scp apisql-ee-v1.3.8.tar.gz root@服务器IP:/opt/apisql/
    ```

3.  **解压安装文件**：
    此压缩包内通常包含 Docker 镜像文件 (`.tar`) 和 `docker-compose.yml` 配置文件。
    ```bash
    cd /opt/apisql
    gzip -d apisql-ee-v1.3.8.tar.gz
    ```

### 3.3 导入 Docker 镜像

在 `/opt/apisql` 目录下，执行以下命令将离线镜像包导入到本地 Docker 中：

```bash
# 假设解压出的镜像文件名为 apisql-ee-v1.3.8.tar 
docker load < apisql-ee-v1.3.8.tar
```

### 3.4 启动服务

1.  **检查配置文件**：
    确认 `/opt/apisql` 目录下的 [docker-compose.yml](docker-compose.yml) 文件内容如下。通常无需修改，但您可以检查并确认密码等配置。
    ```yaml
    version: '3.8'
    services:
      apisql:
        container_name: apisql-ee
        # 镜像地址应与 `docker images` 中导入的名称一致
        image: registry.cn-hangzhou.aliyuncs.com/ymlib/apisql-ee:latest
        restart: unless-stopped
        environment:
          # 初始管理员密码
          - APISQL_INIT_ADMIN_PASSWORD=apisql8088
        volumes:
          - ./data:/data
          - ./logs:/logs
        ports:
          - "8088:80"
          - "8443:443"
    ```

2.  **启动容器**：
    在 `docker-compose.yml` 文件所在目录 (`/opt/apisql`)，执行以下命令启动服务：
    ```bash
    # 启动容器
    docker compose up -d

    # 如果您的 Docker 版本<20.10.15，请使用以下命令
    # docker-compose up -d
    ```

### 3.5 访问系统

在浏览器中输入以下地址访问：

```
# HTTP 访问
http://<服务器IP>:8088

# HTTPS 访问
https://<服务器IP>:8443
```

### 3.6 初始账户

- **用户名**: `admin`
- **密&emsp;码**: `apisql8088`

> **安全提示**：为确保生产环境安全，强烈建议您在首次登录后立即修改默认密码！

<br>

## 4. 技术支持

若您需要在 **Kubernetes (K8s) 集群**或**国产化信创环境**中进行部署，请单独联系我们，获取专业的技术支持。

如有疑问，请查阅 [apiSQL 官方文档](https://docs.apisql.cn) ，或微信扫一扫加入用户交流群。



<!--原图片太大，改为下面的代码了 ![微信群二维码](imgs/install/WeChatGroupQRCode.png) -->

<img src="./images/WeChatGroupQRCode.png" alt="微信群二维码" width="300">

