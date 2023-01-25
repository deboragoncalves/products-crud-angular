import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/component/product/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      if (products) {
        this.products = products;
      }
    })
  }

}
