import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsignmentService } from '../consignment.service';

@Component({
  selector: 'app-consignment-create',
  templateUrl: './consignment-create.component.html',
  styleUrls: ['./consignment-create.component.css']
})
export class ConsignmentCreateComponent implements OnInit {
  currentFile: any;
  submited: boolean = false;
  consignmentForm: FormGroup = new FormGroup({
    excelFile: new FormControl('', Validators.required)
  });


  constructor(
    private consignmentService: ConsignmentService,
    private toastr: ToastrService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  get f() {
    return this.consignmentForm.controls
  }

  onChangeFile(ev: any) {
    this.currentFile = ev.target.files[0];
    this.consignmentForm.patchValue({
      file:this.currentFile
    })
  }

  onSubmit() {
    this.submited = true;
    if (this.consignmentForm.invalid) {
      return;
    }

    var formData = new FormData();
    formData.append('file', this.currentFile);
    console.log(this.currentFile)
    this.consignmentService.add(formData).subscribe(res => {
      console.log(res);
      if (res.errorCode=='FALIED') {
        this.toastr.error('Đọc file lỗi', 'Lỗi', {
          positionClass: 'toast-top-center'
        })
      } 
      else {
            this._router.navigate(['/lo-hang/moi']);
        
      }


    });

  }

}
