import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {SellerInfoComponent} from './seller-info/seller-info.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {ChatComponent} from './chat/chat.component';
import {LoginGuard} from './guard/login.guard';
import {UnsavedGuard} from './guard/unsaved.guard';
import {ProductResolve} from './guard/product.resolve';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  // 2路由路径中传递参数
  {
    path: 'product/:id', component: ProductComponent, children: [
      {path: '', component: ProductDescComponent, outlet: 'down'},
      {path: 'seller/:id', component: SellerInfoComponent}
    ], canActivate: [LoginGuard], // canDeactivate: [UnsavedGuard] ,
     // resolve: {      product: ProductResolve      }
  },
  // {path: 'product', component: ProductComponent},
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard, ProductResolve]
})
export class AppRoutingModule {
}
