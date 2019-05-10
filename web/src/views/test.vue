
<template>
  <xdh-form :model="model" v-bind="config" >
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
    'footerAlign': 'label',
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
      'prop': 'text_1557476926179'
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
      'prop': 'radio_1557476927617'
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
      'prop': 'checkbox_1557476928854'
    },
    {
      'type': 'switch',
      'title': '开关',
      'props': {},
      'label': '开关',
      'prop': 'switch_1557476929844'
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
      'prop': 'select_1557476930934'
    },
    {
      'type': 'date',
      'title': '日期',
      'props': {},
      'label': '日期',
      'prop': 'date_1557476932479'
    },
    {
      'type': 'cascader',
      'title': '级联',
      'props': {},
      'options': [
        {
          'id': 1,
          'label': '选项1',
          'value': '1',
          'parentId': null
        },
        {
          'id': 2,
          'label': '选项2',
          'value': '2',
          'parentId': null
        },
        {
          'id': 3,
          'label': '选项1-1',
          'value': '1-1',
          'parentId': 1
        },
        {
          'id': 4,
          'label': '选项1-2',
          'value': '1-2',
          'parentId': 1
        },
        {
          'id': 5,
          'label': '选项2-1',
          'value': '2-1',
          'parentId': 2
        }
      ],
      'value': [],
      'label': '级联',
      'prop': 'cascader_1557476933479'
    },
    {
      'type': 'number',
      'title': '数字',
      'props': {},
      'label': '数字',
      'prop': 'number_1557476935070'
    },
    {
      'type': 'slider',
      'title': '滑块',
      'props': {},
      'value': 1,
      'label': '滑块',
      'prop': 'slider_1557476936578'
    },
    {
      'type': 'rate',
      'title': '评分',
      'props': {},
      'value': 3,
      'label': '评分',
      'prop': 'rate_1557476937659'
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


