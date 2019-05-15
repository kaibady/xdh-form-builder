<template>
  <xdh-form>
    <xdh-form-item v-bind="upload">
    </xdh-form-item>
    <!--    <xdh-form-item type="text" prop="text" @change="handleChange"></xdh-form-item>-->
  </xdh-form>
</template>

<script>
  import XdhForm from '@/components/xdh-form'
  import XdhFormItem from '@/components/xdh-form-item'

  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    data() {
      return {
        upload: {
          prop: 'file',
          type: 'upload',
          props: {
            action: 'https://jsonplaceholder.typicode.com/posts/',
            autoUpload: false,
            multiple: true,
            onChange(res, file, list) {
              console.log(file)
            }
          }


        }
      }
    },
    methods: {
      handleChange(val) {
        console.log(val)
      }
    }
  }
</script>
