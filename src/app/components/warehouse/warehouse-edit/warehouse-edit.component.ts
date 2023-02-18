import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PartnerService } from '../../partner/partner.service';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {
  id:any;
  partners: any = [];
  submited: boolean = false;

  warehouseForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    // capacity: new FormControl(0, Validators.required),
    partnerId: new FormControl('', Validators.required)
  });

  constructor(
    private warehouseService: WarehouseService,
    private partnerService: PartnerService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private activeRouter: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(parameter => {
      this.id = parameter.get('id');
    });

    this.warehouseService.getOne(this.id).subscribe(res => {
      this.warehouseForm.patchValue(res);
    });

    this.partnerService.getList().subscribe(res => {
      this.partners = res
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
      if (res.error) {
        // alert(res.error);
        this.toastr.error(res.error, 'Lỗi', {
          positionClass: 'toast-top-center'
        })
      } else {
        this._router.navigate(['/kho']);
      }
    });

  }

}
