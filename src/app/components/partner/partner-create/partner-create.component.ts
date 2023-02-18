import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-partner-create',
  templateUrl: './partner-create.component.html',
  styleUrls: ['./partner-create.component.css']
})
export class PartnerCreateComponent implements OnInit {
  submited: boolean = false;//đánh dấu form đã submit


  partnerFormCreate: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(
    private partnerService: PartnerService,
    private toastr: ToastrService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  get f() {
    return this.partnerFormCreate.controls
  }
  onSubmit() {
    this.submited = true;
    if (this.partnerFormCreate.invalid) {
      return;
    }
    this.partnerService.add(this.partnerFormCreate.value).subscribe(res => {
      if (res.errorCode =="FAILED") {
        // alert(res.error);
        this.toastr.error(res.desc, 'Lỗi', {
          positionClass: 'toast-top-center'
        })
      } else {
        this._router.navigate(['/doi-tac']);
      }
    });
  }

}
