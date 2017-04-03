import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:any;


  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {

    this.firebaseService.getcourses().subscribe(courses => {
      console.log(courses);
      this.courses = courses;
    });
  }

}
