import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Vendor} from './vendor';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class VendorService {
  [x: string]: any;

  constructor(private http :Http) { }
  validateVendor(user : string, pwd : string) : Observable<string> {
    return this.
    http.get("http://localhost:8080/MLP178-0.0.1-SNAPSHOT/api/vendor/"+user+"/"+pwd).
    map((res : Response) => res.text());
  }

  findByVendorName(user : string) : Observable<Vendor> {
    return this.
    http.get("http://localhost:8080/MLP178-0.0.1-SNAPSHOT/api/vendor/"+user).
    map((res : Response) => res.json());
  }
  showVendorHistory(vendorId : number) : Observable<Vendor[]> {
    return this.
    http.get("http://localhost:8080/MLP178-0.0.1-SNAPSHOT/api/Orders/Ven/"+vendorId).
    map((res : Response) => res.json());
  }
  showpendingVendorOrders(venId : number) : Observable<Vendor[]> {
    return this.
    http.get("http://localhost:8080/MLP178-0.0.1-SNAPSHOT/api/Orders/pendingven/"+venId).
    map((res : Response) => res.json());
    
  }
}
