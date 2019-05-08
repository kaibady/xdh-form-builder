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
  addField(state, field) {
    state.fields.push(field)
  },
  removeField(state, field) {
    state.fields = state.fields.filter(item => field !== item)
  },
  updateField(state, field) {
    const index = state.fields.findIndex(item => item === state.editField)
    state.fields.splice(index, 1, field)
    state.editField = field
  },
  sortFields(state, {newIndex, oldIndex}) {
    const item = state.fields[oldIndex]
    state.fields.splice(oldIndex, 1)
    state.fields.splice(newIndex, 0, item)
    
  },
  setEditField(state, field) {
    state.editField = field
  }
}
