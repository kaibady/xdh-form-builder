(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b688a26"],{a64c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("xdh-form",t._b({attrs:{model:t.model}},"xdh-form",t.config,!1),t._l(t.fields,function(e){return i("xdh-form-item",t._b({key:e.prop},"xdh-form-item",e,!1))}),1)],1)},o=[],c=(i("ac6a"),i("7dfa")),f=i("810f"),r=i("4fbb"),a=i("db49"),s=i("b5e2"),d={mixins:[r["a"]],components:{XdhForm:c["a"],XdhFormItem:f["a"]},data:function(){return{config:{},fields:[]}},computed:{model:function(){var t={};return this.fields.forEach(function(e){e&&"divider"!==e.type&&(t[e.prop]=(e.props||{}).value||e.value)}),t}},created:function(){var t=this,e=this.$route.params.id;if(e)if(a["c"]){var i=Object(s["c"])(e);this.config=i.config||{},this.fields=i.fields||[]}else this.getForms(e).then(function(e){t.config=e.config||{},t.fields=e.fields||[]})}},u=d,l=(i("bb46"),i("2877")),m=Object(l["a"])(u,n,o,!1,null,"dabd4c30",null);e["default"]=m.exports},bb46:function(t,e,i){"use strict";var n=i("c4f8"),o=i.n(n);o.a},c4f8:function(t,e,i){}}]);
//# sourceMappingURL=chunk-4b688a26.3e1a0890.js.map