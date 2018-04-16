import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  private rating: number = 0;
  private stars: boolean[];
  @Input()
  private readonly = true;
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter<number>();


  constructor() {
  }

  ngOnInit() {
    this.stars = [false, false, false, false, true];
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }

  }

  clickStar(i: number) {

    if (!this.readonly) {
      this.rating = i + 1;
      this.ratingChange.emit(this.rating);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [false, false, false, false, true];
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
