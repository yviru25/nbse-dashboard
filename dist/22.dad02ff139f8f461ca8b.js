(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{UE8e:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),a=u("pMnS"),o=u("21Lb"),c=u("OzfB"),b=u("Fzqc"),s=u("lzlj"),r=u("Ip0R"),i=u("FVSy"),d=u("Mr+X"),g=u("SMsm"),p=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),m=t.rb({encapsulation:0,styles:[["[_nghost-%COMP%]     .mat-card-header-text{width:100%;text-align:right}.icon-lg[_ngcontent-%COMP%]{font-size:40px}.mat-card[_ngcontent-%COMP%]{color:#fff}.mat-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{width:100%}.mat-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:40px!important}.mat-card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{color:#fff}.mat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer;color:#fff}.mat-card.danger[_ngcontent-%COMP%]{background:linear-gradient(60deg,#ec407a,#d81b60)}.mat-card.warn[_ngcontent-%COMP%]{background:linear-gradient(60deg,#ffa726,#fb8c00)}.mat-card.success[_ngcontent-%COMP%]{background:linear-gradient(60deg,#66bb6a,#43a047)}.mat-card.info[_ngcontent-%COMP%]{background:linear-gradient(60deg,#26c6da,#00acc1)}"]],data:{}});function f(l){return t.Mb(0,[(l()(),t.tb(0,0,null,null,20,"mat-card",[["class","mat-card"]],null,null,null,s.d,s.a)),t.sb(1,278528,null,0,r.i,[t.u,t.v,t.k,t.G],{ngClass:[0,"ngClass"]},null),t.sb(2,49152,null,0,i.a,[],null,null),(l()(),t.tb(3,0,null,0,15,"mat-card-header",[["class","mat-card-header"]],null,null,null,s.c,s.b)),t.sb(4,49152,null,0,i.e,[],null,null),(l()(),t.tb(5,0,null,0,4,"div",[["class","mat-card-avatar"],["mat-card-avatar",""]],null,null,null,null,null)),t.sb(6,16384,null,0,i.c,[],null,null),(l()(),t.tb(7,0,null,null,2,"mat-icon",[["class","icon-lg mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,d.b,d.a)),t.sb(8,9158656,null,0,g.b,[t.k,g.d,[8,null],[2,g.a]],null,null),(l()(),t.Kb(9,0,["",""])),(l()(),t.tb(10,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),t.sb(11,16384,null,0,i.h,[],null,null),(l()(),t.Kb(12,null,["",""])),(l()(),t.tb(13,0,null,1,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),t.sb(14,16384,null,0,i.g,[],null,null),(l()(),t.Kb(15,null,["",""])),(l()(),t.tb(16,0,null,1,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),t.sb(17,16384,null,0,i.g,[],null,null),(l()(),t.Kb(18,null,["",""])),(l()(),t.tb(19,0,null,0,1,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),t.sb(20,16384,null,0,i.b,[],null,null)],function(l,n){l(n,1,0,n.component.bgClass),l(n,8,0)},function(l,n){var u=n.component;l(n,7,0,t.Db(n,8).inline),l(n,9,0,u.icon),l(n,12,0,u.count),l(n,15,0,u.countlabel),l(n,18,0,u.label),l(n,19,0,"end"===t.Db(n,20).align)})}var h=u("THyX"),x=u("Ozuo"),B=u("jvCn"),C=u("miAi"),O=u("/oO5"),M=u("t/Na"),S=function(){function l(l,n,u,t){this.service=l,this.spinner=n,this.dialog=u,this.alertService=t,this.gridData=[]}return l.prototype.ngOnInit=function(){var l=JSON.parse(localStorage.getItem("loggedIn"));this.schoolCode=l[0].SCHOOL_CODE,this.orderReceivedSub=l[0].TOTAL_SCHOOL_COUNT,this.orderReceivedStu=l[0].TOTAL_SUBJECT_COUNT,this.registeredStudents=l[1].registeredStudents,this.registeredSubjects=l[1].registeredSubjects,this.orderReceivedCount=this.orderReceivedSub+"/"+this.orderReceivedStu,this.totalRegistered=this.registeredStudents+"/"+this.registeredSubjects,this.totalPending=(parseInt(this.orderReceivedSub)-parseInt(this.registeredStudents)).toString()+"/"+(parseInt(this.orderReceivedStu)-parseInt(this.registeredSubjects)).toString(),this.getDashboardComponent()},l.prototype.getDashboardComponent=function(){var l=this,n=[];this.gridData=[],this.spinner.show();var u="getRegisteredStudentsBySchool?schoolCode="+Number(this.schoolCode).toString();this.service.getHttpRequest(u).subscribe(function(u){l.spinner.hide();var t=[];console.log(u);var e=u.filter(function(l){return-1===t.indexOf(l.studentId)&&(t.push(l.studentId),!0)});console.log(e);var a={};u.forEach(function(l){a[l.studentId]=a[l.studentId]||[],a[l.studentId].push({studentId:l.studentId,studentName:l.studentName,rollNo:l.rollNo,classId:l.class,mobileNumber:l.mobileNumber,dob:l.dob,subjectName:l.subjectName})});for(var o=0;o<e.length;o++){n=[];for(var c=a[e[o].studentId],b=0;b<c.length;b++)n.push(c[b].subjectName);l.gridData.push({studentId:e[o].studentId,studentName:e[o].studentName,rollNo:e[o].rollNo,classId:e[o].class,mobileNumber:e[o].mobileNumber,dob:e[o].dob,subjectName:n})}console.log(l.gridData)})},l}(),P=u("o3x0"),v=t.rb({encapsulation:0,styles:[[".mat-card[_ngcontent-%COMP%]{text-align:center}.mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;margin-top:-25px}.mat-table[_ngcontent-%COMP%]{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mb-20[_ngcontent-%COMP%]{margin-bottom:20px}#tableGrid[_ngcontent-%COMP%]{height:10px!important}table[_ngcontent-%COMP%]{color:#333;width:100%;border-collapse:collapse;border-spacing:0}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #ccc;height:30px}th[_ngcontent-%COMP%]{background:#1084d1;font-weight:700;color:#fff}td[_ngcontent-%COMP%]{background:#fafafa;text-align:center}"]],data:{}});function N(l){return t.Mb(0,[(l()(),t.tb(0,0,null,null,22,"tr",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(2,null,["",""])),(l()(),t.tb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(4,null,["",""])),(l()(),t.tb(5,0,null,null,1,"td",[["rowspan","1"],["scope","rowgroup"]],null,null,null,null,null)),(l()(),t.Kb(6,null,["",""])),(l()(),t.tb(7,0,null,null,1,"td",[["scope","row"]],null,null,null,null,null)),(l()(),t.Kb(8,null,["",""])),(l()(),t.tb(9,0,null,null,1,"td",[["scope","row"]],null,null,null,null,null)),(l()(),t.Kb(10,null,["",""])),(l()(),t.tb(11,0,null,null,1,"td",[["scope","row"]],null,null,null,null,null)),(l()(),t.Kb(12,null,["",""])),(l()(),t.tb(13,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(14,null,["",""])),(l()(),t.tb(15,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(16,null,["",""])),(l()(),t.tb(17,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(18,null,["",""])),(l()(),t.tb(19,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(20,null,["",""])),(l()(),t.tb(21,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Kb(22,null,["",""]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.rollNo),l(n,6,0,n.context.$implicit.studentName),l(n,8,0,n.context.$implicit.classId),l(n,10,0,n.context.$implicit.dob),l(n,12,0,n.context.$implicit.mobileNumber),l(n,14,0,n.context.$implicit.subjectName[0]),l(n,16,0,n.context.$implicit.subjectName[1]),l(n,18,0,n.context.$implicit.subjectName[2]),l(n,20,0,n.context.$implicit.subjectName[3]),l(n,22,0,n.context.$implicit.subjectName[4])})}function _(l){return t.Mb(0,[(l()(),t.tb(0,0,null,null,15,"div",[["class","mb-20"],["fxFlex",""],["fxLayout","row"],["fxLayout.lt-md","column"],["fxLayoutGap","20px"]],null,null,null,null,null)),t.sb(1,737280,null,0,o.e,[c.h,t.k,c.l],{layout:[0,"layout"],layoutLtMd:[1,"layoutLtMd"]},null),t.sb(2,1785856,null,0,o.f,[c.h,t.k,[6,o.e],t.B,b.b,c.l],{gap:[0,"gap"]},null),t.sb(3,737280,null,0,o.a,[c.h,t.k,[3,o.e],c.l,c.f],{flex:[0,"flex"]},null),(l()(),t.tb(4,0,null,null,3,"div",[["fxFlex",""]],null,null,null,null,null)),t.sb(5,737280,null,0,o.a,[c.h,t.k,[3,o.e],c.l,c.f],{flex:[0,"flex"]},null),(l()(),t.tb(6,0,null,null,1,"app-stat",[],null,null,null,f,m)),t.sb(7,114688,null,0,p,[],{bgClass:[0,"bgClass"],icon:[1,"icon"],count:[2,"count"],label:[3,"label"],countlabel:[4,"countlabel"]},null),(l()(),t.tb(8,0,null,null,3,"div",[["fxFlex",""]],null,null,null,null,null)),t.sb(9,737280,null,0,o.a,[c.h,t.k,[3,o.e],c.l,c.f],{flex:[0,"flex"]},null),(l()(),t.tb(10,0,null,null,1,"app-stat",[],null,null,null,f,m)),t.sb(11,114688,null,0,p,[],{bgClass:[0,"bgClass"],icon:[1,"icon"],count:[2,"count"],label:[3,"label"],countlabel:[4,"countlabel"]},null),(l()(),t.tb(12,0,null,null,3,"div",[["fxFlex",""]],null,null,null,null,null)),t.sb(13,737280,null,0,o.a,[c.h,t.k,[3,o.e],c.l,c.f],{flex:[0,"flex"]},null),(l()(),t.tb(14,0,null,null,1,"app-stat",[],null,null,null,f,m)),t.sb(15,114688,null,0,p,[],{bgClass:[0,"bgClass"],icon:[1,"icon"],count:[2,"count"],label:[3,"label"],countlabel:[4,"countlabel"]},null),(l()(),t.tb(16,0,null,null,27,"div",[["flFlex",""],["flexLayout","row"],["flexLayout.lt-md","column"]],null,null,null,null,null)),(l()(),t.tb(17,0,null,null,20,"table",[],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,0,"colgroup",[["span","4"]],null,null,null,null,null)),(l()(),t.tb(19,0,null,null,15,"thead",[],null,null,null,null,null)),(l()(),t.tb(20,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),t.tb(21,0,null,null,1,"th",[["scope","col"],["width","5%"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["S No"])),(l()(),t.tb(23,0,null,null,1,"th",[["scope","col"],["width","10%"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Roll No"])),(l()(),t.tb(25,0,null,null,1,"th",[["scope","col"],["width","17%"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Name Of Student"])),(l()(),t.tb(27,0,null,null,1,"th",[["scope","col"],["width","5%"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Class"])),(l()(),t.tb(29,0,null,null,1,"th",[["scope","col"],["width","10%"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["DOB"])),(l()(),t.tb(31,0,null,null,1,"th",[["scope","col"],["width","13%"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Mobile No"])),(l()(),t.tb(33,0,null,null,1,"th",[["colspan","5"],["scope","colgroup"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Subjects"])),(l()(),t.tb(35,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.kb(16777216,null,null,1,null,N)),t.sb(37,278528,null,0,r.j,[t.S,t.P,t.u],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(38,0,null,null,1,"ngx-alerts",[],null,null,null,h.b,h.a)),t.sb(39,114688,null,0,x.d,[x.c,x.b],null,null),(l()(),t.tb(40,0,null,null,3,"ngx-spinner",[["bdColor","rgba(4,4,4,0.43)"],["bdOpacity","1"],["color","#fff"],["size","medium"],["type","square-spin"]],null,null,null,B.b,B.a)),t.sb(41,770048,null,0,C.a,[C.c,t.h],{bdColor:[0,"bdColor"],size:[1,"size"],color:[2,"color"],type:[3,"type"],fullScreen:[4,"fullScreen"]},null),(l()(),t.tb(42,0,null,0,1,"h4",[["style","color: white;font-weight: 700;"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" Please Wait... "]))],function(l,n){var u=n.component;l(n,1,0,"row","column"),l(n,2,0,"20px"),l(n,3,0,""),l(n,5,0,""),l(n,7,0,"success","shopping_cart",u.orderReceivedCount,"Total Registration","Students / Exams"),l(n,9,0,""),l(n,11,0,"warn","view_list",u.totalRegistered,"Registration Done","Students / Exams"),l(n,13,0,""),l(n,15,0,"danger","contact_support",u.totalPending,"Pending Registration","Students / Exams"),l(n,37,0,u.gridData),l(n,39,0),l(n,41,0,"rgba(4,4,4,0.43)","medium","#fff","square-spin",!0)},null)}function w(l){return t.Mb(0,[(l()(),t.tb(0,0,null,null,4,"app-dashboard",[],null,null,null,_,v)),t.Hb(512,null,O.a,O.a,[M.c]),t.Hb(512,null,C.c,C.c,[]),t.Hb(512,null,x.b,x.b,[x.c]),t.sb(4,114688,null,0,S,[O.a,C.c,P.e,x.b],null,null)],function(l,n){l(n,4,0)},null)}var y=t.pb("app-dashboard",S,w,{},{},[]),j=u("NcP4"),I=u("t68o"),K=u("eDkP"),k=u("M2Lx"),D=u("uGex"),R=u("v9Dh"),L=u("ZYjt"),F=u("Wf4p"),T=u("4epT"),z=u("ZYCi"),$=function(){return function(){}}(),H=u("r43C"),q=function(){return function(){}}(),E=u("y4qS"),A=u("BHnd"),J=u("dWZg"),U=u("UodH"),G=u("OJI0"),W=u("4c35"),Z=u("qAlS"),V=u("seP3"),X=u("lLAP"),Y=u("hUWP"),Q=u("3pJQ"),ll=u("V9q+");u.d(n,"DashboardModuleNgFactory",function(){return nl});var nl=t.qb(e,[],function(l){return t.Ab([t.Bb(512,t.j,t.fb,[[8,[a.a,y,j.a,I.a]],[3,t.j],t.z]),t.Bb(4608,r.m,r.l,[t.w,[2,r.x]]),t.Bb(4608,K.c,K.c,[K.i,K.e,t.j,K.h,K.f,t.s,t.B,r.d,b.b,[2,r.g]]),t.Bb(5120,K.j,K.k,[K.c]),t.Bb(4608,k.c,k.c,[]),t.Bb(5120,D.a,D.b,[K.c]),t.Bb(5120,R.b,R.c,[K.c]),t.Bb(4608,L.f,F.e,[[2,F.i],[2,F.n]]),t.Bb(5120,T.c,T.a,[[3,T.c]]),t.Bb(5120,P.c,P.d,[K.c]),t.Bb(135680,P.e,P.e,[K.c,t.s,[2,r.g],[2,P.b],P.c,[3,P.e],K.e]),t.Bb(4608,c.j,c.i,[c.d,c.g]),t.Bb(5120,t.b,function(l,n){return[c.m(l,n)]},[r.d,t.D]),t.Bb(4608,x.b,x.b,[x.c]),t.Bb(1073742336,r.c,r.c,[]),t.Bb(1073742336,z.o,z.o,[[2,z.u],[2,z.l]]),t.Bb(1073742336,$,$,[]),t.Bb(1073742336,b.a,b.a,[]),t.Bb(1073742336,F.n,F.n,[[2,F.f],[2,L.g]]),t.Bb(1073742336,F.p,F.p,[]),t.Bb(1073742336,H.a,H.a,[]),t.Bb(1073742336,i.f,i.f,[]),t.Bb(1073742336,g.c,g.c,[]),t.Bb(1073742336,q,q,[]),t.Bb(1073742336,E.p,E.p,[]),t.Bb(1073742336,A.m,A.m,[]),t.Bb(1073742336,J.b,J.b,[]),t.Bb(1073742336,F.y,F.y,[]),t.Bb(1073742336,U.c,U.c,[]),t.Bb(1073742336,G.a,G.a,[]),t.Bb(1073742336,W.g,W.g,[]),t.Bb(1073742336,Z.c,Z.c,[]),t.Bb(1073742336,K.g,K.g,[]),t.Bb(1073742336,F.w,F.w,[]),t.Bb(1073742336,F.t,F.t,[]),t.Bb(1073742336,k.d,k.d,[]),t.Bb(1073742336,V.d,V.d,[]),t.Bb(1073742336,D.d,D.d,[]),t.Bb(1073742336,X.a,X.a,[]),t.Bb(1073742336,R.e,R.e,[]),t.Bb(1073742336,T.d,T.d,[]),t.Bb(1073742336,C.b,C.b,[]),t.Bb(1073742336,P.j,P.j,[]),t.Bb(1073742336,c.e,c.e,[]),t.Bb(1073742336,o.c,o.c,[]),t.Bb(1073742336,Y.a,Y.a,[]),t.Bb(1073742336,Q.a,Q.a,[]),t.Bb(1073742336,ll.a,ll.a,[[2,c.k],t.D]),t.Bb(1073742336,x.a,x.a,[]),t.Bb(1073742336,e,e,[]),t.Bb(1024,z.j,function(){return[[{path:"",component:S}]]},[]),t.Bb(256,c.f,{addFlexToParent:!1},[]),t.Bb(1024,c.a,function(){return[[]]},[]),t.Bb(256,x.c,{maxMessages:5,timeout:1e4,position:"right"},[])])})}}]);