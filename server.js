const http = require('http')
const path = require('path')
const fs = require('fs')
const { URL } = require('url')
const qs = require('querystring')
let RouteGET = {}
let RoutePOST = {}

http.createServer((req, res) => {
  try {
    switch (req.method.toUpperCase()) {
      case "GET":
        RouteGET[req.url](req, res)
        break;
      case "POST":
        RoutePOST[req.url](req, res)
        break;
    }
  } catch (error) {
    HandleStatic(path.join(__dirname, 'static'), req, res)
  }
}).listen({
  host: '',
  port: 80
});

console.log('http://localhost/')

// route(url, method, HandleFn)
class route {
  constructor(url, method, HandleFn) {
    this.url = url;
    this.method = method;
    this.HandleFn = HandleFn;

    switch (this.method.toUpperCase()) {
      case "GET":
        RouteGET[this.url] = this.HandleFn;
        break;
      case "POST":
        RoutePOST[this.url] = this.HandleFn;
        break;
    }
  }
}

function HandleStatic(staticPath, req, res) {
  let urlObj = new URL(req.url, 'http://localhost:8888/')
  if (urlObj.pathname === '/') {
    urlObj.pathname += 'index.html';
  }
  let filePath = path.join(staticPath, urlObj.pathname)
  fs.readFile(filePath, 'binary', (err, data) => {
    if (err) {
      HandleError(req, res)
    } else {
      // res.setHeader('Content-Type', 'text/html')
      res.writeHead(200, 'OK')
      res.write(data, 'binary')
      res.end()
    }
  })
}

function HandleError(req, res) {
  res.writeHead(404, 'Not Found!', { "Content-Type": "text/html;charset=utf-8" })
  res.write('<h1>404 Not Found!</h1><font>您要找的页面找不到了&gt_&lt! </font>')
  res.end()
}

function GetRequestBody(req) {
  return new Promise((resolve, reject) => {
    let Body = '';
    req.on('data', (chunk) => {
      Body += chunk;
    })
    req.on('end', () => {
      resolve(Body)
    })
  })
}

new route('/info', 'POST', async (req, res) => {
  const info = await GetRequestBody(req)
  const info_obj = qs.parse(info)
  console.log(info_obj)
  res.end(info)
})
