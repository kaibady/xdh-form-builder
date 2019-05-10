<template>
  <div class="xdh-form-group">
    我是分组
    <slot></slot>
    <div ref="body" class="xdh-form-item__body" v-if="$slots.body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'XdhFormGroup',
    inject: ['xdhForm'],
    provide() {
      return {
        xdhFormGroup: this
      }
    },
    data() {
      return {
        fields: []
      }
    }
  }
</script>

