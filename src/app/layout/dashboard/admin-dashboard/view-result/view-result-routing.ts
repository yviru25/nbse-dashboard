import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewResultComponent } from './view-result.component';

const routes: Routes = [
    {
        path: '',
        component: ViewResultComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewResultRoutingModule {}
