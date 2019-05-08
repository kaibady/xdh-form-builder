<template>
  <xdh-layout fixed :west.sync="west" :east.sync="east">
    <div class="body">
      <marker-area></marker-area>
    </div>
    <div class="west" slot="west">
      <component-list></component-list>
    </div>
    <div class="east" slot="east">
      <setting-panel></setting-panel>
    </div>
  </xdh-layout>
</template>

<script>
  import XdhLayout from '@/widgets/xdh-layout'
  import ComponentList from '../components/component-list'
  import SettingPanel from '../components/setting-panel'
  import MarkerArea from '../components/marker-area'
  import formSetting from '@/helper/setting/form'
  import propsLib from '@/helper/setting/props'

  export default {
    components: {
      XdhLayout,
      ComponentList,
      SettingPanel,
      MarkerArea
    },
    data() {
      return {
        west: {
          width: '290px',
          collaspedSize: '0',
          split: true
        },
        east: {
          width: '350px',
          collaspedSize: '0',
          split: true
        },
        model: null
      }
    },
    methods: {},
    created() {
      // todo 发请求获取数据
      this.$store.commit('setFormModel', formSetting.model)
      this.$store.commit('setProps', propsLib)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/vars";

  .body {
    padding: 15px;
    background: $--background-color-base;
    height: calc(100% - 30px);
  }

  .container {
    height: 100%;
  }

  .west, .east {
    background: $--color-primary-light-9;
    height: 100%;
    overflow: auto;
  }

  .west {
    padding-right: 10px;
    overflow: hidden;
  }

  .tabs {
    /deep/ {
      .el-tabs__header {

      }
    }
  }

</style>
