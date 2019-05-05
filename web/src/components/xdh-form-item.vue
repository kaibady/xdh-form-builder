<template>
  <el-form-item class="xdh-form-item"
                :class="itemClasses"
                v-bind="$props"
                v-on="$listeners">
    <component :is="components[type]"
               :options="optionsList"
               :prop="prop"
               v-bind="props"
               v-model="xdhForm.currentModel[prop]"></component>
    <slot></slot>

    <div ref="body" class="xdh-form-item__body" v-if="$slots.body">
      <slot name="body"></slot>
    </div>

  </el-form-item>
</template>

<script>
  import ElFromItem from 'element-ui/lib/form-item'
  import Text from './items/text'
  import Select from './items/select'
  import Radio from './items/radio'
  import Checkbox from './items/checkbox'
  import Cascader from './items/cascader'
  import Date from './items/date'
  import Switch from './items/switch'

  const components = {
    text: Text,
    select: Select,
    radio: Radio,
    checkbox: Checkbox,
    cascader: Cascader,
    date: Date,
    switch: Switch
  }

  export default {
    name: 'XdhFormItem',
    inject: ['xdhForm'],
    props: {
      ...ElFromItem.props,
      // 输入框类型：
      // text 文本框，
      // radio 单选框，
      // checkbox 多选框，
      // select 下拉框，
      // cascader 级联选择器，
      // switch 开关
      // date 日期选择器
      // range 范围选择器
      // rate 评分
      // color 颜色选择器
      type: {
        type: String,
        default: 'text'
      },
      // 字典值编码
      dict: String,

      // 选项数组
      options: {
        type: Array,
        default() {
          return []
        }
      },
      // 输入框组件实例化参数
      props: {
        type: Object,
        default() {
          return {}
        }
      },
      // 内容区宽度，不指定即自适应
      contentWidth: {
        type: [Number, String]
      }
    },
    data() {
      return {
        optionsList: this.options
      }
    },
    computed: {
      itemClasses() {
        return [
          this.xdhForm.validateMsg ? `xdh-validate--${this.xdhForm.validateMsg}` : '',
          {
            'is-custom-width': !!this.contentWidth
          }
        ]
      }
    },
    watch: {
      'xdhForm.inlineSize'() {
        this.setContentWidth(this.contentEl)
      },
      'xdhForm.props.labelWidth'() {
        this.setContentWidth(this.contentEl)
      }
    },
    methods: {
      loadOptions() {
        // 未设置字典编码，不做任何处理
        if (!this.dict) return

        // 先检测是否有字典减值对配置，如有，优先取配置的数据
        let list = this.xdhForm.dictMap[this.dict]
        if (list) {
          this.optionsList = list
          return
        }

        // 是否有配置获取字典值方法，如有，执行方法获取数据
        if (this.xdhForm.load) {
          this.xdhForm.load(this).then(list => {
            this.optionsList = list
          })
        }
      },
      setContentWidth(el) {
        // 只对inline模式有效
        if (!el || !this.xdhForm.inline) return
        const map = {
          large: 600,
          medium: 500,
          small: 300
        }
        const labelWidth = Number.parseInt(this.xdhForm.labelWidth)
        const width = Number.parseInt(this.contentWidth) || (map[this.xdhForm.inlineSize] - labelWidth)
        el.style.width = `${width}px`
      }
    },
    mounted() {
      this.contentEl = this.$el.querySelector('.el-form-item__content')
      this.setContentWidth(this.contentEl)

      if (this.$refs.body) {
        this.$el.appendChild(this.$refs.body)
      }

    },
    created() {
      this.components = components
      this.loadOptions()
    },
    beforeDestroy() {
      this.contentEl = null
      if (this.$refs.body) {
        this.$refs.body.parentNode.removeChild(this.$refs.body)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
