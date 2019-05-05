<template>
  <xdh-layout class="main" fixed v-if="reRender">
    <xdh-header slot="north"
                title="可视化表单制作工具"
                layout="title,->,slot">
      <div class="tool" v-if="showOp">
        <el-button round size="small" @click="handleBack">返回</el-button>
        <el-button round size="small" @click="dialogVisible=true">设置</el-button>
        <el-button round type="success" size="small">保存</el-button>
        <el-button round type="warning" size="small">预览</el-button>
        <el-button round type="danger" size="small">导出</el-button>
      </div>
    </xdh-header>
    <router-view></router-view>
    <el-dialog
      title="表单设置"
      :visible.sync="dialogVisible"
      width="1150px">
      <form-setting @submit="dialogVisible=false"></form-setting>
    </el-dialog>
  </xdh-layout>
</template>

<script>

  import XdhLayout from '@/widgets/xdh-layout'
  import XdhHeader from '@/widgets/xdh-header'
  import FormSetting from '../components/form-setting'

  export default {
    components: {
      XdhLayout,
      XdhHeader,
      FormSetting
    },
    data() {
      return {
        showOp: false,
        reRender: true,
        dialogVisible: false
      }
    },
    watch: {
      '$route.path': {
        immediate: true,
        handler(val) {
          this.showOp = val.includes('marker')
          this.reRender = false
          this.$nextTick(() => {
            this.reRender = true
          })
        }
      }
    },
    methods: {
      handleBack() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped lang="scss">
  .main {
    min-width: 1200px;
  }

  .tool {
    margin-top: 12px;
  }
</style>
