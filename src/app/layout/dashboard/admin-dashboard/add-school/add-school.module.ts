import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSchoolComponent } from './add-school.component';
import { AddSchoolRoutingModule } from './add-school-routing';
import { MatInputModule, MatCheckboxModule, MatButtonModule, MatSelectModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertModule } from 'ngx-alerts';

@NgModule({

  imports: [
    CommonModule,
    AddSchoolRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 10000, position: 'right'})
  ],
  providers: [],
  declarations: [AddSchoolComponent],
})
export class AddSchoolModule { }
