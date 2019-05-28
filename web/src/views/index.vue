<template>
  <div class="list-wrapper">
    <xdh-list :data="data"
              layout="horizontal"
              :column="6"
              :gutter="20"
              :split="false"
              justify="space-between">
      <el-card class="box-card"
               :class="{add:item.isAdd}"
               shadow="hover"
               slot-scope="{item, index}"
               :body-style="{padding:0}"
               @click.native.stop="handleClick(item)">
        <i class="el-icon-plus" v-if="item.isAdd"></i>
        {{item.title}}
        <div class="action" v-if="!item.isAdd">
          <i class="el-icon-edit" @click.stop="handleEdit(item)"></i>
          <i class="el-icon-delete" @click.stop="handleRemove(item, index)"></i>
        </div>
      </el-card>
    </xdh-list>
    <el-dialog
      title="新建/编辑表单"
      :visible.sync="dialogVisible"
      width="500px">
      <xdh-form ref="form"
                footer-align="right"
                label-width="60px"
                class="form"
                @submit="handleSubmit"
                :footer-border="false"
                :model="editItem">
        <xdh-form-item prop="title" label="名称" :rules="{required:true}"></xdh-form-item>
      </xdh-form>
    </el-dialog>
  </div>
</template>

<script>
  import XdhList from '@/widgets/xdh-list'
  import XdhForm from '@/widgets/xdh-form'
  import XdhFormItem from '@/widgets/xdh-form/xdh-form-item'
  import FormMixin from '@/base/mixin/forms'
  import {LOCAL_STORAGE} from '@/config'
  import {fetchForms, addForms, updateForms, removeForms} from '@/helper/storage'

  export default {
    mixins: [FormMixin],
    components: {
      XdhList,
      XdhForm,
      XdhFormItem
    },
    data() {
      return {
        dialogVisible: false,
        editItem: null
      }
    },
    computed: {
      data() {
        return [
          {
            id: 0,
            isAdd: true
          },
          ...this.forms.list
        ]
      }
    },
    methods: {
      refresh() {
        if (LOCAL_STORAGE) {
          this.forms.list = fetchForms()
        } else {
          this.fetchForms()
        }
      },
      handleEdit(item) {
        this.editItem = item
        this.dialogVisible = true
      },
      handleRemove(item, index) {
        this.$confirm('确认删除？', '提示').then(r => {
          if (LOCAL_STORAGE) {
            removeForms(item._id)
            this.refresh()
          } else {
            this.removeForms(item._id, null, index - 1)
          }
        })
      },
      handleClick(item) {
        if (item.isAdd) {
          this.dialogVisible = true
        } else {
          this.$router.push(`/marker/${item._id}`)
        }
      },
      handleSubmit(model) {
        if (this.editItem) {
          if (LOCAL_STORAGE) {
            updateForms(model._id, model)
            this.editItem = null
            this.$refs.form.reset()
            this.dialogVisible = false
            this.refresh()
          } else {
            this.updateForms(model).then(r => {
              this.editItem = null
              this.$refs.form.reset()
              this.dialogVisible = false
              this.refresh()
            })
          }
        } else {
          if (LOCAL_STORAGE) {
            addForms(model)
            this.$refs.form.reset()
            this.dialogVisible = false
            this.refresh()
          } else {
            this.addForms(model).then(r => {
              this.$refs.form.reset()
              this.dialogVisible = false
              this.refresh()
            })
          }
        }

      }
    },
    created() {
      this.refresh()
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/vars";

  .list-wrapper {
    padding: 20px;

  }

  .form {
    margin: 15px;
  }

  .box-card {
    height: 200px;
    min-width: 120px;
    line-height: 200px;
    text-align: center;
    font-size: 16px;
    background: $--color-primary-light-9;
    color: $--color-text-primary;
    position: relative;
    cursor: pointer;

    &.add {
      line-height: 230px;
      color: $--color-primary;
    }

    .el-icon-plus {
      font-size: 64px;
      font-weight: bold;
    }
  }

  .action {
    line-height: 40px;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 40px;
    font-size: 20px;
    text-align: right;
    width: 100%;

    i {
      padding: 0 10px;
      cursor: pointer;
      height: 35px;
      line-height: 35px;
      border-radius: $--border-radius-base;
      margin-right: 5px;

      &:hover {
        background: $--color-primary-light-8;
      }
    }
  }
</style>
