import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Elem } from '../models/elem';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 // private dbPath = 'http://localhost:4200/assets/response.json'; // working on localhost
  private dbPath = '/assets/response.json'; // working on firebase hosting
  private elemListObs = new BehaviorSubject<Array<Elem>>([]);
  private addNew = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.http.get<Array<Elem>>(this.dbPath).subscribe(list => {
      this.elemListObs.next(list);
    });
  }

  getElemList(): Observable<Array<Elem>>  {
    return this.elemListObs.asObservable();
  }

  getAddNew(): Observable<boolean> {
    return this.addNew.asObservable();
  }
  setAddNew(temp: boolean) {
    this.addNew.next(temp);
  }
}
