import { Component, Inject, OnInit, Optional, SkipSelf } from '@angular/core';
import { DRAWER_FILTER_TOKEN } from './drawer-filter.token';

@Component({
  selector: 'app-drawer-filter',
  templateUrl: './drawer-filter.component.html',
  styleUrls: ['./drawer-filter.component.scss']
})
export class DrawerFilterComponent implements OnInit {


  constructor(
    // @SkipSelf()  
    // @Optional
    @Optional()
    @Inject(DRAWER_FILTER_TOKEN) private filters: string[]
  ) { }

  public meme = 'reee';

  ngOnInit(): void {
    console.log(this.filters);
    
  }

}
