import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './student-dashboard.component';
import { StudentDashboardRoutingModule } from './student-dashboard-routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatMenuModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-alerts';

@NgModule({

  imports: [
    CommonModule,
    StudentDashboardRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    FormsModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'})
  ],
  declarations: [StudentDashboardComponent]
})
export class StudentDashboardModule { }
