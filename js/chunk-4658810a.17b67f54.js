(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4658810a"],{1230:function(t,s,o){"use strict";var e=o("2073"),i=o.n(e);i.a},"1ce8":function(t,s,o){},2011:function(t,s,o){"use strict";var e=o("26e2"),i=o.n(e);i.a},2073:function(t,s,o){},"26e2":function(t,s,o){},5863:function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("section",{staticClass:"food"},[o("section",{ref:"categories_wrapper",staticClass:"categories_wrapper"},[o("ul",{staticClass:"food_categories"},t._l(t.foodList,(function(s,e){return o("li",{key:s.id,staticClass:"categories_item",class:{activeClass:t.currentIndex==e},on:{click:function(s){return t.scrollToElement(e)}}},[t._v(t._s(s.name))])})),0)]),o("section",{ref:"food_wrapper",staticClass:"food_wrapper"},[o("section",t._l(t.foodList,(function(s){return o("div",{key:s.id,staticClass:"list_item"},[o("h3",{staticClass:"title"},[t._v(" "+t._s(s.name)+" "),o("span",{staticClass:"title_info"},[t._v(t._s(s.description))])]),o("ul",t._l(s.foods,(function(s){return o("li",{key:s.item_idd,staticClass:"food_info"},[o("img",{staticClass:"food_img",attrs:{src:"//elm.cangdu.org/img/"+s.image_path,alt:""}}),o("section",[o("h5",{staticClass:"food_name"},[t._v(t._s(s.name))]),o("p",{staticClass:"food_des"},[t._v(t._s(s.description))]),o("p",{staticClass:"food_tips"},[t._v(t._s(s.tips))]),o("section",{staticClass:"buy_container"},[o("span",{staticClass:"price"},[s.specfoods[0].price?o("span",{staticClass:"icon"},[t._v("￥")]):t._e(),t._v(" "+t._s(s.specfoods[0].price)+" ")]),s.specfoods.length>1?o("span",{staticClass:"add_btn",on:{click:function(o){return t.selected(s.specfoods)}}},[t._v("选规格")]):o("CartControl",{attrs:{foodItem:s.specfoods[0]}})],1)])])})),0)])})),0)]),t.isShow?o("SelectedFood",{attrs:{foods:t.selectedFood}}):t._e(),o("footer",[t.isShowCart&&t.cartFoods.length>0?o("CartDetail",{attrs:{foodList:t.cartFoods}}):t._e(),o("span",{staticClass:"cart",style:{backgroundColor:t.cartFoods.length>0?"#0089dc":"#535356"},on:{click:function(s){t.isShowCart=!0}}},[t.foodCount?o("span",{staticClass:"count"},[t._v(t._s(t.foodCount))]):t._e(),o("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}})]),o("section",{staticClass:"cart_container"},[o("section",{staticClass:"total"},[o("p",{staticClass:"price"},[t._v("￥"+t._s(t.totalPrice)+"元")]),o("p",{staticClass:"fee"},[t._v("配送费5元")])]),o("router-link",{staticClass:"payBtn",style:{backgroundColor:t.cartFoods.length>0?"#4cd946":"#535356"},attrs:{tag:"span",to:"/confirmOrder"}},[t._v("去结算")])],1)],1),t.isShowCart&&t.cartFoods.length>0?o("div",{staticClass:"layer_mask",on:{click:function(s){t.isShowCart=!1}}}):t._e()],1)},i=[],a=(o("4160"),o("159b"),o("229e")),n=o("8ba8"),c=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"cart_control"},[t.foodItem.count>0?o("span",{staticClass:"circle first_circle",on:{click:t.decreaseFood}},[o("i",{staticClass:"fa fa-minus",attrs:{"aria-hidden":"true"}})]):t._e(),t.foodItem.count>0?o("span",{staticClass:"count"},[t._v(t._s(t.foodItem.count))]):t._e(),o("span",{staticClass:"circle",on:{click:t.increaseFood}},[o("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])])},r=[],l={name:"CartControl",props:{foodItem:{type:Object,required:!0}},methods:{increaseFood:function(){this.foodItem.count?this.foodItem.count++:this.$set(this.foodItem,"count",1)},decreaseFood:function(){this.foodItem.count?this.foodItem.count--:this.$set(this.foodItem,"count",1)}}},d=l,f=(o("2011"),o("2877")),u=Object(f["a"])(d,c,r,!1,null,"1342d1e0",null),_=u.exports,h=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("section",{staticClass:"cart_detail"},[t._m(0),o("ul",{staticClass:"food_list"},t._l(t.foodList,(function(s,e){return o("li",{key:e,staticClass:"food_item"},[o("span",{staticClass:"name"},[t._v(t._s(s.name))]),o("span",{staticClass:"price"},[t._v("￥"+t._s(s.price))]),o("CartControl",{attrs:{foodItem:s}})],1)})),0)])},p=[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("header",[o("span",{staticClass:"title"},[t._v("购物车")]),o("span",{staticClass:"clear_btn"},[t._v("清空")])])}],C={props:{foodList:{type:Array,required:!0}},components:{CartControl:_}},m=C,v=(o("d238"),Object(f["a"])(m,h,p,!1,null,"98a6948c",null)),g=v.exports,w=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("section",{staticClass:"pop_mask",on:{click:function(s){s.stopPropagation(),t.$parent.isShow=!1}}},[o("section",{staticClass:"content"},[t._m(0),o("main",[o("h3",[t._v("规格")]),o("div",t._l(t.foods,(function(s,e){return o("span",{key:e,class:{activeClass:t.currentIndex==e},on:{click:function(s){return t.selected(e)}}},[t._v(t._s(s.name))])})),0)]),t._m(1)])])},k=[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("header",[o("span",[t._v("我问问")]),o("span",[t._v("×")])])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("footer",[o("span",{staticClass:"price"},[o("span",[t._v("￥")]),t._v("20 ")]),o("span",{staticClass:"add"},[t._v("加入购物车")])])}],S={props:{foods:{type:Array,required:!0}},data:function(){return{currentIndex:0}},methods:{selected:function(t){this.currentIndex=t}}},b=S,y=(o("1230"),Object(f["a"])(b,w,k,!1,null,"6b534d7c",null)),$=y.exports,F={name:"Food",data:function(){return{cart:[],foodList:[],id:this.$route.query.id,listHeight:[],foodScroll:{},menuScroll:{},scrollY:0,isShowCart:!1,selectedFood:[],isShow:!1}},computed:{totalPrice:function(){return this.$store.getters.totalPrice},foodCount:function(){return this.$store.getters.foodCount},cartFoods:function(){var t=[];return this.foodList.forEach((function(s){s.foods.forEach((function(s){s.specfoods.forEach((function(s){s.count>0&&t.push(s)}))}))})),t},currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],o=this.listHeight[t+1];if(this.scrollY>=s&&this.scrollY<o)return t}return 0}},watch:{cartFoods:function(t,s){this.$store.commit("UPDATE_CARTLIST",this.cartFoods),t.length<1&&(this.isShowCart=!1)}},methods:{selected:function(t){this.selectedFood=t,this.isShow=!0},closeAlert:function(){this.isShow&&(this.isShow=!1)},scrollToElement:function(t){var s=this.$refs.food_wrapper.getElementsByClassName("list_item");this.foodScroll.scrollToElement(s[t],200)},initScroll:function(){this.menuScroll=new a["a"](this.$refs.categories_wrapper,{click:!0}),this.foodScroll=new a["a"](this.$refs.food_wrapper,{click:!0,probeType:3})},calculateHeight:function(){var t=this.$refs.food_wrapper.getElementsByClassName("list_item"),s=0,o=[];o.push(s);for(var e=0;e<t.length;e++)s+=t[e].clientHeight,o.push(s);this.listHeight=o}},created:function(){var t=this;Object(n["f"])(this.id).then((function(s){t.foodList=s.data,console.log(t.foodList),t.$parent.successLoadData=!0,t.$nextTick((function(){t.initScroll(),t.calculateHeight(),t.foodScroll.on("scroll",(function(s){t.scrollY=Math.abs(Math.round(s.y))}))}))}))},components:{CartControl:_,CartDetail:g,SelectedFood:$}},I=F,E=(o("76b5"),Object(f["a"])(I,e,i,!1,null,"63b27a63",null));s["default"]=E.exports},"76b5":function(t,s,o){"use strict";var e=o("f90d"),i=o.n(e);i.a},d238:function(t,s,o){"use strict";var e=o("1ce8"),i=o.n(e);i.a},f90d:function(t,s,o){}}]);
//# sourceMappingURL=chunk-4658810a.17b67f54.js.map