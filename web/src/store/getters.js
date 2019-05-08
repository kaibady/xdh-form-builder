/**
 * 自定义store getters
 * @module store/getters
 *
 * @example 定义getter方式
 *
 * getterExample(state, getters) {
 *   // do something...
 *   return state.list.length // 必须要有返回值
 * }
 *
 */

import commonFieldLib from '@/helper/setting/common'

export default {
  model(state) {
    const m = {}
    state.fields.forEach(item => {
      if (item.type !== 'divider') {
        m[item.prop] = item.value || ''
      }
    })
    return m
  },
  commonFields(state) {
    if (!state.editField) return []
    if (state.editField.type === 'divider') {
      return []
    }
    if (!state.editField.options) {
      return commonFieldLib.filter(n => n.prop !== 'dict')
    }
    return commonFieldLib
  },
  
  extendFields(state) {
    if (!state.editField) return []
    return state.props[state.editField.type]
  },
  
  // 当前项通用属性实体
  commonModel(state, getters) {
    if (!getters.commonFields) return {}
    const model = {}
    getters.commonFields.forEach(item => {
      model[item.prop] = state.editField[item.prop] || ''
    })
    return model
  },
  
  // 当前项扩展属性实体
  extendModel(state, getters) {
    if (!getters.extendFields) return {}
    const model = {}
    getters.extendFields.forEach(item => {
      model[item.prop] = state.editField.props[item.prop]
    })
    return model
  }
}
