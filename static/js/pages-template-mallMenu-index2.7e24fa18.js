(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-mallMenu-index2"],{"0dff":function(c,e,i){"use strict";i.d(e,"b",(function(){return t})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("1b86").default},t=function(){var c=this,e=c.$createElement,i=c._self._c||e;return i("v-uni-view",{staticClass:"u-wrap"},[i("v-uni-view",{staticClass:"u-search-box"},[i("v-uni-view",{staticClass:"u-search-inner"},[i("u-icon",{attrs:{name:"search",color:"#909399",size:28}}),i("v-uni-text",{staticClass:"u-search-text"},[c._v("搜索")])],1)],1),i("v-uni-view",{staticClass:"u-menu-wrap"},[i("v-uni-scroll-view",{staticClass:"u-tab-view menu-scroll-view",attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":c.scrollTop,"scroll-into-view":c.itemId}},c._l(c.tabbar,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-tab-item",class:[c.current==n?"u-tab-item-active":""],on:{click:function(e){e.stopPropagation(),arguments[0]=e=c.$handleEvent(e),c.swichMenu(n)}}},[i("v-uni-text",{staticClass:"u-line-1"},[c._v(c._s(e.name))])],1)})),1),i("v-uni-scroll-view",{staticClass:"right-box",attrs:{"scroll-top":c.scrollRightTop,"scroll-y":!0,"scroll-with-animation":!0},on:{scroll:function(e){arguments[0]=e=c.$handleEvent(e),c.rightScroll.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"page-view"},c._l(c.tabbar,(function(e,n){return i("v-uni-view",{key:n,staticClass:"class-item",attrs:{id:"item"+n}},[i("v-uni-view",{staticClass:"item-title"},[i("v-uni-text",[c._v(c._s(e.name))])],1),i("v-uni-view",{staticClass:"item-container"},c._l(e.foods,(function(e,n){return i("v-uni-view",{key:n,staticClass:"thumb-box"},[i("v-uni-image",{staticClass:"item-menu-image",attrs:{src:e.icon,mode:""}}),i("v-uni-view",{staticClass:"item-menu-name"},[c._v(c._s(e.name))])],1)})),1)],1)})),1)],1)],1)],1)},o=[]},"1de4":function(c,e,i){"use strict";var n=i("4ea4");i("4160"),i("d81d"),i("d3b7"),i("ac1f"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var t=n(i("1da1")),o=n(i("7108")),a={data:function(){return{scrollTop:0,oldScrollTop:0,current:0,menuHeight:0,menuItemHeight:0,itemId:"",tabbar:o.default,menuItemPos:[],arr:[],scrollRightTop:0,timer:null}},onLoad:function(){},onReady:function(){this.getMenuItemTop()},methods:{swichMenu:function(c){var e=this;return(0,t.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(0!=e.arr.length){i.next=3;break}return i.next=3,e.getMenuItemTop();case 3:if(c!=e.current){i.next=5;break}return i.abrupt("return");case 5:e.scrollRightTop=e.oldScrollTop,e.$nextTick((function(){this.scrollRightTop=this.arr[c],this.current=c,this.leftMenuStatus(c)}));case 7:case"end":return i.stop()}}),i)})))()},getElRect:function(c,e){var i=this;new Promise((function(n,t){var o=uni.createSelectorQuery().in(i);o.select("."+c).fields({size:!0},(function(t){t?(i[e]=t.height,n()):setTimeout((function(){i.getElRect(c)}),10)})).exec()}))},observer:function(){var c=this;return(0,t.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c.tabbar.map((function(e,i){var n=uni.createIntersectionObserver(c);n.relativeTo(".right-box",{top:0}).observe("#item"+i,(function(e){if(e.intersectionRatio>0){var i=e.id.substring(4);c.leftMenuStatus(i)}}))}));case 1:case"end":return e.stop()}}),e)})))()},leftMenuStatus:function(c){var e=this;return(0,t.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.current=c,0!=e.menuHeight&&0!=e.menuItemHeight){i.next=6;break}return i.next=4,e.getElRect("menu-scroll-view","menuHeight");case 4:return i.next=6,e.getElRect("u-tab-item","menuItemHeight");case 6:e.scrollTop=c*e.menuItemHeight+e.menuItemHeight/2-e.menuHeight/2;case 7:case"end":return i.stop()}}),i)})))()},getMenuItemTop:function(){var c=this;new Promise((function(e){var i=uni.createSelectorQuery();i.selectAll(".class-item").boundingClientRect((function(i){i.length?i.forEach((function(n){c.arr.push(n.top-i[0].top),e()})):setTimeout((function(){c.getMenuItemTop()}),10)})).exec()}))},rightScroll:function(c){var e=this;return(0,t.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.oldScrollTop=c.detail.scrollTop,0!=e.arr.length){i.next=4;break}return i.next=4,e.getMenuItemTop();case 4:if(!e.timer){i.next=6;break}return i.abrupt("return");case 6:if(e.menuHeight){i.next=9;break}return i.next=9,e.getElRect("menu-scroll-view","menuHeight");case 9:setTimeout((function(){e.timer=null;for(var i=c.detail.scrollTop+e.menuHeight/2,n=0;n<e.arr.length;n++){var t=e.arr[n],o=e.arr[n+1];if(!o||i>=t&&i<o)return void e.leftMenuStatus(n)}}),10);case 10:case"end":return i.stop()}}),i)})))()}}};e.default=a},7108:function(c,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[{name:"女装",foods:[{name:"A字裙",key:"A字裙",icon:"https://cdn.uviewui.com/uview/common/classify/1/1.jpg",cat:10},{name:"T恤",key:"T恤",icon:"https://cdn.uviewui.com/uview/common/classify/1/2.jpg",cat:10},{name:"半身裙",key:"半身裙",icon:"https://cdn.uviewui.com/uview/common/classify/1/3.jpg",cat:10},{name:"衬衫",key:"衬衫",icon:"https://cdn.uviewui.com/uview/common/classify/1/4.jpg",cat:10},{name:"短裙",key:"短裙",icon:"https://cdn.uviewui.com/uview/common/classify/1/5.jpg",cat:10},{name:"阔腿裤",key:"阔腿裤",icon:"https://cdn.uviewui.com/uview/common/classify/1/6.jpg",cat:10},{name:"连衣裙",key:"连衣裙",icon:"https://cdn.uviewui.com/uview/common/classify/1/7.jpg",cat:10},{name:"妈妈装",key:"妈妈装",icon:"https://cdn.uviewui.com/uview/common/classify/1/8.jpg",cat:10},{name:"牛仔裤",key:"牛仔裤",icon:"https://cdn.uviewui.com/uview/common/classify/1/9.jpg",cat:10},{name:"情侣装",key:"情侣装",icon:"https://cdn.uviewui.com/uview/common/classify/1/10.jpg",cat:10},{name:"休闲裤",key:"休闲裤",icon:"https://cdn.uviewui.com/uview/common/classify/1/11.jpg",cat:10},{name:"雪纺衫",key:"雪纺衫",icon:"https://cdn.uviewui.com/uview/common/classify/1/12.jpg",cat:10},{name:"防晒衣",key:"防晒衣",icon:"https://cdn.uviewui.com/uview/common/classify/1/13.jpg",cat:10},{name:"礼服/婚纱",key:"礼服婚纱",icon:"https://cdn.uviewui.com/uview/common/classify/1/14.jpg",cat:10}]},{name:"美食",foods:[{name:"火锅",key:"火锅",icon:"https://cdn.uviewui.com/uview/common/classify/2/1.jpg",cat:6},{name:"糕点饼干",key:"糕点饼干",icon:"https://cdn.uviewui.com/uview/common/classify/2/2.jpg",cat:6},{name:"坚果果干",key:"坚果果干",icon:"https://cdn.uviewui.com/uview/common/classify/2/3.jpg",cat:6},{name:"酒类",key:"酒类",icon:"https://cdn.uviewui.com/uview/common/classify/2/4.jpg",cat:6},{name:"辣条",key:"辣条",icon:"https://cdn.uviewui.com/uview/common/classify/2/5.jpg",cat:6},{name:"大礼包",key:"大礼包",icon:"https://cdn.uviewui.com/uview/common/classify/2/6.jpg",cat:6},{name:"精品茗茶",key:"茶",icon:"https://cdn.uviewui.com/uview/common/classify/2/7.jpg",cat:6},{name:"休闲食品",key:"休闲食品",icon:"https://cdn.uviewui.com/uview/common/classify/2/8.jpg",cat:6},{name:"糖果巧克力",key:"糖果巧克力",icon:"https://cdn.uviewui.com/uview/common/classify/2/9.jpg",cat:6},{name:"方便速食",key:"方便速食",icon:"https://cdn.uviewui.com/uview/common/classify/2/10.jpg",cat:6},{name:"营养代餐",key:"营养代餐",icon:"https://cdn.uviewui.com/uview/common/classify/2/11.jpg",cat:6},{name:"粮油副食",key:"粮油",icon:"https://cdn.uviewui.com/uview/common/classify/2/12.jpg",cat:6},{name:"生鲜水果",key:"水果",icon:"https://cdn.uviewui.com/uview/common/classify/2/13.jpg",cat:6},{name:"饮品",key:"饮品",icon:"https://cdn.uviewui.com/uview/common/classify/2/14.jpg",cat:6}]},{name:"美妆",foods:[{name:"化妆刷",key:"化妆刷",icon:"https://cdn.uviewui.com/uview/common/classify/3/1.jpg",cat:3},{name:"粉底",key:"粉底",icon:"https://cdn.uviewui.com/uview/common/classify/3/2.jpg",cat:3},{name:"洗发护发",key:"洗发护发",icon:"https://cdn.uviewui.com/uview/common/classify/3/3.jpg",cat:3},{name:"美容工具",key:"美容工具",icon:"https://cdn.uviewui.com/uview/common/classify/3/4.jpg",cat:3},{name:"眼部护理",key:"眼部护理",icon:"https://cdn.uviewui.com/uview/common/classify/3/5.jpg",cat:3},{name:"眉妆",key:"眉妆",icon:"https://cdn.uviewui.com/uview/common/classify/3/6.jpg",cat:3},{name:"卸妆品",key:"卸妆品",icon:"https://cdn.uviewui.com/uview/common/classify/3/7.jpg",cat:3},{name:"基础护肤",key:"基础护肤",icon:"https://cdn.uviewui.com/uview/common/classify/3/8.jpg",cat:3},{name:"眼妆",key:"眼妆",icon:"https://cdn.uviewui.com/uview/common/classify/3/9.jpg",cat:3},{name:"唇妆",key:"唇妆",icon:"https://cdn.uviewui.com/uview/common/classify/3/10.jpg",cat:3},{name:"面膜",key:"面膜",icon:"https://cdn.uviewui.com/uview/common/classify/3/11.jpg",cat:3},{name:"沐浴用品",key:"沐浴用品",icon:"https://cdn.uviewui.com/uview/common/classify/3/12.jpg",cat:3},{name:"护肤套装",key:"护肤套装",icon:"https://cdn.uviewui.com/uview/common/classify/3/13.jpg",cat:3},{name:"防晒品",key:"防晒品",icon:"https://cdn.uviewui.com/uview/common/classify/3/14.jpg",cat:3},{name:"美甲",key:"美甲",icon:"https://cdn.uviewui.com/uview/common/classify/3/15.jpg",cat:3}]},{name:"居家日用",foods:[{name:"垃圾袋",key:"垃圾袋",icon:"https://cdn.uviewui.com/uview/common/classify/4/1.jpg",cat:4},{name:"纸巾",key:"纸巾",icon:"https://cdn.uviewui.com/uview/common/classify/4/2.jpg",cat:4},{name:"驱蚊用品",key:"驱蚊用品",icon:"https://cdn.uviewui.com/uview/common/classify/4/3.jpg",cat:4},{name:"收纳神器",key:"收纳神器",icon:"https://cdn.uviewui.com/uview/common/classify/4/4.jpg",cat:4},{name:"厨房用品",key:"厨房用品",icon:"https://cdn.uviewui.com/uview/common/classify/4/5.jpg",cat:4},{name:"厨房烹饪",key:"烹饪",icon:"https://cdn.uviewui.com/uview/common/classify/4/6.jpg",cat:4},{name:"衣物晾晒",key:"衣物晾晒",icon:"https://cdn.uviewui.com/uview/common/classify/4/7.jpg",cat:4},{name:"衣物护理",key:"衣物护理",icon:"https://cdn.uviewui.com/uview/common/classify/4/8.jpg",cat:4},{name:"宠物用品",key:"宠物用品",icon:"https://cdn.uviewui.com/uview/common/classify/4/9.jpg",cat:4},{name:"医药保健",key:"医药",icon:"https://cdn.uviewui.com/uview/common/classify/4/10.jpg",cat:4},{name:"日用百货",key:"百货",icon:"https://cdn.uviewui.com/uview/common/classify/4/11.jpg",cat:4},{name:"清洁用品",key:"清洁",icon:"https://cdn.uviewui.com/uview/common/classify/4/12.jpg",cat:4},{name:"绿植园艺",key:"绿植",icon:"https://cdn.uviewui.com/uview/common/classify/4/13.jpg",cat:4}]},{name:"男装",foods:[{name:"爸爸装",key:"爸爸装",icon:"https://cdn.uviewui.com/uview/common/classify/5/1.jpg",cat:12},{name:"牛仔裤",key:"牛仔裤",icon:"https://cdn.uviewui.com/uview/common/classify/5/2.jpg",cat:12},{name:"衬衫",key:"衬衫",icon:"https://cdn.uviewui.com/uview/common/classify/5/3.jpg",cat:12},{name:"休闲裤",key:"休闲裤",icon:"https://cdn.uviewui.com/uview/common/classify/5/4.jpg",cat:12},{name:"外套",key:"外套",icon:"https://cdn.uviewui.com/uview/common/classify/5/5.jpg",cat:12},{name:"T恤",key:"T恤",icon:"https://cdn.uviewui.com/uview/common/classify/5/6.jpg",cat:12},{name:"套装",key:"套装",icon:"https://cdn.uviewui.com/uview/common/classify/5/7.jpg",cat:12},{name:"运动裤",key:"运动裤",icon:"https://cdn.uviewui.com/uview/common/classify/5/8.jpg",cat:12},{name:"马甲/背心",key:"马甲背心",icon:"https://cdn.uviewui.com/uview/common/classify/5/9.jpg",cat:12},{name:"POLO衫",key:"POLO衫",icon:"https://cdn.uviewui.com/uview/common/classify/5/10.jpg",cat:12},{name:"商务装",key:"商务装",icon:"https://cdn.uviewui.com/uview/common/classify/5/11.jpg",cat:12}]},{name:"鞋品",foods:[{name:"单鞋",key:"单鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/1.jpg",cat:5},{name:"皮鞋",key:"皮鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/2.jpg",cat:5},{name:"帆布鞋",key:"帆布鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/3.jpg",cat:5},{name:"北京老布鞋",key:"北京老布鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/4.jpg",cat:5},{name:"运动鞋",key:"运动鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/5.jpg",cat:5},{name:"拖鞋",key:"拖鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/6.jpg",cat:5},{name:"凉鞋",key:"凉鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/7.jpg",cat:5},{name:"休闲鞋",key:"休闲鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/8.jpg",cat:5},{name:"高跟鞋",key:"高跟鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/9.jpg",cat:5},{name:"老人鞋",key:"老人鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/10.jpg",cat:5},{name:"懒人鞋",key:"懒人鞋",icon:"https://cdn.uviewui.com/uview/common/classify/6/11.jpg",cat:5}]},{name:"数码家电",foods:[{name:"数据线",key:"数据线",icon:"https://cdn.uviewui.com/uview/common/classify/7/1.jpg",cat:8},{name:"耳机",key:"耳机",icon:"https://cdn.uviewui.com/uview/common/classify/7/2.jpg",cat:8},{name:"生活家电",key:"家电",icon:"https://cdn.uviewui.com/uview/common/classify/7/3.jpg",cat:8},{name:"电风扇",key:"电风扇",icon:"https://cdn.uviewui.com/uview/common/classify/7/4.jpg",cat:8},{name:"电吹风",key:"电吹风",icon:"https://cdn.uviewui.com/uview/common/classify/7/5.jpg",cat:8},{name:"手机壳",key:"手机壳",icon:"https://cdn.uviewui.com/uview/common/classify/7/6.jpg",cat:8},{name:"榨汁机",key:"榨汁机",icon:"https://cdn.uviewui.com/uview/common/classify/7/7.jpg",cat:8},{name:"小家电",key:"小家电",icon:"https://cdn.uviewui.com/uview/common/classify/7/8.jpg",cat:8},{name:"数码电子",key:"数码",icon:"https://cdn.uviewui.com/uview/common/classify/7/9.jpg",cat:8},{name:"电饭锅",key:"电饭锅",icon:"https://cdn.uviewui.com/uview/common/classify/7/10.jpg",cat:8},{name:"手机支架",key:"手机支架",icon:"https://cdn.uviewui.com/uview/common/classify/7/11.jpg",cat:8},{name:"剃须刀",key:"剃须刀",icon:"https://cdn.uviewui.com/uview/common/classify/7/12.jpg",cat:8},{name:"充电宝",key:"充电宝",icon:"https://cdn.uviewui.com/uview/common/classify/7/13.jpg",cat:8},{name:"手机配件",key:"手机配件",icon:"https://cdn.uviewui.com/uview/common/classify/7/14.jpg",cat:8}]},{name:"母婴",foods:[{name:"婴童服饰",key:"衣服",icon:"https://cdn.uviewui.com/uview/common/classify/8/1.jpg",cat:2},{name:"玩具乐器",key:"玩具乐器",icon:"https://cdn.uviewui.com/uview/common/classify/8/2.jpg",cat:2},{name:"尿不湿",key:"尿不湿",icon:"https://cdn.uviewui.com/uview/common/classify/8/3.jpg",cat:2},{name:"安抚牙胶",key:"安抚牙胶",icon:"https://cdn.uviewui.com/uview/common/classify/8/4.jpg",cat:2},{name:"奶瓶奶嘴",key:"奶瓶奶嘴",icon:"https://cdn.uviewui.com/uview/common/classify/8/5.jpg",cat:2},{name:"孕妈用品",key:"孕妈用品",icon:"https://cdn.uviewui.com/uview/common/classify/8/6.jpg",cat:2},{name:"宝宝用品",key:"宝宝用品",icon:"https://cdn.uviewui.com/uview/common/classify/8/7.jpg",cat:2},{name:"婴童湿巾",key:"湿巾",icon:"https://cdn.uviewui.com/uview/common/classify/8/8.jpg",cat:2},{name:"喂养洗护",key:"洗护",icon:"https://cdn.uviewui.com/uview/common/classify/8/9.jpg",cat:2},{name:"婴童鞋靴",key:"童鞋",icon:"https://cdn.uviewui.com/uview/common/classify/8/10.jpg",cat:2},{name:"口水巾",key:"口水巾",icon:"https://cdn.uviewui.com/uview/common/classify/8/11.jpg",cat:2},{name:"营养辅食",key:"营养",icon:"https://cdn.uviewui.com/uview/common/classify/8/12.jpg",cat:2},{name:"婴幼书籍",key:"书籍",icon:"https://cdn.uviewui.com/uview/common/classify/8/13.jpg",cat:2},{name:"婴儿车",key:"婴儿车",icon:"https://cdn.uviewui.com/uview/common/classify/8/14.jpg",cat:2}]},{name:"箱包",foods:[{name:"单肩包",key:"单肩包",icon:"https://cdn.uviewui.com/uview/common/classify/9/1.jpg",cat:0},{name:"斜挎包",key:"斜挎包",icon:"https://cdn.uviewui.com/uview/common/classify/9/2.jpg",cat:0},{name:"女包",key:"女包",icon:"https://cdn.uviewui.com/uview/common/classify/9/3.jpg",cat:0},{name:"男包",key:"男包",icon:"https://cdn.uviewui.com/uview/common/classify/9/4.jpg",cat:0},{name:"双肩包",key:"双肩包",icon:"https://cdn.uviewui.com/uview/common/classify/9/5.jpg",cat:0},{name:"小方包",key:"小方包",icon:"https://cdn.uviewui.com/uview/common/classify/9/6.jpg",cat:0},{name:"钱包",key:"钱包",icon:"https://cdn.uviewui.com/uview/common/classify/9/7.jpg",cat:0},{name:"旅行箱包",key:"旅行箱包",icon:"https://cdn.uviewui.com/uview/common/classify/9/8.jpg",cat:0},{name:"零钱包",key:"零钱包",icon:"https://cdn.uviewui.com/uview/common/classify/9/9.jpg",cat:0},{name:"手提包",key:"手提包",icon:"https://cdn.uviewui.com/uview/common/classify/9/10.jpg",cat:0},{name:"胸包",key:"胸包",icon:"https://cdn.uviewui.com/uview/common/classify/9/11.jpg",cat:0}]},{name:"内衣",foods:[{name:"袜子",key:"袜子",icon:"https://cdn.uviewui.com/uview/common/classify/10/1.jpg",cat:11},{name:"吊带背心",key:"吊带背心",icon:"https://cdn.uviewui.com/uview/common/classify/10/2.jpg",cat:11},{name:"抹胸",key:"抹胸",icon:"https://cdn.uviewui.com/uview/common/classify/10/3.jpg",cat:11},{name:"内裤",key:"内裤",icon:"https://cdn.uviewui.com/uview/common/classify/10/4.jpg",cat:11},{name:"文胸",key:"文胸",icon:"https://cdn.uviewui.com/uview/common/classify/10/5.jpg",cat:11},{name:"文胸套装",key:"文胸套装",icon:"https://cdn.uviewui.com/uview/common/classify/10/6.jpg",cat:11},{name:"打底塑身",key:"打底塑身",icon:"https://cdn.uviewui.com/uview/common/classify/10/7.jpg",cat:11},{name:"家居服",key:"家居服",icon:"https://cdn.uviewui.com/uview/common/classify/10/8.jpg",cat:11},{name:"船袜",key:"船袜",icon:"https://cdn.uviewui.com/uview/common/classify/10/9.jpg",cat:11},{name:"情侣睡衣",key:"情侣睡衣",icon:"https://cdn.uviewui.com/uview/common/classify/10/10.jpg",cat:11},{name:"丝袜",key:"丝袜",icon:"https://cdn.uviewui.com/uview/common/classify/10/11.jpg",cat:11}]},{name:"文娱车品",foods:[{name:"车市车品",key:"车市车品",icon:"https://cdn.uviewui.com/uview/common/classify/11/1.jpg",cat:7},{name:"办公文具",key:"办公文具",icon:"https://cdn.uviewui.com/uview/common/classify/11/2.jpg",cat:7},{name:"考试必备",key:"考试必备",icon:"https://cdn.uviewui.com/uview/common/classify/11/3.jpg",cat:7},{name:"笔记本",key:"笔记本",icon:"https://cdn.uviewui.com/uview/common/classify/11/4.jpg",cat:7},{name:"艺术礼品",key:"礼品",icon:"https://cdn.uviewui.com/uview/common/classify/11/5.jpg",cat:7},{name:"书写工具",key:"书写工具",icon:"https://cdn.uviewui.com/uview/common/classify/11/6.jpg",cat:7},{name:"车载电器",key:"车载电器",icon:"https://cdn.uviewui.com/uview/common/classify/11/7.jpg",cat:7},{name:"图书音像",key:"图书音像",icon:"https://cdn.uviewui.com/uview/common/classify/11/8.jpg",cat:7},{name:"画具画材",key:"画具画材",icon:"https://cdn.uviewui.com/uview/common/classify/11/9.jpg",cat:7}]},{name:"配饰",foods:[{name:"太阳镜",key:"太阳镜",icon:"https://cdn.uviewui.com/uview/common/classify/12/1.jpg",cat:0},{name:"皮带",key:"皮带",icon:"https://cdn.uviewui.com/uview/common/classify/12/2.jpg",cat:0},{name:"棒球帽",key:"棒球帽",icon:"https://cdn.uviewui.com/uview/common/classify/12/3.jpg",cat:0},{name:"手表",key:"手表",icon:"https://cdn.uviewui.com/uview/common/classify/12/4.jpg",cat:0},{name:"发饰",key:"发饰",icon:"https://cdn.uviewui.com/uview/common/classify/12/5.jpg",cat:0},{name:"项链",key:"项链",icon:"https://cdn.uviewui.com/uview/common/classify/12/6.jpg",cat:0},{name:"手饰",key:"手饰",icon:"https://cdn.uviewui.com/uview/common/classify/12/7.jpg",cat:0},{name:"耳环",key:"耳环",icon:"https://cdn.uviewui.com/uview/common/classify/12/8.jpg",cat:0},{name:"帽子丝巾",key:"帽子丝巾",icon:"https://cdn.uviewui.com/uview/common/classify/12/9.jpg",cat:0},{name:"眼镜墨镜",key:"眼镜墨镜",icon:"https://cdn.uviewui.com/uview/common/classify/12/10.jpg",cat:0},{name:"发带发箍",key:"发带发箍",icon:"https://cdn.uviewui.com/uview/common/classify/12/11.jpg",cat:0}]},{name:"家装家纺",foods:[{name:"家居饰品",key:"家居饰品",icon:"https://cdn.uviewui.com/uview/common/classify/13/1.jpg",cat:0},{name:"凉席",key:"凉席",icon:"https://cdn.uviewui.com/uview/common/classify/13/2.jpg",cat:0},{name:"背枕靠枕",key:"靠枕",icon:"https://cdn.uviewui.com/uview/common/classify/13/3.jpg",cat:0},{name:"床上用品",key:"床上用品",icon:"https://cdn.uviewui.com/uview/common/classify/13/4.jpg",cat:0},{name:"摆件",key:"摆件",icon:"https://cdn.uviewui.com/uview/common/classify/13/5.jpg",cat:0},{name:"四件套",key:"四件套",icon:"https://cdn.uviewui.com/uview/common/classify/13/6.jpg",cat:0},{name:"装饰品",key:"装饰品",icon:"https://cdn.uviewui.com/uview/common/classify/13/7.jpg",cat:0},{name:"卫浴用品",key:"卫浴",icon:"https://cdn.uviewui.com/uview/common/classify/13/8.jpg",cat:0},{name:"家居家装",key:"家具",icon:"https://cdn.uviewui.com/uview/common/classify/13/9.jpg",cat:0},{name:"蚊帐",key:"蚊帐",icon:"https://cdn.uviewui.com/uview/common/classify/13/10.jpg",cat:0},{name:"墙纸贴纸",key:"墙纸",icon:"https://cdn.uviewui.com/uview/common/classify/13/11.jpg",cat:0},{name:"空调被",key:"空调被",icon:"https://cdn.uviewui.com/uview/common/classify/13/12.jpg",cat:0}]},{name:"户外运动",foods:[{name:"游泳装备",key:"游泳",icon:"https://cdn.uviewui.com/uview/common/classify/14/1.jpg",cat:0},{name:"泳镜",key:"泳镜",icon:"https://cdn.uviewui.com/uview/common/classify/14/2.jpg",cat:0},{name:"户外装备",key:"户外",icon:"https://cdn.uviewui.com/uview/common/classify/14/3.jpg",cat:0},{name:"健身服饰",key:"健身",icon:"https://cdn.uviewui.com/uview/common/classify/14/4.jpg",cat:0},{name:"泳衣",key:"泳衣",icon:"https://cdn.uviewui.com/uview/common/classify/14/5.jpg",cat:0},{name:"瑜伽垫",key:"瑜伽垫",icon:"https://cdn.uviewui.com/uview/common/classify/14/6.jpg",cat:0},{name:"瑜伽用品",key:"瑜伽",icon:"https://cdn.uviewui.com/uview/common/classify/14/7.jpg",cat:0},{name:"健身装备",key:"健身",icon:"https://cdn.uviewui.com/uview/common/classify/14/8.jpg",cat:0},{name:"球迷用品",key:"球迷",icon:"https://cdn.uviewui.com/uview/common/classify/14/9.jpg",cat:0}]}];e.default=n},"74c5":function(c,e,i){var n=i("9c16");"string"===typeof n&&(n=[[c.i,n,""]]),n.locals&&(c.exports=n.locals);var t=i("4f06").default;t("6dfdb4f9",n,!0,{sourceMap:!1,shadowMode:!1})},"9b50":function(c,e,i){"use strict";var n=i("74c5"),t=i.n(n);t.a},"9c16":function(c,e,i){var n=i("24fb");e=n(!1),e.push([c.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-wrap[data-v-6cedab3a]{height:calc(100vh);height:calc(100vh - var(--window-top));display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.u-search-box[data-v-6cedab3a]{padding:%?18?% %?30?%}.u-menu-wrap[data-v-6cedab3a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden}.u-search-inner[data-v-6cedab3a]{background-color:#eaeaea;border-radius:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?16?%}.u-search-text[data-v-6cedab3a]{font-size:%?26?%;color:#909399;margin-left:%?10?%}.u-tab-view[data-v-6cedab3a]{width:%?200?%;height:100%}.u-tab-item[data-v-6cedab3a]{height:%?110?%;background:#f6f6f6;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%;color:#444;font-weight:400;line-height:1}.u-tab-item-active[data-v-6cedab3a]{position:relative;color:#000;font-size:%?30?%;font-weight:600;background:#fff}.u-tab-item-active[data-v-6cedab3a]::before{content:"";position:absolute;border-left:4px solid #2979ff;height:%?32?%;left:0;top:%?39?%}.u-tab-view[data-v-6cedab3a]{height:100%}.right-box[data-v-6cedab3a]{background-color:#fafafa}.page-view[data-v-6cedab3a]{padding:%?16?%}.class-item[data-v-6cedab3a]{margin-bottom:%?30?%;background-color:#fff;padding:%?16?%;border-radius:%?8?%}.class-item[data-v-6cedab3a]:last-child{min-height:100vh}.item-title[data-v-6cedab3a]{font-size:%?26?%;color:#303133;font-weight:700}.item-menu-name[data-v-6cedab3a]{font-weight:400;font-size:%?24?%;color:#303133}.item-container[data-v-6cedab3a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.thumb-box[data-v-6cedab3a]{width:33.333333%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-top:%?20?%}.item-menu-image[data-v-6cedab3a]{width:%?120?%;height:%?120?%}',""]),c.exports=e},"9eaa":function(c,e,i){"use strict";i.r(e);var n=i("0dff"),t=i("d22e");for(var o in t)"default"!==o&&function(c){i.d(e,c,(function(){return t[c]}))}(o);i("9b50");var a,m=i("f0c5"),s=Object(m["a"])(t["default"],n["b"],n["c"],!1,null,"6cedab3a",null,!1,n["a"],a);e["default"]=s.exports},d22e:function(c,e,i){"use strict";i.r(e);var n=i("1de4"),t=i.n(n);for(var o in n)"default"!==o&&function(c){i.d(e,c,(function(){return n[c]}))}(o);e["default"]=t.a}}]);