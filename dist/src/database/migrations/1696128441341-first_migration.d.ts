import { MigrationInterface, QueryRunner } from "typeorm";
export declare class FirstMigration1696128441341 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
