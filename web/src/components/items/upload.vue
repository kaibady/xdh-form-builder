<template>
  <el-upload ref="upload" class="xdh-form-upload" v-bind="$attrs" v-on="$listeners" :on-change="handleChange">
    <slot>
      <template v-if="$attrs.drag">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </template>
      <template v-else>
        <el-button v-if="$attrs.autoUpload" size="small" type="primary">{{uploadText}}</el-button>
        <slot name="trigger">
          <el-button v-if="!$attrs.autoUpload" slot="trigger" size="small" type="primary">{{selectText}}</el-button>
        </slot>
        <el-button v-if="!$attrs.autoUpload" size="small" type="success" @click="submitUpload">{{submitText}}
        </el-button>
      </template>
    </slot>
    <div slot="tip" class="xdh-form-upload__tip">{{tipText}}</div>
  </el-upload>
</template>

<script>
  export default {
    inject: ['xdhForm'],
    props: {
      prop: {
        type: String,
        required: true
      },
      uploadText: {
        type: String,
        default: '点击上传'
      },
      selectText: {
        type: String,
        default: '选取文件'
      },
      submitText: {
        type: String,
        default: '上传到服务器'
      },
      tipText: {
        type: String,
        default: '只能上传jpg/png文件，且不超过500kb'
      }
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleChange(file, list) {
        this.xdhForm.currentModel[this.prop] = list
        if (this.$attrs.onChange) {
          this.$attrs.onChange(file, list)
        }
      }
    }
  }
</script>

