(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{639:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t(649),o=t.n(r),l=t(111);function c(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=a.endpoint,c=a.method,s=a.data,i="".concat(l.a.baseUrl).concat(r),u=Object(n.a)(Object(n.a)({},e),s),m=localStorage.getItem("token"),d=Object(n.a)(Object(n.a)({},t),{},{Authorization:"Bearer ".concat(m)}),p={method:c,url:i,headers:d,timeout:1e3*l.a.timeout};return"GET"===c.toUpperCase()?p.params=u:p.data=u,l.d&&console.log("[request start]\n\n-url: ",i,"\n\n-method: ",c,"\n\n-params: ",u,"\n\n-config: ",p),new Promise((function(e,a){o()(p).then((function(a){l.d&&console.log("[response received]\n\n-url: ",i,"\n\n-method: ",c,"\n\n-params: ",u,"\n\n-response: ",a);var t=a.data;e(t)})).catch((function(e){console.log("[response error]\n\n-url: ",i,"\n\n-method: ",c,"\n\n-params: ",u,"\n\n-response: ",e),a({status:e.response&&e.response.status?e.response.status:999,code:"x999",message:e.message,error:e})}))}))}},640:function(e,a,t){"use strict";a.a={postCreateSoal:{endpoint:"/api/exam/question/save-all",method:"POST",data:{}},getListSoal:{endpoint:"/api/exam/question",method:"GET",data:{}},getListUjian:{endpoint:"/api/exam",method:"GET",data:{}},getSoalById:{endpoint:"/api/exam/question/",method:"GET",data:{}},gerListArticle:{endpoint:"/api/exam/question/article",method:"GET",data:{}},getUsers:{endpoint:"/api/user",method:"GET",data:{}},getEvents:{endpoint:"/api/exam/event",method:"GET",data:{}},createEvent:{endpoint:"/api/exam/event",method:"POST",data:{}},createSchool:{endpoint:"/api/school",method:"POST",data:{}},getSchool:{endpoint:"/api/school",method:"GET",data:{}},importUser:{endpoint:"/api/user/import",method:"POST",data:{}},createUser:{endpoint:"/api/user",method:"POST",data:{}},login:{endpoint:"/api/user/login",method:"POST",data:{}},chooseExamUser:{endpoint:"/api/exam/user",method:"POST",data:{id:null}},startExamUser:{endpoint:"/api/exam/user",method:"POST",data:{status_ujian:"progress"}},generateFirsSoal:{endpoint:"/api/exam/user/question/generate",method:"POST",data:{level_soal_terakhir:null,hasil_jawaban_terakhir:null}},generateSoal:{endpoint:"/api/exam/user/question/generate",method:"POST",data:{}},jawabSoalPilgan:{endpoint:"/api/exam/user/answer",method:"POST",data:{}}}},646:function(e,a,t){e.exports=t.p+"static/media/logo-rasyiidu-black.bb6b80e8.png"},647:function(e,a,t){"use strict";var n=t(643),r=t.n(n),o=t(644),l=t(645),c=t(2),s=t.n(c),i=t(641),u=t(163),m=t(21),d=t(4);t(640),t(639);function p(){return s.a.createElement("div",{className:"bg-header"})}var h=t(646),b=t.n(h);a.a=function(e){var a=e.children,t=Object(m.g)(),n=Object(u.b)(),h=Object(c.useState)(!1),f=Object(l.a)(h,2),E=f[0],g=f[1],j=Object(u.c)((function(e){return e.user})).profile,O=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n({type:d.h,payload:null}),t.push("/login")}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement("main",{className:"c-main"},s.a.createElement(i.w,{show:E,shape:"rounded"},s.a.createElement(i.z,null,s.a.createElement(i.A,null,"Info")),s.a.createElement(i.x,null,"Apakah anda yakin akan keluar ?"),s.a.createElement(i.y,null,s.a.createElement(i.d,{color:"danger",onClick:function(){return O()}},"Ya"),s.a.createElement(i.d,{color:"success",onClick:function(){return g(!1)}},"Tidak"))),s.a.createElement(p,null),s.a.createElement(i.j,{fluid:!0},s.a.createElement("div",{className:"d-flex justify-content-between"},s.a.createElement("img",{src:b.a,alt:"logo-rasyiidu",className:"center"}),s.a.createElement("div",{className:""},s.a.createElement("strong",{className:"text-white float-right mr-1"},j.nama),s.a.createElement("br",null),s.a.createElement(i.d,{color:"light",className:"float-right font-weight-bold",shape:"pill",onClick:function(){return g(!0)}},"Logout"))),a))}},698:function(e,a,t){"use strict";t.r(a);var n=t(643),r=t.n(n),o=t(0),l=t(644),c=t(645),s=t(2),i=t.n(s),u=t(641),m=t(163),d=t(21),p=t(4),h=t(640),b=t(639),f=t(647),E=t(111),g=t(653),j=t.n(g);a.default=function(){var e=Object(m.b)(),a=Object(d.g)(),t=Object(m.c)((function(e){return e.dataExam})),n=t.current,g=t.currentUser,O=Object(m.c)((function(e){return e.user})).profile,x=Object(s.useState)(!1),w=Object(c.a)(x,2),_=w[0],v=w[1],k=function(){var t=Object(l.a)(r.a.mark((function t(){var n,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),null,t.prev=2,t.next=5,Object(b.a)(null,Object(o.a)(Object(o.a)({},h.a.startExamUser),{},{data:Object(o.a)(Object(o.a)({},h.a.startExamUser.data),{},{id:g.id,waktu_mulai:j()().format("YYYY-MM-DD HH:mm")})}));case 5:return t.sent,n=null,t.prev=7,t.next=10,Object(b.a)(null,Object(o.a)(Object(o.a)({},h.a.generateFirsSoal),{},{data:Object(o.a)(Object(o.a)({},h.a.generateFirsSoal.data),{},{exam_user_id:g.id})}));case 10:"pilihan_ganda"==(n=t.sent).data.exam_question_answer.tipe_jawaban||"pilihan_ganda_komplex"==n.data.exam_question_answer.tipe_jawaban||"benar_salah"==n.data.exam_question_answer.tipe_jawaban||"survey_lingkungan"==n.data.exam_question_answer.tipe_jawaban?(l=Object(o.a)(Object(o.a)({},n.data),{},{exam_question_answer:Object(o.a)(Object(o.a)({},n.data.exam_question_answer),{},{jawaban:n.data.exam_question_answer.jawaban.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{status_jawaban:"0"})}))})}),e({type:p.n,payload:l}),e({type:p.l,payload:{index:0}}),v(!1)):(e({type:p.n,payload:n.data}),e({type:p.l,payload:{index:0}}),v(!1)),v(!1),a.push("/exam"),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(7),v(!1),alert(t.t0.error.response.data.messages);case 20:t.next=26;break;case 22:t.prev=22,t.t1=t.catch(2),v(!1),alert(t.t1.error.response.data.messages);case 26:case"end":return t.stop()}}),t,null,[[2,22],[7,16]])})));return function(){return t.apply(this,arguments)}}();return O.nama?i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,null,i.a.createElement(u.E,{className:"d-flex justify-content-center"},i.a.createElement(u.i,{md:6},i.a.createElement(u.e,{className:"card-rounded shadow border-white d-flex flex-wrap mt-2"},i.a.createElement(u.h,{className:"d-flex direction-row justify-content-between align-items-center card-rounded border-0"},i.a.createElement("h3",null,"Konfirmasi Tes")),i.a.createElement(u.f,{className:"pt-0"},i.a.createElement(u.l,null,i.a.createElement(u.u,{htmlFor:"name"},"Nama Tes"),i.a.createElement(u.m,{readOnly:!0,placeholder:"Input Nama Tes",onChange:function(e){},value:E.c[n.exam_id],required:!0})),i.a.createElement(u.l,null,i.a.createElement(u.u,{htmlFor:"name"},"Status Tes"),i.a.createElement(u.m,{readOnly:!0,placeholder:"Input Status Tes",onChange:function(e){},value:"Baru",required:!0})),i.a.createElement(u.l,null,i.a.createElement(u.u,{htmlFor:"name"},"Waktu Tes"),i.a.createElement(u.m,{readOnly:!0,placeholder:"Input Waktu Tes",onChange:function(e){},value:j()(n.waktu_mulai).format("DD/MM/YYYY HH:mm"),required:!0})),i.a.createElement(u.l,null,i.a.createElement(u.u,{htmlFor:"name"},"Alokasi Waktu Tes"),i.a.createElement(u.m,{readOnly:!0,placeholder:"Input Alokasi Waktu",onChange:function(e){},value:"".concat(n.lama_pengerjaan_soal," Menit"),required:!0})),i.a.createElement(u.E,null,i.a.createElement(u.i,{xs:12},i.a.createElement(u.d,{disabled:_,block:!0,onClick:function(){return k()},color:"primary"},"Mulai"))))))))):i.a.createElement(d.a,{to:"/login"})}}}]);
//# sourceMappingURL=8.3a7b3237.chunk.js.map