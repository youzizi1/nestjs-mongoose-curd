import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostInterface } from './post.interface';
import { PostDto } from './post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('Post')
    private readonly postModel: Model<PostInterface>,
  ) {}

  /**
   * 获取文章
   */
  async findAllPosts(id: string) {
    return id ? await this.postModel.findById(id) : await this.postModel.find();
  }

  /**
   * 创建文章
   * @param data 文章数据
   */
  async createPost(data: PostDto) {
    return await this.postModel.create(data);
  }

  /**
   * 更新文章
   * @param id 文章id
   * @param data 文章数据
   */
  async updatePost(id: string, data: PostDto) {
    return await this.postModel.findByIdAndUpdate(id, data);
  }

  /**
   * 删除文章
   * @param id 文章id
   */
  async deletePost(id: string) {
    return await this.postModel.findByIdAndDelete(id);
  }
}
