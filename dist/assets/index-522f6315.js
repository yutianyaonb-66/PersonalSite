import{Z as I,p as S,_ as j}from"./api.portfolios-17e73a9a.js";import{Z as L}from"./ZyPageHeader-9dfd26a5.js";import{Z as $}from"./ZySectionHeader-37bea149.js";import{_ as b,r as h,g as Z,w as z,o as B,a as _,c as u,b as c,k as l,F as g,e as E,B as C,t as P,z as q,A as V,p as X,d as Y}from"./index-a6176183.js";import"./github-ef0c8e31.js";import"./server-42f87e7c.js";const F=i=>(X("data-v-323e5300"),i=i(),Y(),i),H={class:"zy-portfolio"},N={class:"project-list"},Q=["title","onClick","onMouseenter","onMousemove","onMouseleave"],R=["data-src"],T={class:"project-item-card__glow"},W={class:"glow-content"},A=F(()=>c("div",{class:"work-info-icon"},[c("i",{class:"iconfont icon-a-thecode"})],-1)),U={class:"work-info-title"},G={__name:"index",setup(i){const d=h([]),p=h(null),o=Z({show:{work:!1},portfoliosQuery:{params:{status:!0},pagination:{current:1,pageSize:15}},portfoliosData:[],viewData:{}}),v=()=>{o.show.work=!1},w=t=>{o.viewData=t,o.show.work=!0},f=(t,s)=>{let e=s.getBoundingClientRect();const a=t.clientX,r=t.clientY,k=a-e.x,x=r-e.y,n={x:k-e.width/2,y:x-e.height/2},M=Math.sqrt(n.x**2+n.y**2);s.style.transform=`
            scale(1.02)
            rotate3d(
                ${n.y/100},
                ${n.x/100},
                0,
                ${Math.log(M)*.5}deg
            )
        `;const D=s.querySelector(".project-item-card__glow");D.style.backgroundImage=`
            radial-gradient(
                circle at
                ${n.x*2+e.width/2}px
                ${n.y*2+e.height/2}px,
                #ffffff55,
                #0000000f
            )
        `},m=(t,s)=>{f(t,d.value[s])},y=(t,s)=>{document.removeEventListener("mousemove",f);let e=d.value[s];e.style.transform="";const a=e.querySelector(".project-item-card__glow");a.style.backgroundImage=""};return z(()=>o.portfoliosData,()=>{q(()=>{d.value=[...p.value],V()})}),(()=>{S(o.portfoliosQuery).then(t=>{o.portfoliosData=t.data.result||[]})})(),B(()=>{}),(t,s)=>(_(),u(g,null,[c("section",H,[l(L,{current:"Portfolio"}),l($,{title:"作品列表",class:"c-mb-40 c-mt-40",style:{padding:"0 1.8rem"}}),c("div",N,[(_(!0),u(g,null,E(o.portfoliosData,(e,a)=>(_(),u("div",{class:"project-item-card",title:e.abstract,key:a,onClick:r=>w(e),ref_for:!0,ref_key:"projectItem",ref:p,onMouseenter:r=>m(r,a),onMousemove:r=>m(r,a),onMouseleave:r=>y(r,a)},[c("img",{class:"card-img lazy-image","data-src":e.cover,alt:"pic"},null,8,R),c("div",T,[c("div",W,[A,c("div",U,P(e.title),1)])])],40,Q))),128))])]),l(I,{minWidth:350,show:o.show.work,title:"项目详情",key:"ViewUserInfo",onClose:v},{default:C(()=>[l(j,{viewData:o.viewData},null,8,["viewData"])]),_:1},8,["show"])],64))}},ae=b(G,[["__scopeId","data-v-323e5300"]]);export{ae as default};
