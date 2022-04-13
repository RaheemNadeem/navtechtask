import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  username:string;
  password:string;
  error1:boolean = false ; 
  error2:boolean = false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    
    this.signupForm = new FormGroup({
      'email': new FormControl(null,[Validators.email,Validators.required]),
      'password': new FormControl(null,Validators.required)
      
    });
  }

  onSubmit(){
    this.username=this.signupForm.value.email;
     this.password =this.signupForm.value.password;
   
     this.error2= this.authService.login(this.username,this.password);
 
   }

  
}
