import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { AddUserDto } from './DTO/add-user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAllUsers(): Promise<User[]>;
    addUser(userDto: AddUserDto): Promise<void>;
}
