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

  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    computed: {
      ...mapState(['fields', 'formModel'])
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 20px;
  }
</style>
