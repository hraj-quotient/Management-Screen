import { Component, OnInit } from '@angular/core';
// import { Application } from '../../../models/application.model';
import { EnviromentService } from 'src/services/util-service/enviroment.service';

export interface Application {
  name: string;
  url: string;
  icons: string;
  }

@Component({
  selector: 'app-hamburger-selector',
  templateUrl: './hamburger-selector.component.html',
  styleUrls: ['./hamburger-selector.component.css']
})
export class HamburgerSelectorComponent implements OnInit {

  constructor(private envService:EnviromentService) { }

  public apps:Application[]=[];
  businessUrl = this.envService.getOKTAHomeURL;
  homeUrl = this.envService.getAnnouncementCentreUrl;
  analyticsUrl = this.envService.getQuotientAnalyticsUrl;
  ngOnInit() {
    this.apps.push({
      "name": "Quotient Analytics",
      "icons": "assets/images/icons/analytics_icon.png",
      "url": this.analyticsUrl
    },
    {
      "name": "Quotient Business",
      "icons": "assets/images/icons/quot_icon.png",
      "url": this.businessUrl
    },
    {
      "name": "Announcement Centre",
      "icons": "assets/images/icons/analytics_icon.png",
      "url": this.homeUrl
    })
  }

}
