<template>
  <el-date-picker v-bind="$props" v-model="xdhForm.currentModel[prop]"></el-date-picker>
</template>

<script>
  import ElDatePicker from 'element-ui/lib/date-picker'

  export default {
    inject: ['xdhForm'],
    props: {
      ...ElDatePicker.props,
      prop: {
        type: String,
        required: true
      },
      placeholder: String
    }
  }
</script>

