<template>
  <div class="container">
    <xdh-form v-bind="config">
      <xdh-form-item v-for="item in fields"
                     :key="item.prop"
                     v-bind="item"></xdh-form-item>
    </xdh-form>
  </div>
</template>

<script>
  import XdhForm from '@/components/xdh-form'
  import XdhFormItem from '@/components/xdh-form-item'
  import FormMixin from '@/base/mixin/forms'
  import {LOCAL_STORAGE} from '@/config'
  import {getForms} from '@/helper/storage'

  export default {
    mixins: [FormMixin],
    components: {
      XdhForm,
      XdhFormItem
    },
    data() {
      return {
        config: {},
        fields: []
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
