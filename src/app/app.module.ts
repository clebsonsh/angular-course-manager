import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { Error404Component } from './error-404/error-404.component';

import { CoreModule } from './core/core.module';
import { CourseModule } from './courses/course.modele';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
  ],
  imports: [
    CoreModule,
    CourseModule,
    BrowserModule,
    HttpClientModule,
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
