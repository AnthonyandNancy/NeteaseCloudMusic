(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33272760"],{"7acc":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t.loading?s("div",[s("loading")],1):t._e(),t.loading?t._e():s("div",[s("div",{staticClass:"head"},[s("img",{staticClass:"coverImg",attrs:{src:t.playlist.coverImgUrl,alt:""}}),s("div",[s("p",{staticClass:"playlistgd"},[t._v("歌单")]),s("p",{staticClass:"playlistname"},[t._v(t._s(t.playlist.name))])]),s("p",{staticClass:"trackCount"},[t._v("歌曲数:"+t._s(t.playlist.trackCount))]),s("p",{staticClass:"playCount"},[t._v("播放数:"+t._s(t.playlist.playCount))]),s("div",{staticClass:"btnGroud"},[s("el-button",{attrs:{type:"danger",icon:"el-icon-caret-right"},on:{click:t.handalPlayAll}},[t._v("播放全部")]),s("el-button",{attrs:{icon:"el-icon-circle-plus-outline"}},[t.playlist.isSub?s("span",{staticStyle:{display:"inline-block"}},[t._v("已")]):t._e(),t._v("收藏("+t._s(t.playlist.subscribedCount)+")")]),s("el-button",{attrs:{icon:"el-icon-share"}},[t._v("分享("+t._s(t.playlist.shareCount)+")")])],1)]),s("div",{staticClass:"body"},[s("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"歌曲列表",name:"first"}},[s("div",{staticClass:"title border-left"},[s("h5",{staticClass:"border-right"},[t._v("音乐标题")]),s("h5",{staticClass:"border-right"},[t._v("歌手")]),s("h5",{staticClass:"border-right"},[t._v("专辑")]),t._l(t.playlist.tracks,(function(e,a){return s("div",{key:a,staticClass:"border-bottom border-top",on:{click:function(s){return t.handleClick(e.id,a)}}},[s("el-row",[s("el-col",{attrs:{span:5}},[s("div",{staticClass:"border-right"},[s("h6",{staticClass:"name text-primary"},[t._v(t._s(e.name))])])]),s("el-col",{attrs:{span:5}},[s("div",{staticClass:"border-right"},t._l(e.ar,(function(e,a){return s("div",{key:a,staticClass:"singer mr-auto"},[t._v(" "+t._s(e.name)+" ")])})),0)]),s("el-col",{attrs:{span:5}},[s("div",{staticClass:"border-right"},[s("div",{staticClass:"album"},[t._v(" "+t._s(e.al.name)+" ")])])])],1)],1)}))],2)]),s("el-tab-pane",{attrs:{label:"评论",name:"second"}},[s("div",{staticStyle:{height:"10vh"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"140","show-word-limit":""},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),s("el-button",{staticClass:"mr-1 mt-1",staticStyle:{display:"block",float:"right"}},[t._v("发送")])],1),t.commentList.hotComments?s("div",{staticClass:"second"},[s("h5",{staticClass:"hot text-primary"},[t._v("精彩评论:")]),t._l(t.commentList.hotComments,(function(e,a){return s("div",{key:a},[s("img",{staticClass:"hotimg",attrs:{src:e.user.avatarUrl,alt:""}}),s("div",{staticClass:"nickname"},[s("span",{staticClass:"text-primary"},[t._v(t._s(e.user.nickname))]),t._v(":"+t._s(e.content)+" "),s("div",{staticClass:"time"},[t._v(t._s(t._f("timeFordat")(e.time)))])]),s("el-divider")],1)}))],2):t._e(),t.commentList.comments?s("div",{staticClass:"second"},[s("h5",{staticClass:"hot text-primary"},[t._v("最新评论:")]),t._l(t.commentList.comments,(function(e,a){return s("div",{key:a},[s("img",{staticClass:"hotimg",attrs:{src:e.user.avatarUrl,alt:""}}),s("div",{staticClass:"nickname"},[s("span",{staticClass:"text-primary"},[t._v(t._s(e.user.nickname))]),t._v(":"+t._s(e.content)+" "),s("div",{staticClass:"time"},[t._v(t._s(t._f("timeFordat")(e.time)))])]),s("el-divider")],1)})),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleChange}})],2):t._e()])],1)],1)])])},i=[],n=(s("d81d"),s("96cf"),s("1da1")),r=s("3191"),o={name:"SongSheet",data:function(){return{loading:!0,playListId:null,playlist:[],privileges:[],activeName:"first",total:0,offset:0,before:0,commentList:[],textarea:"",idList:[]}},computed:{},watch:{},created:function(){this.playListId=this.$route.params.id,this.feach(this.$route.params.id),this.getCommentList(this.$route.params.id)},methods:{feach:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,i,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,r["a"].getPlaylistInfo(t);case 2:a=s.sent,i=a.playlist,n=a.privileges,e.playlist=i,e.privileges=n,i&&setTimeout((function(){e.loading=!1}),800);case 8:case"end":return s.stop()}}),s)})))()},handleClick:function(t,e){this.$store.dispatch("app/setIndex",e),localStorage.setItem("songID",t),this.$store.dispatch("app/chooseSong",t),this.setIDLoop(),this.$store.dispatch("app/setSongSheetID",this.$route.params.id)},setIDLoop:function(){var t=this;this.idList=[],this.playlist.tracks.map((function(e){t.idList.push(e.id)})),this.$store.dispatch("app/setIdList",this.idList)},getCommentList:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,i,n,o,l;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!(e.total>5e3)){s.next=10;break}return a={id:t,offset:e.offset,before:e.before},s.next=4,r["a"].getCommentAlbumB(a);case 4:i=s.sent,i.total>5e3&&(e.before=e.commentList.comments[19].time),e.total=i.total,e.commentList=i,s.next=17;break;case 10:return n={id:t,offset:e.offset},s.next=13,r["a"].getCommentAlbumA(n);case 13:o=s.sent,o.total>5e3&&(l=o.comments.length-1,e.before=o.comments[l].time),e.total=o.total,e.commentList=o;case 17:case"end":return s.stop()}}),s)})))()},handleChange:function(t){this.offset=t,this.getCommentList(this.$route.params.id)},handalPlayAll:function(){var t=this.playlist.tracks[0].id;this.$store.dispatch("app/setIndex",0),localStorage.setItem("songID",t),this.$store.dispatch("app/chooseSong",t),this.setIDLoop(),this.$store.dispatch("app/setSongSheetID",this.$route.params.id)}}},l=o,c=(s("8af0"),s("2877")),m=Object(c["a"])(l,a,i,!1,null,"0bf36056",null);e["default"]=m.exports},"8af0":function(t,e,s){"use strict";var a=s("e856"),i=s.n(a);i.a},e856:function(t,e,s){}}]);