import { Component, OnInit } from '@angular/core';
import { ConsignmentService } from './consignment.service';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent implements OnInit {
  list:any =[];
  data:any =[];
  isChecked:any ;
  name:string='';
  p: any = 1;

  constructor(
    private consignmentService: ConsignmentService
  ) { }

  getConsignmentList() { 
    this.consignmentService.getList().subscribe((res:any)=>{
    this.list = res;
  });}
  ngOnInit(): void {
    this.getConsignmentList();
  }

}
