import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {
  // injeção de dependência - Router
  // Angular é responsável por instanciar classe

  constructor(
    private router: Router,
    private headerService: HeaderService) {
    
    headerService.headerData = {
      title: 'CRUD Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }

  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
