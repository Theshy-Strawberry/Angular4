import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  stockCode: string = 'Imp';

  price: number;

  @Output('paramEg')
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter<PriceQuote>();

  @Output()
  buy: EventEmitter<PriceQuote> = new EventEmitter<PriceQuote>();

  constructor() {
    setInterval(() => {
      let priceQ: PriceQuote = new PriceQuote(this.stockCode, Math.random() * 100);
      this.price = priceQ.lastPrice;
      this.lastPrice.emit(priceQ);
    }, 1000);
  }

  ngOnInit() {
  }

  buyStock(event) {
     console.log(this.price);
    this.buy.emit(new PriceQuote(this.stockCode, this.price));
  }
}

export class PriceQuote {
  constructor(public  stockCode: string, public lastPrice: number) {
  }

}
