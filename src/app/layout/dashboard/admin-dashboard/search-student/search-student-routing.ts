import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchStudentComponent } from './search-student.component';

const routes: Routes = [
    {
        path: '',
        component: SearchStudentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchStudentRoutingModule {}
