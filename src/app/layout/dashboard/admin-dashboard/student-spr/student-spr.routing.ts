import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentSprComponent } from './student-spr.component';

const routes: Routes = [
    {
        path: '',
        component: StudentSprComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentSprRoutingModule {}
