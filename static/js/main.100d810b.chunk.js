(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{360:function(e,t,n){},361:function(e,t,n){},426:function(e,t,n){"use strict";n.r(t);var r=n(24),c=n(0),a=n.n(c),j=n(16),o=n.n(j),f=(n(360),n(361),n(20)),b=n(31),i=n(26),u=n(55),s=n(347);var O=n(222),d=n.n(O),l=n(334),h=n.n(l),p=n(344),x=n.n(p),g=n(335),m=n.n(g),w=n(342),R=n.n(w),v=n(232),y=n.n(v),E=n(231),S=n.n(E),C=n(336),P=n.n(C),T=n(337),B=n.n(T),D=n(339),F=n.n(D),k=n(340),U=n.n(k),L=n(341),G=n.n(L),A=n(345),M=n.n(A),N=n(338),_=n.n(N),I=n(343),J=n.n(I),q=n(346),Q=n.n(q),V=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={items:[],budget:[]},r.state={items:[],budget:[]},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new URLSearchParams("limit=1000000&query_type=and");(function(e,t){return fetch("https://sheet2api.com/v1/ByR2h1huRjyQ/fiap/"+e+"?"+t).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.error("Error:",e)}))})(this.props.endpoint,t).then((function(t){return e.setState({items:t,budget:t.BUDGET})}))}},{key:"render",value:function(){console.log("items ",this.state.items);this.props.endpoint,this.state.items.map((function(e){return e.BUDGET}));var e=this.state.items.map((function(e){return{budget:e.BUDGET,guests:e.NUMBER_OF_GUESTS,style:e.STYLE}}));console.log("budget",e);var t={Add:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(h.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Check:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(m.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Clear:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(S.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Delete:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(P.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),DetailPanel:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Edit:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(B.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Export:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(_.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Filter:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(F.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),FirstPage:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(U.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),LastPage:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(G.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),NextPage:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(y.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),PreviousPage:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(R.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ResetSearch:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(S.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),Search:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(J.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),SortArrow:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(x.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(M.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))})),ViewColumn:Object(c.forwardRef)((function(e,t){return Object(r.jsx)(Q.a,Object(f.a)(Object(f.a)({},e),{},{ref:t}))}))};return Object(r.jsx)("div",{children:Object(r.jsx)(d.a,{icons:t,columns:[{title:"Budget",field:"budget"},{title:"Estilo",field:"style"},{title:"Convidados",field:"guests"}],data:e,title:"Tabela de Casamento"})})}}]),n}(a.a.Component);var Y=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("main",{children:Object(r.jsx)(V,{endpoint:"wedding"})})})},z=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,831)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,j=t.getTTFB;n(e),r(e),c(e),a(e),j(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(Y,{})}),document.getElementById("root")),z(console.log)}},[[426,1,3]]]);
//# sourceMappingURL=main.100d810b.chunk.js.map