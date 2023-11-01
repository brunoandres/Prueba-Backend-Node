import { MigrationInterface, QueryRunner } from "typeorm";

export class Updatecompany1698849481084 implements MigrationInterface {
    name = 'Updatecompany1698849481084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employees\` DROP FOREIGN KEY \`FK_c7b030a4514a003d9d8d31a812b\``);
        await queryRunner.query(`ALTER TABLE \`employees\` CHANGE \`companyId\` \`companyIdCompany\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`id\` \`idCompany\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD CONSTRAINT \`FK_8cb1ce404e85ef6e131eb8c641a\` FOREIGN KEY (\`companyIdCompany\`) REFERENCES \`company\`(\`idCompany\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employees\` DROP FOREIGN KEY \`FK_8cb1ce404e85ef6e131eb8c641a\``);
        await queryRunner.query(`ALTER TABLE \`company\` CHANGE \`idCompany\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`employees\` CHANGE \`companyIdCompany\` \`companyId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`employees\` ADD CONSTRAINT \`FK_c7b030a4514a003d9d8d31a812b\` FOREIGN KEY (\`companyId\`) REFERENCES \`company\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
