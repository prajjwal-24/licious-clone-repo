import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  signUpUsers:any[]=[];
  signUpObj:any={
    username:'',
    email:'',
    password:''
  };
  loginObj:any={
    username:'',
    password:''
  };

  ngOnInit(){
    const localData = localStorage.getItem('signUpUsers');
    if(localData!=null){
      this.signUpUsers = JSON.parse(localData);
    }
  }
  onSignUp(){
    this.signUpUsers.push(this.signUpObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers));
    this.signUpObj={
      username:"",
      email:"",
      password:""
    }
  }

  onLogin(){
    const isUser=this.signUpUsers.find(m=>
      m.email==this.loginObj.email && m.password==this.loginObj.password);
      if(isUser!=undefined){
        alert('user login sucessful, welcome user '+this.loginObj.username);

      }
      else{
        alert('wrong credentials')
      }
  }
}
