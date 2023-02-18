import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { PartnerComponent } from './components/partner/partner.component';
import { PartnerCreateComponent } from './components/partner/partner-create/partner-create.component';
import { PartnerEditComponent } from './components/partner/partner-edit/partner-edit.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { WarehouseCreateComponent } from './components/warehouse/warehouse-create/warehouse-create.component';
import { WarehouseEditComponent } from './components/warehouse/warehouse-edit/warehouse-edit.component';
import { ConsignmentComponent } from './components/consignment/consignment.component';
import { ConsignmentCreateComponent } from './components/consignment/consignment-create/consignment-create.component';
import { NewConsignmentComponent } from './components/consignment/new-consignment/new-consignment.component';
import { ConsignmentEditComponent } from './components/consignment/consignment-edit/consignment-edit.component';
import { ConsignmentDetailsComponent } from './components/consignment/consignment-details/consignment-details.component';
import { WahouseReceiptComponent } from './components/warehouse/wahouse-receipt/wahouse-receipt.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    ProductCreateComponent,
    ProductEditComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    PartnerComponent,
    PartnerCreateComponent,
    PartnerEditComponent,
    WarehouseComponent,
    WarehouseCreateComponent,
    WarehouseEditComponent,
    ConsignmentComponent,
    ConsignmentCreateComponent,
    NewConsignmentComponent,
    ConsignmentEditComponent,
    ConsignmentDetailsComponent,
    WahouseReceiptComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
