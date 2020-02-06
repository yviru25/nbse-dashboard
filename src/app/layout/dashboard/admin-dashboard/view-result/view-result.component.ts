import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchStudentModel, StudentAbsentModel, SubjectModel } from '../search-student/search-student.component';
import { StudentProfile } from '../../student-dashboard/student-profile/student-profile.component';
import { SharedServices } from 'src/app/shared/services/SharedServices';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';
import { subectNameList } from '../../../../shared/services/shared-data';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss'],
  providers: [SharedServices]
})
export class ViewResultComponent implements OnInit {

  @ViewChild('searchStudentForm') formValues;
  @ViewChild('studentAbsentModelForm') stuAbsentformValues;
  public searchStudentModel = new SearchStudentModel();
  public studentAbsentModel = new StudentAbsentModel();
  public respList = [];
  public subjectList = [];
  public studentList = [];
  public studentBasicInfo: any;
  public studProfile: StudentProfile;
  public subjectModel: SubjectModel;
  public subjectListMappingList = [];
  public studentEdit = false;
  public subjectMapping = [];
  public studentIdForAbsent = '';

  constructor(private service: SharedServices,
    private spinner: NgxSpinnerService,
    private alertService: AlertService) { }

  ngOnInit() {
  }


  searchStudent(formValue) {
    this.spinner.show();
    // tslint:disable-next-line:max-line-length
    const url = 'getStudentsResultBySchoolAndClass?schoolCode=' + this.searchStudentModel.schoolCode + '&classId=' + this.searchStudentModel.class;
    this.service.getHttpRequest(url)
        .subscribe(res => {
            this.respList = res;
            if (this.respList.length > 0) {
                this.studentList = res;
              /* for (let i = 0; i < this.respList.length; i++) {
                const jsonModified = {
                    studentId: this.respList[i].studentId,
                    ROLL_NO: this.respList[i].ROLL_NO,
                    studentName: this.respList[i].studentName,
                    class: this.respList[i].class,
                    dob  : this.respList[i].dob,
                    FATHER_NAME: this.respList[i].FATHER_NAME,
                    FATHER_MOBILE_NO: this.respList[i].FATHER_MOBILE_NO

                };
                this.studentList.push(jsonModified); */
            // }
            } else {
              this.alertService.warning('No Record Found');
            }
            this.spinner.hide();
        });
  }


  handleBack() {
    this.studentEdit = false;
  }


  getStudentDetailByStudentId(studid: any) {
    this.spinner.show();
    this.studProfile = null;
    this.subjectListMappingList = [];
    this.studentIdForAbsent = studid;
    const url = 'getStudentCompleteProfile?studentId=' + studid;
    this.service.getHttpRequest(url)
        .subscribe(res => {
          this.subjectMapping = [];
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
                if (this.subjectList[i].registrationStatus === '1') {
                  const subIdMapping = {
                    subject_id: this.subjectList[i].subject_id,
                     subjectName: subjectName,
                  };
                  this.subjectMapping.push(subIdMapping);
                }
                this.subjectListMappingList.push(subjectListMapping);
            }
            this.spinner.hide();
        });
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

  updateStudentAbsent() {
    console.log(this.studentAbsentModel);
   this.spinner.show();
   let studentMarks = '';
   if (Number(this.studentAbsentModel.attendanceType) === -1) {
    studentMarks = '-1';
   } else if (Number(this.studentAbsentModel.attendanceType) === -2) {
    studentMarks = '-2';
   } else if (Number(this.studentAbsentModel.attendanceType) === 0) {
    studentMarks = 'null';
   } else {
    studentMarks = this.studentAbsentModel.marks;
   }
  const url = 'publishMarksAdmin?subjectCode='  + this.studentAbsentModel.stubjectId +
              '&studentId=' + this.studentIdForAbsent + '&mark=' + studentMarks;
   console.log(url);
   this.service.getHttpRequest(url)
      .subscribe(res => {
        if (res.affectedRows === 1) {
          this.stuAbsentformValues.resetForm();
          this.alertService.success('Marks successfully Updated');
        } else {
          this.alertService.danger('Sorry ! Something went wrong');
        }
        this.spinner.hide();
      });
}

}
