import { Component, OnInit, ViewChild } from '@angular/core';
import { AddSchoolModel } from '../model-interface/addschool-model';
import { SharedServices } from '../../../../shared/services/SharedServices';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss'],
  providers: [SharedServices, NgxSpinnerService, AlertService]
})
export class AddSchoolComponent implements OnInit {
  @ViewChild('addSchoolForm') formValues;
  public addSchoolModel = new AddSchoolModel();
  constructor(private service: SharedServices,
              private spinner: NgxSpinnerService,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  registerSchool(data) {
    this.spinner.show();
    const formData = new FormData();
        formData.append('schoolCode', this.addSchoolModel.schoolCode);
        formData.append('schoolName', this.addSchoolModel.schoolName);
        formData.append('schoolAddress', this.addSchoolModel.schoolAddress);
        formData.append('schoolCity', this.addSchoolModel.schoolCity);
        formData.append('schoolPhone', this.addSchoolModel.schoolPhone);
        formData.append('schoolEmail', this.addSchoolModel.schoolEmail);
        formData.append('coordinatorName', this.addSchoolModel.coordinatorName);
        formData.append('totalStudentCount', this.addSchoolModel.totalStudentCount);
        formData.append('totalSubjectCount', this.addSchoolModel.totalSubjectCount);
    this.service.postHttpRequest('registerSchool', formData)
        .subscribe(res => {
            if (res.affectedRows === 1) {
              this.formValues.resetForm();
                this.alertService.success('School Successfully Registered');
            } else {
              this.alertService.danger('Sorry ! School Registration Failed');
            }
            this.spinner.hide();
        });
  }

}
