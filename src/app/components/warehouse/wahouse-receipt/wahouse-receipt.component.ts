import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-wahouse-receipt',
  templateUrl: './wahouse-receipt.component.html',
  styleUrls: ['./wahouse-receipt.component.css']
})
export class WahouseReceiptComponent implements OnInit {

  list:any=[];
  name:any;
  p: any = 1;

  constructor(
    private warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.getWarehouseReceipt();
  }

  getWarehouseReceipt(){
    this.warehouseService.getReceipt(this.name).subscribe(res => {
      this.list = res;
    })
  }
}
