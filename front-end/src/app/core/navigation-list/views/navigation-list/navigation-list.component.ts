import { Component, OnInit } from '@angular/core';
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
    private navList: NavigationListService
  ) { }

  ngOnInit(): void {
    this.items$.subscribe(s => console.log(s))
  }

}
