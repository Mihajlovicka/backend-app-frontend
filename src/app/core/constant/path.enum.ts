const authService = 'http://localhost:5002/api/auth/';

export enum Path {
    Register = authService + 'register',
    Login = authService + 'login'
}