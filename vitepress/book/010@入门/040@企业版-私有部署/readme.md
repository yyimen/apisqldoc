# apiSQL私有部署


> 为了满足大型企业客户对信息安全的严格要求，关键系统软件必须进行私有化部署。本文档将详细指导您如何在本地Linux服务器上使用Docker安装APISQL软件，并提供在线安装与离线安装两种方式，您可根据实际环境选择最适合的安装方法。

## 1. 准备工作

### 1.1 硬件要求

- Linux (x86_64) 服务器，最低硬件配置：1核CPU / 2GB内存 / 10GB存储空间

### 1.2 软件要求

- **Docker Engine** 推荐版本：最低19.03，推荐20.10.15或更高，Docker安装请参考官方文档：[Install | Docker Docs](https://docs.docker.com/engine/install/)
- **Docker Compose**：如果Docker Engine版本 ≥20.10.15，则Docker Compose已包含。


<br>
<br>
<br>


## 2. 在线一键安装（推荐）

### 2.1 安装命令

在终端中执行以下命令：


```bash
docker run --name apisql-aio -d --restart unless-stopped \
  -p 8010:80 -p 8443:443 \
  -v /sys/firmware:/host/sys/firmware:ro \
  -v $PWD/data:/data \
  registry.cn-hangzhou.aliyuncs.com/ymlib/apisql-aio:latest
```

### 2.2 参数说明

- `--name apisql-aio`：指定容器名称为 apisql-aio
- `-d`：后台运行容器
- `--restart unless-stopped`：当Docker守护进程重启（如服务器重启）时，容器会自动启动，除非容器是被手动停止
- `-p 8010:80`：将主机的 8010 端口映射到容器的 80 端口
- `-p 8443:443`：将主机的 8443 端口映射到容器的 443 端口
- `-v /sys/firmware:/host/sys/firmware:ro`：挂载主机的 `/sys/firmware` 目录到容器的 `/host/sys/firmware`，只读模式
- `-v $PWD/data:/data`：挂载当前目录下的 `data` 目录到容器的 `/data`

> 温馨提示：执行以上命令后，系统会自动创建 `data` 目录，并将数据保存在当前目录的 `data` 目录中。

### 2.3 访问 APISQL

在浏览器中输入以下地址访问APISQL软件：
```
http://<服务器IP>:8010
```

或

```
https://<服务器IP>:8443
```


### 2.4 初始账户信息

- **用户名**：admin
- **密码**：66666666

<br>
<br>
<br>

## 3. 离线方式安装（备用）

 > 针对政务、国企、医院、军工等内网物理隔离的客户，有时需要多次摆渡才能到达要安装软件的服务器。本教程将指导您使用Linux和Docker Compose编排服务，实现APISQL的离线部署。

### 3.1 下载安装包

获取软件安装包（请在电脑端微信打开），：
https://drive.weixin.qq.com/s?k=ALgAgwdlAAcTuweD66

下载 apisql-aio-v1.2.3.tar.gz，软件时常更新，当有新版时请下载最新版本；寻找旧版本，请到历史版本目录中下载。


### 3.2 上传镜像文件

在服务器上创建安装目录：

```bash
mkdir -p /opt/apisql
```

将下载的 all in one 镜像压缩包 `apisql-aio-v1.2.3.tar.gz` 文件，摆渡至内部生产网络，并上传到服务器：

```bash
scp apisql-aio-v1.2.3.tar.gz root@<服务器IP>:/opt/apisql/
```

### 3.3 解压文件

在终端中执行解压缩命令：

```bash
gzip -dv /opt/apisql/apisql-aio-v1.2.3.tar.gz
```

### 3.4 导入 Docker 镜像

执行导入镜像命令：

```bash
docker load < /opt/apisql/apisql-aio-v1.2.3.tar
```

### 3.5 运行 APISQL 服务

启动服务容器：

```bash
docker run --name apisql-aio -d -p 8010:80 -p 8443:443 -v /sys/firmware:/host/sys/firmware:ro -v /opt/apisql/data:/data registry.cn-hangzhou.aliyuncs.com/ymlib/apisql-aio:v1.2.3
```

### 3.6 访问 APISQL

在浏览器中输入以下访问地址：

```
http://<服务器IP>:8010
```

或

```
https://<服务器IP>:8443
```

### 3.7 初始账户信息

- **用户名**：admin
- **密码**：66666666
<br>
<br>
<br>

## 4. 技术支持

如需K8s集群版本安装、国产信创环境安装，请联系人工支持。

其他疑问请查看 [APISQL官方文档](https://www.apisql.cn) 或微信搜索公众号 **APISQL**，加用户群获取技术支持。

