import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1653653980931 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        ALTER TABLE "user_entity"
        RENAME COLUMN "firstName" TO "name"
      `
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        ALTER TABLE "user_entity"
        RENAME COLUMN "name" TO "firstName"
      `
    );
  }

}
