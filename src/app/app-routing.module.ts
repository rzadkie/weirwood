import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { GigsPageComponent } from './gigs-page/gigs-page.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'gigs', component: GigsPageComponent},
  {path: 'shows', component: GigsPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
