import defaultOptions from './defaultOptions'

export default [
  {
    type: 'text',
    title: '文本框',
    props: {}
  },
  {
    type: 'radio',
    title: '单选框',
    props: {},
    options: defaultOptions
  },
  {
    type: 'checkbox',
    title: '多选框',
    props: {},
    options: defaultOptions
  },
  {
    type: 'switch',
    title: '开关',
    props: {}
  },
  {
    type: 'select',
    title: '下拉框',
    props: {},
    options: defaultOptions
  },
  {
    type: 'date',
    title: '日期',
    props: {}
  },
  {
    type: 'cascader',
    title: '级联',
    props: {},
    options: defaultOptions,
    value: []
  },
  {
    type: 'inputNumber',
    title: '计数器',
    props: {}
  },
  {
    type: 'rate',
    title: '评分',
    props: {},
    value: 3
  },
  {
    type: 'slider',
    title: '滑块',
    props: {},
    value: 1
  },
  {
    type: 'divider',
    title: '分隔线',
    props: {
      content: '分割线'
    }
  }
]

