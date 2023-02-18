import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  id: any;

  categoryFormEdit: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    code: new FormControl('')
  });

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private activeRouter: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(parameter => {
      this.id = parameter.get('id');
    });

    this.categoryService.getOne(this.id).subscribe(res => {
      this.categoryFormEdit.patchValue(res);
    })
  }

  onSubmit() {
    this.categoryService.add(this.categoryFormEdit.value).subscribe(res => {
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
