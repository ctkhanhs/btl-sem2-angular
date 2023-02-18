import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductComponent } from './components/product/product.component';
import { PartnerComponent } from './components/partner/partner.component';
import { PartnerCreateComponent } from './components/partner/partner-create/partner-create.component';
import { PartnerEditComponent } from './components/partner/partner-edit/partner-edit.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { WarehouseCreateComponent } from './components/warehouse/warehouse-create/warehouse-create.component';
import { WarehouseEditComponent } from './components/warehouse/warehouse-edit/warehouse-edit.component';
import { ConsignmentCreateComponent } from './components/consignment/consignment-create/consignment-create.component';
import { ConsignmentComponent } from './components/consignment/consignment.component';
import { NewConsignmentComponent } from './components/consignment/new-consignment/new-consignment.component';
import { ConsignmentEditComponent } from './components/consignment/consignment-edit/consignment-edit.component';
import { ConsignmentDetailsComponent } from './components/consignment/consignment-details/consignment-details.component';
import { WahouseReceiptComponent } from './components/warehouse/wahouse-receipt/wahouse-receipt.component';

const routes: Routes = [
  {path:'danh-muc',component: CategoryComponent},
  {path:'danh-muc/them-moi',component: CategoryCreateComponent},
  {path:'danh-muc/chinh-sua/:id',component: CategoryEditComponent},

  {path:'san-pham',component:ProductComponent},
  {path:'san-pham/them-moi',component: ProductCreateComponent},
  {path:'san-pham/chinh-sua/:id',component: ProductEditComponent},

  {path:'doi-tac',component: PartnerComponent},
  {path:'doi-tac/them-moi',component: PartnerCreateComponent},
  {path:'doi-tac/chinh-sua/:id',component: PartnerEditComponent},

  {path:'kho',component: WarehouseComponent},
  {path:'kho/them-moi',component: WarehouseCreateComponent},
  {path:'kho/chinh-sua/:id',component:WarehouseEditComponent},
  {path:'kho/hoa-don/:name',component: WahouseReceiptComponent},

  {path:'lo-hang',component:ConsignmentComponent},
  {path:'lo-hang/moi',component: NewConsignmentComponent},
  {path:'lo-hang/them-moi',component: ConsignmentCreateComponent},
  {path:'lo-hang/chinh-sua/:status/:id/:warehouseId',component:ConsignmentEditComponent},
  {path:'lo-hang/chi-tiet-lo-hang/:id', component: ConsignmentDetailsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
