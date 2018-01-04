import { Component, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';
import { Router  } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public form: FormGroup;
  // public user$ = this.authService.user; not available here since the user is to register
  error: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
     public afa: AngularFireAuth,
      private router: Router
  ) {
        // form initialization
this.form = this.formBuilder.group({
  email: ['', Validators.required],
  password: ['', Validators.required]
});
    // firebase auth
    this.afa.authState.subscribe(auth => {
    });
   }

  ngOnInit() {
  }

 // User email and password login
 signUpWithEmail() {
  const inputValue = this.form.value;
  console.log(inputValue.email, inputValue.password );
  this.authService.signUp(inputValue.email, inputValue.password)
  .subscribe(
    // success then route to '/hostels'
    data => {
    if (data) {
      console.log(data);
      this.router.navigateByUrl('/hostels');
      }
  },
  // failure then log error
  error => {
    alert(error);
  });
    }

    // Google login
  signUpWithGoogle() {
  this.authService.loginWithGoogle();
  }

}



 

