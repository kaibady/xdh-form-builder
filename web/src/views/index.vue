<template>
  <div class="list-wrapper">
    <xdh-list :data="data"
              layout="horizontal"
              :column="6"
              :gutter="20"
              :split="false"
              justify="space-between">
      <el-card class="box-card" :class="{add:item.isAdd}" shadow="hover" slot-scope="{item}" :body-style="{padding:0}">
        <i class="el-icon-plus" v-if="item.isAdd"></i>
        {{item.title}}
        <div class="action" v-if="!item.isAdd">
          <i class="el-icon-edit" @click="edit(item)"></i>
          <i class="el-icon-delete"></i>
        </div>
      </el-card>
    </xdh-list>
  </div>
</template>

<script>
  import XdhList from '@/widgets/xdh-list'

  export default {
    components: {
      XdhList
    },
    data() {
      return {
        list: [
          {
            id: 1,
            title: '表单名称'
          },
          {
            id: 2,
            title: '表单名称'
          }
        ]
      }
    },
    computed: {
      data() {
        return [
          {
            id: 0,
            isAdd: true
          },
          ...this.list
        ]
      }
    },
    methods: {
      edit(item) {
        this.$router.push(`/marker/${item.id}`)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/vars";

  .list-wrapper {
    padding: 20px;

  }

  .box-card {
    height: 200px;
    min-width: 120px;
    line-height: 200px;
    text-align: center;
    font-size: 16px;
    background: $--color-primary-light-9;
    color: $--color-text-primary;
    position: relative;

    &.add {
      line-height: 230px;
      color: $--color-primary;
    }

    .el-icon-plus {
      font-size: 64px;
      font-weight: bold;
    }
  }

  .action {
    line-height: 40px;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 40px;
    font-size: 20px;
    text-align: right;
    width: 100%;

    i {
      padding: 0 10px;
      cursor: pointer;
      height: 35px;
      line-height: 35px;
      border-radius: $--border-radius-base;
      margin-right: 5px;

      &:hover {
        background: $--color-primary-light-8;
      }
    }
  }
</style>
