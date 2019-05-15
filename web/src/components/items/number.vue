<template>
  <el-input-number v-bind="$attrs" v-on="$listeners" v-model="xdhForm.currentModel[prop]"></el-input-number>
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


