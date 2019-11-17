import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd, NavigationStart, RouterEvent, NavigationCancel, NavigationError } from '@angular/router';
import { Routes } from './shared/models/shared.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-learning';

  public route: string;
  public isLanding: boolean;
  public showLeftbar = false;
  public showRightbar = false;
  public menuTitle = 'Home';
  public bgImage: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.route = event.url;
        this.bgImage = '';

        const urlRoute = event.url.split('/')[1];
        switch (urlRoute) {
          case Routes[Routes.home]:
            this.bgImage = environment.homeBgImg;
            break;

          case Routes[Routes.certificate]:
            this.bgImage = environment.certificateBgImg;
            break;

          case 'logout':
            this.isLanding = true;
            break;

          case '':
            this.isLanding = true;
            break;

          default:
            this.route = event.url;
            break;
        }
      }
    });
  }

  public handleShowLeftbar(toggleLeftbar: boolean): void {
    this.showLeftbar = toggleLeftbar;
  }

  public handleShowRightbar(toggleRightbar: boolean): void {
    this.showRightbar = toggleRightbar;
  }

  public handleMenuTitle(menuTitle: string) {
    this.menuTitle = menuTitle;
  }

  public CloseSidebars() {
    this.showLeftbar = false;
    this.showRightbar = false;
  }
}
