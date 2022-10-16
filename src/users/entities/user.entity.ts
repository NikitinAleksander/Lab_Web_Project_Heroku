import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Post } from 'src/posts/entities/post.entity';

@Entity('users')
export class User {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'example@example.ru', description: 'Почта пользователя' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: 'example', description: 'Имя пользователя' })
  @Column({ unique: true })
  username: string;

  @ApiProperty({ example: 'Pa$$w0rd', description: 'Пароль пользователя' })
  @Column()
  password: string;

  @OneToMany(
    () => Post,
    (post: Post) => post.author,
  )
  public posts?: Post[];
}
