import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ContainerModelService } from '../core/services/container-model.service';

@Injectable({
  providedIn: 'root'
})
export class LiveMapService {

  constructor(
    private containerModel: ContainerModelService
  ) { }

  get containers() {
    return this.containerModel.containers$.pipe(
      map(containers => {
        return containers.map(c => ({
          center: {
            lat: Number(c.location.split(',')[0]),
            lng: Number(c.location.split(',')[1])
          },
          radius: 15
        }))
      })
    )
  }

}
