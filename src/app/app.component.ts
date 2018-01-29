import { Component } from '@angular/core';
import { ProductListComponent } from './Products/product-list.component';
@Component({
  selector: 'my-app',
  template: `
  <div>
  <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>`
  ,

  
  
})
export class AppComponent  { 
  pageTitle: string = 'Acme Product Management';
 }
