import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor() {

        /* this.subscription = router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
              browserRefresh = !router.navigated;
            }
            if (browserRefresh) {
                this.router.navigate(['/login']);
            }
        }); */
    }
    ngOnInit() {

    }
}
