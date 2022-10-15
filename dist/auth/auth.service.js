"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(loginUserDto) {
        const user = await this.validateUser(loginUserDto);
        return this.generateToken(user);
    }
    async registration(registerUserDto) {
        const candidate = await this.userService.getUserByEmail(registerUserDto.email);
        if (registerUserDto === undefined || candidate) {
            throw new common_1.HttpException('Пользователь с таким email существует', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(registerUserDto.password, 5);
        const user = await this.userService.addUser(Object.assign(Object.assign({}, registerUserDto), { password: hashPassword }));
        return this.generateToken(user);
    }
    async validateUser(userDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        if (!user) {
            throw new common_1.UnauthorizedException({
                message: 'Некорректный email или пароль',
            });
        }
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new common_1.UnauthorizedException({
            message: 'Некорректный email или пароль',
        });
    }
    async generateToken(user) {
        const payLoad = { email: user.email, id: user.id, username: user.username };
        return {
            token: this.jwtService.sign(payLoad),
        };
    }
    getName(bearer) {
        const token = bearer.split(' ')[1];
        const user = this.jwtService.decode(token);
        if (user['username'] === undefined) {
            throw new common_1.HttpException({ message: 'Неизвестный токен' }, common_1.HttpStatus.BAD_REQUEST);
        }
        return user['username'];
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map