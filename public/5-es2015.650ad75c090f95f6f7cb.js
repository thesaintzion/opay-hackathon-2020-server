(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Y9Oy:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),a=n("tyNb"),i=n("3Pt+"),r=n("fXoL"),l=n("0IaG"),c=n("zuHl"),s=n("bTqV"),b=n("NFeN"),d=n("kmnG"),p=n("qFsG");let m=(()=>{class t{constructor(t,e,n){this.dialog=t,this.sharedService=e,this.formBuilder=n,this.contactForm=this.formBuilder.group({email:["",[i.p.required]],name:["",[i.p.required]],message:["",[i.p.required]]})}onFormSubmit(){this.contactForm.invalid?this.sharedService.openSnackBar("Please fill in all fields","OK",5e3,"bg-danger"):(this.sharedService.LOADING=!0,setTimeout(()=>{this.sharedService.LOADING=!1,this.sharedService.openSnackBar("Message sent successfully","OK",9e3,"bg-success")},6e3))}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(l.b),r.Qb(c.a),r.Qb(i.c))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-contacts"]],decls:44,vars:1,consts:[[1,"animated","heartBeat"],[1,"container","content"],[1,"row","align-items-center"],[1,"col-lg-6","text-white","animate","zoomIn","delay-1s","mb-sm-5","faster"],[1,"mb-5"],[1,"flex-wrap","d-flex","justify-content-between","flex-column","mb-sm-10"],[1,"mb-3"],["mat-mini-fab","","disabled","",1,"app-red-bg","app-red-light-color"],[1,"ml-3"],[1,"col-lg-5","ml-auto","form","rounded-10","animate","zoomIn","delay-1s","faster","mb-sm-4",3,"formGroup","ngSubmit"],["appearance","outline",1,"w-100"],["type","type","matInput","","formControlName","name","placeholder","Name","required",""],["matSuffix","",1,"text-white"],["type","email","matInput","","matInput","","formControlName","email","placeholder","Email","required",""],["formControlName","message","matInput","","placeholder","Start typing"],["mat-raised-button","",1,"app-red-bg","app-red-light-color","w-100","mt-5","py-2"]],template:function(t,e){1&t&&(r.Wb(0,"main",0),r.Wb(1,"div",1),r.Wb(2,"div",2),r.Wb(3,"div",3),r.Wb(4,"h1",4),r.Jc(5,"LET'S TALK"),r.Vb(),r.Wb(6,"div",5),r.Wb(7,"div",6),r.Wb(8,"button",7),r.Wb(9,"mat-icon"),r.Jc(10,"phone"),r.Vb(),r.Vb(),r.Wb(11,"span",8),r.Jc(12,"+234 8061578814"),r.Vb(),r.Vb(),r.Wb(13,"div",6),r.Wb(14,"button",7),r.Wb(15,"mat-icon"),r.Jc(16,"email"),r.Vb(),r.Vb(),r.Wb(17,"span",8),r.Jc(18,"stephen76494@gmail.com"),r.Vb(),r.Vb(),r.Wb(19,"div"),r.Wb(20,"button",7),r.Wb(21,"mat-icon"),r.Jc(22,"link"),r.Vb(),r.Vb(),r.Wb(23,"span",8),r.Jc(24,"github.com/thesaintzion"),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Wb(25,"form",9),r.ic("ngSubmit",(function(){return e.onFormSubmit()})),r.Wb(26,"mat-form-field",10),r.Wb(27,"mat-label"),r.Jc(28,"Name"),r.Vb(),r.Rb(29,"input",11),r.Wb(30,"mat-icon",12),r.Jc(31,"person"),r.Vb(),r.Vb(),r.Wb(32,"mat-form-field",10),r.Wb(33,"mat-label"),r.Jc(34,"Email"),r.Vb(),r.Rb(35,"input",13),r.Wb(36,"mat-icon",12),r.Jc(37,"email"),r.Vb(),r.Vb(),r.Wb(38,"mat-form-field",10),r.Wb(39,"mat-label"),r.Jc(40,"Say something"),r.Vb(),r.Rb(41,"textarea",14),r.Vb(),r.Wb(42,"button",15),r.Jc(43,"Submit"),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb()),2&t&&(r.Cb(25),r.rc("formGroup",e.contactForm))},directives:[s.b,b.a,i.r,i.k,i.e,d.b,d.e,p.a,i.b,i.j,i.d,i.o,d.f],styles:["[_nghost-%COMP%]     main{height:100vh;width:100%;background-color:#000;background-image:url(bg-one.550bf6ed99327d2d4b86.jpeg);background-position:50%;background-repeat:no-repeat;background-size:cover;overflow-y:auto;padding-top:200px}[_nghost-%COMP%]     .content h1{font-weight:900!important;font-size:50px;text-shadow:0 0 2px #000}[_nghost-%COMP%]     .content p{font-size:20px;line-height:30px;text-align:justify;margin-bottom:0}[_nghost-%COMP%]     .content .form{height:100%}[_nghost-%COMP%]     .content .form .mat-raised-button{border-radius:60px;font-size:20px}[_nghost-%COMP%]     .content .icon-con{border-radius:50px;height:40px;width:40px;text-align:center;vertical-align:middle;font-size:25px;font-weight:700;display:inline-block}[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent;background-color:hsla(0,0%,100%,.5);border-radius:9px!important}[_nghost-%COMP%]     input.mat-input-element, [_nghost-%COMP%]     textarea.mat-input-element{color:#fff!important}"]}),t})();function g(t,e){if(1&t&&(r.Wb(0,"a",8),r.Jc(1," VISIT "),r.Vb()),2&t){const t=r.mc();r.rc("href",null==t.data?null:t.data.link,r.Cc)}}let u=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(l.f),r.Qb(l.a))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-view-project"]],decls:12,vars:4,consts:[["mat-dialog-title","",1,"d-flex","justify-content-between","shadow","app-red-bg","text-white","align-items-center","py-1","px-2"],[1,"d-flex"],["mat-icon-button","","tabindex","-1",3,"mat-dialog-close"],[1,"app-blue-color"],[1,"mb-0","ml-3","w-100","d-flex","align-items-center","justify-content-between"],[1,"mt-0","text-white"],[1,"w-100","mb-4","rounded-10","shadow",3,"src"],["type","button","target","_blank","tabindex","-1","mat-raised-button","","class","view-button  w-100  mt-5 py-1",3,"href",4,"ngIf"],["type","button","target","_blank","tabindex","-1","mat-raised-button","",1,"view-button","w-100","mt-5","py-1",3,"href"]],template:function(t,e){1&t&&(r.Wb(0,"div",0),r.Wb(1,"div",1),r.Wb(2,"div"),r.Wb(3,"button",2),r.Wb(4,"mat-icon",3),r.Jc(5,"arrow_back_ios"),r.Vb(),r.Vb(),r.Vb(),r.Wb(6,"h5",4),r.Wb(7,"span"),r.Jc(8),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Wb(9,"mat-dialog-content",5),r.Rb(10,"img",6),r.Hc(11,g,2,1,"a",7),r.Vb()),2&t&&(r.Cb(3),r.rc("mat-dialog-close",!0),r.Cb(5),r.Kc(null==e.data?null:e.data.name),r.Cb(2),r.rc("src",null==e.data?null:e.data.img,r.Cc),r.Cb(1),r.rc("ngIf",null==e.data?null:e.data.link))},directives:[l.g,s.b,l.c,b.a,l.d,o.l,s.a],styles:["[_nghost-%COMP%]     .mat-dialog-title{background-color:#fff;padding:10px 20px!important;z-index:999;color:#000;position:fixed;top:0;left:0;width:100%}[_nghost-%COMP%]     .mat-dialog-title h5{font-size:20px!important}[_nghost-%COMP%]     .mat-dialog-content{padding-top:60px;padding-bottom:20px;max-height:100%!important}[_nghost-%COMP%]     .view-button{border-radius:60px;font-size:20px;color:var(--appRed)}[_nghost-%COMP%]     .view-button:hover{cursor:pointer;background-color:var(--appRedLight)!important;color:var(--appRedLight)!important;text-decoration:none!important}[_nghost-%COMP%]     h3{font-size:23px;font-weight:500}@media screen and (min-width:767px){[_nghost-%COMP%]     .mat-dialog-content{padding-left:30px;padding-right:30px}}@media screen and (max-width:767px){[_nghost-%COMP%]     .more-photo-holder{height:200px!important}}"]}),t})();var h=n("Qu3c");function f(t,e){if(1&t){const t=r.Xb();r.Ub(0),r.Wb(1,"div",8),r.Wb(2,"div",9),r.ic("click",(function(){r.Bc(t);const n=e.$implicit;return r.mc().viewProject(null==n?null:n.name,null==n?null:n.description,null==n?null:n.link,null==n?null:n.img)})),r.Wb(3,"div",10),r.Wb(4,"p"),r.Jc(5),r.Vb(),r.Wb(6,"small"),r.Jc(7),r.Vb(),r.Wb(8,"div",11),r.Wb(9,"div"),r.Wb(10,"small",12),r.Jc(11),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Tb()}if(2&t){const t=e.$implicit;r.Cb(5),r.Kc(null==t?null:t.name),r.Cb(2),r.Kc(null==t?null:t.description),r.Cb(4),r.Lc("#",null==t?null:t.role,"")}}const x=[{path:"projects",component:(()=>{class t{constructor(t,e){this.dialog=t,this.sharedService=e,this.projects=[{name:"Foan Realties Ltd",description:"Real estate management portal",link:"http://www.foanrealties.com",img:"assets/img/foan.png",role:"FrontEnd"},{name:"Tech Academe Ltd",description:"School management portal",link:"http://tech-academy-app.herokuapp.com",img:"assets/img/tech-academy.png",role:"FrontEnd"},{name:"COVID-19 Live Update",description:"Information website",link:"https://covid-19-live-update.herokuapp.com",img:"assets/img/covid-19.png",role:"FullStack"},{name:"Speed Mobile App",description:"Online competition platform",link:"https://play.google.com/store/apps/details?id=com.dave.speed",img:"assets/img/speed-app.png",role:"BankEnd"},{name:"Fiturl",description:"Url shortener & Page builder",link:" http://fiturl.xyz",img:"assets/img/fiturl.png",role:"Modified"},{name:"Aimart Realtors Ltd",description:"Real estate management portal",link:"http://aimart.herokuapp.com",img:"assets/img/aimart.png",role:"FullStack"},{name:"My Profile",description:"Portfolio website",link:"http://localhost:3400",img:"assets/img/screenshot.png",role:"FullStack"}]}viewProject(t,e,n,o){this.dialog.open(u,{width:this.sharedService.isHandset?"100%":"400px",height:"100%",data:{name:t,description:e,link:n,img:o},position:{top:"0px",right:"0px",bottom:"0px"},panelClass:["animated","fadeInRight","faster","dialog-rounded-none","dialog-transparent-bg"]}).afterClosed().subscribe(t=>{})}ngOnInit(){this.sharedService.initBreakPoint()}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(l.b),r.Qb(c.a))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-projects"]],decls:10,vars:1,consts:[[1,"animated","heartBeat"],[1,"content"],[1,"container"],[1,"text-white","text-center","mb-5"],[1,"row","box-con"],[4,"ngFor","ngForOf"],[1,"col-lg-12","text-center","mt-3"],[1,"btn","app-red-bg","text-white","btn-spill","btn-sm"],[1,"col-lg-3","mb-3","mb:last:0"],[1,"card",3,"click"],[1,"card-body","animated","fadeIn","faster","pb-0","delay-1s"],[1,"mt-2","d-flex","justify-content-end"],["matTooltip","Role Played",1,"bg-light","text-dark","d-inline","px-2","rounded-10"]],template:function(t,e){1&t&&(r.Wb(0,"main",0),r.Wb(1,"div",1),r.Wb(2,"div",2),r.Wb(3,"h1",3),r.Jc(4,"PROJECTS"),r.Vb(),r.Wb(5,"div",4),r.Hc(6,f,12,3,"ng-container",5),r.Wb(7,"div",6),r.Wb(8,"button",7),r.Jc(9,"Show more"),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb()),2&t&&(r.Cb(6),r.rc("ngForOf",e.projects))},directives:[o.k,h.a],styles:["[_nghost-%COMP%]     main{height:100vh;width:100%;background-color:#000;background-image:url(bg-one.550bf6ed99327d2d4b86.jpeg);background-position:50%;background-repeat:no-repeat;background-size:cover;overflow-y:auto;padding-top:200px}[_nghost-%COMP%]     .content h1{font-weight:900!important;font-size:50px;text-shadow:0 0 2px #000}[_nghost-%COMP%]     .content p{font-size:20px;text-align:justify;margin-bottom:0}[_nghost-%COMP%]     .content .card{background-color:hsla(0,0%,100%,.5);height:100%;border-radius:10px;color:#fff;cursor:pointer}[_nghost-%COMP%]     .content .card:hover{background-color:var(--appRed);color:#fff}"]}),t})()},{path:"contacts",component:m}];let v=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[a.e.forChild(x)],a.e]}),t})();var w=n("i2L+");n.d(e,"PageModule",(function(){return V}));let V=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[w.a,o.c,v]]}),t})()}}]);