import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createOrphanages1602720117491 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'orphanages',
				columns: [
					{
						name: 'id',
						type: 'integer',
						unsigned: true,
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'name',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'latitude',
						type: 'decimal',
						scale: 10,
						precision: 2,
						isNullable: false,
					},
					{
						name: 'longitude',
						type: 'decimal',
						scale: 10,
						precision: 2,
						isNullable: false,
					},
					{
						name: 'about',
						type: 'text',
					},
					{
						name: 'instructions',
						type: 'text',
					},
					{
						name: 'opening_hours',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'open_on_weekends',
						type: 'boolean',
						default: false,
					},
				],
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('orphanages')
	}
}
