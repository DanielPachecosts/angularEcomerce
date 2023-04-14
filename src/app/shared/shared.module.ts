import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

import { ProductComponent } from './components/product/product.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ImgComponent } from '../shared/components/img/img.component';

import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent,
    ReversePipe,
    TimeAgoPipe,
    ImgComponent,
    ProductsComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: [
    ProductComponent,
    ReversePipe,
    TimeAgoPipe,
    ImgComponent,
    ProductsComponent
  ]
})
export class SharedModule { }
