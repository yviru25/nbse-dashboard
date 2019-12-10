import { subectNameList } from './../../../../shared/services/shared-data';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedServices } from '../../../../shared/services/SharedServices';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';
import { MatDialog } from '@angular/material/dialog';
import { StudentProfile } from '../../student-dashboard/student-profile/student-profile.component';


@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss'],
  providers: [SharedServices, NgxSpinnerService]
})
export class SearchStudentComponent implements OnInit {
  @ViewChild('searchStudentForm') formValues;
  public searchStudentModel = new SearchStudentModel();
  public respList = [];
  public subjectList = [];
  public studentBasicInfo: any;
  public studProfile: StudentProfile;
  public subjectModel: SubjectModel;
  public subjectListMappingList = [];
  public studentEdit = false;
  constructor(private service: SharedServices,
              private spinner: NgxSpinnerService,
              private alertService: AlertService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }


  /* openDialog(studId: any) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    this.getStudentDetailByStudentId(studId);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } */


  searchStudent(formValue) {
    this.spinner.show();
    const url = 'getStudentsBySchoolClass?schoolCode=' + this.searchStudentModel.schoolCode + '&classId=' + this.searchStudentModel.class;
    this.service.getHttpRequest(url)
        .subscribe(res => {
            this.respList = res;
            if (this.respList.length <= 0) {
              this.alertService.warning('No Record Found');
            }
            // console.log(this.respList.length);
            this.spinner.hide();
        });
  }

  getStudentDetailByStudentId(studid: any) {
    this.spinner.show();
    this.studProfile = null;
    this.subjectListMappingList = [];
    const url = 'getStudentCompleteProfile?studentId=' + studid;
    this.service.getHttpRequest(url)
        .subscribe(res => {
            this.studentEdit = true;
            this.studProfile = res[0];
            const str = res[0].DOB.split('/');
            const dob = str[1] + '/' + str[0] + '/' + str[2];
            this.studProfile.DOB = new Date(dob);
            this.subjectList = res.slice(1);
            for (let i = 0; i < this.subjectList.length; i++) {
                const subjectName = this.getSubjectName(this.subjectList[i].subject_id);
                const subjectListMapping = {
                   subject_id: this.subjectList[i].subject_id,
                   subjectName: subjectName,
                   studentId: studid,
                   studentSubjectId: this.subjectList[i].studentSubjectId,
                   registrationStatus: this.subjectList[i].registrationStatus,
                   iconName: this.subjectList[i].registrationStatus === '1' ? 'delete_forever' : 'add_circle_outline',
                   actionType: this.subjectList[i].registrationStatus === '1' ? 'D' : 'A'
                };
                this.subjectListMappingList.push(subjectListMapping);
            }
            this.spinner.hide();
        });
  }

  handleBack() {
    this.studentEdit = false;
  }

  getSubjectName(subjectId: any): string {
    let subjectName: string;
    for (let s = 0; s < subectNameList.length; s++) {
       if (subectNameList[s].id === subjectId) {
          subjectName = subectNameList[s].name;
       }
    }
    return subjectName;
  }

  updateSubject(studentId: any, subId: any, studSubId: any, actionType: any) {
    this.spinner.show();
    // const subjectListMapping = {};

    const url = 'updateStudentSubject?studentId=' + studentId + '&subjectId=' + subId +
    '&studentSubjectId=' + studSubId + '&actionType=' + actionType;
    this.service.getHttpRequest(url)
        .subscribe(res => {
          this.getStudentDetailByStudentId(studentId);
          if (res.affectedRows === 1) {
            this.alertService.success('Subject successfully Added');
        } else if (res === 1) {
          this.alertService.danger('Subject successfully Deleted');
        } else {
          this.alertService.danger('Sorry ! Something went wrong');
        }
        this.spinner.hide();
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

export class SearchStudentModel {
  schoolCode: string;
  class: string;
}

export class SubjectModel {
  subject_id: string;
  subjectName: string;
  studentId: string;
  studentSubjectId: string;
  registrationStatus: string;
}
