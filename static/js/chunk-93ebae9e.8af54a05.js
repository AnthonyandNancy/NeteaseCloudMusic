(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93ebae9e"],{3191:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("99af");var s=a("b775"),i={getHomeBanner:function(t){return Object(s["a"])({url:"/banner?type=0",method:"get"})},getRecommendedSongList:function(t){return Object(s["a"])({url:"/personalized?limit=14",method:"get"})},getRecommendedNewsong:function(t){return Object(s["a"])({url:"/personalized/newsong",method:"get"})},getRecommendedDjprogram:function(t){return Object(s["a"])({url:"/personalized/djprogram",method:"get"})},getRecommendedProgram:function(t){return Object(s["a"])({url:"/program/recommend",method:"get"})},getPersonalizedPrivatecontent:function(){return Object(s["a"])({url:"/personalized/privatecontent",method:"get"})},getPlaylistCatlist:function(){return Object(s["a"])({url:"/playlist/catlist",method:"get"})},getPlaylistHot:function(){return Object(s["a"])({url:"/playlist/hot",method:"get"})},getPlaylist:function(t){return Object(s["a"])({url:"/top/playlist?order=hot&cat=".concat(t.cat,"&offset=").concat(t.offset),method:"get"})},getPlaylistInfo:function(t){return Object(s["a"])({url:"/playlist/detail?id=".concat(t),method:"get"})},getPlaylistComment:function(t){return Object(s["a"])({url:"/comment/playlist?id==".concat(t),method:"get"})},getCommentAlbumA:function(t){return Object(s["a"])({url:"/comment/playlist?id=".concat(t.id,"&type=").concat(t.type,"&offset=").concat(t.offset),method:"get"})},getCommentAlbumB:function(t){return Object(s["a"])({url:"/comment/playlist?id=".concat(t.id,"&offset=").concat(t.offset,"&before=").concat(t.before),method:"get"})}}},"67e3":function(t,e,a){},"7acc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"head"},[a("img",{staticClass:"coverImg",attrs:{src:t.playlist.coverImgUrl,alt:""}}),a("p",{staticClass:"playlistgd"},[t._v("歌单")]),a("p",{staticClass:"playlistname"},[t._v(t._s(t.playlist.name))]),a("p",{staticClass:"trackCount"},[t._v("歌曲数:"+t._s(t.playlist.trackCount))]),a("p",{staticClass:"playCount"},[t._v("播放数:"+t._s(t.playlist.playCount))]),a("div",{staticClass:"btnGroud "},[a("el-button",{attrs:{type:"danger",icon:"el-icon-caret-right"},on:{click:t.handalPlayAll}},[t._v("播放全部")]),a("el-button",{attrs:{icon:"el-icon-circle-plus-outline"}},[t.playlist.isSub?a("span",{staticStyle:{display:"inline-block"}},[t._v("已")]):t._e(),t._v("收藏("+t._s(t.playlist.subscribedCount)+")")]),a("el-button",{attrs:{icon:"el-icon-share"}},[t._v("分享("+t._s(t.playlist.shareCount)+")")])],1)]),a("div",{staticClass:"body"},[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"歌曲列表",name:"first"}},[a("div",{staticClass:"title border-left"},[a("h5",{staticClass:" border-right"},[t._v("音乐标题")]),a("h5",{staticClass:" border-right "},[t._v("歌手")]),a("h5",{staticClass:" border-right "},[t._v("专辑")]),t._l(t.playlist.tracks,(function(e,s){return a("div",{key:s,staticClass:"border-bottom border-top ",on:{click:function(a){return t.handleClick(e.id,s)}}},[a("el-row",[a("el-col",{attrs:{span:5}},[a("div",{staticClass:" border-right"},[a("h6",{staticClass:"name text-primary  "},[t._v(" "+t._s(e.name))])])]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"border-right"},t._l(e.ar,(function(e,s){return a("div",{key:s,staticClass:"singer mr-auto "},[t._v(" "+t._s(e.name)+" ")])})),0)]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"border-right"},[a("div",{staticClass:"album "},[t._v(" "+t._s(e.al.name)+" ")])])])],1)],1)}))],2)]),a("el-tab-pane",{attrs:{label:"评论",name:"second"}},[a("div",{staticStyle:{height:"10vh"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"140","show-word-limit":""},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),a("el-button",{staticClass:"mr-1 mt-1",staticStyle:{display:"block",float:"right"}},[t._v("发送")])],1),t.commentList.hotComments?a("div",{staticClass:"second"},[a("h5",{staticClass:"hot text-primary"},[t._v("精彩评论:")]),t._l(t.commentList.hotComments,(function(e,s){return a("div",{key:s},[a("img",{staticClass:"hotimg",attrs:{src:e.user.avatarUrl,alt:""}}),a("div",{staticClass:"nickname "},[a("span",{staticClass:"text-primary"},[t._v(t._s(e.user.nickname))]),t._v(":"+t._s(e.content)),a("div",{staticClass:"time"},[t._v(t._s(t._f("timeFordat")(e.time)))])]),a("el-divider")],1)}))],2):t._e(),t.commentList.comments?a("div",{staticClass:"second"},[a("h5",{staticClass:"hot text-primary"},[t._v("最新评论:")]),t._l(t.commentList.comments,(function(e,s){return a("div",{key:s},[a("img",{staticClass:"hotimg",attrs:{src:e.user.avatarUrl,alt:""}}),a("div",{staticClass:"nickname "},[a("span",{staticClass:"text-primary"},[t._v(t._s(e.user.nickname))]),t._v(":"+t._s(e.content)),a("div",{staticClass:"time"},[t._v(t._s(t._f("timeFordat")(e.time)))])]),a("el-divider")],1)})),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleChange}})],2):t._e()])],1)],1)])},i=[],n=(a("d81d"),a("96cf"),a("1da1")),r=a("3191"),o={name:"SongSheet",data:function(){return{playListId:null,playlist:[],privileges:[],activeName:"first",total:0,offset:0,before:0,commentList:[],textarea:"",idList:[]}},computed:{},watch:{},created:function(){this.playListId=this.$route.params.id,this.feach(this.$route.params.id),this.getCommentList(this.$route.params.id)},methods:{feach:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,r["a"].getPlaylistInfo(t);case 2:s=a.sent,i=s.playlist,n=s.privileges,e.playlist=i,e.privileges=n;case 7:case"end":return a.stop()}}),a)})))()},handleClick:function(t,e){this.$store.dispatch("app/setIndex",e),localStorage.setItem("songID",t),this.$store.dispatch("app/chooseSong",t),this.setIDLoop()},setIDLoop:function(){var t=this;this.idList=[],this.playlist.tracks.map((function(e){t.idList.push(e.id)})),this.$store.dispatch("app/setIdList",this.idList)},getCommentList:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,i,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!(e.total>5e3)){a.next=10;break}return s={id:t,offset:e.offset,before:e.before},a.next=4,r["a"].getCommentAlbumB(s);case 4:i=a.sent,i.total>5e3&&(e.before=e.commentList.comments[19].time),e.total=i.total,e.commentList=i,a.next=17;break;case 10:return n={id:t,offset:e.offset},a.next=13,r["a"].getCommentAlbumA(n);case 13:o=a.sent,o.total>5e3&&(e.before=e.commentList.comments[19].time),e.total=o.total,e.commentList=o;case 17:case"end":return a.stop()}}),a)})))()},handleChange:function(t){this.offset=t,this.getCommentList(this.$route.params.id)},handalPlayAll:function(){var t=this.playlist.tracks[0].id;this.$store.dispatch("app/setIndex",0),localStorage.setItem("songID",t),this.$store.dispatch("app/chooseSong",t),this.setIDLoop()}}},l=o,c=(a("9eea"),a("2877")),m=Object(c["a"])(l,s,i,!1,null,"209b60a4",null);e["default"]=m.exports},"9eea":function(t,e,a){"use strict";var s=a("67e3"),i=a.n(s);i.a}}]);