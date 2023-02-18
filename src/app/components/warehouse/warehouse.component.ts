import { Component, OnInit } from '@angular/core';
import { WarehouseService } from './warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  list:any=[];
  p: any = 1;

  constructor(
    private warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.getWarehouseList();
  }

  getWarehouseList(){
    this.warehouseService.getList().subscribe(res => {
      this.list = res;
    })
  }

}
