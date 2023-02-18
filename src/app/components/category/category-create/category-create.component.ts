import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from '../category.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  data: any = [];
  error: any;
  submited: boolean = false;//đánh dấu form đã submit

  categoryFormCreate: FormGroup = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),
  });

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private activeRouter: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.categoryFormCreate.controls
  }

  validateName() {
    this.categoryService.validateName(this.categoryFormCreate.get('name')?.value).subscribe(result => {
      // alert(result);
      // if () {
      //   alert(result.error);
      //   // this.toastr.error(result, 'Lỗi', {
      //   //   positionClass: 'toast-top-center'
      //   // })
      // }
    })
  

  }

  validateCode() {
    this.categoryService.validateCode(this.categoryFormCreate.get('code')?.value).subscribe(result => {
      return result;
    })

  }



  onSubmit() {
    this.submited = true;
    if (this.categoryFormCreate.invalid) {
      return;
    }
    this.categoryService.add(this.categoryFormCreate.value).subscribe(res => {
      if (res.errorCode =="FAILED") {
        // alert(res.error);
        this.toastr.error(res.desc, 'Lỗi', {
          positionClass: 'toast-top-center'
        })
      } else {
        this._router.navigate(['/danh-muc']);
      }
    });
  }

}
