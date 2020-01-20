import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchStudentModel, StudentAbsentModel, SubjectModel } from '../search-student/search-student.component';
import { StudentProfile } from '../../student-dashboard/student-profile/student-profile.component';
import { SharedServices } from 'src/app/shared/services/SharedServices';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';

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

  getStudentDetailByStudentId(studentId) {
     this.alertService.warning('Edit functionality will be available soon');
  }

}
