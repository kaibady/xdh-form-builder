<template>
  <div class="xdh-form xdh-form-group" :class="classes" v-if="isShow" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  /**
   * 表单组
   * @module widgets/xdh-form-group
   *
   */
  export default {
    name: 'XdhFormGroup',
    inject: ['xdhForm'],
    // 由于el-form-item组件会调用父组件，这个是为了冒充el-form组件，让el-form-item能正确渲染
    componentName: 'ElForm',
    provide() {
      return {
        xdhFormGroup: this
      }
    },
    /**
     *  属性参数
     *  @member props
     *  @property {boolean} [block=true] 是否独占行显示，如需要按列显示，需要设置为false，并且设置宽度width
     *  @property {string} [width] 显示宽度，支持百分比，像素需要带单位
     *  @property {string} [height] 显示高度
     *  @property {boolean} [inline] 内部表单项显示方式
     *  @property {String} [inlineSize]  inline模式的字段域宽度尺寸，可选值 'large', 'medium', 'small'
     *  @property {string} [size] 内部表单项尺寸，可选值 medium / small / mini
     *  @property {string} [labelPosition] 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
     *  @property {string} [labelWidth] 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。
     *  @property {string} [labelSuffix]  表单域标签的后缀
     *  @property {String} [depend] 依赖字段名称
     *  @property {*} [dependValue] 依赖字段的值，依赖字段的值如果与设置的一致即显示
     */
    props: {
      block: {
        type: Boolean,
        default: true
      },
      width: String,
      height: String,
      inline: Boolean,
      inlineSize: String,
      size: String,
      labelPosition: String,
      labelWidth: String,
      labelSuffix: {
        type: String,
        default: ''
      },
      // 依赖字段
      depend: {
        type: String
      },
      // 依赖字段值
      dependValue: {
        type: [String, Number, Boolean, Array]
      }
    },
    computed: {
      classes() {
        return {
          'el-form--inline': this.inline,
          'is-inline-size': !!this.inlineSize,
          [`is-inline-${this.inlineSize}`]: !!this.inlineSize,
          [`el-form--label-${this.labelPosition}`]: !!this.labelPosition
        }
      },
      model() {
        return (this.xdhForm || {}).model
      },
      isShow() {
        // 排除无依赖或设计模式时的设置
        if (!this.depend || this.xdhForm.designMode) return true
        const dependValue = this.xdhForm.currentModel[this.depend]
        return dependValue === this.dependValue
      },
      styles() {
        return {
          width: this.width,
          height: this.height,
          'vertical-align': this.block ? null : 'top',
          display: this.block ? 'block' : 'inline-block'
        }
      }
    }
  }
</script>
