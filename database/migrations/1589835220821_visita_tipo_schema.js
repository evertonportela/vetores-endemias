'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VisitaTipoSchema extends Schema {
  up () {
    this.create('visita_tipos', (table) => {
      table.increments('visita_tipo_id')
      table.string('visita_tipo_descricao', 45).notNullable()
    })
  }

  down () {
    this.drop('visita_tipos')
  }
}

module.exports = VisitaTipoSchema
