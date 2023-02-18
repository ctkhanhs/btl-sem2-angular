import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../category/category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: any;
  cats: any = [];
  image: any;
  curentFIle: any;
  submited: boolean = false; // đánh dau form da subit hay chua
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    madeIn: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    categoryId: new FormControl('', Validators.required)
  });
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private activeRouter: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(parameter => {
      this.id = parameter.get('id');
    });

    this.productService.getOne(this.id).subscribe(res => {
      this.productForm.patchValue(res);
    });

    this.categoryService.getList().subscribe(res => {
      this.cats = res
    })
  }



  get f() { return this.productForm.controls; }
  // onChangeFIle(ev: any) {
  //   this.curentFIle = ev.target.files[0];
  // }
  // onSubmit() {
  //   this.submited = true;
  //   if (this.productForm.invalid) {
  //     return;
  //   }

  //   var formData = new FormData();
  //   formData.append('image', this.curentFIle);
  //   this.productService.upload(formData).subscribe(res => {
  //     if (res.data) {
  //       this.productForm.value.image = res.data;
  //     }


  //     this.productService.update(this.productForm.value).subscribe(res => {
  //       if (res.error) {
  //         this.toastr.error(res.error, 'Lỗi', {
  //           positionClass: 'toast-top-center'
  //         })
  //       } else {
  //         this._router.navigate(['/san-pham']);
  //       }
  //     });
  //   });

  // }

  onSubmit() {
    this.submited = true;
    if (this.productForm.invalid) {
      return;
    }
    this.productService.add(this.productForm.value).subscribe(res => {
      if (res.error) {
        // alert(res.error);
        this.toastr.error(res.error, 'Lỗi', {
          positionClass: 'toast-top-center'
        })
      } else {
        this._router.navigate(['/san-pham']);
      }
    });

  }

}
