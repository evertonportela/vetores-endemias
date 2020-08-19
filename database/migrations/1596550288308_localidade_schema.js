'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocalidadeSchema extends Schema {
  up () {
    this.create('localidades', (table) => {
      table.increments('localidade_id')
      table.string('localidade_municipio', 45).notNullable()
      table.string('localidade_nome_localidade', 45).notNullable()
    })
  }

  down () {
    this.drop('localidades')
  }
}

module.exports = LocalidadeSchema
