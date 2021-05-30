import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

/**
 * Author: Kavin Ranawella
 * Date: 2021-05-28
 */

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor(
    public http: HttpClient,
  ) { }

  // make a GET request
  public get<T>(url: string, params: HttpParams, headers: HttpHeaders) {
    return new Promise((resolve, reject) => {
      this.http.get<T>(url, {
        headers, params
      }).subscribe(
        ( data) => {
          resolve(data);
        }, (data) => {
          reject(data);
        });
    });
  }
}
