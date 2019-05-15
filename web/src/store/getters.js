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
    
    //  公共属性设置表单的字段集合
    let fields = [...commonFieldLib]
    
    // 无选项的字段，不支持字典设置
    if (!state.editField.options) {
      fields = fields.filter(n => n.prop !== 'dict')
    }
    // 计算可以依赖的字段集合
    const canDependFields = state.fields.filter(n => n.prop !== state.editField.prop)
    
    // 把可依赖的字段集合构造成下拉选择框的选项
    const options = canDependFields.map(n => {
      return {
        label: n.prop,
        value: n.prop,
        type: n.type
      }
    })
    
    fields.push({
      label: '依赖字段',
      type: 'select',
      prop: 'depend',
      options: options,
      props: {
        clearable: true
      }
    })
    
    // 当前编辑的字段依赖字段名称
    const dependProp = state.editField.depend
    if (dependProp) {
      // 找到依赖字段的输入框类型
      const dependType = (options.find(n => n.value === dependProp) || {type: 'text'}).type
      // 找到对应组件的参数属性集合
      const dependComponentFields = state.props[dependType]
      // 从参数集合中找到value的的配置，目的是为了找到value的数据类型，根据数据类型匹配对应的输入框
      const valueField = dependComponentFields.find(n => n.prop === 'value')
      if (valueField) {
        fields.push({
          label: '依赖值',
          prop: 'dependValue',
          type: valueField.type
        })
      }
      
    }
    return fields
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
      model[item.prop] = state.editField[item.prop]
    })
    return model
  },
  
  defaultValue(state, getters) {
    if (!state.editField) return {}
    const type = state.editField.type
    const props = state.props[type] || []
    const defaultValues = {}
    props.forEach(n => {
      defaultValues[n.prop] = n.value
    })
    return defaultValues
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
      const value = state.editField.props[item.prop]
      model[item.prop] = typeof value === 'undefined' ? getters.defaultValue[item.prop] : value
    })
    return model
  }
}
