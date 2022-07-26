## Excel 文件读写


### 文件上传
:::demo
```html
<template>
  <xdh-list-panel title="导入Excel" :pager="false">
    <div slot="tool">
      <xdh-file-input placeholder="请选择EXCEL文件"
                      accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      size="small"
                      @on-change="handleChange"></xdh-file-input>
    </div>
    <xdh-table :columns="columns" :data="rows" height="400" border v-loading="loading"></xdh-table>
  </xdh-list-panel>
</template>

<script>
  import XdhFileInput from '@/widgets/xdh-file-input'
  import XdhTable from '@/widgets/xdh-table'
  import XdhListPanel from '@/widgets/xdh-list-panel'
  import excel from '@/utils/excel'

  export default {
    components: {
      XdhListPanel,
      XdhFileInput,
      XdhTable
    },
    data() {
      return {
        columns: [],
        rows: [],
        loading: false
      }
    },
    methods: {
      handleChange(files) {
       if(!files || files.length===0) return
        this.loading = true
        excel.reader(files[0]).then(data => {
          const {header, results} = excel.read(data, 'array')
          this.columns = header.map(c => {
            return {label: c, prop: c}
          })
          this.rows = results
          this.loading = false
        }).catch(e => {
          this.$alert(e)
        })

      }
    }
  }
</script>
```
:::

### 导出文件
:::demo
```html
<template>
  <xdh-list-panel title="导出Excel" :pager="false">
    <div slot="tool">
      <el-button type="primary" size="small" @click="exportExcel">导出</el-button>
    </div>
    <xdh-table :columns="columns2" :data="data" height="400" border v-loading="loading"></xdh-table>
  </xdh-list-panel>
</template>

<script>
  import XdhTable from '@/widgets/xdh-table'
  import XdhListPanel from '@/widgets/xdh-list-panel'
  import excel from '@/utils/excel'

  export default {
    components: {
      XdhListPanel,
      XdhTable
    },
    data() {
      return {
        columns2: [
          {
            label: 'ID',
            prop: 'id'
          }, {
            label: '日期',
            prop: 'date'
          }, {
            label: '姓名',
            prop: 'name'
          }, {
            label: '省份',
            prop: 'province',
            filterType: 'dict'
          }, {
            label: '城市',
            prop: 'city'
          }
        ],
        data: [],
        loading: false,
        count: 0
      }
    },
    methods: {
      loadData(len) {
        for (let i = 0; i < len; i++) {
          ++this.count
          this.data.push({
            id: this.count,
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区'
          })
        }
      },
      exportExcel() {
        if (this.data.length === 0) return
        this.loading = true
        const params = {
          title: this.columns2.map(n => n.label),
          key: this.columns2.map(n => n.prop),
          data: this.data,
          autoWidth: true,
          fileName: '导出文件'
        }
        excel.write(params).then(() => {
          this.loading = false
        })

      }
    },
    created() {
      this.loadData(1000)
    }
  }
</script>
```
:::

### 导出文件(从table获取数据)
直接通过table元素获取表格数据，适用于el-table和table不适用于vitual-table
:::demo
```html
<template>
  <xdh-list-panel title="导出Excel" :pager="false">
    <div slot="tool">
      <el-button type="primary" size="small" @click="exportExcelFromTable">导出</el-button>
    </div>
    el-table
    <xdh-table ref="table1" :columns="columns2" :data="data" height="400" border v-loading="loading"></xdh-table>
    table
    <table ref="table2" border cellspacing="0" width="400" style="margin-top: 10px;">
       <tr>
        <th>姓名</th>
        <th>性别</th>
      </tr>
      <tr>
        <td>张三</td>
        <td>男</td>
     </tr>
    </table>
  </xdh-list-panel>
</template>

<script>
  import XdhTable from '@/widgets/xdh-table'
  import XdhListPanel from '@/widgets/xdh-list-panel'
  import excel from '@/utils/excel'

  export default {
    components: {
      XdhListPanel,
      XdhTable
    },
    data() {
      return {
        columns2: [
          {
            label: 'ID',
            prop: 'id'
          }, {
            label: '日期',
            prop: 'date'
          }, {
            label: '姓名',
            prop: 'name'
          }, {
            label: '省份',
            prop: 'province',
            filterType: 'dict'
          }, {
            label: '城市',
            prop: 'city'
          }
        ],
        data: [],
        loading: false,
        count: 0
      }
    },
    methods: {
      loadData(len) {
        for (let i = 0; i < len; i++) {
          ++this.count
          this.data.push({
            id: this.count,
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区'
          })
        }
      },
      exportExcelFromTable() {
        if (this.data.length === 0) return
        excel.writeFromTable({
          tables: [this.$refs.table1.$el, this.$refs.table2],
          sheetNames: ['table1', 'table2'],
          fileName: '导出文件'
        }).then(() => {
          this.loading = false
        })
      }
    },
    created() {
      this.loadData(1000)
    }
  }
</script>
```
:::
