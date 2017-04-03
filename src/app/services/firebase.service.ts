import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  courses: FirebaseListObservable<any[]>;
  course: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) {
    this.folder = 'courseimages';
    this.courses = this.af.database.list('/courses') as FirebaseListObservable<course[]>
  }

  getcourses(){
    return this.courses;
  }

  getcourseDetails(id){
    this.course = this.af.database.object('/courses/'+id) as FirebaseObjectObservable<course>
    return this.course;
  }

  addcourse(course){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        course.image = selectedFile.name;
        course.path = path;
        return this.courses.push(course);
      });
    }
  }

  updatecourse(id, course){
    return this.courses.update(id, course);
  }

  deletecourse(id){
    return this.courses.remove(id);
  }

}

interface course{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  difficulty?:string;

}
