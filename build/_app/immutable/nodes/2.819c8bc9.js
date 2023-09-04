import{s as V,f as b,g as y,h as D,d as m,j as f,i as L,A as J,y as C,B as Q,o as U,a as I,c as A,C as z,x as u,D as Z,l as F,m as N}from"../chunks/scheduler.fc98c3f7.js";import{S,i as H,b as q,d as R,m as X,a as Y,t as G,e as K}from"../chunks/index.e9d1f7bc.js";import{_ as $}from"../chunks/preload-helper.a4192956.js";function B(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ee(n){let e,t,s;return{c(){e=b("div"),this.h()},l(a){e=y(a,"DIV",{style:!0,class:!0}),D(e).forEach(m),this.h()},h(){f(e,"style",n[0]),f(e,"class","m-0")},m(a,l){L(a,e,l),t||(s=J(n[1].call(null,e)),t=!0)},p(a,[l]){l&1&&f(e,"style",a[0])},i:C,o:C,d(a){a&&m(e),t=!1,s()}}}function te(n,e){return e.forEach(([t,s])=>n[t]=s),n}function se(n,e,t){let{target:s=void 0}=e,{sketch:a=void 0}=e,{parentDivStyle:l="display: block;"}=e,{debug:k=!1}=e,g;const h=Q(),p={ref(){h("ref",s)},instance(){h("instance",g)}};function _(c){return t(2,s=c),{destroy(){t(2,s=void 0)}}}return U(async()=>{const c=await $(()=>import("../chunks/p5.min.375de4ec.js").then(d=>d.p),[],import.meta.url),{default:E}=c,x=Object.entries(c).filter(([d,o])=>o instanceof Function&&d[0]!=="_"&&d!=="default");k&&console.log("available p5 native classes",x),g=new E(d=>(d=te(d,x),k&&console.log("p5 instance",d),window._p5Instance=d,a(d)),s),p.ref(),p.instance()}),n.$$set=c=>{"target"in c&&t(2,s=c.target),"sketch"in c&&t(3,a=c.sketch),"parentDivStyle"in c&&t(0,l=c.parentDivStyle),"debug"in c&&t(4,k=c.debug)},[l,_,s,a,k]}class ae extends S{constructor(e){super(),H(this,e,se,ee,V,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function ne(n){let e,t;return e=new ae({props:{sketch:n[0]}}),{c(){q(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,a){X(e,s,a),t=!0},p:C,i(s){t||(Y(e.$$.fragment,s),t=!0)},o(s){G(e.$$.fragment,s),t=!1},d(s){K(e,s)}}}function ie(n){return[t=>{var s=.098,a=1e3,l=[];t.setup=()=>{t.createCanvas(t.displayWidth,t.displayHeight).class("fixed top-0 left-0 z-[-1]");for(var g=0;g<a;g++)l.push(new k(t));t.frameRate(30)},t.draw=()=>{t.clear(),l.forEach(function(g){g.drawAndDrop()})};class k{constructor(h){this.p=h,this.initX(),this.y=h.random()*h.height,this.length=h.random()*10,this.speed=h.random()}initX(){this.x=this.p.random()*this.p.width}initY(){this.y=-this.p.random()*this.p.height/3}drawAndDrop(){this.draw(),this.drop()}draw(){this.p.stroke(255,255,255),this.p.line(this.x,this.y,this.x,this.y+this.length)}drop(){this.y<this.p.height?(this.y+=this.speed,this.speed+=s):(this.speed=this.p.random(),this.initY(),this.initX())}}}]}class re extends S{constructor(e){super(),H(this,e,ie,ne,V,{})}}function O(n,e,t){const s=n.slice();return s[1]=e[t],s}function W(n){let e,t,s,a,l,k=n[1].title+"",g,h,p,_=n[1].description+"",c,E;return{c(){e=b("div"),t=b("a"),s=b("div"),a=b("div"),l=b("h2"),g=F(k),h=I(),p=b("p"),c=F(_),E=I(),this.h()},l(v){e=y(v,"DIV",{class:!0,style:!0});var x=D(e);t=y(x,"A",{href:!0,target:!0});var d=D(t);s=y(d,"DIV",{class:!0});var o=D(s);a=y(o,"DIV",{class:!0});var i=D(a);l=y(i,"H2",{class:!0});var w=D(l);g=N(w,k),w.forEach(m),h=A(i),p=y(i,"P",{class:!0});var r=D(p);c=N(r,_),r.forEach(m),i.forEach(m),o.forEach(m),d.forEach(m),E=A(x),x.forEach(m),this.h()},h(){f(l,"class","mt-2 text-xl font-semibold text-secondary capitalize"),f(p,"class","mt-2 text-lg tracking-wider text-white uppercase "),f(a,"class","bg-dark/50 p-2 rounded-lg"),f(s,"class","flex flex-col justify-center w-full h-full px-8 py-4 bg-black/60 transition-opacity duration-700 opacity-0 backdrop-blur-sm group-hover:opacity-100"),f(t,"href",n[1].link),f(t,"target","_blank"),f(e,"class","overflow-hidden bg-center bg-cover rounded-lg cursor-pointer h-96 group"),f(e,"style","background-image:url("+n[1].image+")")},m(v,x){L(v,e,x),u(e,t),u(t,s),u(s,a),u(a,l),u(l,g),u(a,h),u(a,p),u(p,c),u(e,E)},p:C,d(v){v&&m(e)}}}function le(n){let e,t,s,a,l,k='<div class="flex justify-center"><div class="mt-10 md:mt-0 p-5 md:p-5 bg-tertiary rounded-lg inline-block glass-container"><h2 class="text-2xl font-semibold capitalize text-center pb-5">Brent Blake</h2> <p class="text-lg">Cape Town, South Africa 🇿🇦</p> <p class="text-lg">github.com/brentvblake</p> <p class="text-lg">brent99blake@gmail.com</p> <p class="text-lg">linkedin.com/in/brentvblake</p></div></div> <div class="md:fixed bottom-4 left-1/2 md:left-[20%] md:transform md:-translate-x-1/2 flex items-center space-x-4"><img src="/dino.png" alt="Brent" class="w-10 h-10 rounded-full ring-4 ring-secondary"/> <div class="flex space-x-4"><div class="flex items-center space-x-2 text-tertiary bg-secondary p-4 rounded-lg glass-container"><a href="https://github.com/brentvblake" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2"><img src="/github.svg" alt="GitHub logo" class="w-6 h-6 text-tertiary fill=currentColor"/> <span>Github</span> <img src="/share.svg" alt="share icon" class="w-6 h-6 text-tertiary fill=currentColor"/></a></div> <div class="flex items-center space-x-2 text-tertiary bg-secondary p-4 rounded-lg glass-container"><a href="https://linkedin.com/in/brentvblake" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2"><img src="/linkedin.svg" alt="LinkedIn logo" class="w-6 h-6 text-tertiary fill=currentColor"/> <span>LinkedIn</span> <img src="/share.svg" alt="share icon" class="w-6 h-6 text-tertiary fill=currentColor"/></a></div></div></div>',g,h,p,_,c='<h1 class="text-4xl font-semibold text-center text-secondary bg-tertiary p-2 rounded-lg inline-block mx-auto glass-container">Projects</h1>',E,v,x;t=new re({});let d=B(n[0]),o=[];for(let i=0;i<d.length;i+=1)o[i]=W(O(n,d,i));return{c(){e=b("body"),q(t.$$.fragment),s=I(),a=b("main"),l=b("section"),l.innerHTML=k,g=I(),h=b("section"),p=b("div"),_=b("div"),_.innerHTML=c,E=I(),v=b("div");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){e=y(i,"BODY",{});var w=D(e);R(t.$$.fragment,w),s=A(w),a=y(w,"MAIN",{class:!0});var r=D(a);l=y(r,"SECTION",{class:!0,"data-svelte-h":!0}),z(l)!=="svelte-gy3x3z"&&(l.innerHTML=k),g=A(r),h=y(r,"SECTION",{class:!0});var P=D(h);p=y(P,"DIV",{class:!0});var T=D(p);_=y(T,"DIV",{class:!0,"data-svelte-h":!0}),z(_)!=="svelte-kk5ajl"&&(_.innerHTML=c),E=A(T),v=y(T,"DIV",{class:!0});var M=D(v);for(let j=0;j<o.length;j+=1)o[j].l(M);M.forEach(m),T.forEach(m),P.forEach(m),r.forEach(m),w.forEach(m),this.h()},h(){f(l,"class","w-full md:w-2/5 p-20 text-secondary overflow-y-auto md:fixed top-0"),f(_,"class","flex justify-items-center"),f(v,"class","grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-1 xl:grid-cols-1"),f(p,"class","container px-6 py-10 mx-auto"),f(h,"class","w-full md:w-3/5 md:ml-[40%] mt-10 md:mt-0 overflow-y-auto"),f(a,"class","flex flex-col items-center md:flex-row")},m(i,w){L(i,e,w),X(t,e,null),u(e,s),u(e,a),u(a,l),u(a,g),u(a,h),u(h,p),u(p,_),u(p,E),u(p,v);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(v,null);x=!0},p(i,[w]){if(w&1){d=B(i[0]);let r;for(r=0;r<d.length;r+=1){const P=O(i,d,r);o[r]?o[r].p(P,w):(o[r]=W(P),o[r].c(),o[r].m(v,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=d.length}},i(i){x||(Y(t.$$.fragment,i),x=!0)},o(i){G(t.$$.fragment,i),x=!1},d(i){i&&m(e),K(t),Z(o,i)}}}function oe(n){var e=[{title:"Deep Learning Heart Disease Prediction",description:"This project employs various deep learning models for binary classification to predict the presence or absence of heart disease.",image:"heart.jpg",link:"https://github.com/brentvblake/Heart-disease-prediction"},{title:"Fake News Detection (NLP)",description:"This project focuses on developing a fake news detection model using natural language processing (NLP).",image:"fake-news.jpg",link:"https://github.com/brentvblake/Fake-News-Detection-NLP"},{title:"Laundry Kiosk Application",description:"This work is a showcase of a laundry kiosk application I'm developing in flutter, it will provide easy access to laundry services via cashless payment systems.",image:"kiosk.png",link:"/"},{title:"Automated Card Scanner/Printer",description:"This project is a showcase of an automated card scanner/printer I developed for a client. It runs on a desktop pc and connects to a RFID card scanner and a thermal card printer.",image:"card.png",link:"/"},{title:"Personal Protection Equipment (PPE) Vending App",description:"A showcase of a PPE vending app I created, providing easy access to personal protective equipment.",image:"vending.png",link:"https://github.com/brentvblake/PPE_Vending_App"},{title:"Evolution of Music Taste",description:"Analysing Popular Music Trends Over Time",image:"songs.png",link:"https://github.com/brentvblake/Popular-Music-Evolution-analysed"},{title:"WhatsApp Chat Data Visualizer",description:"Transforms exported WhatsApp chat data into insightful visualizations",image:"whatsapp.png",link:"https://github.com/brentvblake/WhatsApp-Chat-Analysis-and-Data-Visuals"},{title:"Fantasy F1 Data Visualised",description:"This project is a visualization of Fantasy Points for the F1 2022 season from a fantasy league I was part of on kicktipp.com.",image:"f1data.png",link:"https://github.com/brentvblake/f1_2022_fantasy_data_visualized"},{title:"This Website",description:"A personal website to showcase my projects and skills",image:"site.png",link:"https://github.com/brentvblake/my-portfolio-web"}];return[e]}class pe extends S{constructor(e){super(),H(this,e,oe,le,V,{})}}export{pe as component};
