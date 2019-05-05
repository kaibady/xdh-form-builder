<template>
  <el-input v-bind="$props" v-model="xdhForm.currentModel[prop]"></el-input>
</template>

<script>
  import ElInput from 'element-ui/lib/input'

  export default {
    inject: ['xdhForm'],
    props: {
      ...ElInput.props,
      prop: {
        type: String,
        required: true
      },
      placeholder: String
    }
  }
</script>


