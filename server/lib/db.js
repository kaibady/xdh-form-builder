const path = require('path')
const fs = require('fs')

const createUid = function () {
  return new Date().getTime() + Math.floor(Math.random() * 1000)
}

const loadFile = function (dir, file) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '{}', 'utf-8')
  }
  return JSON.parse(fs.readFileSync(file, 'utf-8'))
}

const saveFile = function (path, model) {
  fs.writeFileSync(path, JSON.stringify(model), 'utf-8')
}

class DB {
  constructor(name) {
    this.name = name;
    this.file = path.join(DB.__path, `${name}.json`);
    this.data = loadFile(DB.__path, this.file)
  }
  
  get(id) {
    return this.data[id]
  }
  
  insert(model) {
    const id = createUid()
    model._id = id;
    model._time = new Date().toLocaleString()
    this.data[id] = model
    saveFile(this.file, this.data)
    return id
  }
  
  update(id, model) {
    const m = this.data[id];
    if (m) {
      model._time = new Date().toLocaleString()
      this.data[id] = model
    }
    saveFile(this.file, this.data)
  }
  
  remove(id) {
    const m = this.data[id];
    if (m) {
      delete this.data[id];
    }
    saveFile(this.file, this.data)
  }
  
  list() {
    return Object.keys(this.data).map(key => this.data[key])
  }
  
  clear() {
    this.data = {}
    saveFile(this.file, this.data)
  }
  
  drop() {
    this.data = null
    fs.unlinkSync(this.file)
  }
  
  destroy() {
    this.data = null
  }
  
  
}

DB.__path = './';

DB.setPath = function (p) {
  DB.__path = p
}

DB.getFiles = function () {
  const files = fs.readdirSync(DB.__path) || []
  return files.map(file => {
    return new DB(file.replace('.json', ''))
  })
}

DB.create = function (name) {
  return new DB(name)
}

module.exports = DB
