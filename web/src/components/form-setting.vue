<template>
  <xdh-form footer-align="right"
            :inline="true"
            inline-size="medium"
            :label-width="`140px`"
            footer-size="large"
            size="small"
            :model="model"
            footer-border
            @submit="handleSubmit">
    <xdh-form-item v-for="item in config"
                   :key="item.prop"
                   :label="item.label"
                   :prop="item.prop"
                   :type="item.type"
                   :options="item.options"
                   contentWidth="320px"
                   :props="item.props||{}"></xdh-form-item>
  </xdh-form>
</template>

<script>
  import XdhForm from '@/widgets/xdh-form'
  import XdhFormItem from '@/widgets/xdh-form/xdh-form-item'
  import formSetting from '@/helper/setting/form'
  import {mapState} from 'vuex'

  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    computed: {
      ...mapState({
        model: state => state.formModel
      })
    },
    data() {
      return {
        config: formSetting.fields
      }
    },

    methods: {
      handleSubmit(model) {
        this.$store.commit('setFormModel', {...model})
        this.$emit('submit', model)
      }
    }
  }
</script>

<style scoped>

</style>
