import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-xiangying',
  templateUrl: './xiangying.component.html',
  styleUrls: ['./xiangying.component.css']
})
export class XiangyingComponent implements OnInit {

  searchInput: FormControl = new FormControl();
  lenth: number  =  4;

  constructor() {
    this.searchInput.valueChanges.debounceTime(500)
      .subscribe(
        code => this.getCodeinfo(code));
  }

  ngOnInit() {
  }

  getCodeinfo(value: string) {
    console.log(value);
  }
}
