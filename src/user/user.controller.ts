import { Controller, Get, Post, HttpCode, Param } from '@nestjs/common';
import { Request, Res, Body, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './create-user-dto';

@Controller('user')
export class UserController {
  @Post()
  @HttpCode(201)
  async createUser(
    @Request() req: any,
    @Res() res: any,
    @Body() body: CreateUserDto,
  ): Promise<any[]> {
    console.log(body);
    return res.status(HttpStatus.CREATED).send(req.body);
  }
  @Get()
  @HttpCode(200)
  //@Redirect('https://nestjs.com', 301)
  getHello(): string {
    return 'Hello all in Users';
  }
  @Get(':id')
  getOneUser(@Param() p: any): string {
    console.log(p.id);
    return `This is user ${p.id}`;
  }
  @Get('me')
  getMe(): string {
    return 'This is me';
  }
}
