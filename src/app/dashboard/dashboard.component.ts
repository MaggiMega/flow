import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
    $('#dash1').click(function(){ 
      $('#dash1 input').css("background", "url(assets/images/dashboard/chart-pie-selected.svg) center/auto 100%  no-repeat");  
      $('#dash2 input').css("background", "url(assets/images/dashboard/question.svg) center/auto 100% no-repeat");
      $('#dash3 input').css("background", "url(assets/images/dashboard/profile.svg) center/auto 100% no-repeat");
      $('#dash4 input').css("background", "url(assets/images/dashboard/bar-chart.svg) center/auto 100% no-repeat");
      $('#dash5 input').css("background", "url(assets/images/dashboard/setting.svg) center/auto 100% no-repeat");
      $('#dash6 input').css("background", "url(assets/images/dashboard/logout.svg) center/auto 100% no-repeat");
      $('.dashboard').show();
      $('.questions').hide();
      $('.users').hide();
      $('.statistics').hide();
      $('.settings').hide();

    });

    $('#dash2').click(function(){ 
      $('#dash1 input').css("background", "url(assets/images/dashboard/chart-pie.svg) center/auto 100%  no-repeat");  
      $('#dash2 input').css("background", "url(assets/images/dashboard/question-selected.svg) center/auto 100% no-repeat");
      $('#dash3 input').css("background", "url(assets/images/dashboard/profile.svg) center/auto 100% no-repeat");
      $('#dash4 input').css("background", "url(assets/images/dashboard/bar-chart.svg) center/auto 100% no-repeat");
      $('#dash5 input').css("background", "url(assets/images/dashboard/setting.svg) center/auto 100% no-repeat");
      $('#dash6 input').css("background", "url(assets/images/dashboard/logout.svg) center/auto 100% no-repeat");
      $('.dashboard').hide();
      $('.questions').show();
      $('.users').hide();
      $('.statistics').hide();
      $('.settings').hide();
    });
    $('#dash3').click(function(){ 
      $('#dash1 input').css("background", "url(assets/images/dashboard/chart-pie.svg) center/auto 100% no-repeat");  
      $('#dash2 input').css("background", "url(assets/images/dashboard/question.svg) center/auto 100% no-repeat");
      $('#dash3 input').css("background", "url(assets/images/dashboard/profile-selected.svg) center/auto 100% no-repeat");
      $('#dash4 input').css("background", "url(assets/images/dashboard/bar-chart.svg) center/auto 100% no-repeat");
      $('#dash5 input').css("background", "url(assets/images/dashboard/setting.svg) center/auto 100% no-repeat");
      $('#dash6 input').css("background", "url(assets/images/dashboard/logout.svg) center/auto 100% no-repeat");
      $('.dashboard').hide();
      $('.questions').hide();
      $('.users').show();
      $('.statistics').hide();
      $('.settings').hide();
    });
    $('#dash4').click(function(){ 
      $('#dash1 input').css("background", "url(assets/images/dashboard/chart-pie.svg) center/auto 100%  no-repeat");  
      $('#dash2 input').css("background", "url(assets/images/dashboard/question.svg) center/auto 100% no-repeat");
      $('#dash3 input').css("background", "url(assets/images/dashboard/profile.svg) center/auto 100% no-repeat");
      $('#dash4 input').css("background", "url(assets/images/dashboard/bar-chart-selected.svg) center/auto 100% no-repeat");
      $('#dash5 input').css("background", "url(assets/images/dashboard/setting.svg) center/auto 100% no-repeat");
      $('#dash6 input').css("background", "url(assets/images/dashboard/logout.svg) center/auto 100% no-repeat");
      $('.dashboard').hide();
      $('.questions').hide();
      $('.users').hide();
      $('.statistics').show();
      $('.settings').hide();
    });
    $('#dash5').click(function(){ 
      $('#dash1 input').css("background", "url(assets/images/dashboard/chart-pie.svg) center/auto 100% no-repeat");  
      $('#dash2 input').css("background", "url(assets/images/dashboard/question.svg) center/auto 100% no-repeat");
      $('#dash3 input').css("background", "url(assets/images/dashboard/profile.svg) center/auto 100% no-repeat");
      $('#dash4 input').css("background", "url(assets/images/dashboard/bar-chart.svg) center/auto 100% no-repeat");
      $('#dash5 input').css("background", "url(assets/images/dashboard/setting-selected.svg) center/auto 100% no-repeat");
      $('#dash6 input').css("background", "url(assets/images/dashboard/logout.svg) center/auto 100% no-repeat");
      $('.dashboard').hide();
      $('.questions').hide();
      $('.users').hide();
      $('.statistics').hide();
      $('.settings').show();
    });
    
  }

}
