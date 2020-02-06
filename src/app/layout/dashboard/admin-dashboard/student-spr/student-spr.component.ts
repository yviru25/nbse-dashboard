import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchStudentModel } from '../search-student/search-student.component';
import { SharedServices } from 'src/app/shared/services/SharedServices';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-student-spr',
  templateUrl: './student-spr.component.html',
  styleUrls: ['./student-spr.component.scss'],
  providers: [SharedServices]
})
export class StudentSprComponent implements OnInit {
  public gridData = [];
  @ViewChild('searchStudentForm') formValues;
  @ViewChild('studentAbsentModelForm') stuAbsentformValues;
  public searchStudentModel = new SearchStudentModel();
  public respList = [];
  public subjectList = [];
  public studentList = [];

  constructor(private service: SharedServices,
    private spinner: NgxSpinnerService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  searchStudent(formValue) {
    const responseArray = [];
    const arr = [];
    const subJ = [];
    let subJs = [];
    const arjs = [];
    this.gridData = [];
    this.spinner.show();
    const subWiseMarks = [];
    // tslint:disable-next-line:max-line-length
    const url = 'getStudentsResultBySchoolAndClass?schoolCode=' + this.searchStudentModel.schoolCode + '&classId=' + this.searchStudentModel.class;
    this.service.getHttpRequest(url)
        .subscribe(res => {
            this.respList = res;
            const elementId = [];
            // console.log(this.respList);
            if (this.respList.length > 0) {
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
            // console.log(newArr);
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
                        marks: d.marks_received,
                        subjectName: d.subjectName,
                        subjectId: d.subject_id
                    }
                );
            });
            for (let i = 0; i < newArr.length; i++) {
                 subJs = [];
                 const jsonArr = groupByName[newArr[i].studentId];
                 for (let s = 0; s < jsonArr.length; s++) {
                    let marks = '';
                    if (jsonArr[s].marks === null) {
                        marks = 'INP';
                    } else if (jsonArr[s].marks === -1) {
                        marks = 'AB';
                    } else if (jsonArr[s].marks === -2) {
                        marks = 'NDA';
                    } else {
                        marks = jsonArr[s].marks;
                    }

                     const subMarks = {
                          subjectName: jsonArr[s].subjectName,
                          subjectId: jsonArr[s].subjectId,
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
              this.alertService.warning('No Record Found');
            }
            console.log(this.gridData);
            this.spinner.hide();
        });

  }

  printToCart(printSectionId: string) {
    let popupWinindow: Window;
    const tab = document.getElementById(printSectionId);
    let style = '<style>';
     style = style + 'table {width: 100%;font: 17px Calibri;}';
     style = style + 'table, th, td {border: solid 1px #DDD; border-collapse: collapse;';
     style = style + 'text-align: center;}';
     style = style + '</style>';

    const win = window.open('', '', 'height=900,width=900');
    win.document.write(style);          //  add the style.
    win.document.write(tab.outerHTML);
    win.document.close();
    win.print();
}

}
