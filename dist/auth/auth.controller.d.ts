import { LoginUserDto } from './DTO/login-user-dto';
import { RegisterUserDto } from './DTO/register-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginUserDto: LoginUserDto): Promise<{
        token: string;
    }>;
    register(registerUserDto: RegisterUserDto): Promise<{
        token: string;
    }>;
}
