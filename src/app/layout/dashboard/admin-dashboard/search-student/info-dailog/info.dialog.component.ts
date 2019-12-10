import { Component, OnInit } from '@angular/core';
import { SharedServices } from 'src/app/shared/services/SharedServices';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'ngx-alerts';

@Component({
    selector: 'dialog-content-dialog',
    templateUrl: './dialog-content-example-dialog.html',
  })
  export class DialogContentExampleDialog implements OnInit {

    public studentInfoDetails = null;
    constructor(private service: SharedServices,
              private spinner: NgxSpinnerService,
              private alertService: AlertService) {
      }

      ngOnInit() {

      }

  }
