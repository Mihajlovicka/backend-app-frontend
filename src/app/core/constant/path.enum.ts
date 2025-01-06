const userBaseAPI = 'http://localhost:5002/api/';
const accommodationBaseAPI = 'http://localhost:5246/api/';

const authServiceAPI = userBaseAPI + 'auth/';
const accommodationServiceAPI = accommodationBaseAPI + 'accommodations';

export enum Path {
    Register = authServiceAPI + 'register',
    Login = authServiceAPI + 'login',
    Equipment = accommodationServiceAPI + "/equipment",
    Accommodations = accommodationServiceAPI
}
