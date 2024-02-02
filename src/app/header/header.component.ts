import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showSearch: boolean = true;



  constructor(private activatedRoute: Router) { }


  ngOnInit() {
    this.activatedRoute.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.showSearch = event.url != "/"
      }
    })

  }




}
