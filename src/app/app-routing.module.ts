import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
	{
		path:'user',
		component : UsersComponent
	},

	{
		path:'admin',
		component : AdminComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
