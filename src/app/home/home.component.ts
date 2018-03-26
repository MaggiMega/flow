import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Optional } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  
})
export class HomeComponent implements OnInit {

  somstr: string = 'About';

  fullName: string = 'Full Name';
  userName: string = 'User Name';
  email: string = 'Email';
  password: string = 'Password';

  loginName: string = 'User Name';
  loginPass: string = 'Password';
  loggedIn: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    //how to access parameters from browser
    this.route.params.subscribe(res => console.log(res.id));
    
  }


  ngOnInit() {

    
    
  }
  showOverlay() {
    $('#overlay').toggle(function(){}); 
//    $('#overlay').show();
}

  hideOverlay() {
    $('#overlay').toggle(function(){});
//    $('#overlay').hide();
}

  login() {
//    if(this.loginName.toUpperCase() == 'FLOW' && this.loginPass.toUpperCase() == 'FLOW')  {
      this.router.navigate(['dashboard'])
      this.loggedIn = true;
//    }
  }



  ngAfterViewInit() {
    
    $(document).keyup(function(e){
     
      if($('#overlay:hidden').length != 1) {
        if(e.keyCode == 27 && $('#overlay:hidden').length != 1) {
          $('#overlay').toggle(function(){});
        }
      }
    });

    $('input').on('focus', function (e) {
      $(this).on('mouseup', function () {
        $(this).select();
        return false;
      }).select();
    });
  }



}
