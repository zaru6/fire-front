import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { AppComponent } from './app.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: 'app', loadChildren: () => import('./app.module').then(m => m.AppModule) },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'products', component: ProductsTableComponent, canActivate: [AuthGuard] },
    { path: 'create-prod', component: ProductCreatorComponent, canActivate: [AuthGuard] },
    { path: 'products/:id/edit', component: ProductUpdateComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    //{ path: '**', redirectTo: '/login' }
  ] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }