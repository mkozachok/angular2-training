import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  n = 0;
  getRandomString() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < this.n; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
  }
}