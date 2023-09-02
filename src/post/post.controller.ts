import { Controller, Post, Body, Get, Delete } from '@nestjs/common';
import { Param, Res, HttpStatus, Patch } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModal } from '@prisma/client';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post()
  async createNewPost(
    @Body() data: { title: string; content: string; authorId: number },
  ): Promise<PostModal> {
    return this.postService.createPost(data);
  }
  @Get()
  async getAllPosts(): Promise<PostModal[]> {
    return this.postService.posts({ orderBy: { id: 'asc' } });
  }
  @Get(':id')
  async getPostById(
    @Param('id') id: string,
    @Res() res: any,
  ): Promise<PostModal> {
    const post = await this.postService.post({ id: Number(id) });
    if (!post) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: `No Available Post with id ${id}` });
    }
    return res.status(HttpStatus.ACCEPTED).json(post);
  }
  @Delete(':id')
  async deletePost(
    @Param('id') id: string,
    @Res() res: any,
  ): Promise<PostModal> {
    const deleted = await this.postService.deletePost({ id: Number(id) });
    if (!deleted) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: `No Post with id ${id} found to delete` });
    }
    return res
      .status(HttpStatus.ACCEPTED)
      .json({ message: 'Post deleted successfully' });
  }
  @Patch(':id')
  async updatePost(
    @Body() data: { title: string; content: string },
    @Param('id') id: string,
    @Res() res: any,
  ): Promise<PostModal> {
    const update = await this.postService.updatePost({
      where: { id: Number(id) },
      data: data,
    });
    if (!update) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: `No Post with id ${id} found to update` });
    }
    return res
      .status(HttpStatus.ACCEPTED)
      .json({ message: 'Post updated successfully' });
  }
}
