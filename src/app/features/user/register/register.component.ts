import { Component } from '@angular/core';
import { RegistrationRequestDto } from 'src/app/core/model/user';
import { UserService } from 'src/app/core/services/user.service';
import { UserRole } from 'src/app/core/model/user-role';
import { Router } from '@angular/router';
import { ServiceResponse } from 'src/app/core/model/service-response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:RegistrationRequestDto = new RegistrationRequestDto();
  roles: string[] = Object.values(UserRole);

  constructor(private readonly service: UserService,
              private readonly router: Router
  ){}

  onSubmit(){
    console.log(this.user);
    this.service.register(this.user).subscribe(
      {
        next: (res) => {
          alert("Registracija uspesna!");
          this.router.navigate(["/auth/login"]);
        },
        error: (err:ServiceResponse) => {
          alert(err.message);
          console.error('An error occurred:', err);
        }
      }
    )
  }
}
