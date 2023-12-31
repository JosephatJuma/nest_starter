import { Controller, Get, Post, HttpCode, Param } from '@nestjs/common';
import { Body, Delete } from '@nestjs/common';
//import { CreateUserDto } from './create-user-dto';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  @HttpCode(201)
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
  @Get()
  @HttpCode(200)
  //@Redirect('https://nestjs.com', 301)
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({ orderBy: { id: 'asc' } });
  }
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }
  @Delete(':id')
  deleteUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }
}
