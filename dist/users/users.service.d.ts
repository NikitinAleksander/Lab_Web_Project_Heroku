import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { AddUserDto } from './DTO/add-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
    addUser(userDto: AddUserDto): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
}
