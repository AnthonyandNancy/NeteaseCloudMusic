(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17624d68"],{"37bc":function(e,t,n){},ba8c:function(e,t,n){"use strict";var r=n("37bc"),a=n.n(r);a.a},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"carousel"},[n("el-carousel",{attrs:{interval:4e3,type:"card",height:"300px"}},e._l(e.bannersList,(function(e,t){return n("el-carousel-item",{key:t},[n("img",{attrs:{src:e.imageUrl,alt:""}})])})),1)],1),n("div",{staticClass:"getRecommendedSongList"},[n("div",{staticClass:"content"},[n("h5",{staticStyle:{"text-align":"left"}},[e._v("推荐歌单")]),n("el-divider"),e._l(e.songList,(function(t,r){return n("div",{key:r,staticClass:"songList"},[n("img",{attrs:{src:t.picUrl,alt:""}}),n("p",{staticClass:"name"},[e._v(e._s(t.name))])])}))],2)]),n("div",{staticClass:"djprogramList"},[n("h5",{staticStyle:{"text-align":"left"}},[e._v("推荐电台")]),n("el-divider"),e._l(e.djprogramList,(function(t,r){return n("div",{key:r,staticClass:"songList"},[n("img",{attrs:{src:t.program.blurCoverUrl,alt:""}}),n("p",{staticClass:"name"},[e._v(e._s(t.name))])])}))],2)])},a=[],s=(n("96cf"),n("1da1")),i=n("b775"),c={getHomeBanner:function(e){return Object(i["a"])({url:"/banner?type=0",method:"get"})},getRecommendedSongList:function(e){return Object(i["a"])({url:"/personalized?limit=14",method:"get"})},getRecommendedNewsong:function(e){return Object(i["a"])({url:"/personalized/newsong",method:"get"})},getRecommendedDjprogram:function(e){return Object(i["a"])({url:"/personalized/djprogram",method:"get"})},getRecommendedProgram:function(e){return Object(i["a"])({url:"/program/recommend",method:"get"})},getPersonalizedPrivatecontent:function(e){return Object(i["a"])({url:"/personalized/privatecontent",method:"get"})}},o={name:"Home",components:{},data:function(){return{bannersList:[],songList:[],djprogramList:[]}},created:function(){this.feach()},methods:{feach:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.getHomeBanner();case 2:return n=t.sent,r=n.banners,e.bannersList=r,t.next=7,c.getRecommendedSongList();case 7:return a=t.sent,s=a.result,e.songList=s,t.next=12,c.getRecommendedDjprogram();case 12:i=t.sent,e.djprogramList=i.result;case 14:case"end":return t.stop()}}),t)})))()}}},u=o,l=(n("ba8c"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,"7dfc3c6d",null);t["default"]=d.exports}}]);