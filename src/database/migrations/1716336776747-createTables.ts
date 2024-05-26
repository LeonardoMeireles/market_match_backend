import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1716336776747 implements MigrationInterface {
    name = 'createTables1716336776747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."working_hours_day_of_week_enum" AS ENUM('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')`);
        await queryRunner.query(`CREATE TABLE "working_hours" ("market_id" uuid NOT NULL, "day_of_week" "public"."working_hours_day_of_week_enum" NOT NULL, "opening_time" TIME, "closing_time" TIME, CONSTRAINT "PK_954fdd5e2e8b1a0ec653ea9d954" PRIMARY KEY ("market_id", "day_of_week"))`);
        await queryRunner.query(`CREATE TABLE "market_product" ("market_id" uuid NOT NULL, "ean" character varying NOT NULL, "price" numeric NOT NULL, CONSTRAINT "PK_6410127cef110c87ada059f2d93" PRIMARY KEY ("market_id", "ean"))`);
        await queryRunner.query(`ALTER TABLE "supermarket" DROP COLUMN "delivery_price"`);
        await queryRunner.query(`ALTER TABLE "supermarket" ADD "delivery_price" numeric`);
        await queryRunner.query(`ALTER TABLE "working_hours" ADD CONSTRAINT "FK_87368dd19850fa69a60ffce22a9" FOREIGN KEY ("market_id") REFERENCES "supermarket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "market_product" ADD CONSTRAINT "FK_db90458ea8555e038850b209c89" FOREIGN KEY ("ean") REFERENCES "product"("ean") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "market_product" ADD CONSTRAINT "FK_3d62c59c12e45740d7bf93011cd" FOREIGN KEY ("market_id") REFERENCES "supermarket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "market_product" DROP CONSTRAINT "FK_3d62c59c12e45740d7bf93011cd"`);
        await queryRunner.query(`ALTER TABLE "market_product" DROP CONSTRAINT "FK_db90458ea8555e038850b209c89"`);
        await queryRunner.query(`ALTER TABLE "working_hours" DROP CONSTRAINT "FK_87368dd19850fa69a60ffce22a9"`);
        await queryRunner.query(`ALTER TABLE "supermarket" DROP COLUMN "delivery_price"`);
        await queryRunner.query(`ALTER TABLE "supermarket" ADD "delivery_price" integer`);
        await queryRunner.query(`DROP TABLE "market_product"`);
        await queryRunner.query(`DROP TABLE "working_hours"`);
        await queryRunner.query(`DROP TYPE "public"."working_hours_day_of_week_enum"`);
    }

}
