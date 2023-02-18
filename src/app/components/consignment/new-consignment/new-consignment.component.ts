import { Component, OnInit } from '@angular/core';
import { ConsignmentService } from '../consignment.service';

@Component({
  selector: 'app-new-consignment',
  templateUrl: './new-consignment.component.html',
  styleUrls: ['./new-consignment.component.css']
})
export class NewConsignmentComponent implements OnInit {

  list:any =[];
  data:any =[];
  isChecked:any ;
  name:string='';
  p: any = 1;

  constructor(
    private consignmentService: ConsignmentService
  ) { }

  getConsignmentList() { 
    this.consignmentService.getNewList().subscribe((res:any)=>{
    this.list = res;
  });}
  ngOnInit(): void {

    this.getConsignmentList();
  }

}
