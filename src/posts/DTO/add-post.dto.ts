import { ApiProperty } from "@nestjs/swagger";

export class AddPostDto {
    @ApiProperty({ example: 'someTitle', description: 'Название поста' })
    readonly title: string;
    @ApiProperty({ example: 'someText', description: 'Текст поста' })
    readonly text: string;
    @ApiProperty({ example: '2', description: 'Id автора поста' })
    readonly authorId: number;
  }
  