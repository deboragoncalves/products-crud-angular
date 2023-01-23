import { Component } from '@angular/core';
import { ProductService } from 'src/app/components/product/product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  // criar objeto product como teste para método create
  product: Product = {
    name: "Teste",
    price: 10
  }
  constructor(private productService: ProductService,
    private router: Router) {
  }

  createProduct(): void {
    // fazer chamada para o backend, usando método create do service
    // método subscribe será chamado quando tiver um retorno com sucesso após a chamada post
    
    this.productService.create(this.product).subscribe(() => {
      // Se for sucesso, exibir mensagem e navegar para tela /products
      this.productService.showMessage("Produto criado");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
