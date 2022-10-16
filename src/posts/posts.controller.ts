import { Controller, Get, Body, Req } from "@nestjs/common";
import { Post as NestPost } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import RequestWithUser from "src/common/requestWithUser.interface";
import { AddPostDto } from "./DTO/add-post.dto";
import { Post } from "./entities/post.entity";
import { PostsService } from "./posts.service";

@ApiTags('Посты')
@Controller('posts')
export class PostsController {
  constructor(private PostService: PostsService) {}

  @ApiOperation({ summary: 'Получение всех постов' })
  @ApiResponse({
    status: 200,
    type: [Post],
    description: 'Посты найдены',
  })
  @ApiResponse({ status: 400, description: 'Посты не найдены' })
  @Get()
  async getAllPosts(): Promise<Post[]> {
    return await this.PostService.getAllPosts();
  }

  @ApiOperation({ summary: 'Добавление поста' })
  @ApiResponse({
    status: 200,
    description: 'Пост добавлен',
  })
  @ApiResponse({ status: 400, description: 'Неудалось добавить пост' })
  @NestPost('add-post')
  async addPost(@Body() PostDto: AddPostDto, @Req() req: RequestWithUser) {
    await this.PostService.addPost(PostDto, req.user);
  }
}
