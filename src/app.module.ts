import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, CatsController],
  providers: [AppService, CatsService, PrismaService, UserService],
})
export class AppModule {}
