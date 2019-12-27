import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PostDto {
  @ApiProperty({ description: '文章标题' })
  @IsNotEmpty({ message: '标题不能为空' })
  title: string;

  @ApiProperty({ description: '文章内容' })
  @IsNotEmpty({ message: '内容不能为空' })
  content: string;
}
