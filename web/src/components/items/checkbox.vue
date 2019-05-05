<template>
  <el-checkbox-group v-bind="$props" v-model="xdhForm.currentModel[prop]">
    <component :is="component"
               v-for="(item,index) in options"
               :key="index"
               :label="item.value">{{item.label}}
    </component>
  </el-checkbox-group>
</template>

<script>
  import ElCheckboxGroup from 'element-ui/lib/checkbox-group'

  export default {
    inject: ['xdhForm'],
    props: {
      ...ElCheckboxGroup.props,
      // 字段名称
      prop: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        default() {
          return []
        }
      },
      // 是否按钮模式
      button: Boolean
    },
    computed: {
      component() {
        return this.button ? 'el-checkbox-button' : 'el-checkbox'
      }
    }
  }
</script>

