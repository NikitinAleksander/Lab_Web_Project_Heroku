import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ValidationException } from "src/exceptions/validation.exception";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { AddPostDto } from "./DTO/add-post.dto";
import { Post } from "./entities/post.entity";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private PostRepository: Repository<Post>,
  ) {}

  async getAllPosts(): Promise<Post[]> {
    return await this.PostRepository
      .find({
        loadRelationIds: true,
      })
      .catch((e) => {
        throw new ValidationException(
          'Не удалось получить посты'
        );
      });
  }

  async getAllUserPosts(userId: number): Promise<Post[]> {
    return await this.PostRepository
      .find({
        where: { authorId: userId},
        loadRelationIds: true,
      })
      .catch((e) => {
        throw new ValidationException(
          'Не удалось получить посты пользователя'
        );
      });
  }

  async addPost(PostDto: AddPostDto, user: User): Promise<Post> {
    if (user == undefined)
        throw new ValidationException(
          'Не удалось создать пост'
        );

    const newPost = await this.PostRepository.create({
        ...PostDto,
        author: user
    });
    return this.getPostById(newPost.id);
  }

  async getPostById(id: number) {
    if (id === undefined) {
      throw new ValidationException(
        'Такого поста не существует'
      );
    }
    const post = await this.PostRepository.findOne({
      where: { id },
      relations: {
        author: true,
      },
    });

    if (post) {
        return post;
    }

    throw new ValidationException(
        'Такого поста не существует'
      );
  }
}