import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedServices } from '../../../shared/services/SharedServices';
import { MatPaginator, MatTableDataSource, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/shared/pipes/app.date.format';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
  },
  {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
  }
  ]
})
export class StudentDashboardComponent implements OnInit {
  sessionStorage: any;
  public studProfile: StudentProfile;
  public dateOfBirth: any;
  public studentListDataSource = new MatTableDataSource<studentDataList>();
    public displayedColumns: string[] = ['subjectCode', 'SubjectName'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private service: SharedServices, private spinner: NgxSpinnerService, private alertService: AlertService) {

    }

    ngOnInit() {
       this.sessionStorage = JSON.parse(localStorage.getItem('loggedIn'));
       this.studProfile = this.sessionStorage[0];
       const date = this.sessionStorage[0].DOB;
       const str = date.split('/');
       const dob = str[1] + '/' + str[0] + '/' + str[2];
       this.studProfile.DOB = new Date(dob);
       console.log(this.studProfile.DOB);
       this.getAdminDashboardData();
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
       this.studentListDataSource.paginator = this.paginator;
  }

    getAdminDashboardData() {
      this.spinner.show();
      const url = 'getStudentProfile?studentId=' + this.sessionStorage[0].STUDENT_ID;
      this.service.getHttpRequest(url)
          .subscribe(res => {
              const studList = [];
              const respList: [] = res.slice(1);
              this.studentListDataSource.data = respList as studentDataList[];
              this.spinner.hide();
          });
    }


    updateStudentProfile(data) {
      this.spinner.show();
      const formData = new FormData();
          formData.append('email', this.studProfile.EMAIL_ID);
          formData.append('stu_name', this.studProfile.STUDENT_NAME);
          formData.append('mother_name', this.studProfile.MOTHER_NAME);
          formData.append('mother_num', this.studProfile.MOTHER_MOBILE_NO);
          formData.append('father_name', this.studProfile.FATHER_NAME);
          formData.append('father_num', this.studProfile.FATHER_MOBILE_NO);
          formData.append('dob', this.studProfile.DOB.toLocaleDateString());
          formData.append('classVal', this.studProfile.CLASS_ID);
          formData.append('stud_id', this.studProfile.STUDENT_ID);
          formData.append('stud_num', this.studProfile.MOBILE_NO);
      this.service.postHttpRequest('updateStudent', formData)
          .subscribe(res => {
              if (res.affectedRows === 1) {
                  this.alertService.success('Student Profile has been successfully updated');
              } else {
                this.alertService.danger('Sorry ! Failed while updating profile');
              }
              this.spinner.hide();
          });
    }
}


export interface studentDataList {
  STU_SUB_ID: number;
  studentId: number;
  SubjectName: string;
  FEES_PAID: number;
  subjectCode: string;
  MARKS_RECEIVED: string;
}

export class StudentProfile {
  CLASS_ID: string;
  COUNT_FEES_PAID: string;
  CREATED_AT: string;
  CREATED_BY: string;
  DOB: Date;
  EMAIL_ID: string;
  FATHER_MOBILE_NO: string;
  FATHER_NAME: string;
  IS_ACTIVE: string;
  LAST_LOGIN_AT: string;
  MOBILE_NO: string;
  MOTHER_MOBILE_NO: string;
  MOTHER_NAME: string;
  PASSWORD: string;
  PHOTO_PATH: string;
  ROLL_NO: string;
  SCHOOL_ID: string;
  STUDENT_ID: string;
  STUDENT_NAME: string;
  UPDATED_AT: string;
  UPDATED_BY: string;
  USERNAME: string;
}
