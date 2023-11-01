"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InappropriateContentModule = void 0;
const common_1 = require("@nestjs/common");
const inappropriate_content_controller_1 = require("./inappropriate-content.controller");
const inappropriate_content_service_1 = require("./inappropriate-content.service");
const typeorm_1 = require("@nestjs/typeorm");
const inappropriate_content_entity_1 = require("./entities/inappropriate-content.entity");
let InappropriateContentModule = class InappropriateContentModule {
};
InappropriateContentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([inappropriate_content_entity_1.InappropriateContent])],
        controllers: [inappropriate_content_controller_1.InappropriateContentController],
        providers: [inappropriate_content_service_1.InappropriateContentService]
    })
], InappropriateContentModule);
exports.InappropriateContentModule = InappropriateContentModule;
//# sourceMappingURL=inappropriate-content.module.js.map