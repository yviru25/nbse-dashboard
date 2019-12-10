import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedServices } from '../../shared/services/SharedServices';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { AlertService } from 'ngx-alerts';

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



    }


    public getDashboardComponent() {
        const arr = [];
        const subJ = [];
        let subJs = [];
        const arjs = [];
        this.gridData = [];
        this.spinner.show();
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
                            classId: d.class,
                            mobileNumber: d.mobileNumber,
                            dob: d.dob,
                            subjectName: d.subjectName
                        }
                    );
                });
               // console.log(groupByName);


                for (let i = 0; i < newArr.length; i++) {
                     subJs = [];
                     const jsonArr = groupByName[newArr[i].studentId];
                     for (let s = 0; s < jsonArr.length; s++) {
                        subJs.push(jsonArr[s].subjectName);
                     }
                     const d = {
                        studentId: newArr[i].studentId,
                        studentName: newArr[i].studentName,
                        classId: newArr[i].class,
                        mobileNumber: newArr[i].mobileNumber,
                        dob: newArr[i].dob,
                        subjectName: subJs
                    };
                    this.gridData.push(d);
                }
                console.log(this.gridData);
        });
    }

    confirmDialog(stuId: any): void {
        const message = `Are you sure you want to delete Student?`;

        const dialogData = new ConfirmDialogModel('Confirm Action', message);

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          maxWidth: '600px',
          data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                this.deleteStudent(stuId);
            }
        });
      }

    deleteStudent(studentId: any) {
        this.spinner.show();
        const url = 'deleteStudent?studentId=' + studentId;
        this.service.getHttpRequest(url).subscribe(res => {
            this.spinner.hide();
            if (res.affectedRows === 1) {
                this.getDashboardComponent();
                this.alertService.success('Student deleted Successfully');
            } else    {
                this.alertService.warning('Sorry !!! Student not deleted');
            }
        });
    }

}
