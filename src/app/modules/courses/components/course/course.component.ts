import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, mergeMap } from 'rxjs/operators';
import { CategorieService } from 'src/app/modules/commun/services/categorie.service';
import { Course } from '../../models/model.cours';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})


export class CourseComponent implements OnInit{
  regiForm: any;
  categories: any[] = [];
  course: any;
  constructor(private fb: FormBuilder, private serviceCategorie: CategorieService,
              private serviceCourse: CourseService,
              public dialogRef: MatDialogRef<CourseComponent>,
              @Inject(MAT_DIALOG_DATA) public idCourse: any
    ) {
  }

  ngOnInit(): void{
    if (!this.idCourse){
    this.serviceCategorie.getAllCategories()
    .subscribe(categories => {
      this.categories = categories;
      this.initalizeCourse(null as any);
     });
    }
    else
    {
      this.serviceCategorie.getAllCategories()
                           .pipe(
                             mergeMap(categories => this.serviceCourse.getCoursebyId(this.idCourse.id).pipe(
                              map(course => {
                                return ([categories, course]);
                              })
                             ))).subscribe(([categories, course]) => {
                                 this.categories = categories as any[];
                                 this.course = course as Course;
                                 this.initalizeCourse(course);
                             });
    }
  }

  initalizeCourse(course: { title: any; description: any; price: any; urlImage: any; categorie: any; }): void
  {
    this.regiForm = this.fb.group({
      Title : [ course ? course.title : null, Validators.required],
      Description : [course ? course.description : null, Validators.required],
      Price : [ course ? course.price : null, Validators.required],
      UrlImage : [ course ? course.urlImage : null, Validators.required],
      Categorie: [ course ? course.categorie : null, Validators.required]
    });

  }


    onSubmit(form: { Title: any; Description: any; Categorie: any; Price: any; UrlImage: any; }): void
  {
    if (this.regiForm.valid)
    {
      const course: Course = {
        id: this.idCourse ? this.idCourse.id : '',
        title: form.Title,
        description: form.Description,
        categorie: form.Categorie,
        price: form.Price,
        urlImage: form.UrlImage
      };
      if (!this.idCourse)
       {
      this.serviceCourse.AddCourse(course).then(() => {
       this.dialogRef.close();
     });
    }

    else
      {
        this.serviceCourse.updateCourse(course).then(() => {
          this.dialogRef.close();
        });
      }
 }}
}
