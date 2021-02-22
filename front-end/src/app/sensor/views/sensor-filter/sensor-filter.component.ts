import { Component, OnInit } from '@angular/core';
import { ENTER, COMMA } from "@angular/cdk/keycodes";
import { MatChipInputEvent, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material/select';
import { MAT_MENU_SCROLL_STRATEGY_FACTORY } from '@angular/material/menu/menu-trigger';

import { Overlay, BlockScrollStrategy } from "@angular/cdk/overlay";
import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RightDrawerService } from 'src/app/core/sidenav-wrapper/right-drawer/right-drawer.service';

interface NAME_INCLUDES_CHIP {
  name: string;
}

@Component({
  selector: 'app-sensor-filter',
  templateUrl: './sensor-filter.component.html',
  styleUrls: ['./sensor-filter.component.scss'],
  providers: [
    { provide: MAT_CHIPS_DEFAULT_OPTIONS, useValue: { separatorKeyCodes: [ENTER, COMMA] } },
    { 
      provide: MAT_SELECT_SCROLL_STRATEGY,
      useFactory: (overlay: Overlay) => overlay.scrollStrategies.block,
      deps: [Overlay]
    }
  ]
})
export class SensorFilterComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  sort: {prop: string, label: string}[] = [
    { prop: 'name', label: 'Name' },
    { prop: 'lastReading', label: 'Last reading' }
  ]

  selectedSort = this.sort[0].prop;

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.chips.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    
    this.filterForm.updateValueAndValidity()
  }

  get chips(): string[] {
    return this.filterForm.get('name')!.value
  }

  remove(chip: string): void {
    const index = this.chips.indexOf(chip);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }

    this.filterForm.updateValueAndValidity()
  }

  public closeDrawer(): void {
    this.drawer.setClosed()
  }

  constructor(
    private fb: FormBuilder,
    private drawer: RightDrawerService
    ) { }
  

  public filterForm: FormGroup = this.fb.group({
    'sort': new FormControl('name'),
    'name': new FormControl([]),
  })

  public get filters$(): Observable<{
    sort: 'name' | 'lastreading',
    name: string[]
  }> {
    return this.filterForm.valueChanges.pipe(
      startWith(this.filterForm.value)
    )
  }


  ngOnInit(): void {
    // console.log(this.filterForm.value)
    // this.filterForm.valueChanges.subscribe(s => console.log(s))
  }

}
