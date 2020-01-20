import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewResultComponent } from './view-result.component';
import { ViewResultRoutingModule } from './view-result-routing';
import { SharedModule } from '../../../../shared/shared.module';
import { AlertModule } from 'ngx-alerts';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [ViewResultComponent],
  imports: [
    CommonModule,
    ViewResultRoutingModule,
    FormsModule,
    SharedModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'})
  ]
})
export class ViewResultModule { }
