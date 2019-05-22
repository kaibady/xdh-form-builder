<template>
  <xdh-form style="padding: 20px"
            @change="handleChange"
            :model="model">

    <xdh-form-group label-position="right" label-width="140px" inline inline-size="large" :block="false" width="400px">
      <xdh-form-item prop="text3" type="input" label="内部"></xdh-form-item>
      <xdh-form-item prop="text4" type="input" label="内部"></xdh-form-item>
      <xdh-form-item prop="text5" type="input" label="内部"></xdh-form-item>
      <xdh-form-item prop="text6" type="input" label="内部"></xdh-form-item>
    </xdh-form-group>

    <xdh-form-group label-position="right" label-width="140px" inline inline-size="large" :block="false" width="300px">
      <xdh-form-item prop="text1" type="input" label="外部"></xdh-form-item>
      <xdh-form-item prop="text2" type="switch" label="外部"></xdh-form-item>
    </xdh-form-group>

  </xdh-form>
</template>

<script>
  import XdhForm from '@/components/xdh-form'
  import XdhFormItem from '@/components/xdh-form-item'
  import XdhFormGroup from '@/components/xdh-form-group'
  import userMixin from '@/base/mixin/user'

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
      XdhFormItem,
      XdhFormGroup
    },
    data() {
      return {
        model: {},
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
        this.fetchUser({page: 1}, {local: true})
      }, 3000)

      this.fetchUser({page: 1}, {local: true})


    }
  }
</script>
