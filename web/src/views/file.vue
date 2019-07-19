<template>
  <div class="container">
    <div class="header"> 开启生成JSON配置模式
      <el-switch v-model="json"></el-switch>
    </div>
    <pre v-if="reRender"><code class="html" ref="code">{{code}}</code>
   </pre>
  </div>
</template>

<script>
  import hljs from 'highlight.js'
  import 'highlight.js/styles/darcula.css'
  import renderJSON from '@/helper/setting/template'
  import renderTemplate from '@/helper/setting/vue-template'
  import {mapState, mapGetters} from 'vuex'
  import FormMixin from '@/base/mixin/forms'
  import {LOCAL_STORAGE} from '@/config'
  import {getForms} from '@/helper/storage'

  function stringify(json) {
    let str = JSON.stringify(json, null, 2)
    return str ? str.replace(/'/g, '\\\'').replace(/"/g, '\'') : ''
  }

  function bindProps(props) {
    let attrs = []
    Object.keys(props).forEach(key => {
        const value = props[key]
        if (typeof value === 'string') {
          attrs.push(`${key}="${value}"`)
        } else if (typeof value === 'object') {
          attrs.push(`:${key}="${stringify(value)}"`)
        } else {
          attrs.push(`:${key}="${value}"`)
        }
      }
    )
    return attrs.join(' ')
  }

  export default {
    mixins: [FormMixin],
    data() {
      return {
        code: null,
        json: false,
        reRender: true
      }
    },
    computed: {
      ...mapState(['fields', 'formModel']),
      ...mapGetters(['model'])
    },
    watch: {
      json() {
        this.reRender = false
        setTimeout(() => {
          this.renderCode()
        }, 10)

      },
      code(val) {
        this.reRender = true;
        this.$nextTick(() => {
          hljs.highlightBlock(this.$refs.code)
        })
      }
    },
    methods: {
      clean(data) {
        if (Array.isArray(data)) {
          return data.map(item => this.clean(item))
        }
        const obj = {}
        Object.keys(data).forEach(key => {
          if (data[key] !== '') {
            obj[key] = data[key]
          }
        })
        return obj
      },
      renderCode() {
        const render = this.json ? renderJSON : renderTemplate;
        this.code = render({
          config: stringify(this.clean(this.formModel) || {}),
          formModel: this.clean(this.formModel) || {},
          fields: stringify(this.clean(this.fields) || []),
          fieldsArray: this.clean(this.fields) || [],
          model: stringify(this.model || []),
          bindProps: bindProps
        })
        this.$nextTick(() => {
          hljs.highlightBlock(this.$refs.code)
        })
      }
    },
    created() {
      const id = this.$route.params.id
      if (id) {
        if (LOCAL_STORAGE) {
          const res = getForms(id)
          this.$store.commit('setFormModel', res.config || {})
          this.$store.commit('setFields', res.fields || [])
          this.renderCode()
        } else {
          this.getForms(id).then(res => {
            // 表单配置
            this.$store.commit('setFormModel', res.config || {})
            this.$store.commit('setFields', res.fields || [])
            this.renderCode()
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 0 20px;
  }

  .header {
    height: 40px;
    background: #efefef;
    line-height: 40px;
    padding-left: 20px;
  }

</style>
