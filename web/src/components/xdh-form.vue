<template>
  <el-form ref="form" v-bind="$attrs" class="xdh-form" :class="formClasses" :model="currentModel">
    <div class="xdh-form__body" ref="body">
      <slot></slot>
    </div>
    <el-form-item v-if="footer" class="xdh-form__footer" :class="footerClasses" :label="footerAlignLabel">
      <slot name="footer" v-if="footer">
        <el-button v-if="submitText" type="primary" @click="submit" :size="footerSize">{{submitText}}</el-button>
        <el-button v-if="resetText" @click="reset" :size="footerSize">{{resetText}}</el-button>
      </slot>
    </el-form-item>

  </el-form>
</template>

<script>

  export default {
    name: 'XdhForm',
    provide() {
      return {
        xdhForm: this
      }
    },
    props: {
      // 表单实体默认值
      model: {
        type: Object,
        default() {
          return {}
        }
      },
      // 字典数据构造方法，必须返回Promise
      load: {
        type: Function
      },
      // 静态字典数据配置对象
      dictMap: {
        type: Object,
        default() {
          return {}
        }
      },
      // 验证信息显示方式
      validateMsg: {
        type: String,
        default: '',
        validator(val) {
          return ['top', 'right', 'bottom', ''].includes(val)
        }
      },
      // 是否显示footer
      footer: {
        type: Boolean,
        default: true
      },
      // 底部对齐方式
      footerAlign: {
        type: String,
        default: 'label',
        validator(val) {
          return ['label', 'left', 'right', 'center', ''].includes(val)
        }
      },
      // 底部是否加边框, 设置了footerAlign才有效
      footerBorder: {
        type: Boolean,
        default: true
      },
      // 提交按钮文本
      submitText: {
        type: String,
        default: '提交'
      },
      // 重置按钮文本
      resetText: {
        type: String,
        default: '重置'
      },
      // inline模式的字段域尺寸
      inlineSize: {
        type: String,
        default: '',
        validator(val) {
          return ['large', 'medium', 'small', ''].includes(val)
        }
      },
      // 底部按钮尺寸
      footerSize: {
        type: String,
        validator(val) {
          return ['large', 'medium', 'small', 'mini', ''].includes(val)
        }
      },
      // 设计模式，仅在可视化制作工具中实用
      designMode: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        currentModel: {...this.model}
      }
    },
    watch: {
      model: {
        deep: false,
        handler(val) {
          if (JSON.stringify(val) !== JSON.stringify(this.currentModel)) {
            this.currentModel = {...val}
          }
        }
      },
      currentModel: {
        deep: true,
        handler(val, old) {
          this.$emit('change', val, old)
        }
      }
    },
    computed: {
      formClasses() {
        return [this.$attrs.inline ? `is-inline-size is-inline-${this.inlineSize}` : '']
      },
      footerClasses() {
        return [
          `is-${this.footerAlign}`,
          {
            'is-border': (this.footerBorder && this.footerAlign && this.footerAlign !== 'label')
          }
        ]
      },
      footerAlignLabel() {
        return this.footerAlign === 'label' ? ' ' : null
      }
    },
    methods: {
      submit() {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$emit('submit', this.currentModel)
          }
        })
      },
      reset() {
        this.$refs.form.resetFields()
        this.currentModel = {...this.model}
        this.$emit('reset', this.currentModel)
      }
    }
  }
</script>
