import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsignmentService } from '../consignment.service';

@Component({
  selector: 'app-consignment-details',
  templateUrl: './consignment-details.component.html',
  styleUrls: ['./consignment-details.component.css']
})
export class ConsignmentDetailsComponent implements OnInit {

  list:any =[];
  data:any =[];
  isChecked:any ;
  name:string='';
  id:any;
  p: any = 1;

  constructor(
    private consignmentService: ConsignmentService,
    private toastr: ToastrService,
    private activeRouter: ActivatedRoute,
    private _router: Router
  ) { }

  getConsignmentDetailsList(id:any) { 
    this.consignmentService.getConsignmentDetails(id).subscribe((res:any)=>{
    this.list = res;
  });}
  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(parameter => {
      this.id = parameter.get('id');
    });
    this.getConsignmentDetailsList(this.id);
  }
}
