import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";

@Entity('posts')
export class Post {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    public id: number;

    @ApiProperty({ example: '1', description: 'Название поста' })
    @Column()
    public title: string;

    @ApiProperty({ example: '1', description: 'Текст поста' })
    @Column()
    public text: string;

    @ApiProperty({ example: '1', description: 'Дата создания' })
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @ApiProperty({ example: '1', description: 'Id автора поста' })
    @RelationId((post: Post) => post.author)
    public authorId: number;

    @ApiProperty({ example: '1', description: 'Автор' })
    @Index('post_authorId_index')
    @ManyToOne(
        () => User,
        (author: User) => author.posts,
    )
    public author: User;
}