(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Ftoy:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var b=u("pMnS"),r=u("oBZk"),i=u("ZZ/e"),s=u("FcOw"),o=u("bwQ+"),a=u("ys2I"),c=u("iInd"),d=u("zENP"),m=u("c+an"),h=u("s7LF");class g{constructor(l,n){this.alertCtrl=l,this.modalCtrl=n}ngOnInit(){this.registerForm=new h.e({attachment:new h.c(null,[h.n.required]),account_type:new h.c(null,[h.n.required])})}onDocumentPicked(l){const n=l.target.files[0];this.documentName=n.name,this.registerForm.patchValue({attachment:n}),this.registerForm.get("attachment").updateValueAndValidity();const u=new FileReader;u.onload=()=>{this.documentPreview=u.result},u.readAsDataURL(n)}onCancel(){this.modalCtrl.dismiss(null,"cancel")}onAddUser(){this.registerForm.valid&&this.alertCtrl.create({header:"Confirm",message:"Do you want to continue?",buttons:[{text:"Cancel",role:"cancel"},{text:"Continue",handler:()=>{this.modalCtrl.dismiss({postData:this.registerForm.value.attachment,account_type:this.registerForm.value.account_type},"confirm")}}]}).then(l=>{l.present()})}}class p{constructor(l,n,u,e){this.modalCtrl=l,this.loadingCtrl=n,this.adminService=u,this.alertCtrl=e}ngOnInit(){}onAddUser(){this.modalCtrl.create({component:g}).then(l=>(l.present(),l.onDidDismiss())).then(l=>{console.log(l),"confirm"===l.role&&this.loadingCtrl.create({spinner:"lines-small",message:"Creating Accounts..."}).then(n=>{n.present();const u=l.data.postData;"Student"===l.data.account_type?this.adminService.preRegisterStudent(u).subscribe(l=>{n.dismiss(),this.alertMsg(l.message)},l=>{n.dismiss()}):this.adminService.preRegisterStaff(u).subscribe(l=>{n.dismiss(),this.alertMsg(l.message)},l=>{n.dismiss()})})})}alertMsg(l){this.alertCtrl.create({header:"Success",message:l,buttons:["Okay"]}).then(l=>{l.present()})}}var C=e.qb({encapsulation:0,styles:[[""]],data:{}});function f(l){return e.Nb(0,[(l()(),e.sb(0,0,null,null,11,"ion-header",[],null,null,null,r.bb,r.o)),e.rb(1,49152,null,0,i.A,[e.h,e.k,e.x],null,null),(l()(),e.sb(2,0,null,0,9,"ion-toolbar",[],null,null,null,r.zb,r.M)),e.rb(3,49152,null,0,i.Bb,[e.h,e.k,e.x],null,null),(l()(),e.sb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.Q,r.d)),e.rb(5,49152,null,0,i.k,[e.h,e.k,e.x],null,null),(l()(),e.sb(6,0,null,0,2,"ion-back-button",[["defaultHref","/admin"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Eb(l,8).onClick(u)&&t),t}),r.O,r.b)),e.rb(7,49152,null,0,i.f,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.rb(8,16384,null,0,i.g,[[2,i.hb],i.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.sb(9,0,null,0,2,"ion-title",[],null,null,null,r.yb,r.L)),e.rb(10,49152,null,0,i.zb,[e.h,e.k,e.x],null,null),(l()(),e.Lb(-1,0,["AFIT Users"])),(l()(),e.sb(12,0,null,null,32,"ion-content",[],null,null,null,r.X,r.k)),e.rb(13,49152,null,0,i.t,[e.h,e.k,e.x],null,null),(l()(),e.sb(14,0,null,0,8,"ion-grid",[],null,null,null,r.ab,r.n)),e.rb(15,49152,null,0,i.z,[e.h,e.k,e.x],null,null),(l()(),e.sb(16,0,null,0,6,"ion-row",[],null,null,null,r.ob,r.B)),e.rb(17,49152,null,0,i.ib,[e.h,e.k,e.x],null,null),(l()(),e.sb(18,0,null,0,4,"ion-col",[["offset-sm","4"],["size-sm","4"]],null,null,null,r.W,r.j)),e.rb(19,49152,null,0,i.s,[e.h,e.k,e.x],null,null),(l()(),e.sb(20,0,null,0,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onAddUser()&&e),e}),r.P,r.c)),e.rb(21,49152,null,0,i.j,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Lb(-1,0,["Register User?"])),(l()(),e.sb(23,0,null,0,10,"ion-grid",[],null,null,null,r.ab,r.n)),e.rb(24,49152,null,0,i.z,[e.h,e.k,e.x],null,null),(l()(),e.sb(25,0,null,0,8,"ion-row",[],null,null,null,r.ob,r.B)),e.rb(26,49152,null,0,i.ib,[e.h,e.k,e.x],null,null),(l()(),e.sb(27,0,null,0,6,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,r.W,r.j)),e.rb(28,49152,null,0,i.s,[e.h,e.k,e.x],null,null),(l()(),e.sb(29,0,null,0,2,"ion-label",[],null,null,null,r.jb,r.w)),e.rb(30,49152,null,0,i.M,[e.h,e.k,e.x],null,null),(l()(),e.Lb(-1,0,["All Registered Student"])),(l()(),e.sb(32,0,null,0,1,"app-users-item",[],null,null,null,s.b,s.a)),e.rb(33,114688,null,0,o.a,[a.a,i.Fb,c.m],null,null),(l()(),e.sb(34,0,null,0,10,"ion-grid",[],null,null,null,r.ab,r.n)),e.rb(35,49152,null,0,i.z,[e.h,e.k,e.x],null,null),(l()(),e.sb(36,0,null,0,8,"ion-row",[],null,null,null,r.ob,r.B)),e.rb(37,49152,null,0,i.ib,[e.h,e.k,e.x],null,null),(l()(),e.sb(38,0,null,0,6,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,r.W,r.j)),e.rb(39,49152,null,0,i.s,[e.h,e.k,e.x],null,null),(l()(),e.sb(40,0,null,0,2,"ion-label",[],null,null,null,r.jb,r.w)),e.rb(41,49152,null,0,i.M,[e.h,e.k,e.x],null,null),(l()(),e.Lb(-1,0,["All Registered Staff"])),(l()(),e.sb(43,0,null,0,1,"app-staff-item",[],null,null,null,d.b,d.a)),e.rb(44,114688,null,0,m.a,[a.a,i.Fb],null,null)],(function(l,n){l(n,7,0,"/admin"),l(n,8,0,"/admin"),l(n,21,0,"primary","block"),l(n,33,0),l(n,44,0)}),null)}function k(l){return e.Nb(0,[(l()(),e.sb(0,0,null,null,1,"app-users",[],null,null,null,f,C)),e.rb(1,114688,null,0,p,[i.Gb,i.Fb,a.a,i.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=e.ob("app-users",p,k,{},{},[]),v=u("NcP4"),y=u("SVse"),w=e.qb({encapsulation:0,styles:[["input[type=file][_ngcontent-%COMP%]{visibility:hidden}.image-preview[_ngcontent-%COMP%]{height:5rem;margin:1rem 0}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}"]],data:{}});function E(l){return e.Nb(0,[(l()(),e.sb(0,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),e.Lb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.documentName)}))}function j(l){return e.Nb(0,[(l()(),e.sb(0,0,null,null,12,"ion-header",[],null,null,null,r.bb,r.o)),e.rb(1,49152,null,0,i.A,[e.h,e.k,e.x],null,null),(l()(),e.sb(2,0,null,0,10,"ion-toolbar",[],null,null,null,r.zb,r.M)),e.rb(3,49152,null,0,i.Bb,[e.h,e.k,e.x],null,null),(l()(),e.sb(4,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,r.Q,r.d)),e.rb(5,49152,null,0,i.k,[e.h,e.k,e.x],null,null),(l()(),e.sb(6,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onCancel()&&e),e}),r.P,r.c)),e.rb(7,49152,null,0,i.j,[e.h,e.k,e.x],null,null),(l()(),e.sb(8,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,r.cb,r.p)),e.rb(9,49152,null,0,i.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.sb(10,0,null,0,2,"ion-title",[],null,null,null,r.yb,r.L)),e.rb(11,49152,null,0,i.zb,[e.h,e.k,e.x],null,null),(l()(),e.Lb(-1,0,["Register Account?"])),(l()(),e.sb(13,0,null,null,49,"ion-content",[["class","ion-text-center ion-padding"]],null,null,null,r.X,r.k)),e.rb(14,49152,null,0,i.t,[e.h,e.k,e.x],null,null),(l()(),e.sb(15,0,null,0,47,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Eb(l,17).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Eb(l,17).onReset()&&t),t}),null,null)),e.rb(16,16384,null,0,h.r,[],null,null),e.rb(17,540672,null,0,h.f,[[8,null],[8,null]],{form:[0,"form"]},null),e.Ib(2048,null,h.a,null,[h.f]),e.rb(19,16384,null,0,h.k,[[4,h.a]],null,null),(l()(),e.sb(20,0,null,null,42,"ion-grid",[],null,null,null,r.ab,r.n)),e.rb(21,49152,null,0,i.z,[e.h,e.k,e.x],null,null),(l()(),e.sb(22,0,null,0,11,"ion-row",[],null,null,null,r.ob,r.B)),e.rb(23,49152,null,0,i.ib,[e.h,e.k,e.x],null,null),(l()(),e.sb(24,0,null,0,9,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,r.W,r.j)),e.rb(25,49152,null,0,i.s,[e.h,e.k,e.x],null,null),(l()(),e.sb(26,0,null,0,7,"ion-item",[],null,null,null,r.ib,r.s)),e.rb(27,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.hb(16777216,null,0,1,null,E)),e.rb(29,16384,null,0,y.m,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.sb(30,0,null,0,2,"ion-button",[["color","primary"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Eb(l,33).click()&&t),t}),r.P,r.c)),e.rb(31,49152,null,0,i.j,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Lb(-1,0,["Select a file"])),(l()(),e.sb(33,0,[["filePicker",1]],0,0,"input",[["type","file"]],null,[[null,"change"]],(function(l,n,u){var e=!0;return"change"===n&&(e=!1!==l.component.onDocumentPicked(u)&&e),e}),null,null)),(l()(),e.sb(34,0,null,0,21,"ion-row",[],null,null,null,r.ob,r.B)),e.rb(35,49152,null,0,i.ib,[e.h,e.k,e.x],null,null),(l()(),e.sb(36,0,null,0,19,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,r.W,r.j)),e.rb(37,49152,null,0,i.s,[e.h,e.k,e.x],null,null),(l()(),e.sb(38,0,null,0,17,"ion-item",[],null,null,null,r.ib,r.s)),e.rb(39,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(l()(),e.sb(40,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,r.jb,r.w)),e.rb(41,49152,null,0,i.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Lb(-1,0,["Account Type"])),(l()(),e.sb(43,0,null,0,12,"ion-select",[["formControlName","account_type"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Eb(l,44)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Eb(l,44)._handleChangeEvent(u.target)&&t),t}),r.sb,r.E)),e.rb(44,16384,null,0,i.Lb,[e.k],null,null),e.Ib(1024,null,h.h,(function(l){return[l]}),[i.Lb]),e.rb(46,671744,null,0,h.d,[[3,h.a],[8,null],[8,null],[6,h.h],[2,h.q]],{name:[0,"name"]},null),e.Ib(2048,null,h.i,null,[h.d]),e.rb(48,16384,null,0,h.j,[[4,h.i]],null,null),e.rb(49,49152,null,0,i.mb,[e.h,e.k,e.x],null,null),(l()(),e.sb(50,0,null,0,2,"ion-select-option",[],null,null,null,r.rb,r.F)),e.rb(51,49152,null,0,i.nb,[e.h,e.k,e.x],null,null),(l()(),e.Lb(-1,0,["Student"])),(l()(),e.sb(53,0,null,0,2,"ion-select-option",[],null,null,null,r.rb,r.F)),e.rb(54,49152,null,0,i.nb,[e.h,e.k,e.x],null,null),(l()(),e.Lb(-1,0,["Staff"])),(l()(),e.sb(56,0,null,0,6,"ion-row",[],null,null,null,r.ob,r.B)),e.rb(57,49152,null,0,i.ib,[e.h,e.k,e.x],null,null),(l()(),e.sb(58,0,null,0,4,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,r.W,r.j)),e.rb(59,49152,null,0,i.s,[e.h,e.k,e.x],null,null),(l()(),e.sb(60,0,null,0,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onAddUser()&&e),e}),r.P,r.c)),e.rb(61,49152,null,0,i.j,[e.h,e.k,e.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),e.Lb(-1,0,["Create"]))],(function(l,n){var u=n.component;l(n,9,0,"close"),l(n,17,0,u.registerForm),l(n,29,0,""!==u.documentName&&u.documentName&&u.registerForm.get("attachment").valid),l(n,31,0,"primary"),l(n,41,0,"floating"),l(n,46,0,"account_type"),l(n,61,0,"primary",!u.registerForm.valid,"block")}),(function(l,n){l(n,15,0,e.Eb(n,19).ngClassUntouched,e.Eb(n,19).ngClassTouched,e.Eb(n,19).ngClassPristine,e.Eb(n,19).ngClassDirty,e.Eb(n,19).ngClassValid,e.Eb(n,19).ngClassInvalid,e.Eb(n,19).ngClassPending),l(n,43,0,e.Eb(n,48).ngClassUntouched,e.Eb(n,48).ngClassTouched,e.Eb(n,48).ngClassPristine,e.Eb(n,48).ngClassDirty,e.Eb(n,48).ngClassValid,e.Eb(n,48).ngClassInvalid,e.Eb(n,48).ngClassPending)}))}function P(l){return e.Nb(0,[(l()(),e.sb(0,0,null,null,1,"app-preregister-account",[],null,null,null,j,w)),e.rb(1,114688,null,0,g,[i.a,i.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var F=e.ob("app-preregister-account",g,P,{},{},[]),z=u("POq0"),L=u("Xd0L"),A=u("QQfA"),M=u("IP0z"),N=u("JjoW"),B=u("Mz6y"),I=u("cUpR"),S=u("OIZN"),O=u("7kcP");class D{}var _=u("zQui"),U=u("8rEH"),R=u("HsOI"),H=u("/HVE"),G=u("oapL"),V=u("ZwOa"),W=u("Fwaw"),q=u("zMNK"),J=u("hOhj"),Q=u("5GAg"),Z=u("Gi4r"),T=u("cryg");u.d(n,"UsersPageModuleNgFactory",(function(){return X}));var X=e.pb(t,[],(function(l){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[b.a,x,v.a,F]],[3,e.j],e.v]),e.Cb(4608,y.o,y.n,[e.s,[2,y.B]]),e.Cb(4608,h.p,h.p,[]),e.Cb(4608,i.b,i.b,[e.x,e.g]),e.Cb(4608,i.Gb,i.Gb,[i.b,e.j,e.p]),e.Cb(4608,i.Jb,i.Jb,[i.b,e.j,e.p]),e.Cb(4608,h.b,h.b,[]),e.Cb(4608,z.c,z.c,[]),e.Cb(4608,L.d,L.d,[]),e.Cb(4608,A.c,A.c,[A.h,A.d,e.j,A.g,A.e,e.p,e.x,y.d,M.b,[2,y.i]]),e.Cb(5120,A.i,A.j,[A.c]),e.Cb(5120,N.a,N.b,[A.c]),e.Cb(5120,B.b,B.c,[A.c]),e.Cb(4608,I.e,L.e,[[2,L.i],[2,L.n]]),e.Cb(5120,S.c,S.a,[[3,S.c]]),e.Cb(5120,O.d,O.a,[[3,O.d]]),e.Cb(1073742336,y.c,y.c,[]),e.Cb(1073742336,h.o,h.o,[]),e.Cb(1073742336,h.g,h.g,[]),e.Cb(1073742336,i.Db,i.Db,[]),e.Cb(1073742336,c.p,c.p,[[2,c.u],[2,c.m]]),e.Cb(1073742336,D,D,[]),e.Cb(1073742336,h.m,h.m,[]),e.Cb(1073742336,_.p,_.p,[]),e.Cb(1073742336,M.a,M.a,[]),e.Cb(1073742336,L.n,L.n,[[2,L.f],[2,I.f]]),e.Cb(1073742336,U.m,U.m,[]),e.Cb(1073742336,z.d,z.d,[]),e.Cb(1073742336,R.d,R.d,[]),e.Cb(1073742336,H.b,H.b,[]),e.Cb(1073742336,G.c,G.c,[]),e.Cb(1073742336,V.b,V.b,[]),e.Cb(1073742336,L.w,L.w,[]),e.Cb(1073742336,W.c,W.c,[]),e.Cb(1073742336,q.c,q.c,[]),e.Cb(1073742336,J.b,J.b,[]),e.Cb(1073742336,A.f,A.f,[]),e.Cb(1073742336,L.u,L.u,[]),e.Cb(1073742336,L.s,L.s,[]),e.Cb(1073742336,N.d,N.d,[]),e.Cb(1073742336,Q.a,Q.a,[]),e.Cb(1073742336,B.e,B.e,[]),e.Cb(1073742336,S.d,S.d,[]),e.Cb(1073742336,Z.a,Z.a,[]),e.Cb(1073742336,O.e,O.e,[]),e.Cb(1073742336,T.a,T.a,[]),e.Cb(1073742336,t,t,[]),e.Cb(1024,c.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);