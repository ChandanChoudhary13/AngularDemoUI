import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";

const routes: Routes = [
  { path: '', component: ListUserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
];

export const routing = RouterModule.forRoot(routes);
