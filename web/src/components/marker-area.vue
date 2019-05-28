<template>
  <div class="container" @dblclick="handleDblClick">
    <xdh-form class="design-form"
              :class="classes"
              v-bind="form"
              :model="model"
              design-mode
              :load="load"
              ref="form">
      <xdh-form-item v-for="item in fields"
                     :key="item.prop"
                     v-bind="clone(item)"
                     :class="{'is-helper':showHelper===item, 'is-select':editField===item}"
                     @mouseenter.native="handleMouseEnter(item)"
                     @mouseleave.native="handleMouseLeave(item)">

        <div class="mask" slot="body" @click.stop="handleEditItem(item)">
          <span class="depend-info" v-show="item.depend">依赖：{{item.depend}}</span>
          <div class="handle-btns">
            <i class="el-icon-delete" @click.stop="removeItem(item)"></i>
          </div>
        </div>
      </xdh-form-item>
    </xdh-form>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import XdhForm from '@/widgets/xdh-form'
  import XdhFormItem from '@/widgets/xdh-form/xdh-form-item'
  import Sortable from 'sortablejs'
  import {load} from '../helper/setting/dict'

  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    data() {
      return {
        showHelper: null,
        dragging: false,
        load: load
      }
    },
    computed: {
      ...mapState({
        form: state => state.formModel,
        fields: state => state.fields,
        editField: state => state.editField
      }),
      ...mapGetters(['model']),
      classes() {
        return {
          'is-empty': this.fields.length === 0
        }
      }
    },
    methods: {
      clone(data) {
        return JSON.parse(JSON.stringify(data))
      },
      handleDrop(item, index) {
        if (item) {
          const defaultName = `${item.type}_${new Date().getTime()}`
          const newItem = {
            ...item,
            label: item.title,
            prop: defaultName,
            value: item.value
          }
          delete newItem.title
          this.$store.commit('addField', {field: newItem, index: index})
        }
      },
      handleMouseEnter(item) {
        if (this.dragging) return
        this.showHelper = item
      },
      handleMouseLeave(item) {
        this.showHelper = null
      },
      handleEditItem(item) {
        this.$store.commit('setEditField', item)
      },
      removeItem(item) {
        const isDepend = !!this.fields.find(n => n.depend === item.prop)
        if (isDepend) {
          this.$message.warning('该字段被其他字段依赖，不能删除')
          return
        }
        this.$store.commit('setEditField', null)
        this.$store.commit('removeField', item)
      },
      handleDblClick() {
        this.$store.commit('setEditField', null)
      }
    },
    mounted() {
      let isAdd = false
      this.sortable = new Sortable(this.$refs.form.$refs.body, {
        group: 'component',
        animation: 200,
        filter: '.xdh-form__footer',
        onStart: () => {
          this.dragging = true
          this.showHelper = null
        },
        onEnd: (e) => {
          this.dragging = false
        },
        onSort: (e) => {
          // 添加也会触发onSort， 用个变量去来区分
          if (!isAdd) {
            this.$store.commit('sortFields', e)
          }
          isAdd = false
        },
        onAdd: (e) => {
          const item = e.item.__item__
          if (item) {
            isAdd = true
            this.handleDrop(item, e.newIndex)
          }
          this.$nextTick(() => {
            e.item.parentNode.removeChild(e.item)
          })
        }
      })
    },
    beforeDestroy() {
      if (this.sortable) {
        this.sortable.destroy()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/vars";

  .container {

    .xdh-form-divider {
      cursor: move;

      &.is-helper {
        /deep/ {
          .xdh-form-item__body {
            display: block;
            top: -16px;
            height: 30px;
            border: 3px dotted $--color-success !important;
            background: rgba(103, 194, 58, 0.2) !important;
          }
        }
      }

      &.is-select {
        /deep/ {
          .xdh-form-item__body {
            border: 3px dotted $--color-warning;
            background: rgba(230, 162, 60, 0.2);
            display: block;
            top: -16px;
            height: 30px;
          }
        }
      }


    }

    .xdh-form-item {
      position: relative;
      cursor: move;

      &.is-helper, &.is-helper.is-depend {
        /deep/ {
          .xdh-form-item__body {
            display: block;
            border: 3px dotted $--color-success !important;
            background: rgba(103, 194, 58, 0.2) !important;
          }
        }
      }

      &.is-select, &.is-select.is-depend {
        /deep/ {
          .xdh-form-item__body {
            display: block;
            border: 3px dotted $--color-warning;
            background: rgba(230, 162, 60, 0.2);
          }

          .handle-btns {
            display: block
          }
        }
      }

      &.is-depend {
        /deep/ {
          .xdh-form-item__body {
            display: block;
            border: 3px dotted $--color-info;
            background: rgba(66, 66, 66, 0.05);
          }

          .depend-info {
            text-align: left;
            font-size: 12px;
            background: rgba(66, 66, 66, 0.4);
            color: $--color-white;
            padding: 3px;
            border-radius: 2px;
            position: absolute;
            left: 10px;
            top: -15px;
          }

          .handle-btns {
            display: none;
          }

        }
      }


      &.sortable-ghost {
        /deep/ {
          .xdh-form-item__body {
            display: block;
            border: none;
            background: $--color-warning-light;
            opacity: 0.5;
          }
        }
      }

    }

    /deep/ {
      .xdh-form__body {
        padding-top: 10px;
      }

      .is-empty {
        .xdh-form__body {
          height: calc(100% - 100px);
        }
      }

      .xdh-grid__item {
        display: inline-block;
        height: 40px;
        width: 100%;
        overflow: hidden;
        padding: 0;
        margin: 0;
        background: $--color-danger-light;

        * {
          display: none;
        }
      }

      .el-form--inline {
        .xdh-grid__item {
          width: 150px;
        }
      }

      .xdh-form-item__body {
        display: none;
        position: absolute;
        z-index: 1000;
        width: 100%;
        height: 100%;
        left: 0;
        top: -3px;
        border-radius: $--border-radius-base;

      }
    }

    .mask {
      height: 100%;
    }
  }

  .handle-btns {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 18px;

    i {
      padding: 5px 10px;
      cursor: pointer;
    }

    .el-icon-delete {
      color: $--color-danger;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  .design-form {
    height: 100%;
    margin-right: 10px;
    margin-left: 10px;
  }

</style>
