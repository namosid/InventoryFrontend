import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryCreateComponent } from './inventory-create/inventory-create.component';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user-login' },
  { path: 'create-inventory', component: InventoryCreateComponent },
  { path: 'inventory-list', component: InventoryListComponent },
  { path: 'inventory-edit/:id', component: InventoryEditComponent },
  { path: 'user-login', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
