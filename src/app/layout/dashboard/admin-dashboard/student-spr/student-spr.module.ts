import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSprComponent } from './student-spr.component';
import { StudentSprRoutingModule } from './student-spr.routing';
import { SharedModule } from '../../../../shared/shared.module';
import { AlertModule } from 'ngx-alerts';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [StudentSprComponent],
  imports: [
    CommonModule,
    StudentSprRoutingModule,
    FormsModule,
    SharedModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'})
  ]
})
export class StudentSprModule { }
