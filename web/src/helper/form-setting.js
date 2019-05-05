export default [
  {
    label: '行内模式',
    prop: 'inline',
    type: 'switch',
    value: false
  },
  {
    label: '显示必填标识',
    prop: 'hideRequiredAsterisk',
    type: 'switch',
    value: true
  },
  {
    label: '显示底部边框',
    prop: 'footerBorder',
    type: 'switch',
    value: true
  },
  {
    label: '显示底部',
    prop: 'footer',
    type: 'switch',
    value: true
  },
  {
    label: '标签位置',
    prop: 'labelPosition',
    type: 'radio',
    value: 'right',
    props: {
      button: true
    },
    options: [
      {
        label: 'left',
        value: 'left'
      },
      {
        label: 'right',
        value: 'right'
      },
      {
        label: 'top',
        value: 'top'
      }
    ]
  },
  {
    label: '组件尺寸',
    prop: 'size',
    type: 'radio',
    value: '',
    props: {
      button: true
    },
    options: [
      {
        label: '大',
        value: ''
      },
      {
        label: '中',
        value: 'medium'
      },
      {
        label: '小',
        value: 'small'
      },
      {
        label: 'mini',
        value: 'mini'
      }
    ]
  },
  {
    label: '底部对齐',
    prop: 'footerAlign',
    type: 'radio',
    value: 'right',
    props: {
      button: true
    },
    options: [
      {
        label: 'left',
        value: 'left'
      },
      {
        label: 'center',
        value: 'center'
      },
      {
        label: 'right',
        value: 'right'
      }
    ]
  },
  {
    label: '内行模式尺寸',
    prop: 'inlineSize',
    type: 'radio',
    value: 'medium',
    props: {
      button: true
    },
    options: [
      {
        label: '大',
        value: 'large'
      },
      {
        label: '中',
        value: 'medium'
      },
      {
        label: '小',
        value: 'small'
      }
    ]
  },
  {
    label: '验证信息显示',
    prop: 'validateMsg',
    type: 'radio',
    value: 'right',
    props: {
      button: true
    },
    options: [
      {
        label: 'top',
        value: 'top'
      },
      {
        label: 'right',
        value: 'right'
      },
      {
        label: 'bottom',
        value: 'bottom'
      }
    ]
  },
  {
    label: '标签宽度',
    prop: 'labelWidth',
    type: 'text'
  },
  {
    label: '标签后缀',
    prop: 'labelSuffix',
    type: 'text'
  },
  {
    label: '提交按钮文本',
    prop: 'submitText',
    type: 'text',
    value: '提交'
  },
  {
    label: '重置按钮文本',
    prop: 'resetText',
    type: 'text',
    value: '重置'
  }
]
