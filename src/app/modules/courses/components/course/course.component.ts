import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    ) {
      this.regiForm = this.fb.group({
      Title: [null, Validators.required],
      Description: [null, Validators.required],
      Price : [null ,  Validators.required],
      UrlImage: [null , Validators.required],
      Categorie: [null , Validators.required]
      });
  }

  ngOnInit(): void{
    this.serviceCategorie.getAllCategories()
    .subscribe(categories => {
      this.categories = categories;
     });
    }


    onSubmit(form: { Title: any; Description: any; Categorie: any; Price: any; UrlImage: any; }): void
  {
    console.log(form);
    if (this.regiForm.valid)
    {
      const course: Course = {
        title: form.Title,
        description: form.Description,
        categorie: form.Categorie,
        price: form.Price,
        urlImage: form.UrlImage
      };
      this.serviceCourse.AddCourse(course).then(() => {
       this.dialogRef.close();
     });
    }
}}
