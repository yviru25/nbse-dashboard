import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSchoolRsltComponent } from './view-school-rslt.component';

const routes: Routes = [
    {
        path: '',
        component: ViewSchoolRsltComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewSchoolResultRoutingModule {}
