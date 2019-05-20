<template>
  <xdh-form style="padding: 20px" @change="handleChange" :model="model">
    <xdh-form-item v-bind="inputTag" size="small"></xdh-form-item>
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
        model: {
          tag: []
        },
        options: tree,
        inputTag: {
          type: 'inputTag',
          label: 'InputTag',
          prop: 'tag',
          props: {
            collapseTags: true,
            disabled: false,
            readonly: false
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
    },
    mounted() {
      setTimeout(() => {
        this.model.tag = ['23432424']

      }, 1000)
    }
  }
</script>
