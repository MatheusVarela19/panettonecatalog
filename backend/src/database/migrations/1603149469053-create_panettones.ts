import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPanettones1603149469053 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'panettones',
				columns: [
					{
						name: 'id',
						type: 'integer',
						unsigned: true,
						isPrimary: true,
						generationStrategy: 'increment',
					},
					{
						name: 'name',
						type: 'varchar',
					},
					{
						name: 'brand',
						type: 'varchar',
					},
					{
						name: 'weight',
						type: 'decimal',
						scale: 10,
						precision: 2,
					},
					{
						name: 'price',
						type: 'decimal',
						scale: 10,
						precision: 2,
					},
					{
						name: 'about',
						type: 'text',
					},
				],
			}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('panettones');
    }

}
