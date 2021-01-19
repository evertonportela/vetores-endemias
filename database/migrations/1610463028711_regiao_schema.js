'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegiaoSchema extends Schema {
  up () {
    this.table('regiaos', (table) => {
      table.boolean('regiao_ativo').notNullable()
    })
  }

  down () {
    this.table('regiaos', (table) => {
      this.drop('regiaos')
    })
  }
}

module.exports = RegiaoSchema
