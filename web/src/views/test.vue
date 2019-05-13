<template>
  <xdh-form :model="model" v-bind="config">
    <xdh-form-item v-for="item in fields" :key="item.prop" v-bind="item"></xdh-form-item>

  </xdh-form>
</template>

<script>
  import XdhForm from '@/components/xdh-form'
  import XdhFormItem from '@/components/xdh-form-item'

  const config = {
    'inline': false,
    'hideRequiredAsterisk': true,
    'footerBorder': true,
    'footer': true,
    'labelPosition': 'right',
    'size': '',
    'footerAlign': 'right',
    'footerSize': '',
    'inlineSize': '',
    'validateMsg': '',
    'submitText': '提交',
    'resetText': '重置'
  }
  const fields = [
    {
      'type': 'time',
      'props': {
        picker: true,
        'disabled': false,
        'clearable': false,
        'editable': false,
        selectableRange: '09:30:00 - 12:00:00'
      },
      'label': '时间',
      'prop': 'time_1557712099007',
      'labelWidth': '',
      'contentWidth': ''
    }
  ]
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


