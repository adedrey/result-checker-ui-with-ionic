(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{k57B:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),o=u("oBZk"),b=u("ZZ/e"),s=u("gIcY"),r=u("tgvp"),a=function(){function l(l,n,u){this.alertCtrl=l,this.staffAuthService=n,this.loadingCtrl=u}return l.prototype.ngOnInit=function(){var l=this;this.init(),this.loadingCtrl.create({spinner:"dots"}).then((function(n){n.present(),l.staffAuthService.getProfile().subscribe((function(u){n.dismiss(),l.lecturer=u.lecturer,l.signupForm.setValue({name:l.lecturer.name,rank:l.lecturer.rank,department:l.lecturer.department,password:null,newpassword:null})}))}))},l.prototype.init=function(){this.signupForm=new s.e({name:new s.c(null,[s.n.required]),rank:new s.c(null,[s.n.required]),department:new s.c(null,[s.n.required]),password:new s.c(null),newpassword:new s.c(null,[s.n.minLength(8)])})},l.prototype.onSubmit=function(){var l=this;if(this.signupForm.valid){var n=this.signupForm.value.name,u=this.signupForm.value.rank,e=this.signupForm.value.department,t=this.signupForm.value.password,i=this.signupForm.value.newpassword;if(null!==i&&null==t||null!==t&&null==i)return this.alertCtrl.create({header:"Error",message:"Please fill the password field.",buttons:["Dismiss"]}).then((function(l){l.present()}));this.alertCtrl.create({header:"Confirm!",message:"Do you want to continue?",buttons:[{text:"Cancel",role:"cancel"},{text:"Continue",handler:function(){l.loadingCtrl.create({spinner:"dots"}).then((function(o){o.present(),l.staffAuthService.changeProfile(n,u,e,t,i).subscribe((function(n){o.dismiss(),l.lecturer=n.lecturer,l.signupForm.setValue({name:l.lecturer.name,rank:l.lecturer.rank,department:l.lecturer.department,password:null,newpassword:null}),l.alertCtrl.create({header:"Success",message:n.message,buttons:["OK"]}).then((function(l){l.present()}))}),(function(l){o.dismiss()}))}))}}]}).then((function(l){l.present()}))}},l}(),g=e.tb({encapsulation:0,styles:[[""]],data:{}});function c(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,11,"ion-header",[],null,null,null,o.bb,o.o)),e.ub(1,49152,null,0,b.A,[e.h,e.k,e.A],null,null),(l()(),e.vb(2,0,null,0,9,"ion-toolbar",[],null,null,null,o.zb,o.M)),e.ub(3,49152,null,0,b.Bb,[e.h,e.k,e.A],null,null),(l()(),e.vb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.Q,o.d)),e.ub(5,49152,null,0,b.k,[e.h,e.k,e.A],null,null),(l()(),e.vb(6,0,null,0,2,"ion-back-button",[["defaultHref","/staff"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Hb(l,8).onClick(u)&&t),t}),o.O,o.b)),e.ub(7,49152,null,0,b.f,[e.h,e.k,e.A],{defaultHref:[0,"defaultHref"]},null),e.ub(8,16384,null,0,b.g,[[2,b.hb],b.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.vb(9,0,null,0,2,"ion-title",[],null,null,null,o.yb,o.L)),e.ub(10,49152,null,0,b.zb,[e.h,e.k,e.A],null,null),(l()(),e.Ob(-1,0,["My Profile"])),(l()(),e.vb(12,0,null,null,134,"ion-content",[],null,null,null,o.X,o.k)),e.ub(13,49152,null,0,b.t,[e.h,e.k,e.A],null,null),(l()(),e.vb(14,0,null,0,132,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Hb(l,16).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Hb(l,16).onReset()&&t),t}),null,null)),e.ub(15,16384,null,0,s.r,[],null,null),e.ub(16,540672,null,0,s.f,[[8,null],[8,null]],{form:[0,"form"]},null),e.Lb(2048,null,s.a,null,[s.f]),e.ub(18,16384,null,0,s.k,[[4,s.a]],null,null),(l()(),e.vb(19,0,null,null,127,"ion-grid",[],null,null,null,o.ab,o.n)),e.ub(20,49152,null,0,b.z,[e.h,e.k,e.A],null,null),(l()(),e.vb(21,0,null,0,8,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(22,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(23,0,null,0,6,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,o.W,o.j)),e.ub(24,49152,null,0,b.s,[e.h,e.k,e.A],null,null),(l()(),e.vb(25,0,null,0,4,"ion-text",[],null,null,null,o.wb,o.J)),e.ub(26,49152,null,0,b.wb,[e.h,e.k,e.A],null,null),(l()(),e.vb(27,0,null,0,2,"ion-label",[],null,null,null,o.jb,o.w)),e.ub(28,49152,null,0,b.M,[e.h,e.k,e.A],null,null),(l()(),e.Ob(29,0,["Staff Number: ",""])),(l()(),e.vb(30,0,null,0,8,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(31,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(32,0,null,0,6,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,o.W,o.j)),e.ub(33,49152,null,0,b.s,[e.h,e.k,e.A],null,null),(l()(),e.vb(34,0,null,0,4,"ion-text",[],null,null,null,o.wb,o.J)),e.ub(35,49152,null,0,b.wb,[e.h,e.k,e.A],null,null),(l()(),e.vb(36,0,null,0,2,"ion-label",[],null,null,null,o.jb,o.w)),e.ub(37,49152,null,0,b.M,[e.h,e.k,e.A],null,null),(l()(),e.Ob(38,0,["Email: ",""])),(l()(),e.vb(39,0,null,0,15,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(40,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(41,0,null,0,13,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,o.W,o.j)),e.ub(42,49152,null,0,b.s,[e.h,e.k,e.A],null,null),(l()(),e.vb(43,0,null,0,11,"ion-item",[],null,null,null,o.ib,o.s)),e.ub(44,49152,null,0,b.G,[e.h,e.k,e.A],null,null),(l()(),e.vb(45,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.jb,o.w)),e.ub(46,49152,null,0,b.M,[e.h,e.k,e.A],{position:[0,"position"]},null),(l()(),e.Ob(-1,0,["Name"])),(l()(),e.vb(48,0,null,0,6,"ion-input",[["formControlName","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Hb(l,49)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Hb(l,49)._handleInputEvent(u.target)&&t),t}),o.eb,o.r)),e.ub(49,16384,null,0,b.Mb,[e.k],null,null),e.Lb(1024,null,s.h,(function(l){return[l]}),[b.Mb]),e.ub(51,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),e.Lb(2048,null,s.i,null,[s.d]),e.ub(53,16384,null,0,s.j,[[4,s.i]],null,null),e.ub(54,49152,null,0,b.F,[e.h,e.k,e.A],{type:[0,"type"]},null),(l()(),e.vb(55,0,null,0,30,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(56,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(57,0,null,0,28,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,o.W,o.j)),e.ub(58,49152,null,0,b.s,[e.h,e.k,e.A],null,null),(l()(),e.vb(59,0,null,0,26,"ion-item",[],null,null,null,o.ib,o.s)),e.ub(60,49152,null,0,b.G,[e.h,e.k,e.A],null,null),(l()(),e.vb(61,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.jb,o.w)),e.ub(62,49152,null,0,b.M,[e.h,e.k,e.A],{position:[0,"position"]},null),(l()(),e.Ob(-1,0,["Rank"])),(l()(),e.vb(64,0,null,0,21,"ion-select",[["formControlName","rank"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Hb(l,65)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Hb(l,65)._handleChangeEvent(u.target)&&t),t}),o.sb,o.E)),e.ub(65,16384,null,0,b.Lb,[e.k],null,null),e.Lb(1024,null,s.h,(function(l){return[l]}),[b.Lb]),e.ub(67,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),e.Lb(2048,null,s.i,null,[s.d]),e.ub(69,16384,null,0,s.j,[[4,s.i]],null,null),e.ub(70,49152,null,0,b.mb,[e.h,e.k,e.A],null,null),(l()(),e.vb(71,0,null,0,2,"ion-select-option",[],null,null,null,o.rb,o.F)),e.ub(72,49152,null,0,b.nb,[e.h,e.k,e.A],null,null),(l()(),e.Ob(-1,0,["Professor"])),(l()(),e.vb(74,0,null,0,2,"ion-select-option",[],null,null,null,o.rb,o.F)),e.ub(75,49152,null,0,b.nb,[e.h,e.k,e.A],null,null),(l()(),e.Ob(-1,0,["Associate Professor"])),(l()(),e.vb(77,0,null,0,2,"ion-select-option",[],null,null,null,o.rb,o.F)),e.ub(78,49152,null,0,b.nb,[e.h,e.k,e.A],null,null),(l()(),e.Ob(-1,0,["Doctor"])),(l()(),e.vb(80,0,null,0,2,"ion-select-option",[],null,null,null,o.rb,o.F)),e.ub(81,49152,null,0,b.nb,[e.h,e.k,e.A],null,null),(l()(),e.Ob(-1,0,["Mr"])),(l()(),e.vb(83,0,null,0,2,"ion-select-option",[],null,null,null,o.rb,o.F)),e.ub(84,49152,null,0,b.nb,[e.h,e.k,e.A],null,null),(l()(),e.Ob(-1,0,["Mrs"])),(l()(),e.vb(86,0,null,0,21,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(87,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(88,0,null,0,19,"ion-col",[["offset-sm","2"],["size","12"],["size-sm","8"]],null,null,null,o.W,o.j)),e.ub(89,49152,null,0,b.s,[e.h,e.k,e.A],{size:[0,"size"]},null),(l()(),e.vb(90,0,null,0,17,"ion-item",[],null,null,null,o.ib,o.s)),e.ub(91,49152,null,0,b.G,[e.h,e.k,e.A],null,null),(l()(),e.vb(92,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.jb,o.w)),e.ub(93,49152,null,0,b.M,[e.h,e.k,e.A],{position:[0,"position"]},null),(l()(),e.Ob(-1,0,["Department"])),(l()(),e.vb(95,0,null,0,12,"ion-select",[["formControlName","department"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Hb(l,96)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Hb(l,96)._handleChangeEvent(u.target)&&t),t}),o.sb,o.E)),e.ub(96,16384,null,0,b.Lb,[e.k],null,null),e.Lb(1024,null,s.h,(function(l){return[l]}),[b.Lb]),e.ub(98,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),e.Lb(2048,null,s.i,null,[s.d]),e.ub(100,16384,null,0,s.j,[[4,s.i]],null,null),e.ub(101,49152,null,0,b.mb,[e.h,e.k,e.A],null,null),(l()(),e.vb(102,0,null,0,2,"ion-select-option",[],null,null,null,o.rb,o.F)),e.ub(103,49152,null,0,b.nb,[e.h,e.k,e.A],null,null),(l()(),e.Ob(-1,0,["Computer Science"])),(l()(),e.vb(105,0,null,0,2,"ion-select-option",[],null,null,null,o.rb,o.F)),e.ub(106,49152,null,0,b.nb,[e.h,e.k,e.A],null,null),(l()(),e.Ob(-1,0,["Business Administration"])),(l()(),e.vb(108,0,null,0,15,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(109,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(110,0,null,0,13,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,o.W,o.j)),e.ub(111,49152,null,0,b.s,[e.h,e.k,e.A],null,null),(l()(),e.vb(112,0,null,0,11,"ion-item",[],null,null,null,o.ib,o.s)),e.ub(113,49152,null,0,b.G,[e.h,e.k,e.A],null,null),(l()(),e.vb(114,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.jb,o.w)),e.ub(115,49152,null,0,b.M,[e.h,e.k,e.A],{position:[0,"position"]},null),(l()(),e.Ob(-1,0,["Password"])),(l()(),e.vb(117,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Hb(l,118)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Hb(l,118)._handleInputEvent(u.target)&&t),t}),o.eb,o.r)),e.ub(118,16384,null,0,b.Mb,[e.k],null,null),e.Lb(1024,null,s.h,(function(l){return[l]}),[b.Mb]),e.ub(120,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),e.Lb(2048,null,s.i,null,[s.d]),e.ub(122,16384,null,0,s.j,[[4,s.i]],null,null),e.ub(123,49152,null,0,b.F,[e.h,e.k,e.A],{type:[0,"type"]},null),(l()(),e.vb(124,0,null,0,15,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(125,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(126,0,null,0,13,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,o.W,o.j)),e.ub(127,49152,null,0,b.s,[e.h,e.k,e.A],null,null),(l()(),e.vb(128,0,null,0,11,"ion-item",[],null,null,null,o.ib,o.s)),e.ub(129,49152,null,0,b.G,[e.h,e.k,e.A],null,null),(l()(),e.vb(130,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,o.jb,o.w)),e.ub(131,49152,null,0,b.M,[e.h,e.k,e.A],{position:[0,"position"]},null),(l()(),e.Ob(-1,0,["New Password"])),(l()(),e.vb(133,0,null,0,6,"ion-input",[["formControlName","newpassword"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Hb(l,134)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Hb(l,134)._handleInputEvent(u.target)&&t),t}),o.eb,o.r)),e.ub(134,16384,null,0,b.Mb,[e.k],null,null),e.Lb(1024,null,s.h,(function(l){return[l]}),[b.Mb]),e.ub(136,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.q]],{name:[0,"name"]},null),e.Lb(2048,null,s.i,null,[s.d]),e.ub(138,16384,null,0,s.j,[[4,s.i]],null,null),e.ub(139,49152,null,0,b.F,[e.h,e.k,e.A],{type:[0,"type"]},null),(l()(),e.vb(140,0,null,0,6,"ion-row",[],null,null,null,o.ob,o.B)),e.ub(141,49152,null,0,b.ib,[e.h,e.k,e.A],null,null),(l()(),e.vb(142,0,null,0,4,"ion-col",[["offset-sm","2"],["size-sm","8"]],null,null,null,o.W,o.j)),e.ub(143,49152,null,0,b.s,[e.h,e.k,e.A],null,null),(l()(),e.vb(144,0,null,0,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmit()&&e),e}),o.P,o.c)),e.ub(145,49152,null,0,b.j,[e.h,e.k,e.A],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),e.Ob(-1,0,["Save Changes"]))],(function(l,n){var u=n.component;l(n,7,0,"/staff"),l(n,8,0,"/staff"),l(n,16,0,u.signupForm),l(n,46,0,"floating"),l(n,51,0,"name"),l(n,54,0,"text"),l(n,62,0,"floating"),l(n,67,0,"rank"),l(n,89,0,"12"),l(n,93,0,"floating"),l(n,98,0,"department"),l(n,115,0,"floating"),l(n,120,0,"password"),l(n,123,0,"password"),l(n,131,0,"floating"),l(n,136,0,"newpassword"),l(n,139,0,"password"),l(n,145,0,"primary",!u.signupForm.valid,"block")}),(function(l,n){var u=n.component;l(n,14,0,e.Hb(n,18).ngClassUntouched,e.Hb(n,18).ngClassTouched,e.Hb(n,18).ngClassPristine,e.Hb(n,18).ngClassDirty,e.Hb(n,18).ngClassValid,e.Hb(n,18).ngClassInvalid,e.Hb(n,18).ngClassPending),l(n,29,0,null==u.lecturer?null:u.lecturer.staff_no),l(n,38,0,null==u.lecturer?null:u.lecturer.email),l(n,48,0,e.Hb(n,53).ngClassUntouched,e.Hb(n,53).ngClassTouched,e.Hb(n,53).ngClassPristine,e.Hb(n,53).ngClassDirty,e.Hb(n,53).ngClassValid,e.Hb(n,53).ngClassInvalid,e.Hb(n,53).ngClassPending),l(n,64,0,e.Hb(n,69).ngClassUntouched,e.Hb(n,69).ngClassTouched,e.Hb(n,69).ngClassPristine,e.Hb(n,69).ngClassDirty,e.Hb(n,69).ngClassValid,e.Hb(n,69).ngClassInvalid,e.Hb(n,69).ngClassPending),l(n,95,0,e.Hb(n,100).ngClassUntouched,e.Hb(n,100).ngClassTouched,e.Hb(n,100).ngClassPristine,e.Hb(n,100).ngClassDirty,e.Hb(n,100).ngClassValid,e.Hb(n,100).ngClassInvalid,e.Hb(n,100).ngClassPending),l(n,117,0,e.Hb(n,122).ngClassUntouched,e.Hb(n,122).ngClassTouched,e.Hb(n,122).ngClassPristine,e.Hb(n,122).ngClassDirty,e.Hb(n,122).ngClassValid,e.Hb(n,122).ngClassInvalid,e.Hb(n,122).ngClassPending),l(n,133,0,e.Hb(n,138).ngClassUntouched,e.Hb(n,138).ngClassTouched,e.Hb(n,138).ngClassPristine,e.Hb(n,138).ngClassDirty,e.Hb(n,138).ngClassValid,e.Hb(n,138).ngClassInvalid,e.Hb(n,138).ngClassPending)}))}function d(l){return e.Qb(0,[(l()(),e.vb(0,0,null,null,1,"app-lecturer-profile",[],null,null,null,c,g)),e.ub(1,114688,null,0,a,[b.a,r.a,b.Fb],null,null)],(function(l,n){l(n,1,0)}),null)}var h=e.rb("app-lecturer-profile",a,d,{},{},[]),p=u("Ip0R"),f=u("ZYCi"),v=function(){return function(){}}();u.d(n,"LecturerProfilePageModuleNgFactory",(function(){return m}));var m=e.sb(t,[],(function(l){return e.Eb([e.Fb(512,e.j,e.db,[[8,[i.a,h]],[3,e.j],e.y]),e.Fb(4608,p.o,p.n,[e.v,[2,p.B]]),e.Fb(4608,s.p,s.p,[]),e.Fb(4608,b.b,b.b,[e.A,e.g]),e.Fb(4608,b.Gb,b.Gb,[b.b,e.j,e.r]),e.Fb(4608,b.Jb,b.Jb,[b.b,e.j,e.r]),e.Fb(4608,s.b,s.b,[]),e.Fb(1073742336,p.c,p.c,[]),e.Fb(1073742336,s.o,s.o,[]),e.Fb(1073742336,s.g,s.g,[]),e.Fb(1073742336,b.Db,b.Db,[]),e.Fb(1073742336,f.p,f.p,[[2,f.u],[2,f.m]]),e.Fb(1073742336,v,v,[]),e.Fb(1073742336,s.m,s.m,[]),e.Fb(1073742336,t,t,[]),e.Fb(1024,f.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);