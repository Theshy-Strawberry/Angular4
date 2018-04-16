import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {OrderComponent} from './order/order.component';
import {Product1Component} from './product1/product1.component';
import {ProductService} from './shared/product.service';
import {Product2Component} from './product2/product2.component';
import {AnotherProductService} from './shared/another-product.service';
import {LoggerService} from './shared/logger.service';
import { XiangyingComponent } from './xiangying/xiangying.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MultiplePipe } from './pipe/multiple.pipe';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    Product1Component,
    Product2Component,
    XiangyingComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: ProductService,
    useFactory: (logger: LoggerService, isDev: boolean) => {
       logger = new LoggerService();
      // let dev = Math.random() > 0.5;
      if (isDev) {
        return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    },
    deps: [LoggerService, 'IS_DEV']
  }, LoggerService,
    {
      provide: 'IS_DEV', useValue: false
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
