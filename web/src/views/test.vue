<template>
  <xdh-form style="padding: 20px" size="small" :model="model">
    <!--    <xdh-form-item v-bind="upload">-->
    <!--    </xdh-form-item>-->
    <xdh-form-item v-bind="range">
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
        model: {
          range: []
        },
        range: {
          type: 'range',
          prop: 'range',
          props: {
            dataType: 'date',
            type: 'datetime',
            valueFormat: 'yyyy-MM-dd'
          }

        },
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
