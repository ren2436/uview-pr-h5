(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsC-layout-index"],{"0199":function(t,e,i){"use strict";i.r(e);var n=i("7b91"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"20be":function(t,e,i){"use strict";i.r(e);var n=i("4468"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"2bb5":function(t,e,i){var n=i("534f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("30dad187",n,!0,{sourceMap:!1,shadowMode:!1})},"2f38":function(t,e,i){var n=i("b474");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1ceff5ca",n,!0,{sourceMap:!1,shadowMode:!1})},4468:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{span:3,offset:0,justify:"start"}},methods:{click:function(){console.log("col click")},rowClick:function(){console.log("row click")},spanChange:function(t){switch(t){case 0:this.span=1;break;case 1:this.span=2;break;case 2:this.span=3;break;case 3:this.span=4;break;case 4:this.span=5;break}},offsetChange:function(t){switch(t){case 0:this.offset=0;break;case 1:this.offset=1;break;case 2:this.offset=2;break;case 3:this.offset=3;break}},justifyChange:function(t){switch(t){case 0:this.justify="start";break;case 1:this.justify="end";break;case 2:this.justify="around";break;case 3:this.justify="between";break}}}};e.default=n},4720:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-item u-line-1",class:[t.noBorderRight(n),"u-item-"+n],style:[t.itemStyle(n)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(n)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(n)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},r=[]},"534f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.demo-layout[data-v-e9d05aa0]{height:%?70?%;border-radius:%?8?%;margin:%?20?% 0}.bg-purple[data-v-e9d05aa0]{background:#d3dce6}.bg-purple-light[data-v-e9d05aa0]{background:#e5e9f2}.bg-purple-dark[data-v-e9d05aa0]{background:#99a9bf}.u-demo-area[data-v-e9d05aa0] .u-row{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}',""]),t.exports=e},"55fd":function(t,e,i){"use strict";i.r(e);var n=i("7119"),a=i("20be");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("c014");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"e9d05aa0",null,!1,n["a"],o);e["default"]=u.exports},5658:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-col",class:["u-col-"+t.span],style:{padding:"0 "+Number(t.gutter)/2+"rpx",marginLeft:100/12*t.offset+"%",flex:"0 0 "+100/12*t.span+"%",alignItems:t.uAlignItem,justifyContent:t.uJustify,textAlign:t.textAlign},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},7119:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uRow:i("af9c").default,uCol:i("89d1").default,uSubsection:i("a041").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-demo"},[i("v-uni-view",{staticClass:"u-demo-wrap"},[i("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),i("v-uni-view",{staticClass:"u-demo-area"},[i("u-row",{attrs:{justify:t.justify},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rowClick.apply(void 0,arguments)}}},[i("u-col",{attrs:{span:t.span,offset:t.offset,stop:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"demo-layout bg-purple-dark"})],1),i("u-col",{attrs:{span:t.span,offset:t.offset}},[i("v-uni-view",{staticClass:"demo-layout bg-purple-dark"})],1),i("u-col",{attrs:{span:t.span,offset:t.offset}},[i("v-uni-view",{staticClass:"demo-layout bg-purple-dark"})],1)],1)],1)],1),i("v-uni-view",{staticClass:"u-config-wrap"},[i("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("每个栅格占用栏数(演示共3个栅格)")]),i("u-subsection",{attrs:{current:2,list:[1,2,3,4]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.spanChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("分栏偏移")]),i("u-subsection",{attrs:{list:[0,1,2,3]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.offsetChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("水平排列方式(微信小程序无效)")]),i("u-subsection",{attrs:{list:["start","end","around","between"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.justifyChange.apply(void 0,arguments)}}})],1)],1)],1)},r=[]},7352:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-col-0[data-v-b489f00e]{width:0}.u-col-1[data-v-b489f00e]{width:calc(100%/12)}.u-col-2[data-v-b489f00e]{width:calc(100%/12 * 2)}.u-col-3[data-v-b489f00e]{width:calc(100%/12 * 3)}.u-col-4[data-v-b489f00e]{width:calc(100%/12 * 4)}.u-col-5[data-v-b489f00e]{width:calc(100%/12 * 5)}.u-col-6[data-v-b489f00e]{width:calc(100%/12 * 6)}.u-col-7[data-v-b489f00e]{width:calc(100%/12 * 7)}.u-col-8[data-v-b489f00e]{width:calc(100%/12 * 8)}.u-col-9[data-v-b489f00e]{width:calc(100%/12 * 9)}.u-col-10[data-v-b489f00e]{width:calc(100%/12 * 10)}.u-col-11[data-v-b489f00e]{width:calc(100%/12 * 11)}.u-col-12[data-v-b489f00e]{width:calc(100%/12 * 12)}',""]),t.exports=e},7488:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-row",props:{gutter:{type:[String,Number],default:20},justify:{type:String,default:"start"},align:{type:String,default:"center"},stop:{type:Boolean,default:!0}},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(t){this.$emit("click")}}};e.default=n},"7b91":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-col",props:{span:{type:[Number,String],default:12},offset:{type:[Number,String],default:0},justify:{type:String,default:"start"},align:{type:String,default:"center"},textAlign:{type:String,default:"left"},stop:{type:Boolean,default:!0}},data:function(){return{gutter:20}},created:function(){this.parent=!1},mounted:function(){this.parent=this.$u.$parent.call(this,"u-row"),this.parent&&(this.gutter=this.parent.gutter)},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align}},methods:{click:function(t){this.$emit("click")}}};e.default=n},"84a50":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-row",style:{alignItems:t.uAlignItem,justifyContent:t.uJustify},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("default")],2)},r=[]},8705:function(t,e,i){var n=i("b8dd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("80463422",n,!0,{sourceMap:!1,shadowMode:!1})},"89d1":function(t,e,i){"use strict";i.r(e);var n=i("5658"),a=i("0199");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("bbcf");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"b489f00e",null,!1,n["a"],o);e["default"]=u.exports},a041:function(t,e,i){"use strict";i.r(e);var n=i("4720"),a=i("c1b7");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("ef3c");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"0b7aedc5",null,!1,n["a"],o);e["default"]=u.exports},a410:function(t,e,i){"use strict";i.r(e);var n=i("7488"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},a624:function(t,e,i){var n=i("7352");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("18c86b3b",n,!0,{sourceMap:!1,shadowMode:!1})},af9c:function(t,e,i){"use strict";i.r(e);var n=i("84a50"),a=i("a410");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("fdb2");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"1c6ef8e2",null,!1,n["a"],o);e["default"]=u.exports},b474:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-row[data-v-1c6ef8e2]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-flex-wrap:wrap;flex-wrap:wrap}',""]),t.exports=e},b8dd:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-subsection[data-v-0b7aedc5]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;position:relative}.u-item[data-v-0b7aedc5]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:%?26?%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-0b7aedc5]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-0b7aedc5]{border-right:none!important}.u-item-first[data-v-0b7aedc5]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-0b7aedc5]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-0b7aedc5]{-webkit-transition:all .35s;transition:all .35s;color:#303133;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:3}',""]),t.exports=e},bbcf:function(t,e,i){"use strict";var n=i("a624"),a=i.n(n);a.a},c014:function(t,e,i){"use strict";var n=i("2bb5"),a=i.n(n);a.a},c1b7:function(t,e,i){"use strict";i.r(e);var n=i("c3b6"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},c3b6:function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=typeof t){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,n){n<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px"),this.itemBgStyle.width=this.listInfo[this.currentIndex].width+"px"}}};e.default=n},ef3c:function(t,e,i){"use strict";var n=i("8705"),a=i.n(n);a.a},fdb2:function(t,e,i){"use strict";var n=i("2f38"),a=i.n(n);a.a}}]);