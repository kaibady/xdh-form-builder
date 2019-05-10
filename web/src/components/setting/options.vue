<template>
  <div class="wrapper" v-if="isShow">
    <table class="table" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <th width="40">id</th>
        <th width="40">parentId</th>
        <th>label</th>
        <th>value</th>
        <th class="op">
          <el-button size="mini" icon="el-icon-plus" type="text" @click="handleAdd"></el-button>
        </th>
      </tr>
      <tr v-for="(item,index) in options" :key="index">
        <td>{{item.id}}</td>
        <td>{{item.parentId}}</td>
        <td>{{item.label}}</td>
        <td>{{item.value}}</td>
        <td class="op">
          <el-button size="mini" icon="el-icon-edit" type="text" @click="handleEdit(item)"></el-button>
          <el-button size="mini" icon="el-icon-delete" type="text" @click="handleRemove(item)"></el-button>
        </td>
      </tr>
      <tr v-if="options.length===0">
        <td colspan="4">
          暂无数据
        </td>
      </tr>
    </table>
    <el-dialog
      title="选项"
      :visible.sync="dialogVisible"
      width="500px">
      <p>树结构，需要填写id 和 parentId</p>
      <xdh-form ref="form"
                class="form"
                footer-align="right"
                inline-size="medium"
                label-width="80px"
                footer-size="large"
                @submit="handleSubmit"
                :model="editOption"
                footer-border>
        <xdh-form-item v-for="item in fields" :key="item.prop" v-bind="item"></xdh-form-item>
      </xdh-form>
    </el-dialog>
  </div>
  <div class="wrapper" v-else>
    该组件无选项数据
  </div>
</template>

<script>
  import XdhForm from '../xdh-form'
  import XdhFormItem from '../xdh-form-item'

  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    data() {
      return {
        dialogVisible: false,
        editOption: null,
        fields: [
          {
            type: 'text',
            prop: 'id',
            label: 'id'
          },
          {
            type: 'text',
            prop: 'parentId',
            label: 'parentId'
          },
          {
            type: 'text',
            prop: 'label',
            label: 'label',
            rules: [{
              required: true
            }]
          },
          {
            type: 'text',
            prop: 'value',
            label: 'value',
            rules: [{
              required: true
            }]
          }
        ]
      }
    },
    computed: {
      isShow() {
        return !!this.$store.state.editField.options
      },
      options: {
        get() {
          return this.$store.state.editField.options || []
        },
        set(options) {
          const newField = JSON.parse(JSON.stringify({
            ...this.$store.state.editField,
            options: options
          }))
          this.$store.commit('updateField', newField)
        }
      }
    },
    methods: {
      handleAdd() {
        this.editOption = null
        this.dialogVisible = true
      },
      handleSubmit(model) {
        const options = [...this.options]
        if (this.editOption) {
          const index = options.findIndex(item => item === this.editOption)
          options.splice(index, 1, model)
        } else {
          options.push(model)
        }
        this.options = options
        this.$refs.form.reset()
        this.dialogVisible = false
        this.editOption = null
      },
      handleRemove(model) {
        this.$confirm('确认删除该规则', '提示').then(r => {
          this.options = this.options.filter(n => n !== model)
        })
      },
      handleEdit(model) {
        this.editOption = model
        this.dialogVisible = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/vars";

  .add-btn {
    float: right;
    margin-bottom: 10px;
  }

  .table {
    width: 100%;
    border-collapse: collapse;

    th {
      background: $--background-color-base;
    }

    th, td {
      border: 1px solid $--border-color-base;
      padding: 3px 5px;
      text-align: left;
    }

    .op {
      width: 50px;
      text-align: center;

      /deep/ i {
        font-size: 14px;
      }
    }
  }

  .form {
    padding: 15px 10px 0 10px;
  }
</style>
