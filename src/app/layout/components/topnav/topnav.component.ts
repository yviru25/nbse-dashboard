import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { loggedInDisplayName, roleId } from '../../../login/login.component';
import { SharedServices } from '../../../shared/services/SharedServices';


@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
    public pushRightClass: string;
    public loggedInName: string;
    public role = roleId;
    constructor(public router: Router, private translate: TranslateService) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        const loggedInUser =  JSON.parse(localStorage.getItem('loggedIn'));
        this.loggedInName = loggedInDisplayName;
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
    viewStdProfile() {
        if (this.role === 'student') {
           // console.log(this.role);
            this.router.navigate(['/student-profile']);
        }
    }
}
