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
exports.InappropriateContent = void 0;
const openapi = require("@nestjs/swagger");
const inappropriate_content_user_entity_1 = require("../../configuration/entities/inappropriate_content_user.entity");
const typeorm_1 = require("typeorm");
let InappropriateContent = class InappropriateContent {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, original_name: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, inappropriateContentUsers: { required: true, type: () => [require("../../configuration/entities/inappropriate_content_user.entity").InappropriateContentUser] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InappropriateContent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', nullable: false }),
    __metadata("design:type", String)
], InappropriateContent.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'original_name', nullable: false }),
    __metadata("design:type", String)
], InappropriateContent.prototype, "original_name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], InappropriateContent.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], InappropriateContent.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], InappropriateContent.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inappropriate_content_user_entity_1.InappropriateContentUser, (inappropriateContentUsers) => inappropriateContentUsers.inappropiateContent),
    __metadata("design:type", Array)
], InappropriateContent.prototype, "inappropriateContentUsers", void 0);
InappropriateContent = __decorate([
    (0, typeorm_1.Entity)()
], InappropriateContent);
exports.InappropriateContent = InappropriateContent;
//# sourceMappingURL=inappropriate-content.entity.js.map