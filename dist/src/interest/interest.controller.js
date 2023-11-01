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
exports.InterestController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const interest_service_1 = require("./interest.service");
const create_interest_dto_1 = require("./dto/create-interest.dto");
const update_interest_dto_1 = require("./dto/update-interest.dto");
let InterestController = class InterestController {
    constructor(interestService) {
        this.interestService = interestService;
    }
    getInterests() {
        return this.interestService.getInterests();
    }
    createInterest(newInterest) {
        return this.interestService.createInterest(newInterest);
    }
    getInterest(id) {
        return this.interestService.getInterest(id);
    }
    deleteInterest(id) {
        return this.interestService.deleteInterest(id);
    }
    updateInterest(id, interest) {
        return this.interestService.updateInterest(id, interest);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "getInterests", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_interest_dto_1.CreateInterestDto]),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "createInterest", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "getInterest", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "deleteInterest", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_interest_dto_1.UpdateInterestDto]),
    __metadata("design:returntype", void 0)
], InterestController.prototype, "updateInterest", null);
InterestController = __decorate([
    (0, common_1.Controller)('interest'),
    __metadata("design:paramtypes", [interest_service_1.InterestService])
], InterestController);
exports.InterestController = InterestController;
//# sourceMappingURL=interest.controller.js.map