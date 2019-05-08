<template>
  <el-checkbox-group v-bind="$attrs" v-model="xdhForm.currentModel[prop]">
    <component :is="component"
               v-for="(item,index) in options"
               :key="index"
               :label="item.value">{{item.label}}
    </component>
  </el-checkbox-group>
</template>

<script>
  export default {
    inject: ['xdhForm'],
    props: {
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

