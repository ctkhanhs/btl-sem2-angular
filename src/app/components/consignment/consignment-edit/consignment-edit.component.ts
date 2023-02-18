import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { WarehouseService } from '../../warehouse/warehouse.service';
import { ConsignmentService } from '../consignment.service';

@Component({
  selector: 'app-consignment-edit',
  templateUrl: './consignment-edit.component.html',
  styleUrls: ['./consignment-edit.component.css']
})
export class ConsignmentEditComponent implements OnInit {
  id: any;
  warehouseStatus :any;
  consignmentStatus:any;
  warehouses: any = [];
  submited: boolean = false;

  consignmentFormEdit: FormGroup = new FormGroup({
    id: new FormControl(''),
    consignmentId:new FormControl(''),
    warehouseId: new FormControl(''),
    toWarehouseId: new FormControl(''),
    status: new FormControl('')
  });

  constructor(
    private consignmentService: ConsignmentService,
    private warehouseService: WarehouseService,
    private toastr: ToastrService,
    private activeRouter: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(parameter => {
      this.consignmentFormEdit.get('id')?.patchValue(parameter.get('id'));
      this.consignmentFormEdit.get('consignmentId')?.patchValue(parameter.get('id'));
      this.consignmentFormEdit.get('status')?.patchValue(parameter.get('status'));
      this.consignmentFormEdit.get('warehouseId')?.patchValue(parameter.get('warehouseId'));
      this.id=parameter.get('id');
      this.warehouseStatus=parameter.get('status');
    });
    
    this.warehouseService.getListByType(this.warehouseStatus).subscribe(res => {
      this.warehouses = res;
    })
  }

  get f() { return this.consignmentFormEdit.controls; }

  onSubmit() {
    forkJoin(this.consignmentService.update(this.consignmentFormEdit.value),this.consignmentService.createReceipt(this.consignmentFormEdit.value)).subscribe(([res1,res2]) => {
      if (res1.error) {
        // alert(res.error);
        this.toastr.error(res1.error, 'Lỗi', {
          positionClass: 'toast-top-center'
        })
      } else {
        this._router.navigate(['/lo-hang']);
      }
    });
    // this.consignmentService.createReceipt(this.consignmentFormEdit).subscribe(res => {});
    // this.consignmentService.update(this.consignmentFormEdit.value).subscribe(res => {
    //   if (res.error) {
    //     // alert(res.error);
    //     this.toastr.error(res.error, 'Lỗi', {
    //       positionClass: 'toast-top-center'
    //     })
    //   } else {
    //     this._router.navigate(['/lo-hang']);
    //   }
    // });

  }

}
