import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule,FormGroup,Validators } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `<div>
            <form [formGroup]='myForm' (ngSubmit)="processData(myForm.value)">
            <label>Name</label>
            <input type='text' formControlName='name'>
            <div *ngIf="!myForm.controls['name'].valid">Name required</div>
            <label>Email</label>
            <input type='text' formControlName='email'>
            <div *ngIf="!myForm.controls['email'].valid">Email required</div>
            <label>Post</label>
            <textarea formControlName='post'></textarea>
            <div *ngIf="!myForm.controls['post'].valid">Post should be atleast 10 characters long</div>
            <button type='submit' [disabled]="!myForm.valid">Submit</button>
            <button type='button' (click)="getData()">Get Data</button>
            </form>
             </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
   
  constructor(private fb:FormBuilder,private data:DataService)
  {
     this.myForm=fb.group(
      {
        'name':[null,Validators.required],
        'email':[null,Validators.required],
        'post':[null,Validators.minLength(10)]
      });
  }
  getData()
  {
    console.log("Fetching data");
    this.data.getData().subscribe(
      (res)=>{
        console.log(res.name);
        this.myForm.controls['name'].patchValue(res.name);
        this.myForm.controls['email'].patchValue(res.email);        
      }
    );
    this.data.getPosts().subscribe(
      posts=>{
        console.log(posts[0].body);
        this.myForm.controls['post'].patchValue(posts[0].body);
      });
       
  }
  processData(formData)
  {
    console.log(formData);
  }
}
