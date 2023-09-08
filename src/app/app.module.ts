import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { IconComponent } from './icon/icon.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GigsPageComponent } from './gigs-page/gigs-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    IconComponent,
    SvgIconComponent,
    HomeComponent,
    NewsComponent,
    NewsPageComponent,
    ToolbarComponent,
    GigsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
