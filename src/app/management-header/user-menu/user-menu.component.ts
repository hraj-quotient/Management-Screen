import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
// import { AuthService } from 'src/services/auth-service/auth.service';
// import { AudienceParentService } from 'src/services/util-service/audience-parent.service';
// import { CurrentUserService } from 'src/services/util-service/current-user.service';
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  // constructor(private authService:AuthService,
  //             private audienceParent: AudienceParentService,
  //             private cdref: ChangeDetectorRef,
  //    private currentUserService:CurrentUserService) { 
  //    }

  public currentUser:any;
  public userFullName:string='';
  public currentUserSubscribe:Subscription=new Subscription();
  ngOnInit(): void {
    // this.currentUserSubscribe=this.audienceParent.loggedInUserName.subscribe(res => {
    //   if(res && "fullName" in res){
    //     this.currentUser=res["fullName"];
    //     this.userFullName=res["fullName"];
    //   }
    //  });
  }
  
  logout(){
    // this.currentUserService.removeCookies();
    // this.authService.logout();
  }
     ngOnDestroy(){
      this.currentUserSubscribe.unsubscribe();
     }
}
