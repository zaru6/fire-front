import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProductsTableComponent, ProductCreatorComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}