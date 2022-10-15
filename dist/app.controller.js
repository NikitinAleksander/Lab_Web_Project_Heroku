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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    renderIndex() {
        return '';
    }
    renderKkal() {
        return '';
    }
    renderabout() {
        return '';
    }
    renderclementin() {
        return '';
    }
    rendercontacts() {
        return '';
    }
    renderhabits() {
        return '';
    }
    rendernutrition() {
        return '';
    }
    renderpodsoznanie() {
        return '';
    }
    renderpoleznie_privichki() {
        return '';
    }
    renderpoxydenie_bez_trenirovok() {
        return '';
    }
    renderpropositions() {
        return '';
    }
    renderprotMaf() {
        return '';
    }
    renderself_development() {
        return '';
    }
    rendersport() {
        return '';
    }
    rendersport1() {
        return '';
    }
    renderAuth() {
        return '';
    }
    renderChat() {
        return '';
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderIndex", null);
__decorate([
    (0, common_1.Get)('1200kkal'),
    (0, common_1.Render)('pages/1200kkal.pug'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderKkal", null);
__decorate([
    (0, common_1.Get)('about'),
    (0, common_1.Render)('pages/about'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderabout", null);
__decorate([
    (0, common_1.Get)('clementin'),
    (0, common_1.Render)('pages/clementin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderclementin", null);
__decorate([
    (0, common_1.Get)('contacts'),
    (0, common_1.Render)('pages/contacts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "rendercontacts", null);
__decorate([
    (0, common_1.Get)('habits'),
    (0, common_1.Render)('pages/habits'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderhabits", null);
__decorate([
    (0, common_1.Get)('nutrition'),
    (0, common_1.Render)('pages/nutrition'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "rendernutrition", null);
__decorate([
    (0, common_1.Get)('podsoznanie'),
    (0, common_1.Render)('pages/podsoznanie'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderpodsoznanie", null);
__decorate([
    (0, common_1.Get)('poleznie_privichki'),
    (0, common_1.Render)('pages/poleznie_privichki'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderpoleznie_privichki", null);
__decorate([
    (0, common_1.Get)('poxydenie_bez_trenirovok'),
    (0, common_1.Render)('pages/poxydenie_bez_trenirovok'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderpoxydenie_bez_trenirovok", null);
__decorate([
    (0, common_1.Get)('propositions'),
    (0, common_1.Render)('pages/propositions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderpropositions", null);
__decorate([
    (0, common_1.Get)('protMaf'),
    (0, common_1.Render)('pages/protMaf'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderprotMaf", null);
__decorate([
    (0, common_1.Get)('self-development'),
    (0, common_1.Render)('pages/self-development'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderself_development", null);
__decorate([
    (0, common_1.Get)('sport'),
    (0, common_1.Render)('pages/sport'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "rendersport", null);
__decorate([
    (0, common_1.Get)('sport1'),
    (0, common_1.Render)('pages/sport1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "rendersport1", null);
__decorate([
    (0, common_1.Get)('auth'),
    (0, common_1.Render)('pages/auth'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderAuth", null);
__decorate([
    (0, common_1.Get)('chat'),
    (0, common_1.Render)('pages/chat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "renderChat", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map