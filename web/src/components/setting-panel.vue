<template>
  <div class="wrapper">
    <xdh-form size="small" :footer="false" label-width="80px">
      <xdh-form-item v-for="(item, index) in config"
                     :key="index"
                     v-bind="item"></xdh-form-item>
    </xdh-form>
  </div>

</template>

<script>
  import XdhForm from './xdh-form'
  import XdhFormItem from './xdh-form-item'

  const commonConfig = [
    {
      label: '名称',
      type: 'text',
      prop: 'prop'
    },
    {
      label: '标签文本',
      type: 'text',
      prop: 'label'
    },
    {
      label: '标签宽度',
      type: 'text',
      prop: 'labelWidth'
    },
    {
      label: '内容宽度',
      type: 'text',
      prop: 'contentWidth',
      props: {
        placeholder: '单位: px'
      }

    }
  ]

  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    data() {
      return {
        config: commonConfig
      }
    }

  }
</script>

<style scoped lang="scss">
  .wrapper {
    padding-right: 10px;
  }
</style>
