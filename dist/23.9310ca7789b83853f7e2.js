(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{UE8e:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=function(){return function(){}}(),a=t("pMnS"),o=t("21Lb"),c=t("OzfB"),b=t("Fzqc"),s=t("lzlj"),i=t("Ip0R"),r=t("FVSy"),d=t("Mr+X"),g=t("SMsm"),p=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),m=u.rb({encapsulation:0,styles:[["[_nghost-%COMP%]     .mat-card-header-text{width:100%;text-align:right}.icon-lg[_ngcontent-%COMP%]{font-size:40px}.mat-card[_ngcontent-%COMP%]{color:#fff}.mat-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{width:100%}.mat-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:40px!important}.mat-card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{color:#fff}.mat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer;color:#fff}.mat-card.danger[_ngcontent-%COMP%]{background:linear-gradient(60deg,#ec407a,#d81b60)}.mat-card.warn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#ffa726,#fb8c00)}.mat-card.success[_ngcontent-%COMP%]{background:linear-gradient(60deg,#66bb6a,#43a047)}.mat-card.info[_ngcontent-%COMP%]{background:linear-gradient(60deg,#26c6da,#00acc1)}"]],data:{}});function f(l){return u.Mb(0,[(l()(),u.tb(0,0,null,null,20,"mat-card",[["class","mat-card"]],null,null,null,s.d,s.a)),u.sb(1,278528,null,0,i.i,[u.u,u.v,u.k,u.G],{ngClass:[0,"ngClass"]},null),u.sb(2,49152,null,0,r.a,[],null,null),(l()(),u.tb(3,0,null,0,15,"mat-card-header",[["class","mat-card-header"]],null,null,null,s.c,s.b)),u.sb(4,49152,null,0,r.e,[],null,null),(l()(),u.tb(5,0,null,0,4,"div",[["class","mat-card-avatar"],["mat-card-avatar",""]],null,null,null,null,null)),u.sb(6,16384,null,0,r.c,[],null,null),(l()(),u.tb(7,0,null,null,2,"mat-icon",[["class","icon-lg mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,d.b,d.a)),u.sb(8,9158656,null,0,g.b,[u.k,g.d,[8,null],[2,g.a]],null,null),(l()(),u.Kb(9,0,["",""])),(l()(),u.tb(10,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),u.sb(11,16384,null,0,r.h,[],null,null),(l()(),u.Kb(12,null,["",""])),(l()(),u.tb(13,0,null,1,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),u.sb(14,16384,null,0,r.g,[],null,null),(l()(),u.Kb(15,null,["",""])),(l()(),u.tb(16,0,null,1,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),u.sb(17,16384,null,0,r.g,[],null,null),(l()(),u.Kb(18,null,["",""])),(l()(),u.tb(19,0,null,0,1,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),u.sb(20,16384,null,0,r.b,[],null,null)],function(l,n){l(n,1,0,n.component.bgClass),l(n,8,0)},function(l,n){var t=n.component;l(n,7,0,u.Db(n,8).inline),l(n,9,0,t.icon),l(n,12,0,t.count),l(n,15,0,t.countlabel),l(n,18,0,t.label),l(n,19,0,"end"===u.Db(n,20).align)})}var h=t("THyX"),x=t("Ozuo"),B=t("jvCn"),C=t("miAi"),O=t("/oO5"),M=t("t/Na"),S=function(){function l(l,n,t,u){this.service=l,this.spinner=n,this.dialog=t,this.alertService=u,this.gridData=[]}return l.prototype.ngOnInit=function(){var l=JSON.parse(localStorage.getItem("loggedIn"));this.schoolCode=l[0].SCHOOL_CODE,this.orderReceivedSub=l[0].TOTAL_SCHOOL_COUNT,this.orderReceivedStu=l[0].TOTAL_SUBJECT_COUNT,this.registeredStudents=l[1].registeredStudents,this.registeredSubjects=l[1].registeredSubjects,this.orderReceivedCount=this.orderReceivedSub+"/"+this.orderReceivedStu,this.totalRegistered=this.registeredStudents+"/"+this.registeredSubjects,this.totalPending=(parseInt(this.orderReceivedSub)-parseInt(this.registeredStudents)).toString()+"/"+(parseInt(this.orderReceivedStu)-parseInt(this.registeredSubjects)).toString(),this.getDashboardComponent()},l.prototype.getDashboardComponent=function(){var l=this,n=[];this.gridData=[],this.spinner.show(),this.service.getHttpRequest("getRegisteredStudentsBySchool?schoolCode="+this.schoolCode).subscribe(function(t){l.spinner.hide();var u=[],e=t.filter(function(l){return-1===u.indexOf(l.studentId)&&(u.push(l.studentId),!0)});console.log(e);var a={};t.forEach(function(l){a[l.studentId]=a[l.studentId]||[],a[l.studentId].push({studentId:l.studentId,studentName:l.studentName,classId:l.class,mobileNumber:l.mobileNumber,dob:l.dob,subjectName:l.subjectName})});for(var o=0;o<e.length;o++){n=[];for(var c=a[e[o].studentId],b=0;b<c.length;b++)n.push(c[b].subjectName);l.gridData.push({studentId:e[o].studentId,studentName:e[o].studentName,classId:e[o].class,mobileNumber:e[o].mobileNumber,dob:e[o].dob,subjectName:n})}console.log(l.gridData)})},l}(),P=t("o3x0"),v=u.rb({encapsulation:0,styles:[[".mat-card[_ngcontent-%COMP%]{text-align:center}.mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;margin-top:-25px}.mat-table[_ngcontent-%COMP%]{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mb-20[_ngcontent-%COMP%]{margin-bottom:20px}#tableGrid[_ngcontent-%COMP%]{height:10px!important}table[_ngcontent-%COMP%]{color:#333;width:100%;border-collapse:collapse;border-spacing:0}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #ccc;height:30px}th[_ngcontent-%COMP%]{background:#1084d1;font-weight:700;color:#fff}td[_ngcontent-%COMP%]{background:#fafafa;text-align:center}"]],data:{}});function _(l){return u.Mb(0,[(l()(),u.tb(0,0,null,null,20,"tr",[],null,null,null,null,null)),(l()(),u.tb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Kb(2,null,["",""])),(l()(),u.tb(3,0,null,null,1,"td",[["rowspan","1"],["scope","rowgroup"]],null,null,null,null,null)),(l()(),u.Kb(4,null,["",""])),(l()(),u.tb(5,0,null,null,1,"td",[["scope","row"]],null,null,null,null,null)),(l()(),u.Kb(6,null,["",""])),(l()(),u.tb(7,0,null,null,1,"td",[["scope","row"]],null,null,null,null,null)),(l()(),u.Kb(8,null,["",""])),(l()(),u.tb(9,0,null,null,1,"td",[["scope","row"]],null,null,null,null,null)),(l()(),u.Kb(10,null,["",""])),(l()(),u.tb(11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Kb(12,null,["",""])),(l()(),u.tb(13,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Kb(14,null,["",""])),(l()(),u.tb(15,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Kb(16,null,["",""])),(l()(),u.tb(17,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Kb(18,null,["",""])),(l()(),u.tb(19,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Kb(20,null,["",""]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.studentName),l(n,6,0,n.context.$implicit.classId),l(n,8,0,n.context.$implicit.dob),l(n,10,0,n.context.$implicit.mobileNumber),l(n,12,0,n.context.$implicit.subjectName[0]),l(n,14,0,n.context.$implicit.subjectName[1]),l(n,16,0,n.context.$implicit.subjectName[2]),l(n,18,0,n.context.$implicit.subjectName[3]),l(n,20,0,n.context.$implicit.subjectName[4])})}function w(l){return u.Mb(0,[(l()(),u.tb(0,0,null,null,2,"div",[["class","flashMsg"],["style","text-align: center;"]],null,null,null,null,null)),(l()(),u.tb(1,0,null,null,1,"p",[["class","blink"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Student can edit/download their admitcard from Monday, 16th December, 2019."])),(l()(),u.tb(3,0,null,null,15,"div",[["class","mb-20"],["fxFlex",""],["fxLayout","row"],["fxLayout.lt-md","column"],["fxLayoutGap","20px"]],null,null,null,null,null)),u.sb(4,737280,null,0,o.e,[c.h,u.k,c.l],{layout:[0,"layout"],layoutLtMd:[1,"layoutLtMd"]},null),u.sb(5,1785856,null,0,o.f,[c.h,u.k,[6,o.e],u.B,b.b,c.l],{gap:[0,"gap"]},null),u.sb(6,737280,null,0,o.a,[c.h,u.k,[3,o.e],c.l,c.f],{flex:[0,"flex"]},null),(l()(),u.tb(7,0,null,null,3,"div",[["fxFlex",""]],null,null,null,null,null)),u.sb(8,737280,null,0,o.a,[c.h,u.k,[3,o.e],c.l,c.f],{flex:[0,"flex"]},null),(l()(),u.tb(9,0,null,null,1,"app-stat",[],null,null,null,f,m)),u.sb(10,114688,null,0,p,[],{bgClass:[0,"bgClass"],icon:[1,"icon"],count:[2,"count"],label:[3,"label"],countlabel:[4,"countlabel"]},null),(l()(),u.tb(11,0,null,null,3,"div",[["fxFlex",""]],null,null,null,null,null)),u.sb(12,737280,null,0,o.a,[c.h,u.k,[3,o.e],c.l,c.f],{flex:[0,"flex"]},null),(l()(),u.tb(13,0,null,null,1,"app-stat",[],null,null,null,f,m)),u.sb(14,114688,null,0,p,[],{bgClass:[0,"bgClass"],icon:[1,"icon"],count:[2,"count"],label:[3,"label"],countlabel:[4,"countlabel"]},null),(l()(),u.tb(15,0,null,null,3,"div",[["fxFlex",""]],null,null,null,null,null)),u.sb(16,737280,null,0,o.a,[c.h,u.k,[3,o.e],c.l,c.f],{flex:[0,"flex"]},null),(l()(),u.tb(17,0,null,null,1,"app-stat",[],null,null,null,f,m)),u.sb(18,114688,null,0,p,[],{bgClass:[0,"bgClass"],icon:[1,"icon"],count:[2,"count"],label:[3,"label"],countlabel:[4,"countlabel"]},null),(l()(),u.tb(19,0,null,null,25,"div",[["flFlex",""],["flexLayout","row"],["flexLayout.lt-md","column"]],null,null,null,null,null)),(l()(),u.tb(20,0,null,null,18,"table",[],null,null,null,null,null)),(l()(),u.tb(21,0,null,null,0,"colgroup",[["span","4"]],null,null,null,null,null)),(l()(),u.tb(22,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),u.tb(23,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),u.tb(24,0,null,null,1,"th",[["scope","col"],["width","5%"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["S No"])),(l()(),u.tb(26,0,null,null,1,"th",[["scope","col"],["width","17%"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Name Of Student"])),(l()(),u.tb(28,0,null,null,1,"th",[["scope","col"],["width","5%"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Class"])),(l()(),u.tb(30,0,null,null,1,"th",[["scope","col"],["width","10%"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["DOB"])),(l()(),u.tb(32,0,null,null,1,"th",[["scope","col"],["width","13%"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Mobile No"])),(l()(),u.tb(34,0,null,null,1,"th",[["colspan","5"],["scope","colgroup"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Subjects"])),(l()(),u.tb(36,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),u.kb(16777216,null,null,1,null,_)),u.sb(38,278528,null,0,i.j,[u.S,u.P,u.u],{ngForOf:[0,"ngForOf"]},null),(l()(),u.tb(39,0,null,null,1,"ngx-alerts",[],null,null,null,h.b,h.a)),u.sb(40,114688,null,0,x.d,[x.c,x.b],null,null),(l()(),u.tb(41,0,null,null,3,"ngx-spinner",[["bdColor","rgba(4,4,4,0.43)"],["bdOpacity","1"],["color","#fff"],["size","medium"],["type","square-spin"]],null,null,null,B.b,B.a)),u.sb(42,770048,null,0,C.a,[C.c,u.h],{bdColor:[0,"bdColor"],size:[1,"size"],color:[2,"color"],type:[3,"type"],fullScreen:[4,"fullScreen"]},null),(l()(),u.tb(43,0,null,0,1,"h4",[["style","color: white;font-weight: 700;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Please Wait... "]))],function(l,n){var t=n.component;l(n,4,0,"row","column"),l(n,5,0,"20px"),l(n,6,0,""),l(n,8,0,""),l(n,10,0,"success","shopping_cart",t.orderReceivedCount,"Total Registration","Students / Exams"),l(n,12,0,""),l(n,14,0,"warn","view_list",t.totalRegistered,"Registration Done","Students / Exams"),l(n,16,0,""),l(n,18,0,"danger","contact_support",t.totalPending,"Pending Registration","Students / Exams"),l(n,38,0,t.gridData),l(n,40,0),l(n,42,0,"rgba(4,4,4,0.43)","medium","#fff","square-spin",!0)},null)}function y(l){return u.Mb(0,[(l()(),u.tb(0,0,null,null,4,"app-dashboard",[],null,null,null,w,v)),u.Hb(512,null,O.a,O.a,[M.c]),u.Hb(512,null,C.c,C.c,[]),u.Hb(512,null,x.b,x.b,[x.c]),u.sb(4,114688,null,0,S,[O.a,C.c,P.e,x.b],null,null)],function(l,n){l(n,4,0)},null)}var N=u.pb("app-dashboard",S,y,{},{},[]),j=t("NcP4"),I=t("t68o"),K=t("eDkP"),k=t("M2Lx"),D=t("uGex"),R=t("v9Dh"),L=t("ZYjt"),F=t("Wf4p"),T=t("4epT"),z=t("ZYCi"),H=function(){return function(){}}(),$=t("r43C"),q=function(){return function(){}}(),E=t("y4qS"),A=t("BHnd"),J=t("dWZg"),U=t("UodH"),G=t("OJI0"),W=t("4c35"),Z=t("qAlS"),V=t("seP3"),X=t("lLAP"),Y=t("hUWP"),Q=t("3pJQ"),ll=t("V9q+");t.d(n,"DashboardModuleNgFactory",function(){return nl});var nl=u.qb(e,[],function(l){return u.Ab([u.Bb(512,u.j,u.fb,[[8,[a.a,N,j.a,I.a]],[3,u.j],u.z]),u.Bb(4608,i.m,i.l,[u.w,[2,i.x]]),u.Bb(4608,K.c,K.c,[K.i,K.e,u.j,K.h,K.f,u.s,u.B,i.d,b.b,[2,i.g]]),u.Bb(5120,K.j,K.k,[K.c]),u.Bb(4608,k.c,k.c,[]),u.Bb(5120,D.a,D.b,[K.c]),u.Bb(5120,R.b,R.c,[K.c]),u.Bb(4608,L.f,F.e,[[2,F.i],[2,F.n]]),u.Bb(5120,T.c,T.a,[[3,T.c]]),u.Bb(5120,P.c,P.d,[K.c]),u.Bb(135680,P.e,P.e,[K.c,u.s,[2,i.g],[2,P.b],P.c,[3,P.e],K.e]),u.Bb(4608,c.j,c.i,[c.d,c.g]),u.Bb(5120,u.b,function(l,n){return[c.m(l,n)]},[i.d,u.D]),u.Bb(4608,x.b,x.b,[x.c]),u.Bb(1073742336,i.c,i.c,[]),u.Bb(1073742336,z.o,z.o,[[2,z.u],[2,z.l]]),u.Bb(1073742336,H,H,[]),u.Bb(1073742336,b.a,b.a,[]),u.Bb(1073742336,F.n,F.n,[[2,F.f],[2,L.g]]),u.Bb(1073742336,F.p,F.p,[]),u.Bb(1073742336,$.a,$.a,[]),u.Bb(1073742336,r.f,r.f,[]),u.Bb(1073742336,g.c,g.c,[]),u.Bb(1073742336,q,q,[]),u.Bb(1073742336,E.p,E.p,[]),u.Bb(1073742336,A.m,A.m,[]),u.Bb(1073742336,J.b,J.b,[]),u.Bb(1073742336,F.y,F.y,[]),u.Bb(1073742336,U.c,U.c,[]),u.Bb(1073742336,G.a,G.a,[]),u.Bb(1073742336,W.g,W.g,[]),u.Bb(1073742336,Z.c,Z.c,[]),u.Bb(1073742336,K.g,K.g,[]),u.Bb(1073742336,F.w,F.w,[]),u.Bb(1073742336,F.t,F.t,[]),u.Bb(1073742336,k.d,k.d,[]),u.Bb(1073742336,V.d,V.d,[]),u.Bb(1073742336,D.d,D.d,[]),u.Bb(1073742336,X.a,X.a,[]),u.Bb(1073742336,R.e,R.e,[]),u.Bb(1073742336,T.d,T.d,[]),u.Bb(1073742336,C.b,C.b,[]),u.Bb(1073742336,P.j,P.j,[]),u.Bb(1073742336,c.e,c.e,[]),u.Bb(1073742336,o.c,o.c,[]),u.Bb(1073742336,Y.a,Y.a,[]),u.Bb(1073742336,Q.a,Q.a,[]),u.Bb(1073742336,ll.a,ll.a,[[2,c.k],u.D]),u.Bb(1073742336,x.a,x.a,[]),u.Bb(1073742336,e,e,[]),u.Bb(1024,z.j,function(){return[[{path:"",component:S}]]},[]),u.Bb(256,c.f,{addFlexToParent:!1},[]),u.Bb(1024,c.a,function(){return[[]]},[]),u.Bb(256,x.c,{maxMessages:5,timeout:1e4,position:"right"},[])])})}}]);