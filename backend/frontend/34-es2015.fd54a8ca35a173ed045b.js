(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{uhyA:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class b{}var o=u("pMnS"),i=u("oBZk"),s=u("ZZ/e"),r=u("SVse"),a=u("xAX9");class e{constructor(l,n,u,t,b){this.route=l,this.complaintService=n,this.loadingCtrl=u,this.alertCtrl=t,this.router=b}ngOnInit(){this.route.params.subscribe(l=>{l.complaintId&&(this.complaintId=l.complaintId,this.loadingCtrl.create({spinner:"dots"}).then(l=>{l.present(),this.complaintService.getComplaint(this.complaintId).subscribe(n=>{l.dismiss(),this.complaint=n.complaint},n=>{l.dismiss(),this.router.navigateByUrl("/forum/tabs/complaints")})}))})}}var c=u("iInd"),p=t.qb({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"label",[["for","case_type"]],null,null,null,null,null)),(l()(),t.Lb(1,null,["",";"]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function f(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,11,"ion-header",[],null,null,null,i.bb,i.o)),t.rb(1,49152,null,0,s.A,[t.h,t.k,t.x],null,null),(l()(),t.sb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.zb,i.M)),t.rb(3,49152,null,0,s.Bb,[t.h,t.k,t.x],null,null),(l()(),t.sb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.Q,i.d)),t.rb(5,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(l()(),t.sb(6,0,null,0,2,"ion-back-button",[["defaultHref","/forum/tabs/complaints"]],null,[[null,"click"]],(function(l,n,u){var b=!0;return"click"===n&&(b=!1!==t.Eb(l,8).onClick(u)&&b),b}),i.O,i.b)),t.rb(7,49152,null,0,s.f,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.rb(8,16384,null,0,s.g,[[2,s.hb],s.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.sb(9,0,null,0,2,"ion-title",[],null,null,null,i.yb,i.L)),t.rb(10,49152,null,0,s.zb,[t.h,t.k,t.x],null,null),(l()(),t.Lb(-1,0,["AFIT Complaint"])),(l()(),t.sb(12,0,null,null,24,"ion-content",[],null,null,null,i.X,i.k)),t.rb(13,49152,null,0,s.t,[t.h,t.k,t.x],null,null),(l()(),t.sb(14,0,null,0,22,"ion-grid",[],null,null,null,i.ab,i.n)),t.rb(15,49152,null,0,s.z,[t.h,t.k,t.x],null,null),(l()(),t.sb(16,0,null,0,7,"ion-row",[],null,null,null,i.ob,i.B)),t.rb(17,49152,null,0,s.ib,[t.h,t.k,t.x],null,null),(l()(),t.sb(18,0,null,0,5,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,i.W,i.j)),t.rb(19,49152,null,0,s.s,[t.h,t.k,t.x],null,null),(l()(),t.sb(20,0,null,0,3,"ion-text",[],null,null,null,i.wb,i.J)),t.rb(21,49152,null,0,s.wb,[t.h,t.k,t.x],null,null),(l()(),t.sb(22,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Lb(23,null,["",""])),(l()(),t.sb(24,0,null,0,12,"ion-row",[],null,null,null,i.ob,i.B)),t.rb(25,49152,null,0,s.ib,[t.h,t.k,t.x],null,null),(l()(),t.sb(26,0,null,0,10,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,i.W,i.j)),t.rb(27,49152,null,0,s.s,[t.h,t.k,t.x],null,null),(l()(),t.sb(28,0,null,0,8,"ion-text",[],null,null,null,i.wb,i.J)),t.rb(29,49152,null,0,s.wb,[t.h,t.k,t.x],null,null),(l()(),t.sb(30,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.sb(31,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Case Type: "])),(l()(),t.hb(16777216,null,null,1,null,m)),t.rb(34,278528,null,0,r.l,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.sb(35,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(36,null,["",""]))],(function(l,n){var u=n.component;l(n,7,0,"/forum/tabs/complaints"),l(n,8,0,"/forum/tabs/complaints"),l(n,34,0,null==u.complaint?null:u.complaint.case_type)}),(function(l,n){var u=n.component;l(n,23,0,null==u.complaint?null:u.complaint.title),l(n,36,0,null==u.complaint?null:u.complaint.body)}))}function h(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"app-complaint-detail",[],null,null,null,f,p)),t.rb(1,114688,null,0,e,[c.a,a.a,s.Fb,s.a,c.m],null,null)],(function(l,n){l(n,1,0)}),null)}var d=t.ob("app-complaint-detail",e,h,{},{},[]),k=u("s7LF");class C{}u.d(n,"ComplaintDetailPageModuleNgFactory",(function(){return x}));var x=t.pb(b,[],(function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[o.a,d]],[3,t.j],t.v]),t.Cb(4608,r.o,r.n,[t.s,[2,r.B]]),t.Cb(4608,k.p,k.p,[]),t.Cb(4608,s.b,s.b,[t.x,t.g]),t.Cb(4608,s.Gb,s.Gb,[s.b,t.j,t.p]),t.Cb(4608,s.Jb,s.Jb,[s.b,t.j,t.p]),t.Cb(1073742336,r.c,r.c,[]),t.Cb(1073742336,k.o,k.o,[]),t.Cb(1073742336,k.g,k.g,[]),t.Cb(1073742336,s.Db,s.Db,[]),t.Cb(1073742336,c.p,c.p,[[2,c.u],[2,c.m]]),t.Cb(1073742336,C,C,[]),t.Cb(1073742336,b,b,[]),t.Cb(1024,c.k,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);