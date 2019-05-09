export default [
  {
    label: '字段名',
    type: 'text',
    prop: 'prop',
    rules: [
      {required: true}
    ]
  },
  {
    label: '标签文本',
    type: 'text',
    prop: 'label'
  },
  {
    label: '标签宽度',
    type: 'text',
    prop: 'labelWidth',
    props: {
      placeholder: '单位: px'
    }
  },
  {
    label: '内容宽度',
    type: 'text',
    prop: 'contentWidth',
    props: {
      placeholder: '只对内行模式生效，单位: px'
    }
  },
  {
    label: '字典编码',
    type: 'text',
    prop: 'dict'
  }
]
