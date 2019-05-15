<template>
  <div class="xdh-form-range">
    <component :is="component" v-bind="$attrs" class="xdh-form-range__min" :style="inputStyle" v-model="fieldValue[0]"
               :placeholder="minPlaceholder" :pickerOptions="minPickerOptions"></component>
    <span class="xdh-form-range__separator" :style="separatorStyle">{{separator}}</span>
    <component :is="component" v-bind="$attrs" class="xdh-form-range__max" :style="inputStyle" v-model="fieldValue[1]"
               :placeholder="maxPlaceholder" :pickerOptions="maxPickerOptions"></component>
  </div>
</template>

<script>
  const components = {
    number: 'el-input-number',
    text: 'el-input',
    date: 'el-date-picker',
    time: 'el-time-select',
    timePicker: 'el-time-picker'
  }
  export default {
    inject: ['xdhForm'],
    props: {
      prop: {
        type: String,
        required: true
      },
      dataType: {
        type: String,
        default: 'text',
        validator(val) {
          return ['number', 'date', 'time', 'text', 'timePicker'].includes(val)
        }
      },
      minPlaceholder: {
        type: String,
        default: '最小值'
      },
      maxPlaceholder: {
        type: String,
        default: '最大值'
      },
      separator: {
        type: String,
        default: '-'
      },
      separatorWidth: {
        type: [Number, String],
        default: 12
      },
      value: {
        type: Array
      }
    },
    data() {
      return {
        fieldValue: []
      }
    },
    watch: {
      fieldValue(val) {
        this.$emit('input', val)
      },
      value(val) {
        this.fieldValue = val
      }

    },
    computed: {
      component() {
        return components[this.dataType]
      },
      separatorStyle() {
        return {
          width: `${parseInt(this.separatorWidth)}px`
        }
      },
      inputStyle() {
        return {
          width: `calc(50% - ${parseInt(this.separatorWidth) / 2}px)`
        }
      },
      minPickerOptions() {
        // 如何有定义，按定义有限
        if (this.$attrs.pickerOptions && this.$attrs.pickerOptions.disabledDate) {
          return this.$attrs.pickerOptions
        }
        return {
          ...this.$attrs.pickerOptions,
          disabledDate: date => {
            if (!this.fieldValue[1]) return false
            return Date.parse(this.fieldValue[1]) < date.getTime()
          }
        }
      },
      maxPickerOptions() {
        // 如何有定义，按定义有限
        if (this.$attrs.pickerOptions && this.$attrs.pickerOptions.disabledDate) {
          return this.$attrs.pickerOptions
        }
        return {
          ...this.$attrs.pickerOptions,
          disabledDate: date => {
            if (!this.fieldValue[0]) return false
            return Date.parse(this.fieldValue[0]) > date.getTime()
          }
        }
      }
    },
    created() {
      this.fieldValue = this.value || this.xdhForm.currentModel[this.prop] || []
    }
  }
</script>
