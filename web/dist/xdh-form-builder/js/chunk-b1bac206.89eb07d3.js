(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1bac206"],{"2f21":function(e,t,i){"use strict";var n=i("79e5");e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}},4010:function(e,t,i){e.exports=i("2940")(37)},"456d":function(e,t,i){var n=i("4bf8"),l=i("0d58");i("5eda")("keys",function(){return function(e){return l(n(e))}})},"55dd":function(e,t,i){"use strict";var n=i("5ca1"),l=i("d8e8"),r=i("4bf8"),s=i("79e5"),a=[].sort,o=[1,2,3];n(n.P+n.F*(s(function(){o.sort(void 0)})||!s(function(){o.sort(null)})||!i("2f21")(a)),"Array",{sort:function(e){return void 0===e?a.call(r(this)):a.call(r(this),l(e))}})},5924:function(e,t,i){e.exports=i("2940")(6)},"5b94":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"xdh-form-input-tag el-select",class:[e.selectSize?"el-select--"+e.selectSize:""]},[i("div",{ref:"tags",staticClass:"el-select__tags",style:{"max-width":e.inputWidth-32+"px",width:"100%"}},[e.collapseTags&&e.tags.length?i("span",[i("el-tag",{attrs:{type:"info",size:e.collapseTagSize,closable:e.closableTag,"disable-transitions":""},on:{click:e.handelTagClick,close:function(t){return e.deleteTag(t,e.tags[0])}}},[i("span",{staticClass:"el-select__tags-text"},[e._v(e._s(e.tags[0]))])]),e.tags.length>1?i("el-tag",{attrs:{closable:!1,type:"info",size:e.collapseTagSize,"disable-transitions":""}},[i("span",{staticClass:"el-select__tags-text"},[e._v("+ "+e._s(e.tags.length-1))])]):e._e()],1):e._e(),e.collapseTags?e._e():i("transition-group",{on:{"after-leave":e.resetInputHeight}},e._l(e.tags,function(t,n){return i("el-tag",{key:t+"_"+n,attrs:{closable:e.closableTag,type:"info",size:e.collapseTagSize,"disable-transitions":""},on:{click:e.handelTagClick,close:function(i){return e.deleteTag(n,t)}}},[i("span",{staticClass:"el-select__tags-text"},[e._v(e._s(t))])])}),1),e.allowCreate?i("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],ref:"input",staticClass:"el-select__input",class:[e.selectSize?"is-"+e.selectSize:""],style:{"flex-grow":"1",width:e.inputLength/(e.inputWidth-32)+"%","max-width":e.inputWidth-42+"px"},attrs:{type:"text",disabled:e.disabled,readonly:e.readonly},domProps:{value:e.query},on:{focus:e.handleFocus,blur:e.handleBlur,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),t.stopPropagation(),e.select(t))},input:function(t){t.target.composing||(e.query=t.target.value)}}}):e._e()],1),i("el-input",{ref:"reference",attrs:{disabled:e.disabled,readonly:e.readonly,size:e.selectSize,placeholder:e.currentPlaceholder},on:{focus:e.handleFocus}},[e.$slots.prefix?i("template",{slot:"prefix"},[e._t("prefix")],2):e._e(),i("template",{slot:"suffix"},[i("i",{class:["el-input__icon",e.icon,{"el-select__caret":e.active}],on:{click:e.handelIconClick}})])],2)],1)},l=[],r=i("75fc"),s=(i("6762"),i("2fdb"),i("4010")),a={inject:{elForm:{default:""},elFormItem:{default:""}},props:{value:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"请输入标签"},collapseTags:Boolean,disabled:Boolean,readonly:Boolean,size:{type:String,default:"",validator:function(e){return["medium","small","mini",""].includes(e)}},icon:{type:String,default:"el-icon-price-tag"},active:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},allowCreate:{type:Boolean,default:!0}},data:function(){return{query:"",tags:Object(r["a"])(this.value),initialInputHeight:0,inputLength:20,inputWidth:0}},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},selectSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},currentPlaceholder:function(){return this.tags.length>0||this.query?"":this.placeholder},collapseTagSize:function(){return["small","mini"].indexOf(this.selectSize)>-1?"mini":"small"},closableTag:function(){return!!this.closable&&(!this.disabled&&!this.readonly)}},watch:{value:function(e){this.tags=Object(r["a"])(e)},tags:function(){var e=this;this.$nextTick(function(){e.resetInputHeight()})},disabled:function(){var e=this;this.$nextTick(function(){e.resetInputHeight()})},readonly:function(){var e=this;this.$nextTick(function(){e.resetInputHeight()})},selectSize:function(e){var t=this;this.$nextTick(function(){t.setInitialInputHeight(),t.resetInputHeight(),t.resetInputWidth()})}},methods:{handelTagClick:function(){this.$emit("tag-click")},handleFocus:function(){this.$refs.input&&this.$refs.input.focus(),this.$emit("focus")},handleBlur:function(){this.select(),this.$emit("blur")},select:function(){this.allowCreate&&this.query&&(this.tags.push(this.query),this.query="",this.$emit("input",this.tags),this.$emit("change",this.tags))},deleteTag:function(e,t){if(e>-1){var i=Object(r["a"])(this.tags);i.splice(e,1),this.$emit("input",i),this.$emit("change",i),this.$emit("close-tag",e,t,i),this.handleFocus()}},resetInputWidth:function(){this.inputWidth=this.$refs.reference.$el.getBoundingClientRect().width},resetInputHeight:function(){var e=this;this.collapseTags||this.$nextTick(function(){if(e.$refs.reference){var t=e.$refs.reference.$el.childNodes,i=[].filter.call(t,function(e){return"INPUT"===e.tagName})[0],n=e.$refs.tags,l=e.initialInputHeight||40;i.style.height=0===e.tags.length?l+"px":Math.max(n?n.clientHeight+(n.clientHeight>l?6:0):0,l)+"px"}})},handleResize:function(){this.resetInputWidth(),this.resetInputHeight()},setInitialInputHeight:function(){var e={medium:36,small:32,mini:28};this.initialInputHeight=e[this.selectSize]||40},handelIconClick:function(){this.$emit("icon-click")}},mounted:function(){Object(s["addResizeListener"])(this.$el,this.handleResize),this.setInitialInputHeight()},beforeDestroy:function(){this.$el&&this.handleResize&&Object(s["removeResizeListener"])(this.$el,this.handleResize)}},o=a,u=i("2877"),c=Object(u["a"])(o,n,l,!1,null,null,null);t["a"]=c.exports},"5eda":function(e,t,i){var n=i("5ca1"),l=i("8378"),r=i("79e5");e.exports=function(e,t){var i=(l.Object||{})[e]||Object[e],s={};s[e]=t(i),n(n.S+n.F*r(function(){i(1)}),"Object",s)}},"7cdf":function(e,t,i){var n=i("5ca1");n(n.S,"Number",{isInteger:i("9c12")})},"7dfa":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-form",e._b({ref:"form",staticClass:"xdh-form",class:e.formClasses,attrs:{model:e.currentModel},nativeOn:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.preventSubmit(t)},keyup:function(t){return t.type.indexOf("key")||13===t.keyCode?e.handelEnterSubmit(t):null}}},"el-form",e.$attrs,!1),[i("div",{ref:"body",staticClass:"xdh-form__body"},[e._t("default",e._l(e.fields,function(t){return i("xdh-form-item",e._b({key:t.prop},"xdh-form-item",t,!1))})),e.footer&&e.isFooterInline?i("el-form-item",{staticClass:"xdh-form__footer"},[e.footer?e._t("footer",[e.submitText?i("el-button",{attrs:{type:"primary",size:e.footerSize},on:{click:e.submit}},[e._v(e._s(e.submitText))]):e._e(),e.resetText?i("el-button",{attrs:{size:e.footerSize},on:{click:e.reset}},[e._v(e._s(e.resetText))]):e._e()]):e._e()],2):e._e()],2),e.footer&&!e.isFooterInline?i("el-form-item",{staticClass:"xdh-form__footer",class:e.footerClasses,attrs:{label:e.footerAlignLabel}},[e.footer?e._t("footer",[e.submitText?i("el-button",{attrs:{type:"primary",size:e.footerSize},on:{click:e.submit}},[e._v(e._s(e.submitText))]):e._e(),e.resetText?i("el-button",{attrs:{size:e.footerSize},on:{click:e.reset}},[e._v(e._s(e.resetText))]):e._e()]):e._e()],2):e._e()],1)},l=[],r=i("cebc"),s=(i("6762"),i("2fdb"),i("810f")),a=i("89df"),o=i("ca00"),u={name:"XdhForm",components:{XdhFormItem:s["a"]},provide:function(){return{xdhForm:this}},props:{model:{type:Object,default:function(){return{}}},fields:{type:Array},load:{type:Function},dictMap:{type:Object,default:function(){return{}}},validateMsg:{type:String,default:"",validator:function(e){return["top","right","bottom",""].includes(e)}},footer:{type:Boolean,default:!0},footerAlign:{type:String,default:"right",validator:function(e){return["label","left","right","center","inline",""].includes(e)}},footerBorder:{type:Boolean,default:!0},submitText:{type:String,default:"提交"},resetText:{type:String,default:"重置"},inlineSize:{type:String,default:"",validator:function(e){return["large","medium","small",""].includes(e)}},footerSize:{type:String,validator:function(e){return["large","medium","small","mini",""].includes(e)}},enterSubmit:{type:Boolean,default:!0},designMode:{type:Boolean,default:!1}},data:function(){return{currentModel:Object(r["a"])({},this.model)}},watch:{model:{deep:!0,handler:function(e){Object(o["c"])(e,this.currentModel)||(this.currentModel=Object(r["a"])({},e))}},currentModel:{deep:!0,handler:function(e,t){this.proxyHandleChange(e,t)}}},computed:{extendAttrs:function(){return Object(r["a"])({},Object(a["a"])(this.$attrs),{validateMsg:this.validateMsg,inlineSize:this.inlineSize})},formClasses:function(){return[this.$attrs.inline?"is-inline-size is-inline-".concat(this.inlineSize):""]},footerClasses:function(){return["is-".concat(this.footerAlign),{"is-border":this.footerBorder&&this.footerAlign&&"label"!==this.footerAlign}]},footerAlignLabel:function(){return"label"===this.footerAlign?" ":null},isFooterInline:function(){return"inline"===this.footerAlign}},methods:{submit:function(){var e=this;this.$refs.form.validate(function(t){t&&e.$emit("submit",e.currentModel)})},reset:function(){this.$refs.form.resetFields(),this.currentModel=Object(r["a"])({},this.model),this.$emit("reset",this.currentModel)},preventSubmit:function(){return!1},handelEnterSubmit:function(){this.enterSubmit&&this.submit()},handleChange:function(e,t){this.$emit("change",e,t)}},created:function(){this.proxyHandleChange=Object(o["a"])(this.handleChange,300,!1,this)}},c=u,d=i("2877"),p=Object(d["a"])(c,n,l,!1,null,null,null);t["a"]=p.exports},"810f":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isDivider?i(e.components[e.type],e._b({tag:"component"},"component",e.props,!1),[e.$slots.body?i("div",{ref:"body",staticClass:"xdh-form-item__body",attrs:{slot:"body"},slot:"body"},[e._t("body")],2):e._e()]):e.isShowField?i("el-form-item",e._b({staticClass:"xdh-form-item",class:e.itemClasses,attrs:{prop:e.prop.toString(),labelWidth:e.labelWidth,rules:e.checkRules}},"el-form-item",e.mergeAttrs,!1),[i(e.components[e.type],e._g(e._b({tag:"component",attrs:{options:e.optionsList,prop:e.prop},model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"component",e.props,!1),e.$listeners),[e._t("inner")],2),e._t("default"),e.$slots.body?i("div",{ref:"body",staticClass:"xdh-form-item__body"},[e._t("body")],2):e._e()],2):e._e()},l=[],r=(i("7cdf"),i("04ff"),i("3b2b"),i("c5f6"),i("b3a4")),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-input",e._g(e._b({model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"el-input",e.$attrs,!1),e.$listeners))},a=[],o={props:{value:{type:String}},computed:{fieldValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},u=o,c=i("2877"),d=Object(c["a"])(u,s,a,!1,null,null,null),p=d.exports,f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-select",e._g(e._b({nativeOn:{keyup:function(e){if(!e.type.indexOf("key")&&13!==e.keyCode)return null;e.stopPropagation()}},model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"el-select",e.$attrs,!1),e.$listeners),e._l(e.options,function(e,t){return i("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)},h=[],m={props:{value:{type:[String,Number,Boolean,Array]},options:{type:Array,default:function(){return[]}}},computed:{fieldValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},b=m,g=Object(c["a"])(b,f,h,!1,null,null,null),y=g.exports,v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-radio-group",e._g(e._b({model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"el-radio-group",e.$attrs,!1),e.$listeners),e._l(e.options,function(t,n){return i(e.component,{key:n,tag:"component",attrs:{label:t.value}},[e._v(e._s(t.label)+"\n  ")])}),1)},_=[],x={props:{value:{type:String},options:{type:Array,default:function(){return[]}},button:Boolean},computed:{component:function(){return this.button?"el-radio-button":"el-radio"},fieldValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},$=x,k=Object(c["a"])($,v,_,!1,null,null,null),S=k.exports,C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-checkbox-group",e._g(e._b({model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"el-checkbox-group",e.$attrs,!1),e.$listeners),e._l(e.options,function(t,n){return i(e.component,{key:n,tag:"component",attrs:{label:t.value}},[e._v(e._s(t.label)+"\n  ")])}),1)},O=[],V={props:{value:{type:Array},options:{type:Array,default:function(){return[]}},button:Boolean},computed:{component:function(){return this.button?"el-checkbox-button":"el-checkbox"},fieldValue:{get:function(){return this.value||[]},set:function(e){this.$emit("input",e)}}}},T=V,j=Object(c["a"])(T,C,O,!1,null,null,null),z=j.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-cascader",e._g(e._b({attrs:{options:e.treeOptions},model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"el-cascader",e.$attrs,!1),e.$listeners))},w=[],A=i("bcc2"),E={props:{options:{type:Array,default:function(){return[]}},parentId:{type:[Number,String],default:null},value:{type:Array,default:function(){return[]}},idKey:{type:String,default:"id"},parentIdKey:{type:String,default:"parentId"}},data:function(){return{}},computed:{treeOptions:function(){return Object(A["a"])(this.options,this.parentId,this.idKey,this.parentIdKey)},fieldValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},P=E,F=Object(c["a"])(P,I,w,!1,null,null,null),W=F.exports,B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-date-picker",e._g(e._b({model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"el-date-picker",e.$attrs,!1),e.$listeners))},N=[],M={props:{value:{type:[String,Array,Date]}},computed:{fieldValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},K=M,H=Object(c["a"])(K,B,N,!1,null,null,null),q=H.exports,D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-switch",e._g(e._b({model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"el-switch",e.$attrs,!1),e.$listeners))},L=[],R={props:{value:{type:Boolean}},computed:{fieldValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},X=R,U=Object(c["a"])(X,D,L,!1,null,null,null),J=U.exports,G=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-input-number",e._g(e._b({model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"el-input-number",e.$attrs,!1),e.$listeners))},Q=[],Y={props:{value:{type:Number}},computed:{fieldValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},Z=Y,ee=Object(c["a"])(Z,G,Q,!1,null,null,null),te=ee.exports,ie=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-rate",e._g(e._b({model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"el-rate",e.$attrs,!1),e.$listeners))},ne=[],le={props:{value:{type:Number}},computed:{fieldValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},re=le,se=Object(c["a"])(re,ie,ne,!1,null,null,null),ae=se.exports,oe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-slider",e._g(e._b({model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"el-slider",e.$attrs,!1),e.$listeners))},ue=[],ce={props:{value:{type:[Number,Array]}},computed:{fieldValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},de=ce,pe=Object(c["a"])(de,oe,ue,!1,null,null,null),fe=pe.exports,he=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i(e.component,e._g(e._b({tag:"component",model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"component",e.bindProps,!1),e.$listeners))},me=[],be=i("cebc"),ge=(i("456d"),i("ac6a"),{props:{value:{type:[String,Date,Array]},picker:Boolean,start:String,end:String,step:String,minTime:String,maxTime:String,selectableRange:[String,Array]},computed:{fieldValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},component:function(){return this.picker?"el-time-picker":"el-time-select"},bindProps:function(){var e={start:this.start,end:this.end,step:this.step,minTime:this.minTime,maxTime:this.maxTime,selectableRange:this.selectableRange,format:this.$attrs.format},t={};return Object.keys(e).forEach(function(i){e[i]&&(t[i]=e[i])}),Object(be["a"])({pickerOptions:t},this.$attrs)}}}),ye=ge,ve=Object(c["a"])(ye,he,me,!1,null,null,null),_e=ve.exports,xe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-upload",e._g(e._b({ref:"upload",staticClass:"xdh-form-upload",attrs:{"on-change":e.handleChange}},"el-upload",e.$attrs,!1),e.$listeners),[e._t("default",[e.$attrs.drag?[i("i",{staticClass:"el-icon-upload"}),i("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),i("em",[e._v("点击上传")])])]:[e.$attrs.autoUpload?i("el-button",{attrs:{size:e.size,type:"primary"}},[e._v(e._s(e.uploadText))]):e._e(),e._t("trigger",[e.$attrs.autoUpload?e._e():i("el-button",{attrs:{slot:"trigger",size:e.size,type:"primary"},slot:"trigger"},[e._v(e._s(e.selectText))])]),e.$attrs.autoUpload?e._e():i("el-button",{attrs:{size:e.size,type:"success"},on:{click:e.submitUpload}},[e._v(e._s(e.submitText)+"\n      ")])]]),i("div",{staticClass:"xdh-form-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.tipText))])],2)},$e=[],ke={inject:["xdhForm"],props:{value:{type:Array,default:function(){return[]}},uploadText:{type:String,default:"点击上传"},selectText:{type:String,default:"选取文件"},submitText:{type:String,default:"上传到服务器"},tipText:{type:String,default:"只能上传jpg/png文件，且不超过500kb"},size:{type:String}},methods:{submitUpload:function(){this.$refs.upload.submit()},handleChange:function(e,t){this.$emit("input",t),this.$attrs.onChange&&this.$attrs.onChange(e,t)}}},Se=ke,Ce=Object(c["a"])(Se,xe,$e,!1,null,null,null),Oe=Ce.exports,Ve=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"xdh-form-range"},[i(e.component,e._b({tag:"component",staticClass:"xdh-form-range__min",style:e.inputStyle,attrs:{placeholder:e.minPlaceholder,pickerOptions:e.minPickerOptions},model:{value:e.min,callback:function(t){e.min=t},expression:"min"}},"component",e.$attrs,!1)),i("span",{staticClass:"xdh-form-range__separator",style:e.separatorStyle},[e._v(e._s(e.separator))]),i(e.component,e._b({tag:"component",staticClass:"xdh-form-range__max",style:e.inputStyle,attrs:{placeholder:e.maxPlaceholder,pickerOptions:e.maxPickerOptions},model:{value:e.max,callback:function(t){e.max=t},expression:"max"}},"component",e.$attrs,!1))],1)},Te=[],je=(i("6762"),i("2fdb"),{number:"el-input-number",text:"el-input",date:"el-date-picker",time:"el-time-select",timePicker:"el-time-picker"}),ze={props:{value:{type:Array,default:function(){return[]}},dataType:{type:String,default:"text",validator:function(e){return["number","date","time","text","timePicker"].includes(e)}},minPlaceholder:{type:String,default:"最小值"},maxPlaceholder:{type:String,default:"最大值"},separator:{type:String,default:"-"},separatorWidth:{type:[Number,String],default:12}},data:function(){return{min:this.value[0],max:this.value[1]}},watch:{min:function(e){this.$emit("input",[e,this.max])},max:function(e){this.$emit("input",[this.min,e])},value:function(e){this.min=e[0],this.max=e[1]}},computed:{component:function(){return je[this.dataType]},separatorStyle:function(){return{width:"".concat(parseInt(this.separatorWidth),"px")}},inputStyle:function(){return{width:"calc(50% - ".concat(parseInt(this.separatorWidth)/2,"px)")}},minPickerOptions:function(){var e=this;return this.$attrs.pickerOptions&&this.$attrs.pickerOptions.disabledDate?this.$attrs.pickerOptions:Object(be["a"])({},this.$attrs.pickerOptions,{disabledDate:function(t){return!!e.max&&Date.parse(e.max)<t.getTime()}})},maxPickerOptions:function(){var e=this;return this.$attrs.pickerOptions&&this.$attrs.pickerOptions.disabledDate?this.$attrs.pickerOptions:Object(be["a"])({},this.$attrs.pickerOptions,{disabledDate:function(t){return!!e.min&&Date.parse(e.min)>t.getTime()}})}}},Ie=ze,we=Object(c["a"])(Ie,Ve,Te,!1,null,null,null),Ae=we.exports,Ee=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"xdh-form-tag"},[e._l(e.fieldValue,function(t,n){return i("el-tag",{key:n,attrs:{type:e.theme,closable:e.closable,"disable-transitions":!1},on:{close:e.handleClose},nativeOn:{click:function(i){return e.handleClick(t)}}},[e._v(e._s(t)+"\n  ")])}),e.inputVisible?i("el-input",{ref:"saveTagInput",staticClass:"xdh-form-tag__input",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),e.handleInputConfirm(t))}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):i("el-button",{staticClass:"xdh-form-tag__new",attrs:{size:"small",plain:"",icon:"el-icon-plus",type:e.theme},on:{click:e.showInput}},[e._v(e._s(e.addText)+"\n  ")])],2)},Pe=[],Fe=i("75fc"),We={props:{value:{type:Array,default:function(){return[]}},theme:{type:String,default:"",validator:function(e){return["success","info","warning","danger",""].includes(e)}},closable:{type:Boolean,default:!0},addText:{type:String,default:"添加"}},data:function(){return{inputValue:"",inputVisible:!1}},computed:{fieldValue:{get:function(){return this.value||[]},set:function(e){this.$emit("input",e)}}},methods:{handleClick:function(e){this.$emit("click",e)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick(function(t){e.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var e=this.inputValue;e&&(this.fieldValue=[].concat(Object(Fe["a"])(this.fieldValue),[e]),this.$emit("add",e,this.fieldValue)),this.inputVisible=!1,this.inputValue=""},handleClose:function(e){var t=Object(Fe["a"])(this.fieldValue);t.splice(t.indexOf(e),1),this.fieldValue=t,this.$emit("remove",e,this.fieldValue)}}},Be=We,Ne=Object(c["a"])(Be,Ee,Pe,!1,null,null,null),Me=Ne.exports,Ke=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-color-picker",e._g(e._b({model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"el-color-picker",e.$attrs,!1),e.$listeners))},He=[],qe={props:{value:{type:Number}},computed:{fieldValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},De=qe,Le=Object(c["a"])(De,Ke,He,!1,null,null,null),Re=Le.exports,Xe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("xdh-ckeditor",e._g(e._b({model:{value:e.fieldValue,callback:function(t){e.fieldValue=t},expression:"fieldValue"}},"xdh-ckeditor",e.$attrs,!1),e.$listeners))},Ue=[],Je=function(){return{component:i.e("chunk-eba22f92").then(i.bind(null,"bbfe")),loading:{template:'<div class="xdh-async-component xdh-ckeditor__loading">正在努力加载中...</div>'},error:{template:'<div class="xdh-async-component xdh-ckeditor__error">图表加载发生错误！请尝试刷新页面。</div>'},delay:50,timeout:3e4}},Ge={components:{XdhCkeditor:Je},props:{value:{type:String,default:""}},computed:{fieldValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},Qe=Ge,Ye=Object(c["a"])(Qe,Xe,Ue,!1,null,null,null),Ze=Ye.exports,et=i("5b94"),tt=i("fbac"),it=i("89df"),nt={switch:J,input:p,select:y,radio:S,checkbox:z,cascader:W,date:q,time:_e,divider:r["a"],number:te,rate:ae,slider:fe,upload:Oe,range:Ae,tag:Me,color:Re,editor:Ze,inputTag:et["a"],tree:tt["a"]},lt={name:"XdhFormItem",inject:{xdhForm:{default:null}},props:{type:{type:String,default:"input",validator:function(e){return!!nt[e]}},prop:{type:[String,Number]},dict:String,options:{type:Array,default:function(){return[]}},props:{type:Object,default:function(){return{}}},contentWidth:{type:[Number,String]},depend:{type:String},dependValue:{},block:{type:Boolean,default:!1},rules:{type:[Array,Object]},value:{}},data:function(){return{optionsList:Object(it["e"])(this.options)}},computed:{parent:function(){return it["c"].call(this)},extendAttrs:function(){return it["b"].call(this)},labelWidth:function(){return this.extendAttrs.labelWidth||""},fieldValue:{get:function(){var e=this.parent.currentModel;return e?e[this.prop]:null},set:function(e){var t=this.parent.currentModel;this.$set(t,this.prop,e)}},itemClasses:function(){return[this.extendAttrs.validateMsg?"xdh-validate--".concat(this.extendAttrs.validateMsg):"",{"is-custom-width":!!this.contentWidth,"is-depend":!!this.depend,"is-block":this.block,"is-label-width":!!this.labelWidth}]},isDivider:function(){return"divider"===this.type},isShowField:function(){if(!this.depend||this.depend===this.prop||this.xdhForm.designMode)return!0;var e=this.parent.currentModel[this.depend];return e===this.dependValue},checkRules:function(){if(!this.rules)return null;var e=Array.isArray(this.rules)?this.rules:[].concat(this.rules);return e.map(function(e){return e.pattern&&"string"===typeof e.pattern&&(e.pattern=new RegExp(e.pattern)),e})},mergeAttrs:function(){var e=this,t=["label","labelWidth","size"],i={};return t.forEach(function(t){e.extendAttrs[t]&&(i[t]=e.extendAttrs[t])}),i}},watch:{options:function(e){this.dict||(this.optionsList=Object(it["e"])(e))},dict:function(){this.loadOptions()},isShowField:function(e){var t=this;this.$nextTick(function(){e&&t.init()})},fieldValue:function(e){this.$emit("input",e)},value:function(e){this.fieldValue=e}},methods:{init:function(){!this.isDivider&&this.$el&&this.$el.querySelector&&(this.contentEl=this.$el.querySelector(".el-form-item__content"),this.setContentWidth(this.contentEl))},loadOptions:function(){var e=this;if(this.dict){var t=this.xdhForm.dictMap[this.dict];t?this.optionsList=t:this.xdhForm.load&&this.xdhForm.load(this).then(function(t){e.optionsList=t})}},getLabelWidth:function(){return Math.max(Number.parseInt(this.mergeAttrs.labelWidth||0),0)},setContentWidth:function(e){if(e)if(this.block){var t=this.getLabelWidth();e.style.width="calc(100% - ".concat(t,"px)")}else if("inline"in this.extendAttrs)if(this.extendAttrs.inlineSize){var i={large:600,medium:500,small:300},n=this.getLabelWidth(),l=Number.parseInt(this.contentWidth)||i[this.extendAttrs.inlineSize]-n;e.style.width="".concat(l,"px")}else e.style.width="auto"},delaySetContentWidth:function(e){var t=this;this.$nextTick(function(){t.setContentWidth(e)})},clearValue:function(){this.fieldValue=void 0;var e=this.parent.currentModel;e&&this.prop&&delete e[this.prop],Array.isArray(e)&&Number.isInteger(this.prop)&&e.splice(this.prop,1)}},mounted:function(){this.init(),this.$refs.body&&this.$el.appendChild(this.$refs.body)},created:function(){this.components=nt,this.loadOptions(),"undefined"!==typeof this.value&&(this.fieldValue=this.value)},updated:function(){this.delaySetContentWidth(this.contentEl)},beforeDestroy:function(){this.contentEl=null,this.$refs.body&&this.$refs.body.parentNode.removeChild(this.$refs.body),this.clearValue()}},rt=lt,st=Object(c["a"])(rt,n,l,!1,null,null,null);t["a"]=st.exports},"89df":function(e,t,i){"use strict";i.d(t,"a",function(){return s}),i.d(t,"e",function(){return a}),i.d(t,"c",function(){return o}),i.d(t,"d",function(){return u}),i.d(t,"b",function(){return c});var n=i("cebc"),l=(i("7f7f"),i("6762"),i("7618"));i("456d"),i("a481"),i("28a5"),i("ac6a"),i("4917");function r(e){var t=/-[\w]?/g,i=e.match(t)||[];return i.forEach(function(t){var i=t.split("")[1].toUpperCase();e=e.replace(t,i)}),e}function s(e){var t={};return Object.keys(e).forEach(function(i){var n=e[i];"undefined"!==typeof n&&""!==n&&(t[r(i)]=n)}),t}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(function(e){return"object"===Object(l["a"])(e)?e:{label:e,value:e}})}function o(){var e=["XdhForm","XdhFormObject","XdhFormArray"],t=this.$parent;while(t&&!e.includes(t.$options.name))t=t.$parent;return t}function u(){var e=["XdhForm","XdhFormGroup","XdhFormObject","XdhFormArray"],t=this.$parent;while(t&&!e.includes(t.$options.name))t=t.$parent;return t}function c(){var e=u.call(this);return Object(n["a"])({},s(e.extendAttrs||{}),s(this.$props),s(this.$attrs))}},"9c12":function(e,t,i){var n=i("d3f4"),l=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&l(e)===e}},b3a4:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"xdh-form-divider"},[i("el-divider",{attrs:{direction:"horizontal","content-position":e.contentPosition}},[e._t("default",[e.icon?i("i",{class:e.icon}):e._e(),e._v("\n      "+e._s(e.content)+"\n    ")])],2),e._t("body")],2)},l=[],r=(i("6762"),i("2fdb"),{props:{icon:String,contentPosition:{type:String,default:"center",validator:function(e){return["left","right","center"].includes(e)}},content:{type:String,default:""}}}),s=r,a=i("2877"),o=Object(a["a"])(s,n,l,!1,null,null,null);t["a"]=o.exports},bcc2:function(e,t,i){"use strict";i.d(t,"a",function(){return n});i("6b54"),i("ac6a"),i("55dd"),i("cebc");function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"parentId",l=Object.create(null),r=[];for(var s in e.forEach(function(e){l[e[i]]=e}),l){var a=l[s];if(a[n]===t)r.push(a);else{var o=l[a[n]];o&&(o.children||(o.children=[]),o.children.push(a))}}return r}},fbac:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.classes},[i("el-popover",{attrs:{"popper-class":"xdh-form-tree__popper",placement:"bottom-start",width:parseInt(e.popperWidth),trigger:"manual"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("div",{staticClass:"xdh-form-tree__wrapper"},[i("el-row",{staticClass:"xdh-form-tree__content",style:{height:parseInt(e.popperHeight)+"px"},attrs:{gutter:0}},[i("el-col",{staticClass:"xdh-form-tree__left",attrs:{span:e.showSelected?16:24}},[i("div",{staticClass:"xdh-form-tree__filter"},[i("el-input",{attrs:{size:"small",placeholder:"请输入过滤关键字","prefix-icon":"el-icon-search",clearable:""},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),i("div",{staticClass:"xdh-form-tree__list"},[i("el-tree",e._b({ref:"elTree",staticClass:"xdh-tree",attrs:{data:e.treeOptions,"filter-node-method":e.filterNode},on:{check:e.handleCheck,"current-change":e.handleChange}},"el-tree",e.treeProps,!1))],1)]),e.showSelected?i("el-col",{staticClass:"xdh-form-tree__right",attrs:{span:8}},[e._l(e.checkNodes,function(t,n){return i("el-tag",{key:n,staticClass:"xdh-form-tree__selected",attrs:{size:"small",closable:""},on:{close:function(i){return e.handleCheckedTagClose(t,n)}}},[i("span",[e._v(e._s(t[e.labelKey]))])])}),0===e.checkNodes.length?i("div",{staticClass:"xdh-form-tree__empty"},[e._v("未选择任何节点")]):e._e()],2):e._e()],1),i("el-row",{staticClass:"xdh-form-tree__footer",attrs:{gutter:0}},[i("el-button",{attrs:{size:"small",type:"default"},on:{click:e.closePopper}},[e._v("取消")]),i("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submit}},[e._v("确定")])],1)],1),i("input-tag",{attrs:{slot:"reference",value:e.textValues,closable:e.closable,"collapse-tags":e.collapseTags,"allow-create":!1,active:e.visible,icon:"el-icon-arrow-down",disabled:e.disabled,readonly:e.readonly,placeholder:e.placeholder},on:{"tag-click":e.showPopper,"close-tag":e.handleCloseTag},nativeOn:{click:function(t){return t.stopPropagation(),e.showPopper(t)}},slot:"reference"})],1)],1)},l=[],r=(i("6762"),i("2fdb"),i("cebc")),s=i("75fc"),a=(i("c5f6"),i("5b94")),o=i("bcc2"),u=i("5924"),c={components:{InputTag:a["a"]},props:{value:{type:Array,default:function(){return[]}},popperWidth:{type:[String,Number],default:500},popperHeight:{type:[String,Number],default:400},options:{type:Array,default:function(){return[]}},parentId:{type:[String,Number],default:null},multiple:Boolean,elTreeProps:Object,showSelected:Boolean,placeholder:{type:String,default:"请选择"},disabled:Boolean,readonly:Boolean,closable:{type:Boolean,default:!0},collapseTags:Boolean,idKey:{type:String,default:"id"},parentIdKey:{type:String,default:"parentId"},labelKey:{type:String,default:"label"}},data:function(){return{visible:!1,query:"",currentValue:Object(s["a"])(this.value)}},computed:{classes:function(){return{"xdh-form-tree":!0,"xdh-form-tree--disabled":this.disabled,"xdh-form-tree--readonly":this.readonly}},treeOptions:function(){return Object(o["a"])(this.options,this.parentId,this.idKey,this.parentIdKey)},treeProps:function(){return Object(r["a"])({nodeKey:this.idKey,defaultCheckedKeys:Object(s["a"])(this.value),showCheckbox:this.multiple,highlightCurrent:!this.multiple,defaultExpandedKeys:Object(s["a"])(this.value)},this.elTreeProps)},textValues:function(){var e=this;return this.options.filter(function(t){return e.value.includes(t[e.idKey])}).map(function(t){return t[e.labelKey]})},checkNodes:function(){var e=this;return this.options.filter(function(t){return e.currentValue.includes(t[e.idKey])})}},watch:{value:function(e){this.currentValue=Object(s["a"])(e)},query:function(e){this.$refs.elTree.filter(e)}},methods:{setChecked:function(){this.multiple?this.$refs.elTree.setCheckedKeys(this.currentValue):this.$refs.elTree.setCurrentKey(this.currentValue[0])},showPopper:function(){this.disabled||this.readonly||(this.visible?this.visible=!1:(this.currentValue=Object(s["a"])(this.value),this.setChecked(),this.visible=!0))},closePopper:function(){this.visible=!1},handleCheck:function(e,t){this.multiple&&(this.currentValue=this.removeCheckedParent(t.checkedKeys,t.checkedNodes))},handleChange:function(e){this.multiple||(this.currentValue=[e[this.idKey]])},handleCheckedTagClose:function(e,t){this.currentValue.splice(t,1),this.setChecked()},removeCheckedParent:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return i.filter(function(i){return!t.includes(i[e.parentIdKey])}).map(function(t){return t[e.idKey]})},filterNode:function(e,t){return!e||t[this.labelKey].includes(e)},submit:function(){var e=Object(s["a"])(this.currentValue);this.$emit("input",e),this.$emit("change",e),this.visible=!1},handleCloseTag:function(e){var t=Object(s["a"])(this.value);t.splice(e,1),this.$emit("input",t),this.$emit("change",t),this.visible=!1}},mounted:function(){this.body=document.body,this.proxyClosePopper=this.closePopper.bind(this),Object(u["on"])(this.body,"click",this.proxyClosePopper)},beforeDestroy:function(){this.body&&(Object(u["off"])(this.body,"click",this.proxyClosePopper),this.body=null)}},d=c,p=i("2877"),f=Object(p["a"])(d,n,l,!1,null,null,null);t["a"]=f.exports}}]);
//# sourceMappingURL=chunk-b1bac206.89eb07d3.js.map