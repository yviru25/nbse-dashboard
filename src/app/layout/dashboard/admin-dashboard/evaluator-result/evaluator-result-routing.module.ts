import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluatorResultComponent } from './evaluator-result.component';

const routes: Routes = [
    {
        path: '',
        component: EvaluatorResultComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EvaluatorResultRoutingModule {}
