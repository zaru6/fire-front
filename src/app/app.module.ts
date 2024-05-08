import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { FormsModule } from '@angular/forms';
import { ProductUpdateComponent } from './product-update/product-update.component';

@NgModule({
  declarations: [AppComponent, ProductsTableComponent, ProductCreatorComponent, ProductUpdateComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}