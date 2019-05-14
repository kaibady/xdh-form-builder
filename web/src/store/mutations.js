/**
 * 自定义Mutations
 * @module store/mutations
 *
 * @example 定义mutation方式
 *
 * methodName(state, payload) {
 *    state.moduleName.model = payload
 * }
 *
 */
export default {
  /**
   * 设置组件属性库
   * @param state
   * @param props
   */
  setProps(state, props) {
    state.props = props
  },
  /**
   * 设置表单配置实体
   * @param state
   * @param payload
   */
  setFormModel(state, payload) {
    state.formModel = payload
  },
  /**
   * 初始化表单字段
   * @param state
   * @param payload
   */
  setFields(state, payload) {
    state.fields = payload
  },
  
  /**
   * 设计区新增表单项组件
   * @param state
   * @param field
   */
  addField(state, {field, index}) {
    if (field) {
      state.fields.splice(index, 0, field)
    }
  },
  /**
   * 设计区删除表单项组件
   * @param state
   * @param field
   */
  removeField(state, field) {
    state.fields = state.fields.filter(item => field !== item)
  },
  /**
   * 设计区更新表单项组件
   * @param state
   * @param field
   */
  updateField(state, field) {
    const index = state.fields.findIndex(item => item.prop === state.editField.prop)
    state.fields.splice(index, 1, field)
    state.editField = field
  },
  /**
   * 设计区表单项排序
   * @param state
   * @param newIndex
   * @param oldIndex
   */
  sortFields(state, {newIndex, oldIndex}) {
    const item = state.fields[oldIndex]
    if (newIndex !== oldIndex) {
      state.fields.splice(oldIndex, 1)
      state.fields.splice(newIndex, 0, item)
    }
    
  },
  /**
   * 设置当前正在编辑的表单项组件
   * @param state
   * @param field
   */
  setEditField(state, field) {
    state.editField = field
  }
}
