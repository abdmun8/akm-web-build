(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[3],{16:function(a,e,t){"use strict";t.d(e,"k",(function(){return n})),t.d(e,"d",(function(){return c})),t.d(e,"u",(function(){return l})),t.d(e,"l",(function(){return i})),t.d(e,"f",(function(){return r})),t.d(e,"g",(function(){return s})),t.d(e,"h",(function(){return o})),t.d(e,"b",(function(){return u})),t.d(e,"i",(function(){return b})),t.d(e,"j",(function(){return d})),t.d(e,"c",(function(){return h})),t.d(e,"q",(function(){return m})),t.d(e,"r",(function(){return _})),t.d(e,"o",(function(){return j})),t.d(e,"p",(function(){return p})),t.d(e,"t",(function(){return O})),t.d(e,"m",(function(){return f})),t.d(e,"s",(function(){return A})),t.d(e,"a",(function(){return v})),t.d(e,"v",(function(){return w})),t.d(e,"n",(function(){return E})),t.d(e,"e",(function(){return g}));var n="user.SET_DATA_USER",c="user.RESET_USER",l="user.SET_TOKEN",i="exam.SET_TOKEN",r="exam.SET_AVAILABLE_EXAM",s="exam.SET_CURRENT_EXAM",o="exam.SET_CURRENT_SOAL",u="exam.RESET_DATA_EXAM",b="exam.SET_CURRENT_USER_EXAM",d="soal.SET_DATA_SOAL",h="soal.RESET_DATA_SOAL",m="soal.SET_JAWABAN_SOAL_PG",_="soal.SET_JAWABAN_SOAL_PG_COMPLEX",j="soal.SET_JAWABAN_SOAL_BENAR_SALAH",p="soal.SET_JAWABAN_SOAL_ISIAN_SINGKAT",O="soal.SET_STATUS_JAWAB_SOAL",f="soal.SET_HASIL_JAWAB_SOAL",A="soal.SET_JAWABAN_SURVEY_LINGKUNGAN",v="soal.ADD_CURRENT_ID_SOAL",w="userSoal.SET_TOTAL_SOAL",E="userSoal.SET_ID_USER_SOAL",g="userSoal.RESET_USER_SOAL"},385:function(a,e,t){a.exports=t(502)},494:function(a,e,t){},502:function(a,e,t){"use strict";t.r(e);t(386),t(393),t(113),t(122),t(123),t(124),t(125),t(126),t(127),t(128),t(129),t(130),t(131),t(132),t(133),t(134),t(135),t(183),t(185),t(186),t(187),t(188),t(189),t(190),t(192),t(193),t(137),t(195),t(196),t(81),t(197),t(198),t(200),t(201),t(202),t(203),t(204),t(205),t(206),t(207),t(208),t(209),t(210),t(211),t(214),t(215),t(216),t(217),t(218),t(140),t(94),t(220),t(222),t(223),t(224),t(225),t(226),t(227),t(228),t(230),t(231),t(232),t(233),t(234),t(235),t(236),t(237),t(141),t(238),t(239),t(240),t(242),t(244),t(245),t(246),t(247),t(248),t(249),t(251),t(252),t(254),t(255),t(256),t(258),t(259),t(260),t(261),t(262),t(263),t(264),t(266),t(267),t(268),t(269),t(270),t(271),t(272),t(273),t(142),t(274),t(275),t(281),t(282),t(283),t(284),t(285),t(286),t(287),t(288),t(289),t(290),t(291),t(292),t(293),t(294),t(151),t(295),t(296),t(152),t(297),t(298),t(299),t(300),t(92),t(301),t(302),t(305),t(306),t(307),t(308),t(309),t(310),t(311),t(312),t(313),t(314),t(315),t(316),t(317),t(318),t(319),t(320),t(321),t(322),t(323),t(324),t(325),t(326),t(327),t(328),t(331),t(332),t(333),t(334),t(335),t(336),t(337),t(338),t(339),t(340),t(341),t(342),t(343),t(344),t(345),t(346),t(347),t(348),t(349),t(350),t(351),t(352),t(353),t(354),t(355),t(356),t(357),t(358),t(359),t(360),t(361),t(362),t(363),t(105),t(365),t(404),t(406),t(407),t(408),t(409),t(410),t(412),t(413),t(414),t(415),t(416),t(417),t(418),t(419),t(421),t(422),t(423),t(424),t(425),t(426),t(427),t(428),t(429),t(430),t(431),t(432),t(433),t(434),t(435),t(436),t(437),t(438),t(439),t(440),t(441),t(442),t(443),t(444),t(445),t(447),t(449),t(450),t(451),t(452),t(453),t(454),t(455),t(456),t(457),t(458),t(459),t(460),t(461),t(462),t(463),t(464),t(465),t(466),t(467),t(468),t(469),t(470),t(471),t(472),t(473),t(474),t(475),t(476),t(477),t(478),t(479),t(481),t(179),t(180),t(181),t(483),t(484),t(485),t(486),t(487),t(488),t(489),t(366),t(368),t(369),t(370),t(371),t(373),t(157);!function(){if("function"===typeof window.CustomEvent)return!1;function a(a,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(a,e.bubbles,e.cancelable,e.detail),t}a.prototype=window.Event.prototype,window.CustomEvent=a}();var n=t(1),c=t.n(n),l=t(109),i=t.n(l),r=t(163),s=t(21),o=(t(494),c.a.createElement("div",{style:{height:"100vh"},className:"d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")),c.a.createElement("div",{className:"spinner-grow text-secondary",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")),c.a.createElement("div",{className:"spinner-grow text-success",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")),c.a.createElement("div",{className:"spinner-grow text-danger",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")),c.a.createElement("div",{className:"spinner-grow text-warning",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")))),u=c.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,701))})),b=(c.a.lazy((function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,695))})),c.a.lazy((function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,696))})),c.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(6)]).then(t.bind(null,697))}))),d=c.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(8)]).then(t.bind(null,698))})),h=c.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(9)]).then(t.bind(null,700))})),m=c.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(7)]).then(t.bind(null,699))})),_=function(){return c.a.createElement(r.a,null,c.a.createElement(c.a.Suspense,{fallback:o},c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/"},c.a.createElement(s.a,{to:"/login"})),c.a.createElement(s.b,{exact:!0,path:"/data-confirmation",name:"Login Page",render:function(a){return c.a.createElement(b,a)}}),c.a.createElement(s.b,{exact:!0,path:"/exam-start",name:"Start Exam",render:function(a){return c.a.createElement(d,a)}}),c.a.createElement(s.b,{exact:!0,path:"/exam-finish",name:"Start Exam",render:function(a){return c.a.createElement(m,a)}}),c.a.createElement(s.b,{exact:!0,path:"/login",name:"Login Page",render:function(a){return c.a.createElement(u,a)}}),c.a.createElement(s.b,{exact:!0,path:"/exam",name:"Exam",render:function(a){return c.a.createElement(h,a)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(611),p=t(612),O=t(613),f=t(614),A=t(615),v=t(616),w=t(617),E=t(618),g=t(619),S=t(620),V=t(621),x=t(622),L=t(623),y=t(624),M=t(625),T=t(626),Z=t(627),C=t(628),N=t(629),q=t(630),P=t(631),k=t(632),H=t(633),R=t(634),B=t(635),U=t(636),I=t(605),D=t(606),G=t(607),W=t(608),J=t(609),X=t(610),z=t(503),F=t(504),K=t(505),Y=t(506),Q=t(507),$=t(508),aa=t(509),ea=t(510),ta=t(511),na=t(512),ca=t(513),la=t(514),ia=t(515),ra=t(516),sa=t(517),oa=t(518),ua=t(519),ba=t(520),da=t(521),ha=t(522),ma=t(523),_a=t(524),ja=t(525),pa=t(526),Oa=t(527),fa=t(528),Aa=t(529),va=t(530),wa=t(531),Ea=t(532),ga=t(533),Sa=t(534),Va=t(535),xa=t(536),La=t(537),ya=t(538),Ma=t(539),Ta=t(540),Za=t(541),Ca=t(542),Na=t(543),qa=t(544),Pa=t(545),ka=t(546),Ha=t(547),Ra=t(548),Ba=t(549),Ua=t(550),Ia=t(551),Da=t(552),Ga=t(553),Wa=t(554),Ja=t(555),Xa=t(556),za=t(557),Fa=t(558),Ka=t(559),Ya=t(560),Qa=t(561),$a=t(562),ae=t(563),ee=t(564),te=t(565),ne=t(566),ce=t(567),le=t(568),ie=t(569),re=t(570),se=t(571),oe=t(572),ue=t(573),be=t(574),de=t(575),he=t(576),me=t(577),_e=t(578),je=t(579),pe=t(580),Oe=t(581),fe=t(582),Ae=t(583),ve=t(584),we=t(585),Ee=t(586),ge=t(587),Se=t(588),Ve=t(589),xe=t(590),Le=t(591),ye=t(592),Me=t(593),Te=t(594),Ze=t(595),Ce=t(596),Ne=t(597),qe=t(598),Pe=t(599),ke=t(600),He=t(601),Re=t(602),Be=t(603),Ue=t(604),Ie=Object.assign({},{sygnet:["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],logo:["608 134",'\n  <title>coreui react pro</title>\n  <g>\n    <g style="fill:#00a1ff">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],logoNegative:["608 134",'\n  <title>coreui react pro logo</title>\n  <g>\n    <g style="fill:#80d0ff;">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n\n    <g style="fill:#fff;">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n']},{cilAlignCenter:z.a,cilAlignLeft:F.a,cilAlignRight:K.a,cilApplicationsSettings:Y.a,cilArrowRight:Q.a,cilArrowTop:$.a,cilAsterisk:aa.a,cilBan:ea.a,cilBasket:ta.a,cilBell:na.a,cilBold:ca.a,cilBookmark:la.a,cilCalculator:ia.a,cilCalendar:ra.a,cilCloudDownload:sa.a,cilChartPie:oa.a,cilCheck:ua.a,cilChevronBottom:ba.a,cilChevronLeft:da.a,cilChevronRight:ha.a,cilChevronTop:ma.a,cilCircle:_a.a,cilCheckCircle:ja.a,cilCode:pa.a,cilCommentSquare:Oa.a,cilCreditCard:fa.a,cilCursor:Aa.a,cilCursorMove:va.a,cilDrop:wa.a,cilDollar:Ea.a,cilEnvelopeClosed:ga.a,cilEnvelopeLetter:Sa.a,cilEnvelopeOpen:Va.a,cilEuro:xa.a,cilGlobeAlt:La.a,cilGrid:ya.a,cilFile:Ma.a,cilFullscreen:Ta.a,cilFullscreenExit:Za.a,cilGraph:Ca.a,cilHome:Na.a,cilInbox:qa.a,cilIndentDecrease:Pa.a,cilIndentIncrease:ka.a,cilInputPower:Ha.a,cilItalic:Ra.a,cilJustifyCenter:Ba.a,cilJustifyLeft:Ua.a,cilLaptop:Ia.a,cilLayers:Da.a,cilLightbulb:Ga.a,cilList:Wa.a,cilListNumbered:Ja.a,cilListRich:Xa.a,cilLocationPin:za.a,cilLockLocked:Fa.a,cilMagnifyingGlass:Ka.a,cilMap:Ya.a,cilMoon:Qa.a,cilNotes:$a.a,cilOptions:ae.a,cilPaperclip:ee.a,cilPaperPlane:te.a,cilPencil:ne.a,cilPeople:ce.a,cilPhone:le.a,cilPrint:ie.a,cilPuzzle:re.a,cilSave:se.a,cilScrubber:oe.a,cilSettings:ue.a,cilShare:be.a,cilShareAll:de.a,cilShareBoxed:he.a,cilShieldAlt:me.a,cilSpeech:_e.a,cilSpeedometer:je.a,cilSpreadsheet:pe.a,cilStar:Oe.a,cilSun:fe.a,cilTags:Ae.a,cilTask:ve.a,cilTrash:we.a,cilUnderline:Ee.a,cilUser:ge.a,cilUserFemale:Se.a,cilUserFollow:Ve.a,cilUserUnfollow:xe.a,cilX:Le.a,cilXCircle:ye.a,cilWarning:Me.a,cilAvTimer:Te.a,cilShortText:Ze.a,cilObjectGroup:Ce.a,cilBalanceScale:Ne.a,cilSearch:qe.a,cilPlus:Pe.a,cilVoiceOverRecord:ke.a,cilUserPlus:He.a,cilSchool:Re.a,cilBuilding:Be.a,cilWindow:Ue.a},{cifUs:I.a,cifBr:D.a,cifIn:G.a,cifFr:W.a,cifEs:J.a,cifPl:X.a},{cibSkype:j.a,cibFacebook:p.a,cibTwitter:O.a,cibLinkedin:f.a,cibFlickr:A.a,cibTumblr:v.a,cibXing:w.a,cibGithub:E.a,cibStackoverflow:g.a,cibYoutube:S.a,cibDribbble:V.a,cibInstagram:x.a,cibPinterest:L.a,cibVk:y.a,cibYahoo:M.a,cibBehance:T.a,cibReddit:Z.a,cibVimeo:C.a,cibCcMastercard:N.a,cibCcVisa:q.a,cibStripe:P.a,cibPaypal:k.a,cibGooglePay:H.a,cibCcAmex:R.a,cibAndroidAlt:B.a,cibWindows:U.a}),De=t(162),Ge=t(379),We=t(53),Je=t(39),Xe=t(161),ze=t(380),Fe=t.n(ze),Ke=t(2),Ye=t(383),Qe={sidebarShow:"responsive"},$e=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,e=arguments.length>1?arguments[1]:void 0,t=e.type,n=Object(Ye.a)(e,["type"]);switch(t){case"set":return Object(Ke.a)(Object(Ke.a)({},a),n);default:return a}},at=t(16),et={token:"",profile:{data:{user_participant:{nis:"",nik:""}}}},tt=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,e=arguments.length>1?arguments[1]:void 0,t=e.type,n=e.payload;switch(t){case at.u:case at.k:return n;case at.d:return et;default:return a}},nt={current:{token:""},timer:0,currentUser:{},available:[]},ct=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,e=arguments.length>1?arguments[1]:void 0,t=e.type,n=e.payload;switch(t){case at.i:return Object(Ke.a)(Object(Ke.a)({},a),{},{currentUser:n});case at.l:return Object(Ke.a)(Object(Ke.a)({},a),{},{current:Object(Ke.a)(Object(Ke.a)({},a.current),{},{token:n})});case at.f:return Object(Ke.a)(Object(Ke.a)({},a),{},{available:n});case at.g:return Object(Ke.a)(Object(Ke.a)({},a),{},{current:n});case at.b:return nt;default:return a}},lt={soal:[],id_soal:[],current:{index:-1},status:[{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1},{status:"belum_dijawab",hasil:!1}]},it=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,e=arguments.length>1?arguments[1]:void 0,t=e.type,n=e.payload;switch(t){case at.j:return Object(Ke.a)(Object(Ke.a)({},a),{},{soal:[].concat(Object(We.a)(a.soal),[n])});case at.h:return Object(Ke.a)(Object(Ke.a)({},a),{},{current:n});case at.a:return Object(Ke.a)(Object(Ke.a)({},a),{},{id_soal:[].concat(Object(We.a)(a.id_soal),[n])});case at.r:return Object(Ke.a)(Object(Ke.a)({},a),{},{soal:a.soal.map((function(e,t){return a.current.index===t?Object(Ke.a)(Object(Ke.a)({},e),{},{exam_question_answer:Object(Ke.a)(Object(Ke.a)({},e.exam_question_answer),{},{jawaban:e.exam_question_answer.jawaban.map((function(a,e){return e===n?Object(Ke.a)(Object(Ke.a)({},a),{},{status_jawaban:"1"===a.status_jawaban?"0":"1"}):a}))})}):e}))});case at.s:return Object(Ke.a)(Object(Ke.a)({},a),{},{soal:a.soal.map((function(e,t){return a.current.index===t?Object(Ke.a)(Object(Ke.a)({},e),{},{exam_question_answer:Object(Ke.a)(Object(Ke.a)({},e.exam_question_answer),{},{jawaban:e.exam_question_answer.jawaban.map((function(a,e){return e===n.index?Object(Ke.a)(Object(Ke.a)({},a),{},{status_jawaban:String(n.status_jawaban)}):a}))})}):e}))});case at.o:return Object(Ke.a)(Object(Ke.a)({},a),{},{soal:a.soal.map((function(e,t){return a.current.index===t?Object(Ke.a)(Object(Ke.a)({},e),{},{exam_question_answer:Object(Ke.a)(Object(Ke.a)({},e.exam_question_answer),{},{jawaban:e.exam_question_answer.jawaban.map((function(a,e){return e===n.index?Object(Ke.a)(Object(Ke.a)({},a),{},{status_jawaban:n.status}):a}))})}):e}))});case at.p:return Object(Ke.a)(Object(Ke.a)({},a),{},{soal:a.soal.map((function(e,t){return a.current.index===t?Object(Ke.a)(Object(Ke.a)({},e),{},{exam_question_answer:Object(Ke.a)(Object(Ke.a)({},e.exam_question_answer),{},{jawaban:e.exam_question_answer.jawaban.map((function(a,e){return e===n.index?Object(Ke.a)(Object(Ke.a)({},a),{},{text_jawaban:n.text_jawaban}):a}))})}):e}))});case at.q:return Object(Ke.a)(Object(Ke.a)({},a),{},{soal:a.soal.map((function(e,t){return a.current.index===t?Object(Ke.a)(Object(Ke.a)({},e),{},{exam_question_answer:Object(Ke.a)(Object(Ke.a)({},e.exam_question_answer),{},{jawaban:e.exam_question_answer.jawaban.map((function(a,e){return e===n?Object(Ke.a)(Object(Ke.a)({},a),{},{status_jawaban:"1"}):Object(Ke.a)(Object(Ke.a)({},a),{},{status_jawaban:"0"})}))})}):e}))});case at.t:return Object(Ke.a)(Object(Ke.a)({},a),{},{status:a.status.map((function(e,t){return t===a.current.index?Object(Ke.a)(Object(Ke.a)({},e),{},{status:n.status}):e}))});case at.m:return Object(Ke.a)(Object(Ke.a)({},a),{},{status:a.status.map((function(e,t){return t===a.current.index?Object(Ke.a)(Object(Ke.a)({},e),{},{hasil:Boolean(n.hasil)}):e}))});case at.c:return lt;default:return a}},rt={totalSoal:0,id_soal:[]},st=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,e=arguments.length>1?arguments[1]:void 0,t=e.type,n=e.payload;switch(t){case at.v:return Object(Ke.a)(Object(Ke.a)({},a),{},{totalSoal:n});case at.n:return Object(Ke.a)(Object(Ke.a)({},a),{},{id_soal:[].concat(Object(We.a)(a.id_soal),[n])});case at.c:return rt;default:return a}},ot=Object(Je.c)({sidebarShow:$e,user:tt,dataExam:ct,dataSoal:it,userSoal:st}),ut=t(381),bt=t(382),dt=t.n(bt),ht={key:"root",storage:Fe.a},mt=Object(Xe.a)(ht,ot),_t=[ut.a];_t=[].concat(Object(We.a)(_t),[dt.a]);var jt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Je.d,pt=Je.a.apply(void 0,Object(We.a)(_t)),Ot=Object(Je.e)(mt,jt(pt)),ft=Object(Xe.b)(Ot);c.a.icons=Ie,i.a.render(c.a.createElement(De.a,{store:Ot},c.a.createElement(Ge.a,{loading:null,persistor:ft},c.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()}))}},[[385,4,5]]]);
//# sourceMappingURL=main.692a0633.chunk.js.map