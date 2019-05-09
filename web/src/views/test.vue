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
      'type': 'text',
      'title': '文本框',
      'props': {},
      'label': '文本框',
      'prop': 'text_1557386780824'
    },
    {
      'type': 'radio',
      'title': '单选框',
      'props': {},
      'options': [
        {
          'label': '选项一',
          'value': '1'
        },
        {
          'label': '选项二',
          'value': '2'
        }
      ],
      'label': '单选框',
      'prop': 'radio_1557386782217'
    },
    {
      'type': 'checkbox',
      'title': '多选框',
      'props': {},
      'options': [
        {
          'label': '选项一',
          'value': '1'
        },
        {
          'label': '选项二',
          'value': '2'
        }
      ],
      'label': '多选框',
      'prop': 'checkbox_1557386783642'
    },
    {
      'type': 'switch',
      'title': '开关',
      'props': {},
      'label': '开关',
      'prop': 'switch_1557386784935'
    },
    {
      'type': 'divider',
      'title': '分隔线',
      'props': {
        'content': '分割线'
      },
      'label': '分隔线',
      'prop': 'divider_1557386795203'
    },
    {
      'type': 'select',
      'title': '下拉框',
      'props': {},
      'options': [
        {
          'label': '选项一',
          'value': '1'
        },
        {
          'label': '选项二',
          'value': '2'
        }
      ],
      'label': '下拉框',
      'prop': 'select_1557386786303'
    },
    {
      'type': 'date',
      'title': '日期',
      'props': {},
      'label': '日期',
      'prop': 'date_1557386788032'
    },
    {
      'type': 'cascader',
      'title': '级联',
      'props': {},
      'options': [
        {
          'label': '选项一',
          'value': '1'
        },
        {
          'label': '选项二',
          'value': '2'
        }
      ],
      'value': [],
      'label': '级联',
      'prop': 'cascader_1557386789699'
    },
    {
      'type': 'inputNumber',
      'title': '计数器',
      'props': {},
      'label': '计数器',
      'prop': 'inputNumber_1557386791414'
    },
    {
      'type': 'rate',
      'title': '评分',
      'props': {},
      'value': 3,
      'label': '评分',
      'prop': 'rate_1557386792729'
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


