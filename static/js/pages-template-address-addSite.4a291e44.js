(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-address-addSite"],{"2d1f":function(t,e,a){"use strict";a.r(e);var i=a("6726"),c=a("740b");for(var s in c)"default"!==s&&function(t){a.d(e,t,(function(){return c[t]}))}(s);a("f489");var n,o=a("f0c5"),l=Object(o["a"])(c["default"],i["b"],i["c"],!1,null,"c81c0a3c",null,!1,i["a"],n);e["default"]=l.exports},"5c12":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */[data-v-c81c0a3c] .line{color:#c0c4cc;font-size:%?28?%}.wrap[data-v-c81c0a3c]{background-color:#f2f2f2}.wrap .top[data-v-c81c0a3c]{background-color:#fff;border-top:solid %?2?% #e4e7ed;padding:%?22?%}.wrap .top .item[data-v-c81c0a3c]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%;line-height:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:solid %?2?% #e4e7ed}.wrap .top .item .left[data-v-c81c0a3c]{width:%?180?%}.wrap .top .item uni-input[data-v-c81c0a3c]{text-align:left}.wrap .top .address[data-v-c81c0a3c]{padding:%?20?% 0}.wrap .top .address uni-textarea[data-v-c81c0a3c]{height:%?150?%;background-color:#f7f7f7;line-height:%?60?%;margin:%?40?% auto;padding:%?20?%}.wrap .top .site-clipboard[data-v-c81c0a3c]{padding-right:%?40?%}.wrap .top .site-clipboard uni-textarea[data-v-c81c0a3c]{height:%?150?%;background-color:#f7f7f7;line-height:%?60?%;margin:%?40?% auto;padding:%?20?%}.wrap .top .site-clipboard .clipboard[data-v-c81c0a3c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#909399;height:%?80?%}.wrap .top .site-clipboard .clipboard .icon[data-v-c81c0a3c]{margin-top:%?6?%;margin-left:%?10?%}.wrap .bottom[data-v-c81c0a3c]{margin-top:%?20?%;padding:%?40?%;padding-right:0;background-color:#fff;font-size:%?28?%}.wrap .bottom .tag[data-v-c81c0a3c]{display:-webkit-box;display:-webkit-flex;display:flex}.wrap .bottom .tag .left[data-v-c81c0a3c]{width:%?160?%}.wrap .bottom .tag .right[data-v-c81c0a3c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.wrap .bottom .tag .right .tags[data-v-c81c0a3c]{width:%?140?%;padding:%?16?% %?8?%;border:solid %?2?% #e4e7ed;text-align:center;border-radius:%?50?%;margin:0 %?10?% %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?28?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#606266;line-height:1}.wrap .bottom .default[data-v-c81c0a3c]{margin-top:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:solid %?2?% #e4e7ed;line-height:%?64?%}.wrap .bottom .default .tips[data-v-c81c0a3c]{font-size:%?24?%}',""]),t.exports=e},6726:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uIcon:a("1b86").default,uPicker:a("3345").default},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"wrap"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"left"},[t._v("收货人")]),a("v-uni-input",{attrs:{type:"text","placeholder-class":"line",placeholder:"请填写收货人姓名"}})],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"left"},[t._v("手机号码")]),a("v-uni-input",{attrs:{type:"text","placeholder-class":"line",placeholder:"请填写收货人手机号"}})],1),a("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showRegionPicker.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"left"},[t._v("所在地区")]),a("v-uni-input",{attrs:{disabled:!0,type:"text","placeholder-class":"line",placeholder:"省市区县、乡镇等"}})],1),a("v-uni-view",{staticClass:"item address"},[a("v-uni-view",{staticClass:"left"},[t._v("详细地址")]),a("v-uni-textarea",{attrs:{type:"text","placeholder-class":"line",placeholder:"街道、楼牌等"}})],1)],1),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"tag"},[a("v-uni-view",{staticClass:"left"},[t._v("标签")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-text",{staticClass:"tags"},[t._v("家")]),a("v-uni-text",{staticClass:"tags"},[t._v("公司")]),a("v-uni-text",{staticClass:"tags"},[t._v("学校")]),a("v-uni-view",{staticClass:"tags plus"},[a("u-icon",{attrs:{size:"22",name:"plus"}})],1)],1)],1),a("v-uni-view",{staticClass:"default"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-view",{staticClass:"set"},[t._v("设置默认地址")]),a("v-uni-view",{staticClass:"tips"},[t._v("提醒：每次下单会默认推荐该地址")])],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-switch",{attrs:{color:"red"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setDefault.apply(void 0,arguments)}}})],1)],1)],1),a("u-picker",{ref:"uPicker",attrs:{mode:"region"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},s=[]},"740b":function(t,e,a){"use strict";a.r(e);var i=a("9f24"),c=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=c.a},"9f24":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{show:!1}},methods:{setDefault:function(){},showRegionPicker:function(){this.show=!0}}};e.default=i},e38b:function(t,e,a){var i=a("5c12");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=a("4f06").default;c("ea6820ce",i,!0,{sourceMap:!1,shadowMode:!1})},f489:function(t,e,a){"use strict";var i=a("e38b"),c=a.n(i);c.a}}]);