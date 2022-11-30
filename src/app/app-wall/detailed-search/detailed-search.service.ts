import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailedSearchService {


  localUrl = "http://localhost:8080/";
  prodUrl = "https://metrolink-service.herokuapp.com/";

  serverUrl = this.prodUrl;
  // serverUrl = this.localUrl;

  constructor(private http: HttpClient) { }


  fetchDijkstraPath(from, to){
    return this.http.get(this.serverUrl + "all-path/" + from + "/" + to);
  }

  fetchSt(from, to){
    return this.http.get(this.serverUrl + "fetchSt/" + from + "/" + to);
  }
}
