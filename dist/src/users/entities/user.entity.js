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
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const individual_user_entity_1 = require("../../individual-users/entities/individual-user.entity");
const nacionality_entity_1 = require("../../nacionality/entities/nacionality.entity");
const typeorm_1 = require("typeorm");
const inappropriate_content_user_entity_1 = require("../../configuration/entities/inappropriate_content_user.entity");
const interest_user_entity_1 = require("../../configuration/entities/interest_user.entity");
const language_user_entity_1 = require("../../configuration/entities/language_user.entity");
let User = class User {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, photoUrl: { required: true, type: () => String }, type: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, individual: { required: true, type: () => require("../../individual-users/entities/individual-user.entity").IndividualUser }, nacionality: { required: true, type: () => require("../../nacionality/entities/nacionality.entity").Nacionality }, inappropriateContentUsers: { required: true, type: () => [require("../../configuration/entities/inappropriate_content_user.entity").InappropriateContentUser] }, interestUsers: { required: true, type: () => [require("../../configuration/entities/interest_user.entity").InterestUser] }, languageUsers: { required: true, type: () => [require("../../configuration/entities/language_user.entity").LanguageUser] } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ primary: true, generated: true }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'photo_url' }),
    __metadata("design:type", String)
], User.prototype, "photoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: 'individual' }),
    __metadata("design:type", String)
], User.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => individual_user_entity_1.IndividualUser, individual => individual.user),
    __metadata("design:type", individual_user_entity_1.IndividualUser)
], User.prototype, "individual", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => nacionality_entity_1.Nacionality, (nacionality) => nacionality.users),
    (0, typeorm_1.JoinColumn)({ name: 'nacionality_id' }),
    __metadata("design:type", nacionality_entity_1.Nacionality)
], User.prototype, "nacionality", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inappropriate_content_user_entity_1.InappropriateContentUser, (inappropriateContentUser) => inappropriateContentUser.user),
    __metadata("design:type", Array)
], User.prototype, "inappropriateContentUsers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => interest_user_entity_1.InterestUser, (interestUser) => interestUser.user),
    __metadata("design:type", Array)
], User.prototype, "interestUsers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => language_user_entity_1.LanguageUser, (languageUser) => languageUser.user),
    __metadata("design:type", Array)
], User.prototype, "languageUsers", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map