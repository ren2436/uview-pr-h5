(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsA-navbar-index"],{"013f":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-badge",props:{type:{type:String,default:"error"},size:{type:String,default:"default"},isDot:{type:Boolean,default:!1},count:{type:[Number,String]},overflowCount:{type:Number,default:99},showZero:{type:Boolean,default:!1},offset:{type:Array,default:function(){return[20,20]}},absolute:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:"24"},color:{type:String,default:"#ffffff"},bgColor:{type:String,default:""},isCenter:{type:Boolean,default:!1}},computed:{boxStyle:function(){var t={};return this.isCenter?(t.top=0,t.right=0,t.transform="translateY(-50%) translateX(50%)"):(t.top=this.offset[0]+"rpx",t.right=this.offset[1]+"rpx",t.transform="translateY(0) translateX(0)"),"mini"==this.size&&(t.transform=t.transform+" scale(0.8)"),t},showText:function(){return this.isDot?"":this.count>this.overflowCount?"".concat(this.overflowCount,"+"):this.count},show:function(){return 0!=this.count||0!=this.showZero}}};e.default=a},"258e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-navbar[data-v-42d92bec]{width:100%}.u-navbar-fixed[data-v-42d92bec]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-42d92bec]{width:100%}.u-navbar-inner[data-v-42d92bec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-42d92bec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-42d92bec]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-42d92bec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-42d92bec]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-42d92bec]{line-height:%?60?%;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-42d92bec]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-42d92bec]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},"453f":function(t,e,i){var a=i("5a6f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("16f15f8f",a,!0,{sourceMap:!1,shadowMode:!1})},"4b51":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uNavbar:i("8b50").default,uIcon:i("1b86").default,uSearch:i("08cc").default,uBadge:i("de1f").default,uToast:i("9146").default,uSubsection:i("a041").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("u-navbar",{attrs:{"title-color":"#fff","back-icon-color":"#ffffff","is-fixed":t.isFixed,"is-back":t.isBack,background:t.background,"back-text-style":{color:"#fff"},title:t.title,"back-icon-name":t.backIconName,"back-text":t.backText}},[t.slotLeft?i("v-uni-view",{staticClass:"navbar-left",attrs:{slot:"left"},slot:"left"},[i("v-uni-view",{staticClass:"message-box left-item"},[i("u-icon",{attrs:{name:"arrow-leftward",color:"#ffffff",size:"38"}})],1),i("v-uni-view",{staticClass:"dot-box left-item"},[i("u-icon",{attrs:{name:"home-fill",color:"#ffffff",size:"38"}})],1)],1):t._e(),t.useSlot?i("v-uni-view",{staticClass:"slot-wrap"},[t.search?i("v-uni-view",{staticClass:"search-wrap"},[i("u-search",{attrs:{"show-action":t.showAction,height:"56","action-style":{color:"#fff"}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1):t._e(),t.rightSlot?i("v-uni-view",{staticClass:"navbar-right"},[i("v-uni-view",{staticClass:"message-box right-item"},[i("u-icon",{attrs:{name:"chat",size:"38"}}),i("u-badge",{attrs:{count:"18",size:"mini",offset:[-15,-15]}})],1),i("v-uni-view",{staticClass:"dot-box right-item"},[i("u-icon",{attrs:{name:"calendar-fill",size:"38"}}),i("u-badge",{attrs:{size:"mini","is-dot":!0,offset:[-6,-6]}})],1)],1):t._e(),t.custom?i("v-uni-view",{staticClass:"map-wrap"},[i("u-icon",{attrs:{name:"map",color:"#ffffff",size:"24"}}),i("v-uni-text",{staticClass:"map-wrap-text"},[t._v("轻舟已过万重山")]),i("u-icon",{attrs:{name:"arrow-down-fill",color:"#ffffff",size:"22"}})],1):t._e()],1):t._e(),t.slotRight?i("v-uni-view",{staticClass:"navbar-right",attrs:{slot:"right"},slot:"right"},[i("v-uni-view",{staticClass:"message-box right-item"},[i("u-icon",{attrs:{name:"chat",size:"38"}}),i("u-badge",{attrs:{count:"18",size:"mini",offset:[-15,-15]}})],1),i("v-uni-view",{staticClass:"dot-box right-item"},[i("u-icon",{attrs:{name:"email",size:"38"}}),i("u-badge",{attrs:{size:"mini","is-dot":!0,offset:[-6,-6]}})],1)],1):t._e()],1),i("v-uni-view",{staticClass:"u-demo"},[i("v-uni-view",{staticClass:"u-demo-wrap"},[i("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),i("v-uni-view",{staticClass:"u-demo-area"},[i("u-toast",{ref:"uToast"}),i("v-uni-view",{staticClass:"u-no-demo-here"},[t._v("查看顶部导航栏效果")])],1)],1),i("v-uni-view",{staticClass:"u-config-wrap"},[i("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("标题长度")]),i("u-subsection",{attrs:{list:["短","中","长"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.titleChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("隐藏左侧返回区域")]),i("u-subsection",{attrs:{current:"1",list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.backChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("自定义左侧内容")]),i("u-subsection",{attrs:{current:"1",list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.leftChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("自定义左侧插槽，需要将is-back设置为false")]),i("u-subsection",{attrs:{current:t.slotLeftCurrent,list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.leftSlotChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("自定义右侧内容")]),i("u-subsection",{attrs:{current:t.slotRightCurrent,list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.rightChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("传入整体slot")]),i("u-subsection",{attrs:{list:["无","搜索框","搜索+按钮","搜索+图标"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.searchChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("完全自定义传入内容")]),i("u-subsection",{attrs:{current:"1",list:["是","否"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.customChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"u-config-item"},[i("v-uni-view",{staticClass:"u-item-title"},[t._v("背景色")]),i("u-subsection",{attrs:{list:["渐变","#39CCCC","#B471CC","#001f3f"]},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bgColorChange.apply(void 0,arguments)}}})],1)],1)],1)],1)},s=[]},"5a6f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-demo[data-v-139112bb]{height:calc(100% - 44px);height:calc(100% - 44px - constant(safe-area-inset-top));height:calc(100% - 44px - env(safe-area-inset-top))}.wrap[data-v-139112bb]{padding:%?24?%}.navbar-right[data-v-139112bb]{margin-right:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex}.search-wrap[data-v-139112bb]{margin:0 %?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.right-item[data-v-139112bb]{margin:0 %?12?%;position:relative;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex}.slot-wrap[data-v-139112bb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.map-wrap[data-v-139112bb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:4px 6px;background-color:hsla(0,0%,94.1%,.35);color:#fff;font-size:%?22?%;border-radius:%?100?%;margin-left:%?30?%}.map-wrap-text[data-v-139112bb]{padding:0 %?6?%}.navbar-left[data-v-139112bb]{padding:%?14?% %?14?% %?14?% %?24?%;display:-webkit-box;display:-webkit-flex;display:flex}.left-item[data-v-139112bb]{margin:0 %?12?%}',""]),t.exports=e},"5d07":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync(),n={},s={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:n,statusBarHeight:a.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=s},"5ede":function(t,e,i){"use strict";var a=i("9bb1"),n=i.n(a);n.a},6666:function(t,e,i){"use strict";i.r(e);var a=i("5d07"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},8736:function(t,e,i){"use strict";i.r(e);var a=i("4b51"),n=i("a60b");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("b3fe");var o,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"139112bb",null,!1,a["a"],o);e["default"]=l.exports},"8b50":function(t,e,i){"use strict";i.r(e);var a=i("f2f6"),n=i("6666");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("5ede");var o,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"42d92bec",null,!1,a["a"],o);e["default"]=l.exports},"8dbf":function(t,e,i){"use strict";i.r(e);var a=i("013f"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"9112e":function(t,e,i){"use strict";var a=i("cb4a"),n=i.n(a);n.a},"9bb1":function(t,e,i){var a=i("258e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("adcd93b4",a,!0,{sourceMap:!1,shadowMode:!1})},a60b:function(t,e,i){"use strict";i.r(e);var a=i("dcd8"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},b3fe:function(t,e,i){"use strict";var a=i("453f"),n=i.n(a);n.a},bfe5:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-badge[data-v-36bd14a0]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?24?%;padding:%?4?% %?8?%;border-radius:%?100?%;z-index:9}.u-badge--bg--primary[data-v-36bd14a0]{background-color:#2979ff}.u-badge--bg--error[data-v-36bd14a0]{background-color:#fa3534}.u-badge--bg--success[data-v-36bd14a0]{background-color:#19be6b}.u-badge--bg--info[data-v-36bd14a0]{background-color:#909399}.u-badge--bg--warning[data-v-36bd14a0]{background-color:#f90}.u-badge-dot[data-v-36bd14a0]{height:%?16?%;width:%?16?%;border-radius:%?100?%;line-height:1}.u-badge-mini[data-v-36bd14a0]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.u-info[data-v-36bd14a0]{background-color:#909399;color:#fff}',""]),t.exports=e},cb4a:function(t,e,i){var a=i("bfe5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3067581f",a,!0,{sourceMap:!1,shadowMode:!1})},dcd8:function(t,e,i){"use strict";i("ac1f"),i("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"新闻",backText:"返回",backIconName:"nav-back",right:!1,showAction:!1,rightSlot:!1,useSlot:!1,background:{"background-image":"linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))"},isBack:!0,search:!1,custom:!1,isFixed:!0,keyword:"",slotRight:!0,slotLeft:!0}},computed:{slotRightCurrent:function(){return this.slotRight?0:1},slotLeftCurrent:function(){return this.slotLeft?0:1}},methods:{titleChange:function(t){this.useSlot=!1,this.title=0==t?"新闻":1==t?"新闻列表":"雨打梨花深闭门，忘了青春，误了青春"},leftChange:function(t){0==t?(this.backText="",this.backIconName="arrow-leftward"):(this.backText="返回",this.backIconName="arrow-left")},leftSlotChange:function(t){0==t?(this.slotLeft=!0,this.useSlot=!1,this.isBack=!1):(this.slotLeft=!1,this.isBack=!0)},searchChange:function(t){this.title=null,this.useSlot=!0,this.search=!1,this.custom=!1,0==t?(this.title="新闻",this.useSlot=!1,this.rightSlot=!1):1==t?(this.showAction=!1,this.useSlot=!0,this.rightSlot=!1,this.search=!0,this.slotRight=!1):2==t?(this.useSlot=!0,this.showAction=!0,this.rightSlot=!1,this.search=!0,this.slotRight=!1):(this.useSlot=!0,this.search=!0,this.showAction=!1,this.rightSlot=!0,this.slotRight=!1)},backChange:function(t){this.isBack=!!t},bgColorChange:function(t){if(this.background={},0==t)this.background={"background-image":"linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))"};else{var e=1==t?"#39CCCC":2==t?"#B471CC":"#001f3f";this.background={background:e}}},rightChange:function(t){0==t?(this.slotRight=!0,this.useSlot=!1):this.slotRight=!1},customChange:function(t){this.search=!1,this.rightSlot=!1,0==t?(this.custom=!0,this.title=null,this.isBack=!1,this.useSlot=!0):(this.useSlot=!1,this.title="新闻",this.isBack=!0)}}};e.default=a},de1f:function(t,e,i){"use strict";i.r(e);var a=i("e1d4"),n=i("8dbf");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("9112e");var o,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"36bd14a0",null,!1,a["a"],o);e["default"]=l.exports},e1d4:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-badge",class:[t.isDot?"u-badge-dot":"","mini"==t.size?"u-badge-mini":"",t.type?"u-badge--bg--"+t.type:""],style:[{top:t.offset[0]+"rpx",right:t.offset[1]+"rpx",fontSize:t.fontSize+"rpx",position:t.absolute?"absolute":"static",color:t.color,backgroundColor:t.bgColor},t.boxStyle]},[t._v(t._s(t.showText))]):t._e()},s=[]},f2f6:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uIcon:i("1b86").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):i("v-uni-view",{staticClass:"u-slot-left"},[t._t("left")],2),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},s=[]}}]);