(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsC-countTo-index"],{"0430":function(t,i,e){"use strict";e.r(i);var n=e("d0b1"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"0f51":function(t,i,e){"use strict";e.r(i);var n=e("561c"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"110d":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-toast[data-v-64a5aab8]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-64a5aab8]{opacity:1}.u-icon[data-v-64a5aab8]{margin-right:%?10?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-64a5aab8]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-64a5aab8]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-64a5aab8]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-64a5aab8]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-64a5aab8]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-64a5aab8]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-64a5aab8]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-64a5aab8]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-64a5aab8]{color:#fff;background-color:#585858}',""]),t.exports=i},"1dcc":function(t,i,e){var n=e("7c80");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("3f016196",n,!0,{sourceMap:!1,shadowMode:!1})},2980:function(t,i,e){"use strict";var n=e("1dcc"),a=e.n(n);a.a},"46e1":function(t,i,e){"use strict";var n=e("b48e"),a=e.n(n);a.a},4720:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(i,n){return e("v-uni-view",{key:n,staticClass:"u-item u-line-1",class:[t.noBorderRight(n),"u-item-"+n],style:[t.itemStyle(n)],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.click(n)}}},[e("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(n)]},[t._v(t._s(i.name))])],1)})),e("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},o=[]},"54c6":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uToast:e("9146").default,uCountTo:e("bc15").default,uSubsection:e("a041").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-demo"},[e("v-uni-view",{staticClass:"u-demo-wrap"},[e("v-uni-view",{staticClass:"u-demo-title"},[t._v("演示效果")]),e("v-uni-view",{staticClass:"u-demo-area"},[e("u-toast",{ref:"uToast"}),e("v-uni-view",{staticClass:"u-no-demo-here"},[t._v("如果使用text-align: center对齐，数字滚动期间可能会抖动，见文档说明")]),e("v-uni-view",{staticClass:"count-to-demo"},[e("u-count-to",{ref:"uCountTo",staticClass:"count-to",attrs:{useEasing:t.useEasing,autoplay:t.autoplay,startVal:t.startVal,endVal:t.endVal,duration:t.duration,decimals:t.decimals,bold:t.bold},on:{end:function(i){arguments[0]=i=t.$handleEvent(i),t.end.apply(void 0,arguments)}}})],1)],1)],1),e("v-uni-view",{staticClass:"u-config-wrap"},[e("v-uni-view",{staticClass:"u-config-title u-border-bottom"},[t._v("参数配置")]),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[t._v("状态")]),e("u-subsection",{attrs:{current:t.current,list:["启动","暂停","继续","重置"]},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.statusChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[t._v("目标值")]),e("u-subsection",{attrs:{list:[608,5604,45617]},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.endValChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[t._v("滚动时间")]),e("u-subsection",{attrs:{current:"1",list:[1e3,2e3,3e3]},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.durationChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[t._v("显示小数")]),e("u-subsection",{attrs:{current:"1",list:["是","否"]},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.decimalsChange.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"u-config-item"},[e("v-uni-view",{staticClass:"u-item-title"},[t._v("字体加粗")]),e("u-subsection",{attrs:{current:"1",list:["是","否"]},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.boldChange.apply(void 0,arguments)}}})],1)],1)],1)},o=[]},"561c":function(t,i,e){"use strict";e("a9e3"),e("b680"),e("acd8"),e("ac1f"),e("5319"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-count-to",props:{startVal:{type:[Number,String],default:0},endVal:{type:[Number,String],default:0,required:!0},duration:{type:[Number,String],default:2e3},autoplay:{type:Boolean,default:!0},decimals:{type:[Number,String],default:0},useEasing:{type:Boolean,default:!0},decimal:{type:[Number,String],default:"."},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:50},bold:{type:Boolean,default:!1},separator:{type:String,default:""}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:Number(this.duration),startTime:null,timestamp:null,remaining:null,rAF:null,lastTime:0}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start()},methods:{easingFn:function(t,i,e,n){return e*(1-Math.pow(2,-10*t/n))*1024/1023+i},requestAnimationFrame:function(t){var i=(new Date).getTime(),e=Math.max(0,16-(i-this.lastTime)),n=setTimeout((function(){t(i+e)}),e);return this.lastTime=i+e,n},cancelAnimationFrame:function(t){clearTimeout(t)},start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=this.requestAnimationFrame(this.count)},reStart:function(){this.paused?(this.resume(),this.paused=!1):(this.stop(),this.paused=!0)},stop:function(){this.cancelAnimationFrame(this.rAF)},resume:function(){this.startTime=null,this.localDuration=this.remaining,this.localStartVal=this.printVal,this.requestAnimationFrame(this.count)},reset:function(){this.startTime=null,this.cancelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var i=t-this.startTime;this.remaining=this.localDuration-i,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(i,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(i,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(i/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(i/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),i<this.localDuration?this.rAF=this.requestAnimationFrame(this.count):this.$emit("end")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=Number(t),t=t.toFixed(Number(this.decimals)),t+="";var i=t.split("."),e=i[0],n=i.length>1?this.decimal+i[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))while(a.test(e))e=e.replace(a,"$1"+this.separator+"$2");return e+n},destroyed:function(){this.cancelAnimationFrame(this.rAF)}}};i.default=n},"7c80":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.count-to-demo[data-v-516aa97f]{text-align:center}',""]),t.exports=i},"805f":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-count-num[data-v-4847d5fb]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;text-align:center}',""]),t.exports=i},8705:function(t,i,e){var n=e("b8dd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("80463422",n,!0,{sourceMap:!1,shadowMode:!1})},9146:function(t,i,e){"use strict";e.r(i);var n=e("df8d"),a=e("bd1c");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("46e1");var r,s=e("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"64a5aab8",null,!1,n["a"],r);i["default"]=u.exports},"961b":function(t,i,e){"use strict";var n=e("d13e"),a=e.n(n);a.a},a041:function(t,i,e){"use strict";e.r(i);var n=e("4720"),a=e("c1b7");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("ef3c");var r,s=e("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"0b7aedc5",null,!1,n["a"],r);i["default"]=u.exports},a054:function(t,i,e){"use strict";e.r(i);var n=e("54c6"),a=e("0430");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("2980");var r,s=e("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"516aa97f",null,!1,n["a"],r);i["default"]=u.exports},b48e:function(t,i,e){var n=e("110d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("24da81cc",n,!0,{sourceMap:!1,shadowMode:!1})},b8dd:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-subsection[data-v-0b7aedc5]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;position:relative}.u-item[data-v-0b7aedc5]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:%?26?%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-0b7aedc5]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-0b7aedc5]{border-right:none!important}.u-item-first[data-v-0b7aedc5]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-0b7aedc5]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-0b7aedc5]{-webkit-transition:all .35s;transition:all .35s;color:#303133;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:3}',""]),t.exports=i},bc15:function(t,i,e){"use strict";e.r(i);var n=e("fb58"),a=e("0f51");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("961b");var r,s=e("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4847d5fb",null,!1,n["a"],r);i["default"]=u.exports},bd1c:function(t,i,e){"use strict";e.r(i);var n=e("f19b"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},c1b7:function(t,i,e){"use strict";e.r(i);var n=e("c3b6"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},c3b6:function(t,i,e){"use strict";e("99af"),e("d81d"),e("a9e3"),e("ac1f"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,i){if("object"!=typeof t){var e={width:0,name:t};return e}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(i){if("subsection"==t.mode){var e="";return i<t.list.length-1&&(e+=" u-none-border-right"),0==i&&(e+=" u-item-first"),i==t.list.length-1&&(e+=" u-item-last"),e}}},textStyle:function(){var t=this;return function(i){var e={};return"subsection"==t.mode?i==t.currentIndex?e.color="#ffffff":e.color=t.activeColor:i==t.currentIndex?e.color=t.activeColor:e.color=t.inactiveColor,i==t.currentIndex&&t.bold&&(e.fontWeight="bold"),e.fontSize=t.fontSize+"rpx",e}},itemStyle:function(){var t=this;return function(i){var e={};return"subsection"==t.mode&&(e.borderColor=t.activeColor,e.borderWidth="1px",e.borderStyle="solid"),e}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var i=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){i.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,i=uni.createSelectorQuery().in(this),e=0;e<this.list.length;e++)i.select(".u-item-"+e).boundingClientRect();i.exec((function(i){i.length||setTimeout((function(){t.getTabsInfo()}),10),i.map((function(i,e){t.listInfo[e].width=i.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var i=0;this.listInfo.map((function(e,n){n<t.currentIndex&&(i+=e.width)})),"subsection"==this.mode?this.itemBgStyle.left=i+"px":"button"==this.mode&&(this.itemBgStyle.left=i+this.buttonPadding+"px"),this.itemBgStyle.width=this.listInfo[this.currentIndex].width+"px"}}};i.default=n},d0b1:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{startVal:0,endVal:608,separator:",",decimals:0,duration:2e3,autoplay:!1,useEasing:!0,current:3,isStop:!1,bold:!1}},methods:{endValChange:function(t){this.endVal=0==t?608:1==t?5604:45617,this.reset(),this.start()},durationChange:function(t){this.duration=0==t?1e3:1==t?2e3:3e3},boldChange:function(t){this.bold=!t},decimalsChange:function(t){this.decimals=0==t?2:0},statusChange:function(t){this.current=t,0==t?this.start():1==t?this.stop():2==t?this.resume():this.reset()},end:function(){this.current=3,this.$refs.uToast.show({type:"warning",title:"滚动结束"})},start:function(){this.current=0,this.isStop=!0,this.$refs.uCountTo.start()},stop:function(){this.$refs.uCountTo.stop()},resume:function(){var t=this;if(!this.isStop)return this.$refs.uToast.show({type:"error",title:"请开始并暂停后才能继续"}),void this.$nextTick((function(){t.current=3}));this.$refs.uCountTo.resume()},reset:function(){this.$refs.uCountTo.reset()}}};i.default=n},d13e:function(t,i,e){var n=e("805f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("0d8d0b5c",n,!0,{sourceMap:!1,shadowMode:!1})},df8d:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uIcon:e("1b86").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[e("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?e("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),e("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},o=[]},ef3c:function(t,i,e){"use strict";var n=e("8705"),a=e.n(n);a.a},f19b:function(t,i,e){"use strict";e("c975"),e("a9e3"),e("b64b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var i=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){i.isShow=!1,clearTimeout(i.timer),i.timer=null,"function"===typeof i.tmpConfig.callback&&i.tmpConfig.callback(),i.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};i.default=n},fb58:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-count-num",style:{fontSize:t.fontSize+"rpx",fontWeight:t.bold?"bold":"normal",color:t.color}},[t._v(t._s(t.displayValue))])},o=[]}}]);