import{s as j,p as q,C as F,a as v,f as T,c as C,g as y,h as D,d as p,j as E,i as g,v as k,R as P,D as R,E as z,F as A,l as B,m as G,n as H}from"./scheduler.98dcdc08.js";import{S as J,i as K,f as L,b as w,d as I,m as M,a as d,t as $,e as S}from"./index.bc2cb9f6.js";import{M as N}from"./app.2ed00fd9.js";import{T as O}from"./TabTitle.f78fefea.js";function Q(l){let e;return{c(){e=B(l[0])},l(s){e=G(s,l[0])},m(s,r){g(s,e,r)},p(s,r){r&1&&H(e,s[0])},d(s){s&&p(e)}}}function U(l){let e,s,r,f,i,_,n,m;function V(t){l[2](t)}let b={};l[0]!==void 0&&(b.title=l[0]),e=new O({props:b}),q.push(()=>L(e,"title",V)),i=new N({props:{$$slots:{default:[Q]},$$scope:{ctx:l}}});const u=l[1].default,o=F(u,l,l[3],null);return{c(){w(e.$$.fragment),r=v(),f=T("div"),w(i.$$.fragment),_=v(),n=T("div"),o&&o.c(),this.h()},l(t){I(e.$$.fragment,t),r=C(t),f=y(t,"DIV",{class:!0});var a=D(f);I(i.$$.fragment,a),_=C(a),n=y(a,"DIV",{class:!0});var c=D(n);o&&o.l(c),c.forEach(p),a.forEach(p),this.h()},h(){E(n,"class","col gap-5 flex-1"),E(f,"class","flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,a){M(e,t,a),g(t,r,a),g(t,f,a),M(i,f,null),k(f,_),k(f,n),o&&o.m(n,null),m=!0},p(t,[a]){const c={};!s&&a&1&&(s=!0,c.title=t[0],P(()=>s=!1)),e.$set(c);const h={};a&9&&(h.$$scope={dirty:a,ctx:t}),i.$set(h),o&&o.p&&(!m||a&8)&&R(o,u,t,t[3],m?A(u,t[3],a,null):z(t[3]),null)},i(t){m||(d(e.$$.fragment,t),d(i.$$.fragment,t),d(o,t),m=!0)},o(t){$(e.$$.fragment,t),$(i.$$.fragment,t),$(o,t),m=!1},d(t){t&&(p(r),p(f)),S(e,t),S(i),o&&o.d(t)}}}function W(l,e,s){let{$$slots:r={},$$scope:f}=e,{title:i="Title"}=e;function _(n){i=n,s(0,i)}return l.$$set=n=>{"title"in n&&s(0,i=n.title),"$$scope"in n&&s(3,f=n.$$scope)},[i,r,_,f]}class tt extends J{constructor(e){super(),K(this,e,W,U,j,{title:0})}}export{tt as C};
