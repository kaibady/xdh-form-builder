<template>
  <div class="container" v-droppable="{accept:'item',onDrop:handleDrop}" @dblclick="handleDblClick">
    <xdh-form v-bind="form" :model="model" ref="form">
      <xdh-form-item v-for="item in fields"
                     :key="item.prop"
                     v-bind="item"
                     :class="{'is-helper':showHelper===item, 'is-select':editField===item}"
                     @mouseenter.native="handleMouseEnter(item)"
                     @mouseleave.native="handleMouseLeave(item)">
        <div class="mask" slot="body" @click.stop="handleEditItem(item)">
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
  import Droppable from '@/utils/directives/droppable'
  import XdhForm from '../components/xdh-form'
  import XdhFormItem from '../components/xdh-form-item'
  import components from '../helper/setting/components'
  import Sortable from 'sortablejs'

  export default {
    components: {
      XdhForm,
      XdhFormItem
    },
    directives: {
      Droppable
    },
    data() {
      return {
        showHelper: null,
        dragging: false
      }
    },
    computed: {
      ...mapState({
        form: state => state.formModel,
        fields: state => state.fields,
        editField: state => state.editField
      }),
      ...mapGetters(['model'])
    },
    methods: {
      handleDrop(e) {
        const index = Number.parseInt(e.el.dataset['itemIndex'])
        const item = components[index]
        if (item) {
          const defaultName = `${item.type}_${new Date().getTime()}`
          const newItem = {
            ...item,
            label: item.title,
            prop: defaultName,
            value: item.value
          }
          this.$store.commit('addField', newItem)
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
        this.$store.commit('setEditField', null)
        this.$store.commit('removeField', item)
      },
      handleDblClick() {
        this.$store.commit('setEditField', null)
      }
    },
    mounted() {
      this.sortable = new Sortable(this.$refs.form.$refs.body, {
        animation: 200,
        onStart: () => {
          this.dragging = true
          this.showHelper = null
        },
        onEnd: () => {
          this.dragging = false
        },
        onSort: (e) => {
          this.$store.commit('sortFields', e)
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

      &.is-helper, &.is-select {
        /deep/ {
          .xdh-form-item__body {
            display: block;
          }
        }
      }

      &.is-select {
        /deep/ {
          .xdh-form-item__body {
            display: block;
            border: 3px dotted $--color-warning;
            background: rgba(230, 162, 60, 0.2);
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
      .xdh-form-item__body {
        display: none;
        position: absolute;
        z-index: 1000;
        width: 100%;
        height: 100%;
        left: 0;
        top: -3px;
        border-radius: $--border-radius-base;
        border: 3px dotted $--color-success;
        background: rgba(103, 194, 58, 0.2)

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


</style>
