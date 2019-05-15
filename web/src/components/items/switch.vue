<template>
  <el-switch v-bind="$attrs" v-on="$listeners" v-model="xdhForm.currentModel[prop]"></el-switch>
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
