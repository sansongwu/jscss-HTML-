const fs = require('fs')
const promisify = require('util').promisify
const PATH = require('path')

/* promisify */
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)

/* 自建模块 */
const mimeType = require('./mimeType')


module.exports = async (req, res, path) => {
    try{
        let files = await stat(path)
        if (files.isDirectory()) {
            res.setCode = 200
            res.setHeader('Content-Type', 'text/plain')
            let file = await readdir(path)
            res.end(file.join(',')) 
            
            
        }
        if (files.isFile()) {
            let type = mimeType(path)
            res.setCode = 200
            res.setHeader('Content-Type', type)

            let fileName = path.split(PATH.sep).pop().split('.').shift()
            console.log(`sep是${PATH.sep}`);
            console.log(fileName);
            
            if (fileName === '01') {
                setTimeout(() => {
                fs.createReadStream(path).pipe(res)
                }, 1000)
                return
            }

            if (fileName === 'yellow') {
                setTimeout(() => {
                fs.createReadStream(path).pipe(res)
                }, 5000)
                return
            }
            if (fileName === 'blue') {
                setTimeout(() => {
                fs.createReadStream(path).pipe(res)
                }, 10000)
                return
            }
            if (fileName === 'red') {
                setTimeout(() => {
                fs.createReadStream(path).pipe(res)
                }, 15000)
                return
            }
            if (fileName === 'green') {
                setTimeout(() => {
                fs.createReadStream(path).pipe(res)
                }, 20000)
                return
            }


            fs.createReadStream(path).pipe(res)
            
        
        }
    } catch (err) {
        res.setCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end(`not found   ${err}`)
        return
    }
}