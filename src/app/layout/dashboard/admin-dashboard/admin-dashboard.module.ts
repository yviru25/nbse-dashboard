import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({

  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    jqxGridModule,
    MatPaginatorModule,
    NgxSpinnerModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  providers: [],
  declarations: [AdminDashboardComponent],
})
export class AdminDashboardModule {

}
