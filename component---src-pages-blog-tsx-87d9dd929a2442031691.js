(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1GPU":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return d}));var r=n("q1tI"),a=n.n(r),i=n("soUV"),o=n("9u5D"),u=n("Cqiw"),l=n("T+OK"),c=n("s1X6"),d="1650380636";t.default=function(e){var t=e.data,n=t.site.siteMetadata.title,r=t.allMarkdownRemark.edges;return a.a.createElement(i.a,{title:n},a.a.createElement(o.a,{title:"Blog",keywords:["blog","gatsby","typescript","javascript","portfolio","react"]}),a.a.createElement(l.a,{normalVelocity:1e-4,containerOpacity:.3,addEventListeners:!1}),a.a.createElement(u.a,null,a.a.createElement("h1",null,"Blog"),a.a.createElement("h4",null,"Things I do and write about to be useful to others"),a.a.createElement("p",null,"Tags"),a.a.createElement(c.a,{posts:r})))}},Cqiw:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);function i(){var e=l(["\n    margin: 2rem auto 0;\n    padding: 0 2rem 6rem;\n  "]);return i=function(){return e},e}function o(){var e=l(["\n    width: 100%;\n    margin: 4rem auto 0;\n    padding: 0 3rem 6rem;\n  "]);return o=function(){return e},e}function u(){var e=l(["\n    width: 1.45rem;\n    margin: 8rem auto 3rem;\n    width: calc(100% - 11rem * 2);\n  "]);return u=function(){return e},e}function l(e,t){return t||(t=e.slice(0)),e.raw=t,e}var c=n("vOnD").e.div.withConfig({displayName:"Content__ContentContainer",componentId:"sc-1q50de9-0"})(["max-width:68rem;width:calc(100% - 9.25rem * 2);margin:11rem auto 5rem;position:absolute;height:100%;top:0;left:0;right:0;bottom:0;"," "," ",""],(function(e){return e.theme.media.lg(u())}),(function(e){return e.theme.media.md(o())}),(function(e){return e.theme.media.sm(i())}));t.a=function(e){var t=e.children;return a.a.createElement(c,null,t)}},"T+OK":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=(n("a1Th"),n("Btvt"),function(e,t){return void 0===e&&(e=10),void 0===t&&(t=1),Math.floor(Math.random()*e)+t}),u=function(){for(var e=[],t=0;t<o();t++)e.push("\n      radial-gradient(\n        circle at "+o(100)+"% "+o(100)+"%,\n        #"+("00000"+(Math.random()*(1<<24)|0).toString(16)).slice(-6)+"0d,\n        transparent "+o(100,60)+"%\n      )\n  ");return e.join(",")};t.a=function(e){var t,n,o=e.containerOpacity,l=void 0===o?1:o,c="undefined"!=typeof window&&(window.innerWidth+window.innerHeight)/8,d=1,s=[],m=!1,f={x:null,y:null},h=!0,v=[],p=-1,g=e.normalVelocity,y=void 0===g?5e-4:g,w={x:0,y:0,tx:0,ty:0,z:y},b=e.addEventListeners,E=void 0===b||b,x=function(e,t){if(h){if("number"==typeof f.x&&"number"==typeof f.y){var n=e-f.x,r=t-f.y;w.tx=w.tx-n/8*d*(m?1:-1),w.ty=w.ty-r/8*d*(m?1:-1)}f={x:e,y:t}}},L=function(e){d=window.devicePixelRatio||1,t=window.innerWidth*d,n=window.innerHeight*d,e.width=t,e.height=n,s.forEach((function(e){e.x=Math.random()*t,e.y=Math.random()*n}))},z=function(e){console.log("accelerates"),f={x:null,y:null},h=!e,w.z=e?.1:y},M=a.a.useRef(null),k=a.a.useState(null),I=k[0],C=k[1];a.a.useEffect((function(){var e=function(e){m=!0,x(e.clientX,e.clientY)},r=function(e){m=!0,x(e.touches[0].clientX,e.touches[0].clientY),e.preventDefault()},a=function(){m=!1,f={x:null,y:null}},i=function(){m=!1,f={x:null,y:null}},o=function(){L(M.current)},u=function(e){z(e.deltaY<0)},l=function(e){!function(e){v=v.filter((function(t){return t.pointerId!==e.pointerId}))}(e),v.length<2&&(p=-1)};if(M.current){var h=M.current.getContext("2d");if(h){var g=M.current;E&&(g.addEventListener("pointerdown",(function(e){v.push(e)})),g.addEventListener("pointermove",(function(e){for(var t=0;t<v.length;t++)if(e.pointerId===v[t].pointerId){v[t]=e;break}if(2==v.length){var n=Math.abs(v[0].clientX-v[1].clientX);z(p>0&&n>p),p=n}})),g.addEventListener("pointerup",l),g.addEventListener("pointercancel",l),g.addEventListener("pointerout",l),g.addEventListener("pointerleave",l),window.addEventListener("wheel",u),window.addEventListener("resize",o),g.addEventListener("mousemove",e),g.addEventListener("touchmove",r),g.addEventListener("touchend",i),document.addEventListener("mouseleave",a)),C(h)}}if(I){var y=function(){w.tx*=.96,w.ty*=.96,w.x+=.8*(w.tx-w.x),w.y+=.8*(w.ty-w.y),s.forEach((function(e){e.x+=w.x*e.z+(e.x-t/2)*w.z*e.z,e.y+=w.y*e.z+(e.y-n/2)*w.z*e.z,e.z+=w.z,(e.x<-50||e.x>t+50||e.y<-50||e.y>n+50)&&function(e){var r="z",a=Math.abs(w.x),i=Math.abs(w.y);(a>1||i>1)&&(r="h"===(a>i?Math.random()<a/(a+i)?"h":"v":Math.random()<i/(a+i)?"v":"h")?w.x>0?"l":"r":w.y>0?"t":"b");e.z=.2+.8*Math.random(),"z"===r?(e.x=Math.random()*t,e.y=Math.random()*n,e.z=.1):"l"===r?(e.x=-50,e.y=n*Math.random()):"r"===r?(e.x=t+50,e.y=n*Math.random()):"t"===r?(e.x=t*Math.random(),e.y=-50):"b"===r&&(e.x=t*Math.random(),e.y=n+50)}(e)}))};!function(){for(var e=0;e<c;e++)s.push({x:0,y:0,z:.2+.8*Math.random()})}(),L(M.current),function e(){I.clearRect(0,0,t,n),y(),s.forEach((function(e){I.beginPath(),I.lineCap="round",I.lineWidth=3*e.z*d,I.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",I.beginPath(),I.moveTo(e.x,e.y);var t=2*w.x,n=2*w.y;Math.abs(t)<.1&&(t=.5),Math.abs(n)<.1&&(n=.5),I.lineTo(e.x+t,e.y+n),I.stroke()})),requestAnimationFrame(e)}()}return function(){if(s.length=0,M.current){var t=M.current;t.removeEventListener("mousemove",e),t.removeEventListener("touchmove",r),t.removeEventListener("touchend",i),window.removeEventListener("wheel",u),window.removeEventListener("resize",o),document.removeEventListener("mouseleave",a)}}}),[I]);var q=Object(r.useContext)(i.a);return a.a.createElement("canvas",{id:"canvas",ref:M,style:{backgroundColor:q.colors.black,backgroundImage:u(),opacity:l,position:"fixed",width:"100%",height:"100%"}})}},s1X6:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("q1tI"),a=n.n(r),i=n("vOnD"),o=n("Wbzz");function u(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n      &:hover {\n        > header {\n          transform: translateX(-.75rem);\n        }\n      }\n    "]);return u=function(){return e},e}var l=i.e.article.withConfig({displayName:"PostsListItem__Wrapper",componentId:"hqhtfb-0"})(["padding:1.3rem 0;border-bottom:1px dotted #2f3743;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;position:relative;> header{transform:translateX(0);transition:transform 0.5s cubic-bezier(0.5,0.1,0,1.15);backface-visibility:hidden;will-change:transform;}&:last-child{border-bottom:0;}> a{position:absolute;top:0;right:0;bottom:0;left:0;font-size:0;line-height:0;}",""],(function(e){return e.hasLink&&Object(i.d)(["",""],(function(e){return e.theme.media.hover(u())}))})),c=i.e.h3.withConfig({displayName:"PostsListItem__WorkTitle",componentId:"hqhtfb-1"})(["font-size:1.1rem;color:#fff;font-weight:400;"]),d=i.e.div.withConfig({displayName:"PostsListItem__WorkInfos",componentId:"hqhtfb-2"})(["margin-top:0.5rem;font-family:",";font-size:0.9rem;color:",";"],(function(e){return e.theme.mono}),(function(e){return e.theme.mediumDark})),s=i.e.span.withConfig({displayName:"PostsListItem__WorkYear",componentId:"hqhtfb-3"})(["color:#fff;&::before{content:'';display:inline-block;vertical-align:middle;height:1px;width:1rem;background:",";margin-right:0.5rem;}"],(function(e){return e.theme.secondary})),m=function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug,r=t.frontmatter.tags;return a.a.createElement(o.Link,{to:t.fields.slug},a.a.createElement(l,{hasLink:null!==t.fields.slug},a.a.createElement("header",null,a.a.createElement(c,null,n),a.a.createElement(d,null,r&&a.a.createElement("span",null," ",r.map((function(e){return e})).join(", ")))),a.a.createElement(d,null,a.a.createElement(s,null,t.frontmatter.date))))},f=i.e.section.withConfig({displayName:"PostsList__PostsListContainer",componentId:"sc-1fsbild-0"})(["margin:1.5rem auto 0;"]),h=function(e){var t=e.posts;return a.a.createElement(f,null,t.map((function(e){var t=e.node;return a.a.createElement(m,{key:t.fields.slug,node:t})})))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-87d9dd929a2442031691.js.map