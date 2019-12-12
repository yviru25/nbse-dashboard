import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchStudentComponent } from './search-student.component';
import { SearchStudentRoutingModule } from './search-student-routing';
import { SharedModule } from '../../../../shared/shared.module';
import { AlertModule } from 'ngx-alerts';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmDialogComponent } from 'src/app/layout/components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [SearchStudentComponent, ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    SearchStudentRoutingModule,
    FormsModule,
    SharedModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'})
  ]
})
export class SearchStudentModule { }
