import { Component, OnInit } from '@angular/core';
import { PartnerService } from './partner.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  list:any=[];
  p: any = 1;

  constructor(
    private partnerService: PartnerService
  ) { }

  ngOnInit(): void {
    this.getPartnerList();
  }

  getPartnerList(){
    this.partnerService.getList().subscribe((res:any) => {
      this.list = res;
    })
  }

}
