webpackJsonp([1],{"/PX2":function(t,e){},"/gCc":function(t,e){},"1Mvu":function(t,e){},"3YPE":function(t,e){},"4pi5":function(t,e){},"56b3":function(t,e){},"5OHe":function(t,e){},"6VpE":function(t,e){},"73im":function(t,e){},B2Rn:function(t,e){},C7tX:function(t,e){},HqRz:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("IvJb"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("C7Lr")({name:"App"},a,!1,function(t){n("VotE")},null,null).exports,r=n("KGCO"),o=(n("6VpE"),{data:function(){return{allLi:[],curIndex:0,navList:[{title:"科技1",type:""},{title:"娱乐",type:"pcent"},{title:"科技",type:"pctech"},{title:"头条4",type:"t"},{title:"科技5",type:"k"},{title:"头条6",type:"t"},{title:"科技1",type:"k"},{title:"头条2",type:"t"},{title:"科技3",type:"k"},{title:"头条4",type:"t"},{title:"科技5",type:"k"},{title:"头条6",type:"t"}]}},mounted:function(){var t=this;new Swiper(".swiper-container2",{freeMode:!0,slidesPerView:"auto",on:{click:function(){t.curIndex=this.clickedIndex,this.setTransition(200);var e=this.slides[this.clickedIndex],n=e.offsetLeft+e.clientWidth/2,i=this.wrapperEl.clientWidth,a=this.maxTranslate(),s=i/2-a;n<i/2?this.setTranslate(0):n>s?this.setTranslate(a):this.setTranslate(i/2-n),t.$router.push("/home/index/"+t.navList[t.curIndex].type)}}})}}),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"navleft"},[n("div",{staticClass:"swiper-container2"},[n("div",{staticClass:"swiper-wrapper  w"},t._l(t.navList,function(e,i){return n("div",{staticClass:"swiper-slide",class:{active:t.curIndex===i}},[t._v("\n                      "+t._s(e.title)+"\n                   ")])}))])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navright"},[e("i",{staticClass:"fa fa-navicon"})])}]};var c=n("C7Lr")(o,l,!1,function(t){n("56b3")},"data-v-b43b4d12",null).exports,d={components:{Nav:c}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("header",[n("div",{staticClass:"headTop"},[n("router-link",{attrs:{to:"/search"}},[n("i",{staticClass:"fa fa-search right"})])],1),t._v(" "),n("router-view",{attrs:{name:"Nav"}})],1),t._v(" "),n("router-view",{staticClass:"setion"}),t._v(" "),n("footer",[n("ul",[n("li",[n("router-link",{attrs:{to:"/home/index"}},[t._v("首页")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/home/video"}},[t._v("视频")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/home/subscribe"}},[t._v("订阅")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/user"}},[t._v("个人")])],1)])])],1)},staticRenderFns:[]};var p=n("C7Lr")(d,u,!1,function(t){n("W7fp")},"data-v-a473d49a",null).exports;n("eT5C"),n("S9Mg");i.default.filter("timeFilter",function(t){var e=new Date(t);return e.getHours().toString().padStart(2,"0")+"小时，"+e.getMinutes()+"分钟"});var v={data:function(){return{news:[],allLi:[]}},created:function(){var t=this;this.$http.get("/wz/api/v3/get?_=1543633856801").then(function(e){t.news=e.data.data.filter(function(t,e){return e<5})})},watch:{news:function(t){this.$nextTick(function(){new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},autoplay:{delay:1e3,disableOnInteraction:!0}})})}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},t._l(t.news,function(e){return n("div",{staticClass:"swiper-slide"},[n("a",{attrs:{href:e.url_https}},[n("img",{attrs:{src:e.thumb,alt:""}})]),t._v(" "),n("p",[t._v(" "+t._s(t._f("timeFilter")(e.fpTime))+" ")])])})),t._v(" "),n("div",{staticClass:"swiper-pagination"})])])},staticRenderFns:[]};var h=n("C7Lr")(v,f,!1,function(t){n("B2Rn")},null,null).exports,m={components:{swiper:h},data:function(){return{}},methods:{}},_={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var g=n("C7Lr")(m,_,!1,function(t){n("1Mvu")},null,null).exports,w=n("wSez"),b=n.n(w),C={data:function(){return{video:[]}},created:function(){var t=this,e=Object(w.Toast)({iconClass:"fa fa-spinner fa-pulse",position:"middle",duration:-1});this.$http.get("/wz/api/v3/get?_=1543633856801").then(function(n){console.log(n.data.data),t.video=n.data.data.filter(function(t,e){return e>4}),e.close()})}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("ul",{staticClass:"videoWrap"},t._l(t.video,function(e){return n("li",[n("p",[t._v("\n               "+t._s(e.title)+"\n           ")]),t._v(" "),n("video",{attrs:{src:e.video_url,poster:e.thumb2,controls:"controls",preload:"none"}})])}))])},staticRenderFns:[]};var y=n("C7Lr")(C,x,!1,function(t){n("/PX2")},"data-v-6c0c94bc",null).exports,k={data:function(){return{k:"",con:"",actions:[{name:"zl",method:"callback"},{name:"zzz",method:"callback"}],sheetVisible:""}},methods:{add:function(){this.k=Object(w.Toast)({iconClass:"fa fa-spinner fa-pulse",position:"middle",duration:-1})},close:function(){this.k.close()},clicka:function(){var t=this;w.MessageBox.prompt("请输入姓名").then(function(e){var n=e.value;e.action;t.con=n})}}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"login"},[n("router-link",{attrs:{to:"/login"}},[t._v("登录")])],1),t._v(" "),n("p",[t._v(" "+t._s(t.con)+" ")]),t._v(" "),n("mt-button",{attrs:{type:"default"},on:{click:t.close}},[t._v("default")]),t._v(" "),n("mt-button",{attrs:{type:"primary"},on:{click:t.clicka}},[t._v("primary")]),t._v(" "),n("mt-button",{attrs:{type:"danger"},on:{click:t.add}},[t._v("danger")]),t._v(" "),n("mt-actionsheet",{attrs:{actions:t.actions},model:{value:t.sheetVisible,callback:function(e){t.sheetVisible=e},expression:"sheetVisible"}}),t._v(" "),n("router-view"),t._v(" "),n("footer",[n("ul",[n("li",[n("router-link",{attrs:{to:"/home/index"}},[t._v("首页")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/home/video"}},[t._v("视频")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/home/subscribe"}},[t._v("订阅")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/user"}},[t._v("个人")])],1)])])],1)},staticRenderFns:[]};var $=n("C7Lr")(k,L,!1,function(t){n("bzLG")},"data-v-6640e19b",null).exports,T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"1"}},[t._v("选项一")]),t._v(" "),n("mt-tab-item",{attrs:{id:"2"}},[t._v("选项二")]),t._v(" "),n("mt-tab-item",{attrs:{id:"3"}},[t._v("选项三")])],1),t._v(" "),n("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-container-item",{attrs:{id:"1"}},t._l(10,function(t){return n("mt-cell",{attrs:{title:"内容 "+t}})})),t._v(" "),n("mt-tab-container-item",{attrs:{id:"2"}},t._l(4,function(t){return n("mt-cell",{attrs:{title:"测试 "+t}})})),t._v(" "),n("mt-tab-container-item",{attrs:{id:"3"}},t._l(6,function(t){return n("mt-cell",{attrs:{title:"选项 "+t}})}))],1)],1)},staticRenderFns:[]};var E=n("C7Lr")({data:function(){return{selected:"1"}}},T,!1,function(t){n("3YPE")},null,null).exports,N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("header",[e("router-link",{attrs:{to:"/home"}},[e("i",{staticClass:"fa fa-reply"})]),this._v(" "),e("p",[e("i",{staticClass:"fa fa-search serIcon"}),this._v(" "),e("input",{ref:"ser",staticClass:"ser",attrs:{type:"text"}})]),this._v(" "),e("span",[this._v("取消")])],1),this._v(" "),e("section")])},staticRenderFns:[]};var M=n("C7Lr")({methods:{}},N,!1,function(t){n("4pi5")},"data-v-0cacc5da",null).exports,I={data:function(){return{phone:"",password:"",list:null}},methods:{login:function(){var t=this;this.$http.get("http://localhost:3000/list").then(function(e){t.list=e.data.filter(function(e){return e.phone===t.phone}),t.list.length>0?t.list[0].password===t.password?(alert("登录成功"),t.$router.push("/home")):alert("密码错误"):alert("用户不存在,请先注册")})}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"top"},[i("router-link",{attrs:{to:"/user"}},[i("i",{staticClass:"fa fa-reply"}),t._v(" "),i("span",[t._v("退出")])]),t._v(" "),i("span",{staticClass:"right"},[i("router-link",{attrs:{to:"register"}},[t._v("注册")])],1)],1),t._v(" "),i("section",[i("img",{attrs:{src:n("ZBJ4"),alt:""}}),t._v(" "),i("ul",[i("li",[i("i",{staticClass:"fa fa-user-o"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"邮箱/手机号"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),i("li",[i("i",{staticClass:"fa fa-unlock-alt"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])]),t._v(" "),i("footer",[i("div",{staticClass:"foo",on:{click:t.login}},[t._v("\n            登录\n        ")])])])},staticRenderFns:[]};var R=n("C7Lr")(I,F,!1,function(t){n("HqRz")},"data-v-2ee217c0",null).exports;function P(t,e){if(t>e){var n=t;t=e,e=n}return Math.round(Math.random()*(e-t)+t)}function z(){for(var t=[];t.length<4;){var e=P(0,9);-1==t.indexOf(e)&&t.push(e)}return t}var j={data:function(){return{flag:!0,cold:"",phone:"",password:"",passwordok:""}},methods:{none:function(){this.flag=!1,this.$refs.codeAdd.innerHTML=z().join("")},getValidate:function(){parseInt(9*Math.random()),this.$refs.codeAdd.innerHTML=z().join("")},submit:function(){var t=this;if(this.$refs.codeAdd.innerHTML!==this.cold||""===this.$refs.codeAdd.innerHTML)return alert("验证码有误"),!1;/\w{6,12}/.test(this.password)?this.password!==this.passwordok?alert("密码不一致"):this.$http.post("http://localhost:3000/list",{phone:this.phone,password:this.password},{headers:{"content-type":"application/json"}}).then(function(e){t.$router.push("/user")}):alert("请输入符合条件的密码")}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticClass:"top"},[n("router-link",{attrs:{to:"/user"}},[n("i",{staticClass:"fa fa-reply"})]),t._v(" "),n("span",[n("router-link",{attrs:{to:""}},[t._v("手机注册")])],1)],1),t._v(" "),n("section",[n("ul",[n("li",{staticClass:"one"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"getcode",on:{click:t.none}},[t._v("\n                     获取验证码\n                 ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.flag,expression:"!flag"}],ref:"codeAdd",staticClass:"codeAdd",on:{click:t.getValidate}})]),t._v(" "),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cold,expression:"cold"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.cold},on:{input:function(e){e.target.composing||(t.cold=e.target.value)}}})]),t._v(" "),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"6-12位数字、字母、字符"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordok,expression:"passwordok"}],attrs:{type:"text",placeholder:"确认密码"},domProps:{value:t.passwordok},on:{input:function(e){e.target.composing||(t.passwordok=e.target.value)}}})])]),t._v(" "),n("input",{staticClass:"complete",attrs:{type:"submit",value:"完成"},on:{click:t.submit}})])])},staticRenderFns:[]};var O=n("C7Lr")(j,A,!1,function(t){n("C7tX")},null,null).exports,V=n("4YfN"),H=n.n(V),B=n("9rMa"),S={components:{swiper:h},data:function(){return{arr:["A","B01","B02","B03","B04","B10"],start:0,end:9}},computed:H()({},Object(B.d)(["List","allLi"])),created:function(){this.getData()},methods:H()({loadMore:function(){this.getData()}},Object(B.b)(["getData"]),Object(B.c)(["delList"]))},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("swiper"),t._v(" "),n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},t._l(t.List.allLi,function(e,i){return n("li",{staticClass:"oLi"},[n("a",{attrs:{href:e.link}},[n("div",[n("h4",[t._v(t._s(e.companyFullName)+"\n                        "+t._s(e.title))]),t._v(" "),n("p",[n("span",[t._v(t._s(e.companyName))]),t._v(" "),n("span",[t._v("\n                            "+t._s(e.city)+"\n                            "+t._s(e.createTime))])])]),t._v(" "),n("img",{attrs:{src:"http://www.lgstatic.com/"+e.companyLogo,alt:""}})]),t._v(" "),n("span",{staticClass:"del",on:{click:function(e){t.delList(i)}}},[t._v("X")])])}))],1)},staticRenderFns:[]};var W=n("C7Lr")(S,D,!1,function(t){n("bFMu")},"data-v-ecdc5c9a",null).exports;i.default.directive("scroll",function(t,e){var n=parseInt(t.getAttribute("dis"));t.addEventListener("scroll",function(){t.scrollTop>n?e.value.falg=!0:e.value.falg=!1})}),i.default.directive("top",function(t,e){t.onclick=function(){t.parentNode.scrollTop=0}}),i.default.directive("gd",{bind:function(t){var e=parseInt(t.getAttribute("dis")),n=!1;t.addEventListener("scroll",function(){if(t.scrollTop>e){if(console.log("dayu"),n)return;n=!0,setTimeout(function(){console.log("111"),n=!1,t.scrollTop=0},1e3)}})}});var X={data:function(){return{type:"pcent",allLi:[],vis:{falg:!1}}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$jsonp("http://cre.mix.sina.com.cn/api/v3/get?cateid=1&cre=tianyi&mod="+this.type+"&merge=3&statics=1&length=20&up=0&down=0&fields=media&_=1543819418969").then(function(e){t.allLi=e.data})},del:function(t){this.allLi.splice(t,1)}},watch:{$route:{handler:function(t){this.type=t.params.type,this.getData(),console.log(this.$router)},immediate:!0}}},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.vis,expression:"vis"},{name:"gd",rawName:"v-gd"}],staticClass:"box",attrs:{dis:"300"}},[n("ul",{staticClass:"list"},t._l(t.allLi,function(e,i){return n("li",{staticClass:"oLi"},[n("a",{attrs:{href:e.url}},[n("div",[n("h4",[t._v(t._s(e.mintro))]),t._v(" "),n("p",[n("span",[t._v(t._s(e.source))]),t._v(" "),n("span",[t._v(t._s(e.ptime))])])]),t._v(" "),n("img",{attrs:{src:e.thumb,alt:""}})]),t._v(" "),n("span",{staticClass:"del",on:{click:function(e){t.del(i)}}},[t._v("X")])])})),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.vis.falg,expression:"vis.falg"},{name:"top",rawName:"v-top"}],staticClass:"btn"},[t._v("回到顶部")])])},staticRenderFns:[]};var G=n("C7Lr")(X,J,!1,function(t){n("/gCc")},"data-v-35082542",null).exports,Y={data:function(){return{allLi:[],curIndex:0,navList:[{title:"aaa",type:""},{title:"bbb",type:"pcent"},{title:"ccc",type:"pctech"},{title:"ddd",type:"t"},{title:"科技5",type:"k"},{title:"头条6",type:"t"},{title:"科技1",type:"k"},{title:"头条2",type:"t"},{title:"科技3",type:"k"},{title:"头条4",type:"t"},{title:"科技5",type:"k"},{title:"头条6",type:"t"}]}},mounted:function(){var t=this;new Swiper(".swiper-container2",{freeMode:!0,slidesPerView:"auto",on:{click:function(){t.curIndex=this.clickedIndex,this.setTransition(200);var e=this.slides[this.clickedIndex],n=e.offsetLeft+e.clientWidth/2,i=this.wrapperEl.clientWidth,a=i/2-this.maxTranslate();n<i/2?this.setTranslate(0):n>a?this.setTranslate(a):this.setTranslate(i/2-n),t.$router.push("/home/index/"+t.navList[t.curIndex].type)}}})}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"navleft"},[n("div",{staticClass:"swiper-container2"},[n("div",{staticClass:"swiper-wrapper  w"},t._l(t.navList,function(e,i){return n("div",{staticClass:"swiper-slide",class:{active:t.curIndex===i}},[t._v("\n                      "+t._s(e.title)+"\n                   ")])}))])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navright"},[e("i",{staticClass:"fa fa-navicon"})])}]};var Z=n("C7Lr")(Y,q,!1,function(t){n("73im")},"data-v-adc0395e",null).exports;i.default.use(r.a);var K=new r.a({routes:[{path:"/",redirect:{name:"home"}},{path:"/home",name:"home",component:p,redirect:{name:"index"},children:[{path:"/home/index",name:"index",redirect:{name:"list"},components:{Nav:c,default:g},children:[{path:"/home/index/list",name:"list",component:W},{path:"/home/index/:type",name:"typeList",component:G}]},{path:"/home/video",name:"video",components:{Nav:Z,default:y}},{path:"/home/subscribe",name:"subscribe",component:E}]},{path:"/user",name:"user",component:$},{path:"/search",name:"search",component:M},{path:"/login",name:"login",component:R},{path:"/register",name:"register",component:O}]}),Q=n("Poa6"),U=n.n(Q),tt=n("aozt"),et=n.n(tt),nt=(n("5OHe"),{state:{allLi:[],page:0,loading:!1},actions:{getData:function(t){t.state.page>2?Object(w.Toast)({message:"没有更多数据",position:"bottom",duration:2e3}):(t.commit("changeLoading",!0),w.Indicator.open({text:"加载中...",spinnerType:"double-bounce"}),et.a.get("/lg/listmore.json",{params:{pageNo:this.page,pageSize:10}}).then(function(e){t.commit("changeList",e.data.content.data.page.result),t.commit("changeLoading",!1),t.commit("changePage"),w.Indicator.close()}))}},mutations:{changeList:function(t,e){t.allLi=t.allLi.concat(e)},changePage:function(t,e){t.page++},changeLoading:function(t,e){t.loading=e},delList:function(t,e){t.allLi.splice(e,1)}}});i.default.use(B.a);var it=new B.a.Store({modules:{List:nt}});i.default.use(U.a),i.default.config.productionTip=!1,i.default.prototype.$http=et.a,i.default.use(b.a),new i.default({el:"#app",router:K,store:it,components:{App:s},template:"<App/>"})},VotE:function(t,e){},W7fp:function(t,e){},ZBJ4:function(t,e,n){t.exports=n.p+"static/img/logo.715c207.png"},bFMu:function(t,e){},bzLG:function(t,e){},eT5C:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cd56afb2ff92aacf0c97.js.map