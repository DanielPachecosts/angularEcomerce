import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products.service';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  limit = 10;
  offset = 0;
  products: Product[] = [];
  productId: Product['id'] | null = null

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.productsService.getAll(this.limit, this.offset).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    });
    this.route.queryParamMap.subscribe(params => {
      this.productId = params.get('product')
    })
  }

  loadMore() {
    this.productsService.getAll(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }
}
