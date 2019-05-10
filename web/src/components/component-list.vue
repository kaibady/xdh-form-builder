<template>
  <div class="list" ref="list">
    <el-divider content-position="left">表单域组件</el-divider>
    <xdh-grid :data="fields" direction="row" justify="flex-start" wrap="wrap">
      <div class="box-wrapper" slot-scope="{item, index}">
        <component-item :data="item" :index="index"></component-item>
      </div>
    </xdh-grid>
    <el-divider content-position="left">辅助组件</el-divider>
    <xdh-grid :data="helpers" direction="row" justify="flex-start" wrap="wrap">
      <div class="box-wrapper" slot-scope="{item, index}">
        <component-item :data="item" :index="index"></component-item>
      </div>
    </xdh-grid>
  </div>
</template>


<script>
  import XdhGrid from '@/widgets/xdh-grid'
  import ComponentItem from './component-item'
  import components from '@/helper/setting/components'

  export default {
    components: {
      XdhGrid,
      ComponentItem
    },
    data() {
      return {
        components: components
      }
    },
    computed: {
      fields() {
        return this.components.filter(n => !n.helper)
      },
      helpers() {
        return this.components.filter(n => !!n.helper)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/vars";

  .list {
    /deep/ {
      .el-divider__text {
        background: transparent;
      }
    }
  }

  .box-wrapper {
    padding: 10px 0 0 10px;

  }
</style>
