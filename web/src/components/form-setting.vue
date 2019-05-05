<template>
  <xdh-form footer-align="right"
            inline inline-size="medium"
            label-width="140px"
            :model="model"
            footer-border
            @submit="handleSubmit">
    <xdh-form-item v-for="item in config"
                   :key="item.prop"
                   :label="item.label"
                   :prop="item.prop"
                   :type="item.type"
                   :options="item.options"
                   :props="item.props||{}"></xdh-form-item>
  </xdh-form>
</template>

<script>
  import XdhForm from './xdh-form'
  import XdhFormItem from './xdh-form-item'
  import config from '../helper/form-setting'
  import bus from '@/utils/bus'

  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    data() {
      return {
        config: config
      }
    },
    computed: {
      model() {
        let m = {}
        this.config.forEach(item => {
          if (typeof item.value !== 'undefined') {
            m[item.prop] = item.value
          }
        })
        return m
      }
    },
    methods: {
      handleSubmit(model) {
        bus.$emit('updateFormConfig', model)
        this.$emit('submit', model)
      }
    }
  }
</script>

<style scoped>

</style>
