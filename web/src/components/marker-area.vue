<template>
  <div class="container" v-droppable="{accept:'item',onDrop:handleDrop}">
    <xdh-form v-bind="form" ref="form">
      <xdh-form-item v-for="item in items"
                     :key="item.prop"
                     v-bind="item"
                     :class="{'is-helper':showHelper===item}"
                     @mouseenter.native="handleMouseEnter(item)"
                     @mouseleave.native="handleMouseLeave(item)">
        <div class="mask" slot="body">
          <div class="handle-btns">
            <i class="el-icon-edit" @click="editItem(item)"></i>
            <i class="el-icon-delete" @click="removeItem(item)"></i>
          </div>
        </div>
      </xdh-form-item>
    </xdh-form>
  </div>
</template>

<script>
  import Droppable from '@/utils/directives/droppable'
  import XdhForm from '../components/xdh-form'
  import XdhFormItem from '../components/xdh-form-item'
  import bus from '@/utils/bus'
  import components from '@/helper/components'
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
        form: {
          labelWidth: '200px',
          footerAlign: 'right'
        },
        items: [
          {
            prop: 'test',
            label: '测试'
          }
        ],
        showHelper: null,
        dragging: false
      }
    },
    methods: {
      handleDrop(e) {
        const index = Number.parseInt(e.el.dataset['itemIndex'])
        const item = components[index]
        if (item) {
          const count = this.items.reduce((total, c) => {
            if (c.type === item.type) {
              return ++total
            }
            return total
          }, 0)
          const defaultName = `${item.type}_${count + 1}`
          this.items.push({
            ...item,
            label: defaultName,
            prop: defaultName
          })
        }
      },
      handleMouseEnter(item) {
        if (this.dragging) return
        this.showHelper = item
      },
      handleMouseLeave(item) {
        this.showHelper = null
      },
      editItem() {
      },
      removeItem(item) {
        this.items.forEach((n, index) => {
          if (n === item) {
            this.items.splice(index, 1)
          }
        })
      }
    },
    mounted() {
      this.sortable = new Sortable(this.$refs.form.$el, {
        animation: 200,
        onStart: () => {
          this.dragging = true
          this.showHelper = null
        },
        onEnd: () => {
          this.dragging = false
        }
      })
    },
    created() {
      bus.$on('updateFormConfig', model => {
        this.form = {...model}
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
    .xdh-form-item {
      position: relative;
      cursor: move;

      &.is-helper {
        /deep/ {
          .xdh-form-item__body {
            display: block;
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
        width: 100%;
        height: 100%;
        padding-bottom: 14px;
        left: 0;
        top: 0;
        border-radius: $--border-radius-base;
        border: 3px dotted $--color-success;
        background: rgba(103, 194, 58, 0.2)

      }
    }
  }

  .handle-btns {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 18px;

    i {
      padding: 5px 10px 5px 0;
      cursor: pointer;
    }

    .el-icon-edit {
      color: $--color-warning;
    }

    .el-icon-delete {
      color: $--color-danger;
    }
  }
</style>
