(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-766b48fc"],{"259f":function(n,t,e){},"99f4":function(n,t,e){"use strict";function i(n){var t=Math.min(parseInt(10*Math.random()),n);return t||null}function o(n){for(var t=10,e=[],o=0;o<t;o++)e.push({id:o+1,parentId:i(o),label:"选项".concat(o+1),value:o});return Promise.resolve(e)}e.d(t,"a",function(){return o})},a64c:function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("xdh-form",n._b({attrs:{model:n.model,fields:n.fields,load:n.load},on:{submit:n.handleSubmit}},"xdh-form",n.config,!1))],1)},o=[],a=(e("ac6a"),e("7dfa")),f=e("4fbb"),r=e("db49"),c=e("b5e2"),s=e("99f4"),u={mixins:[f["a"]],components:{XdhForm:a["a"]},data:function(){return{config:{},fields:[],load:s["a"]}},computed:{model:function(){var n={};return this.fields.forEach(function(t){t&&"divider"!==t.type&&(n[t.prop]=(t.props||{}).value||t.value)}),n}},methods:{handleSubmit:function(n){console.log("submit",n)}},created:function(){var n=this,t=this.$route.params.id;if(t)if(r["c"]){var e=Object(c["c"])(t);this.config=e.config||{},this.fields=e.fields||[]}else this.getForms(t).then(function(t){n.config=t.config||{},n.fields=t.fields||[]})}},d=u,l=(e("bbf2"),e("2877")),h=Object(l["a"])(d,i,o,!1,null,"2a777d4f",null);t["default"]=h.exports},bbf2:function(n,t,e){"use strict";var i=e("259f"),o=e.n(i);o.a}}]);
//# sourceMappingURL=chunk-766b48fc.cc7c8c40.js.map