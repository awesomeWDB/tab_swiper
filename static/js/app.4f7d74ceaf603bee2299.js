webpackJsonp([8],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("kV13"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("C7Lr")({name:"App"},s,!1,function(t){i("kIZp")},null,null).exports,r=i("wUgx");n.default.use(r.a);var o=new r.a({routes:[{path:"/",name:"home",component:function(){return Promise.all([i.e(0),i.e(1)]).then(i.bind(null,"zKIK"))},redirect:{name:"index"},children:[{path:"index",name:"index",component:function(){return i.e(2).then(i.bind(null,"KR8f"))},children:[]},{path:"test",name:"test",component:function(){return Promise.all([i.e(0),i.e(5)]).then(i.bind(null,"ST9m"))},children:[]},{path:"test2",name:"test2",component:function(){return Promise.all([i.e(0),i.e(4)]).then(i.bind(null,"KuaW"))},children:[]},{path:"recommend",name:"recommend",component:function(){return i.e(6).then(i.bind(null,"z/Ic"))},children:[]},{path:"Android",name:"Android",component:function(){return i.e(3).then(i.bind(null,"isTT"))},children:[]}]}]});var h={name:"LyTabbar",props:{lineWidth:{type:Number,default:3},activeColor:{type:String,default:"red"},fixBottom:{type:Boolean,default:!1},value:{type:Number,default:0},additionalX:{type:Number,default:50},reBoundExponent:{type:Number,default:10,validator:function(t){return t>0}},sensitivity:{type:Number,default:1e3,validator:function(t){return t>0}},reBoundingDuration:{type:Number,default:360}},data:function(){return{activeBarX:0,activeBarWidth:0,speed:0,touching:!1,reBounding:!1,translateX:0,startX:0,lastX:0,currentX:0,startMoveTime:0,endMoveTime:0,frameTime:16.7,frameStartTime:0,frameEndTime:0,inertiaFrame:0,zeroSpeed:.001,acceleration:0}},computed:{style:function(){return this.fixBottom?{}:{transitionTimingFunction:this.transitionTimingFunction,transitionDuration:this.transitionDuration+"ms",transform:"translate3d("+this.translateX+"px, 0px, 0px)"}},activeBarStyle:function(){return{transition:"all 300ms",width:this.activeBarWidth+"px",height:this.lineWidth+"px",transform:"translate3d("+this.activeBarX+"px, 0, 0)",backgroundColor:this.activeColor}},transitionDuration:function(){return this.touching||!this.reBounding&&!this.touching?0:this.reBounding&&!this.touching?this.reBoundingDuration:void 0},transitionTimingFunction:function(){return this.reBounding?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.1, 0.57, 0.1, 1)"},viewAreaWidth:function(){return this.$refs.viewArea.offsetWidth},listWidth:function(){return this.$refs.list.offsetWidth-this.viewAreaWidth},isMoveLeft:function(){return this.currentX<=this.startX},isMoveRight:function(){return this.currentX>=this.startX}},watch:{value:function(){this.checkPosition(),this.calcBarPosX()}},mounted:function(){this.bindEvent(),this.checkPosition(),this.calcBarPosX(),function(){for(var t=0,e=["webkit","moz"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,i){var n=(new Date).getTime(),s=Math.max(0,16.7-(n-t)),a=n-t,r=window.setTimeout(function(){e(a)},s);return t=n+s,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}()},destoryed:function(){this.removeEvent()},methods:{handleTouchStart:function(t){t.stopPropagation(),cancelAnimationFrame(this.inertiaFrame),this.lastX=t.touches[0].clientX},handleTouchMove:function(t){this.listWidth<=0||(t.preventDefault(),t.stopPropagation(),this.touching=!0,this.startMoveTime=this.endMoveTime,this.startX=this.lastX,this.currentX=t.touches[0].clientX,this.moveFollowTouch(),this.endMoveTime=t.timeStamp)},handleTouchEnd:function(t){if(this.touching=!1,this.checkReboundX())cancelAnimationFrame(this.inertiaFrame);else{var e=t.timeStamp-this.endMoveTime,i=this.endMoveTime-this.startMoveTime;if(i=i>0?i:8,e>100)return;this.speed=(this.lastX-this.startX)/i,this.acceleration=this.speed/this.sensitivity,this.frameStartTime=(new Date).getTime(),this.inertiaFrame=requestAnimationFrame(this.moveByInertia)}},checkReboundX:function(){return this.reBounding=!1,this.translateX>0?(this.reBounding=!0,this.translateX=0):this.translateX<-this.listWidth&&(this.reBounding=!0,this.translateX=-this.listWidth),0===this.translateX||this.translateX===-this.listWidth},bindEvent:function(){this.$el.addEventListener("touchstart",this.handleTouchStart,!1),this.$el.addEventListener("touchmove",this.handleTouchMove,!1),this.$el.addEventListener("touchend",this.handleTouchEnd,!1)},removeEvent:function(){this.$el.removeEventListener("touchstart",this.handleTouchStart),this.$el.removeEventListener("touchmove",this.handleTouchMove),this.$el.removeEventListener("touchend",this.handleTouchEnd)},moveFollowTouch:function(){this.isMoveLeft?this.translateX<=0&&this.translateX+this.listWidth>0||this.translateX>0?this.translateX+=this.currentX-this.lastX:this.translateX+this.listWidth<=0&&(this.translateX+=this.additionalX*(this.currentX-this.lastX)/(this.viewAreaWidth+Math.abs(this.translateX+this.listWidth))):this.translateX>=0?this.translateX+=this.additionalX*(this.currentX-this.lastX)/(this.viewAreaWidth+this.translateX):(this.translateX<=0&&this.translateX+this.listWidth>=0||this.translateX+this.listWidth<=0)&&(this.translateX+=this.currentX-this.lastX),this.lastX=this.currentX},moveByInertia:function(){this.frameEndTime=(new Date).getTime(),this.frameTime=this.frameEndTime-this.frameStartTime,this.isMoveLeft?this.translateX<=-this.listWidth?(this.acceleration*=(this.reBoundExponent+Math.abs(this.translateX+this.listWidth))/this.reBoundExponent,this.speed=Math.min(this.speed-this.acceleration,0)):this.speed=Math.min(this.speed-this.acceleration*this.frameTime,0):this.isMoveRight&&(this.translateX>=0?(this.acceleration*=(this.reBoundExponent+this.translateX)/this.reBoundExponent,this.speed=Math.max(this.speed-this.acceleration,0)):this.speed=Math.max(this.speed-this.acceleration*this.frameTime,0)),this.translateX+=this.speed*this.frameTime/2,Math.abs(this.speed)<=this.zeroSpeed?this.checkReboundX():(this.frameStartTime=this.frameEndTime,this.inertiaFrame=requestAnimationFrame(this.moveByInertia))},calcBarPosX:function(){if(!this.fixBottom&&this.$children.length&&!(this.$children.length<=this.value)){var t=this.$children[this.value].$el,e=t.offsetWidth,i=t.offsetLeft;this.activeBarWidth=Math.max(.6*e,14),this.activeBarX=i+(e-this.activeBarWidth)/2}},checkPosition:function(){if(!this.fixBottom&&this.$children.length&&!(this.$children.length<=this.value)){var t=this.$children[this.value].$el,e=t.offsetLeft,i=(this.viewAreaWidth-t.offsetWidth)/2,n=0,s=Math.abs(this.translateX);if(e<=s+i)n=i-(e+this.translateX);else n=-(e-s-i);var a=n+this.translateX;a>0&&(a=0),a<-this.listWidth&&(a=-this.listWidth),this.reBounding=!0,this.translateX=a}}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"viewArea",staticClass:"ly-tabbar",class:{"ly-tabbar-fix-bottom":this.fixBottom}},[e("div",{ref:"list",staticClass:"ly-tab-list",style:this.style},[this._t("default"),this._v(" "),this.fixBottom?this._e():e("div",{ref:"activeBar",staticClass:"ly-tab-active-bar",style:this.activeBarStyle})],2)])},staticRenderFns:[]};var c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"ly-tab-item",style:t.$parent.value===t.id?t.activeStyle:{},on:{click:t.onItemClicked}},[t.$parent.fixBottom?i("div",{staticClass:"ly-tab-item-icon"},[t._t("icon")],2):t._e(),t._v(" "),i("div",{staticClass:"ly-tab-item-label"},[t._t("default")],2)])},staticRenderFns:[]};var u={name:"LyTab",components:{LyTabbar:i("C7Lr")(h,l,!1,function(t){i("hbFv")},null,null).exports,LyTabItem:i("C7Lr")({name:"LyTabItem",computed:{activeStyle:function(){return{color:this.$parent.activeColor}}},data:function(){return{id:(this.$parent.$children.length||1)-1}},methods:{onItemClicked:function(){this.$parent.$emit("input",this.id)}}},c,!1,function(t){i("j0T0")},null,null).exports},props:{value:{type:Number,default:0},items:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}}},data:function(){return{selectedId:this.value}},computed:{labelKey:function(){return this.options.labelKey||"label"}},watch:{value:function(t){this.selectedId=t},selectedId:function(t){this.$emit("input",t),this.$emit("change",this.items[t],t)}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ly-tab"},[i("ly-tabbar",t._b({model:{value:t.selectedId,callback:function(e){t.selectedId=e},expression:"selectedId"}},"ly-tabbar",t.options,!1),t._l(t.items,function(e,n){return i("ly-tab-item",{key:n},[t.options.fixBottom&&e.icon?i("span",{attrs:{slot:"icon"},slot:"icon"},[i("i",{class:e.icon})]):t._e(),t._v(" "),i("span",[t._v(t._s(e[t.labelKey]))])])}),1)],1)},staticRenderFns:[]};var m=i("C7Lr")(u,d,!1,function(t){i("aPQo")},null,null).exports;const f=function(t,e={}){f.installed||t.component(m.name,m)};"undefined"!=typeof window&&window.Vue&&f(window.Vue);var p={install:f,LyTab:m},v=i("aA9S"),X=i.n(v),b=i("fUgm");n.default.use(b.a);var T=new b.a.Store({state:{p_home:0,p_test:0,p_test2:0},getters:{p_home:function(t){return t.p_home},p_test:function(t){return t.p_test},p_test2:function(t){return t.p_test2}},mutations:{SET_P_HOME:function(t,e){t.p_home=e},SET_P_TEST:function(t,e){t.p_test=e},SET_P_TEST2:function(t,e){t.p_test2=e},SET_P:function(t,e){t=X()(t,e)}}});n.default.use(p),n.default.config.productionTip=!1,new n.default({el:"#app",router:o,store:T,components:{App:a},template:"<App/>"})},aPQo:function(t,e){},hbFv:function(t,e){},j0T0:function(t,e){},kIZp:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4f7d74ceaf603bee2299.js.map
