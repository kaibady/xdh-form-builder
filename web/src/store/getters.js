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
  /**
   * 当前制作的表单实体
   * @param state
   */
  model(state) {
    const m = {}
    state.fields.forEach(item => {
      if (!item) return
      // 分隔线组件无值
      if (item.type !== 'divider') {
        m[item.prop] = (item.props || {}).value || item.value
      }
    })
    return m
  },
  /**
   * 通用属性表单字段配置
   * @param state
   * @return {Array|*}
   */
  commonFields(state) {
    if (!state.editField) return []
    // 分隔线组件无表单字段通用属性
    if (state.editField.type === 'divider') {
      return []
    }
    // 无选项的字段，不支持字典设置
    if (!state.editField.options) {
      return commonFieldLib.filter(n => n.prop !== 'dict')
    }
    return commonFieldLib
  },
  /**
   * 扩展属性表单字段配置
   * @param state
   * @return {Array|*}
   */
  extendFields(state) {
    if (!state.editField) return []
    return state.props[state.editField.type]
  },
  
  /**
   * 通用属性表单实体
   * @param state
   * @param getters
   * @return {{}}
   */
  commonModel(state, getters) {
    if (!getters.commonFields) return {}
    const model = {}
    getters.commonFields.forEach(item => {
      model[item.prop] = state.editField[item.prop] || ''
    })
    return model
  },
  
  /**
   * 扩展属性表单实体
   * @param state
   * @param getters
   * @return {{}}
   */
  extendModel(state, getters) {
    if (!getters.extendFields) return {}
    const model = {}
    getters.extendFields.forEach(item => {
      model[item.prop] = state.editField.props[item.prop]
    })
    return model
  }
}
