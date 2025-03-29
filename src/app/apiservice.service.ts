import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
//create object of httpclient
  constructor(private http:HttpClient) { }

getproduct()
{
  return this.http.get("https://fakestoreapi.com/products");
}
}
                              