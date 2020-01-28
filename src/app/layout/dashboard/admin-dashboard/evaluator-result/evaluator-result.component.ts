import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedServices } from 'src/app/shared/services/SharedServices';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-evaluator-result',
  templateUrl: './evaluator-result.component.html',
  styleUrls: ['./evaluator-result.component.scss'],
  providers: [SharedServices]
})
export class EvaluatorResultComponent implements OnInit {

  @ViewChild('searchEvaluatorResultForm') formValues;
  public evaluatorResultModel = new EvaluatorResltModel();
  public evaluatorResultList = [];
  constructor(private service: SharedServices,
    private spinner: NgxSpinnerService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  searchEvaluatorResult(modelForm) {
    this.spinner.show();
    // tslint:disable-next-line:max-line-length
    const url = 'getStudentsResultsByEvaluatorNo?evaluatorNo=' + this.evaluatorResultModel.evaluatorNumber + '&classId=' + this.evaluatorResultModel.classNo;
    this.service.getHttpRequest(url)
        .subscribe(res => {
            this.evaluatorResultList = res;
            console.log(this.evaluatorResultList);
            if (this.evaluatorResultList.length > 0) {
                this.evaluatorResultList = res;
            } else {
              this.alertService.warning('No Record Found');
            }
            this.spinner.hide();
        });
  }

}


export class EvaluatorResltModel {
  evaluatorNumber: string;
  classNo: string;

}
