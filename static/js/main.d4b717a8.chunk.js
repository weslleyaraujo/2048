(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],{29:function(n,e,r){},46:function(n,e,r){"use strict";r.r(e);var t=r(2),o=r.n(t),l=r(23),a=r.n(l),c=(r(29),r(10)),i=r(17),u=r(24),d=r(5),f=r(50),s=r(14),b=Object(s.b)({"@import":"https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap","html,body,#root":{margin:0,padding:0,fontFamily:'"Open Sans", "Helvetica Neue", Arial, sans-serifhtml, body'}}),g=Object(s.a)({theme:{space:{small:"4px",medium:"6px"},colors:{background:"#bbac9f",backgroundAccent:"#ccc0b2"},radii:{small:"4px"}}}).styled,h=g(f.a.div,{backgroundColor:"$backgroundAccent",fontSize:18,width:50,height:50,fontWeight:700,borderRadius:"$small",display:"flex",alignItems:"center",justifyContent:"center",variants:{hasValue:{true:{backgroundColor:"#aa60a6",color:"#f9f8f6"}},value:{2:{backgroundColor:"#eee4da",color:"#746b62"},4:{backgroundColor:"#eee1c9",color:"#776e65"},8:{backgroundColor:"#f3b27a",color:"#f9f6f2"},16:{color:"#f9f6f2",backgroundColor:"#f69664"},32:{color:"#f9f6f2",backgroundColor:"#f77c5f"},64:{color:"#f9f6f2",backgroundColor:"#f75f3b"},128:{color:"#f9f6f2",backgroundColor:"#edd073"},256:{color:"#f9f6f2",backgroundColor:"#edcc62"},512:{color:"#f9f6f2",backgroundColor:"#edc950"},1024:{color:"#f9f6f2",backgroundColor:"#edc53f"},2048:{color:"#f9f6f2",backgroundColor:"#edc22e"},4096:{backgroundColor:"#b784ab"}}},defaultVariants:{value:"default"}}),p=Object(s.c)("div",{display:"flex",width:"100vw",height:"100vh",justifyContent:"center",alignItems:"center"}),v=g("div",{display:"grid",backgroundColor:"$background",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridGap:"$small",padding:"$small",borderRadius:"$small"}),m=r(8),j=g("div",{position:"fixed",left:0,top:0,backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}),k=g("div",{backgroundColor:"white",minWidth:"20vw",minHeight:"10vh",borderRadius:"$small",display:"flex",alignItems:"center",justifyContent:"center"});function y(){return Object(m.jsx)(j,{children:Object(m.jsx)(k,{children:Object(m.jsx)("p",{children:"You won!"})})})}var w=r(6),C=["up","down"];function O(n){for(var e=n.winnerScore,r=void 0===e?2048:e,t=n.board,o=n.direction,l=0,a=Object(w.a)(Array(t.length)).map((function(){return Array(t.length)})),c=[],i=[],u=0;u<t.length;u++){for(var d=[],f=[],s=0;s<t.length;s++){var b=C.includes(o)?t[s][u]:t[u][s];f.push(b),null!==b&&d.push(b)}i.push(f);for(var g=[],h=d.filter(Boolean),p=0;p<h.length;p++){var v=h[p],m=h[p+1];if(v===m&&null!==v&&null!==m){var j=v+m;l=Math.max(l,j),g.push(j),h[p]=null,h[p+1]=null}else null!==v&&g.push(v)}var k=t[0].length-1,y=new Array(Math.min(k,k-g.length)+1).fill(null),O=["down","right"].includes(o)?y.concat(g):g.concat(y);c.push(O);for(var x=0;x<O.length;x++)C.includes(o)?a[x][u]=O[x]:a[u][x]=O[x]}return{lines:c,prev:i,board:a,isWinner:l>=r}}function x(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=n.some((function(n){return n.some((function(n){return null===n}))}));if(!r)return n;for(var t=0;t!==e;){var o,l=A(n.length),a=A(n.length);null===(null===n||void 0===n||null===(o=n[l])||void 0===o?void 0:o[a])&&(n[l][a]=2,t++)}return n}var A=function(n){return Math.round(Math.random()*n)},S={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"};var W=function(){b();var n=Object(t.useState)((function(){return{isWinner:!1,board:x([[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]],2)}})),e=Object(d.a)(n,2),r=e[0],o=r.board,l=r.isWinner,a=e[1];return Object(t.useEffect)((function(){var n=function(){var n=Object(u.a)(Object(i.a)().mark((function n(e){var r;return Object(i.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(Object.keys(S).includes(e.key)){n.next=2;break}return n.abrupt("return");case 2:r=O({board:o,direction:S[e.key]}),a({board:x(r.board,1),isWinner:r.isWinner});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return document.body.addEventListener("keydown",n),function(){return document.body.removeEventListener("keydown",n)}}),[o]),Object(m.jsxs)(p,{children:[l?Object(m.jsx)(y,{}):null,Object(m.jsx)(v,{children:o.flat(1).map((function(n,e){return Object(m.jsx)(h,Object(c.a)(Object(c.a)(Object(c.a)({hasValue:Boolean(n)},2===n?{initial:{scale:0},animate:{scale:1},transition:{}}:{}),n?{value:String(n)}:{}),{},{children:n}),"".concat(n,"-").concat(e))}))})]})},$=function(n){n&&n instanceof Function&&r.e(3).then(r.bind(null,51)).then((function(e){var r=e.getCLS,t=e.getFID,o=e.getFCP,l=e.getLCP,a=e.getTTFB;r(n),t(n),o(n),l(n),a(n)}))};a.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(W,{})}),document.getElementById("root")),$()}},[[46,1,2]]]);
//# sourceMappingURL=main.d4b717a8.chunk.js.map