import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1603158976611 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'images',
        columns: [
          {
						name: 'id',
						type: 'integer',
						unsigned: true,
						isPrimary: true,
						generationStrategy: 'increment',
          },
          {
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'panettone_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'ImagePanettone',
            columnNames: ['panettone_id'],
            referencedTableName: 'panettones',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('images');
    }

}
