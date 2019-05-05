<template>
  <el-switch v-bind="$props" v-model="xdhForm.currentModel[prop]"></el-switch>
</template>

<script>
  import ElSwitch from 'element-ui/lib/switch'
  export default {
    inject: ['xdhForm'],
    props: {
      ...ElSwitch.props,
      prop: {
        type: String,
        required: true
      }
    }
  }
</script>
