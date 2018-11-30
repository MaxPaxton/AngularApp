import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private route: Router) {
    route.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
   }

  ngOnInit() {
  }

}
