import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServices } from '../shared/services/SharedServices';
import { NgxSpinnerService } from 'ngx-spinner';
export let roleId = '';
export let loggedInDisplayName = '';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [SharedServices, NgxSpinnerService]
})
export class LoginComponent implements OnInit {

    public roleType: any;
    public loginModel = new LoginModel();
    constructor(private router: Router, private service: SharedServices, private spinner: NgxSpinnerService) {

    }

    ngOnInit() {
        this.roleType = [
            {roleId: 'admin', 'displayName': 'Admin'},
            {roleId: 'student', 'displayName': 'Student'},
            {roleId: 'school', 'displayName': 'School'}
        ];
    }

    doLogin(loginForm) {
        this.spinner.show();
        roleId = this.loginModel.role;
        let url = '';
        if (roleId === 'admin') {
          url = 'doAdminLogin?username=' + this.loginModel.username + '&password=' + this.loginModel.password;
        } else if (roleId === 'student') {
            url = 'doStudentLogin?username=' + this.loginModel.username + '&password=' + this.loginModel.password;
        } else {
          url = 'doSchoolLogin?username=' + this.loginModel.username + '&password=' + this.loginModel.password;
        }
        this.service.getHttpRequest(url)
            .subscribe(res => {
               // console.log(roleId);
               this.spinner.hide();
                if (roleId === 'admin') {
                    const resJson = res[0];
                    if (resJson !== undefined) {
                        loggedInDisplayName = resJson.FIRST_NAME;
                        localStorage.setItem('loggedIn', JSON.stringify(res));
                        localStorage.setItem('isLoggedin', 'true');
                        this.router.navigate(['/admin-dashboard']);
                    } else {
                        alert('Invalid Credentials');
                    }
                } else if (roleId === 'student') {
                     if (res !== undefined) {
                        const resJson = res[0];
                        loggedInDisplayName = resJson.USERNAME;
                        localStorage.setItem('loggedIn', JSON.stringify(res));
                        localStorage.setItem('isLoggedin', 'true');
                        this.router.navigate(['/student-dashboard']);
                     } else {
                        alert('Invalid Credentials');
                     }
                } else {
                    if (roleId === 'school') {
                        const resJson = res[0];
                        if (resJson !== undefined) {
                            loggedInDisplayName = resJson.SCHOOL_COORDINATOR;
                            localStorage.setItem('loggedIn', JSON.stringify(res));
                            // roleId = this.loginModel.role;
                            localStorage.setItem('isLoggedin', 'true');
                            this.router.navigate(['/dashboard']);
                        } else {
                            alert('Invalid Credentials');
                        }

                    } else {
                       alert('Invalid Credentials');
                    }
                }


        });
    }
}

export class LoginModel {
    role: string;
    username: string;
    password: string;
    rememberMe: boolean;

    get getRole(): string {
        return this.role;
    }
    set setRole(val: string) {
        this.role = val;
    }
}
