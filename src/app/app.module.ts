import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ModelsComponent } from './models/models.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { NotificationComponent } from './notification/notification.component';
import { UploadComponent } from './upload/upload.component';
import { ProductFormUpdateComponent } from './product-form-update/product-form-update.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ProductdtosComponent } from './productdtos/productdtos.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { DiscussionDetailComponent } from './discussion-detail/discussion-detail.component';
import { TopicFormComponent } from './topic-form/topic-form.component';
import { TopicReplyFormComponent } from './topic-reply-form/topic-reply-form.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent, 
    ProductsTableComponent, 
    HeaderComponent, 
    ButtonsComponent, 
    LoginComponent, 
    NavbarComponent, 
    HomeComponent, 
    ModelsComponent, 
    ProductFormComponent, 
    NotificationComponent, 
    UploadComponent, 
    ProductFormUpdateComponent, ProductdtosComponent, DiscussionComponent, DiscussionDetailComponent, TopicFormComponent, TopicReplyFormComponent],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule 
   ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }