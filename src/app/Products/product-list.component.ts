import { Component , OnInit} from '@angular/core';
import {IProduct } from './products';
//import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';

@Component({
    selector: 'pm-products',
    templateUrl:'app/Products/product-list.component.html',
    styleUrls:['app/Products/product-list.component.html'],
    //pipes : [ProductFilterPipe]
   // directives: [StarComponent]
})

export class ProductListComponent {//implements OnInit 
    pageTitle: string = 'Product List';
    imageWidth: number =50;
    imageMargin: number =2;
    showImage: boolean =false;
    listFilter: string = 'cart';
    products: IProduct[]=[
        {
            "productId":2,
            "productName":"Garden Cart",
            "productCode":"GDN-0023",
            "releaseDate":"March 18,2016",
            "description":"15 gallon capacity rolling garden",
            "price":32.99,
            "starRating":4.2,
            "imageUrl":""
        },
        {
            "productId":3,
            "productName":"Garden Cart",
            "productCode":"GDN-0023",
            "releaseDate":"March 18,2016",
            "description":"15 gallon capacity rolling garden",
            "price":32.99,
            "starRating":4.2,
            "imageUrl":""
        },
        {
            "productId":2,
            "productName":"Garden Cart",
            "productCode":"GDN-0023",
            "releaseDate":"March 18,2016",
            "description":"15 gallon capacity rolling garden",
            "price":32.99,
            "starRating":4.2,
            "imageUrl":""
        },
        {
            "productId":3,
            "productName":"Garden Cart",
            "productCode":"GDN-0023",
            "releaseDate":"March 18,2016",
            "description":"15 gallon capacity rolling garden",
            "price":32.99,
            "starRating":4.2,
            "imageUrl":""
        },
    ];

    toggleImage(): void {
        this.showImage =! this.showImage;
    }

    //ngOnInit():void{
    //    console.log('In OnInit');
    //}
}