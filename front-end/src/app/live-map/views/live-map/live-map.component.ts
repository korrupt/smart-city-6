import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContextualActionBarService } from 'ngx-contextual-action-bar';
import { SidenavWrapperService } from 'src/app/core/sidenav-wrapper/sidenav-wrapper.service';

@Component({
  selector: 'app-live-map',
  templateUrl: './live-map.component.html',
  styleUrls: ['./live-map.component.scss']
})
export class LiveMapComponent implements OnInit, OnDestroy {

  constructor(
    private navbar: ContextualActionBarService,
    private sidenav: SidenavWrapperService
  ) { }

  layer = this.navbar.register({
    background: '#FFF',
    color: '#000',
    title: 'Live-Map',
    button: 'menu'
  })

  buttonSub = this.layer.onButtonClick.subscribe(_ => {
    this.sidenav.toggleState()
  })

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    this.buttonSub.unsubscribe()
  }

}
