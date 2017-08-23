import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  getItem(key: string) {
    return Promise.resolve(localStorage.getItem(key));
  }

  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }
}