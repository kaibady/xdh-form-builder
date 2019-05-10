<template>
  <xdh-layout fixed :west.sync="west" :east.sync="east">
    <div class="body">
      <marker-area></marker-area>
    </div>
    <div class="west" slot="west">
      <component-list></component-list>
    </div>
    <div class="east" slot="east">
      <setting-panel></setting-panel>
    </div>
  </xdh-layout>
</template>

<script>
  import XdhLayout from '@/widgets/xdh-layout'
  import ComponentList from '../components/component-list'
  import SettingPanel from '../components/setting-panel'
  import MarkerArea from '../components/marker-area'
  import formSetting from '@/helper/setting/form'
  import propsLib from '@/helper/setting/props'
  import FormsMixin from '@/base/mixin/forms'
  import {mapState} from 'vuex'
  import {LOCAL_STORAGE} from '@/config'
  import {getForms, updateForms} from '@/helper/storage'

  export default {
    mixins: [FormsMixin],
    components: {
      XdhLayout,
      ComponentList,
      SettingPanel,
      MarkerArea
    },
    data() {
      return {
        west: {
          width: '290px',
          collaspedSize: '0',
          split: true
        },
        east: {
          width: '350px',
          collaspedSize: '0',
          split: true
        },
        model: null
      }
    },
    computed: {
      ...mapState({
        form: state => state.formModel,
        fields: state => state.fields
      })
    },
    watch: {
      form() {
        this.save()
      },
      fields() {
        this.save()
      }
    },
    methods: {
      save() {
        if (LOCAL_STORAGE) {
          const id = this.$route.params.id
          updateForms(id, {
            _id: id,
            config: this.form,
            fields: this.fields
          })
        } else {
          this.updateForms({
            _id: this.$route.params.id,
            config: this.form,
            fields: this.fields
          }).catch(e => {
            console.log(e.message)
          })
        }
      }
    },
    created() {
      const id = this.$route.params.id
      if (id) {
        if (LOCAL_STORAGE) {
          const model = getForms(id)
          this.$store.commit('setFormModel', model.config || formSetting.model)
          this.$store.commit('setFields', model.fields || [])
        } else {
          this.getForms(id).then(res => {
            // 表单配置
            this.$store.commit('setFormModel', res.config || formSetting.model)
            this.$store.commit('setFields', res.fields || [])
          }).catch(e => {
            console.log(e.message)
          })
        }
      }
      this.$store.commit('setProps', propsLib)
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/vars";

  .xdh-layout {
    background: $--background-color-base;
  }

  .body {
    padding: 10px;
    margin: 10px;
    background: $--color-white;
    height: calc(100% - 20px);
    box-sizing: border-box;
  }

  .container {
    height: 100%;
  }

  .west, .east {
    background: $--color-primary-light-9;
    height: 100%;
    overflow: auto;
  }

  .west {
    padding-right: 10px;
    overflow: hidden;
  }

  .tabs {
    /deep/ {
      .el-tabs__header {

      }
    }
  }

</style>
