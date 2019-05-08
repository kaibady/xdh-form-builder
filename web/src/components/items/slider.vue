<template>
  <el-slider v-bind="$attrs" v-model="xdhForm.currentModel[prop]"></el-slider>
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


