(this["webpackJsonpvirtual-list-demo-react"]=this["webpackJsonpvirtual-list-demo-react"]||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),c=n.n(i),l=(n(22),n(1)),o=n(2);function s(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1];return r.a.createElement("span",null,r.a.createElement("span",null,"Count: ",n),r.a.createElement("button",{onClick:function(){return i(n+1)}},"Increase"))}var u=function(e){var t=e.data,n=e.itemHeight,i=e.itemRender,c=Object(a.useState)(0),l=Object(o.a)(c,2),s=l[0],u=l[1],h=Object(a.useState)(0),f=Object(o.a)(h,2),m=f[0],d=f[1],v=function(e){var t=e.data,n=e.itemHeight,r=e.scrollTop,i=e.clientHeight,c=Object(a.useMemo)((function(){return t.length*n}),[t.length,n]),l=Math.floor(r/n),o=Math.ceil(i/n)+l+1;return{totalHeight:c,visibleData:Object(a.useMemo)((function(){return t.slice(l,o)}),[t,o,l]),offset:Object(a.useMemo)((function(){return l*n}),[n,l])}}({data:t,itemHeight:n,scrollTop:s,clientHeight:m}),g=v.totalHeight,b=v.visibleData,p=v.offset,j=Object(a.useRef)(null),E=Object(a.useCallback)((function(){j.current&&u(j.current.scrollTop)}),[]),O=Object(a.useCallback)((function(e){e?(j.current=e,d(e.clientHeight)):j.current=null}),[]);return r.a.createElement("div",{className:"container",ref:O,onScroll:E},r.a.createElement("div",{className:"total-list",style:{height:"".concat(g,"px")}}),r.a.createElement("div",{className:"visible-list",style:{transform:"translateY(".concat(p,"px)")}},b.map((function(e){return r.a.createElement("div",{key:e.id,style:{height:"".concat(n,"px")}},i(e))}))))};function h(e,t){var n=e.length;if(!n)return-1;for(var a=-1,r=0,i=n-1;r<=i;){if(r===i)return e[r]>=t?r:-1;var c=r+i>>1,l=e[c];if(l===t)return c;t<l?((-1===a||e[a]>l)&&(a=c),i--):r=c+1}return a}var f=function(e){var t=e.data,n=e.estimatedItemHeight,i=e.getItemHeight,c=e.itemRender,l=Object(a.useState)(0),s=Object(o.a)(l,2),u=s[0],f=s[1],m=Object(a.useState)(0),d=Object(o.a)(m,2),v=d[0],g=d[1],b=function(e){var t,n,r,i=e.data,c=e.getItemHeight,l=e.estimatedItemHeight,s=e.scrollTop,u=e.clientHeight,f=Object(a.useState)([]),m=Object(o.a)(f,2),d=m[0],v=m[1];Object(a.useEffect)((function(){for(var e=[],t=i.length,n=0;n<t;n++){var a;e[n]={height:l,offset:l+((null===(a=e[n-1])||void 0===a?void 0:a.offset)||0)}}v(e)}),[i.length,l]);var g=performance.now(),b=h(d.slice(0,Math.ceil(s/l)+1).map((function(e){return e.offset})),s),p=performance.now();console.log("\u67e5\u627e startIndex \u8017\u65f6\uff1a ",p-g);var j=Math.ceil(u/l)+b+1,E=Object(a.useMemo)((function(){return i.slice(b,j)}),[i,j,b]),O=Object(a.useRef)();return O.current=d,Object(a.useEffect)((function(){if(O.current&&O.current.length&&-1!==b){for(var e=O.current,t=[],n=-1,a=Math.min(e.length-1,j),r=performance.now(),i=b;i<=a;i++){var l=c(i);l!==e[i].height&&(-1===n&&(n=i),t[i]={height:l,offset:0})}if(-1!==n){e.forEach((function(e,n){t[n]||(t[n]=e)}));for(var o=e.length,s=n;s<o;s++){var u;t[s].offset=t[s].height+((null===(u=t[s-1])||void 0===u?void 0:u.offset)||0)}var h=performance.now();console.log("\u66f4\u65b0\u7f13\u5b58\u8017\u65f6\uff1a ",h-r),v(t)}}}),[j,c,b]),{startIndex:b,positions:d,totalHeight:(null===(t=d[d.length-1])||void 0===t?void 0:t.offset)||0,visibleData:E,offset:((null===(n=d[b])||void 0===n?void 0:n.offset)||0)-((null===(r=d[b])||void 0===r?void 0:r.height)||0)}}({data:t,estimatedItemHeight:n,getItemHeight:i,scrollTop:u,clientHeight:v}),p=b.startIndex,j=b.positions,E=b.totalHeight,O=b.visibleData,x=b.offset,H=Object(a.useRef)(null),k=Object(a.useCallback)((function(){H.current&&f(H.current.scrollTop)}),[]),y=Object(a.useCallback)((function(e){e?(H.current=e,g(e.clientHeight)):H.current=null}),[]);return r.a.createElement("div",{className:"container",ref:y,onScroll:k},r.a.createElement("div",{className:"total-list",style:{height:"".concat(E,"px")}}),r.a.createElement("div",{className:"visible-list",style:{transform:"translateY(".concat(x,"px)")}},O.map((function(e,t){return r.a.createElement("div",{key:e.id,style:{height:"".concat(j[t+p].height,"px")}},c(e))}))))};var m=function(e){var t=e.data,n=e.estimatedItemHeight,i=e.itemRender,c=Object(a.useState)(0),l=Object(o.a)(c,2),s=l[0],u=l[1],f=Object(a.useState)(0),m=Object(o.a)(f,2),d=m[0],v=m[1],g=Object(a.useRef)([]),b=function(e){var t,n,r,i=e.data,c=e.estimatedItemHeight,l=e.scrollTop,s=e.clientHeight,u=e.itemRefs,f=Object(a.useState)([]),m=Object(o.a)(f,2),d=m[0],v=m[1];Object(a.useEffect)((function(){for(var e=[],t=i.length,n=0;n<t;n++){var a;e[n]={height:c,offset:c+((null===(a=e[n-1])||void 0===a?void 0:a.offset)||0)}}v(e)}),[i.length,c]);var g=performance.now(),b=h(d.slice(0,Math.ceil(l/c)+1).map((function(e){return e.offset})),l),p=performance.now();console.log("\u67e5\u627e startIndex \u8017\u65f6\uff1a ",p-g);var j=Math.ceil(s/c)+b+1,E=Object(a.useMemo)((function(){return i.slice(b,j)}),[i,j,b]),O=Object(a.useCallback)((function(){if(u.current.length&&d.length&&-1!==b){var e=[],t=-1,n=performance.now();if(u.current.forEach((function(n,a){if(n){var r=a+b,i=n.getBoundingClientRect().height;i!==d[r].height&&(-1===t&&(t=r),e[r]={height:i,offset:0})}})),-1!==t){d.forEach((function(t,n){e[n]||(e[n]=t)}));for(var a=d.length,r=t;r<a;r++){var i;e[r].offset=e[r].height+((null===(i=e[r-1])||void 0===i?void 0:i.offset)||0)}var c=performance.now();console.log("\u66f4\u65b0\u7f13\u5b58\u8017\u65f6\uff1a ",c-n),v(e)}}}),[u,d,b]);return{totalHeight:(null===(t=d[d.length-1])||void 0===t?void 0:t.offset)||0,visibleData:E,offset:((null===(n=d[b])||void 0===n?void 0:n.offset)||0)-((null===(r=d[b])||void 0===r?void 0:r.height)||0),updatePositions:O}}({data:t,estimatedItemHeight:n,scrollTop:s,clientHeight:d,itemRefs:g}),p=b.totalHeight,j=b.visibleData,E=b.offset,O=b.updatePositions,x=Object(a.useRef)(null),H=Object(a.useCallback)((function(){x.current&&u(x.current.scrollTop)}),[]),k=Object(a.useCallback)((function(e){e?(x.current=e,v(e.clientHeight)):x.current=null}),[]);return Object(a.useEffect)((function(){j&&(g.current=[])}),[j]),r.a.createElement("div",{className:"container",ref:k,onScroll:H},r.a.createElement("div",{className:"total-list",style:{height:"".concat(p,"px")}}),r.a.createElement("div",{className:"visible-list",style:{transform:"translateY(".concat(E,"px)")}},j.map((function(e,t){return r.a.createElement("div",{key:e.id,ref:function(e){g.current[t]=e,j.length===g.current.filter(Boolean).length&&O()}},i(e))}))))},d=n(14),v=n(15);var g=function(){function e(t){Object(d.a)(this,e),this.tree=void 0,this.bitMask=void 0,this.__init(t)}return Object(v.a)(e,[{key:"__init",value:function(e){this.tree=Array(e.length+1).fill(0);for(var t=0;t<e.length;t++)this.tree[t+1]=e[t];for(var n=1;n<this.tree.length;n++){var a=n+(n&-n);a<this.tree.length&&(this.tree[a]+=this.tree[n])}this.bitMask=function(e){for(var t=1,n=2;n<=e;)n=(t=n)<<1;return t}(e.length-1)}},{key:"update",value:function(e,t){for(;e<this.tree.length;)this.tree[e]+=t,e+=e&-e}},{key:"prefixSum",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tree.length-1,t=0;e>0;)t+=this.tree[e],e-=e&-e;return t}},{key:"rangeSum",value:function(e,t){return this.prefixSum(t)-this.prefixSum(e-1)}},{key:"getValue",value:function(e){var t=this.tree[e];if(e>0){var n=e-(e&-e);for(e--;e!==n;)t-=this.tree[e],e-=e&-e}return t}},{key:"find",value:function(e){for(var t=0,n=this.tree.length,a=this.bitMask;0!==a&&t<n;){var r=t+a;if(e===this.tree[r])return r;e>this.tree[r]&&(t=r,e-=this.tree[r]),a>>=1}return 0!==e?-1:t}},{key:"findG",value:function(e){for(var t=0,n=this.tree.length,a=this.bitMask;0!==a&&t<n;){var r=t+a;e>=this.tree[r]&&(t=r,e-=this.tree[r]),a>>=1}return 0!==e?-1:t}},{key:"findGe",value:function(e){for(var t=0,n=this.tree.length,a=this.bitMask;0!==a&&t<n;){var r=t+a;if(e===this.tree[r])return r;e>this.tree[r]&&(t=r,e-=this.tree[r]),a>>=1}return 0===e?t:t+1<this.tree.length?t+1:-1}}]),e}();var b=function(e){var t=e.data,n=e.estimatedItemHeight,i=e.itemRender,c=Object(a.useState)(0),l=Object(o.a)(c,2),s=l[0],u=l[1],h=Object(a.useState)(0),f=Object(o.a)(h,2),m=f[0],d=f[1],v=Object(a.useRef)([]),b=function(e){var t,n,r,i=e.data,c=e.estimatedItemHeight,l=e.scrollTop,o=e.clientHeight,s=e.itemRefs,u=Object(a.useRef)();Object(a.useEffect)((function(){for(var e=[],t=i.length,n=0;n<t;n++)e[n]=c;u.current=new g(e)}),[i.length,c]);var h=performance.now(),f=((null===(t=u.current)||void 0===t?void 0:t.findGe(l))||1)-1,m=performance.now();console.log("\u67e5\u627e startIndex \u8017\u65f6\uff1a ",m-h);var d=Math.ceil(o/c)+f+1,v=Object(a.useMemo)((function(){return i.slice(f,d)}),[i,d,f]),b=Object(a.useCallback)((function(){if(s.current.length&&i.length&&-1!==f){var e=performance.now();s.current.forEach((function(e,t){if(e){var n,a,r=t+f,i=e.getBoundingClientRect().height,c=(null===(n=u.current)||void 0===n?void 0:n.getValue(r+1))||0;if(i!==c)null===(a=u.current)||void 0===a||a.update(r+1,i-c)}}));var t=performance.now();console.log("\u66f4\u65b0\u7f13\u5b58\u8017\u65f6\uff1a ",t-e)}}),[i.length,s,f]);return{totalHeight:(null===(n=u.current)||void 0===n?void 0:n.prefixSum(i.length))||0,visibleData:v,offset:(null===(r=u.current)||void 0===r?void 0:r.prefixSum(f))||0,updatePositions:b}}({data:t,estimatedItemHeight:n,scrollTop:s,clientHeight:m,itemRefs:v}),p=b.totalHeight,j=b.visibleData,E=b.offset,O=b.updatePositions,x=Object(a.useRef)(null),H=Object(a.useCallback)((function(){x.current&&u(x.current.scrollTop)}),[]),k=Object(a.useCallback)((function(e){e?(x.current=e,d(e.clientHeight)):x.current=null}),[]);return Object(a.useEffect)((function(){j&&(v.current=[])}),[j]),r.a.createElement("div",{className:"container",ref:k,onScroll:H},r.a.createElement("div",{className:"total-list",style:{height:"".concat(p,"px")}}),r.a.createElement("div",{className:"visible-list",style:{transform:"translateY(".concat(E,"px)")}},j.map((function(e,t){return r.a.createElement("div",{key:e.id,ref:function(e){v.current[t]=e,j.length===v.current.filter(Boolean).length&&O()}},i(e))}))))};var p=function(e){var t=e.data,n=e.itemHeight,a=e.itemRender;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"visible-list"},t.map((function(e){return r.a.createElement("div",{key:e.id,style:{height:"".concat(n,"px")}},a(e))}))))};function j(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e5,t=[],n=0;n<e;n++)t.push({id:Math.random().toString(36).substr(2),index:n,value:n+1});return t}var E=j(),O=j(5e4),x=[{path:"/fixed-height",text:"\u5b9a\u9ad8"},{path:"/prop-height",text:"\u4e0d\u5b9a\u9ad8\uff08\u4e8c\u5206\uff09,"},{path:"/reactive-height",text:"\u81ea\u9002\u5e94\uff08\u4e8c\u5206\uff09"},{path:"/optimized-reactive-height",text:"\u81ea\u9002\u5e94\uff08\u6811\u72b6\u6570\u7ec4\uff09"},{path:"/normal-list",text:"\u666e\u901a\u5217\u8868"},{path:"/fixed-height-with-counter",text:"\u5e26\u8ba1\u6570\u5668"}];function H(){var e=Object(l.g)(),t=Object(l.h)(),n=Object(a.useCallback)((function(e){return r.a.createElement("div",{style:{boxSizing:"border-box",height:"100%",lineHeight:"50px",textAlign:"center",border:"1px solid black"}},e.value)}),[]),i=Object(a.useCallback)((function(e){return r.a.createElement("div",{style:{boxSizing:"border-box",height:"100%",lineHeight:"50px",textAlign:"center",border:"1px solid black"}},e.value," | ",r.a.createElement(s,null))}),[]),c=Object(a.useCallback)((function(e){return r.a.createElement("div",{style:{boxSizing:"border-box",height:"".concat(50+e.index%5*10,"px"),lineHeight:"50px",textAlign:"center",border:"1px solid black"}},e.value)}),[]),o=Object(a.useCallback)((function(e){return 50+e%5*10}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,x.map((function(n){return r.a.createElement("label",{key:n.path},r.a.createElement("input",{type:"radio",checked:t.pathname===n.path,onChange:function(){return e.push(n.path)}}),n.text)}))),r.a.createElement("div",{style:{border:"5px solid azure"}},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/"},r.a.createElement(l.a,{to:x[0].path})),r.a.createElement(l.b,{path:"/fixed-height"},r.a.createElement(u,{data:E,itemHeight:50,itemRender:n})),r.a.createElement(l.b,{path:"/prop-height"},r.a.createElement(f,{data:E,estimatedItemHeight:50,getItemHeight:o,itemRender:n})),r.a.createElement(l.b,{path:"/reactive-height"},r.a.createElement(m,{data:E,estimatedItemHeight:50,itemRender:c})),r.a.createElement(l.b,{path:"/optimized-reactive-height"},r.a.createElement(b,{data:E,estimatedItemHeight:50,itemRender:c})),r.a.createElement(l.b,{path:"/normal-list"},r.a.createElement(p,{data:O,itemHeight:50,itemRender:n})),r.a.createElement(l.b,{path:"/fixed-height-with-counter"},r.a.createElement(u,{data:E,itemHeight:50,itemRender:i})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(7);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k.a,{basename:"/virtual-list-demo-react"},r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f2663291.chunk.js.map