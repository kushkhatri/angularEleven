import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {AdminComponent} from './admin/admin.component';
import {TableComponent} from './table/table.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {SidenavComponent} from './sidenav/sidenav.component';


const routes: Routes = [
	{
		path:'user',
		component : UsersComponent
	},

	{
		path:'admin',
		component : AdminComponent
	},

	{
		path:'table',
		component : TableComponent
	},

	{
		path:'buttons',
		component : ButtonsComponent
	},

	{
		path:'sidenav',
		component : SidenavComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
