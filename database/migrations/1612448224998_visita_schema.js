'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VisitaSchema extends Schema {
  up () {
    this.table('visitas', (table) => {
      // alter table
      table.dropColumn('regiao_id')
      table.integer('localidade_id')
        .unsigned()
        .notNullable()
        .references('localidade_id')
        .inTable('localidades')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('ciclo_id')
      .unsigned()
      .notNullable()
      .references('ciclo_id')
      .inTable('ciclos')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    })
  }

  down () {
    this.table('visitas', (table) => {
      // reverse alternations

    })
  }
}

module.exports = VisitaSchema
