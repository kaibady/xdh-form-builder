<template>
  <xdh-grid :data.sync="list" direction="row" justify="flex-start" wrap="wrap">
    <div class="box-wrapper" slot-scope="{item, index}">
      <component-item :data="item" :index="index"></component-item>
    </div>
  </xdh-grid>
</template>

<script>
  import XdhGrid from '@/widgets/xdh-grid'
  import ComponentItem from './component-item'
  import config from '@/helper/components'

  export default {
    components: {
      XdhGrid,
      ComponentItem
    },
    data() {
      return {
        list: config
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/vars";

  .box-wrapper {
    padding: 10px 0 0 10px;

  }
</style>
