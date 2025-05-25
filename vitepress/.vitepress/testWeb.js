const path = require('path');
const express = require('express');
const app = express();
const port = 3500;

// 静态文件服务中间件
app.use('/apisql', express.static(path.join(__dirname, './dist')));


// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}/apisql/`);
});