<template>
  <div class="wrapper" v-if="commonFields.length">
    <xdh-form size="small" :model="commonModel" :footer="false" label-width="80px" @change="handleChange">
      <xdh-form-item v-for="(item, index) in commonFields"
                     :key="index"
                     v-bind="item"></xdh-form-item>
    </xdh-form>
  </div>
  <div v-else class="wrapper">该组件无通用属性</div>

</template>

<script>
  import XdhForm from '../xdh-form'
  import XdhFormItem from '../xdh-form-item'
  import {mapGetters, mapState} from 'vuex'

  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    computed: {
      ...mapState(['editField']),
      ...mapGetters(['commonFields', 'commonModel'])
    },
    methods: {
      handleChange(model) {
        const newField = JSON.parse(JSON.stringify({
          ...this.editField,
          ...model
        }))
        this.$store.commit('updateField', newField)
      }
    }

  }
</script>
