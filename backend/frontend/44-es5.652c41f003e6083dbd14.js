(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"vd/f":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),o=u("oBZk"),b=u("ZZ/e"),s=u("gIcY"),a=u("Ip0R"),r=u("2WpN"),c=u("go/B"),g=function(){function l(l,n,u,e){this.alertCtrl=l,this.loadingCtrl=n,this.lecturerService=u,this.router=e}return l.prototype.ngOnInit=function(){this.answerForm=new s.e({course_code:new s.c(null,s.n.required),result_type:new s.c(null,s.n.required),session:new s.c(null,s.n.required),semester:new s.c(null,s.n.required),attachment:new s.c(null,s.n.required)})},l.prototype.onDocumentPicked=function(l){var n=this,u=l.target.files[0];this.documentName=u.name,this.answerForm.patchValue({attachment:u}),this.answerForm.get("attachment").updateValueAndValidity();var e=new FileReader;e.onload=function(){n.documentPreview=e.result},e.readAsDataURL(u)},l.prototype.onSubmitResult=function(){var l=this;this.answerForm.valid&&this.alertCtrl.create({header:"Confirm",message:"Do you want to continue?",buttons:[{text:"Cancel",role:"cancel"},{text:"Continue",handler:function(){l.loadingCtrl.create({spinner:"lines-small",message:"Uploading Result..."}).then((function(n){n.present(),l.lecturerService.uploadTestResult(l.answerForm.value.attachment,l.answerForm.value.course_code,l.answerForm.value.result_type,l.answerForm.value.session,l.answerForm.value.semester).pipe(Object(r.a)((function(){n.dismiss()}))).subscribe((function(n){l.alertCtrl.create({header:"Success",message:n.message,buttons:["Okay"]}).then((function(l){l.present()}))}))}))}}]}).then((function(l){l.present()}))},l.prototype.onCancel=function(){this.router.navigateByUrl("/staff/assignments")},l}(),d=u("ZYCi"),h=e.tb({encapsulation:0,styles:[["input[type=file][_ngcontent-%COMP%]{visibility:hidden}.image-preview[_ngcontent-%COMP%]{height:5rem;margin:1rem 0}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}"]],data:{}});function v(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),e.Ob(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.documentName)}))}function m(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,17,"ion-header",[],null,null,null,o.bb,o.o)),e.ub(1,49152,null,0,b.A,[e.h,e.k,e.A],null,null),(l()(),e.vb(2,0,null,0,15,"ion-toolbar",[],null,null,null,o.zb,o.M)),e.ub(3,49152,null,0,b.Bb,[e.h,e.k,e.A],null,null),(l()(),e.vb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.Q,o.d)),e.ub(5,49152,null,0,b.k,[e.h,e.k,e.A],null,null),(l()(),e.vb(6,0,null,0,2,"ion-back-button",[["defaultHref","/staff/assignments"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Hb(l,8).onClick(u)&&t),t}),o.O,o.b)),e.ub(7,49152,null,0,b.f,[e.h,e.k,e.A],{defaultHref:[0,"defaultHref"]},null),e.ub(8,16384,null,0,b.g,[[2,b.hb],b.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.vb(9,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,o.Q,o.d)),e.ub(10,49152,null,0,b.k,[e.h,e.k,e.A],null,null),(l()(),e.vb(11,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onCancel()&&e),e}),o.P,o.c)),e.ub(12,49152,null,0,b.j,[e.h,e.k,e.A],null,null),(l()(),e.vb(13,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,o.cb,o.p)),e.ub(14,49152,null,0,b.B,[e.h,e.k,e.A],{name:[0,"name"]},null),(l()(),e.vb(15,0,null,0,2,"ion-title",[],null,null,null,o.yb,o.L)),e.ub(16,49152,null,0,b.zb,[e.h,e.k,e.A],null,null),(l()(),e.Ob(-1,0,["Test Result Upload"])),(l()(),e.vb(18,0,null,null,120,"ion-content",[["class","ion-text-center ion-padding"]],null,null,null,o.X,o.k)),e.ub(19,49152,null,0,b.t,[e.h,e.k,e.A],null,null),(l()(),e.vb(20,0,null,0,118,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Hb(l,22).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Hb(l,22).onReset()&&t),t}),null,null)),e.ub(21,16384,null,0,s.r,[],null,null),e.ub(22,540672,null,0,s.f,[[8,null],[8,null]],{form:[0,"form"]},null),e.Lb(2048,null,s.a,null,[s.f]),e.ub(24,16384,null,0,s.k,[[4,s.a]],null,null),(l()(),e.vb(25,0,null,null,113,"ion-grid",[],null,null,null,o.ab,o.n)),e.ub(26,49152,null,0,b.z,[e.h,e.k,e.A],null,null),(l()(),e.vb(27,0,null,0,15,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(28,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(29,0,null,0,13,"ion-col",[["offset-sm","3"],["size","12"],["size-sm","6"]],null,null,null,o.W,o.j)),e.ub(30,49152,null,0,b.s,[e.h,e.k,e.A],{size:[0,"size"]},null),(l()(),e.vb(31,0,null,0,11,"ion-item",[],null,null,null,o.ib,o.s)),e.ub(32,49152,null,0,b.G,[e.h,e.k,e.A],null,null),(l()(),e.vb(33,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.jb,o.w)),e.ub(34,49152,null,0,b.M,[e.h,e.k,e.A],{position:[0,"position"]},null),(l()(),e.Ob(-1,0,["Course Code"])),(l()(),e.vb(36,0,null,0,6,"ion-input",[["formControlName","course_code"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Hb(l,37)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Hb(l,37)._handleInputEvent(u.target)&&t),t}),o.eb,o.r)),e.ub(37,16384,null,0,b.Mb,[e.k],null,null),e.Lb(1024,null,s.h,(function(l){return[l]}),[b.Mb]),e.ub(39,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),e.Lb(2048,null,s.i,null,[s.d]),e.ub(41,16384,null,0,s.j,[[4,s.i]],null,null),e.ub(42,49152,null,0,b.F,[e.h,e.k,e.A],{type:[0,"type"]},null),(l()(),e.vb(43,0,null,0,21,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(44,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(45,0,null,0,19,"ion-col",[["offset-sm","3"],["size","12"],["size-sm","6"]],null,null,null,o.W,o.j)),e.ub(46,49152,null,0,b.s,[e.h,e.k,e.A],{size:[0,"size"]},null),(l()(),e.vb(47,0,null,0,17,"ion-item",[],null,null,null,o.ib,o.s)),e.ub(48,49152,null,0,b.G,[e.h,e.k,e.A],null,null),(l()(),e.vb(49,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.jb,o.w)),e.ub(50,49152,null,0,b.M,[e.h,e.k,e.A],{position:[0,"position"]},null),(l()(),e.Ob(-1,0,["Result Type"])),(l()(),e.vb(52,0,null,0,12,"ion-select",[["formControlName","result_type"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Hb(l,53)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Hb(l,53)._handleChangeEvent(u.target)&&t),t}),o.sb,o.E)),e.ub(53,16384,null,0,b.Lb,[e.k],null,null),e.Lb(1024,null,s.h,(function(l){return[l]}),[b.Lb]),e.ub(55,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),e.Lb(2048,null,s.i,null,[s.d]),e.ub(57,16384,null,0,s.j,[[4,s.i]],null,null),e.ub(58,49152,null,0,b.mb,[e.h,e.k,e.A],null,null),(l()(),e.vb(59,0,null,0,2,"ion-select-option",[["value","Test"]],null,null,null,o.rb,o.F)),e.ub(60,49152,null,0,b.nb,[e.h,e.k,e.A],{value:[0,"value"]},null),(l()(),e.Ob(-1,0,["Test"])),(l()(),e.vb(62,0,null,0,2,"ion-select-option",[["value","Assignment"]],null,null,null,o.rb,o.F)),e.ub(63,49152,null,0,b.nb,[e.h,e.k,e.A],{value:[0,"value"]},null),(l()(),e.Ob(-1,0,["Assignment"])),(l()(),e.vb(65,0,null,0,18,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(66,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(67,0,null,0,16,"ion-col",[["offset-sm","3"],["size","12"],["size-sm","6"]],null,null,null,o.W,o.j)),e.ub(68,49152,null,0,b.s,[e.h,e.k,e.A],{size:[0,"size"]},null),(l()(),e.vb(69,0,null,0,14,"ion-item",[],null,null,null,o.ib,o.s)),e.ub(70,49152,null,0,b.G,[e.h,e.k,e.A],null,null),(l()(),e.vb(71,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.jb,o.w)),e.ub(72,49152,null,0,b.M,[e.h,e.k,e.A],{position:[0,"position"]},null),(l()(),e.Ob(-1,0,["Session"])),(l()(),e.vb(74,0,null,0,9,"ion-select",[["formControlName","session"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Hb(l,75)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Hb(l,75)._handleChangeEvent(u.target)&&t),t}),o.sb,o.E)),e.ub(75,16384,null,0,b.Lb,[e.k],null,null),e.Lb(1024,null,s.h,(function(l){return[l]}),[b.Lb]),e.ub(77,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),e.Lb(2048,null,s.i,null,[s.d]),e.ub(79,16384,null,0,s.j,[[4,s.i]],null,null),e.ub(80,49152,null,0,b.mb,[e.h,e.k,e.A],null,null),(l()(),e.vb(81,0,null,0,2,"ion-select-option",[["value","2019/2020"]],null,null,null,o.rb,o.F)),e.ub(82,49152,null,0,b.nb,[e.h,e.k,e.A],{value:[0,"value"]},null),(l()(),e.Ob(-1,0,["2019/2020"])),(l()(),e.vb(84,0,null,0,21,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(85,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(86,0,null,0,19,"ion-col",[["offset-sm","3"],["size","12"],["size-sm","6"]],null,null,null,o.W,o.j)),e.ub(87,49152,null,0,b.s,[e.h,e.k,e.A],{size:[0,"size"]},null),(l()(),e.vb(88,0,null,0,17,"ion-item",[],null,null,null,o.ib,o.s)),e.ub(89,49152,null,0,b.G,[e.h,e.k,e.A],null,null),(l()(),e.vb(90,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.jb,o.w)),e.ub(91,49152,null,0,b.M,[e.h,e.k,e.A],{position:[0,"position"]},null),(l()(),e.Ob(-1,0,["Semester"])),(l()(),e.vb(93,0,null,0,12,"ion-select",[["formControlName","semester"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Hb(l,94)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Hb(l,94)._handleChangeEvent(u.target)&&t),t}),o.sb,o.E)),e.ub(94,16384,null,0,b.Lb,[e.k],null,null),e.Lb(1024,null,s.h,(function(l){return[l]}),[b.Lb]),e.ub(96,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),e.Lb(2048,null,s.i,null,[s.d]),e.ub(98,16384,null,0,s.j,[[4,s.i]],null,null),e.ub(99,49152,null,0,b.mb,[e.h,e.k,e.A],null,null),(l()(),e.vb(100,0,null,0,2,"ion-select-option",[["value","Rain"]],null,null,null,o.rb,o.F)),e.ub(101,49152,null,0,b.nb,[e.h,e.k,e.A],{value:[0,"value"]},null),(l()(),e.Ob(-1,0,["Rain"])),(l()(),e.vb(103,0,null,0,2,"ion-select-option",[["value","Harmattan"]],null,null,null,o.rb,o.F)),e.ub(104,49152,null,0,b.nb,[e.h,e.k,e.A],{value:[0,"value"]},null),(l()(),e.Ob(-1,0,["Harmattan"])),(l()(),e.vb(106,0,null,0,11,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(107,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(108,0,null,0,9,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,o.W,o.j)),e.ub(109,49152,null,0,b.s,[e.h,e.k,e.A],null,null),(l()(),e.vb(110,0,null,0,7,"ion-item",[["lines","none"]],null,null,null,o.ib,o.s)),e.ub(111,49152,null,0,b.G,[e.h,e.k,e.A],{lines:[0,"lines"]},null),(l()(),e.kb(16777216,null,0,1,null,v)),e.ub(113,16384,null,0,a.m,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.vb(114,0,null,0,2,"ion-button",[["color","primary"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Hb(l,117).click()&&t),t}),o.P,o.c)),e.ub(115,49152,null,0,b.j,[e.h,e.k,e.A],{color:[0,"color"]},null),(l()(),e.Ob(-1,0,["Pick a Scoresheet"])),(l()(),e.vb(117,0,[["filePicker",1]],0,0,"input",[["type","file"]],null,[[null,"change"]],(function(l,n,u){var e=!0;return"change"===n&&(e=!1!==l.component.onDocumentPicked(u)&&e),e}),null,null)),(l()(),e.vb(118,0,null,0,13,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(119,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(120,0,null,0,11,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,o.W,o.j)),e.ub(121,49152,null,0,b.s,[e.h,e.k,e.A],null,null),(l()(),e.vb(122,0,null,0,9,"ion-item",[],null,null,null,o.ib,o.s)),e.ub(123,49152,null,0,b.G,[e.h,e.k,e.A],null,null),(l()(),e.vb(124,0,null,0,7,"ion-text",[],null,null,null,o.wb,o.J)),e.ub(125,49152,null,0,b.wb,[e.h,e.k,e.A],null,null),(l()(),e.vb(126,0,null,0,5,"ion-label",[],null,null,null,o.jb,o.w)),e.ub(127,49152,null,0,b.M,[e.h,e.k,e.A],null,null),(l()(),e.vb(128,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Note:"])),(l()(),e.vb(130,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Only .csv file is allowed! "])),(l()(),e.vb(132,0,null,0,6,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(133,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(134,0,null,0,4,"ion-col",[["offset-sm","3"],["size-sm","6"]],null,null,null,o.W,o.j)),e.ub(135,49152,null,0,b.s,[e.h,e.k,e.A],null,null),(l()(),e.vb(136,0,null,0,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmitResult()&&e),e}),o.P,o.c)),e.ub(137,49152,null,0,b.j,[e.h,e.k,e.A],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),e.Ob(-1,0,["Submit"]))],(function(l,n){var u=n.component;l(n,7,0,"/staff/assignments"),l(n,8,0,"/staff/assignments"),l(n,14,0,"close"),l(n,22,0,u.answerForm),l(n,30,0,"12"),l(n,34,0,"floating"),l(n,39,0,"course_code"),l(n,42,0,"text"),l(n,46,0,"12"),l(n,50,0,"floating"),l(n,55,0,"result_type"),l(n,60,0,"Test"),l(n,63,0,"Assignment"),l(n,68,0,"12"),l(n,72,0,"floating"),l(n,77,0,"session"),l(n,82,0,"2019/2020"),l(n,87,0,"12"),l(n,91,0,"floating"),l(n,96,0,"semester"),l(n,101,0,"Rain"),l(n,104,0,"Harmattan"),l(n,111,0,"none"),l(n,113,0,""!==u.documentName&&u.documentName&&u.answerForm.get("attachment").valid),l(n,115,0,"primary"),l(n,137,0,"primary",!u.answerForm.valid,"block")}),(function(l,n){l(n,20,0,e.Hb(n,24).ngClassUntouched,e.Hb(n,24).ngClassTouched,e.Hb(n,24).ngClassPristine,e.Hb(n,24).ngClassDirty,e.Hb(n,24).ngClassValid,e.Hb(n,24).ngClassInvalid,e.Hb(n,24).ngClassPending),l(n,36,0,e.Hb(n,41).ngClassUntouched,e.Hb(n,41).ngClassTouched,e.Hb(n,41).ngClassPristine,e.Hb(n,41).ngClassDirty,e.Hb(n,41).ngClassValid,e.Hb(n,41).ngClassInvalid,e.Hb(n,41).ngClassPending),l(n,52,0,e.Hb(n,57).ngClassUntouched,e.Hb(n,57).ngClassTouched,e.Hb(n,57).ngClassPristine,e.Hb(n,57).ngClassDirty,e.Hb(n,57).ngClassValid,e.Hb(n,57).ngClassInvalid,e.Hb(n,57).ngClassPending),l(n,74,0,e.Hb(n,79).ngClassUntouched,e.Hb(n,79).ngClassTouched,e.Hb(n,79).ngClassPristine,e.Hb(n,79).ngClassDirty,e.Hb(n,79).ngClassValid,e.Hb(n,79).ngClassInvalid,e.Hb(n,79).ngClassPending),l(n,93,0,e.Hb(n,98).ngClassUntouched,e.Hb(n,98).ngClassTouched,e.Hb(n,98).ngClassPristine,e.Hb(n,98).ngClassDirty,e.Hb(n,98).ngClassValid,e.Hb(n,98).ngClassInvalid,e.Hb(n,98).ngClassPending)}))}function f(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,1,"app-test-result",[],null,null,null,m,h)),e.ub(1,114688,null,0,g,[b.a,b.Fb,c.a,d.m],null,null)],(function(l,n){l(n,1,0)}),null)}var p=e.rb("app-test-result",g,f,{},{},[]),k=function(){return function(){}}();u.d(n,"TestResultPageModuleNgFactory",(function(){return C}));var C=e.sb(t,[],(function(l){return e.Eb([e.Fb(512,e.j,e.db,[[8,[i.a,p]],[3,e.j],e.y]),e.Fb(4608,a.o,a.n,[e.v,[2,a.B]]),e.Fb(4608,s.p,s.p,[]),e.Fb(4608,s.b,s.b,[]),e.Fb(4608,b.b,b.b,[e.A,e.g]),e.Fb(4608,b.Gb,b.Gb,[b.b,e.j,e.r]),e.Fb(4608,b.Jb,b.Jb,[b.b,e.j,e.r]),e.Fb(1073742336,a.c,a.c,[]),e.Fb(1073742336,s.o,s.o,[]),e.Fb(1073742336,s.g,s.g,[]),e.Fb(1073742336,s.m,s.m,[]),e.Fb(1073742336,b.Db,b.Db,[]),e.Fb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),e.Fb(1073742336,k,k,[]),e.Fb(1073742336,t,t,[]),e.Fb(1024,d.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);