import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// {path : 'heroes', component : HeroesComponent}
// 表示localhost:4200/heroes显示HeroesComponent
const routes: Routes = [
  {path : 'heroes', component : HeroesComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'detail/:id',component : HeroDetailComponent},
  {path : '', redirectTo : '/dashboard', pathMatch:'full'}
];

//[RouterModule.forRoot(routes)],
//表示在应用的顶级配置这个路由器，forRoot()方法会提供路由所需要的服务提供商和指令
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
