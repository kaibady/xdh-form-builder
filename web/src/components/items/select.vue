<template>
  <el-select v-bind="$attrs" v-model="xdhForm.currentModel[prop]">
    <el-option v-for="(item, index) in options"
               :key="index"
               :label="item.label"
               :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    inject: ['xdhForm'],
    props: {
      prop: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

