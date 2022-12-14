import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'actors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.text('bio')
      table.datetime('date_of_birth')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
