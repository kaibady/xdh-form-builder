<template>
  <xdh-form style="padding: 20px" :model="model" size="small" @change="handleChange">
    <!--    <xdh-form-item v-bind="upload">-->
    <!--    </xdh-form-item>-->
    <xdh-form-item v-bind="tag" @click="handleClick">
    </xdh-form-item>
    <xdh-form-item v-bind="cascader"></xdh-form-item>
    <xdh-form-item prop="text"></xdh-form-item>
    <xdh-form-item type="checkbox" prop="checkbox" label="checkbox" :options="options"></xdh-form-item>
    <xdh-form-item type="date" prop="date" label="date" :props="{type:'daterange'}"></xdh-form-item>
    <xdh-form-item prop="number" type="number" label="number"></xdh-form-item>
    <xdh-form-item type="radio" prop="radio" label="radio" :options="options"></xdh-form-item>
    <xdh-form-item type="range" prop="range" label="range" :props="{dataType:'date'}"></xdh-form-item>
    <xdh-form-item prop="rate" type="rate" label="rate"></xdh-form-item>
    <xdh-form-item type="select" prop="select" label="select" :options="options"></xdh-form-item>
    <xdh-form-item prop="slider" type="slider" label="slider"></xdh-form-item>
  </xdh-form>
</template>

<script>
  import XdhForm from '@/components/xdh-form'
  import XdhFormItem from '@/components/xdh-form-item'


  export const tree = [
    {
      id: 1,
      label: '选项1',
      value: '1',
      parentId: null
    },
    {
      id: 2,
      label: '选项2',
      value: '2',
      parentId: null
    },
    {
      id: 3,
      label: '选项1-1',
      value: '1-1',
      parentId: 1
    },
    {
      id: 4,
      label: '选项1-2',
      value: '1-2',
      parentId: 1
    },
    {
      id: 5,
      label: '选项2-1',
      value: '2-1',
      parentId: 2
    }
  ]

  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    data() {
      return {
        options: tree,
        model: {
          tag: [1, 2],
          cascader: [],
          text: '33'
        },
        tag: {
          type: 'tag',
          label: '标签',
          prop: 'tag',
          props: {
            theme: ''
          }

        },
        cascader: {
          type: 'cascader',
          prop: 'cascader',
          label: 'cascader',
          options: tree
        },
        range: {
          type: 'range',
          prop: 'range',
          props: {
            dataType: 'date',
            type: 'datetime',
            valueFormat: 'yyyy-MM-dd'
          }

        },
        upload: {
          prop: 'file',
          type: 'upload',
          props: {
            action: 'https://jsonplaceholder.typicode.com/posts/',
            autoUpload: false,
            multiple: true,
            onChange(res, file, list) {
              console.log(file)
            }
          }


        }
      }
    },
    methods: {
      handleChange(val) {
        console.log(val)
      },
      handleClick(tag) {
        this.model.tag.push(3)
        this.model.cascader = ['1', '1-1']
      }
    }
  }
</script>
