(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Cqiw:function(e,t,n){"use strict";var r=n("AcpX"),a=n("q1tI"),i=n.n(a),o=n("vOnD");function u(){var e=Object(r.a)(["\n    margin: 2rem auto 0;\n    padding: 0 2rem 6rem;\n  "]);return u=function(){return e},e}function c(){var e=Object(r.a)(["\n    width: 100%;\n    margin: 4rem auto 0;\n    padding: 0 3rem 6rem;\n  "]);return c=function(){return e},e}function l(){var e=Object(r.a)(["\n    width: 1.45rem;\n    margin: 8rem auto 3rem;\n    width: calc(100% - 11rem * 2);\n  "]);return l=function(){return e},e}var d=o.e.div.withConfig({displayName:"Content__ContentContainer",componentId:"sc-1q50de9-0"})(["max-width:68rem;width:calc(100% - 9.25rem * 2);margin:11rem auto 5rem;position:absolute;height:100%;top:0;left:0;right:0;bottom:0;"," "," ",""],(function(e){return e.theme.media.max.lg(l())}),(function(e){return e.theme.media.max.md(c())}),(function(e){return e.theme.media.max.sm(u())})),m=o.e.div.withConfig({displayName:"Content__ContentBottom",componentId:"sc-1q50de9-1"})(["height:10rem;"]);t.a=function(e){var t=e.children;return i.a.createElement(d,null,t,i.a.createElement(m,null))}},"T+OK":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=function(e,t){return void 0===e&&(e=10),void 0===t&&(t=1),Math.floor(Math.random()*e)+t},u=function(){for(var e=[],t=0;t<o();t++)e.push("\n      radial-gradient(\n        circle at "+o(100)+"% "+o(100)+"%,\n        #"+("00000"+(Math.random()*(1<<24)|0).toString(16)).slice(-6)+"0d,\n        transparent "+o(100,60)+"%\n      )\n  ");return e.join(",")};t.a=function(e){var t,n,o=e.containerOpacity,c=void 0===o?1:o,l="undefined"!=typeof window&&(window.innerWidth+window.innerHeight)/8,d=1,m=[],s=!1,f={x:null,y:null},v=!0,h=[],y=-1,p=e.normalVelocity,w=void 0===p?5e-4:p,x={x:0,y:0,tx:0,ty:0,z:w},g=e.addEventListeners,E=void 0===g||g,b=function(e,t){if(v){if("number"==typeof f.x&&"number"==typeof f.y){var n=e-f.x,r=t-f.y;x.tx=x.tx-n/8*d*(s?1:-1),x.ty=x.ty-r/8*d*(s?1:-1)}f={x:e,y:t}}},M=function(e){d=window.devicePixelRatio||1,t=window.innerWidth*d,n=window.innerHeight*d,e.width=t,e.height=n,m.forEach((function(e){e.x=Math.random()*t,e.y=Math.random()*n}))},L=function(e){f={x:null,y:null},v=!e,x.z=e?.05:w},z=a.a.useRef(null),C=a.a.useState(null),k=C[0],I=C[1];a.a.useEffect((function(){var e=function(e){s=!0,b(e.clientX,e.clientY)},r=function(e){s=!0,b(e.touches[0].clientX,e.touches[0].clientY),e.preventDefault()},a=function(){s=!1,f={x:null,y:null}},i=function(){s=!1,f={x:null,y:null}},o=function(){M(z.current)},u=function(e){L(e.deltaY<0)},c=function(e){!function(e){h=h.filter((function(t){return t.pointerId!==e.pointerId}))}(e),h.length<2&&(y=-1)};if(z.current){var v=z.current.getContext("2d");if(v){var p=z.current;E&&(p.addEventListener("pointerdown",(function(e){h.push(e)})),p.addEventListener("pointermove",(function(e){for(var t=0;t<h.length;t++)if(e.pointerId===h[t].pointerId){h[t]=e;break}if(2==h.length){var n=Math.abs(h[0].clientX-h[1].clientX);L(y>0&&n>y),y=n}})),p.addEventListener("pointerup",c),p.addEventListener("pointercancel",c),p.addEventListener("pointerout",c),p.addEventListener("pointerleave",c),window.addEventListener("wheel",u),window.addEventListener("resize",o),p.addEventListener("mousemove",e),p.addEventListener("touchmove",r),p.addEventListener("touchend",i),document.addEventListener("mouseleave",a)),I(v)}}if(k){var w=function(){x.tx*=.96,x.ty*=.96,x.x+=.8*(x.tx-x.x),x.y+=.8*(x.ty-x.y),m.forEach((function(e){e.x+=x.x*e.z+(e.x-t/2)*x.z*e.z,e.y+=x.y*e.z+(e.y-n/2)*x.z*e.z,e.z+=x.z,(e.x<-50||e.x>t+50||e.y<-50||e.y>n+50)&&function(e){var r="z",a=Math.abs(x.x),i=Math.abs(x.y);(a>1||i>1)&&(r="h"===(a>i?Math.random()<a/(a+i)?"h":"v":Math.random()<i/(a+i)?"v":"h")?x.x>0?"l":"r":x.y>0?"t":"b");e.z=.2+.8*Math.random(),"z"===r?(e.x=Math.random()*t,e.y=Math.random()*n,e.z=.1):"l"===r?(e.x=-50,e.y=n*Math.random()):"r"===r?(e.x=t+50,e.y=n*Math.random()):"t"===r?(e.x=t*Math.random(),e.y=-50):"b"===r&&(e.x=t*Math.random(),e.y=n+50)}(e)}))};!function(){for(var e=0;e<l;e++)m.push({x:0,y:0,z:.2+.8*Math.random()})}(),M(z.current),function e(){k.clearRect(0,0,t,n),w(),m.forEach((function(e){k.beginPath(),k.lineCap="round",k.lineWidth=3*e.z*d,k.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",k.beginPath(),k.moveTo(e.x,e.y);var t=2*x.x,n=2*x.y;Math.abs(t)<.1&&(t=.5),Math.abs(n)<.1&&(n=.5),k.lineTo(e.x+t,e.y+n),k.stroke()})),requestAnimationFrame(e)}()}return function(){if(m.length=0,z.current){var t=z.current;t.removeEventListener("mousemove",e),t.removeEventListener("touchmove",r),t.removeEventListener("touchend",i),window.removeEventListener("wheel",u),window.removeEventListener("resize",o),document.removeEventListener("mouseleave",a)}}}));var O=Object(r.useContext)(i.a);return a.a.createElement("canvas",{id:"canvas",ref:z,style:{backgroundColor:O.colors.black,backgroundImage:u(),opacity:c,position:"fixed",width:"100%",height:"100%"}})}},xSjX:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return d}));var r=n("q1tI"),a=n.n(r),i=n("soUV"),o=n("9u5D"),u=n("T+OK"),c=n("Cqiw"),l=n("bFe0"),d="1897852926";t.default=function(e){var t=e.data,n=t.site.siteMetadata.title,r=t.allMarkdownRemark&&t.allMarkdownRemark.group.sort((function(e,t){return t.totalCount-e.totalCount}));return a.a.createElement(i.a,{title:n},a.a.createElement(o.a,{title:"All tags",keywords:["blog","gatsby","typescript","javascript","portfolio","react"]}),a.a.createElement(u.a,{normalVelocity:1e-4,containerOpacity:.3,addEventListeners:!1}),a.a.createElement(c.a,null,a.a.createElement(l.c,null,a.a.createElement(l.h,null,"All tags"),a.a.createElement(l.a,null,"Stuff tags")),a.a.createElement("article",null,a.a.createElement(l.d,null,r&&r.map((function(e){return e&&a.a.createElement(l.g,{key:e.fieldValue,to:"/tags/"+e.fieldValue+"/"},e.fieldValue," - ",a.a.createElement("small",null,e.totalCount))}))))))}}}]);
//# sourceMappingURL=component---src-pages-tags-tsx-07e71d184b6b673d51cd.js.map