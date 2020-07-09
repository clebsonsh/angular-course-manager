import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { StarComponent } from './star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';

import { ReplacePipe } from './pipe/replace.pipe';

import { CourseModule } from './courses/course.modele';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    NavBarComponent,
    Error404Component,
    ReplacePipe
  ],
  imports: [
    CourseModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
