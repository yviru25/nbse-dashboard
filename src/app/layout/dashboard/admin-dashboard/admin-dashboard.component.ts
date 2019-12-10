import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedServices } from '../../../shared/services/SharedServices';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { tap } from 'rxjs/operators';
import { SchoolList } from './model-interface/schoollist';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  providers: [SharedServices, NgxSpinnerService]
})
export class AdminDashboardComponent implements OnInit {

    public schoolListDataSource = new MatTableDataSource<SchoolList>();
    public displayedColumns: string[] = ['SCHOOL_CODE', 'SCHOOL_NAME', 'SCHOOL_STATE', 'SCHOOL_CITY', 'SCHOOL_COORDINATOR', 'SCHOOL_PHONE_NUMBER', 'SCHOOL_PHONE_EMAIL', 'TOTAL_SCHOOL_COUNT', 'TOTAL_SUBJECT_COUNT'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private service: SharedServices, private spinner: NgxSpinnerService) {

    }

    ngOnInit() {
       this.getAdminDashboardData();
    }

    ngAfterViewInit() {
      this.schoolListDataSource.paginator = this.paginator;
  }

    getAdminDashboardData() {
      this.spinner.show();
      const url = 'getAllSchools';
      this.service.getHttpRequest(url)
          .subscribe(res => {
              this.schoolListDataSource.data = res as SchoolList[];
              this.spinner.hide();
          });
    }

}
