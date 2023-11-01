"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIndividualUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_individual_user_dto_1 = require("./create-individual-user.dto");
class UpdateIndividualUserDto extends (0, swagger_1.PartialType)(create_individual_user_dto_1.CreateIndividualUserDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateIndividualUserDto = UpdateIndividualUserDto;
//# sourceMappingURL=update-individual-user.dto.js.map