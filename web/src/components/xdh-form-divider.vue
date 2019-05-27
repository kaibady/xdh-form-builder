<template>
  <divider v-bind="$props">
    <slot v-if="$slots.default"></slot>
  </divider>
</template>

<script>
  import Divider from './items/divider'

  export default {
    name: 'XdhFormDivider',
    components: {
      Divider
    },
    props: {
      ...Divider.props
    }
  }
</script>

