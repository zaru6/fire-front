import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ModelsComponent } from './models/models.component';
import { ProductdtosComponent } from './productdtos/productdtos.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { DiscussionDetailComponent } from './discussion-detail/discussion-detail.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: 'app', loadChildren: () => import('./app.module').then(m => m.AppModule) },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'products', component: ProductsTableComponent, canActivate: [AuthGuard] },
      { path: 'discussion', component: DiscussionComponent, canActivate: [AuthGuard] },
      { path: 'discussion/:id', component: DiscussionDetailComponent, canActivate: [AuthGuard] },
      //{ path: 'products/:id/edit', component: ProductUpdateComponent, canActivate: [AuthGuard] },
      { path: 'models', component: ModelsComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      //{ path: '**', redirectTo: '/login' }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }