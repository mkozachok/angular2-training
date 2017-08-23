import { Injectable } from '@angular/core';

class Const {
  constructor (
    public name: string,
    public value: number | string
  ) {}
}

const constList = [
  new Const("Version", "10"),
  new Const("Author", "Myhaylo")
];

@Injectable()
export class ConstService {
  getConstList(): Promise<Const[]> {
    return Promise.resolve(constList);
  }

  getConstByName(name: string): Promise<Const> {
    return this.getConstList()
      .then(items => items.find(item => item.name === name))
      .catch(() => Promise.reject('Error in getConstByName method.'));
  }

  addConst(value: Const): void {
    constList.push(value);
  }

  removeConst(name: string): void {
    this.getConstList()
      .then(items => items.filter(item => item.name !== name))
      .catch(() => Promise.reject('Error in removeConst mrthod.'));
  }
}