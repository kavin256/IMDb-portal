import {Injectable} from '@angular/core';

/**
 * Author: Kavin Ranawella
 * Date: 2021-05-28
 */

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private data: Map<DataKey, string> = new Map();

  constructor() {
  }

  public get(key: DataKey) {
    return this.data.get(key);
  }

  public set(key: DataKey, data: string) {
    this.data.set(key, data);
  }

  public has(key: DataKey) {
    return this.data.has(key);
  }
}

export enum DataKey {
  searchQuery
}
