import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { AppComponent } from './app.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'products', component: ProductsTableComponent },
  { path: 'create-prod', component: ProductCreatorComponent },
  { path: 'products/:id/edit', component: ProductUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }