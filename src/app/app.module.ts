import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import {FirebaseService} from './services/firebase.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CourseComponent } from './components/course/course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { AddGameComponent } from './components/add-game/add-game.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBLL-E0GEQijtI44CMKrVe6qdTolWLVRig",
  authDomain: "educationgames-4d736.firebaseapp.com",
  databaseURL: "https://educationgames-4d736.firebaseio.com",
  projectId: "educationgames-4d736",
  storageBucket: "educationgames-4d736.appspot.com",
  messagingSenderId: "721528220136"
};

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'add-game', component: AddGameComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    NavbarComponent,
    CourseComponent,
    AddCourseComponent,
    EditCourseComponent,
    AddGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
