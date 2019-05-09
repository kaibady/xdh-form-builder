import template from 'lodash/template'

export default template(`
<template>
  <xdh-form :model="model" v-bind="config" >
    <xdh-form-item v-for="item in fields" :key="item.prop" v-bind="item"></xdh-form-item>
  </xdh-form>
</template>

<script>
  import XdhForm from '@/components/xdh-form'
  import XdhFormItem from '@/components/xdh-form-item'
  const config = <%=config%>
  const fields = <%=fields%>
  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    data() {
      return {
        config: config,
        fields: fields,
        model: null
      }
    }
  }
</script>

<style lang="scss" scoped></style>
`)
