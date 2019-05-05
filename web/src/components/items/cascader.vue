<template>
  <el-cascader
    :options="options"
    v-bind="$props"
    v-model="xdhForm.currentModel[prop]">
  </el-cascader>
</template>

<script>
  import ElCascader from 'element-ui/lib/cascader'

  export default {
    inject: ['xdhForm'],
    props: {
      ...ElCascader.props,
      prop: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

