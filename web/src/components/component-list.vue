<template>
  <xdh-grid :data="components" direction="row" justify="flex-start" wrap="wrap">
    <div class="box-wrapper" slot-scope="{item, index}">
      <component-item :data="item" :index="index"></component-item>
    </div>
  </xdh-grid>
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
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/vars";

  .box-wrapper {
    padding: 10px 0 0 10px;

  }
</style>
