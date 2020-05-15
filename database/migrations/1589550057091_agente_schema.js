'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgenteSchema extends Schema {
  up () {
    this.create('agentes', (table) => {
      table.increments()
      table.string('agente_cnd', 15).notNullable().unique()
      table.string('agente_apelido', 45).notNullable().unique()
      table.string('agente_nome_completo', 45).notNullable()
    })
  }

  down () {
    this.drop('agentes')
  }
}

module.exports = AgenteSchema
