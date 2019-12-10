import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatDialogModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { StatModule } from '../../shared/modules/stat/stat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { AlertModule } from 'ngx-alerts';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatGridListModule,
        StatModule,
        MatCardModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        jqxGridModule,
        MatPaginatorModule,
        NgxSpinnerModule,
        MatDialogModule,
        FlexLayoutModule.withConfig({addFlexToParent: false}),
        AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'})
    ],
    providers: [],
    declarations: [DashboardComponent, ConfirmDialogComponent],
    entryComponents: [ConfirmDialogComponent]
})
export class DashboardModule {}
