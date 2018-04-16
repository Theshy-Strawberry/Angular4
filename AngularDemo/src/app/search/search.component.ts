import {Component, OnInit} from '@angular/core';
import construct = Reflect.construct;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  name: string;

  constructor() {}

  ngOnInit() {
  }

  // onKey(event) {
  //   console.log(event.target.value);
  // }
  onKey(param: string) {
    console.log(param);
  }

  doinput(event) {
    this.name = event.target.value;
  }
}
