<template>
  <component :is="component" v-bind="bindProps" v-model="xdhForm.currentModel[prop]"></component>
</template>

<script>
  export default {
    inject: ['xdhForm'],
    props: {
      prop: {
        type: String,
        required: true
      },
      // 是否picker模式
      picker: Boolean,
      // for time-select
      start: String,
      // for time-select
      end: String,
      // for time-select
      step: String,
      // for time-select
      minTime: String,
      // for time-select
      maxTime: String,
      // for time-picker
      selectableRange: [String, Array]
    },
    computed: {
      component() {
        return this.picker ? 'el-time-picker' : 'el-time-select'
      },
      bindProps() {
        const picker = {
          start: this.start,
          end: this.end,
          step: this.step,
          minTime: this.minTime,
          maxTime: this.maxTime,
          selectableRange: this.selectableRange,
          format: this.$attrs.format
        }
        const pickerOptions = {}
        Object.keys(picker).forEach(n => {
          if (picker[n]) {
            pickerOptions[n] = picker[n]
          }
        })
        return {
          pickerOptions: pickerOptions,
          ...this.$attrs
        }
      }
    },
    created() {
      console.log(this.bindProps)
    }
  }
</script>
