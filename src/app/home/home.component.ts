import { Component, OnInit } from '@angular/core';
import { product, banner } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 popularProducts:undefined|product[];
 trendyProducts:undefined | product[];
 bannerProducts:undefined|banner[];
 constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.productService.popularProducts().subscribe((data)=>{
      this.popularProducts=data;
    });

    this.productService.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    });

    this.productService.getBannerItems().subscribe((data)=>{
      this.bannerProducts=data;
    })
  }
}
