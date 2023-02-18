import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PartnerService } from '../../partner/partner.service';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-warehouse-create',
  templateUrl: './warehouse-create.component.html',
  styleUrls: ['./warehouse-create.component.css']
})
export class WarehouseCreateComponent implements OnInit {
  partners: any = [];
  submited: boolean = false;

  warehouseForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    partnerId: new FormControl('', Validators.required)
  });


  constructor(
    private warehouseService: WarehouseService,
    private partnerService: PartnerService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.partnerService.getList().subscribe(res => {
      this.partners=res;
    })
  }

  get f() {
    return this.warehouseForm.controls
  }

  onSubmit() {
    this.submited = true;
    if (this.warehouseForm.invalid) {
      return;
    }
    this.warehouseService.add(this.warehouseForm.value).subscribe(res => {
      if (res.errorCode =="FAILED") {
        // alert(res.error);
        this.toastr.error(res.desc, 'Lỗi', {
          positionClass: 'toast-top-center'
        })
      } else {
        this._router.navigate(['/kho']);
      }
    });

  }



}
