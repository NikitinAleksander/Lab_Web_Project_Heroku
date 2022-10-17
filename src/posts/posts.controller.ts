import {Body, Controller, Get, Post as NestPost, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Post } from './posts.model';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}

    @ApiOperation({summary: 'Получить все посты'})
    @ApiResponse({status: 200, type: [Post]})
    @Get()
    getPosts() {
        return this.postService.getList()
    }

    @ApiOperation({summary: 'Создать пост'})
    @ApiResponse({status: 200, type: [Post]})
    @NestPost()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto,
               @UploadedFile() image) {
        return this.postService.create(dto, image)
    }

    @ApiOperation({summary: 'Создать пост без картинки (Дебаг)'})
    @ApiResponse({status: 200, type: [Post]})
    @NestPost('withoutImage')
    createPostWithoutImage(@Body() dto: CreatePostDto) {
         dto.userId = 1;
        return this.postService.createWithoutImage(dto)
    }
}
