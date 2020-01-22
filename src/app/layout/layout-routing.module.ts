import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'admin-dashboard',
                loadChildren: './dashboard/admin-dashboard/admin-dashboard.module#AdminDashboardModule'
            },
            {
                path: 'add-school',
                loadChildren: './dashboard/admin-dashboard/add-school/add-school.module#AddSchoolModule'
            },
            {
                path: 'search-student',
                loadChildren: './dashboard/admin-dashboard/search-student/search-student.module#SearchStudentModule'
            },
            {
                path: 'view-result',
                loadChildren: './dashboard/admin-dashboard/view-result/view-result.module#ViewResultModule'
            },
            {
                path: 'view-school-result',
                loadChildren: './dashboard/view-school-rslt/view-school-rslt.module#ViewSchoolRsltModule'
            },
            {
                path: 'student-dashboard',
                loadChildren: './dashboard/student-dashboard/student-dashboard.module#StudentDashboardModule'
            },
            {
                path: 'student-admitcard',
                loadChildren: './dashboard/student-dashboard/student-profile/student-profile.module#StudentProfileModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
