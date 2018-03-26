import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  toggleDiv() {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.count').click(function() {
      $('#count').toggle();
      if(!$('#count').is(':visible')){
        $('.count').css("background", "url(assets/images/dashboard/add-blue.svg) right/auto no-repeat");  
      } else {
        $('.count').css("background", "url(assets/images/dashboard/subtract-blue.svg) right/auto no-repeat")
      }
    });

    $('.addition').click(function() {
      $('#addition').toggle();
      if(!$('#addition').is(':visible')){
        $('.addition').css("background", "url(assets/images/dashboard/add-blue.svg) right/auto no-repeat")
      } else {
        $('.addition').css("background", "url(assets/images/dashboard/subtract-blue.svg) right/auto no-repeat")
      }
    });

    $('.subtraction').click(function() {
      $('#subtraction').toggle();
      if(!$('#subtraction').is(':visible')){
        $('.subtraction').css("background", "url(assets/images/dashboard/add-blue.svg) right/auto no-repeat")
      } else {
        $('.subtraction').css("background", "url(assets/images/dashboard/subtract-blue.svg) right/auto no-repeat")
      }
    });

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
