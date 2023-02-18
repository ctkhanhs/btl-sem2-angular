import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/category.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  list: any = [];
  name: string = '';
  cat_id: any = '';
  cats: any = [];
  p: any = 1;



  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.productService.getList().subscribe(res => {
      this.list = res
    });

    this.categoryService.getList().subscribe(res => {
      this.cats = res;
    })
  }

  onSearch() {
    this.productService.getList(this.name, this.cat_id).subscribe(res => {
      this.list = res;
    })
  }


  // onDelete(id: number) {
  //   if (confirm('Xóa sản phẩm')) {
  //     this.productService.remove(id).subscribe(res => {
  //       this.productService.getList().subscribe(res => {
  //         this.list = res.data;
  //       });
  //     })

  //   }
  // }
}


