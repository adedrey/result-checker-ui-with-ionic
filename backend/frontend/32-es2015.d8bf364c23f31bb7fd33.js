(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{SkgG:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var s=u("pMnS"),i=u("SVse"),o=u("oBZk"),r=u("ZZ/e"),b=u("s7LF");class a{constructor(l,n){this.modalCtrl=l,this.alertCtrl=n}ngOnInit(){this.answerForm=new b.e({attachment:new b.c(null,b.n.required)})}onDocumentPicked(l){const n=l.target.files[0];this.documentName=n.name,this.answerForm.patchValue({attachment:n}),this.answerForm.get("attachment").updateValueAndValidity();const u=new FileReader;u.onload=()=>{this.documentPreview=u.result},u.readAsDataURL(n)}onSubmitAnswer(){this.answerForm.valid&&this.alertCtrl.create({header:"Confirm",message:"Do you want to continue?",buttons:[{text:"Cancel",role:"cancel"},{text:"Continue",handler:()=>{this.modalCtrl.dismiss({postData:{assignmentId:this.selectedAssignment._id,attachment:this.answerForm.value.attachment,attachmentString:this.documentPreview}},"confirm")}}]}).then(l=>{l.present()})}onCancel(){this.modalCtrl.dismiss(null,"cancel")}}var c=u("t8u9"),m=u("nYR2");class d{constructor(l,n,u,t,e){this.assignmentService=l,this.route=n,this.modalCtrl=u,this.loadingCtrl=t,this.alertCtrl=e,this.submitted=!1}ngOnInit(){this.assignmentService.getAssignments(),this.route.params.subscribe(l=>{l.assignmentId&&(this.assignmentId=l.assignmentId,this.loadingCtrl.create().then(l=>{l.present(),this.assignmentService.getAssignmentById(this.assignmentId).subscribe(n=>{l.dismiss(),this.assignment=n.assignment})}))})}onSubmitAnswer(){this.modalCtrl.create({component:a,componentProps:{selectedAssignment:this.assignment}}).then(l=>(l.present(),l.onDidDismiss())).then(l=>{console.log(l),"confirm"===l.role&&this.loadingCtrl.create({spinner:"lines-small",message:"Submitting Assignment..."}).then(n=>{n.present();const u=l.data.postData;this.assignmentService.submitAssignment(u.assignmentId,u.attachment,u.attachmentString).pipe(Object(m.a)(()=>{n.dismiss()})).subscribe(l=>{this.alertCtrl.create({header:"Success",message:l.message,buttons:["Okay"]}).then(l=>{l.present()})})})})}}var h=u("iInd"),g=t.qb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Nb(0,[t.Gb(0,i.e,[t.s]),(l()(),t.sb(1,0,null,null,11,"ion-header",[],null,null,null,o.bb,o.o)),t.rb(2,49152,null,0,r.A,[t.h,t.k,t.x],null,null),(l()(),t.sb(3,0,null,0,9,"ion-toolbar",[],null,null,null,o.zb,o.M)),t.rb(4,49152,null,0,r.Bb,[t.h,t.k,t.x],null,null),(l()(),t.sb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.Q,o.d)),t.rb(6,49152,null,0,r.k,[t.h,t.k,t.x],null,null),(l()(),t.sb(7,0,null,0,2,"ion-back-button",[["defaultHref","/forum/tabs/assignments"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Eb(l,9).onClick(u)&&e),e}),o.O,o.b)),t.rb(8,49152,null,0,r.f,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.rb(9,16384,null,0,r.g,[[2,r.hb],r.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.sb(10,0,null,0,2,"ion-title",[],null,null,null,o.yb,o.L)),t.rb(11,49152,null,0,r.zb,[t.h,t.k,t.x],null,null),(l()(),t.Lb(12,0,["",""])),(l()(),t.sb(13,0,null,null,24,"ion-content",[],null,null,null,o.X,o.k)),t.rb(14,49152,null,0,r.t,[t.h,t.k,t.x],null,null),(l()(),t.sb(15,0,null,0,22,"ion-grid",[],null,null,null,o.ab,o.n)),t.rb(16,49152,null,0,r.z,[t.h,t.k,t.x],null,null),(l()(),t.sb(17,0,null,0,13,"ion-row",[],null,null,null,o.ob,o.B)),t.rb(18,49152,null,0,r.ib,[t.h,t.k,t.x],null,null),(l()(),t.sb(19,0,null,0,11,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,o.W,o.j)),t.rb(20,49152,null,0,r.s,[t.h,t.k,t.x],null,null),(l()(),t.sb(21,0,null,0,9,"ion-text",[],null,null,null,o.wb,o.J)),t.rb(22,49152,null,0,r.wb,[t.h,t.k,t.x],null,null),(l()(),t.sb(23,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Question"])),(l()(),t.sb(25,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(26,null,["",""])),(l()(),t.sb(27,0,null,0,3,"ion-label",[],null,null,null,o.jb,o.w)),t.rb(28,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.Lb(29,0,["Deadline: ",""])),t.Hb(30,1),(l()(),t.sb(31,0,null,0,6,"ion-row",[],null,null,null,o.ob,o.B)),t.rb(32,49152,null,0,r.ib,[t.h,t.k,t.x],null,null),(l()(),t.sb(33,0,null,0,4,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,o.W,o.j)),t.rb(34,49152,null,0,r.s,[t.h,t.k,t.x],null,null),(l()(),t.sb(35,0,null,0,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onSubmitAnswer()&&t),t}),o.P,o.c)),t.rb(36,49152,null,0,r.j,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),t.Lb(-1,0,["Submit Answer"]))],(function(l,n){l(n,8,0,"/forum/tabs/assignments"),l(n,9,0,"/forum/tabs/assignments"),l(n,36,0,"primary","block")}),(function(l,n){var u=n.component;l(n,12,0,null==u.assignment?null:u.assignment.course_code),l(n,26,0,null==u.assignment?null:u.assignment.question);var e=t.Mb(n,29,0,l(n,30,0,t.Eb(n,0),null==u.assignment?null:u.assignment.submission_date));l(n,29,0,e)}))}function f(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"app-ass-detail",[],null,null,null,p,g)),t.rb(1,114688,null,0,d,[c.a,h.a,r.Gb,r.Fb,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=t.ob("app-ass-detail",d,f,{},{},[]),x=t.qb({encapsulation:0,styles:[["input[type=file][_ngcontent-%COMP%]{visibility:hidden}.image-preview[_ngcontent-%COMP%]{height:5rem;margin:1rem 0}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}"]],data:{}});function C(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Lb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.documentName)}))}function w(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"div",[["class","image-preview"]],null,null,null,null,null)),(l()(),t.sb(1,0,null,null,0,"img",[["alt","document"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,1,0,n.component.documentPreview)}))}function v(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,12,"ion-header",[],null,null,null,o.bb,o.o)),t.rb(1,49152,null,0,r.A,[t.h,t.k,t.x],null,null),(l()(),t.sb(2,0,null,0,10,"ion-toolbar",[],null,null,null,o.zb,o.M)),t.rb(3,49152,null,0,r.Bb,[t.h,t.k,t.x],null,null),(l()(),t.sb(4,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,o.Q,o.d)),t.rb(5,49152,null,0,r.k,[t.h,t.k,t.x],null,null),(l()(),t.sb(6,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onCancel()&&t),t}),o.P,o.c)),t.rb(7,49152,null,0,r.j,[t.h,t.k,t.x],null,null),(l()(),t.sb(8,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,o.cb,o.p)),t.rb(9,49152,null,0,r.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.sb(10,0,null,0,2,"ion-title",[],null,null,null,o.yb,o.L)),t.rb(11,49152,null,0,r.zb,[t.h,t.k,t.x],null,null),(l()(),t.Lb(12,0,["",""])),(l()(),t.sb(13,0,null,null,43,"ion-content",[["class","ion-text-center ion-padding"]],null,null,null,o.X,o.k)),t.rb(14,49152,null,0,r.t,[t.h,t.k,t.x],null,null),(l()(),t.sb(15,0,null,0,41,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Eb(l,17).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Eb(l,17).onReset()&&e),e}),null,null)),t.rb(16,16384,null,0,b.r,[],null,null),t.rb(17,540672,null,0,b.f,[[8,null],[8,null]],{form:[0,"form"]},null),t.Ib(2048,null,b.a,null,[b.f]),t.rb(19,16384,null,0,b.k,[[4,b.a]],null,null),(l()(),t.sb(20,0,null,null,36,"ion-grid",[],null,null,null,o.ab,o.n)),t.rb(21,49152,null,0,r.z,[t.h,t.k,t.x],null,null),(l()(),t.sb(22,0,null,0,13,"ion-row",[],null,null,null,o.ob,o.B)),t.rb(23,49152,null,0,r.ib,[t.h,t.k,t.x],null,null),(l()(),t.sb(24,0,null,0,11,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,o.W,o.j)),t.rb(25,49152,null,0,r.s,[t.h,t.k,t.x],null,null),(l()(),t.sb(26,0,null,0,9,"ion-item",[["lines","none"]],null,null,null,o.ib,o.s)),t.rb(27,49152,null,0,r.G,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.hb(16777216,null,0,1,null,C)),t.rb(29,16384,null,0,i.m,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(30,0,null,0,2,"ion-button",[["color","primary"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Eb(l,33).click()&&e),e}),o.P,o.c)),t.rb(31,49152,null,0,r.j,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.Lb(-1,0,["Pick a document"])),(l()(),t.sb(33,0,[["filePicker",1]],0,0,"input",[["type","file"]],null,[[null,"change"]],(function(l,n,u){var t=!0;return"change"===n&&(t=!1!==l.component.onDocumentPicked(u)&&t),t}),null,null)),(l()(),t.hb(16777216,null,0,1,null,w)),t.rb(35,16384,null,0,i.m,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.sb(36,0,null,0,13,"ion-row",[],null,null,null,o.ob,o.B)),t.rb(37,49152,null,0,r.ib,[t.h,t.k,t.x],null,null),(l()(),t.sb(38,0,null,0,11,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,o.W,o.j)),t.rb(39,49152,null,0,r.s,[t.h,t.k,t.x],null,null),(l()(),t.sb(40,0,null,0,9,"ion-item",[],null,null,null,o.ib,o.s)),t.rb(41,49152,null,0,r.G,[t.h,t.k,t.x],null,null),(l()(),t.sb(42,0,null,0,7,"ion-text",[],null,null,null,o.wb,o.J)),t.rb(43,49152,null,0,r.wb,[t.h,t.k,t.x],null,null),(l()(),t.sb(44,0,null,0,5,"ion-label",[],null,null,null,o.jb,o.w)),t.rb(45,49152,null,0,r.M,[t.h,t.k,t.x],null,null),(l()(),t.sb(46,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Note:"])),(l()(),t.sb(48,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Only .doc, .docs, .pdf is allowed! "])),(l()(),t.sb(50,0,null,0,6,"ion-row",[],null,null,null,o.ob,o.B)),t.rb(51,49152,null,0,r.ib,[t.h,t.k,t.x],null,null),(l()(),t.sb(52,0,null,0,4,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,o.W,o.j)),t.rb(53,49152,null,0,r.s,[t.h,t.k,t.x],null,null),(l()(),t.sb(54,0,null,0,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onSubmitAnswer()&&t),t}),o.P,o.c)),t.rb(55,49152,null,0,r.j,[t.h,t.k,t.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),t.Lb(-1,0,["Submit"]))],(function(l,n){var u=n.component;l(n,9,0,"close"),l(n,17,0,u.answerForm),l(n,27,0,"none"),l(n,29,0,""!==u.documentName&&u.documentName&&u.answerForm.get("attachment").valid),l(n,31,0,"primary"),l(n,35,0,""!==u.documentPreview&&u.documentPreview&&u.answerForm.get("attachment").valid),l(n,55,0,"primary",!u.answerForm.valid,"block")}),(function(l,n){var u=n.component;l(n,12,0,null==u.selectedAssignment?null:u.selectedAssignment.course_code),l(n,15,0,t.Eb(n,19).ngClassUntouched,t.Eb(n,19).ngClassTouched,t.Eb(n,19).ngClassPristine,t.Eb(n,19).ngClassDirty,t.Eb(n,19).ngClassValid,t.Eb(n,19).ngClassInvalid,t.Eb(n,19).ngClassPending)}))}function y(l){return t.Nb(0,[(l()(),t.sb(0,0,null,null,1,"app-submit-assignment",[],null,null,null,v,x)),t.rb(1,114688,null,0,a,[r.Gb,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var P=t.ob("app-submit-assignment",a,y,{selectedAssignment:"selectedAssignment"},{},[]);class A{}u.d(n,"AssDetailPageModuleNgFactory",(function(){return S}));var S=t.pb(e,[],(function(l){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[s.a,k,P]],[3,t.j],t.v]),t.Cb(4608,i.o,i.n,[t.s,[2,i.B]]),t.Cb(4608,b.p,b.p,[]),t.Cb(4608,r.b,r.b,[t.x,t.g]),t.Cb(4608,r.Gb,r.Gb,[r.b,t.j,t.p]),t.Cb(4608,r.Jb,r.Jb,[r.b,t.j,t.p]),t.Cb(4608,b.b,b.b,[]),t.Cb(1073742336,i.c,i.c,[]),t.Cb(1073742336,b.o,b.o,[]),t.Cb(1073742336,b.g,b.g,[]),t.Cb(1073742336,r.Db,r.Db,[]),t.Cb(1073742336,h.p,h.p,[[2,h.u],[2,h.m]]),t.Cb(1073742336,A,A,[]),t.Cb(1073742336,b.m,b.m,[]),t.Cb(1073742336,e,e,[]),t.Cb(1024,h.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);