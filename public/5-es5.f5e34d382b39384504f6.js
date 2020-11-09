function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Y9Oy:function(t,e,n){"use strict";n.r(e);var a,o,i=n("ofXK"),r=n("tyNb"),s=n("3Pt+"),c=n("fXoL"),l=n("0IaG"),p=n("zuHl"),d=n("AytR"),m=n("tk/3"),b=((a=function(){function t(e){_classCallCheck(this,t),this.http=e,this.apiUrl="http://localhost:4500/api",this.env=d.a,this.env.production&&(this.apiUrl="https://saint-portfolio.herokuapp.com/api")}return _createClass(t,[{key:"getMessages",value:function(){return this.http.get("".concat(this.apiUrl,"/message/get"))}},{key:"sendMessage",value:function(t){return this.http.post("".concat(this.apiUrl,"/message/post"),t)}}]),t}()).\u0275fac=function(t){return new(t||a)(c.ec(m.a))},a.\u0275prov=c.Mb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),g=n("bTqV"),h=n("NFeN"),u=n("kmnG"),f=n("qFsG"),v=((o=function(){function t(e,n,a,o){_classCallCheck(this,t),this.dialog=e,this.sharedService=n,this.formBuilder=a,this.apiService=o,this.contactForm=this.formBuilder.group({email:["",[s.p.required]],name:["",[s.p.required]],message:["",[s.p.required]]})}return _createClass(t,[{key:"onFormSubmit",value:function(){var t=this;this.contactForm.invalid?this.sharedService.openSnackBar("Please fill in all fields","OK",5e3,"bg-danger"):(this.sharedService.LOADING=!0,this.apiService.sendMessage({email:this.contactForm.value.email,name:this.contactForm.value.name,message:this.contactForm.value.message}).subscribe((function(e){setTimeout((function(){t.sharedService.LOADING=!1,console.log(e),t.sharedService.openSnackBar("Message sent successfully","OK",9e3,"bg-success"),t.contactForm.reset()}),3e3)}),(function(e){setTimeout((function(){console.log(e),t.sharedService.LOADING=!1,t.sharedService.openSnackBar(e.error.message?e.error.message:"Oops..!! Something is not right.. please try later","OK",9e3,"bg-danger")}),3e3)})))}},{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||o)(c.Qb(l.b),c.Qb(p.a),c.Qb(s.c),c.Qb(b))},o.\u0275cmp=c.Kb({type:o,selectors:[["app-contacts"]],decls:44,vars:1,consts:[[1,"animated","heartBeat"],[1,"container","content"],[1,"row","align-items-center"],[1,"col-lg-6","text-white","animate","zoomIn","delay-1s","mb-sm-5","faster"],[1,"mb-5"],[1,"flex-wrap","d-flex","justify-content-between","flex-column","mb-sm-10"],[1,"mb-3"],["mat-mini-fab","","disabled","",1,"app-red-bg","app-red-light-color"],[1,"ml-3"],[1,"col-lg-5","ml-auto","form","rounded-10","animate","zoomIn","delay-1s","faster","mb-sm-4",3,"formGroup","ngSubmit"],["appearance","outline",1,"w-100"],["type","text","matInput","","formControlName","name","placeholder","Name","required",""],["matSuffix","",1,"text-white"],["type","email","matInput","","matInput","","formControlName","email","placeholder","Email","required",""],["formControlName","message","matInput","","placeholder","Start typing"],["mat-raised-button","",1,"app-red-bg","app-red-light-color","w-100","mt-5","py-2"]],template:function(t,e){1&t&&(c.Wb(0,"main",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Wb(3,"div",3),c.Wb(4,"h1",4),c.Jc(5,"LET'S TALK"),c.Vb(),c.Wb(6,"div",5),c.Wb(7,"div",6),c.Wb(8,"button",7),c.Wb(9,"mat-icon"),c.Jc(10,"phone"),c.Vb(),c.Vb(),c.Wb(11,"span",8),c.Jc(12,"+2348061578814"),c.Vb(),c.Vb(),c.Wb(13,"div",6),c.Wb(14,"button",7),c.Wb(15,"mat-icon"),c.Jc(16,"email"),c.Vb(),c.Vb(),c.Wb(17,"span",8),c.Jc(18,"stephen76494@gmail.com"),c.Vb(),c.Vb(),c.Wb(19,"div"),c.Wb(20,"button",7),c.Wb(21,"mat-icon"),c.Jc(22,"link"),c.Vb(),c.Vb(),c.Wb(23,"span",8),c.Jc(24,"github.com/thesaintzion"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(25,"form",9),c.ic("ngSubmit",(function(){return e.onFormSubmit()})),c.Wb(26,"mat-form-field",10),c.Wb(27,"mat-label"),c.Jc(28,"Name"),c.Vb(),c.Rb(29,"input",11),c.Wb(30,"mat-icon",12),c.Jc(31,"person"),c.Vb(),c.Vb(),c.Wb(32,"mat-form-field",10),c.Wb(33,"mat-label"),c.Jc(34,"Email"),c.Vb(),c.Rb(35,"input",13),c.Wb(36,"mat-icon",12),c.Jc(37,"email"),c.Vb(),c.Vb(),c.Wb(38,"mat-form-field",10),c.Wb(39,"mat-label"),c.Jc(40,"Say something"),c.Vb(),c.Rb(41,"textarea",14),c.Vb(),c.Wb(42,"button",15),c.Jc(43,"Submit"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Cb(25),c.rc("formGroup",e.contactForm))},directives:[g.b,h.a,s.r,s.k,s.e,u.b,u.e,f.a,s.b,s.j,s.d,s.o,u.f],styles:["[_nghost-%COMP%]     main{height:100vh;width:100%;background-color:#000;background-image:url(bg-one.550bf6ed99327d2d4b86.jpeg);background-position:50%;background-repeat:no-repeat;background-size:cover;overflow-y:auto;padding-top:200px}[_nghost-%COMP%]     .content h1{font-weight:900!important;font-size:50px;text-shadow:0 0 2px #000}[_nghost-%COMP%]     .content p{font-size:20px;line-height:30px;text-align:justify;margin-bottom:0}[_nghost-%COMP%]     .content .form{height:100%}[_nghost-%COMP%]     .content .form .mat-raised-button{border-radius:60px;font-size:20px}[_nghost-%COMP%]     .content .icon-con{border-radius:50px;height:40px;width:40px;text-align:center;vertical-align:middle;font-size:25px;font-weight:700;display:inline-block}[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline{color:transparent;background-color:hsla(0,0%,100%,.5);border-radius:9px!important}[_nghost-%COMP%]     input.mat-input-element, [_nghost-%COMP%]     textarea.mat-input-element{color:#fff!important}@media screen and (max-width:767px){[_nghost-%COMP%]     main{padding-top:150px}[_nghost-%COMP%]     h1{text-align:left!important;font-size:40px!important}}"]}),o),x=n("Qu3c");function k(t,e){if(1&t&&(c.Wb(0,"div",6),c.Wb(1,"div"),c.Wb(2,"button",7),c.Wb(3,"mat-icon"),c.Jc(4,"person"),c.Vb(),c.Vb(),c.Vb(),c.Wb(5,"div",8),c.Wb(6,"p",9),c.Jc(7),c.Wb(8,"small",10),c.Jc(9),c.nc(10,"date"),c.Vb(),c.Vb(),c.Wb(11,"p",11),c.Jc(12),c.Vb(),c.Wb(13,"span",12),c.Jc(14),c.Vb(),c.Vb(),c.Vb()),2&t){var n=e.$implicit;c.Cb(7),c.Lc("",null==n?null:n.name," "),c.Cb(2),c.Kc(c.oc(10,5,null==n?null:n.createdAt)),c.Cb(3),c.Lc(" ",null==n?null:n.message," "),c.Cb(1),c.rc("ngClass",null!=n&&n.email_sent?"bg-success text-light":"bg-danger text-light"),c.Cb(1),c.Kc(null==n?null:n.email_sent)}}var w,C=((w=function(){function t(e,n){_classCallCheck(this,t),this.apiService=e,this.sharedService=n,this.messages=[],this.notes=[{name:"Vacation Itinerary",updated:new Date("2/20/16")},{name:"Kitchen Remodel",updated:new Date("1/18/16")},{name:"Vacation Itinerary",updated:new Date("2/20/16")},{name:"Kitchen Remodel",updated:new Date("1/18/16")}]}return _createClass(t,[{key:"getMessages",value:function(){var t=this;this.sharedService.LOADING=!0,this.apiService.getMessages().subscribe((function(e){setTimeout((function(){t.messages=e.messages,t.sharedService.LOADING=!1,console.log(e),t.sharedService.openSnackBar("Successful","Ok",3e3,"bg-success")}),3e3)}),(function(e){setTimeout((function(){console.log(e),t.sharedService.LOADING=!1,t.sharedService.openSnackBar(e.error.message?e.error.message:"Oops..!! Something is not right.. please try later","OK",9e3,"bg-danger")}),3e3)}))}},{key:"ngOnInit",value:function(){this.getMessages()}}]),t}()).\u0275fac=function(t){return new(t||w)(c.Qb(b),c.Qb(p.a))},w.\u0275cmp=c.Kb({type:w,selectors:[["app-messages"]],decls:7,vars:1,consts:[[1,"animated","fadeInUp"],[1,"content"],[1,"container"],[1,"text-white","text-center","mb-5"],[1,"d-flex","justify-content-between","flex-column","mb-sm-10"],["class","mb-3 msg-con text-white d-flex  px-3  py-3 rounded-10 shadow",4,"ngFor","ngForOf"],[1,"mb-3","msg-con","text-white","d-flex","px-3","py-3","rounded-10","shadow"],["mat-mini-fab","","disabled","",1,"bg-light"],[1,"ml-3"],[1,"head","mb-2"],[1,"text-dark"],[1,"w-100"],["matTooltip","Sent Email",1,"d-inline","px-2","rounded-10",3,"ngClass"]],template:function(t,e){1&t&&(c.Wb(0,"main",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Wb(3,"h1",3),c.Jc(4,"Messages"),c.Vb(),c.Wb(5,"div",4),c.Hc(6,k,15,7,"div",5),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Cb(6),c.rc("ngForOf",e.messages))},directives:[i.l,g.b,h.a,x.a,i.k],pipes:[i.e],styles:["[_nghost-%COMP%]     main{height:100vh;width:100%;background-color:#000;background-image:url(bg-one.550bf6ed99327d2d4b86.jpeg);background-position:50%;background-repeat:no-repeat;background-size:cover;overflow-y:auto;padding-top:200px}[_nghost-%COMP%]     .content h1{font-weight:900!important;font-size:50px;text-shadow:0 0 2px #000}[_nghost-%COMP%]     .content .head{font-size:18px;font-weight:500}[_nghost-%COMP%]     .content .msg-con{background-color:hsla(0,0%,100%,.5)}"]}),w);function y(t,e){if(1&t&&(c.Wb(0,"a",8),c.Jc(1," VISIT "),c.Vb()),2&t){var n=c.mc();c.rc("href",null==n.data?null:n.data.link,c.Cc)}}var V,W=((V=function(){function t(e,n){_classCallCheck(this,t),this.dialogRef=e,this.data=n}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||V)(c.Qb(l.f),c.Qb(l.a))},V.\u0275cmp=c.Kb({type:V,selectors:[["app-view-project"]],decls:12,vars:4,consts:[["mat-dialog-title","",1,"d-flex","justify-content-between","shadow","app-red-bg","text-white","align-items-center","py-1","px-2"],[1,"d-flex"],["mat-icon-button","","tabindex","-1",3,"mat-dialog-close"],[1,"app-blue-color"],[1,"mb-0","ml-3","w-100","d-flex","align-items-center","justify-content-between"],[1,"mt-0","text-white"],[1,"w-100","mb-4","rounded-10","shadow",3,"src"],["type","button","target","_blank","tabindex","-1","mat-raised-button","","class","view-button  w-100  mt-5 py-1",3,"href",4,"ngIf"],["type","button","target","_blank","tabindex","-1","mat-raised-button","",1,"view-button","w-100","mt-5","py-1",3,"href"]],template:function(t,e){1&t&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"div"),c.Wb(3,"button",2),c.Wb(4,"mat-icon",3),c.Jc(5,"arrow_back_ios"),c.Vb(),c.Vb(),c.Vb(),c.Wb(6,"h5",4),c.Wb(7,"span"),c.Jc(8),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(9,"mat-dialog-content",5),c.Rb(10,"img",6),c.Hc(11,y,2,1,"a",7),c.Vb()),2&t&&(c.Cb(3),c.rc("mat-dialog-close",!0),c.Cb(5),c.Kc(null==e.data?null:e.data.name),c.Cb(2),c.rc("src",null==e.data?null:e.data.img,c.Cc),c.Cb(1),c.rc("ngIf",null==e.data?null:e.data.link))},directives:[l.g,g.b,l.c,h.a,l.d,i.m,g.a],styles:["[_nghost-%COMP%]     .mat-dialog-title{background-color:#fff;padding:10px 20px!important;z-index:999;color:#000;position:fixed;top:0;left:0;width:100%}[_nghost-%COMP%]     .mat-dialog-title h5{font-size:20px!important}[_nghost-%COMP%]     .mat-dialog-content{padding-top:60px;padding-bottom:20px;max-height:100%!important}[_nghost-%COMP%]     .view-button{border-radius:60px;font-size:20px;color:var(--appRed)}[_nghost-%COMP%]     .view-button:hover{cursor:pointer;background-color:var(--appRedLight)!important;color:var(--appRedLight)!important;text-decoration:none!important}[_nghost-%COMP%]     h3{font-size:23px;font-weight:500}@media screen and (min-width:767px){[_nghost-%COMP%]     .mat-dialog-content{padding-left:30px;padding-right:30px}}@media screen and (max-width:767px){[_nghost-%COMP%]     .more-photo-holder{height:200px!important}}"]}),V);function O(t,e){if(1&t){var n=c.Xb();c.Ub(0),c.Wb(1,"div",8),c.Wb(2,"div",9),c.ic("click",(function(){c.Bc(n);var t=e.$implicit;return c.mc().viewProject(null==t?null:t.name,null==t?null:t.description,null==t?null:t.link,null==t?null:t.img)})),c.Wb(3,"div",10),c.Wb(4,"p"),c.Jc(5),c.Vb(),c.Wb(6,"small"),c.Jc(7),c.Vb(),c.Wb(8,"div",11),c.Wb(9,"div"),c.Wb(10,"small",12),c.Jc(11),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Tb()}if(2&t){var a=e.$implicit;c.Cb(5),c.Kc(null==a?null:a.name),c.Cb(2),c.Kc(null==a?null:a.description),c.Cb(4),c.Lc("#",null==a?null:a.role,"")}}var S,_=((S=function(){function t(e,n){_classCallCheck(this,t),this.dialog=e,this.sharedService=n,this.projects=[{name:"Foan Realties Ltd",description:"Real estate management portal",link:"http://www.foanrealties.com",img:"assets/img/foan.png",role:"FrontEnd"},{name:"Tech Academe Ltd",description:"School management portal",link:"http://tech-academy-app.herokuapp.com",img:"assets/img/tech-academy.png",role:"FrontEnd"},{name:"COVID-19 Live Update",description:"Information website",link:"https://covid-19-live-update.herokuapp.com",img:"assets/img/covid-19.png",role:"FullStack"},{name:"Speed Mobile App",description:"Online competition platform",link:"https://play.google.com/store/apps/details?id=com.dave.speed",img:"assets/img/speed-app.png",role:"BankEnd"},{name:"Fiturl",description:"Url shortener & Page builder",link:" http://fiturl.xyz",img:"assets/img/fiturl.png",role:"Modified"},{name:"Aimart Realtors Ltd",description:"Real estate management portal",link:"http://aimart.herokuapp.com",img:"assets/img/aimart.png",role:"FullStack"},{name:"My Profile",description:"Portfolio website",link:"http://localhost:3400",img:"assets/img/screenshot.png",role:"FullStack"}]}return _createClass(t,[{key:"viewProject",value:function(t,e,n,a){this.dialog.open(W,{width:this.sharedService.isHandset?"100%":"400px",height:"100%",data:{name:t,description:e,link:n,img:a},position:{top:"0px",right:"0px",bottom:"0px"},panelClass:["animated","fadeInRight","faster","dialog-rounded-none","dialog-transparent-bg"]}).afterClosed().subscribe((function(t){}))}},{key:"ngOnInit",value:function(){this.sharedService.initBreakPoint()}}]),t}()).\u0275fac=function(t){return new(t||S)(c.Qb(l.b),c.Qb(p.a))},S.\u0275cmp=c.Kb({type:S,selectors:[["app-projects"]],decls:10,vars:1,consts:[[1,"animated","heartBeat"],[1,"content"],[1,"container"],[1,"text-white","text-center","mb-5"],[1,"row","box-con"],[4,"ngFor","ngForOf"],[1,"col-lg-12","text-center","my-3"],[1,"btn","app-red-bg","text-white","btn-spill","btn-sm"],[1,"col-lg-3","mb-3","mb:last:0"],[1,"card",3,"click"],[1,"card-body","animated","fadeIn","faster","pb-0","delay-1s"],[1,"mt-2","d-flex","justify-content-end"],["matTooltip","Role Played",1,"bg-light","text-dark","d-inline","px-2","rounded-10"]],template:function(t,e){1&t&&(c.Wb(0,"main",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Wb(3,"h1",3),c.Jc(4,"PROJECTS"),c.Vb(),c.Wb(5,"div",4),c.Hc(6,O,12,3,"ng-container",5),c.Wb(7,"div",6),c.Wb(8,"button",7),c.Jc(9,"Show more"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Cb(6),c.rc("ngForOf",e.projects))},directives:[i.l,x.a],styles:["[_nghost-%COMP%]     main{height:100vh;width:100%;background-color:#000;background-image:url(bg-one.550bf6ed99327d2d4b86.jpeg);background-position:50%;background-repeat:no-repeat;background-size:cover;overflow-y:auto;padding-top:200px}[_nghost-%COMP%]     .content h1{font-weight:900!important;font-size:50px;text-shadow:0 0 2px #000}[_nghost-%COMP%]     .content p{font-size:20px;text-align:justify;margin-bottom:0}[_nghost-%COMP%]     .content .card{background-color:hsla(0,0%,100%,.5);height:100%;border-radius:10px;color:#fff;cursor:pointer}[_nghost-%COMP%]     .content .card:hover{background-color:var(--appRed);color:#fff}@media screen and (max-width:767px){[_nghost-%COMP%]     main{padding-top:150px}[_nghost-%COMP%]     h1{text-align:left!important;font-size:40px!important}}"]}),S),P=n("A5z7");function M(t,e){if(1&t&&(c.Wb(0,"mat-chip",7),c.Jc(1),c.Vb()),2&t){var n=e.$implicit;c.Cb(1),c.Lc("#",n.name,"")}}var F,I,J=[{path:"",redirectTo:"/",pathMatch:"full"},{path:"projects",component:_},{path:"contacts",component:v},{path:"skills",component:(F=function(){function t(e,n){_classCallCheck(this,t),this.dialog=e,this.sharedService=n,this.skills=[{name:"HTML5"},{name:"CSS"},{name:"SASS"},{name:"JavaScript"},{name:"TypeScript"},{name:"Angular"},{name:"React"},{name:"PHP"},{name:"MySql"},{name:"NodeJs"},{name:"MogoDb"},{name:"PWA"},{name:"etc"}],this.projects=[{name:"Foan Realties Ltd",description:"Real estate management portal",link:"http://www.foanrealties.com",img:"assets/img/foan.png",role:"FrontEnd"},{name:"Tech Academe Ltd",description:"School management portal",link:"http://tech-academy-app.herokuapp.com",img:"assets/img/tech-academy.png",role:"FrontEnd"},{name:"COVID-19 Live Update",description:"Information website",link:"https://covid-19-live-update.herokuapp.com",img:"assets/img/covid-19.png",role:"FullStack"},{name:"Speed Mobile App",description:"Online competition platform",link:"https://play.google.com/store/apps/details?id=com.dave.speed",img:"assets/img/speed-app.png",role:"BankEnd"},{name:"Fiturl",description:"Url shortener & Page builder",link:" http://fiturl.xyz",img:"assets/img/fiturl.png",role:"Modified"},{name:"Aimart Realtors Ltd",description:"Real estate management portal",link:"http://aimart.herokuapp.com",img:"assets/img/aimart.png",role:"FullStack"},{name:"My Profile",description:"Portfolio website",link:"http://localhost:3400",img:"assets/img/screenshot.png",role:"FullStack"}]}return _createClass(t,[{key:"viewProject",value:function(t,e,n,a){this.dialog.open(W,{width:this.sharedService.isHandset?"100%":"400px",height:"100%",data:{name:t,description:e,link:n,img:a},position:{top:"0px",right:"0px",bottom:"0px"},panelClass:["animated","fadeInRight","faster","dialog-rounded-none","dialog-transparent-bg"]}).afterClosed().subscribe((function(t){}))}},{key:"ngOnInit",value:function(){this.sharedService.initBreakPoint()}}]),t}(),F.\u0275fac=function(t){return new(t||F)(c.Qb(l.b),c.Qb(p.a))},F.\u0275cmp=c.Kb({type:F,selectors:[["app-skills"]],decls:8,vars:1,consts:[[1,"animated","heartBeat"],[1,"content"],[1,"container"],[1,"text-white","text-center","mb-5"],[1,"row","box-con","text-center"],["aria-label","Fish selection",1,"text-center"],["class","px-5  py-4 text-center app-red-bg shadow app-red-light-color",4,"ngFor","ngForOf"],[1,"px-5","py-4","text-center","app-red-bg","shadow","app-red-light-color"]],template:function(t,e){1&t&&(c.Wb(0,"main",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Wb(3,"h1",3),c.Jc(4,"SKILLS"),c.Vb(),c.Wb(5,"div",4),c.Wb(6,"mat-chip-list",5),c.Hc(7,M,2,1,"mat-chip",6),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Cb(7),c.rc("ngForOf",e.skills))},directives:[P.b,i.l,P.a],styles:["[_nghost-%COMP%]     main{height:100vh;width:100%;background-color:#000;background-image:url(bg-one.550bf6ed99327d2d4b86.jpeg);background-position:50%;background-repeat:no-repeat;background-size:cover;overflow-y:auto;padding-top:200px}[_nghost-%COMP%]     .content h1{font-weight:900!important;font-size:50px;text-shadow:0 0 2px #000}[_nghost-%COMP%]     .content p{font-size:20px;text-align:justify;margin-bottom:0}[_nghost-%COMP%]     .content .card{background-color:hsla(0,0%,100%,.8);height:100%;border-radius:10px;color:#fff;cursor:pointer}[_nghost-%COMP%]     .content .card:hover{background-color:var(--appRed);color:#fff}[_nghost-%COMP%]     .dot{height:25px;width:25px;background-color:#bbb;border-radius:50%;display:inline-block}[_nghost-%COMP%]     .dot.active{background-color:var(--appRed)!important}@media screen and (max-width:767px){[_nghost-%COMP%]     main{padding-top:150px}[_nghost-%COMP%]     h1{text-align:left!important;font-size:40px!important}}"]}),F)},{path:"messages",component:C}],z=((I=function t(){_classCallCheck(this,t)}).\u0275mod=c.Ob({type:I}),I.\u0275inj=c.Nb({factory:function(t){return new(t||I)},imports:[[r.i.forChild(J)],r.i]}),I),L=n("i2L+");n.d(e,"PageModule",(function(){return j}));var R,j=((R=function t(){_classCallCheck(this,t)}).\u0275mod=c.Ob({type:R}),R.\u0275inj=c.Nb({factory:function(t){return new(t||R)},imports:[[L.a,i.c,z]]}),R)}}]);