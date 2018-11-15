/* 基础模块 */
const http = require('http')
const path = require('path')

/* 自建模块 */
const config = require('./config/config')
const router = require('./helper/route')

/* 全局变量 */
const port = config.port
const host = config.host
const root = config.root
const filePath = path.join(__dirname, 'source')

let server = http.createServer((req, res) => {
    let url = path.join(filePath, req.url)
    router(req, res, url)
})

server.listen(port, host, () => {
    console.log('启动成功');
    
})