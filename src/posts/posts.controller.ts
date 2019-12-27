import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger';
import { PostDto } from './post.dto';

@Controller('posts')
@ApiTags('文章模块')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: '获取所有文章' })
  @ApiQuery({ name: 'id', required: false })
  async findAllPosts(@Query('id') id: string) {
    return await this.postsService.findAllPosts(id);
  }

  @Post()
  @ApiOperation({ summary: '创建文章' })
  async createPost(@Body() data: PostDto) {
    return await this.postsService.createPost(data);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新文章' })
  async updatePost(@Param('id') id: string, @Body() data: PostDto) {
    return await this.postsService.updatePost(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章' })
  async deletePost(@Param('id') id: string) {
    return await this.postsService.deletePost(id);
  }
}
