import { MigrationInterface, QueryRunner } from 'typeorm';

export class message1655211487936 implements MigrationInterface {
  name = 'message1655211487936';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`message\` (\`id\` int NOT NULL AUTO_INCREMENT, \`statusCode\` int NOT NULL, \`httpMethod\` varchar(255) NOT NULL, \`webhookUrl\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`message\``);
  }
}
