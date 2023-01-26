import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/component/product/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0
  };  

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get("id");
    id ? this.productService.readById(parseInt(id)).subscribe(product => this.product = product) : null;
  }

  deleteProduct(): void {
    const id: number | undefined = this.product.id;

    if (id) {
      this.productService.delete(id).subscribe(() => {
        this.productService.showMessage("Produto excluído com sucesso");
        this.router.navigate(['/products']);
      })
    }
  
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
