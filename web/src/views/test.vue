<template>
  <xdh-form style="padding: 20px" @change="handleChange" :model="model">
    <xdh-form-item v-bind="tree"></xdh-form-item>
  </xdh-form>
</template>

<script>
  import XdhForm from '@/components/xdh-form'
  import XdhFormItem from '@/components/xdh-form-item'

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
    components: {
      XdhForm,
      XdhFormItem
    },
    data() {
      return {
        model: {
          tree: []
        },
        options: tree,
        tree: {
          type: 'tree',
          label: 'tree',
          prop: 'tree',
          props: {
            showSelected: true,
            disabled: false,
            closable: true,
            multiple: true
          },
          options: tree
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
        this.model.tree = ['0', '1-0', '1-1-1', '3-0']

      }, 1000)
    }
  }
</script>
