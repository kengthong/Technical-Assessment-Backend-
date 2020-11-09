import {MigrationInterface, QueryRunner} from "typeorm";

export class Person1604918097685 implements MigrationInterface {
    name = 'Person1604918097685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "grant" ("grantId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "lessThanAge" numeric NOT NULL, "lessThanIncome" numeric NOT NULL, "isMarried" boolean NOT NULL, "moreThanAge" numeric NOT NULL, CONSTRAINT "PK_837a8097b8180c1feea9cc88d87" PRIMARY KEY ("grantId"))`);
        await queryRunner.query(`CREATE TABLE "person" ("personId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "nric" text NOT NULL, "gender" text NOT NULL DEFAULT 'NULL', "maritalStatus" text NOT NULL DEFAULT 'SINGLE', "spouse" text NOT NULL, "occupationType" text NOT NULL, "annualIncome" numeric NOT NULL, "dob" text NOT NULL, "householdHouseholdId" uuid, CONSTRAINT "UQ_9f63e1b0b087a322451ebe151c9" UNIQUE ("nric"), CONSTRAINT "PK_84a53bea0e639207a7702250a4d" PRIMARY KEY ("personId"))`);
        await queryRunner.query(`CREATE TABLE "household" ("householdId" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" "household_type_enum" NOT NULL DEFAULT 'HDB', "address" text NOT NULL, CONSTRAINT "UQ_8066e0a6530b73873b79f7cd07b" UNIQUE ("address"), CONSTRAINT "PK_794448b5d399a75ab9aa9364005" PRIMARY KEY ("householdId"))`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_b97f0b4a5babd0c10fe9fe76725" FOREIGN KEY ("householdHouseholdId") REFERENCES "household"("householdId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        // await queryRunner.query(`INSERT INTO "person" ("personI", "name") VALUES (?, ?) — PARAMETERS: [1576405409745,”AddCityColumnToCompany1576405409745"]`)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_b97f0b4a5babd0c10fe9fe76725"`);
        await queryRunner.query(`DROP TABLE "household"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`DROP TABLE "grant"`);
    }

}
