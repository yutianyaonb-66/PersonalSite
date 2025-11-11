import{Z as I,c as S,_ as b,p as L,a as $,b as P}from"./project3-1b908814.js";import{Z}from"./ZyPageHeader-904d5959.js";import{Z as z}from"./ZySectionHeader-8c7548df.js";import{_ as B,r as h,g as E,w as C,o as q,a as _,c as p,b as r,k as i,F as w,e as V,B as X,t as Y,z as F,A as H,p as N,d as Q}from"./index-af83dd8e.js";import"./github-9d961d8c.js";import"./server-f901eaa1.js";const R=l=>(N("data-v-a171f2c8"),l=l(),Q(),l),T={class:"zy-portfolio"},W={class:"project-list"},A=["title","onClick","onMouseenter","onMousemove","onMouseleave"],U=["data-src"],G={class:"project-item-card__glow"},J={class:"glow-content"},K=R(()=>r("div",{class:"work-info-icon"},[r("i",{class:"iconfont icon-a-thecode"})],-1)),O={class:"work-info-title"},tt={__name:"index",setup(l){const u=[L,$,P],d=h([]),f=h(null),o=E({show:{work:!1},portfoliosQuery:{params:{status:!0},pagination:{current:1,pageSize:15}},portfoliosData:[],viewData:{}}),v=()=>{o.show.work=!1},y=e=>{o.viewData=e,o.show.work=!0},m=(e,a)=>{let t=a.getBoundingClientRect();const s=e.clientX,c=e.clientY,M=s-t.x,j=c-t.y,n={x:M-t.width/2,y:j-t.height/2},x=Math.sqrt(n.x**2+n.y**2);a.style.transform=`
            scale(1.02)
            rotate3d(
                ${n.y/100},
                ${n.x/100},
                0,
                ${Math.log(x)*.5}deg
            )
        `;const D=a.querySelector(".project-item-card__glow");D.style.backgroundImage=`
            radial-gradient(
                circle at
                ${n.x*2+t.width/2}px
                ${n.y*2+t.height/2}px,
                #ffffff55,
                #0000000f
            )
        `},g=(e,a)=>{m(e,d.value[a])},k=(e,a)=>{document.removeEventListener("mousemove",m);let t=d.value[a];t.style.transform="";const s=t.querySelector(".project-item-card__glow");s.style.backgroundImage=""};return C(()=>o.portfoliosData,()=>{F(()=>{d.value=[...f.value],H()})}),(()=>{S(o.portfoliosQuery).then(e=>{o.portfoliosData=e.data.result||[]})})(),q(()=>{}),(e,a)=>(_(),p(w,null,[r("section",T,[i(Z,{current:"Portfolio"}),i(z,{title:"Projects",class:"c-mb-40 c-mt-40",style:{padding:"0 1.8rem"}}),r("div",W,[(_(!0),p(w,null,V(o.portfoliosData,(t,s)=>(_(),p("div",{class:"project-item-card",title:t.abstract,key:s,onClick:c=>y(t),ref_for:!0,ref_key:"projectItem",ref:f,onMouseenter:c=>g(c,s),onMousemove:c=>g(c,s),onMouseleave:c=>k(c,s)},[r("img",{class:"card-img lazy-image","data-src":u[s%u.length],alt:"pic"},null,8,U),r("div",G,[r("div",J,[K,r("div",O,Y(t.title),1)])])],40,A))),128))])]),i(I,{minWidth:350,show:o.show.work,title:"Project Detail",key:"ViewUserInfo",onClose:v},{default:X(()=>[i(b,{viewData:o.viewData},null,8,["viewData"])]),_:1},8,["show"])],64))}},lt=B(tt,[["__scopeId","data-v-a171f2c8"]]);export{lt as default};
