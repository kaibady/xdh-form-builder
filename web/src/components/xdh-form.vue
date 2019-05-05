<template>
  <el-form ref="form" class="xdh-form" :class="formClasses" :model="currentModel" v-bind="$props">
    <slot></slot>

    <el-form-item v-if="footer" class="xdh-form__footer" :class="footerClasses" :label="footerAlignLabel">
      <slot name="footer" v-if="footer">
        <el-button type="primary" @click="submit">{{submitText}}</el-button>
        <el-button @click="reset">{{resetText}}</el-button>
      </slot>
    </el-form-item>

  </el-form>
</template>

<script>
  import ElForm from 'element-ui/lib/form'

  export default {
    name: 'XdhForm',
    provide() {
      return {
        xdhForm: this
      }
    },
    props: {
      ...ElForm.props,
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
        default: 'medium',
        validator() {
          return ['large', 'medium', 'small']
        }
      }
    },
    data() {
      return {
        currentModel: {...this.model}
      }
    },
    watch: {
      currentModel: {
        deep: true,
        handler() {
          this.$emit('change', this.currentModel)
        }
      }
    },
    computed: {
      formClasses() {
        return [this.inline ? `is-inline-size is-inline-${this.inlineSize}` : '']
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

<style scoped>

</style>
