(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[7],{639:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),r=t(649),o=t.n(r),s=t(111);function i(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=a.endpoint,i=a.method,c=a.data,l="".concat(s.a.baseUrl).concat(r),u=Object(n.a)(Object(n.a)({},e),c),d=localStorage.getItem("token"),m=Object(n.a)(Object(n.a)({},t),{},{Authorization:"Bearer ".concat(d)}),p={method:i,url:l,headers:m,timeout:1e3*s.a.timeout};return"GET"===i.toUpperCase()?p.params=u:p.data=u,s.d&&console.log("[request start]\n\n-url: ",l,"\n\n-method: ",i,"\n\n-params: ",u,"\n\n-config: ",p),new Promise((function(e,a){o()(p).then((function(a){s.d&&console.log("[response received]\n\n-url: ",l,"\n\n-method: ",i,"\n\n-params: ",u,"\n\n-response: ",a);var t=a.data;e(t)})).catch((function(e){console.log("[response error]\n\n-url: ",l,"\n\n-method: ",i,"\n\n-params: ",u,"\n\n-response: ",e),a({status:e.response&&e.response.status?e.response.status:999,code:"x999",message:e.message,error:e})}))}))}},640:function(e,a,t){"use strict";a.a={postCreateSoal:{endpoint:"/api/exam/question/save-all",method:"POST",data:{}},getListSoal:{endpoint:"/api/exam/question",method:"GET",data:{}},getListUjian:{endpoint:"/api/exam",method:"GET",data:{}},getSoalById:{endpoint:"/api/exam/question/",method:"GET",data:{}},gerListArticle:{endpoint:"/api/exam/question/article",method:"GET",data:{}},getUsers:{endpoint:"/api/user",method:"GET",data:{}},getEvents:{endpoint:"/api/exam/event",method:"GET",data:{}},createEvent:{endpoint:"/api/exam/event",method:"POST",data:{}},createSchool:{endpoint:"/api/school",method:"POST",data:{}},getSchool:{endpoint:"/api/school",method:"GET",data:{}},importUser:{endpoint:"/api/user/import",method:"POST",data:{}},createUser:{endpoint:"/api/user",method:"POST",data:{}},login:{endpoint:"/api/user/login",method:"POST",data:{}},chooseExamUser:{endpoint:"/api/exam/user",method:"POST",data:{id:null}},startExamUser:{endpoint:"/api/exam/user",method:"POST",data:{status_ujian:"progress"}},generateFirsSoal:{endpoint:"/api/exam/user/question/generate",method:"POST",data:{level_soal_terakhir:null,hasil_jawaban_terakhir:null}},generateSoal:{endpoint:"/api/exam/user/question/generate",method:"POST",data:{}},jawabSoalPilgan:{endpoint:"/api/exam/user/answer",method:"POST",data:{}}}},646:function(e,a,t){e.exports=t.p+"static/media/logo-rasyiidu-black.bb6b80e8.png"},647:function(e,a,t){"use strict";var n=t(643),r=t.n(n),o=t(644),s=t(645),i=t(2),c=t.n(i),l=t(641),u=t(163),d=t(21),m=t(4);t(640),t(639);function p(){return c.a.createElement("div",{className:"bg-header"})}var h=t(646),f=t.n(h);a.a=function(e){var a=e.children,t=Object(d.g)(),n=Object(u.b)(),h=Object(i.useState)(!1),g=Object(s.a)(h,2),E=g[0],b=g[1],x=Object(u.c)((function(e){return e.user})).profile,O=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n({type:m.i,payload:null}),t.push("/login")}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("main",{className:"c-main"},c.a.createElement(l.w,{show:E,shape:"rounded"},c.a.createElement(l.z,null,c.a.createElement(l.A,null,"Info")),c.a.createElement(l.x,null,"Apakah anda yakin akan keluar ?"),c.a.createElement(l.y,null,c.a.createElement(l.d,{color:"danger",onClick:function(){return O()}},"Ya"),c.a.createElement(l.d,{color:"success",onClick:function(){return b(!1)}},"Tidak"))),c.a.createElement(p,null),c.a.createElement(l.j,{fluid:!0},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("img",{src:f.a,alt:"logo-rasyiidu",className:"center"}),c.a.createElement("div",{className:""},c.a.createElement("strong",{className:"text-white float-right mr-1"},x.nama),c.a.createElement("br",null),c.a.createElement(l.d,{color:"light",className:"float-right font-weight-bold",shape:"pill",onClick:function(){return b(!0)}},"Logout"))),a))}},699:function(e,a,t){"use strict";t.r(a);var n=t(643),r=t.n(n),o=t(0),s=t(644),i=t(2),c=t.n(i),l=t(163),u=t(21),d=t(641),m=t(653),p=t.n(m),h=t(4),f=t(640),g=t(639),E=t(647);a.default=function(){var e=Object(l.c)((function(e){return e.dataExam})),a=Object(l.c)((function(e){return e.user})).profile,t=Object(l.b)(),n=Object(u.g)(),i=function(){var a=Object(s.a)(r.a.mark((function a(){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return null,a.prev=1,s=Object(o.a)(Object(o.a)({},f.a.startExamUser),{},{data:{id:e.currentUser.id,waktu_selesai:p()().format("YYYY-MM-DD HH:mm"),status_ujian:"selesai"}}),a.next=5,Object(g.a)(null,s);case 5:a.sent,t({type:h.d,payload:null}),t({type:h.c,payload:null}),t({type:h.i,payload:null}),localStorage.clear(),n.push("/login"),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),alert(a.t0.error.response.data.messages);case 16:case"end":return a.stop()}}),a,null,[[1,13]])})));return function(){return a.apply(this,arguments)}}();return a.nama?c.a.createElement(E.a,null,c.a.createElement(d.E,{className:"d-flex justify-content-center"},c.a.createElement(d.i,{md:6},c.a.createElement(d.e,{className:"card-rounded shadow border-white d-flex flex-wrap mt-2"},c.a.createElement(d.h,{className:"d-flex direction-row justify-content-between align-items-center card-rounded border-0"},c.a.createElement("h3",null,"Konfirmasi Tes")),c.a.createElement(d.f,{className:"pt-0"},c.a.createElement("div",{className:"mb-4"},"Terimakasih telah berpartisipasi dalam tes ini. Silahkan tekan tombol"," ",c.a.createElement("span",{className:"text-white px-1 bg-danger"},"SELESAI TES")," ","untuk mengakhiri tes."),c.a.createElement("div",{className:"d-flex direction-row justify-content-center"},c.a.createElement(d.d,{block:!0,color:"danger",className:"mx-1",size:"lg",shape:"pill",onClick:function(){return i()}},"SELESAI TES"))))))):c.a.createElement(u.a,{to:"/login"})}}}]);
//# sourceMappingURL=7.ce5e34c7.chunk.js.map