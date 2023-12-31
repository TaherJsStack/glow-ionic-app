import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'SearchResult/:type',
    component: SearchResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
