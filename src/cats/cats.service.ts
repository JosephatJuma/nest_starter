import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  createCat(cat: Cat) {
    this.cats.push(cat);
  }
  findAllCats(): Cat[] {
    return this.cats;
  }
  deleteCat(cat: Cat) {
    this.cats.splice(this.cats.indexOf(cat), 1);
  }
}
