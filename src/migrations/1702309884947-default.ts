import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersAndTasksTables1702309884947 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "users" (
        "id" SERIAL NOT NULL,
        "name" text NOT NULL,
        "email" text NOT NULL,
        "password" text NOT NULL,
        CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
        CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
      )
    `);

    await queryRunner.query(`
      INSERT INTO "users" ("name", "email", "password")
      VALUES ('Usuário de Teste', 'test@example.com', 'jpedro657')
    `);

    await queryRunner.query(`
      CREATE TABLE "task" (
        "id" SERIAL NOT NULL,
        "text" text NOT NULL,
        "status" text NOT NULL,
        "editing" boolean NOT NULL DEFAULT false,
        CONSTRAINT "PK_task_id" PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "task"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
