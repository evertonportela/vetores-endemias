'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VisitaStatusSchema extends Schema {
  up () {
    this.create('visita_statuses', (table) => {
      table.increments('visita_status_id')
      table.string('visita_status_descricao', 45).notNullable()
    })
  }

  down () {
    this.drop('visita_statuses')
  }
}

module.exports = VisitaStatusSchema
