import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBoardService {

  constructor(private http: HttpClient) { }

  localUrl = "http://localhost:8080/";
  prodUrl = "https://metrolink-service.herokuapp.com/";

  serverUrl = this.prodUrl;
  // serverUrl = this.localUrl;


  fetchFromSt(){
    return this.http.get(this.serverUrl + "fetch-from");
  }

  fetchToSt(fromSt:any){
    return this.http.get(this.serverUrl + fromSt + "/fetch-to/");
  }

  

}
