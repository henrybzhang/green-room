(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(9),i=c.n(n),s=(c(18),c(3)),l=c(2),o=c(1),b=Object(r.createContext)();function u(e){var t=e.children,c=Object(r.useState)({}),a=Object(s.a)(c,2),n=a[0],i=a[1],u=Object(r.useState)({}),j=Object(s.a)(u,2),d=j[0],O=j[1],h=function(e){var t=Object(l.a)({},n);Object.entries(e).forEach((function(e){var c=Object(s.a)(e,2),r=c[0],a=c[1];r in t?t[r]+=a:t[r]=a})),i(t)},f=Object(r.useMemo)((function(){return{playerItems:n,playerStructures:d,setPlayerStructures:O,updateItems:h}}),[n,d]);return Object(o.jsx)(b.Provider,{value:f,children:t})}var j=c(5),d=Object(r.createContext)(),O={pickUpTrash:"Pick up trash"},h={recycler:{metal:-1},airFilter:{wood:-1},net:{plastic:-1},bridge:{wood:-1,metal:-1}},f=["trash","wood","metal","plastic"],v=["trash","plastic"],p=["wood","metal","plastic"],m=new Set(["pickUpTrash","buildRecycler","useRecycler","buildAirFilter","plantSeeds","buildNet","useNet","buildBridge"]);function g(e){var t=e.children,c=Object(r.useContext)(b),a=c.playerItems,n=c.updateItems,i=c.playerStructures,u=c.setPlayerStructures,g=Object(r.useState)(null),y=Object(s.a)(g,2),k=y[0],x=y[1],S=Object(r.useState)(O),w=Object(s.a)(S,2),N=w[0],C=w[1],T=Object(r.useState)({}),E=Object(s.a)(T,2),A=E[0],F=E[1],U=Object(r.useState)(1),R=Object(s.a)(U,2),M=R[0],I=R[1],P=function(e){var t=!1;return Object.entries(h[e]).forEach((function(e){var c=Object(s.a)(e,2),r=c[0],n=c[1];a[r]+n>=0&&(t=!0)})),t};Object(r.useEffect)((function(){if(k){try{if(!m.has(k))throw Error("Unknown action: ".concat(k));switch(k){case"pickUpTrash":var e=f[Math.floor(Math.random()*f.length)];n(Object(j.a)({},e,1));break;case"buildRecycler":u(Object(l.a)(Object(l.a)({},i),{},{recycler:!0})),n(h.recycler);break;case"useRecycler":var t,c=p[Math.floor(Math.random()*p.length)];n((t={},Object(j.a)(t,c,1),Object(j.a)(t,"trash",-1),t));break;case"buildAirFilter":u(Object(l.a)(Object(l.a)({},i),{},{airFilter:!0})),n(h.airFilter);break;case"plantSeeds":break;case"buildNet":u(Object(l.a)(Object(l.a)({},i),{},{net:!0})),n(h.net);break;case"useNet":var r=v[Math.floor(Math.random()*v.length)];n(Object(j.a)({},r,1));break;case"buildBridge":u(Object(l.a)(Object(l.a)({},i),{},{bridge:!0})),n(h.bridge);break;default:throw Error("Undeveloped action: ".concat(k))}F((a=k)in A?Object(l.a)(Object(l.a)({},A),{},Object(j.a)({},a,A[a]+1)):Object(l.a)(Object(l.a)({},A),{},Object(j.a)({},a,1)))}catch(s){console.log(s)}var a;x(null)}}),[k]),Object(r.useEffect)((function(){C(7!==M?Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)({},(M<=2||6===M)&&{pickUpTrash:"Pick up trash"}),P("recycler")&&!i.recycler&&{buildRecycler:"Fix recycler"}),a.trash&&i.recycler&&{useRecycler:"Recycle trash"}),P("airFilter")&&!i.airFilter&&i.recycler&&2===M&&{buildAirFilter:"Construct air filter"}),3===M&&{plantSeeds:"Plant seeds"}),P("net")&&!i.net&&4===M&&{buildNet:"Construct river net"}),i.net&&4===M&&{useNet:"Filter river trash"}),P("bridge")&&5===M&&{buildBridge:"Construct a bridge"}):{})}),[a,M,i]),Object(r.useEffect)((function(){var e=M;if(1===M&&A.pickUpTrash>=10)e=2;else if(2===M&&A.pickUpTrash>=10&&i.airFilter)e=3;else if(3===M&&A.plantSeeds)e=4;else if(4===M&&A.useNet>=5)e=5;else if(5===M&&i.bridge)e=6;else{if(!(6===M&&A.pickUpTrash>=10))return;e=7}F({}),I(e)}),[i,M,A]);var B=Object(r.useMemo)((function(){return{currentAction:k,environmentLevel:M,availableActions:N,setCurrentAction:x}}),[k,M,N]);return Object(o.jsx)(d.Provider,{value:B,children:t})}c(20);var y=function(){var e=Object(r.useContext)(b).playerItems;return 7===Object(r.useContext)(d).environmentLevel?null:Object(o.jsxs)("fieldset",{className:"inventory-container",children:[Object(o.jsx)("legend",{children:"Collection"}),Object.entries(e).map((function(e){var t=Object(s.a)(e,2),c=t[0],r=t[1];return Object(o.jsxs)("div",{className:"inventory-item",children:[Object(o.jsxs)("div",{children:[c,":\xa0"]}),Object(o.jsx)("div",{className:"item-count",children:r})]},c)}))]})};c(21);var k=function(e){var t=e.actionName,c=e.actionText,a=Object(r.useContext)(d).setCurrentAction;return Object(o.jsx)("button",{type:"button",className:"buttons shrink-on-hover",onClick:function(){return a(t)},children:c})};c(22);var x=function(){var e=Object(r.useContext)(d).availableActions,t=Object(r.useState)(!1),c=Object(s.a)(t,2),a=c[0],n=c[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){n(!0)}),2500);return function(){return clearTimeout(e)}}),[]),Object(o.jsx)("div",{className:"buttons-group",style:{transition:"all 2s",visibility:a?"visible":"hidden",opacity:a?"1":"0"},children:Object.entries(e).map((function(e){var t=Object(s.a)(e,2),c=t[0],r=t[1];return Object(o.jsx)(k,{actionName:c,actionText:r},c)}))})},S=c(4),w=(c(23),["The surrounding area is piled high with trash and is extremely polluted. Smog covers the land, making the visibility almost nil."]);var N=function(){var e=Object(r.useContext)(d),t=e.currentAction,c=e.environmentLevel,a=Object(r.useState)(w),n=Object(s.a)(a,2),i=n[0],l=n[1];return Object(r.useEffect)((function(){if(t)try{if(!m.has(t))throw Error("Unknown action: ".concat(t));var e=i.slice(0,20);switch(t){case"pickUpTrash":l(["The surrounding area has been slightly cleared of trash"].concat(Object(S.a)(e)));break;case"buildRecycler":l(["The recycler is now operational"].concat(Object(S.a)(e)));break;case"useRecycler":l(["Some usable items have been recycled from trash"].concat(Object(S.a)(e)));break;case"buildAirFilter":l(["An air filter has been constructed"].concat(Object(S.a)(e)));break;case"plantSeeds":l(["The beginnings of new life have been planted"].concat(Object(S.a)(e)));break;case"buildNet":l(["A net has been built"].concat(Object(S.a)(e)));break;case"useNet":l(["Some litter has been filtered from the river"].concat(Object(S.a)(e)));break;case"buildBridge":l(["The river can now be crossed"].concat(Object(S.a)(e)));break;default:throw Error("Undeveloped action: ".concat(t))}}catch(c){console.log(c)}}),[t,c]),Object(r.useEffect)((function(){var e=i.slice(0,20),t=null;7===c&&(t="The area has been completely cleared of trash and pollution. Nature is finally beginning to recover.",e=[]),t&&l([t].concat(Object(S.a)(e)))}),[c]),Object(o.jsx)("div",{className:"log",children:i.map((function(e,t){return Object(o.jsx)("div",{style:{opacity:(20-t)/20},children:e},t)}))})},C=Object(r.createContext)();function T(e){var t=e.children,c=Object(r.useContext)(d).environmentLevel,a=Object(r.useState)("1.jpeg"),n=Object(s.a)(a,2),i=n[0],l=n[1];Object(r.useEffect)((function(){switch(c){case 1:l("start.jpeg");break;case 2:l("initialClear.jpeg");break;case 3:l("builtAirFilter.jpeg");break;case 4:l("plantSeeds.jpeg");break;case 5:l("cleanRiver.jpeg");break;case 6:l("builtBridge.gif");break;case 7:l("final.gif")}}),[c]);var b=Object(r.useMemo)((function(){return{backgroundImage:i}}),[i]);return Object(o.jsx)(C.Provider,{value:b,children:t})}c(24);var E=function(){var e=Object(r.useContext)(C).backgroundImage;return Object(o.jsx)("div",{className:"app",style:{backgroundImage:"url(".concat("/green-room","/images/").concat(e,")")},children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)(N,{}),Object(o.jsx)(x,{}),Object(o.jsx)(y,{})]})})};i.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(u,{children:Object(o.jsx)(g,{children:Object(o.jsx)(T,{children:Object(o.jsx)(E,{})})})})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.f2731eb5.chunk.js.map