"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeType1696042984398 = void 0;
class ChangeType1696042984398 {
    constructor() {
        this.name = 'ChangeType1696042984398';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."user_type_enum"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "type" character varying NOT NULL DEFAULT 'individual'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "type"`);
        await queryRunner.query(`CREATE TYPE "public"."user_type_enum" AS ENUM('individual', 'group')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "type" "public"."user_type_enum" NOT NULL DEFAULT 'individual'`);
    }
}
exports.ChangeType1696042984398 = ChangeType1696042984398;
//# sourceMappingURL=1696042984398-change-type.js.map