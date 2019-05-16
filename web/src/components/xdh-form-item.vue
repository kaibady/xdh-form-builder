<template>
  <component v-if="isDivider" :is="components[type]" v-bind="props">
    <div slot="body" ref="body" class="xdh-form-item__body" v-if="$slots.body">
      <slot name="body"></slot>
    </div>
  </component>
  <el-form-item v-else-if="isShowField"
                class="xdh-form-item"
                :class="itemClasses"
                v-bind="$attrs"
                :rules="checkRules">
    <component :is="components[type]"
               :options="optionsList"
               :prop="$attrs.prop"
               v-bind="props"
               v-on="$listeners"
               :value="xdhForm.currentModel[$attrs.prop]">
      <slot name="inner"></slot>
    </component>
    <slot></slot>

    <div ref="body" class="xdh-form-item__body" v-if="$slots.body">
      <slot name="body"></slot>
    </div>

  </el-form-item>
</template>

<script>
  /**
   * 表单项组件
   * @module widgets/xdh-form-item
   *
   */
  import divider from './items/divider'
  import text from './items/text'
  import select from './items/select'
  import radio from './items/radio'
  import checkbox from './items/checkbox'
  import cascader from './items/cascader'
  import date from './items/date'
  import Switch from './items/switch'
  import number from './items/number'
  import rate from './items/rate'
  import slider from './items/slider'
  import time from './items/time'
  import upload from './items/upload'
  import range from './items/range'

  function normalOptions(options = []) {
    return options.map(o => {
      return typeof o === 'object' ? o : {
        label: o,
        value: o
      }
    })
  }

  const components = {
    switch: Switch,
    text,
    select,
    radio,
    checkbox,
    cascader,
    date,
    time,
    divider,
    number,
    rate,
    slider,
    upload,
    range
  }
  /**
   * 插槽
   * @member slots
   * @property {string} - 定义组件附加内容，内容在输入框的下方
   * @property {string} inner 定义输入框内部内容
   */

  export default {
    name: 'XdhFormItem',
    inject: ['xdhForm'],
    /**
     * 属性参数
     * @member props
     * @property {String} [type=text] 输入类型，可选 text / radio / checkbox / select / cascader / switch / date / range / color / divider
     * @property {String} [dict] 字典值编码，xdh-form需要设置 load 或 dictMap 才有效
     * @property {Array} [options] 选项数组，项目对象 {id, parentId, label, value}, 树结构必须要与id和parentId
     * @property {Object} [props] 输入框组件实例化参数对象，详细要看对应type的组件
     * @property {Number|String} [contentWidth] 内容区宽度，不指定即自适应
     * @property {String} [depend] 依赖字段名称
     * @property {*} [dependValue] 依赖字段的值，依赖字段的值如果与设置的一致即显示
     * @property {Boolean} [block=false] 是否独占行显示
     */
    props: {
      // ...ElFromItem.props,
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
      // divider 分隔线
      type: {
        type: String,
        default: 'text',
        validator(val) {
          return !!components[val]
        }
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
      },
      // 依赖字段
      depend: {
        type: String
      },
      // 依赖字段值
      dependValue: {
        type: [String, Number, Boolean, Array]
      },
      // 是否换行block的方式展现
      block: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        optionsList: normalOptions(this.options)
      }
    },
    computed: {
      itemClasses() {
        return [
          this.xdhForm.validateMsg ? `xdh-validate--${this.xdhForm.validateMsg}` : '',
          {
            'is-custom-width': !!this.contentWidth,
            'is-depend': !!this.depend,
            'is-block': this.block
          }
        ]
      },
      isDivider() {
        return this.type === 'divider'
      },
      isShowField() {
        // 排除无依赖、依赖是自身或设计模式时的设置
        if (!this.depend || this.depend === this.prop || this.xdhForm.designMode) return true
        const dependValue = this.xdhForm.currentModel[this.depend]
        return dependValue === this.dependValue
      },
      checkRules() {
        if (!this.$attrs.rules) return null
        const rules = Array.isArray(this.$attrs.rules) ? this.$attrs.rules : [].concat(this.$attrs.rules)
        return rules.map(r => {
          if (r.pattern && typeof r.pattern === 'string') {
            r.pattern = new RegExp(r.pattern)
          }
          return r
        })
      }
    },
    watch: {
      'xdhForm.$attrs.inline'() {
        this.setContentWidth(this.contentEl)
      },
      'xdhForm.inlineSize'() {
        this.setContentWidth(this.contentEl)
      },
      'xdhForm.$attrs.labelWidth'() {
        this.setContentWidth(this.contentEl)
      },
      '$attrs.labelWidth'() {
        this.setContentWidth(this.contentEl)
      },
      contentWidth() {
        this.setContentWidth(this.contentEl)
      },
      block() {
        this.setContentWidth(this.contentEl)
      },
      labelWidth() {
        this.setContentWidth(this.contentEl)
      },
      options(val) {
        // 字典优先
        if (this.dict) return
        this.optionsList = normalOptions(val)
      },
      dict() {
        this.loadOptions()
      },
      isShowField(val) {
        this.$nextTick(() => {
          val && this.init()
        })
      }
    },
    methods: {
      init() {
        if (!this.isDivider && this.$el && this.$el.querySelector) {
          this.contentEl = this.$el.querySelector('.el-form-item__content')
          this.setContentWidth(this.contentEl)
        }
      },
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
      getLabelWidth() {
        return Math.max(
          Number.parseInt(this.$attrs.labelWidth || 0),
          Number.parseInt(this.xdhForm.$attrs.labelWidth || 0),
          0
        )
      },
      setContentWidth(el) {
        if (!el) return

        // 换行模式
        if (this.block) {
          const labelWidth = this.getLabelWidth()
          el.style.width = `calc(100% - ${labelWidth}px)`
          return;
        }
        // 只对inline模式有效
        if (!this.xdhForm.$attrs.inline) return

        // 默认inlineSize
        if (!this.xdhForm.inlineSize) {
          el.style.width = `auto`
          return
        }
        // 有设置 inlineSize
        const map = {
          large: 600,
          medium: 500,
          small: 300
        }
        const labelWidth = this.getLabelWidth()
        const width = Number.parseInt(this.contentWidth) || (map[this.xdhForm.inlineSize] - labelWidth)
        el.style.width = `${width}px`
      }
    },
    mounted() {
      this.init()
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
