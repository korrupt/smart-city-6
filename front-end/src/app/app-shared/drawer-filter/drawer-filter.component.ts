import { AfterContentChecked, Component, Inject, OnChanges, OnInit, Optional, SimpleChanges, SkipSelf, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DRAWER_FILTER_TOKEN, IDrawerFilter } from './drawer-filter.token';

@Component({
  selector: 'app-drawer-filter',
  // templateUrl: './drawer-filter.component.html',
  template: '',
  styleUrls: ['./drawer-filter.component.scss']
})
export class DrawerFilterComponent implements OnInit, OnChanges, AfterContentChecked {

  private readonly _state: BehaviorSubject<any> = new BehaviorSubject(undefined)

  // @ViewChild('form') private form: Form 

  private createFormGroupOptions(){
    return this.filters.reduce((a, c) => {
      a[c.id] = new FormControl('')
      return a;
    }, {} as any)
  }

  filterGroup: FormGroup = this.fb.group(this.createFormGroupOptions());
  // public get filterState$(){
  //   return this.filterGroup.valueChanges.pipe(map(state => {
      
  //   }))
  // }

  constructor(
    @Optional()
    @Inject(DRAWER_FILTER_TOKEN) public filters: IDrawerFilter[],
    private fb: FormBuilder
  ) { }
  

  ngOnInit(): void {
      console.log(this.filterGroup);
      // this.filterGroup.get('search')!.valueChanges.subscribe(s => console.log(s))
      this.filterGroup.valueChanges.subscribe(s => console.log(s))
      // this.filterGroup.valueChanges.subscribe(s => console.log(s))
      
  }

  ngAfterContentChecked(){
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    
  }

}
