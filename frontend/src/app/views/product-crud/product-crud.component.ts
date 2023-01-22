import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {
  // injeção de dependência - Router
  // Angular é responsável por instanciar classe
  constructor(private router: Router) {
  }
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
