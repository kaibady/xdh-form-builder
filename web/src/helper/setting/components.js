import {options, tree} from './defaultOptions'

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
    options: options
  },
  {
    type: 'checkbox',
    title: '多选框',
    props: {},
    options: options
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
    options: options
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
    options: tree,
    value: []
  },
  {
    type: 'number',
    title: '数字',
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
    helper: true,
    props: {
      content: '分割线'
    }
  }
]

