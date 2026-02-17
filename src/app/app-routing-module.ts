import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell';
import { HomeComponent } from './pages/home/home';
import { UserDetailComponent } from './pages/user-detail/user-detail';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children:[
        {path:'', component:HomeComponent},
        {path:'users/:id', component:UserDetailComponent},
        {path:'*', redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
