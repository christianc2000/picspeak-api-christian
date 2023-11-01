"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIndividualUserDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateIndividualUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { photo_url: { required: false, type: () => String }, name: { required: true, type: () => String }, lastname: { required: false, type: () => String }, username: { required: false, type: () => String }, birthDate: { required: false, type: () => Date }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, activationToken: { required: true, type: () => String }, user: { required: false, type: () => require("../../users/entities/user.entity").User } };
    }
}
exports.CreateIndividualUserDto = CreateIndividualUserDto;
//# sourceMappingURL=create-individual-user.dto.js.map