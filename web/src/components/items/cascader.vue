<template>
  <el-cascader
    :options="options"
    v-bind="$attrs"
    v-model="xdhForm.currentModel[prop]">
  </el-cascader>
</template>

<script>
  export default {
    inject: ['xdhForm'],
    props: {
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

