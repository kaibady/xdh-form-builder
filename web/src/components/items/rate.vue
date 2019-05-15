<template>
  <el-rate v-bind="$attrs" v-on="$listeners" v-model="xdhForm.currentModel[prop]"></el-rate>
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


