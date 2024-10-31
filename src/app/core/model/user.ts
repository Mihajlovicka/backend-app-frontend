import { UserRole } from './user-role';

export class AddressDto {
  streetNumber: string;
  streetName: string;
  city: string;
  postNumber: string;
  country: string;

  constructor() {
    this.streetNumber = '';
    this.streetName = '';
    this.city = '';
    this.postNumber = '';
    this.country = '';
  }
}

export class RegistrationRequestDto {
  email: string;
  name: string;
  password?: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  address: AddressDto;

  constructor() {
    this.email = '';
    this.name = '';
    this.password = '';
    this.role = UserRole.GUEST;
    this.firstName = '';
    this.lastName = '';
    this.address = new AddressDto();
  }
}

export class LoginRequestDto {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }
}

export interface UserDto {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}

export interface LoginResponseDto {
  user: UserDto;
  token: string;
}
