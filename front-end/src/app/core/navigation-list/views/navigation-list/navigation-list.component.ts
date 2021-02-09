import { Component, OnInit } from '@angular/core';
import { RightDrawerService } from 'src/app/core/sidenav-wrapper/right-drawer/right-drawer.service';
import { SensorSmallComponent } from 'src/app/sensor/views/sensor-small/sensor-small.component';
import { NavigationListService } from '../../navigation-list.service';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent implements OnInit {

  public get items$() {
    return this.navList.navigationItems$;
  }

  constructor(
    private navList: NavigationListService,
    private drawer: RightDrawerService
  ) { }

  ngOnInit(): void {
    // this.items$.subscribe(s => console.log(s))
  }

}
