(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-563e81d3"],{5616:function(e,t,r){"use strict";var n=r("9220"),o=r.n(n);o.a},9220:function(e,t,r){},de66:function(e,t,r){e.exports=r.p+"img/xdh.c5ca2469.png"},ed3a:function(e,t,r){"use strict";r.r(t);var n,o,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.reRender?n("xdh-layout",{staticClass:"main",attrs:{fixed:""}},[n("xdh-header",{attrs:{slot:"north",title:"可视化表单制作工具",layout:"logo,title,->,slot"},slot:"north"},[n("img",{attrs:{slot:"logo",src:r("de66")},slot:"logo"}),e.showOp?n("div",{staticClass:"tool"},[n("el-button",{attrs:{round:"",size:"small"},on:{click:e.handleBack}},[e._v("返回")]),n("el-button",{attrs:{round:"",size:"small",type:"success"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("设置")]),n("el-button",{attrs:{round:"",type:"warning",size:"small"},on:{click:e.preview}},[e._v("预览")]),n("el-button",{attrs:{round:"",type:"danger",size:"small"},on:{click:e.exportFile}},[e._v("导出")])],1):e._e()]),n("router-view"),n("el-dialog",{attrs:{title:"表单设置",visible:e.dialogVisible,width:"1000px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("form-setting",{on:{submit:function(t){e.dialogVisible=!1}}})],1)],1):e._e()},s=[],l=(r("6762"),r("2fdb"),r("89c5")),a=(r("7f7f"),r("ac6a"),r("28a5"),r("386d"),r("c5f6"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"xdh-header__logo"},[e._t("default",[e.src?r("img",{attrs:{src:e.src}}):e._e()])],2)}),c=[],u={props:{src:String}},p=u,d=r("2877"),h=Object(d["a"])(p,a,c,!1,null,null,null),f=h.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"xdh-header__nav"},[e._t("default",[r("xdh-menu",{attrs:{mode:"horizontal",data:e.data,"popper-class":"xdh-header__popper",props:e.props,router:e.router,"default-active":e.defaultActive},on:{select:e.handleSelect}})])],2)},v=[],g=r("cebc"),y=(r("6b54"),{name:"XdhMenu",props:{data:{type:Array,default:function(){return[]}},props:{type:Object,default:function(){return{id:"id",text:"text",icon:"icon",children:"children",group:"group",route:"route"}}},mode:String,collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,defaultActive:String,defaultOpeneds:Array,uniqueOpened:Boolean,menuTrigger:String,router:Boolean,popperClass:String},methods:{grouping:function(e){var t={default:[]},r=this.props;return e.forEach(function(e){var n=e[r.group];n?(t[n]=t[n]||[],t[n].push(e)):t["default"].push(e)}),t},createTitle:function(e,t){return[e("i",{class:t[this.props.icon]}),e("span",{slot:"title"},t[this.props.text])]},createItem:function(e,t){var r=(t[this.props.id]||"").toString();return e("el-menu-item",{props:{index:r,route:t[this.props.route]},key:r},this.createTitle(e,t))},createSubmenu:function(e,t){var r=(t[this.props.id]||"").toString();return e("el-submenu",{props:{index:(t[this.props.id]||"").toString(),popperClass:this.popperClass},key:r},[e("template",{slot:"title"},this.createTitle(e,t)),this.createNodes(e,t[this.props.children])])},createGroup:function(e,t,r){var n=this,o=[],i=this.props;return r.forEach(function(t){t[i.children]&&t[i.children].length>0?o.push(n.createSubmenu(e,t)):o.push(n.createItem(e,t))}),o.unshift(e("template",{slot:"title"},t)),e("el-menu-item-group",null,o)},createNodes:function(e,t){var r=this,n=[],o=this.grouping(t),i=this.props;for(var s in o){var l=o[s]||[];"default"===s?l.forEach(function(t){t[i.children]&&t[i.children].length>0?n.push(r.createSubmenu(e,t)):n.push(r.createItem(e,t))}):n.push(this.createGroup(e,s,l))}return n},open:function(e){this.$refs.menu.open(e)},close:function(e){this.$refs.menu.close(e)}},render:function(e){var t=this;return e("el-menu",{props:Object(g["a"])({},this.$props),class:"xdh-menu",on:{select:function(e,r){return t.$emit("select",e,r)},open:function(e,r){return t.$emit("open",e,r)},close:function(e,r){return t.$emit("close",e,r)}},ref:"menu"},this.createNodes(e,this.data))}}),b=y,x=Object(d["a"])(b,n,o,!1,null,null,null),_=x.exports;_.install=function(e){e.component(_.name,_)};var S,$,w,k,T=_,O={components:{XdhMenu:T},props:{data:{type:Array,default:function(){return[]}},props:Object,router:Boolean,defaultActive:String},methods:{handleSelect:function(e,t){this.$emit("select",e,t)}}},j=O,C=Object(d["a"])(j,m,v,!1,null,null,null),z=C.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"xdh-header__search",style:e.styles},[e._t("default",[r("el-input",{attrs:{placeholder:e.placeholder,size:e.size},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}},[e.types&&e.types.length>0?r("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.currentType,callback:function(t){e.currentType=t},expression:"currentType"}},e._l(e.types,function(t,n){return r("el-option",{key:n,attrs:{label:t[e.prop.label],value:t[e.prop.value]}})}),1):e._e(),r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleSearch},slot:"append"})],1)])],2)},E=[],B={props:{width:{type:String},size:{type:String},placeholder:{type:String,default:"请输入查询关键字"},types:{type:Array,default:function(){return[]}},type:{type:[String,Number]},keyword:{type:String},prop:{type:Object,default:function(){return{label:"label",value:"value"}}}},data:function(){return{searchText:this.keyword,currentType:this.type}},computed:{styles:function(){return{width:this.width}}},watch:{type:function(e){this.currentType=e},keyword:function(e){this.searchText=e}},methods:{handleSearch:function(e){this.$emit("search",this.searchText,this.currentType,e)}},created:function(){}},H=B,I=Object(d["a"])(H,A,E,!1,null,null,null),N=I.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"xdh-header__title"},[e._t("default")],2)},F=[],P={},R=P,V=Object(d["a"])(R,X,F,!1,null,null,null),L=V.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"xdh-header__tool"},[e._t("default",e._l(e.data,function(t,n){return r("div",{key:n,staticClass:"header-tool-item",class:e.classes,on:{click:function(r){return e.handleClick(t)}}},[r("i",{class:t[e.props.icon]}),e._v("\n      "+e._s(t[e.props.text])+"\n    ")])}))],2)},U=[],W={props:{inline:Boolean,data:{type:Array,default:function(){return[]}},props:{type:Object,default:function(){return{id:"id",icon:"icon",text:"text"}}}},computed:{classes:function(){return{"is-inline":this.inline}}},methods:{handleClick:function(e){this.$emit("click",e)}}},D=W,G=Object(d["a"])(D,M,U,!1,null,null,null),J=G.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"xdh-header__user"},[e._t("default",[r("div",{staticClass:"header-user__info"},[r("i",{class:e.icon}),e._v(e._s(e.text))])])],2)},q=[],Q={props:{icon:String,text:String}},Y=Q,Z=Object(d["a"])(Y,K,q,!1,null,null,null),ee=Z.exports,te={render:function(e){return this.$parent.$slots.default?this.$parent.$slots.default[0]:""}},re=te,ne=Object(d["a"])(re,S,$,!1,null,null,null),oe=ne.exports,ie={name:"XdhHeader",components:{HeaderLogo:f,HeaderNav:z,HeaderSearch:N,HeaderTitle:L,HeaderTool:J,HeaderUser:ee,HeaderSlot:oe},props:{size:{type:String,default:"default",validator:function(e){return["large","default","small"].includes(e)}},layout:{type:String,default:"title"},title:{type:String},logo:{type:String},searchTypes:{type:Array},searchType:{type:[String,Number]},searchKeyword:{type:String},searchWidth:{type:String},searchPlaceholder:{type:String},nav:{type:Array},navProp:{type:Object},navRouter:Boolean,navDefaultActive:String,userIcon:String,userText:String,tools:Array,toolProp:Object,toolInline:Boolean},methods:{renderLogo:function(e){return e("header-logo",{props:{src:this.logo}},this.$slots.logo)},renderTitle:function(e){return e("header-title",this.$slots.title||this.title)},renderSearch:function(e){var t=this;return e("header-search",{props:{width:this.searchWidth,size:this.size,placeholder:this.searchPlaceholder,types:this.searchTypes,keyword:this.searchKeyword,type:this.searchType},on:{search:function(e,r){t.$emit("on-search",e,r)}}},this.$slots.search)},renderNav:function(e){var t=this;return e("header-nav",{props:{data:this.nav,props:this.navProp,router:this.navRouter,defaultActive:this.navDefaultActive},on:{select:function(e,r){t.$emit("on-nav-select",e,r)}}},this.$slots.nav)},renderUser:function(e){return e("header-user",{props:{icon:this.userIcon,text:this.userText}},this.$slots.user)},renderTool:function(e){var t=this;return e("header-tool",{props:{data:this.tools,props:this.toolProp,inline:this.toolInline},on:{click:function(e){t.$emit("on-tool-click",e)}}},this.$slots.tool)}},render:function(e){var t=e("div",{class:["xdh-header","is-".concat(this.size)]}),r=this.layout||"";if(r){var n={logo:this.renderLogo(e),title:this.renderTitle(e),search:this.renderSearch(e),nav:this.renderNav(e),user:this.renderUser(e),tool:this.renderTool(e),slot:e("header-slot")},o=r.split(",").map(function(e){return e.trim()}),i=e("div",{class:"xdh-header__rightwrapper"}),s=!1;return t.children=t.children||[],i.children=i.children||[],o.forEach(function(e){"->"!==e?s?i.children.push(n[e]):t.children.push(n[e]):s=!0}),s&&t.children.unshift(i),t}},created:function(){}},se=ie,le=Object(d["a"])(se,w,k,!1,null,null,null),ae=le.exports;ae.install=function(e){e.component(ae.name,ae)};var ce=ae,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("xdh-form",{attrs:{"footer-align":"right",inline:!0,"inline-size":"medium","label-width":"140px","footer-size":"large",size:"small",model:e.model,"footer-border":""},on:{submit:e.handleSubmit}},e._l(e.config,function(e){return r("xdh-form-item",{key:e.prop,attrs:{label:e.label,prop:e.prop,type:e.type,options:e.options,contentWidth:"320px",props:e.props||{}}})}),1)},pe=[],de=r("7dfa"),he=r("810f"),fe=r("1693"),me=r("2f62"),ve={components:{XdhForm:de["a"],XdhFormItem:he["a"]},computed:Object(g["a"])({},Object(me["mapState"])({model:function(e){return e.formModel}})),data:function(){return{config:fe["a"].fields}},methods:{handleSubmit:function(e){this.$store.commit("setFormModel",Object(g["a"])({},e)),this.$emit("submit",e)}}},ge=ve,ye=Object(d["a"])(ge,ue,pe,!1,null,"6f4770c1",null),be=ye.exports,xe={components:{XdhLayout:l["a"],XdhHeader:ce,FormSetting:be},data:function(){return{showOp:!1,reRender:!0,dialogVisible:!1}},watch:{"$route.path":{immediate:!0,handler:function(e){var t=this;this.showOp=e.includes("marker"),this.reRender=!1,this.$nextTick(function(){t.reRender=!0})}}},methods:{handleBack:function(){this.$router.push("/")},preview:function(){var e=this.$route.params.id,t=location.pathname;window.open("".concat(t,"#/preview/").concat(e))},exportFile:function(){var e=this.$route.params.id,t=location.pathname;window.open("".concat(t,"#/file/").concat(e))}}},_e=xe,Se=(r("5616"),Object(d["a"])(_e,i,s,!1,null,"0355f8ec",null));t["default"]=Se.exports}}]);
//# sourceMappingURL=chunk-563e81d3.276a1b43.js.map