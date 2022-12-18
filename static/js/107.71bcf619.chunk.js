"use strict";(self.webpackChunkhealthy=self.webpackChunkhealthy||[]).push([[107],{539:function(e,n,i){var r=i(934),o=i(791),t=i(184),l=r.Z.div({margin:"28px auto 64px",padding:"14px 4px",width:"fit-content",minWidth:296,background:"linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",fontSize:18,lineHeight:"26px",textAlign:"center",color:"#fff",cursor:"pointer"}),d=function(e){var n=e.onClick,i=e.children;return(0,t.jsx)(l,{onClick:n,children:i})};n.Z=o.memo(d)},107:function(e,n,i){i.r(n),i.d(n,{default:function(){return N}});var r=i(934),o=i(152),t=i(791),l=i(77),d=i(184);o.kL.register(o.uw,o.f$,o.od,o.jn,o.Dx);var a={layout:{padding:{top:54,right:48,bottom:48,left:54}},responsive:!0,maintainAspectRatio:!1,scales:{y:{ticks:{padding:32,display:!1},title:{display:!1}},x:{ticks:{color:"#fff"},grid:{color:"#777777"}}}},s=["6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708","1\u6708","2\u6708","3\u6708","4\u6708","5\u6708"],c={labels:s,datasets:[{label:"Dataset 1",data:s.map((function(){return Math.floor(100*Math.random())})),borderColor:"#FFCC21",backgroundColor:"#FFCC21"},{label:"Dataset 2",data:s.map((function(){return Math.floor(100*Math.random())})),borderColor:"#8FE9D0",backgroundColor:"#8FE9D0"}]},x=r.Z.div({backgroundColor:"#2E2E2E",width:"100%",height:304,position:"relative"}),p=r.Z.div({position:"absolute",padding:"16px 24px",left:0,top:0,display:"flex",columnGap:24,alignItems:"center",color:"#fff",textTransform:"uppercase","span:first-of-type":{font:'400 15px/18px "Inter"'},"span:last-child":{font:'400 25px/27px "Inter"'}}),f=r.Z.div({position:"absolute",padding:"16px 24px",left:0,bottom:0,display:"flex",columnGap:16}),u=r.Z.div((function(e){return{padding:"2px 22px",borderRadius:11,backgroundColor:e.active?"#FFCC21":"#fff",color:e.active?"#fff":"#FFCC21",cursor:"pointer",transition:"all 0.3s","&:hover":{backgroundColor:"#FFCC21",color:"#fff"}}})),h=function(){return(0,d.jsxs)(x,{id:"myRecord",children:[(0,d.jsx)(l.x1,{options:a,data:c}),(0,d.jsxs)(p,{children:[(0,d.jsxs)("span",{children:["body",(0,d.jsx)("br",{}),"record"]}),(0,d.jsx)("span",{children:"2021.05.21"})]}),(0,d.jsxs)(f,{children:[(0,d.jsx)(u,{children:"\u65e5"}),(0,d.jsx)(u,{children:"\u9031"}),(0,d.jsx)(u,{children:"\u6708"}),(0,d.jsx)(u,{active:!0,children:"\u5e74"})]})]})},m=t.memo(h),b=r.Z.div({padding:"56px 0",display:"flex",columnGap:48}),g=r.Z.a({flex:1,backgroundColor:"#FFCC21",padding:24,boxSizing:"border-box",cursor:"pointer",transition:"background 0.3s","&:hover":{backgroundColor:"#FF963C"}}),j=r.Z.div((function(e){return{display:"flex",flexDirection:"column",rowGap:10,aspectRatio:"1/1",alignItems:"center",justifyContent:"center",position:"relative","&:before":{content:'""',position:"absolute",width:"100%",height:"100%",backgroundColor:"#000",mixBlendMode:"luminosity"},"&:after":{content:'""',background:"url(./images/MyRecommend-".concat(e.index,".jpg) ").concat(3===e.index?"center":"left"," center no-repeat"),position:"absolute",width:"100%",height:"100%",mixBlendMode:"luminosity",opacity:.6,backgroundSize:"cover"}}})),C=r.Z.span({textTransform:"uppercase",color:"#FFCC21",font:'400 25px/30px "Inter"',zIndex:3}),y=r.Z.span({backgroundColor:"#FF963C",color:"#fff",fontSize:14,lineHeight:"20px",zIndex:3,padding:"0 16px"}),v=function(){var e=(0,t.useCallback)((function(e){return function(){var n;null===(n=document.getElementById(e))||void 0===n||n.scrollIntoView({behavior:"smooth"})}}),[]);return(0,d.jsxs)(b,{children:[(0,d.jsx)(g,{onClick:e("myRecord"),children:(0,d.jsxs)(j,{index:1,children:[(0,d.jsx)(C,{children:"body record"}),(0,d.jsx)(y,{children:"\u81ea\u5206\u306e\u30ab\u30e9\u30c0\u306e\u8a18\u9332"})]})}),(0,d.jsx)(g,{onClick:e("myExercise"),children:(0,d.jsxs)(j,{index:2,children:[(0,d.jsx)(C,{children:"my exercise"}),(0,d.jsx)(y,{children:"\u81ea\u5206\u306e\u904b\u52d5\u306e\u8a18\u9332"})]})}),(0,d.jsx)(g,{onClick:e("myDiary"),children:(0,d.jsxs)(j,{index:3,children:[(0,d.jsx)(C,{children:"my diary"}),(0,d.jsx)(y,{children:"\u81ea\u5206\u306e\u65e5\u8a18"})]})})]})},k=t.memo(v),F=i(439),Z=i(539),w=r.Z.div({marginTop:56,marginBottom:64}),I=r.Z.div({font:'400 22px/27px "Inter"',textTransform:"uppercase"}),E=r.Z.ul({display:"flex",flexWrap:"wrap",columnGap:12,rowGap:12}),z=r.Z.li({flex:"calc(25% - 9px)",padding:"16px 16px 28px",border:"solid 1px #707070",aspectRatio:"1/1",boxSizing:"border-box"}),R=r.Z.div({font:'400 18px/22px "Inter"'}),S=r.Z.div({fontSize:12,lineHeight:"17px",marginTop:8}),D=new Array(40).fill({date:"2021.05.21",time:"23:25",content:"\u79c1\u306e\u65e5\u8a18\u306e\u8a18\u9332\u304c\u4e00\u90e8\u8868\u793a\u3055\u308c\u307e\u3059\u3002\n    \u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u2026"}),M=function(){var e=(0,t.useState)(8),n=(0,F.Z)(e,2),i=n[0],r=n[1],o=(0,t.useState)(!1),l=(0,F.Z)(o,2),a=l[0],s=l[1];(0,t.useEffect)((function(){D.length>8&&s(!0)}),[D]);var c=(0,t.useCallback)((function(){var e=i+8;e>=D.length&&s(!1),r(Math.min(D.length,e))}),[D,i]);return(0,d.jsxs)(w,{id:"myDiary",children:[(0,d.jsx)(I,{children:"my diary"}),(0,d.jsx)(E,{children:D.slice(0,i).map((function(e,n){return(0,d.jsxs)(z,{children:[(0,d.jsx)(R,{children:e.date}),(0,d.jsx)(R,{children:e.time}),(0,d.jsx)(S,{children:e.content})]},n)}))}),a&&(0,d.jsx)(Z.Z,{onClick:c,children:"\u81ea\u5206\u306e\u65e5\u8a18\u3092\u3082\u3063\u3068\u898b\u308b"})]})},G=t.memo(M),T=r.Z.div({marginTop:56,backgroundColor:"#2E2E2E",width:"100%",height:264,padding:"16px 24px",boxSizing:"border-box",overflow:"hidden",display:"flex",flexDirection:"column"}),B=r.Z.div({display:"flex",columnGap:24,alignItems:"center",color:"#fff",textTransform:"uppercase","span:first-of-type":{font:'400 15px/18px "Inter"'},"span:last-child":{font:'400 25px/27px "Inter"'}}),A=r.Z.ul({display:"flex",flexWrap:"wrap",overflow:"auto","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-track":{background:"#777777",borderRadius:3},"&::-webkit-scrollbar-thumb":{background:"#FFCC21",borderRadius:3}}),W=r.Z.li({flex:"50%",padding:"0 32px 0 16px",boxSizing:"border-box",color:"#fff",position:"relative","&:before":{content:'""',width:5,height:5,borderRadius:"50%",backgroundColor:"#fff",position:"absolute",top:16,left:0}}),H=r.Z.div({display:"flex",justifyContent:"space-between",position:"relative",padding:"8px 0 2px",borderBottom:"solid 1px #777777"}),L=r.Z.span({color:"#FFCC21",font:'400 15px/18px "Inter"',display:"block"}),V=r.Z.span({color:"#FFCC21",font:'400 18px/22px "Inter"'}),$=new Array(50).fill({title:"\u5bb6\u4e8b\u5168\u822c\uff08\u7acb\u4f4d\u30fb\u8efd\u3044\uff09",kcal:"26kcal",min:"10 min"}),q=function(){return(0,d.jsxs)(T,{id:"myExercise",children:[(0,d.jsxs)(B,{children:[(0,d.jsxs)("span",{children:["body",(0,d.jsx)("br",{}),"exercise"]}),(0,d.jsx)("span",{children:"2021.05.21"})]}),(0,d.jsx)(A,{children:$.map((function(e,n){return(0,d.jsx)(W,{children:(0,d.jsxs)(H,{children:[(0,d.jsxs)("div",{children:[e.title,(0,d.jsx)(L,{children:e.kcal})]}),(0,d.jsx)("div",{children:(0,d.jsx)(V,{children:e.min})})]})},n)}))})]})},J=t.memo(q),K=r.Z.div({width:"100%",maxWidth:960,padding:"0 16px",margin:"auto"}),N=function(){return(0,d.jsxs)(K,{children:[(0,d.jsx)(k,{}),(0,d.jsx)(m,{}),(0,d.jsx)(J,{}),(0,d.jsx)(G,{})]})}}}]);
//# sourceMappingURL=107.71bcf619.chunk.js.map