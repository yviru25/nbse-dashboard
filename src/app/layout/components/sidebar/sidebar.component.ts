import { Component, OnInit } from '@angular/core';
import { SharedServices } from '../../../shared/services/SharedServices';
import { roleId } from '../../../login/login.component';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
const browserRefresh = false;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    providers: [SharedServices]
})
export class SidebarComponent implements OnInit {
    public showMenu: string;
    // public subscription: Subscription;
    constructor(private service: SharedServices, private router: Router) {
     /*    this.subscription = router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
              browserRefresh = !router.navigated;
              if (browserRefresh) {
                  this.router.navigate(['/login']);
                  localStorage.clear();
              }
            }
        }); */
    }
    public sideMenuResponse: any;
    ngOnInit() {
        this.showMenu = '';
        console.log(roleId);
        if (roleId === undefined || roleId === '') {
            this.router.navigate(['/login']);
            return;
        }
        if (roleId === 'admin') {
            this.sideMenuResponse =   [
                {
                    'displayName': 'Dashboard',
                    'router': '/admin-dashboard',
                    'iconName': 'dashboard'
                },
                {
                    'displayName': 'Add School',
                    'router': '/add-school',
                    'iconName': 'person_add'
                },
                {
                    'displayName': 'Search Student',
                    'router': '/search-student',
                    'iconName': 'search'
                },
                {
                    'displayName': 'View Result',
                    'router': '/view-result',
                    'iconName': 'view_list'
                },
                {
                    'displayName': 'Evaluator Result',
                    'router': '/evaluator-result',
                    'iconName': 'view_list'
                },
                {
                    'displayName': 'Download Marksheet',
                    'router': 'download-marksheet',
                    'iconName': 'cloud_download'
                },
                {
                    'displayName': 'Download attendance Sheet',
                    'router': 'download-attendance-sheet',
                    'iconName': 'cloud_download'
                },
                {
                    'displayName': 'Download Packing Sheet',
                    'router': 'download-packaging-sheet',
                    'iconName': 'cloud_download'
                }
            ];
         } else if (roleId === 'student') {
            this.sideMenuResponse = [
                {
                    'displayName': 'Dashboard',
                    'router': '/student-dashboard',
                    'iconName': 'dashboard'
                },
                {
                    'displayName': 'Download Admit Card',
                    'router': '/student-admitcard',
                    'iconName': 'cloud_download'
                },
                {
                    'displayName': 'Download Marksheet',
                    'router': 'downloadMarkSheet',
                    'iconName': 'cloud_download'
                },
                {
                    'displayName': 'Re-Verification',
                    'router': 'reVerification',
                    'iconName': 'list_alt'
                },
                {
                    'displayName': 'Re-evaluation & Scanned Copy',
                    'router': 'reEvaluation',
                    'iconName': 'bookmarks'
                }
            ];
         } else {
            this.sideMenuResponse = [
                {
                    'displayName': 'Dashboard',
                    'router': '/dashboard',
                    'iconName': 'dashboard'
                },
                {
                    'displayName': 'View Result',
                    'router': '/view-school-result',
                    'iconName': 'view_list'
                },
                {
                    'displayName': 'Order Recieved',
                    'router': 'downloadAdmitCard',
                    'iconName': 'store'
                },
                {
                    'displayName': 'Enrolled Students Online',
                    'router': 'downloadMarkSheet',
                    'iconName': 'person_add'
                },
                {
                    'displayName': 'Pending Enrolled Students',
                    'router': 'reVerification',
                    'iconName': 'person_add_disabled'
                },
                {
                    'displayName': 'Attendance Sheet',
                    'router': 'reEvaluation',
                    'iconName': 'list_alt'
                },
                {
                    'displayName': 'Admit Card',
                    'router': 'reEvaluation',
                    'iconName': 'credit_card'
                },
                {
                    'displayName': 'Marksheet',
                    'router': 'reEvaluation',
                    'iconName': 'bookmarks'
                }
            ];
         }


        /* this.service.getInternalHttpRequest("../../../assets/app-data/menu.json")
            .subscribe(response => {
                 if(roleId == "admin"){
                    this.sideMenuResponse = response["adminMenu"];
                 }
                 else if(roleId == "school"){
                    this.sideMenuResponse = response["schoolMenu"];
                 }
                 else{
                    this.sideMenuResponse = response["studentMenu"];
                 }
            }) */
    }



    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
