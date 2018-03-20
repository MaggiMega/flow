import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit {

  itemcount: number = 4;
  somstr: string = 'This is string';

  goalText: string = 'My first life goal';

  constructor() { }

  ngOnInit() {
  }

  overlayToggle() {
    $('#overlay').toggle(); 
  }

}
