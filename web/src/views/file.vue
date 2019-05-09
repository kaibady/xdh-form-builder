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

  const beautify = require('js-beautify').js_beautify
  import {mapState} from 'vuex'

  function stringify(json) {
    let str = JSON.stringify(json, null, 2)
    return str ? str.replace(/'/g, '\\\'').replace(/"/g, '\'') : ''
  }

  export default {
    data() {
      return {
        code: null
      }
    },
    computed: {
      ...mapState(['fields', 'formModel'])
    },
    mounted() {
      this.code = render({
        config: stringify(this.formModel || {}),
        fields: stringify(this.fields || [])
      })
      this.$nextTick(() => {
        hljs.highlightBlock(this.$refs.code)
      })

    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 0 20px;
  }
</style>
