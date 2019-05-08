<template>
  <el-date-picker v-bind="$attrs" v-model="xdhForm.currentModel[prop]"></el-date-picker>
</template>

<script>
  export default {
    inject: ['xdhForm'],
    props: {
      prop: {
        type: String,
        required: true
      }
    }
  }
</script>

