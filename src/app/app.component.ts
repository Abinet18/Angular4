import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule,FormGroup,Validators } from '@angular/forms';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
   
  constructor(private fb:FormBuilder,private data:DataService,private router:Router)
  {
     this.myForm=fb.group(
      {
        'name':[null,Validators.required],
        'email':[null,Validators.required],
        'post':[null,Validators.compose([Validators.required,Validators.minLength(10)])]
      });
  }
  getData()
  {
    console.log("Fetching data");
    this.data.getData().subscribe(
      res=>{
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
    this.router.navigate(['/thank']);
  }
}
