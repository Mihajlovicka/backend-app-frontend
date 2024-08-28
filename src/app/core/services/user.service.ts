import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {RegistrationRequestDto} from "../model/user";
import { Path } from "../constant/path.enum";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  register(user: RegistrationRequestDto) {
    return this.http.post(Path.Register, user)
  }

}
