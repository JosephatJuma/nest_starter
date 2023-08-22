import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
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
}
