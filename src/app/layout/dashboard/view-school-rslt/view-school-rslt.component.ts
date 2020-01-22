import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchStudentModel, StudentAbsentModel, SubjectModel } from '../admin-dashboard/search-student/search-student.component';
import { SharedServices } from 'src/app/shared/services/SharedServices';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-view-school-rslt',
  templateUrl: './view-school-rslt.component.html',
  styleUrls: ['./view-school-rslt.component.scss'],
  providers: [SharedServices]
})
export class ViewSchoolRsltComponent implements OnInit {

  @ViewChild('searchStudentForm') formValues;
  public searchStudentModel = new SearchStudentModel();
  public respList = [];
  public subjectList = [];
  public studentList = [];
  public studentBasicInfo: any;
  public subjectModel: SubjectModel;
  public subjectListMappingList = [];
  public studentEdit = false;
  public subjectMapping = [];
  public studentIdForAbsent = '';
  public schoolCode: string;
  constructor(private service: SharedServices,
    private spinner: NgxSpinnerService,
    private alertService: AlertService) { }

  ngOnInit() {
        const loggedInUser =  JSON.parse(localStorage.getItem('loggedIn'));
        this.searchStudentModel.schoolCode = loggedInUser[0].SCHOOL_CODE;
  }


  searchStudent(formValue) {
    this.spinner.show();
    // tslint:disable-next-line:max-line-length
    const url = 'getStudentsResultBySchoolAndClass?schoolCode=' + Number(this.searchStudentModel.schoolCode).toString() + '&classId=' + this.searchStudentModel.class;
    this.service.getHttpRequest(url)
        .subscribe(res => {
            this.respList = res;
            if (this.respList.length > 0) {
                this.studentList = res;
            } else {
              this.alertService.warning('No Record Found');
            }
            this.spinner.hide();
        });
  }

}
