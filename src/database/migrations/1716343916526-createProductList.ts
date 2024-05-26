import {MigrationInterface, QueryRunner} from "typeorm";

export class createProductList1716343916526 implements MigrationInterface {
    name = 'createProductList1716343916526'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "list" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_by" uuid NOT NULL, CONSTRAINT "PK_d8feafd203525d5f9c37b3ed3b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "list_item" ("list_id" uuid NOT NULL, "ean" character varying NOT NULL, CONSTRAINT "PK_1029896c8e9ce68770a0bcf7b9a" PRIMARY KEY ("list_id", "ean"))`);
        await queryRunner.query(`ALTER TABLE "list" ADD CONSTRAINT "FK_a4286ac52b1e0ec770de5364328" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "list_item" ADD CONSTRAINT "FK_63b557a97603328de467e22f397" FOREIGN KEY ("ean") REFERENCES "product"("ean") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "list_item" ADD CONSTRAINT "FK_ad166f16513e62a5b633ab092b2" FOREIGN KEY ("list_id") REFERENCES "list"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "list_item" DROP CONSTRAINT "FK_ad166f16513e62a5b633ab092b2"`);
        await queryRunner.query(`ALTER TABLE "list_item" DROP CONSTRAINT "FK_63b557a97603328de467e22f397"`);
        await queryRunner.query(`ALTER TABLE "list" DROP CONSTRAINT "FK_a4286ac52b1e0ec770de5364328"`);
        await queryRunner.query(`DROP TABLE "list_item"`);
        await queryRunner.query(`DROP TABLE "list"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
