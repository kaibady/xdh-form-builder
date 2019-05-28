<template>
  <xdh-form @change="handleChange"
            @submit="handleSubmit"
            style="padding: 20px"
            :model="model"
            :inline="false">
    <xdh-form-array prop="arr">
      <xdh-form-object v-for="(item,index) in list" :key="index" :prop="index">
        <xdh-form-group :inline="true" inline-size="small">
          <xdh-form-item
            v-bind="item"
            prop="title"
            :label="`域名${index+1}`"
            :rules="{required: true}"></xdh-form-item>
          <el-button @click="add(index)">新增</el-button>
          <el-button v-if="index>0" @click="remove(index)">删除</el-button>
        </xdh-form-group>
      </xdh-form-object>
    </xdh-form-array>
    <xdh-form-divider content="分隔" content-position="left"></xdh-form-divider>
    <xdh-form-item prop="name"
                   label="姓名"
                   type="range"
                   v-model="model.name"
                   :rules="{required:true}"></xdh-form-item>

    <xdh-form-item prop="title"></xdh-form-item>

    <xdh-form-divider content="分隔" content-position="left"></xdh-form-divider>
    <xdh-form-array prop="arr">
      <el-table
        :data="model.arr"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
          <template slot-scope="{row}">
            <xdh-form-item v-model="row.date" :prop="`0.date`" :rules="{required:true}"></xdh-form-item>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
          <template slot-scope="{row}">
            <xdh-form-item v-model="row.name" :prop="`0.name`" :rules="{required:true}"></xdh-form-item>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
          <template slot-scope="{row}">
            <xdh-form-item v-model="row.address" :prop="`0.address`" :rules="{required:true}"></xdh-form-item>
          </template>
        </el-table-column>
      </el-table>
    </xdh-form-array>
  </xdh-form>


</template>

<script>
  import XdhForm from '@/components/xdh-form'
  import XdhFormItem from '@/components/xdh-form-item'
  import XdhFormObject from '@/components/xdh-form-object'
  import XdhFormArray from '@/components/xdh-form-array'
  import XdhFormGroup from '@/components/xdh-form-group'
  import XdhFormDivider from '@/components/xdh-form-divider'
  import userMixin from '@/base/mixin/user'
  import {getPropByPath} from 'element-ui/src/utils/util'

  function createTree() {
    const tree = []
    for (let i = 0; i < 10; i++) {
      tree.push({
        id: i.toString(),
        label: '选项选项选项选项选项选项选' + i,
        value: i.toString(),
        parentId: null
      })
      for (let j = 0; j < 10; j++) {
        tree.push({
          id: `${i}-${j}`,
          label: '选项选项选项选项选项选项选项' + i + '-' + j,
          value: i.toString(),
          parentId: i.toString()
        })

        for (let k = 0; k < 10; k++) {
          tree.push({
            id: `${i}-${j}-${k}`,
            label: '选项选项选项' + i + '-' + j + '-' + k,
            value: k.toString(),
            parentId: `${i}-${j}`
          })
        }
      }
    }

    return tree
  }

  export const tree = [
    ...createTree()
  ]

  export default {
    mixins: [userMixin],
    components: {
      XdhForm,
      XdhFormObject,
      XdhFormGroup,
      XdhFormArray,
      XdhFormItem,
      XdhFormDivider
    },
    data() {
      return {
        tableData: [],
        rules: {},
        model: {
          arr: [{
            date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'
          }]
        },
        list: [{type: 'input'}]
      }
    },
    methods: {
      handleChange(val) {
        console.log('change', val)
      },
      handleSubmit(model) {
        console.log('submit', model)
      },
      handleClick(tag) {
      },
      add(index) {
        this.list.push({type: 'input'})
      },
      remove(index) {
        this.list.splice(index, 1)
      }
    },
    mounted() {
      setTimeout(() => {
        // this.model.obj.name = 'sam'
        this.model.name = [323, 4343]
      }, 3000)

      const model = {arr: [{a: 1, b: 2}]}

      const r = getPropByPath(model, 'arr.5.a')
      r.o.a = 9
      console.log(r, model)

    }
  }
</script>

