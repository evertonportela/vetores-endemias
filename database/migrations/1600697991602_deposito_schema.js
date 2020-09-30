'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepositoSchema extends Schema {
  up () {
    this.create('depositos', (table) => {
      table.increments('depositos_id')
      table.string('depositos_sigla', 45).notNullable().unique()
      table.string('depositos_descricao', 45).notNullable().unique()
    })
  }

  down () {
    this.drop('depositos')
  }
}

module.exports = DepositoSchema
