<template>
  <el-collapse v-if="editField" class="setting-panel" accordion v-model="active">
    <el-collapse-item title="通用属性" name="common">
      <div class="wrapper" v-if="commonFields.length">
        <xdh-form size="small" :model="commonModel" :footer="false" label-width="80px" @change="handleCommonChange">
          <xdh-form-item v-for="(item, index) in commonFields"
                         :key="index"
                         v-bind="item"></xdh-form-item>
        </xdh-form>
      </div>
      <div v-else class="wrapper">该组件无通用属性</div>
    </el-collapse-item>
    <el-collapse-item title="扩展属性" name="props">
      <div class="wrapper">
        <xdh-form size="small" :model="extendModel" :footer="false" label-width="120px" @change="handlePropsChange">
          <xdh-form-item v-for="(item, index) in extendFields"
                         :key="index"
                         v-bind="item"></xdh-form-item>
        </xdh-form>
      </div>
    </el-collapse-item>
    <el-collapse-item title="校验设置" name="rules">
      <div class="wrapper">
      </div>
    </el-collapse-item>
    <el-collapse-item title="选项数据" name="options">
      <div class="wrapper">
      </div>
    </el-collapse-item>
  </el-collapse>
  <div v-else class="wrapper">
    请选择组件
  </div>

</template>

<script>
  import XdhForm from './xdh-form'
  import XdhFormItem from './xdh-form-item'
  import {mapGetters, mapState} from 'vuex'

  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    data() {
      return {
        active: 'common'
      }
    },
    computed: {
      ...mapState(['editField']),
      ...mapGetters(['commonFields', 'commonModel', 'extendFields', 'extendModel'])
    },
    methods: {
      handleCommonChange(model) {
        const newField = JSON.parse(JSON.stringify({
          ...this.editField,
          ...model
        }))
        this.$store.commit('updateField', newField)
      },
      handlePropsChange(props) {
        const newField = JSON.parse(JSON.stringify({
          ...this.editField,
          props: {...props}
        }))
        this.$store.commit('updateField', newField)
      }
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
