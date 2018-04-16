import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  // 校验器
  mobile(control: FormControl): any {
    return null;
  }

  formModel: FormGroup;

  // constructor() {
  //
  //   this.formModel = new FormGroup({
  //     username: new FormControl(),
  //     phone: new FormControl(),
  //     password: new FormGroup({
  //       pwd: new FormControl(),
  //       pwdResure: new FormControl()
  //     })
  //   });
  // }
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: [''],
      phone: [''],
      password: fb.group({
        pwd: [''],
        pwdResure: ['']
      })
    });
  }

  onSubmit() {
    console.log(this.formModel.value);

  }

  ngOnInit() {
  }

}
