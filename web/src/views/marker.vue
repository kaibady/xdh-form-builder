<template>
  <xdh-layout fixed :west.sync="west" :east.sync="east">
    <div class="body">
      <marker-area></marker-area>
    </div>
    <div class="west" slot="west">
      <component-list></component-list>
    </div>
    <div class="east" slot="east">
      <el-tabs class="tabs" value="props" stretch>
        <el-tab-pane label="属性设置" name="props">
          <setting-panel></setting-panel>
        </el-tab-pane>
        <el-tab-pane label="选项集" name="options">
        </el-tab-pane>
      </el-tabs>
    </div>
  </xdh-layout>
</template>

<script>
  import XdhLayout from '@/widgets/xdh-layout'
  import ComponentList from '../components/component-list'
  import SettingPanel from '../components/setting-panel'
  import MarkerArea from '../components/marker-area'

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
          width: '300px',
          collaspedSize: '0',
          split: true
        },
        model: {
          test: ''
        }
      }
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
    overflow: hidden;
  }

  .west {
    padding-right: 10px;
  }

  .tabs {
    /deep/ {
      .el-tabs__header {

      }
    }
  }

</style>
