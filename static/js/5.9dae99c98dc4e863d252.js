webpackJsonp([5],{"3f0v":function(t,e){},ST9m:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=s("aA9S"),o=s.n(l),i=s("4YfN"),a=s.n(i),n=s("fUgm"),d={name:"test",components:{tabSwiper:s("AUHk").a},computed:a()({},Object(n.b)(["p_test"])),data:function(){return{tab:{items:[{label:"首页"},{label:"推荐"},{label:"Android"},{label:"前端"},{label:"后端"},{label:"iOS"},{label:"产品"},{label:"人工智能"},{label:"设计"}],options:{activeColor:"#1d98bd"}},swiper:{options:{resistanceRatio:0}}}},created:function(){console.log("test created")},mounted:function(){console.log("test mounted")},beforeRouteEnter:function(t,e,s){console.log("test route enter"),s()},beforeRouteLeave:function(t,e,s){console.log("test route leave"),s()},beforeRouteUpdate:function(t,e,s){console.log("test route update"),s()},methods:a()({},Object(n.c)(["SET_P_TEST"]),{slideChange:function(t){var e=(new Date).getTime(),s=t;this.SET_P_TEST(s);var l=o()({},this.$route.query,{p_test:s,timestamp:e});console.log(l),this.$router.push({path:"/",query:l})}})},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("tabSwiper",{staticClass:"tab-swiper",attrs:{tab:t.tab,swiper:t.swiper,selectedId:t.p_test},on:{slideChange:t.slideChange}},[s("div",{attrs:{slot:"slide0"},slot:"slide0"},[t._v("slot-0,哈啊哈，这是外面的父组件传过来的")]),t._v(" "),s("div",{attrs:{slot:"slide1"},slot:"slide1"},[t._v("slot-1,哈啊哈，这是外面的父组件传过来的")]),t._v(" "),s("div",{attrs:{slot:"slide2"},slot:"slide2"},[t._v("slot-2,哈啊哈，这是外面的父组件传过来的")]),t._v(" "),s("div",{attrs:{slot:"slide3"},slot:"slide3"},[t._v("slot-3,哈啊哈，这是外面的父组件传过来的")]),t._v(" "),s("div",{attrs:{slot:"slide4"},slot:"slide4"},[t._v("slot-4,哈啊哈，这是外面的父组件传过来的")]),t._v(" "),s("div",{attrs:{slot:"slide5"},slot:"slide5"},[t._v("slot-5,哈啊哈，这是外面的父组件传过来的")]),t._v(" "),s("div",{attrs:{slot:"slide6"},slot:"slide6"},[t._v("slot-6,哈啊哈，这是外面的父组件传过来的")]),t._v(" "),s("div",{attrs:{slot:"slide7"},slot:"slide7"},[t._v("slot-7,哈啊哈，这是外面的父组件传过来的")]),t._v(" "),s("div",{attrs:{slot:"slide8"},slot:"slide8"},[t._v("slot-8,哈啊哈，这是外面的父组件传过来的")])])],1)},staticRenderFns:[]};var v=s("C7Lr")(d,r,!1,function(t){s("3f0v")},"data-v-0898710b",null);e.default=v.exports}});
//# sourceMappingURL=5.9dae99c98dc4e863d252.js.map
