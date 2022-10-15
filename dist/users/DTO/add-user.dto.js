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
exports.AddUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AddUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'loke@yandex.ru', description: 'Почта пользователя' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строковым значением' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Некорректная почта' }),
    __metadata("design:type", String)
], AddUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'loke@yandex.ru', description: 'Почта пользователя' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строковым значением' }),
    (0, class_validator_1.Length)(4, 15, {
        message: 'Имя пользователя должно быть больше 4 и меньше 15 символов',
    }),
    __metadata("design:type", String)
], AddUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4aacwe55s', description: 'Пароль пользователя' }),
    (0, class_validator_1.Length)(4, 20, {
        message: 'Пароль пользователя должен быть больше 4 и меньше 20 символов',
    }),
    __metadata("design:type", String)
], AddUserDto.prototype, "password", void 0);
exports.AddUserDto = AddUserDto;
//# sourceMappingURL=add-user.dto.js.map