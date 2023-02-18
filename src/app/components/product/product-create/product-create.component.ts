import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../category/category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  cats: any = [];
  submited: boolean = false;//đánh dấu form đã submit
  currentFile: any;

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
    private fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.getList().subscribe(res => {
      this.cats = res;
    })
  }

  get f() {
    return this.productForm.controls
  }

  // onChangeFile(ev: any) {
  //   this.currentFile = ev.target.files[0];
  //   this.productForm.patchValue({
  //     image:this.currentFile
  //   })
  // }

  // onSubmit() {
  //   this.submited = true;
  //   if (this.productForm.invalid) {
  //     return;
  //   }

  //   var formData = new FormData();
  //   formData.append('image', this.currentFile);
  //   console.log(this.currentFile)
  //   this.productService.upload(formData).subscribe(res => {
  //     console.log(res);
  //     if (res.data == '' || !res.data) {
  //       this.toastr.error('Định dạng file không đúng', 'Lỗi', {
  //         positionClass: 'toast-top-center'
  //       })
  //     } 
  //     else {
  //       this.productForm.value.image = res.data;

  //       this.productService.add(this.productForm.value).subscribe(res => {
  //         if (res.error) {
  //           // alert(res.error);
  //           this.toastr.error(res.error, 'Lỗi', {
  //             positionClass: 'toast-top-center'
  //           })
  //         } else {
  //           this._router.navigate(['/san-pham']);
  //         }
  //       });
  //     }


  //   });

  // }

  onSubmit() {
    this.submited = true;
    if (this.productForm.invalid) {
      return;
    }
    this.productService.add(this.productForm.value).subscribe(res => {
      if (res.errorCode =="FAILED") {
        // alert(res.error);
        this.toastr.error(res.desc, 'Lỗi', {
          positionClass: 'toast-top-center'
        })
      }  else {
        this._router.navigate(['/san-pham']);
      }
    });

  }

}
