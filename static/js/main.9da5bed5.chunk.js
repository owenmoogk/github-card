(this["webpackJsonpgithub-card"]=this["webpackJsonpgithub-card"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(4),r=n.n(s),l=n(2),a=n(0);function o(e){var t,n=Object(i.useState)(),c=Object(l.a)(n,2),s=c[0],r=c[1],o=Object(i.useState)(),d=Object(l.a)(o,2),j=d[0],h=d[1],u=Object(i.useState)(),b=Object(l.a)(u,2),p=b[0],x=b[1],m=Object(i.useState)(60),O=Object(l.a)(m,2),g=O[0],f=O[1];function v(){fetch("https://api.github.com/rate_limit").then((function(e){return e.json()})).then((function(e){return f(e.rate.remaining)}))}return Object(i.useEffect)((function(){fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json").then((function(e){return e.json()})).then((function(e){return h(e)})),fetch("/github-card/emojis.json").then((function(e){return e.json()})).then((function(e){return x(e)}))}),[]),Object(i.useEffect)((function(){e.username&&e.repo&&fetch("https://api.github.com/repos/"+e.username+"/"+e.repo).then((function(e){return e.json()})).then((function(e){return r(e)})).then(v()),v()}),[e]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"rateLimit",children:[g," / 60 ",Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:"Requests"})]}),s&&j&&p?(t=(s.description||"").replace(/:\w+:/g,(function(e){var t=e.substring(1,e.length-1),n=p[t];return n?"<span><img src='".concat(n,"' style='width: 1rem; height: 1rem; vertical-align: -0.2rem;'></span>"):e})),Object(a.jsxs)("div",{id:"mainCard",style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",border:"1px solid #e1e4e8",borderRadius:"6px",background:"white",padding:"16px",fontSize:"14px",lineHeight:"1.5",color:"#24292e",width:"300px"},children:[Object(a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(a.jsx)("svg",{style:{fill:"#586069",marginRight:"8px"},viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"})}),Object(a.jsx)("span",{style:{fontWeight:"600",color:"#0366d6"},children:Object(a.jsxs)("a",{style:{textDecoration:"none",color:"inherit"},href:s.html_url,children:[e.includeUsername?e.username+"/":"",s.name]})})]}),Object(a.jsxs)("div",{style:{display:s.fork?"block":"none",fontSize:"12px",color:"#586069"},children:["Forked from",Object(a.jsx)("a",{style:{color:"inherit",textDecoration:"none"},href:s.fork?s.source.html_url:"",children:s.fork?s.source.full_name:""})]}),Object(a.jsx)("div",{style:{fontSize:"12px",marginBottom:"16px",marginTop:"8px",color:"#586069"},dangerouslySetInnerHTML:{__html:t}}),Object(a.jsxs)("div",{style:{fontSize:"12px",color:"#586069",display:"flex"},children:[Object(a.jsxs)("div",{style:{display:s.language?"":"none",marginRight:"16px"},children:[Object(a.jsx)("span",{style:{width:"12px",height:"12px",borderRadius:"100%",backgroundColor:s.language?j[s.language].color:"",display:"inline-block",top:"1px",position:"relative"}}),Object(a.jsxs)("span",{children:[" ",s.language]})]}),Object(a.jsxs)("div",{style:{display:e.includeZeros?"flex":0===s.stargazers_count?"none":"flex",alignItems:"center",marginRight:"16px"},children:[Object(a.jsx)("svg",{style:{fill:"#586069"},"aria-label":"stars",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"})}),"\xa0 ",Object(a.jsx)("span",{children:s.stargazers_count})]}),Object(a.jsxs)("div",{style:{display:e.includeZeros?"flex":0===s.forks?"none":"flex",alignItems:"center"},children:[Object(a.jsx)("svg",{style:{fill:"#586069"},"aria-label":"fork",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})}),"\xa0 ",Object(a.jsx)("span",{children:s.forks})]})]})]})):null]})}n(10);function d(){var e=Object(i.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(),r=Object(l.a)(s,2),d=r[0],j=r[1],h=Object(i.useState)(),u=Object(l.a)(h,2),b=u[0],p=u[1],x=Object(i.useState)(),m=Object(l.a)(x,2),O=m[0],g=m[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Github Cards (React)"}),Object(a.jsxs)("div",{id:"inputGroup",children:[Object(a.jsx)("input",{placeholder:"User",id:"usernameInput",type:"text"}),Object(a.jsx)("input",{placeholder:"Repository",id:"repoInput",type:"text"}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",id:"includeUsername"}),Object(a.jsx)("span",{children:"Include Username"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",id:"includeZeros"}),Object(a.jsx)("span",{children:"Include Zero'd Icons (stars, forks, etc)"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:function(){return c(document.getElementById("usernameInput").value),j(document.getElementById("repoInput").value),g(document.getElementById("includeZeros").checked),void p(document.getElementById("includeUsername").checked)},children:"Submit"})]}),Object(a.jsx)("br",{}),Object(a.jsx)(o,{username:n,repo:d,includeUsername:b,includeZeros:O}),Object(a.jsx)("p",{id:"downloadButton",children:Object(a.jsx)("a",{href:"/github-card/GithubCardDownload.js",download:!0,children:"Download React Component"})})]})}r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.9da5bed5.chunk.js.map