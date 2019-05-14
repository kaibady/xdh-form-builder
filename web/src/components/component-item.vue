<template>
  <div class="box">
    {{data.title}}
  </div>
</template>

<script>
  export default {
    props: {
      data: [Object, Number],
      index: Number
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/vars";

  .box {
    background: $--color-primary-light-7;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    cursor: move;
  }
</style>
