(this["webpackJsonpxpa-exchange"]=this["webpackJsonpxpa-exchange"]||[]).push([[12],{594:function(e,t,a){"use strict";var n=a(0),c=a.n(n),o=a(72);a(595);t.a=Object(o.b)()((function(){return c.a.createElement("footer",null,c.a.createElement("p",null,"Powered by"),c.a.createElement("div",null,c.a.createElement("a",{href:"https://www.tideisun.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:"/img/logo-lite.png",alt:"tideisun"}))),c.a.createElement("p",null,"Copyright",c.a.createElement("span",null,"\xa9"),"TideiSun. All rights reserved."))}))},595:function(e,t,a){},604:function(e,t,a){"use strict";var n=a(5),c=a(7),o=a(13),r=a(12),l=a(0),i=a.n(l),s=a(636),u=a.n(s);a(638);t.a=function(e){return function(t){Object(o.a)(l,t);var a=Object(r.a)(l);function l(e){var t;return Object(n.a)(this,l),(t=a.call(this,e)).state={},t}return Object(c.a)(l,[{key:"componentDidMount",value:function(){var e=this.props.actions,t=e.bookActions;e.userActions,e.modalActions;u.a.apps.length||(u.a.initializeApp(finalConfig.fdb),window.dbObj=u.a.database()),window.dbObj.ref("tokenList").once("value",(function(e){e.val()&&t.tokenListGet(e.val())})),window.dbObj.ref("tradeList").on("value",(function(e){e.val()&&(t.tradeListGet(e.val()),t.bookGet$())})),window.dbObj.ref("priceBooks").on("value",(function(e){e.val()&&t.recentTransactionGet$(Object.values(e.val()))}))}},{key:"componentWillUnmount",value:function(){window.dbObj.ref("tokenList").off("value"),window.dbObj.ref("tradeList").off("value"),window.dbObj.ref("priceBooks").off("value"),window.dbObj.ref("orderBooks").off("value")}},{key:"render",value:function(){return i.a.createElement(e,this.props)}}]),l}(i.a.Component)}},645:function(e,t,a){"use strict";var n=a(139),c=a(5),o=a(7),r=a(31),l=a(13),i=a(12),s=a(0),u=a.n(s),b=a(72),m=a(593),d=a.n(m),p=a(635),v=a(3),f=(a(647),function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n.getPrice=n.getPrice.bind(Object(r.a)(n)),n}return Object(o.a)(a,[{key:"shouldComponentUpdate",value:function(e){return!d()(e.book,this.props.book)||!d()(e.t,this.props.t)}},{key:"componentDidUpdate",value:function(){var e=document.querySelector(".c_orderBook .sell > div:last-child");!this.props.reverse&&"sell"===this.props.type&&e&&(-1!==navigator.userAgent.toLowerCase().indexOf("safari")&&e.scrollIntoView({block:"end"}))}},{key:"getPrice",value:function(e){var t=this.props,a=t.actions,n=t.myTransaction,c=t.to,o=t.changePrice,r=t.toastOpen,l=t.t,i=document.querySelector(".pending-type .active");if(i&&"2"!==i.dataset.type){o(e.displayPrice);var s=a.userActions.myTransactionChange,u=0;u=n.act===e.type&&"sell"===n.act||n.act===e.type&&"buy"===n.act?e.price:Object(v.b)(Object(v.k)(1,36)).div(Object(v.a)(e.price)).toString(16);var b="sell"===n.act?Object(v.b)(Object(v.k)(Object(v.a)(n.amount).mul(Object(v.a)(u)).toString(),-18).split(".")[0]).toString(16):Object(v.b)(Object(v.k)(Object(v.b)(Object(v.k)(Object(v.a)(n.amount).toString(),18)).div(Object(v.a)(u)).toString(),c.decimal-18)).toString(16),m=Object(v.k)(Object(v.a)(b).toString(),-c.decimal)>Math.pow(10,9),d=Object(v.k)(Object(v.a)(b).toString(),-c.decimal)<Math.pow(10,-2);return s({price:u,amount:n.amount,able:!(!n.amount||m||d),total:n.amount?b:"-",act:this.props.myTransaction.act}),m?r("Total ".concat(c.token).concat(l("table.max")).concat(Math.pow(10,9))):d?r("Total ".concat(c.token).concat(l("table.min")).concat(Math.pow(10,-2))):void 0}}},{key:"renderTable",value:function(){var e,t=this,a=this.props,c=a.book,o=a.type,r=a.t,l=a.reverse,i=a.from,s=a.to,b=null,m=Object(n.a)(c);if(c.length>0){/order/.test(window.location.hash)||(m="buy"===o?m.slice(0,7):m.reverse().slice(0,7)),l?m.sort((function(e,t){return e.displayPrice-t.displayPrice})):m.sort((function(e,t){return t.displayPrice-e.displayPrice})),e=m.reduce((function(e,t){return Number(t.amount)>e?Number(t.amount):e}),m[0].amount),b=m.map((function(a,n){var c="buy"===o?Object(v.d)(a.price,i.decimal,s.decimal):Object(v.i)(a.price,i.decimal,s.decimal);return u.a.createElement("div",{key:a.index||n,onClick:function(){t.getPrice(a)}},u.a.createElement("div",{className:"buy"===o?"type green":"type red"},"buy"!==o||l?"".concat(r("table.sell")," ").concat(l?n+1:m.length-n):"".concat(r("table.buy")," ").concat(n+1)),u.a.createElement("div",{className:"list"},u.a.createElement("div",{"data-tip":!0,"data-for":"price".concat(a.type).concat(n)},a.displayPrice),u.a.createElement(p.a,{id:"price".concat(a.type).concat(n),place:"right"},c),u.a.createElement("div",{className:"item","data-tip":!0,"data-for":"amount".concat(a.type).concat(n)},Object(v.e)(8,Number(a.amount))),u.a.createElement(p.a,{id:"amount".concat(a.type).concat(n),place:"right"},a.amount),u.a.createElement("div",{className:"item","data-tip":!0,"data-for":"value".concat(a.type).concat(n)},Object(v.e)(8,Number(a.value))),u.a.createElement(p.a,{id:"value".concat(a.type).concat(n),place:"right"},a.value),u.a.createElement("div",{className:"buy"===o?" percent buy":"percent sell",style:{width:"".concat(a.amount/e*100,"%")}})))}))}return u.a.createElement("div",{className:"books"},u.a.createElement("div",{className:"sell"===o?"sell order":"buy order"},b))}},{key:"render",value:function(){return u.a.createElement("div",{className:"c_orderBook"},this.renderTable())}}]),a}(u.a.Component));f.defaultProps={t:function(){},reverse:!1,actions:{},myTransaction:{},from:{},to:{},changePrice:function(){},toastOpen:function(){}},t.a=Object(b.b)()(f)},647:function(e,t,a){},648:function(e,t,a){},716:function(e,t,a){},803:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(7),o=a(31),r=a(13),l=a(12),i=a(0),s=a.n(i),u=a(182),b=a(8),m=a.n(b),d=a(57),p=a(30),v=a(72),f=a(645),h=a(283),O=a(594),y=(a(648),function(e){return s.a.createElement("nav",{className:"co_tab"},s.a.createElement("div",{className:"button",onClick:function(){e.switch(0)}},s.a.createElement("span",null,"Buy")),s.a.createElement("div",{className:"button",onClick:function(){e.switch(1)}},s.a.createElement("span",null,"Sell")))});y.defaultProps={t:function(){}};var j,k=Object(v.b)()(y),E=a(604),g=a(73),w=a(68),N=a(138),P=(a(716),Object(E.a)(j=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this)).state={nav:0},c.changeNav=c.changeNav.bind(Object(o.a)(c)),c}return Object(c.a)(a,[{key:"changeNav",value:function(e){this.setState(m()(this.state,{nav:{$set:e}}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.sell,n=t.buy,c=t.t,o=t.from,r=t.to,l=this.state.nav;return s.a.createElement("div",{className:"co_order"},s.a.createElement(h.a,null),s.a.createElement("nav",null,s.a.createElement("span",null,s.a.createElement(p.b,{to:"exchange"},c("table.index"))),s.a.createElement("img",{src:"/img/icon/ic-breadthumb.svg",alt:"arrow"}),s.a.createElement("span",null,c("table.order"))),s.a.createElement(k,{switch:function(t){e.changeNav(t)}}),s.a.createElement("main",null,s.a.createElement("section",{className:0===l?"rwd-show":""},s.a.createElement("div",{className:"title"},c("table.buyOrder")),s.a.createElement("div",{className:"head"},s.a.createElement("div",null,c("table.ratio"),"(",r.token,")"),s.a.createElement("div",null,c("table.amount"),"(",o.token,")"),s.a.createElement("div",null,c("table.total"),"(",o.token,")")),s.a.createElement(f.a,{book:n,type:"buy"})),s.a.createElement("section",{className:1===l?"rwd-show":""},s.a.createElement("div",{className:"title"},c("table.sellOrder")),s.a.createElement("div",{className:"head"},s.a.createElement("div",null,c("table.ratio"),"(",r.token,")"),s.a.createElement("div",null,c("table.amount"),"(",o.token,")"),s.a.createElement("div",null,c("table.total"),"(",o.token,")")),s.a.createElement(f.a,{book:a,type:"sell",reverse:!0}))),s.a.createElement(O.a,null))}}]),a}(s.a.Component))||j);P.defaultProps={t:function(){}};t.default=Object(u.b)((function(e){return{from:e.book.from,to:e.book.to,sell:e.book.sell,buy:e.book.buy,user:e.user.user}}),(function(e){return{actions:{bookActions:Object(d.b)(g,e),userActions:Object(d.b)(w,e),modalActions:Object(d.b)(N,e)}}}))(Object(v.b)()(P))}}]);
//# sourceMappingURL=12.30cc0f52.chunk.js.map