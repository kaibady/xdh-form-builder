(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b30b7"],{2762:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("xdh-form",{staticStyle:{padding:"20px"},attrs:{model:e.model,inline:!1},on:{change:e.handleChange,submit:e.handleSubmit}},[r("xdh-form-array",{attrs:{prop:"arr"}},e._l(e.list,function(t,n){return r("xdh-form-object",{key:n,attrs:{prop:n}},[r("xdh-form-group",{attrs:{inline:!0,"inline-size":"small"}},[r("xdh-form-item",e._b({attrs:{prop:"title",label:"域名"+(n+1),rules:{required:!0}}},"xdh-form-item",t,!1)),r("el-button",{on:{click:function(t){return e.add(n)}}},[e._v("新增")]),n>0?r("el-button",{on:{click:function(t){return e.remove(n)}}},[e._v("删除")]):e._e()],1)],1)}),1),r("xdh-form-divider",{attrs:{content:"分隔","content-position":"left"}}),r("xdh-form-item",{attrs:{prop:"name",label:"姓名",type:"range",rules:{required:!0}},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}}),r("xdh-form-item",{attrs:{prop:"title"}}),r("xdh-form-divider",{attrs:{content:"分隔","content-position":"left"}}),r("xdh-form-array",{attrs:{prop:"arr"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.model.arr}},[r("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("xdh-form-item",{attrs:{prop:"0.date",rules:{required:!0}},model:{value:n.date,callback:function(t){e.$set(n,"date",t)},expression:"row.date"}})]}}])}),r("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("xdh-form-item",{attrs:{prop:"0.name",rules:{required:!0}},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"row.name"}})]}}])}),r("el-table-column",{attrs:{prop:"address",label:"地址"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("xdh-form-item",{attrs:{prop:"0.address",rules:{required:!0}},model:{value:n.address,callback:function(t){e.$set(n,"address",t)},expression:"row.address"}})]}}])})],1)],1)],1)},o=[],a=r("75fc"),l=(r("6b54"),r("d78a")),i=r("5db9"),s=r("d1e6"),u=r("679b"),d=r("f588"),c=(r("6762"),r("2fdb"),r("c5f6"),r("04ff"),r("6f8c")),m={data:function(){return{user:{list:[],page:null,limit:null,total:0,model:null}}},methods:{fetchUser:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(c["i"])(e,r).then(function(e){return t.user.list=e.list||[],t.user.page=Number.parseInt(e.page)||0,t.user.limit=Number.parseInt(e.limit)||0,t.user.total=Number.parseInt(e.total)||0,e})},getUser:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(c["j"])(e,t,n).then(function(e){return r.user.model=Object.assign({},t,e||{}),e})},addUser:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(c["g"])(e,t,n).then(function(n){return r.user.model=Object.assign({},e,n||{}),void 0!==t?r.user.list.splice(t,0,r.user.model):r.user.list.push(r.user.model),r.user.total+=1,n})},updateUser:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(c["l"])(e,t,n).then(function(n){return r.user.model=Object.assign({},e,n||{}),void 0!==t&&r.user.list.splice(t,1,r.user.model),n})},removeUser:function(e,t,r){var n=this,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Object(c["k"])(e,t,o).then(function(e){return void 0!==r&&n.user.list.splice(r,1),n.user.total-=1,e})},batchUser:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(c["h"])(e,n).then(function(e){return r.length>0&&(t.user.list=t.user.list.filter(function(e,t){return!r.includes(t)})),t.user.total-=r.length,e})}}},f=r("6bd7");function h(){for(var e=[],t=0;t<10;t++){e.push({id:t.toString(),label:"选项选项选项选项选项选项选"+t,value:t.toString(),parentId:null});for(var r=0;r<10;r++){e.push({id:"".concat(t,"-").concat(r),label:"选项选项选项选项选项选项选项"+t+"-"+r,value:t.toString(),parentId:t.toString()});for(var n=0;n<10;n++)e.push({id:"".concat(t,"-").concat(r,"-").concat(n),label:"选项选项选项"+t+"-"+r+"-"+n,value:n.toString(),parentId:"".concat(t,"-").concat(r)})}}return e}var p=Object(a["a"])(h()),b={mixins:[m],components:{XdhForm:l["a"],XdhFormObject:i["a"],XdhFormGroup:u["a"],XdhFormArray:s["a"],XdhFormItem:l["b"],XdhFormDivider:d["a"]},data:function(){return{tableData:[],rules:{},model:{arr:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}]},list:[{type:"input"}]}},methods:{handleChange:function(e){console.log("change",e)},handleSubmit:function(e){console.log("submit",e)},handleClick:function(e){},add:function(e){this.list.push({type:"input"})},remove:function(e){this.list.splice(e,1)}},mounted:function(){var e=this;setTimeout(function(){e.model.name=[323,4343]},3e3);var t={arr:[{a:1,b:2}]},r=Object(f["a"])(t,"arr.5.a");r.o.a=9,console.log(r,t)}},v=b,g=r("2877");r.d(t,"tree",function(){return p});var x=Object(g["a"])(v,n,o,!1,null,null,null);t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-2d0b30b7.542b42cd.js.map