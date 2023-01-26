import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/component/product/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // ao iniciar componente, obter produto a ser atualizado, exibindo no form os dados
    // pegar id da rota atual
    // pegar a chave id do mapa
    const id: string | null = this.route.snapshot.paramMap.get("id");
    id ? this.productService.readById(parseInt(id)).subscribe(product => this.product = product) : null;
  }

  updateProduct(): void {
    // chamar método put, passando o produto a ser atualizado
    this.productService.put(this.product).subscribe(() => {
      // exibir mensagem e navegar para tela principal
      this.productService.showMessage("Produto atualizado com sucesso");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    // direcionar para tela principal de exibição dos produtos
    this.router.navigate(['/products']);
  }

}
