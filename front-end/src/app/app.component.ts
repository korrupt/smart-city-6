import { Component } from '@angular/core';
import { ActionBarLayerModes, ActionBarLayerRegistration, ContextualActionBarService } from 'ngx-contextual-action-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smart-city-no6';

  private layer: ActionBarLayerRegistration

  constructor(
    private nav: ContextualActionBarService
  ){
    this.layer = nav.register({
      background: '#FFF',
      color: '#000',
      mode: ActionBarLayerModes.fixed,
      title: 'Page title',
      button: 'menu',
      actions: [
        { icon: 'notifications', displayName: 'Notifikasjoner' }
      ]
    })
  }

}
