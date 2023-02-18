import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from './category.service';
declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  list:any =[];
  data:any =[];
  isChecked:any ;
  name:string='';
  p: any = 1;

  // categoryFormCreate: FormGroup=new FormGroup({
  //   name:new FormControl(''),
  //   status:new FormControl(1)
  // });

  // categoryFormEdit: FormGroup=new FormGroup({
  //   id:new FormControl(''),
  //   name:new FormControl(''),
  //   status:new FormControl(1)
  // });


  constructor(
    private categoryService: CategoryService
  ) { }

  getCategoryList() {
    this.categoryService.getList().subscribe((res:any)=>{
      this.list = res;
    });
  }

  ngOnInit(): void {
    this.getCategoryList();
  }

  // onDelete(id:number) {
  //   if(confirm('Xóa sản phẩm')){
  //     this.categoryService.remove(id).subscribe(res=>{
  //       this.getCategoryList();
  //     })

  //   }
  // }

  // onSubmit(){
  //   let data=this.categoryFormCreate.value;
  //   this.categoryService.add(data).subscribe(res=>{
  //     this.getCategoryList();
  //   })
  // }

  // onShowModal(cat:any){
  //   this.isChecked=cat.status;
  //   this.categoryFormEdit.patchValue(cat);
  // }

  // onUpdate(){
  //   let data=this.categoryFormEdit.value;
  //   console.log(data);
  //   this.categoryService.update(data.id,data).subscribe(res=>{
  //     this.getCategoryList();
  //     $('#modal-id').modal('hide');
  //   })
  // }

  onSearch() {
    let _this=this;
    this.list=this.data.filter(function(item:any){
      return item.name.toLowerCase().includes(_this.name.toLowerCase());
    })
  }


}
