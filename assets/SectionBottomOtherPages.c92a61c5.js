import{o,c as n,n as m,p as f,q as p,s as g,w as h,l as t,a as _,u as d,t as y,v as k,x as b,F as i,k as r,y as B,R as w,z as j}from"./index.63431331.js";const $={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"},v={__name:"SectionTitle",props:{custom:Boolean,first:Boolean,last:Boolean},setup(s){return(e,c)=>(o(),n("section",{class:f(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":s.first,"-mt-6":s.last,"-my-6":!s.first&&!s.last}])},[s.custom?m(e.$slots,"default",{key:0}):(o(),n("h1",$,[m(e.$slots,"default")]))],2))}},C={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 dark:text-gray-400 mb-12"},N=t("span",{class:"md:mr-3"},"Please star this project on",-1),R={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-600",target:"_blank"},S=t("span",null,"GitHub",-1),V={class:"text-2xl text-gray-500 dark:text-gray-400 mb-12"},z=r(" Check out other components and layouts at"),G=t("br",null,null,-1),P=r(" , "),F=t("br",null,null,-1),L=r(" screen samples "),T=t("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[r(" Get more with "),t("a",{href:"https://tailwind-vue.justboil.me/",target:"_blank",class:"text-blue-600"},"Premium version")],-1),D={__name:"SectionBottomOtherPages",setup(s){const e=p().getRoutes(),c=[];for(const l in e){const u=e[l].path,a=e[l].meta&&e[l].meta.title?e[l].meta.title:null;a&&c.push({path:u,title:a})}return(l,u)=>(o(),g(v,{last:""},{default:h(()=>[t("h1",C,[N,t("a",R,[_(k,{path:d(y),size:"36",class:"mr-1"},null,8,["path"]),S])]),t("h1",V,[z,G,(o(),n(i,null,b(c,(a,x)=>(o(),n(i,{key:a.path},[_(d(w),{to:a.path,class:"text-blue-600"},{default:h(()=>[r(B(a.title),1)]),_:2},1032,["to"]),x+1<c.length?(o(),n(i,{key:0},[P],64)):j("",!0)],64))),64)),F,L]),T]),_:1}))}};export{D as _,v as a};
