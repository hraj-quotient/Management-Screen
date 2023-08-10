import { Component, OnInit } from '@angular/core';
import { EnviromentService } from 'src/services/util-service/enviroment.service';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent implements OnInit {

  constructor(private envService:EnviromentService) { }

  ngOnInit(): void {
  }

  showMessage(){
  }

  goToLink(){
    window.open(this.envService.getHelpCenterUrl, "_blank");
}
}
