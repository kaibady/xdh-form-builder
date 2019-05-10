import {get, save, LOCAL} from '../utils/storage'

const CATCHE_KEY = '__forms__'


export function fetchForms() {
  return get(CATCHE_KEY, LOCAL) || []
}

export function addForms(model) {
  const list = fetchForms()
  model._id = new Date().getTime()
  list.push(model)
  save(CATCHE_KEY, list, LOCAL)
}

export function removeForms(id) {
  let list = fetchForms()
  list = list.filter(item => item._id !== id)
  save(CATCHE_KEY, list, LOCAL)
}

export function getForms(id) {
  let list = fetchForms()
  return list.find(item => item._id === id) || {}
}

export function updateForms(id, model) {
  let list = fetchForms()
  const index = list.findIndex(item => item._id === id)
  const item = list[index] || {}
  list.splice(index, 1, {...item, ...model})
  save(CATCHE_KEY, list, LOCAL)
}
