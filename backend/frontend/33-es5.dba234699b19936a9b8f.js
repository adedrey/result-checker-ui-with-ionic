(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{uhyA:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),b=u("pMnS"),i=u("oBZk"),a=u("ZZ/e"),c=u("Ip0R"),e=u("xAX9"),r=function(){function l(l,n,u,t,o){this.route=l,this.complaintService=n,this.loadingCtrl=u,this.alertCtrl=t,this.router=o}return l.prototype.ngOnInit=function(){var l=this;this.route.params.subscribe((function(n){n.complaintId&&(l.complaintId=n.complaintId,l.loadingCtrl.create({spinner:"dots"}).then((function(n){n.present(),l.complaintService.getComplaint(l.complaintId).subscribe((function(u){n.dismiss(),l.complaint=u.complaint}),(function(u){n.dismiss(),l.router.navigateByUrl("/forum/tabs/complaints")}))})))}))},l}(),s=u("ZYCi"),p=t.tb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Qb(0,[(l()(),t.vb(0,0,null,null,1,"label",[["for","case_type"]],null,null,null,null,null)),(l()(),t.Ob(1,null,["",";"]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function m(l){return t.Qb(0,[(l()(),t.vb(0,0,null,null,11,"ion-header",[],null,null,null,i.bb,i.o)),t.ub(1,49152,null,0,a.A,[t.h,t.k,t.A],null,null),(l()(),t.vb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.zb,i.M)),t.ub(3,49152,null,0,a.Bb,[t.h,t.k,t.A],null,null),(l()(),t.vb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.Q,i.d)),t.ub(5,49152,null,0,a.k,[t.h,t.k,t.A],null,null),(l()(),t.vb(6,0,null,0,2,"ion-back-button",[["defaultHref","/forum/tabs/complaints"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Hb(l,8).onClick(u)&&o),o}),i.O,i.b)),t.ub(7,49152,null,0,a.f,[t.h,t.k,t.A],{defaultHref:[0,"defaultHref"]},null),t.ub(8,16384,null,0,a.g,[[2,a.hb],a.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.vb(9,0,null,0,2,"ion-title",[],null,null,null,i.yb,i.L)),t.ub(10,49152,null,0,a.zb,[t.h,t.k,t.A],null,null),(l()(),t.Ob(-1,0,["AFIT Complaint"])),(l()(),t.vb(12,0,null,null,24,"ion-content",[],null,null,null,i.X,i.k)),t.ub(13,49152,null,0,a.t,[t.h,t.k,t.A],null,null),(l()(),t.vb(14,0,null,0,22,"ion-grid",[],null,null,null,i.ab,i.n)),t.ub(15,49152,null,0,a.z,[t.h,t.k,t.A],null,null),(l()(),t.vb(16,0,null,0,7,"ion-row",[],null,null,null,i.ob,i.B)),t.ub(17,49152,null,0,a.ib,[t.h,t.k,t.A],null,null),(l()(),t.vb(18,0,null,0,5,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,i.W,i.j)),t.ub(19,49152,null,0,a.s,[t.h,t.k,t.A],null,null),(l()(),t.vb(20,0,null,0,3,"ion-text",[],null,null,null,i.wb,i.J)),t.ub(21,49152,null,0,a.wb,[t.h,t.k,t.A],null,null),(l()(),t.vb(22,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Ob(23,null,["",""])),(l()(),t.vb(24,0,null,0,12,"ion-row",[],null,null,null,i.ob,i.B)),t.ub(25,49152,null,0,a.ib,[t.h,t.k,t.A],null,null),(l()(),t.vb(26,0,null,0,10,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,i.W,i.j)),t.ub(27,49152,null,0,a.s,[t.h,t.k,t.A],null,null),(l()(),t.vb(28,0,null,0,8,"ion-text",[],null,null,null,i.wb,i.J)),t.ub(29,49152,null,0,a.wb,[t.h,t.k,t.A],null,null),(l()(),t.vb(30,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.vb(31,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ob(-1,null,["Case Type: "])),(l()(),t.kb(16777216,null,null,1,null,f)),t.ub(34,278528,null,0,c.l,[t.Q,t.N,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.vb(35,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Ob(36,null,["",""]))],(function(l,n){var u=n.component;l(n,7,0,"/forum/tabs/complaints"),l(n,8,0,"/forum/tabs/complaints"),l(n,34,0,null==u.complaint?null:u.complaint.case_type)}),(function(l,n){var u=n.component;l(n,23,0,null==u.complaint?null:u.complaint.title),l(n,36,0,null==u.complaint?null:u.complaint.body)}))}function v(l){return t.Qb(0,[(l()(),t.vb(0,0,null,null,1,"app-complaint-detail",[],null,null,null,m,p)),t.ub(1,114688,null,0,r,[s.a,e.a,a.Fb,a.a,s.m],null,null)],(function(l,n){l(n,1,0)}),null)}var h=t.rb("app-complaint-detail",r,v,{},{},[]),d=u("gIcY"),k=function(){return function(){}}();u.d(n,"ComplaintDetailPageModuleNgFactory",(function(){return F}));var F=t.sb(o,[],(function(l){return t.Eb([t.Fb(512,t.j,t.db,[[8,[b.a,h]],[3,t.j],t.y]),t.Fb(4608,c.o,c.n,[t.v,[2,c.B]]),t.Fb(4608,d.p,d.p,[]),t.Fb(4608,a.b,a.b,[t.A,t.g]),t.Fb(4608,a.Gb,a.Gb,[a.b,t.j,t.r]),t.Fb(4608,a.Jb,a.Jb,[a.b,t.j,t.r]),t.Fb(1073742336,c.c,c.c,[]),t.Fb(1073742336,d.o,d.o,[]),t.Fb(1073742336,d.g,d.g,[]),t.Fb(1073742336,a.Db,a.Db,[]),t.Fb(1073742336,s.p,s.p,[[2,s.u],[2,s.m]]),t.Fb(1073742336,k,k,[]),t.Fb(1073742336,o,o,[]),t.Fb(1024,s.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);