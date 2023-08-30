import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, CatsController, PostController],
  providers: [AppService, CatsService, PrismaService, UserService, PostService],
})
export class AppModule {}
