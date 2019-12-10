import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile.component';
import { StudentProfileRoutingModule } from './student-profile-routing';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentProfileComponent],
  imports: [
    CommonModule,
    StudentProfileRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class StudentProfileModule { }
