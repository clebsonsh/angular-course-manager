import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent
      }
    ])
  ]
})

export class CourseModule { }
