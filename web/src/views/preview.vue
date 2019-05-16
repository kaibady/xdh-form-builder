<template>
  <div class="container">
    <xdh-form v-bind="config" :model="model" :fields="fields"></xdh-form>
  </div>
</template>

<script>
  import XdhForm from '@/components/xdh-form'
  import FormMixin from '@/base/mixin/forms'
  import {LOCAL_STORAGE} from '@/config'
  import {getForms} from '@/helper/storage'

  export default {
    mixins: [FormMixin],
    components: {
      XdhForm
    },
    data() {
      return {
        config: {},
        fields: []
      }
    },
    computed: {
      model() {
        const m = {}
        this.fields.forEach(item => {
          if (!item) return
          // 分隔线组件无值
          if (item.type !== 'divider') {
            m[item.prop] = (item.props || {}).value || item.value
          }
        })
        return m
      }
    },
    created() {
      const id = this.$route.params.id
      if (id) {
        if (LOCAL_STORAGE) {
          const res = getForms(id)
          this.config = res.config || {}
          this.fields = res.fields || []
        } else {
          this.getForms(id).then(res => {
            this.config = res.config || {}
            this.fields = res.fields || []
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 20px;
  }
</style>
