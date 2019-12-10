import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  sessionStorage: any;
  public studProfile: StudentProfile;
  stuName = 'abc';
  constructor() { }

  ngOnInit() {
      this.studProfile = JSON.parse(localStorage.getItem('loggedIn'));
      this.studProfile = this.studProfile[0];

  }

  updateProfile() {

  }

}

export class StudentProfile {
  CLASS_ID: string;
  COUNT_FEES_PAID: string;
  CREATED_AT: string;
  CREATED_BY: string;
  DOB: Date;
  EMAIL_ID: string;
  FATHER_MOBILE_NO: string;
  FATHER_NAME: string;
  IS_ACTIVE: string;
  LAST_LOGIN_AT: string;
  MOBILE_NO: string;
  MOTHER_MOBILE_NO: string;
  MOTHER_NAME: string;
  PASSWORD: string;
  PHOTO_PATH: string;
  ROLL_NO: string;
  SCHOOL_ID: string;
  STUDENT_ID: string;
  STUDENT_NAME: string;
  UPDATED_AT: string;
  UPDATED_BY: string;
  USERNAME: string;
}
