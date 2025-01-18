import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Path } from '../constant/path.enum';
import { CreateAccommodation, Equipment } from '../model/accommodation';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  public constructor(private http: HttpClient) { }

  public getEquipment(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(Path.Equipment);
  }

  public saveAccommodation(data: CreateAccommodation): Observable<void> {
    return this.http.post<void>(Path.Accommodations, data);
  }
}
