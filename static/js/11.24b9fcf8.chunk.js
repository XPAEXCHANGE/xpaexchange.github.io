(this["webpackJsonpxpa-exchange"]=this["webpackJsonpxpa-exchange"]||[]).push([[11],{640:function(e,t,a){"use strict";a.r(t),a.d(t,"getNews",(function(){return s}));var n=a(18),r=a.n(n),c=a(39),l=a(183),i=finalConfig.news;function s(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/everything?sources=".concat(finalConfig.news.source,"&apiKey=").concat(i.apiKey,"&q=").concat(i.query));case 2:a=e.sent,t({type:l.a,data:a.body.articles});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},691:function(e,t,a){},692:function(e,t,a){},693:function(e,t,a){},694:function(e,t,a){},695:function(e,t,a){},705:function(e,t,a){},706:function(e,t,a){},803:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(6),c=a(13),l=a(12),i=a(0),s=a.n(i),m=a(30),o=a(182),u=a(58),g=a(73),d=a(605),f=a(64),p=a(51),h=a(139),b=a(640),v=a(31),E=a(8),x=a.n(E),N=a(176),j=a(120),O=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={lang:localStorage.getItem("i18nextLng")},r.changeLang=r.changeLang.bind(Object(v.a)(r)),r}return Object(r.a)(a,[{key:"changeLang",value:function(e){var t=N.a.find((function(t){return t.name===e}));j.a.changeLanguage(t.name),this.setState(x()(this.state,{lang:{$set:e}})),this.props.changeHeader&&this.props.changeHeader(e)}},{key:"renderLanguage",value:function(){var e=this,t=N.a.map((function(t){return s.a.createElement("div",{key:t.name,onClick:function(){return e.changeLang(t.name)}},t.type)}));return s.a.createElement("div",{className:"lang-list"},t)}},{key:"render",value:function(){var e=this.state.lang,t=N.a.find((function(t){return t.name===e}));return t=t?t.type:"English",s.a.createElement("div",{className:"language"},s.a.createElement("div",null,t,s.a.createElement("img",{src:"/img/icon/ic-collapse.svg",alt:"collapse"})),this.renderLanguage())}}]),a}(s.a.Component);O.defaultProps={changeHeader:function(){}};var w,k=O,y=(a(691),Object(g.b)("landing",{wait:!0})(w=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={lang:localStorage.getItem("i18nextLng")},r.changeHeader=r.changeHeader.bind(Object(v.a)(r)),r}return Object(r.a)(a,[{key:"changeHeader",value:function(e){this.setState(x()(this.state,{lang:{$set:e}}))}},{key:"scrollTo",value:function(){window.scroll({top:document.querySelector("section.contact").offsetTop,behavior:"smooth"})}},{key:"render",value:function(){var e=this.props.t,t=this.state.lang;return s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,s.a.createElement("div",{className:"logo"},s.a.createElement("img",{src:"/img/logo_xpaex.png",alt:"xpa"})),"XPA",s.a.createElement("span",{className:"small-title"},"Exchange")),s.a.createElement("div",{className:"empty"}),s.a.createElement("nav",null,s.a.createElement("div",null,s.a.createElement(m.b,{to:"exchange"},e("exchange"))),s.a.createElement("div",null,s.a.createElement("a",{href:function(){switch(t){case"zh-cn":return"https://www.weibo.com/ttarticle/p/show?id=2309404226836979686902";case"zh-tw":return"https://medium.com/@xpa_76300/xpa-exchange-%E6%96%B0%E6%89%8B%E4%B8%8A%E8%B7%AF-e85247bae3b";default:return"https://medium.com/tideisun-blog/xpa-exchange-a-gif-guide-to-making-a-trade-4eda6f7c3c76"}}(),target:"_blank"},e("help"))),s.a.createElement("div",null,s.a.createElement("a",{onClick:this.scrollTo},e("contact")))),s.a.createElement(k,{changeHeader:this.changeHeader}))}}]),a}(s.a.Component))||w);y.defaultProps={t:function(){}};var _=y,C=a(50),A=a(3),P=(a(692),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={tokens:Object(C.a)(Object(C.a)({},finalConfig.assetToken),{},{XPA:finalConfig.XPA})},r}return Object(r.a)(a,[{key:"renderItem",value:function(){return this.props.tradeList.ETH?this.props.tradeList.ETH.slice(0,6).map((function(e){return s.a.createElement("div",{className:"item",key:e.address},s.a.createElement("div",{className:"title"},e.desc),s.a.createElement("div",{className:"price"},Object(A.e)(9,Object(A.l)(Object(A.a)(e.latest).toString(),-18))),s.a.createElement("div",{className:"magnitude ".concat(e.growth<0?"down":"up")},e.growth>=0?"+".concat(e.growth):e.growth,"%"))})):Object.keys(this.state.tokens).map((function(e){return s.a.createElement("div",{className:"item",key:e},s.a.createElement("div",{className:"title"},e,"/ETH"),s.a.createElement("div",{className:"price"},0),s.a.createElement("div",{className:"magnitude up"},"+0%"))}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"price"},this.renderItem())}}]),a}(s.a.Component));P.defaultProps={};var L=P,S=(a(693),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={data:[{id:1,url:"/img/banner-xpa@2x.png"},{id:2,url:"/img/tidewallet@2x.png"}]},r}return Object(r.a)(a,[{key:"renderItem",value:function(){return this.state.data.map((function(e){return s.a.createElement("div",{className:"item",key:e.id,style:{backgroundImage:"url('".concat(e.url,"')")}},s.a.createElement("div",{className:"paddingTop"}))}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"product"},this.renderItem())}}]),a}(s.a.Component));S.defaultProps={};var F,H=S,T=(a(694),Object(g.b)("landing",{wait:!0})(F=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;Object(n.a)(this,a),r=t.call(this,e);var c=e.t;return r.state={data:[{id:1,img:"feature-01@2x.png",title:c("feature1-title"),txt:c("feature1")},{id:2,img:"feature-02@2x.png",title:c("feature2-title"),txt:c("feature2")},{id:3,img:"feature-03@2x.png",title:c("feature3-title"),txt:c("feature3")},{id:4,img:"feature-04@2x.png",title:c("feature4-title"),txt:c("feature4")},{id:5,img:"feature-05@2x.png",title:c("feature5-title"),txt:c("feature5")}]},r}return Object(r.a)(a,[{key:"componentWillReceiveProps",value:function(){var e=this.props.t;this.setState(x()(this.state,{data:{$set:[{id:1,img:"feature-01@2x.png",title:e("feature1-title"),txt:e("feature1")},{id:2,img:"feature-02@2x.png",title:e("feature2-title"),txt:e("feature2")},{id:3,img:"feature-03@2x.png",title:e("feature3-title"),txt:e("feature3")},{id:4,img:"feature-04@2x.png",title:e("feature4-title"),txt:e("feature4")},{id:5,img:"feature-05@2x.png",title:e("feature5-title"),txt:e("feature5")}]}}))}},{key:"renderItem",value:function(){return this.state.data.map((function(e){return s.a.createElement("div",{className:"item",key:e.id},s.a.createElement("div",{className:"img"},s.a.createElement("img",{src:"/img/".concat(e.img),alt:""})),s.a.createElement("div",{className:"title"},e.title),s.a.createElement("div",{className:"txt"},e.txt))}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"feature"},this.renderItem())}}]),a}(s.a.Component))||F);T.defaultProps={t:function(){}};var I,X=T,$=(a(695),Object(g.b)("landing",{wait:!0})(I=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.t;return s.a.createElement("div",{className:"c_subscribe"},s.a.createElement("h2",null,s.a.createElement("span",null,e("follow"))),s.a.createElement("div",{className:"connect"},s.a.createElement("div",null,s.a.createElement("a",{href:"https://www.facebook.com/xpatwopointoh/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"/img/icon/ic-fb.png",alt:"fb"}))),s.a.createElement("div",null,s.a.createElement("a",{href:"https://twitter.com/XPAtwopointoh",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"/img/icon/ic-tw-en.png",alt:"twitter_en"}))),s.a.createElement("div",null,s.a.createElement("a",{href:"https://twitter.com/XPAExchangeJP",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"/img/icon/ic-tw-jp.png",alt:"twitter_jp"}))),s.a.createElement("div",null,s.a.createElement("a",{href:"https://t.me/joinchat/HwXfYhKMUa_DGlYDuGVVOg",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"/img/icon/ic-telegram.png",alt:"telegram"}))),s.a.createElement("div",null,s.a.createElement("a",{href:"https://medium.com/@xpa.io",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"/img/icon/ic-tw-medium.png",alt:"medium_tw"}))),s.a.createElement("div",null,s.a.createElement("a",{href:"https://medium.com/@alison.tideisun",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"/img/icon/ic-en-medium.png",alt:"medium_en"}))),s.a.createElement("div",null,s.a.createElement("a",{href:"https://www.weibo.com/6477923117/profile?topnav=1&wvr=6&is_all=1",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"/img/icon/ic-sina.png",alt:"sina"})))))}}]),a}(s.a.Component))||I);$.defaultProps={t:function(){}};var R,q=$,z=a(18),B=a.n(z),D=a(39),Y=a(80),J=a(181),K=a(621),M=(a(705),Object(g.b)("common",{wait:!0})(R=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={form:{fullName:"",mail:"",subject:"",message:""}},r.changeForm=r.changeForm.bind(Object(v.a)(r)),r.submitForm=r.submitForm.bind(Object(v.a)(r)),r}return Object(r.a)(a,[{key:"changeForm",value:function(e){this.setState(x()(this.state,{form:Object(Y.a)({},e.target.name,{$set:e.target.value})}))}},{key:"submitForm",value:function(){var e=Object(D.a)(B.a.mark((function e(t){var a,n,r,c,l,i;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state.form,n=a.fullName,r=a.mail,c=a.subject,l=a.message,i=this.props.t,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r)){e.next=5;break}return e.abrupt("return",t(i("contact.mailAlert")));case 5:if(!(l.length<=0)){e.next=7;break}return e.abrupt("return",t(i("contact.messageAlert")));case 7:return e.next=9,Object(J.t)({subject:c,content:"sender?".concat(n,"/mail?").concat(r,"/message?").concat(l)});case 9:e.sent?(t(i("contact.success")),this.setState(x()(this.state,{form:{$set:{fullName:"",mail:"",subject:"",message:""}}}))):t(i("contact.error"));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.form,a=t.fullName,n=t.mail,r=t.subject,c=t.message,l=this.props.t;return s.a.createElement(K.a,null,(function(t,i){return s.a.createElement("div",{className:"c_contact"},s.a.createElement("h2",null,s.a.createElement("span",null,l("contact"))),s.a.createElement("div",{className:"data"},s.a.createElement("div",{className:"title"},s.a.createElement("input",{type:"text",name:"fullName",value:a,placeholder:"Full Name",onChange:e.changeForm})),s.a.createElement("div",{className:"address"},s.a.createElement("input",{type:"text",name:"mail",value:n,placeholder:"Mail Address",onChange:e.changeForm})),s.a.createElement("div",{className:"name"},s.a.createElement("input",{type:"text",name:"subject",value:r,placeholder:"Subject",onChange:e.changeForm}))),s.a.createElement("div",{className:"message"},s.a.createElement("textarea",{name:"message",id:"message",value:c,cols:"30",rows:"10",placeholder:"message...",onChange:e.changeForm})),s.a.createElement("a",{className:"submit",onClick:function(){e.submitForm(i)}},s.a.createElement("span",null,"Submit")))}))}}]),a}(s.a.Component))||R);M.defaultProps={t:function(){}};var W,G,U=M;a(706);var V=(W=Object(g.b)("landing",{wait:!0}),Object(d.a)(G=W(G=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={boxRotate:["rotate(20deg)","rotate(140deg)","rotate(0)","rotate(270deg)","rotate(0)","rotate(-20deg)","rotate(60deg)","rotate(-90deg)","rotate(40deg)","rotate(120deg)","rotate(-30deg)","rotate(0deg)","rotate(-120deg)","rotate(40deg)","rotate(-120deg)","rotate(-60deg)"]},r.animate="",r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){for(var e=this,t=document.querySelectorAll(".box"),a=0;a<t.length;a+=1)t[a].style.transform="".concat(this.state.boxRotate[a]);this.animate=function(){for(var a=(document.documentElement.scrollTop||document.body.scrollTop)/e.field.offsetHeight*100,n=0;n<t.length;n+=1)n%2===0?(t[n].style.transition=".2s",t[n].style.transform="translateY(".concat(a-10,"%) ").concat(e.state.boxRotate[n]," rotateX(").concat(a-20,"deg)")):(t[n].style.transition="1s",t[n].style.transform="translateY(".concat(a,"%) ").concat(e.state.boxRotate[n]," rotateX(").concat(a,"deg)")),t[n].style.opacity=100-3*a},document.addEventListener("scroll",this.animate)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.animate)}},{key:"render",value:function(){var e=this,t=this.props.t;return s.a.createElement("div",{className:"co_landingPage "},s.a.createElement("section",{className:"getStarted",ref:function(t){e.field=t}},s.a.createElement("img",{src:"/img/mine4.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine3.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine2.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine1.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine1.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine1.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine2.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine1.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine1.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine1.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine1.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine3.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine1.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine1.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine1.svg",alt:"mine",className:"box"}),s.a.createElement("img",{src:"/img/mine1.svg",alt:"mine",className:"box"}),s.a.createElement(_,null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"title"},s.a.createElement("h2",null,t("slogan"))),s.a.createElement("div",{className:"getStarted"},s.a.createElement(m.b,{to:"exchange"},s.a.createElement("span",null,t("start")))),s.a.createElement("div",{className:"getStarted beta"},s.a.createElement("a",{href:"https://beta.xpa.exchange/?".concat(Date.now(),"/#/exchange"),target:"_blank",rel:"noopener noreferrer"},s.a.createElement("p",null,t("accept-beta")),s.a.createElement("span",null,t("start-beta")))),s.a.createElement(L,{tradeList:this.props.tradeList}))),s.a.createElement("section",{className:"product"},s.a.createElement("div",{className:"container"},s.a.createElement(H,null))),s.a.createElement("section",{className:"feature"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"title"},"Why XPA Exchange?"),s.a.createElement(X,null))),s.a.createElement("div",{className:"bg-holder"},s.a.createElement("section",{className:"subcribe"},s.a.createElement("div",{className:"container"},s.a.createElement(q,null))),s.a.createElement("section",{className:"contact"},s.a.createElement("div",{className:"container"},s.a.createElement(U,null))),s.a.createElement("footer",null,s.a.createElement("p",null,"Powered by"),s.a.createElement("div",null,s.a.createElement("a",{href:"https://www.tideisun.com/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:"/img/logo-lite.png",alt:"tideisun"}))),s.a.createElement("p",null,"Copyright",s.a.createElement("span",null,"\xa9"),"TideiSun. All rights reserved."))))}}]),a}(s.a.Component))||G)||G);V.defaultProps={t:function(){}};t.default=Object(o.b)((function(e){return{from:e.book.from,to:e.book.to,tradeList:e.book.tradeList,user:e.user.user}}),(function(e){return{actions:{bookActions:Object(u.b)(f,e),userActions:Object(u.b)(p,e),modalActions:Object(u.b)(h,e),newsActions:Object(u.b)(b,e)}}}))(V)}}]);
//# sourceMappingURL=11.24b9fcf8.chunk.js.map