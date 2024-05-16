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
  {
    path: 'app',
    loadChildren: () => import('./app.module').then(m => m.AppModule),
    canActivate: [AuthGuard]
  },
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsTableComponent },
  { path: 'create-prod', component: ProductCreatorComponent },
  { path: 'products/:id/edit', component: ProductUpdateComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }