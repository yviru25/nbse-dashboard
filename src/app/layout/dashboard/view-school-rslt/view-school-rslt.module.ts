import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSchoolRsltComponent } from './view-school-rslt.component';
import { ViewSchoolResultRoutingModule } from './view-school-rslt.routing';
import { AlertModule } from 'ngx-alerts';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ViewSchoolRsltComponent],
  imports: [
    CommonModule,
    ViewSchoolResultRoutingModule,
    FormsModule,
    SharedModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'})
  ]
})
export class ViewSchoolRsltModule { }
