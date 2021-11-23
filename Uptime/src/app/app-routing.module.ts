import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { RecordComponent } from './components/record/record.component';
import { SetupComponent } from './components/setup/setup.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },{
    path:'record',
    component: RecordComponent
  },{
    path:'setup',
    component: SetupComponent
  },{
    path:'user',
    component: UserComponent
  },{
    path:'info',
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
