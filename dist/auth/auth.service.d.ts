import { LoginUserDto } from './DTO/login-user-dto';
import { RegisterUserDto } from './DTO/register-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(loginUserDto: LoginUserDto): Promise<{
        token: string;
    }>;
    registration(registerUserDto: RegisterUserDto): Promise<{
        token: string;
    }>;
    private validateUser;
    private generateToken;
    getName(bearer: string): any;
}
