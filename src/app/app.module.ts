import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ContentComponent},
      {path: 'home', component: ContentComponent},
      {path: 'ourwork', component: ContentComponent},
      {path: 'aboutus', component: ContentComponent},
      {path: 'contactus', component: ContentComponent},
      {path: 'specials', component: ContentComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
