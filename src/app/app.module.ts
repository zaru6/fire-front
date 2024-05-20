import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { FormsModule } from '@angular/forms';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { HeaderComponent } from './header/header.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [AppComponent, ProductsTableComponent, ProductCreatorComponent, ProductUpdateComponent, HeaderComponent, ButtonsComponent, LoginComponent, NavbarComponent, HomeComponent, ModelsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    MatTabsModule
   ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }