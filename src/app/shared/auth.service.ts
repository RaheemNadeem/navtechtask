import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()

export class AuthService{

    loggedIn=false;
    username:string="test@test.com";
    password:string="password123";




    constructor(private router:Router){}



    isAuthenticated(){
        return this.loggedIn;

    }

    login(username:string,password:string):boolean{
        console.log(username,password);

        if(username==this.username&&password==this.password){

            this.loggedIn=true;
            this.router.navigate(['/dashboard']);

        }else{return true;}
    }
}

