const express = require('../web/node_modules/express');
const bodyParser = require('../web/node_modules/body-parser');
const path = require('path')
const DB = require('./lib/db');
const FILES_PATH = `${__dirname}/files`;

function setHeaders(req, res) {
  res.set({
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': req.get('Origin') || '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUSH,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE'
  });
}

DB.setPath(FILES_PATH);

const db = DB.create('forms')

const app = express()
app.use(bodyParser.json());

// 通用响应头设置
app.use(function (req, res, next) {
  setHeaders(req, res);
  next()
})

app.listen(3000);

console.log('server running at port: 3000');

// 处理跨域
app.options('/*', (req, res) => {
  res.send('')
})

// 获取全部表单列表
app.get('/forms', (req, res) => {
  const list = db.list()
  res.json({
    code: 0,
    data: {
      list: list,
      total: list.length,
      page: 1
    }
  })
})

// 新增表单
app.post('/forms', (req, res) => {
  let model = req.body
  const id = db.insert(model)
  res.json({
    code: 0,
    data: id
  })
})

// 删除表单
app.delete('/forms/:id', (req, res) => {
  const id = req.params.id
  db.remove(id)
  res.json({
    code: 0,
    data: true
  })
})

// 获取表单内容
app.get('/forms/:id', (req, res) => {
  const id = req.params.id
  const model = db.get(id)
  res.json({
    code: 0,
    data: model
  })
})

// 更新表单内容
app.patch('/forms', (req, res) => {
  const body = req.body
  const id = body._id
  const model = db.get(id)
  db.update(id, Object.assign({}, model, body))
  res.json({
    code: 0,
    data: model
  })
})


