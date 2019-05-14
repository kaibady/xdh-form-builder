<template>
  <div class="container">
   <pre><code class="html" ref="code">{{code}}</code>
   </pre>
  </div>
</template>

<script>
  import hljs from 'highlight.js'
  import 'highlight.js/styles/darcula.css'
  import render from '@/helper/setting/template'
  import {mapState, mapGetters} from 'vuex'
  import FormMixin from '@/base/mixin/forms'
  import {LOCAL_STORAGE} from '@/config'
  import {getForms} from '@/helper/storage'

  function stringify(json) {
    let str = JSON.stringify(json, null, 2)
    return str ? str.replace(/'/g, '\\\'').replace(/"/g, '\'') : ''
  }

  export default {
    mixins: [FormMixin],
    data() {
      return {
        code: null
      }
    },
    computed: {
      ...mapState(['fields', 'formModel']),
      ...mapGetters(['model'])
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
        this.code = render({
          config: stringify(this.clean(this.formModel) || {}),
          fields: stringify(this.clean(this.fields) || []),
          model: stringify(this.model || [])
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
</style>
