<template>
  <el-collapse v-if="editField" class="setting-panel" accordion v-model="active">
    <el-collapse-item title="通用属性" name="common">
      <common></common>
    </el-collapse-item>
    <el-collapse-item title="扩展属性" name="props">
      <extend></extend>
    </el-collapse-item>
    <el-collapse-item title="校验设置" name="rules">
      <rules></rules>
    </el-collapse-item>
    <el-collapse-item title="选项数据" name="options">
      <options></options>
    </el-collapse-item>
  </el-collapse>
  <div v-else class="wrapper">
    请选择组件
  </div>

</template>

<script>

  import Common from './setting/common'
  import Extend from './setting/extend'
  import Rules from './setting/rules'
  import Options from './setting/options'
  import {mapState} from 'vuex'

  export default {
    components: {
      Common,
      Extend,
      Rules,
      Options
    },
    data() {
      return {
        active: 'common'
      }
    },
    computed: {
      ...mapState(['editField'])
    }

  }
</script>

<style scoped lang="scss">
  .setting-panel {
    /deep/ {
      .el-collapse-item__header {
        padding-left: 10px;
      }
    }
  }

  .wrapper {
    padding: 10px 10px 0 10px;
  }

</style>
