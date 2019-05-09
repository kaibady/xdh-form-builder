<template>
  <div class="wrapper" v-if="isShow">
    <el-tag v-for="(item,index) in rules"
            type="danger"
            size="medium"
            closable
            :disable-transitions="false"
            @close="handleClose(item)"
            @click="handleClick(item)"
            :key="index">
      {{item.message}}
    </el-tag>
    <el-button size="mini" @click="handleAdd">新增</el-button>
    <el-dialog
      title="验证规则"
      :visible.sync="dialogVisible"
      width="500px">
      <xdh-form ref="form"
                class="rule-form"
                footer-align="right"
                inline-size="medium"
                label-width="80px"
                footer-size="large"
                size="small"
                :model="editItem"
                @submit="handleSubmit"
                footer-border>
        <xdh-form-item v-for="item in formFields" :key="item.prop" v-bind="item"></xdh-form-item>
      </xdh-form>
    </el-dialog>
  </div>
  <div class="wrapper" v-else>
    该组件无验证设置
  </div>
</template>

<script>
  import XdhForm from '../xdh-form'
  import XdhFormItem from '../xdh-form-item'
  import rules from '@/helper/setting/rules'

  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    data() {
      return {
        dialogVisible: false,
        formFields: rules.fields,
        editItem: null
      }
    },
    computed: {
      isShow() {
        return this.$store.state.editField.type !== 'divider'
      },
      rules: {
        get() {
          return this.$store.state.editField.rules || []
        },
        set(rules) {
          const newField = JSON.parse(JSON.stringify({
            ...this.$store.state.editField,
            rules: rules
          }))
          this.$store.commit('updateField', newField)
        }
      }
    },
    methods: {
      cleanModel(model) {
        const m = {}
        Object.keys(model).forEach(key => {
          const val = model[key]
          if (typeof val !== 'undefined' && val !== '') {
            m[key] = val
          }
        })
        return m
      },
      handleClose(item) {
        this.$confirm('确认删除该规则', '提示').then(r => {
          this.rules = this.rules.filter(n => n !== item)
        })
      },
      handleAdd() {
        this.editItem = null
        this.dialogVisible = true
      },
      handleClick(item) {
        this.editItem = {trigger: '', ...item}
        this.dialogVisible = true
      },
      handleSubmit(model) {
        const rule = this.cleanModel(model)
        const rules = [...this.rules]
        if (this.editItem) {
          const index = rules.findIndex(item => item === this.editItem)
          rules.splice(index, 1, rule)
        } else {
          rules.push(rule)
        }
        this.rules = rules
        this.$refs.form.reset()
        this.dialogVisible = false
        this.editItem = null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-tag {
    margin-right: 10px;
    cursor: pointer;
  }

  .rule-form {
    padding: 10px 10px 0 10px;
  }
</style>
