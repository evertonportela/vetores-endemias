'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgenteSchema extends Schema {
  up () {
    this.create('agentes', (table) => {
      table.increments()
      table.string('agente_cns', 15)
      table.string('agente_apelido', 45)
      table.string('agente_nome_completo', 45)
    })
  }

  down () {
    this.drop('agentes')
  }
}

module.exports = AgenteSchema
