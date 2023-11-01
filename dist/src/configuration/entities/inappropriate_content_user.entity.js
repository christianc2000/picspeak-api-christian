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
exports.InappropriateContentUser = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const inappropriate_content_entity_1 = require("../../inappropriate-content/entities/inappropriate-content.entity");
let InappropriateContentUser = class InappropriateContentUser {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, status: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, user: { required: true, type: () => require("../../users/entities/user.entity").User }, inappropiateContent: { required: true, type: () => require("../../inappropriate-content/entities/inappropriate-content.entity").InappropriateContent } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InappropriateContentUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', default: false }),
    __metadata("design:type", Boolean)
], InappropriateContentUser.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], InappropriateContentUser.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], InappropriateContentUser.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], InappropriateContentUser.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.inappropriateContentUsers),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], InappropriateContentUser.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => inappropriate_content_entity_1.InappropriateContent, (inappropriate_content) => inappropriate_content.inappropriateContentUsers),
    (0, typeorm_1.JoinColumn)({ name: 'inappropriate_content_id' }),
    __metadata("design:type", inappropriate_content_entity_1.InappropriateContent)
], InappropriateContentUser.prototype, "inappropiateContent", void 0);
InappropriateContentUser = __decorate([
    (0, typeorm_1.Entity)()
], InappropriateContentUser);
exports.InappropriateContentUser = InappropriateContentUser;
//# sourceMappingURL=inappropriate_content_user.entity.js.map