(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},"11a5":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("99af");var i=n("b775"),s={getSearchHot:function(){return Object(i["a"])({url:"search/hot/detail",method:"get"})},getSearchHotSong:function(t){return Object(i["a"])({url:"search?keywords=".concat(t.keywords,"&type=").concat(t.type,"&offset=").concat(t.offset),method:"get"})},getSearchData:function(t){return Object(i["a"])({url:"cloudsearch",method:"get",data:t})},getDefaultSearchWord:function(){return Object(i["a"])({url:"search/default",method:"get"})},getSearchSuggest:function(t){return Object(i["a"])({url:"search/suggest",method:"get",data:t})},getMultimatchSearchData:function(t){return Object(i["a"])({url:"search/multimatch",method:"get",data:t})}}},"1d4a":function(t,e,n){t.exports=n.p+"static/img/start.d549f07b.png"},"2cd0":function(t,e,n){},3191:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("99af");var i=n("b775"),s={getHomeBanner:function(t){return Object(i["a"])({url:"/banner?type=0",method:"get"})},getRecommendedSongList:function(t){return Object(i["a"])({url:"/personalized?limit=14",method:"get"})},getRecommendedNewsong:function(t){return Object(i["a"])({url:"/personalized/newsong",method:"get"})},getRecommendedDjprogram:function(t){return Object(i["a"])({url:"/personalized/djprogram",method:"get"})},getRecommendedProgram:function(t){return Object(i["a"])({url:"/program/recommend",method:"get"})},getPersonalizedPrivatecontent:function(){return Object(i["a"])({url:"/personalized/privatecontent",method:"get"})},getPlaylistCatlist:function(){return Object(i["a"])({url:"/playlist/catlist",method:"get"})},getPlaylistHot:function(){return Object(i["a"])({url:"/playlist/hot",method:"get"})},getPlaylist:function(t){return Object(i["a"])({url:"/top/playlist?order=hot&cat=".concat(t.cat,"&offset=").concat(t.offset),method:"get"})},getPlaylistInfo:function(t){return Object(i["a"])({url:"/playlist/detail?id=".concat(t),method:"get"})},getPlaylistComment:function(t){return Object(i["a"])({url:"/comment/playlist?id==".concat(t),method:"get"})},getCommentAlbumA:function(t){return Object(i["a"])({url:"/comment/playlist?id=".concat(t.id,"&type=").concat(t.type,"&offset=").concat(t.offset),method:"get"})},getCommentAlbumB:function(t){return Object(i["a"])({url:"/comment/playlist?id=".concat(t.id,"&offset=").concat(t.offset,"&before=").concat(t.before),method:"get"})}}},4360:function(t,e,n){"use strict";var i=n("2b0e"),s=n("2f62"),o={keywords:function(t){return t.app.keywords},ablum:function(t){return t.app.ablum},singerID:function(t){return t.app.singerID},songId:function(t){return t.app.songId},watchMusicTime:function(t){return t.app.watchMusicTime},idindex:function(t){return t.app.idindex},idList:function(t){return t.app.idList},songSheetID:function(t){return t.app.songSheetID},LrcTime:function(t){return t.app.LrcTime},showStatus:function(t){return t.app.showStatus}},a=o,r=function(){return{keywords:null,ablum:null,singerID:null,songId:null,watchMusicTime:"00:00",idindex:0,idList:[],songSheetID:5058038668,showStatus:!1,LrcTime:0}},c=r(),u={SET_kEYWORDS:function(t,e){t.keywords=e},SET_ALBUM:function(t,e){t.ablum=e},SET_SINGER:function(t,e){t.singerID=e},SET_SONG:function(t,e){t.songId=e},SET_MUSICTIME:function(t,e){t.watchMusicTime=e},SET_INDEX:function(t,e){t.idindex=e},SET_IDLIST:function(t,e){t.idList=e},SET_SONGSHEETID:function(t,e){t.songSheetID=e},SET_SHOWSTATUS:function(t,e){t.showStatus=e},SET_LRCTIME:function(t,e){t.LrcTime=e}},l={chooseHotSong:function(t,e){var n=t.commit;n("SET_kEYWORDS",e)},chooseAblum:function(t,e){var n=t.commit;n("SET_ALBUM",e)},chooseSinger:function(t,e){var n=t.commit;n("SET_SINGER",e)},chooseSong:function(t,e){var n=t.commit;n("SET_SONG",e)},watchMusicTime:function(t,e){var n=t.commit;n("SET_MUSICTIME",e)},setIndex:function(t,e){var n=t.commit;n("SET_INDEX",e)},setIdList:function(t,e){var n=t.commit;n("SET_IDLIST",e)},setSongSheetID:function(t,e){var n=t.commit;n("SET_SONGSHEETID",e)},setShowStatus:function(t,e){var n=t.commit;n("SET_SHOWSTATUS",e)},setLrcTime:function(t,e){var n=t.commit;n("SET_LRCTIME",e)}},d={namespaced:!0,state:c,mutations:u,actions:l};i["default"].use(s["a"]);e["a"]=new s["a"].Store({modules:{app:d},getters:a})},"480d":function(t,e,n){},"55d1":function(t,e,n){t.exports=n.p+"static/img/small.fa10f7f5.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("4d90"),n("5319"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a={name:"App"},r=a,c=(n("034f"),n("5c64"),n("2877")),u=Object(c["a"])(r,s,o,!1,null,null,null),l=u.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[t.show?t._e():n("div",[n("top"),n("side-bar",{staticClass:"sidebar"}),n("app-mian",{staticClass:"appmain"})],1),n("transition",{attrs:{name:"el-zoom-in-bottom"}},[t.show?n("div",{staticClass:"transition-box"},[n("div",{staticClass:"transition-boxHead"},[t.songInfo.al?n("img",{staticClass:"songInfoImg",attrs:{src:t.songInfo.al.picUrl,alt:""}}):t._e(),n("h2",{staticClass:"songTitle"},[t._v(t._s(t.songInfo.name)+" "),n("span",{staticStyle:{"border-radius":"2px",width:"20px",color:"white","background-color":"red"}},[t._v("全损音质")]),t._l(t.songInfo.ar,(function(e,i){return n("span",{key:i,staticStyle:{display:"inline-block",color:"black","font-size":"small"}},[t._v(t._s(e.name)),t.songInfo.ar.length>1?n("span",{staticStyle:{display:"inline-block"}},[t._v("/")]):t._e()])}))],2),n("ul",{ref:"overflowLrc",staticClass:"overflowLrc"},[n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._l(t.lrc,(function(e,i){return n("li",{key:i,ref:"lrc_ul",refInFor:!0,staticClass:"list-unstyled lrcLi",class:{isLrcAcived:t.resolveTime(t.lrctime)==e.time},staticStyle:{overflow:"auto"}},[t._v(" "+t._s(e.content)+" ")])}))],2)]),n("div",{staticClass:"transition-boxBody"},[n("div",{staticClass:"commtent"},[n("div",[n("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"140","show-word-limit":""},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),n("el-button",{staticClass:"mr-1 mt-1",staticStyle:{display:"block",float:"right"}},[t._v("发送")])],1),t.commentList.hotComments?t._e():n("h5",[t._v("暂无评论")]),t.commentList.hotComments?n("div",{staticClass:"second"},[n("h5",{staticClass:"hot text-primary"},[t._v("精彩评论:")]),t._l(t.commentList.hotComments,(function(e,i){return n("div",{key:i},[n("img",{staticClass:"hotimg",attrs:{src:e.user.avatarUrl,alt:""}}),n("div",{staticClass:"nickname "},[n("span",{staticClass:"text-primary"},[t._v(t._s(e.user.nickname))]),t._v(":"+t._s(e.content)),n("div",{staticClass:"time"},[t._v(t._s(t._f("timeFordat")(e.time)))])]),n("el-divider")],1)}))],2):t._e(),t.commentList.comments?n("div",{staticClass:"second"},[n("h5",{staticClass:"hot text-primary"},[t._v("最新评论:")]),t._l(t.commentList.comments,(function(e,i){return n("div",{key:i},[n("img",{staticClass:"hotimg",attrs:{src:e.user.avatarUrl,alt:""}}),n("div",{staticClass:"nickname "},[n("span",{staticClass:"text-primary"},[t._v(t._s(e.user.nickname))]),t._v(":"+t._s(e.content)),n("div",{staticClass:"time"},[t._v(t._s(t._f("timeFordat")(e.time)))])]),n("el-divider")],1)})),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleChange}})],2):t._e()])])]):t._e()]),n("foo-ter",{staticClass:"footer"})],1)},h=[],f=(n("fb6a"),n("a9e3"),n("466d"),n("1276"),n("53ca")),g=(n("96cf"),n("1da1")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view",{key:t.key})],1)],1)},v=[],S={name:"Appmain",computed:{key:function(){return this.$route.path}}},b=S,C=Object(c["a"])(b,p,v,!1,null,"75c5e893",null),w=C.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("el-divider"),n("div",{staticClass:"vue_aplayer"},[n("audio",{ref:"audio",attrs:{src:t.music.src,autoplay:""}}),n("transition",{attrs:{name:"el-zoom-in-center"}},[!t.showSongInfo&&t.id?n("img",{staticClass:"inMore border",attrs:{src:t.inMore,alt:""},on:{click:function(e){return t.showSong(!0)}}}):t._e(),t.showSongInfo&&t.id?n("img",{staticClass:"inMore border",attrs:{src:t.outMore,alt:""},on:{click:function(e){return t.showSong(!1)}}}):t._e()]),n("div",{staticClass:"music"},[n("p",{staticStyle:{display:"inline-block",float:"left","margin-left":"2%","margin-top":"5%",width:"20%"}},[t._v(t._s(t.music.title))]),t.music.imgUrl?n("img",{staticClass:"img",attrs:{src:t.music.imgUrl}}):t._e(),!t.isPlay&&t.music.imgUrl?n("img",{staticClass:"start",attrs:{src:t.startIcon},on:{click:t.start}}):t._e(),t.isPlay?n("img",{staticClass:"start",attrs:{src:t.stopIcon},on:{click:t.stop}}):t._e()]),n("div",{staticClass:"watchMusictime"},[t._v(t._s(t.watchMusictime))]),n("progress-bar",{staticClass:"vue-simple-progress",attrs:{"bar-color":"#dc720f",val:t.progress,size:"medium"}}),n("div",{staticClass:"musictime"},[t._v(" "+t._s(t.musictime))]),n("div",{staticClass:"voice"},[n("img",{staticClass:"voiceimg",attrs:{src:t.voice,alt:""}}),n("el-slider",{on:{input:t.voiclSliderChange},model:{value:t.voiclValue,callback:function(e){t.voiclValue=e},expression:"voiclValue"}})],1),n("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"}},[n("div",[n("ul",t._l(t.playlist,(function(e,i){return n("li",{key:i,staticClass:"list-unstyled mb-2",class:{songIsAcyived:t.songIndex==i},staticStyle:{display:"flex","flex-wrap":"wrap"},on:{click:function(n){return t.handalClickGoSong(e.id,i)}}},[n("div",{staticStyle:{width:"40%"}},[t._v(" "+t._s(e.name))]),t._l(e.ar,(function(i,s){return n("div",{key:s,staticStyle:{display:"inline-block","text-align":"right"}},[e.ar.length>1?n("div",{staticStyle:{display:"inline-block"}},[t._v("/")]):t._e(),t._v(t._s(i.name)+" ")])}))],2)})),0)]),n("img",{staticStyle:{"margin-top":"-10px","margin-left":"-20px"},attrs:{slot:"reference",src:t.more,alt:""},slot:"reference"})])],1)],1)},y=[],x=(n("d81d"),n("b0c0"),n("b680"),n("b775")),I={getMusicUrl:function(t){return Object(x["a"])({url:"/song/url?id=".concat(t),method:"get"})},getMusicInfo:function(t){return Object(x["a"])({url:"/song/detail?ids=".concat(t),method:"get"})},getMusicAllow:function(t){return Object(x["a"])({url:"/check/music?id=".concat(t),method:"get"})},getMusicIFC:function(t){return Object(x["a"])({url:"/lyric?id=".concat(t),method:"get"})}},k=n("a7e3"),T=n.n(k),_=n("3191"),L={name:"FooTer",components:{ProgressBar:T.a},data:function(){return{id:null,isPlay:!1,startIcon:n("1d4a"),stopIcon:n("7e25"),music:{title:"",subTitle:"",imgUrl:"",src:""},musictime:"00:00",watchMusictime:"00:00",voiclValue:50,voice:n("9e56"),more:n("6664"),progress:0,idList:[],index:0,playlist:[],privileges:[],inMore:n("7acd"),outMore:n("55d1"),showSongInfo:!1}},computed:{song:function(){return this.$store.getters.songId},watchmusictime:function(){return this.$store.getters.watchMusicTime},songIndex:function(){return this.$store.getters.idindex},idlist:function(){return this.$store.getters.idList},songSheetId:function(){return this.$store.getters.songSheetID}},watch:{song:function(){this.id=this.song,this.feach()},watchmusictime:function(){this.watchMusictime=this.watchmusictime},songIndex:function(){this.index=this.songIndex},progress:function(){100==this.progress&&this.nextSong(this.index)},songSheetId:function(){this.getSongSheetID(this.songSheetId)}},mounted:function(){this.getSongSheetID(this.songSheetId)},methods:{showSong:function(t){this.showSongInfo=t,this.$store.dispatch("app/setShowStatus",t)},feach:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n,i,s,o,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return localStorage.setItem("songID",t.id),t.$store.dispatch("app/chooseSong",t.id),e.next=4,I.getMusicUrl(t.id);case 4:return n=e.sent,i=n.data,e.next=8,I.getMusicAllow(t.id);case 8:return s=e.sent,1==s.success?i.map((function(e){e.url&&(t.music.src=e.url)})):t.$message.error(s.message),e.next=12,I.getMusicInfo(t.id);case 12:return o=e.sent,a=o.songs,t.music.title=a[0].name,t.music.subTitle="网抑云,你最好的歌声",t.music.imgUrl=a[0].al.picUrl,e.next=19,I.getMusicIFC(t.id);case 19:r=e.sent,r.lrc?t.music.lrc=r.lrc.lyric:t.music.lrc="[00:00:00] 没有歌词哦",t.musicTime(),t.changeProgress(),t.watchMusicTime();case 24:case"end":return e.stop()}}),e)})))()},musicTime:function(){var t=document.querySelector("audio");this.isPlay=!0,t.play();var e=t.duration,n=e/60,i=parseInt(n);i<10&&(i="0"+i);var s=e%60,o=Math.round(s);o<10&&(o="0"+o),this.musictime=i+"："+o},watchMusicTime:function(){var t=this,e=document.getElementsByTagName("audio")[0];e.addEventListener("timeupdate",(function(){var n;n=Math.floor(e.currentTime);var i=n/60,s=parseInt(i);s<10&&(s="0"+s);var o=n%60,a=Math.round(o);a<10&&(a="0"+a);var r=s+":"+a;t.$store.dispatch("app/setLrcTime",a),t.$store.dispatch("app/watchMusicTime",r)}),!1)},start:function(){this.isPlay=!0;var t=document.querySelector("audio");t.play()},stop:function(){this.isPlay=!1;var t=document.querySelector("audio");t.pause()},changeProgress:function(){var t=this,e=document.querySelector("audio"),n=setInterval((function(){var i=e.currentTime/e.duration,s=(100*i).toFixed(2);s>=100&&(t.isStore=!0,t.progress=0,clearInterval(n)),t.progress=s}),30)},voiclSliderChange:function(t){var e=document.querySelector("audio");e.volume=t/100},nextSong:function(t){t+1==this.idlist.length?(this.id=this.idlist[0],this.index=0,this.feach()):(this.id=this.idlist[t+1],this.index=t+1,this.feach())},getSongSheetID:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,_["a"].getPlaylistInfo(t);case 2:i=n.sent,s=i.playlist,e.playlist=s.tracks;case 5:case"end":return n.stop()}}),n)})))()},handalClickGoSong:function(t,e){this.$store.dispatch("app/setIndex",e),localStorage.setItem("songID",t),this.$store.dispatch("app/chooseSong",t),this.setIDLoop()},setIDLoop:function(){var t=this;this.idList=[],this.playlist.tracks.map((function(e){t.idList.push(e.id)})),this.$store.dispatch("app/setIdList",this.idList)}}},E=L,M=(n("aec1"),Object(c["a"])(E,A,y,!1,null,"164cc6f6",null)),j=M.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1",router:!0,"active-text-color":"red"}},[n("div",{staticClass:"ml-2",staticStyle:{"text-align":"left",color:"#42b983","font-size":"small"}},[t._v("推荐")]),n("el-menu-item",{attrs:{route:"/home",index:"1"}},[n("i",{staticClass:"el-icon-headset"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("发现")])]),n("el-menu-item",{attrs:{route:"/video",index:"2"}},[n("i",{staticClass:"el-icon-video-camera"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("视频")])])],1)],1)},U=[],D={name:"SideBar",data:function(){return{Rindex:1}},created:function(){this.routesMatch},methods:{routesMatch:function(){var t=this.$route;console.log(t),"/home"==t.fullPath?this.Rindex=1:this.Rindex=2}}},O=D,N=(n("7221"),Object(c["a"])(O,R,U,!1,null,"49e601f4",null)),P=N.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav mt--5"},[i("img",{attrs:{src:n("9d64")},on:{click:t.GoHome}}),i("div",{staticClass:"mt-3 go"},[i("el-button",{attrs:{icon:"el-icon-arrow-left"},on:{click:function(e){return t.go(-1)}}}),i("el-button",{attrs:{icon:"el-icon-arrow-right"},on:{click:function(e){return t.go(1)}}})],1),i("el-input",{staticClass:" mt-3 mr-5 seach",attrs:{placeholder:"音乐/视频/用户"},on:{focus:t.houFocus,blur:t.hotBlur,change:t.handelChangeSeach},model:{value:t.seachValue,callback:function(e){t.seachValue=e},expression:"seachValue"}},[i("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),i("div",{staticClass:"ml-auto mt-3 mr-5 ",on:{click:t.handelShowLogin}},[i("el-button",{attrs:{icon:"el-icon-s-custom"}}),i("span",{staticClass:"text-light"},[t._v(t._s(t.loginStatus))])],1),t.hotShow?i("div",{staticClass:"popoverDiv"},[i("div",[i("div",{staticClass:"popoverHot text-danger h5"},[t._v("搜索历史:")]),i("div",{staticClass:"popoverHot text-danger h5"},[t._v("热搜榜:")]),i("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.hotloading,expression:"hotloading"}],staticClass:" popoverHotContent"},t._l(t.hotList,(function(e,n){return i("li",{key:n,staticClass:"list-unstyled  hotLi",on:{click:function(n){return t.handleClickHot(e.searchWord)}}},[i("span",{staticClass:"text-dark h4  ",on:{click:function(n){return t.handleClickHot(e.searchWord)}}},[t._v(t._s(n+1))]),i("div",{staticClass:"hotDiv",on:{click:function(n){return t.handleClickHot(e.searchWord)}}},[i("div",{staticStyle:{width:"100%"}},[i("div",{staticClass:"hotsearchWord"},[t._v(t._s(e.searchWord))]),i("div",{staticClass:"hotscore"},[t._v("( "+t._s(e.score)+" )")])]),i("div",{staticStyle:{width:"100%"}},[i("div",{staticClass:"hotcontent"},[t._v(t._s(e.content))]),i("img",{staticClass:"hotIcon",attrs:{src:e.iconUrl}})])])])})),0)])]):t._e(),i("el-dialog",{attrs:{title:t.loginTitle,visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t.showLogin?i("div",{staticClass:"dialogVisible",staticStyle:{width:"100%"}},[i("div",{staticClass:"demo-input-suffix"},[t._v(" 手机号码/邮箱： "),i("el-input",{attrs:{placeholder:"请输入 手机号码/邮箱","suffix-icon":"el-icon-user"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),i("div",{staticClass:"demo-input-suffix"},[t._v(" 密码： "),i("el-input",{attrs:{placeholder:"请输入密码",type:"password","suffix-icon":"el-icon-warning-outline"},model:{value:t.passWord,callback:function(e){t.passWord=e},expression:"passWord"}})],1),i("div",{staticClass:" text-primary",staticStyle:{float:"right"},on:{click:function(){t.showLogin=!1,t.loginTitle="注册",t.loginType=1}}},[t._v(" 注册 ")]),i("div",{staticClass:"btnDiv"},[i("button",{on:{click:t.handelCance}},[t._v("取消")]),i("button",{on:{click:t.handelLogin}},[t._v("登录")])])]):t._e(),t.showLogin?t._e():i("div",{staticClass:"dialogVisible",staticStyle:{width:"100%"}},[i("div",{staticClass:"demo-input-suffix"},[t._v(" 手机号码： "),i("el-input",{attrs:{type:"number",placeholder:"请输入 手机号码","suffix-icon":"el-icon-user"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),i("div",{staticClass:"demo-input-suffix"},[t._v(" 昵称： "),i("el-input",{attrs:{type:"number",placeholder:"请输入昵称","suffix-icon":"el-icon-user"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),i("div",{staticClass:"demo-input-suffix"},[t._v(" 密码： "),i("el-input",{attrs:{placeholder:"请输入密码",type:"password","suffix-icon":"el-icon-warning-outline",disabled:t.codeStatus},model:{value:t.passWord,callback:function(e){t.passWord=e},expression:"passWord"}})],1),i("div",{staticClass:"row"},[i("span",{staticClass:"ml-3",staticStyle:{width:"100%","text-align":"left"}},[t._v(" 验证码：")]),i("el-input",{staticClass:"col-10 mt-2",attrs:{placeholder:"请输入验证码"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),i("button",{staticStyle:{border:"none","background-color":"red","border-radius":"50vh",color:"white"},attrs:{disabled:t.sendCodeStatus},on:{click:t.sendCode}},[t._v(" "+t._s(t.phoneCode)+" ")])],1),i("div",{staticClass:" text-primary mt-1",staticStyle:{float:"right"},on:{click:function(){t.showLogin=!0,t.loginTitle="登录",t.loginType=0}}},[t._v(" 登录 ")]),i("div",{staticClass:"btnDiv"},[i("button",{on:{click:t.handelCance}},[t._v("取消")]),i("button",{on:{click:t.handelLogin}},[t._v(t._s(t.loginTitle))])])])])],1)},V=[],H=(n("841c"),n("11a5")),B=(n("99af"),{sentCode:function(t){return Object(x["a"])({url:"captcha/sent?phone=".concat(t),method:"get"})},registerUser:function(t){return Object(x["a"])({url:"register/cellphone?phone=".concat(t.phone,"&password=").concat(t.password,"&captcha=").concat(t.captcha,"&nickname=").concat(t.nickname),method:"get"})},login:function(t){return Object(x["a"])({url:"/login/".concat(t.type,"?phone=").concat(t.username,"&password=").concat(t.password),method:"get"})}}),X=n("5f87"),G={name:"Top",data:function(){return{seachValue:"",hotList:[],hotShow:!1,hotloading:!0,showLogin:!0,dialogVisible:!1,loginTitle:"登录",userName:null,passWord:null,captcha:null,nickname:null,loginType:0,loginStatus:"未登录",phoneCode:"发送验证码",codeStatus:!0,countDown:60,sendCodeStatus:!1}},created:function(){},methods:{GoHome:function(){this.$router.push({path:"/home"})},go:function(t){this.$router.go(t)},handelChangeSeach:function(){localStorage.setItem("keywords",this.seachValue),this.$router.push({path:"/seach"}),this.$store.dispatch("app/chooseHotSong",this.seachValue),this.hotShow=!1},getHot:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,H["a"].getSearchHot();case 2:n=e.sent,i=n.data,i?(t.hotloading=!1,i.map((function(t){null==t.iconUrl&&(t.iconUrl="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602843601248&di=82658b6c03688e73fa61b792d52c718b&imgtype=0&src=http%3A%2F%2Fpic.16pic.com%2F00%2F26%2F38%2F16pic_2638652_b.jpg")})),t.hotList=i):t.hotloading=!0;case 5:case"end":return e.stop()}}),e)})))()},houFocus:function(){this.getHot(),this.hotShow=!0},hotBlur:function(){var t=this;setTimeout((function(){t.hotShow=!1}),500)},handleClickHot:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:localStorage.setItem("keywords",t),e.$router.push({path:"/seach"}),e.$store.dispatch("app/chooseHotSong",t);case 3:case"end":return n.stop()}}),n)})))()},handelShowLogin:function(){this.dialogVisible=!0},handelCance:function(){this.dialogVisible=!1},handelLogin:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n,i,s,o,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.loginType,e.t0=n,e.next=0===e.t0?4:1===e.t0?19:21;break;case 4:if(null==t.userName||null==t.passWord){e.next=17;break}if(i=t.cheackPE(t.userName),!i){e.next=15;break}return s={type:i,username:t.userName,password:t.password},e.next=10,B.login(s);case 10:o=e.sent,a=o.message,r=o.cookie,t.$message({showClose:!0,message:a,type:"success"}),r&&(Object(X["a"])(r),t.loginStatus="登录成功");case 15:e.next=18;break;case 17:t.$message({showClose:!0,message:"请填写完整的手机号码/邮箱/密码",type:"error"});case 18:return e.abrupt("break",22);case 19:return null!=t.userName&&null!=t.passWord&&null!=t.nickname&&null!=t.captcha?t.cheackPE(t.userName):t.$message({showClose:!0,message:"请填写完整的手机号码/邮箱/密码",type:"error"}),e.abrupt("break",22);case 21:console.log("登录错误");case 22:case"end":return e.stop()}}),e)})))()},cheackPE:function(t){if(-1!=t.search("@")){var e=this.emailVerification(t);return console.log("这是邮箱",e),e}var n=this.phoneVerification(t);return console.log("电话号码",n),n},phoneVerification:function(t){var e=/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;return e.test(t)?"cellphone":(this.$message({showClose:!0,message:"手机号码有误，请重填",type:"error"}),!1)},emailVerification:function(t){var e=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;return e.test(t)?"email":(this.$message({showClose:!0,message:"邮箱格式不正确，请重填",type:"error"}),!1)},sendCode:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.userName){e.next=7;break}return n=t.userName,e.next=4,B.sentCode(n);case 4:i=e.sent,s=i.code,200==s?(t.sendCodeStatus=!0,t.codeStatus=!1,o=setInterval((function(){t.countDown<=0&&(clearInterval(o),t.countDown=60,t.phoneCode="发送验证码"),t.phoneCode=t.countDown-1,t.countDown=t.phoneCode}),1e3)):t.$message({showClose:!0,message:"请输入正确的手机号码",type:"error"});case 7:case"end":return e.stop()}}),e)})))()}}},Y=G,Q=(n("6662"),Object(c["a"])(Y,z,V,!1,null,"1ed738b4",null)),K=Q.exports,F={getSongUrl:function(t){return Object(x["a"])({url:"song/url?id=".concat(t),method:"get"})},getSongLyric:function(t){return Object(x["a"])({url:"lyric?id=".concat(t),method:"get"})},getSongLCommentA:function(t){return Object(x["a"])({url:"/comment/music?id=".concat(t.id,"&limit=20&offset=").concat(t.offset),method:"get"})},getSongLCommentB:function(t){return Object(x["a"])({url:"/comment/music?id=".concat(t.id,"&limit=20&offset=").concat(t.offset,"&before=").concat(t.before),method:"get"})},getSongSimis:function(t){return Object(x["a"])({url:"/simi/song?id=".concat(t),method:"get"})}},W={name:"Index",components:{appMian:w,fooTer:j,sideBar:P,top:K},data:function(){return{show:!1,id:null,lrc:{},lrctime:null,idnex:0,songInfo:[],offset:0,before:0,total:0,commentList:[],textarea:""}},computed:{showLfcStatus:function(){return this.$store.getters.showStatus},songID:function(){return this.$store.getters.songId},getMusictime:function(){return this.$store.getters.LrcTime}},watch:{showLfcStatus:function(){this.show=this.showLfcStatus,this.resolveTime(this.lrctime)},songID:function(){this.id=this.songID,this.feach(this.songID)},getMusictime:function(){var t=this.getMusictime%60,e=Math.round(t);this.lrctime=e}},created:function(){this.id&&this.feach(this.songID)},mounted:function(){window.addEventListener("scroll",this.resolvescrollTop)},methods:{feach:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var i,s,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,F.getSongLyric(t);case 2:return i=n.sent,s=i.lrc,e.lrc=[],s?e.processingLyrics(s.lyric):e.processingLyrics("[00:00:00] 没有歌词哦"),n.next=8,I.getMusicInfo(t);case 8:o=n.sent,a=o.songs,e.songInfo=a[0],e.getCommentList(t);case 12:case"end":return n.stop()}}),n)})))()},getCommentList:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var i,s,o,a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(e.total>5e3)){n.next=10;break}return i={id:t,offset:e.offset,before:e.before},n.next=4,F.getSongLCommentB(i);case 4:s=n.sent,s.total>5e3&&(e.before=e.commentList.comments[19].time),e.total=s.total,e.commentList=s,n.next=17;break;case 10:return o={id:t,offset:e.offset},n.next=13,F.getSongLCommentA(o);case 13:a=n.sent,a.total>5e3&&(r=a.comments.length-1,e.before=a.comments[r].time),e.total=a.total,e.commentList=a;case 17:case"end":return n.stop()}}),n)})))()},handleChange:function(t){this.offset=t,this.getCommentList(this.id)},processingLyrics:function(t){for(var e=t.split("\n"),n=[],i=0;i<e.length;i++){var s=decodeURIComponent(e[i]),o=/\[\d*:\d*((\.|:)\d*)*\]/g,a=s.match(o);if(a)for(var r=s.replace(o,""),c=0,u=a.length;c<u;c++){var l=a[c],d=Number(String(l.match(/\[\d*/i)).slice(1)),m=Number(String(l.match(/:\d*/i)).slice(1)),h=60*d+m;""!==r&&n.push({time:h,content:r})}}this.lrc=n},resolveTime:function(t){for(var e=this,n=this.lrc,i=function(i){if(i-1>0&&!(i+1)<n.length&&n[i-1].time<t&&t<n[i+1].time)return e.$nextTick((function(){e.resolvescrollTop(i)})),{v:n[i].time}},s=0;s<n.length;s++){var o=i(s);if("object"===Object(f["a"])(o))return o.v}},resolvescrollTop:function(t){var e=this.$refs.overflowLrc,n=e.children;if(n){var i=e.children[t],s=i.offsetTop-e.clientHeight/2;e.scrollTo({top:s,behavior:"smooth"})}}}},J=W,q=(n("cd9e"),Object(c["a"])(J,m,h,!1,null,"5a602886",null)),Z=q.exports;i["default"].use(d["a"]);var $=[{path:"/",name:"Home",redirect:"/home",component:Z,children:[{path:"/home",name:"home",component:function(){return n.e("chunk-2ddf6f4b").then(n.bind(null,"bb51"))},meta:{title:"首页"}},{path:"/seach",name:"seach",component:function(){return n.e("chunk-3c831892").then(n.bind(null,"7b33"))}},{path:"/seach/AlbumContent",name:"AlbumContent",component:function(){return n.e("chunk-76f714b1").then(n.bind(null,"396e"))}},{path:"/seach/SingerContent",name:"AlbumContent",component:function(){return n.e("chunk-16546fd1").then(n.bind(null,"f2cf"))}},{path:"/SongSheetInfo/:id",name:"SongSheetInfo",component:function(){return n.e("chunk-467725d5").then(n.bind(null,"7acc"))}}]},{path:"/video",name:"Video",redirect:"/video",component:Z,children:[{path:"/video",name:"video",component:function(){return n.e("chunk-22771fc0").then(n.bind(null,"4aa1"))}},{path:"/mv/:id",name:"MV",component:function(){return n.e("chunk-9e84d298").then(n.bind(null,"d553"))}},{path:"/mv/all",name:"MVAll",component:function(){return n.e("chunk-2d0d3aa4").then(n.bind(null,"5e75"))}}]}],tt=new d["a"]({routes:$}),et=d["a"].prototype.push;d["a"].prototype.push=function(t){return et.call(this,t).catch((function(t){return t}))};var nt=tt,it=n("4360"),st=n("5c96"),ot=n.n(st);n("0fae");function at(t,e){var n,i={"Y+":e.getFullYear().toString(),"m+":(e.getMonth()+1).toString(),"d+":e.getDate().toString(),"H+":e.getHours().toString(),"M+":e.getMinutes().toString(),"S+":e.getSeconds().toString()};for(var s in i)n=new RegExp("("+s+")").exec(t),n&&(t=t.replace(n[1],1==n[1].length?i[s]:i[s].padStart(n[1].length,"0")));return t}i["default"].use(ot.a),i["default"].config.productionTip=!1,i["default"].filter("timeFordat",(function(t){var e=new Date(t);return at("YYYY-mm-dd HH:MM",e)})),new i["default"]({router:nt,store:it["a"],render:function(t){return t(l)}}).$mount("#app")},"5c64":function(t,e,n){"use strict";var i=n("d32a"),s=n.n(i);s.a},"5f87":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("a78e"),s=n.n(i),o="vue_admin_template_token";function a(t){return s.a.set(o,t)}},6662:function(t,e,n){"use strict";var i=n("480d"),s=n.n(i);s.a},6664:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAYAAADy19hsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEHSURBVFhH7ZY9DoMwDEZ7OHZm2GEmt+AS9BCol6h6E9QZdaP6kEAuNVF+cBCShycgscmTYwVu4/iZroQKS6PC0qiwNCosTbRw192nLMuCQC73ThvRwlh4GN7snA3kIJebs3GIMDfuggq7QBctinJ+toEYLtcVbQkfThGmW3yJloghuTAOfmPMvDCuvh+CpMJVVc0Lbqnreo3hWuSUlqCf4zzP1/sF10ojlhu3ESRMqwu55/P1U82mMWzelmTCixig1aTSNH4P1zjKYRUuS78KJ/35cenhvn/8jW+hu+NKkDDYOyUwzsUfRbAwQIWw/RDFNaRivkQJn4EKS6PC0qiwNCosSdu20xdAiwJjGykqxQAAAABJRU5ErkJggg=="},7221:function(t,e,n){"use strict";var i=n("91c8"),s=n.n(i);s.a},"7acd":function(t,e,n){t.exports=n.p+"static/img/large.e46f209b.png"},"7e25":function(t,e,n){t.exports=n.p+"static/img/stop.710205d6.png"},"85ec":function(t,e,n){},"91c8":function(t,e,n){},"9d64":function(t,e){t.exports="data:image/png;base64,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"},"9e56":function(t,e,n){t.exports=n.p+"static/img/voice.563303ce.png"},a2c1:function(t,e,n){},aec1:function(t,e,n){"use strict";var i=n("a2c1"),s=n.n(i);s.a},b775:function(t,e,n){"use strict";n("d3b7");var i=n("bc3a"),s=n.n(i),o=n("5c96"),a=(n("4360"),n("5f87"),n("f395"),s.a.create({baseURL:"https://music.server.zhangxc.cn/",withCredentials:!0,timeout:1e5}));a.interceptors.request.use((function(t){return t}),(function(t){return console.log("do something with request error",t),Promise.reject(t)})),a.interceptors.response.use((function(t){var e=t.data;if(e.code=200)return e;o["Message"].error(e.msg)}),(function(t){var e=t.response.data;return console.log(e),o["Message"].error(e.message),Promise.reject(e)})),e["a"]=a},cd9e:function(t,e,n){"use strict";var i=n("2cd0"),s=n.n(i);s.a},d32a:function(t,e,n){}},[[0,"runtime","chunk-elementUI","chunk-libs"]]]);