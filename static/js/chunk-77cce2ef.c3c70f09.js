(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77cce2ef"],{1676:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("99af");var i=a("b775"),s={getfirstMV:function(t){return Object(i["a"])({url:"/mv/first?limit=6&area=".concat(t),method:"get"})},getMvUrl:function(t){return Object(i["a"])({url:"/mv/url?id=".concat(t),method:"get"})},getMvInfo:function(t){return Object(i["a"])({url:"/mv/detail?mvid=".concat(t),method:"get"})},getMvCommonA:function(t){return Object(i["a"])({url:"/comment/mv?id=".concat(t.id,"&offset=").concat(t.offset,"&before=").concat(t.before),method:"get"})},getMvCommonB:function(t){return Object(i["a"])({url:"/comment/mv?id=".concat(t.id,"&offset=").concat(t.offset),method:"get"})},getExclusiveMv:function(t){return Object(i["a"])({url:"/mv/exclusive/rcmd?limit=6",method:"get"})},getPersonalizedMv:function(t){return Object(i["a"])({url:"/personalized/mv",method:"get"})},getTopMv:function(t){return Object(i["a"])({url:"top/mv?limit=12&area=".concat(t),method:"get"})}}},"4aa1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{attrs:{stretch:""},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"视频",name:"first"}},[a("movie")],1),a("el-tab-pane",{attrs:{label:"MV",name:"second"}},[a("m-v")],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"MV"},[a("div",{staticClass:"new"},[a("h5",{},[t._v("最新MV")]),a("ul",[a("li",{staticClass:"list-unstyled area",class:{areaIsactived:1==t.areaisActive},on:{click:function(e){return t.handelGetNewMv(1)}}},[t._v("内地")]),a("li",{staticClass:"list-unstyled area",class:{areaIsactived:2==t.areaisActive},on:{click:function(e){return t.handelGetNewMv(2)}}},[t._v("港台")]),a("li",{staticClass:"list-unstyled area",class:{areaIsactived:3==t.areaisActive},on:{click:function(e){return t.handelGetNewMv(3)}}},[t._v("欧美")]),a("li",{staticClass:"list-unstyled area",class:{areaIsactived:4==t.areaisActive},on:{click:function(e){return t.handelGetNewMv(4)}}},[t._v("日本")]),a("li",{staticClass:"list-unstyled area",class:{areaIsactived:5==t.areaisActive},on:{click:function(e){return t.handelGetNewMv(5)}}},[t._v("韩国")])]),a("div",{staticStyle:{width:"10%",float:"right",color:"#5a6268"},on:{click:t.goAllMv}},[t._v("更多")]),a("div",{staticClass:"mt-5"},t._l(t.mvList.data,(function(e,i){return a("div",{key:i,staticClass:"newMv",on:{click:function(a){return t.goMv(e.id)}}},[a("img",{attrs:{src:e.cover,alt:""}}),a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"artistName "},[t._v(t._s(e.artistName))])])})),0)]),a("div",{staticClass:"hot mt-5"},[a("h5",{},[t._v("热播MV")]),a("div",{staticStyle:{width:"10%",float:"right",color:"#5a6268"},on:{click:t.goAllMv}},[t._v("更多")]),a("div",{staticClass:"mt-5"},t._l(t.exclusiveMvList,(function(e,i){return a("div",{key:i,staticClass:"newMv",on:{click:function(a){return t.goMv(e.id)}}},[a("img",{attrs:{src:e.cover,alt:""}}),a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"artistName "},[t._v(t._s(e.artistName))])])})),0)]),a("div",{staticClass:"top mt-5"},[a("h5",{},[t._v("最新MV")]),a("ul",[a("li",{staticClass:"list-unstyled area",class:{areaIsactived:1==t.areaisActiveTop},on:{click:function(e){return t.handelGetTopMv(1)}}},[t._v("内地")]),a("li",{staticClass:"list-unstyled area",class:{areaIsactived:2==t.areaisActiveTop},on:{click:function(e){return t.handelGetTopMv(2)}}},[t._v("港台")]),a("li",{staticClass:"list-unstyled area",class:{areaIsactived:3==t.areaisActiveTop},on:{click:function(e){return t.handelGetTopMv(3)}}},[t._v("欧美")]),a("li",{staticClass:"list-unstyled area",class:{areaIsactived:4==t.areaisActiveTop},on:{click:function(e){return t.handelGetTopMv(4)}}},[t._v("日本")]),a("li",{staticClass:"list-unstyled area",class:{areaIsactived:5==t.areaisActiveTop},on:{click:function(e){return t.handelGetTopMv(5)}}},[t._v("韩国")])]),a("div",{staticStyle:{width:"10%",float:"right",color:"#5a6268"},on:{click:t.goAllMv}},[t._v("更多")]),a("div",{staticClass:"mt-5"},t._l(t.topMvList.data,(function(e,i){return a("div",{key:i,staticClass:"newMv",on:{click:function(a){return t.goMv(e.id)}}},[a("img",{attrs:{src:e.cover,alt:""}}),a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"artistName "},[t._v(t._s(e.artistName))])])})),0)])])},c=[],r=(a("96cf"),a("1da1")),l=a("1676"),o={name:"MV",data:function(){return{areaisActive:1,areaisActiveTop:1,mvList:[],topMvList:[],exclusiveMvList:[]}},created:function(){this.handelGetNewMv(1),this.handelGetTopMv(1),this.feach()},methods:{feach:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getExclusiveMv();case 2:a=e.sent,i=a.data,t.exclusiveMvList=i;case 5:case"end":return e.stop()}}),e)})))()},handelGetNewMv:function(t){switch(this.areaisActive=t,t){case 1:this.getNewMV("内地");break;case 2:this.getNewMV("港台");break;case 3:this.getNewMV("欧美");break;case 4:this.getNewMV("日本");break;case 5:this.getNewMV("韩国");break}},handelGetTopMv:function(t){switch(this.areaisActiveTop=t,t){case 1:this.getTopMV("内地");break;case 2:this.getTopMV("港台");break;case 3:this.getTopMV("欧美");break;case 4:this.getTopMV("日本");break;case 5:this.getTopMV("韩国");break}},getTopMV:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l["a"].getTopMv(t);case 2:i=a.sent,e.topMvList=i;case 4:case"end":return a.stop()}}),a)})))()},getNewMV:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l["a"].getfirstMV(t);case 2:i=a.sent,e.mvList=i;case 4:case"end":return a.stop()}}),a)})))()},goMv:function(t){this.$router.push({path:"/mv/".concat(t)})},goAllMv:function(){this.$router.push({name:"MVAll"})}}},v=o,u=(a("8c24"),a("2877")),d=Object(u["a"])(v,n,c,!1,null,"1fca5cd4",null),m=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Movie")])},h=[],M={name:"Movie"},p=M,g=Object(u["a"])(p,f,h,!1,null,"1747130e",null),k=g.exports,_={name:"Index",components:{MV:m,Movie:k},data:function(){return{activeName:"second"}},methods:{handleClick:function(){}}},w=_,b=Object(u["a"])(w,i,s,!1,null,"235ec7e9",null);e["default"]=b.exports},"8c24":function(t,e,a){"use strict";var i=a("955f"),s=a.n(i);s.a},"955f":function(t,e,a){}}]);