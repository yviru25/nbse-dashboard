import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluatorResultComponent } from './evaluator-result.component';
import { EvaluatorResultRoutingModule } from './evaluator-result-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { AlertModule } from 'ngx-alerts';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [EvaluatorResultComponent],
  imports: [
    CommonModule,
    EvaluatorResultRoutingModule,
    FormsModule,
    SharedModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'})
  ]
})
export class EvaluatorResultModule { }
