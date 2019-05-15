<template>
  <el-input v-bind="$attrs" v-on="$listeners" v-model="xdhForm.currentModel[prop]"></el-input>
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


