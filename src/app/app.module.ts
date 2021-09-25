import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './customPipe.pipe';

@NgModule({   // converts ts class to module in ng view
  declarations: [   // all components part of this module
    AppComponent,
    CoursesComponent,
    CourseComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService // in memory only single instance of object is passed to each user, singelton 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
