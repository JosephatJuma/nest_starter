import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { HttpStatus, Delete, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Post()
  async create(@Body() cat: CreateCatDto, @Res() res: any) {
    this.catsService.createCat(cat);
    res.status(HttpStatus.CREATED).send(cat);
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAllCats();
  }
  @Delete()
  async delete(@Res() res: any, @Body() cat: Cat) {
    this.catsService.deleteCat(cat);
    res.status(HttpStatus.ACCEPTED).send();
  }
  @Get(':name')
  async finOneCat(@Param() p: any, @Res() res: any): Promise<Cat[]> {
    return res.send(this.catsService.finOneCat(p.name));
  }
}
