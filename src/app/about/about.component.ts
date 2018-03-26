import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    //how to access parameters from browser
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

  sendMeHome() {
    this.router.navigate([''])
  }

}

