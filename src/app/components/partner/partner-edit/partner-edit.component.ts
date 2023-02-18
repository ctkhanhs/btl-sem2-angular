import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-partner-edit',
  templateUrl: './partner-edit.component.html',
  styleUrls: ['./partner-edit.component.css']
})
export class PartnerEditComponent implements OnInit {
  id: any;
  submited: boolean = false;//đánh dấu form đã submit


  partnerFormEdit: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(
    private partnerService: PartnerService,
    private toastr: ToastrService,
    private activeRouter: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(parameter => {
      this.id = parameter.get('id');
    });

    this.partnerService.getOne(this.id).subscribe(res => {
      this.partnerFormEdit.patchValue(res);
    })
  }
  get f() {
    return this.partnerFormEdit.controls
  }

  onSubmit() {
    this.submited = true;
    if (this.partnerFormEdit.invalid) {
      return;
    }
    this.partnerService.add(this.partnerFormEdit.value).subscribe(res => {
      if (res.error) {
        // alert(res.error);
        this.toastr.error(res.error, 'Lỗi', {
          positionClass: 'toast-top-center'
        })
      } else {
        this._router.navigate(['/doi-tac']);
      }
    });
  }

}
