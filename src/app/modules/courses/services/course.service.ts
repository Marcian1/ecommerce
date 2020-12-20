import { Injectable } from '@angular/core';
import {AngularFireDatabase, SnapshotAction} from '@angular/fire/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
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
}
