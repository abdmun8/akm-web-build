(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[6],{639:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t(649),o=t.n(r),l=t(111);function c(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=a.endpoint,c=a.method,i=a.data,s="".concat(l.a.baseUrl).concat(r),u=Object(n.a)(Object(n.a)({},e),i),m=localStorage.getItem("token"),d=Object(n.a)(Object(n.a)({},t),{},{Authorization:"Bearer ".concat(m)}),p={method:c,url:s,headers:d,timeout:1e3*l.a.timeout};return"GET"===c.toUpperCase()?p.params=u:p.data=u,l.d&&console.log("[request start]\n\n-url: ",s,"\n\n-method: ",c,"\n\n-params: ",u,"\n\n-config: ",p),new Promise((function(e,a){o()(p).then((function(a){l.d&&console.log("[response received]\n\n-url: ",s,"\n\n-method: ",c,"\n\n-params: ",u,"\n\n-response: ",a);var t=a.data;e(t)})).catch((function(e){console.log("[response error]\n\n-url: ",s,"\n\n-method: ",c,"\n\n-params: ",u,"\n\n-response: ",e),a({status:e.response&&e.response.status?e.response.status:999,code:"x999",message:e.message,error:e})}))}))}},640:function(e,a,t){"use strict";a.a={postCreateSoal:{endpoint:"/api/exam/question/save-all",method:"POST",data:{}},getListSoal:{endpoint:"/api/exam/question",method:"GET",data:{}},getListUjian:{endpoint:"/api/exam",method:"GET",data:{}},getSoalById:{endpoint:"/api/exam/question/",method:"GET",data:{}},gerListArticle:{endpoint:"/api/exam/question/article",method:"GET",data:{}},getUsers:{endpoint:"/api/user",method:"GET",data:{}},getEvents:{endpoint:"/api/exam/event",method:"GET",data:{}},createEvent:{endpoint:"/api/exam/event",method:"POST",data:{}},createSchool:{endpoint:"/api/school",method:"POST",data:{}},getSchool:{endpoint:"/api/school",method:"GET",data:{}},importUser:{endpoint:"/api/user/import",method:"POST",data:{}},createUser:{endpoint:"/api/user",method:"POST",data:{}},login:{endpoint:"/api/user/login",method:"POST",data:{}},chooseExamUser:{endpoint:"/api/exam/user",method:"POST",data:{id:null}},startExamUser:{endpoint:"/api/exam/user",method:"POST",data:{status_ujian:"progress"}},generateFirsSoal:{endpoint:"/api/exam/user/question/generate",method:"POST",data:{level_soal_terakhir:null,hasil_jawaban_terakhir:null}},generateSoal:{endpoint:"/api/exam/user/question/generate",method:"POST",data:{}},jawabSoalPilgan:{endpoint:"/api/exam/user/answer",method:"POST",data:{}}}},646:function(e,a,t){e.exports=t.p+"static/media/logo-rasyiidu-black.bb6b80e8.png"},647:function(e,a,t){"use strict";var n=t(643),r=t.n(n),o=t(644),l=t(645),c=t(2),i=t.n(c),s=t(641),u=t(163),m=t(21),d=t(4);t(640),t(639);function p(){return i.a.createElement("div",{className:"bg-header"})}var h=t(646),E=t.n(h);a.a=function(e){var a=e.children,t=Object(m.g)(),n=Object(u.b)(),h=Object(c.useState)(!1),f=Object(l.a)(h,2),g=f[0],b=f[1],O=Object(u.c)((function(e){return e.user})).profile,j=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n({type:d.h,payload:null}),t.push("/login")}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("main",{className:"c-main"},i.a.createElement(s.w,{show:g,shape:"rounded"},i.a.createElement(s.z,null,i.a.createElement(s.A,null,"Info")),i.a.createElement(s.x,null,"Apakah anda yakin akan keluar ?"),i.a.createElement(s.y,null,i.a.createElement(s.d,{color:"danger",onClick:function(){return j()}},"Ya"),i.a.createElement(s.d,{color:"success",onClick:function(){return b(!1)}},"Tidak"))),i.a.createElement(p,null),i.a.createElement(s.j,{fluid:!0},i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("img",{src:E.a,alt:"logo-rasyiidu",className:"center"}),i.a.createElement("div",{className:""},i.a.createElement("strong",{className:"text-white float-right mr-1"},O.nama),i.a.createElement("br",null),i.a.createElement(s.d,{color:"light",className:"float-right font-weight-bold",shape:"pill",onClick:function(){return b(!0)}},"Logout"))),a))}},697:function(e,a,t){"use strict";t.r(a);var n=t(643),r=t.n(n),o=t(0),l=t(644),c=t(645),i=t(2),s=t.n(i),u=t(641),m=t(163),d=t(21),p=t(4),h=t(640),E=t(639),f=t(647);a.default=function(){var e=Object(d.g)(),a=Object(m.b)(),t=Object(m.c)((function(e){return e.user})).profile,n=Object(i.useState)(!1),g=Object(c.a)(n,2),b=g[0],O=g[1],j=Object(m.c)((function(e){return e.dataExam})).current,k=Object(i.useState)({token:""}),v=Object(c.a)(k,2),x=v[0],S=v[1],w=function(){return!!t.nama},T=function(){var n=Object(l.a)(r.a.mark((function n(){var l;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return O(!0),l=null,n.prev=2,n.next=5,Object(E.a)(null,Object(o.a)(Object(o.a)({},h.a.chooseExamUser),{},{data:{id:null,user_id:t.id,token:j.token}}));case 5:l=n.sent,a({type:p.m,payload:l.data}),O(!1),e.push("/exam-start"),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(2),alert(n.t0.error.response.data.message),O(!1);case 15:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(){return n.apply(this,arguments)}}();return Object(i.useEffect)((function(){console.log("reload")}),[t,j]),w()?s.a.createElement(f.a,null,s.a.createElement(u.E,{className:"mt-2"},s.a.createElement(u.i,{md:7},s.a.createElement(u.e,{className:"card-rounded shadow border-white"},s.a.createElement(u.h,{className:"d-flex direction-row justify-content-between align-items-center card-rounded border-0"},s.a.createElement("h6",null,"Selamat Datang ",t.nama," dari ",t.school_nama,", silahkan input token")),s.a.createElement(u.f,{className:"pt-0"},s.a.createElement("h4",null,"TOKEN: ",j.token)))),s.a.createElement(u.i,{md:5},s.a.createElement(u.e,{className:"card-rounded shadow border-white"},s.a.createElement(u.h,{className:"d-flex direction-row justify-content-between align-items-center card-rounded border-0"},s.a.createElement("h3",null,"Konfirmasi Data Peserta")),s.a.createElement(u.f,{className:"pt-0"},s.a.createElement(u.l,null,s.a.createElement(u.u,{htmlFor:"name"},"NIS"),s.a.createElement(u.m,{readOnly:!0,placeholder:"Input NIS",onChange:function(e){},value:t.data.user_participant.nis,required:!0})),s.a.createElement(u.l,null,s.a.createElement(u.u,{htmlFor:"name"},"Nama Peserta"),s.a.createElement(u.m,{readOnly:!0,placeholder:"Input Nama Peserta",onChange:function(e){},value:t.nama,required:!0})),s.a.createElement(u.l,null,s.a.createElement(u.u,{htmlFor:"name"},"Jenis Kelamin"),s.a.createElement(u.m,{readOnly:!0,placeholder:"Input Jenis Kelamin",onChange:function(e){},value:t.data.user_participant.jk,required:!0})),s.a.createElement(u.l,null,s.a.createElement(u.u,{htmlFor:"name"},"Input Token"),s.a.createElement(u.m,{placeholder:"Input Token",onChange:function(e){return S(Object(o.a)(Object(o.a)({},x),{},{token:e.target.value}))},value:x.nama,required:!0})),s.a.createElement(u.E,null,s.a.createElement(u.i,{xs:12},s.a.createElement(u.d,{disabled:j.token!==x.token||b,block:!0,onClick:function(){return T()},color:"primary"},"Submit")))))))):(console.log(w()),s.a.createElement(d.a,{to:"/login"}))}}}]);
//# sourceMappingURL=6.a6e2fc68.chunk.js.map