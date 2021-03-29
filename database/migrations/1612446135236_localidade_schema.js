'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocalidadeSchema extends Schema {
  up () {
    this.table('localidades', (table) => {
      table.string('localidade_categoria', 45).notNullable()
      table.string('localidade_zona', 45).notNullable()
    })
  }

  down () {
    this.table('localidades', (table) => {
      // reverse alternations
    })
  }
}

module.exports = LocalidadeSchema
