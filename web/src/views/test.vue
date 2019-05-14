<template>
  <el-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    @change="handleChange"
    placeholder="请选择文章标签">
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value: []
      }
    },
    methods: {
      handleChange(val) {
        console.log(val)
      }
    }
  }
</script>
