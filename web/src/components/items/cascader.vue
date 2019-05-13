<template>
  <el-cascader
    :options="treeOptions"
    v-bind="$attrs"
    v-model="fieldValue">
  </el-cascader>
</template>

<script>
  import {buildTree} from '@/utils/convert'

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
      },
      // 列表数据转化成树结构要用到的父级id值
      parentId: {
        type: [Number, String],
        default: null
      }
    },
    data() {
      return {
        fieldValue: []
      }
    },
    computed: {
      treeOptions() {
        return buildTree(this.options, this.parentId)
      }
    },
    watch: {
      fieldValue(val) {
        this.xdhForm.currentModel[this.prop] = val
      },
      'xdhForm.currentModel'(val) {
        this.fieldValue = val[this.prop] || []
      }
    },
    created() {
      this.fieldValue = this.xdhForm.currentModel[this.prop] || []
    }
  }
</script>

