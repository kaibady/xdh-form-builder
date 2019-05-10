<template>
  <div class="container">
    <xdh-form v-bind="formModel">
      <xdh-form-item v-for="item in fields"
                     :key="item.prop"
                     v-bind="item"></xdh-form-item>
    </xdh-form>
  </div>
</template>

<script>
  import XdhForm from '@/components/xdh-form'
  import XdhFormItem from '@/components/xdh-form-item'
  import {mapState} from 'vuex'
  import FormMixin from '@/base/mixin/forms'

  export default {
    mixins: [FormMixin],
    components: {
      XdhForm,
      XdhFormItem
    },
    computed: {
      ...mapState(['fields', 'formModel'])
    },
    created() {
      const id = this.$route.params.id
      if (id) {
        this.getForms(id).then(res => {
          // 表单配置
          this.$store.commit('setFormModel', res.config || {})
          this.$store.commit('setFields', res.fields || [])
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 20px;
  }
</style>
