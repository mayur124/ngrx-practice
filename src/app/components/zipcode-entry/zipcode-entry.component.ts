import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addZipcode } from 'src/app/actions/zipcode.actions';
import * as zipCodeAction from 'src/app/actions/zipcode.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.css']
})
export class ZipcodeEntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }
  addLocation(zipcode: string) {
    // this.store.dispatch(addZipcode({ zipcode }));
    this.store.dispatch(zipCodeAction.addZipcode(zipcode));
  }
}
