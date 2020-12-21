import { Injectable } from '@angular/core';
import {AngularFireDatabase, SnapshotAction} from '@angular/fire/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Course } from '../models/model.cours';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private db: AngularFireDatabase) { }

  getAllCourses(): Observable<SnapshotAction<unknown>[]>
  {
    return this.db.list('/courses')
    .snapshotChanges()
    .pipe(
     map(changes =>
       changes.map(c => (
         {
                      key: c.payload.key, ...c.payload.val() as any
         }
         ))
    )
    );
   }
   AddCourse(course: Course): any
   {
     return this.db.list('/courses/').push({
      title: course.title,
      description: course.description,
      categorie: course.categorie,
      price: course.price,
      urlImage: course.urlImage
     });
   }
}
