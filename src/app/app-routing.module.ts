import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./modules/categories/categories.module').then( m => m.CategoriesPageModule)
  },  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then( m => m.AccountPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
