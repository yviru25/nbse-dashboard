import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedServices } from '../../shared/services/SharedServices';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { AlertService } from 'ngx-alerts';

declare var jQuery;
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [SharedServices, NgxSpinnerService, AlertService]
})
export class DashboardComponent implements OnInit {
    public gridData = [];
    public filterSettings: any;
    public registeredStudents: string;
    public registeredSubjects: string;
    public orderReceivedSub: string;
    public orderReceivedStu: string;
    public orderReceivedCount: string;
    public totalRegistered: string;
    public totalPending: string;
    public schoolCode: string;
    public subscription: Subscription;
    public selectedIndex = -1;
    constructor(private service: SharedServices,
                private spinner: NgxSpinnerService,
                public dialog: MatDialog,
                public alertService: AlertService) {

    }

    ngOnInit() {
            const loggedInUser =  JSON.parse(localStorage.getItem('loggedIn'));
            this.schoolCode = loggedInUser[0].SCHOOL_CODE;
            this.orderReceivedSub = loggedInUser[0].TOTAL_SCHOOL_COUNT;
            this.orderReceivedStu = loggedInUser[0].TOTAL_SUBJECT_COUNT;
            this.registeredStudents = loggedInUser[1].registeredStudents;
            this.registeredSubjects = loggedInUser[1].registeredSubjects;
            this.orderReceivedCount =  this.orderReceivedSub + '/' + this.orderReceivedStu;
            this.totalRegistered =   this.registeredStudents + '/' + this.registeredSubjects;
            this.totalPending =  (parseInt(this.orderReceivedSub) - parseInt(this.registeredStudents)).toString()
                             + '/' + (parseInt(this.orderReceivedStu) - parseInt(this.registeredSubjects)).toString();
            this.getDashboardComponent();


            /* jQuery('table').on('click', 'tr.parent .arrow-dwn', function() {
                jQuery(this).closest('tbody').toggleClass('open');
              }); */

    }

    showMore(event, index) {
        this.selectedIndex = index;
    }

    public getDashboardComponent() {
        let responseArray = [];
        const arr = [];
        const subJ = [];
        let subJs = [];
        const arjs = [];
        this.gridData = [];
        this.spinner.show();
        let scholCode = '';
        // tslint:disable-next-line:max-line-length
        scholCode = Number(this.schoolCode).toString();
        const url = 'getRegisteredStudentsBySchool?schoolCode=' + scholCode;
        this.service.getHttpRequest(url)
            .subscribe(res => {
                this.spinner.hide();
                const elementId = [];
                responseArray = res;
                if (responseArray != null && responseArray.length > 0) {
                    // console.log(res);
                const newArr = res.filter(el => {
                    if (elementId.indexOf(el.studentId) === -1) {
                        // If not present in array, then add it
                        elementId.push(el.studentId);
                        return true;
                    } else {
                        // Already present in array, don't add it
                        // arr.push(el);
                        return false;
                    }
                });
                 console.log(newArr);
               // console.log(arr);

                const groupByName = {};

                res.forEach(function (d) {
                    groupByName [d.studentId] = groupByName [d.studentId] || [];
                    groupByName [d.studentId].push(
                        {
                            studentId: d.studentId,
                            studentName: d.studentName,
                            rollNo: d.rollNo,
                            classId: d.class,
                            mobileNumber: d.mobileNumber,
                            dob: d.dob,
                            marks: d.MARKS_RECEIVED,
                            subjectName: d.subjectName
                        }
                    );
                });
                for (let i = 0; i < newArr.length; i++) {
                     subJs = [];
                     const jsonArr = groupByName[newArr[i].studentId];
                     for (let s = 0; s < jsonArr.length; s++) {
                        let marks = '';
                        if (jsonArr[s].marks === null) {
                            marks = 'In-Progress';
                        } else if (jsonArr[s].marks === -1) {
                            marks = 'Absent';
                        } else {
                            marks = jsonArr[s].marks;
                        }

                         const subMarks = {
                              subjectName: jsonArr[s].subjectName,
                              subjectMarks: marks
                         };
                        subJs.push(subMarks);
                     }
                     const d = {
                        studentId: newArr[i].studentId,
                        studentName: newArr[i].studentName,
                        rollNo: newArr[i].rollNo,
                        classId: newArr[i].class,
                        mobileNumber: newArr[i].mobileNumber,
                        dob: newArr[i].dob,
                        subjectName: subJs,
                        visible: false
                    };
                    this.gridData.push(d);
                }
                } else {
                    this.getDashboardComponentData();
                }
        });
    }


    public getDashboardComponentData() {
        const arr = [];
        const subJ = [];
        let subJs = [];
        const arjs = [];
        this.gridData = [];
        this.spinner.show();
        const scholCode = '';
        // tslint:disable-next-line:max-line-length
        const url = 'getRegisteredStudentsBySchool?schoolCode=' + this.schoolCode;
        this.service.getHttpRequest(url)
            .subscribe(res => {
                this.spinner.hide();
                const elementId = [];
                const newArr = res.filter(el => {
                    if (elementId.indexOf(el.studentId) === -1) {
                        // If not present in array, then add it
                        elementId.push(el.studentId);
                        return true;
                    } else {
                        // Already present in array, don't add it
                        // arr.push(el);
                        return false;
                    }
                });
                 console.log(newArr);
               // console.log(arr);

                const groupByName = {};

                res.forEach(function (d) {
                    groupByName [d.studentId] = groupByName [d.studentId] || [];
                    groupByName [d.studentId].push(
                        {
                            studentId: d.studentId,
                            studentName: d.studentName,
                            rollNo: d.rollNo,
                            classId: d.class,
                            mobileNumber: d.mobileNumber,
                            dob: d.dob,
                            marks: d.MARKS_RECEIVED,
                            subjectName: d.subjectName
                        }
                    );
                });
                for (let i = 0; i < newArr.length; i++) {
                     subJs = [];
                     const jsonArr = groupByName[newArr[i].studentId];
                     for (let s = 0; s < jsonArr.length; s++) {
                        let marks = '';
                        if (jsonArr[s].marks === null) {
                            marks = 'In-Progress';
                        } else if (jsonArr[s].marks === -1) {
                            marks = 'Absent';
                        } else {
                            marks = jsonArr[s].marks;
                        }

                         const subMarks = {
                              subjectName: jsonArr[s].subjectName,
                              subjectMarks: marks
                         };
                        subJs.push(subMarks);
                     }
                     const d = {
                        studentId: newArr[i].studentId,
                        studentName: newArr[i].studentName,
                        rollNo: newArr[i].rollNo,
                        classId: newArr[i].class,
                        mobileNumber: newArr[i].mobileNumber,
                        dob: newArr[i].dob,
                        subjectName: subJs,
                        visible: false
                    };
                    this.gridData.push(d);
                }
        });
    }

}
