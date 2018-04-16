import {Component} from '@angular/core';
import {PriceQuote} from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // stock = '';

   quote: PriceQuote;

  PriceOuthandler(event: PriceQuote) {
    this.quote = event;
    console.log(this.quote.lastPrice);
  }
}
