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
          console.log(model)
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
    min-height: calc(100% - 20px);
    box-sizing: border-box;
    background-color: $--color-white;
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -2px -2px;
    background-image: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='smallGrid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(0,0,0,0.05)' stroke-width='0.5'/%3E%3C/pattern%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect width='100' height='100' fill='url(%23smallGrid)'/%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(0,0,0,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E");
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
