import{s as J,f as w,a as A,g as V,h as L,d as p,c as $,j as m,i as y,K as z,L as T,M as f1,u as v1,o as d1,l as G,m as N,T as Q,p as p1,O as P,q as m1,U as X,V as I,n as Z,W as g1}from"../chunks/scheduler.7a274a43.js";import{S as K,i as W,b as D,d as U,m as O,a as E,t as S,e as R,c as z1,g as _1}from"../chunks/index.28409b7f.js";import{U as e1,e as F,g as t1}from"../chunks/UIcon.9316ceba.js";import{P as B}from"../chunks/types.1ebf2f37.js";import{u as C1,M as l1,t as M1}from"../chunks/app.42e68351.js";import{s as b1,n as r1,l as a1,t as L1,a as s1,d as n1}from"../chunks/home.fd520a4b.js";import{i as k1}from"../chunks/skills.cd7e3212.js";import{i as w1}from"../chunks/index.4836723c.js";function o1(e,t,l){const r=e.slice();return r[16]=t[l],r}function i1(e){let t,l,r,s,n,i,f=e[16].name+"",h,M;return{c(){t=w("div"),l=w("img"),n=A(),i=w("span"),h=G(f),M=A(),this.h()},l(_){t=V(_,"DIV",{class:!0});var d=L(t);l=V(d,"IMG",{class:!0,src:!0,alt:!0}),n=$(d),i=V(d,"SPAN",{class:!0});var b=L(i);h=N(b,f),b.forEach(p),M=$(d),d.forEach(p),this.h()},h(){m(l,"class","w-120px h-120px aspect-square"),Q(l.src,r=t1(e[16].logo))||m(l,"src",r),m(l,"alt",s=e[16].name),m(i,"class","text-center m-t-20px"),m(t,"class","box-content w-150px p-15px col-center")},m(_,d){y(_,t,d),z(t,l),z(t,n),z(t,i),z(i,h),z(t,M)},p(_,d){d&1&&!Q(l.src,r=t1(_[16].logo))&&m(l,"src",r),d&1&&s!==(s=_[16].name)&&m(l,"alt",s),d&1&&f!==(f=_[16].name+"")&&p1(h,f)},d(_){_&&p(t)}}}function V1(e){let t,l,r,s,n,i,f,h,M,_,d;r=new e1({props:{icon:"i-carbon-chevron-left"}});let b=F(e[0]),v=[];for(let u=0;u<b.length;u+=1)v[u]=i1(o1(e,b,u));return h=new e1({props:{icon:"i-carbon-chevron-right"}}),{c(){t=w("div"),l=w("button"),D(r.$$.fragment),s=A(),n=w("div");for(let u=0;u<v.length;u+=1)v[u].c();i=A(),f=w("button"),D(h.$$.fragment),this.h()},l(u){t=V(u,"DIV",{class:!0});var g=L(t);l=V(g,"BUTTON",{class:!0});var a=L(l);U(r.$$.fragment,a),a.forEach(p),s=$(g),n=V(g,"DIV",{class:!0});var H=L(n);for(let o=0;o<v.length;o+=1)v[o].l(H);H.forEach(p),i=$(g),f=V(g,"BUTTON",{class:!0});var c=L(f);U(h.$$.fragment,c),c.forEach(p),g.forEach(p),this.h()},h(){m(l,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),m(n,"class","row overflow-hidden box-content w-150px"),m(f,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),m(t,"class","carrousel flex-[0.5] row-center")},m(u,g){y(u,t,g),z(t,l),O(r,l,null),z(t,s),z(t,n);for(let a=0;a<v.length;a+=1)v[a]&&v[a].m(n,null);e[11](n),z(t,i),z(t,f),O(h,f,null),M=!0,_||(d=[T(l,"click",e[2]),T(l,"keyup",e[8]),T(l,"keydown",e[9]),T(l,"keypress",e[10]),T(f,"click",e[3]),T(f,"keyup",e[5]),T(f,"keydown",e[6]),T(f,"keypress",e[7])],_=!0)},p(u,[g]){if(g&1){b=F(u[0]);let a;for(a=0;a<b.length;a+=1){const H=o1(u,b,a);v[a]?v[a].p(H,g):(v[a]=i1(H),v[a].c(),v[a].m(n,null))}for(;a<v.length;a+=1)v[a].d(1);v.length=b.length}},i(u){M||(E(r.$$.fragment,u),E(h.$$.fragment,u),M=!0)},o(u){S(r.$$.fragment,u),S(h.$$.fragment,u),M=!1},d(u){u&&p(t),R(r),f1(v,u),e[11](null),R(h),_=!1,v1(d)}}}const x1=2e3;function A1(e,t,l){let{items:r=[]}=t,s,n,i=0,f=!0;const h=o=>{o?i<r.length-1?l(4,i=i+1):(l(4,i=i-1),f=!1):i>0?l(4,i=i-1):(l(4,i=i+1),f=!0)},M=o=>{clearTimeout(n),n=setTimeout(()=>{h(o),M(f)},x1)},_=()=>{clearTimeout(n),f=!1,h(!1),M(f)},d=()=>{clearTimeout(n),f=!0,h(!0),M(f)};d1(()=>{M(!0)});function b(o){P.call(this,e,o)}function v(o){P.call(this,e,o)}function u(o){P.call(this,e,o)}function g(o){P.call(this,e,o)}function a(o){P.call(this,e,o)}function H(o){P.call(this,e,o)}function c(o){m1[o?"unshift":"push"](()=>{s=o,l(1,s)})}return e.$$set=o=>{"items"in o&&l(0,r=o.items)},e.$$.update=()=>{e.$$.dirty&18&&s&&s.scroll({left:i*150,behavior:"smooth"})},[r,s,_,d,i,b,v,u,g,a,H,c]}class $1 extends K{constructor(t){super(),W(this,t,A1,V1,J,{items:0})}}var j=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(j||{});const H1=e=>{switch(e){case B.GitHub:return"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z";case B.Linkedin:return"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z";case B.StackOverflow:return"m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z";case B.Facebook:return"M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z";case B.Email:return"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z";case B.Twitter:return"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z";case B.Youtube:return"M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"}},c1=e=>e===j.Youtube?"0 0 461.001 461.001":e===j.Facebook?"0 0 408.788 408.788":[j.GitHub,j.Search,j.Code].includes(e)?"0 0 16 16":"0 0 24 24";function E1(e){let t,l,r;return{c(){t=X("svg"),l=X("path"),this.h()},l(s){t=I(s,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var n=L(t);l=I(n,"path",{d:!0}),L(l).forEach(p),n.forEach(p),this.h()},h(){m(l,"d",e[2]),m(t,"class","inline-block"),m(t,"viewBox",r=c1(e[2])),m(t,"fill",e[1]),m(t,"height",e[0]),m(t,"width",e[0])},m(s,n){y(s,t,n),z(t,l),e[4](t)},p(s,[n]){n&4&&m(l,"d",s[2]),n&4&&r!==(r=c1(s[2]))&&m(t,"viewBox",r),n&2&&m(t,"fill",s[1]),n&1&&m(t,"height",s[0]),n&1&&m(t,"width",s[0])},i:Z,o:Z,d(s){s&&p(t),e[4](null)}}}function y1(e,t,l){let r,{size:s="30px"}=t,{color:n="var(--main-text)"}=t,{icon:i}=t;function f(h){m1[h?"unshift":"push"](()=>{r=h,l(3,r)})}return e.$$set=h=>{"size"in h&&l(0,s=h.size),"color"in h&&l(1,n=h.color),"icon"in h&&l(2,i=h.icon)},[s,n,i,r,f]}class T1 extends K{constructor(t){super(),W(this,t,y1,E1,J,{size:0,color:1,icon:2})}}function h1(e,t,l){const r=e.slice();return r[1]=t[l],r}function S1(e){let t;return{c(){t=G(r1)},l(l){t=N(l,r1)},m(l,r){y(l,t,r)},p:Z,d(l){l&&p(t)}}}function B1(e){let t,l;return{c(){t=G(a1),l=G(",")},l(r){t=N(r,a1),l=N(r,",")},m(r,s){y(r,t,s),y(r,l,s)},p:Z,d(r){r&&(p(t),p(l))}}}function u1(e){let t,l,r,s;return l=new T1({props:{icon:H1(e[1].platform),color:"var(--accent-text)",size:"20px"}}),{c(){t=w("a"),D(l.$$.fragment),r=A(),this.h()},l(n){t=V(n,"A",{class:!0,href:!0,target:!0,rel:!0});var i=L(t);U(l.$$.fragment,i),r=$(i),i.forEach(p),this.h()},h(){m(t,"class","decoration-none"),m(t,"href",`${e[0](e[1].link)?"mailto:":""}${e[1].link}`),m(t,"target","_blank"),m(t,"rel","noreferrer")},m(n,i){y(n,t,i),O(l,t,null),z(t,r),s=!0},p:Z,i(n){s||(E(l.$$.fragment,n),s=!0)},o(n){S(l.$$.fragment,n),s=!1},d(n){n&&p(t),R(l)}}}function P1(e){let t,l,r,s,n,i,f,h,M,_,d,b,v,u;document.title=C1(L1,M1),s=new l1({props:{classes:"md:text-left",$$slots:{default:[S1]},$$scope:{ctx:e}}}),i=new l1({props:{classes:"md:text-left",$$slots:{default:[B1]},$$scope:{ctx:e}}});let g=F(s1),a=[];for(let c=0;c<g.length;c+=1)a[c]=u1(h1(e,g,c));const H=c=>S(a[c],1,1,()=>{a[c]=null});return v=new $1({props:{items:b1??k1}}),{c(){t=A(),l=w("div"),r=w("div"),D(s.$$.fragment),n=A(),D(i.$$.fragment),f=A(),h=w("p"),M=G(n1),_=A(),d=w("div");for(let c=0;c<a.length;c+=1)a[c].c();b=A(),D(v.$$.fragment),this.h()},l(c){g1("svelte-1tippc1",document.head).forEach(p),t=$(c),l=V(c,"DIV",{class:!0});var k=L(l);r=V(k,"DIV",{class:!0});var x=L(r);U(s.$$.fragment,x),n=$(x),U(i.$$.fragment,x),f=$(x),h=V(x,"P",{class:!0});var C=L(h);M=N(C,n1),C.forEach(p),_=$(x),d=V(x,"DIV",{class:!0});var q=L(d);for(let Y=0;Y<a.length;Y+=1)a[Y].l(q);q.forEach(p),x.forEach(p),b=$(k),U(v.$$.fragment,k),k.forEach(p),this.h()},h(){m(h,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),m(d,"class","row justify-center md:justify-start p-y-15px p-x-0px gap-2"),m(r,"class","md:flex-1 gap-10px"),m(l,"class","col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px")},m(c,o){y(c,t,o),y(c,l,o),z(l,r),O(s,r,null),z(r,n),O(i,r,null),z(r,f),z(r,h),z(h,M),z(r,_),z(r,d);for(let k=0;k<a.length;k+=1)a[k]&&a[k].m(d,null);z(l,b),O(v,l,null),u=!0},p(c,[o]){const k={};o&16&&(k.$$scope={dirty:o,ctx:c}),s.$set(k);const x={};if(o&16&&(x.$$scope={dirty:o,ctx:c}),i.$set(x),o&1){g=F(s1);let C;for(C=0;C<g.length;C+=1){const q=h1(c,g,C);a[C]?(a[C].p(q,o),E(a[C],1)):(a[C]=u1(q),a[C].c(),E(a[C],1),a[C].m(d,null))}for(_1(),C=g.length;C<a.length;C+=1)H(C);z1()}},i(c){if(!u){E(s.$$.fragment,c),E(i.$$.fragment,c);for(let o=0;o<g.length;o+=1)E(a[o]);E(v.$$.fragment,c),u=!0}},o(c){S(s.$$.fragment,c),S(i.$$.fragment,c),a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)S(a[o]);S(v.$$.fragment,c),u=!1},d(c){c&&(p(t),p(l)),R(s),R(i),f1(a,c),R(v)}}}function j1(e){return[l=>{const r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!w1(l)&&r.test(l)}]}class F1 extends K{constructor(t){super(),W(this,t,j1,P1,J,{})}}export{F1 as component};
