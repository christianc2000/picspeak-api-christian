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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InappropriateContentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const inappropriate_content_service_1 = require("./inappropriate-content.service");
const create_inappropriate_content_dto_1 = require("./dto/create-inappropriate-content.dto");
const update_inappropriate_content_dto_1 = require("./dto/update-inappropriate-content.dto");
let InappropriateContentController = class InappropriateContentController {
    constructor(inappropriateContentService) {
        this.inappropriateContentService = inappropriateContentService;
    }
    getInappropriateContents() {
        return this.inappropriateContentService.getInappropriateContents();
    }
    createInappropriateContent(newInappropriateContent) {
        return this.inappropriateContentService.createInappropriateContent(newInappropriateContent);
    }
    getInappropriateContent(id) {
        return this.inappropriateContentService.getInappropriateContent(id);
    }
    deleteInappropriateContent(id) {
        return this.inappropriateContentService.deleteInappropriateContent(id);
    }
    updateInappropriateContent(id, Language) {
        return this.inappropriateContentService.updateInappropriateContent(id, Language);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InappropriateContentController.prototype, "getInappropriateContents", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inappropriate_content_dto_1.CreateInappropriateContentDto]),
    __metadata("design:returntype", void 0)
], InappropriateContentController.prototype, "createInappropriateContent", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InappropriateContentController.prototype, "getInappropriateContent", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InappropriateContentController.prototype, "deleteInappropriateContent", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_inappropriate_content_dto_1.UpdateInappropriateContentDto]),
    __metadata("design:returntype", void 0)
], InappropriateContentController.prototype, "updateInappropriateContent", null);
InappropriateContentController = __decorate([
    (0, common_1.Controller)('inappropriate-content'),
    __metadata("design:paramtypes", [inappropriate_content_service_1.InappropriateContentService])
], InappropriateContentController);
exports.InappropriateContentController = InappropriateContentController;
//# sourceMappingURL=inappropriate-content.controller.js.map