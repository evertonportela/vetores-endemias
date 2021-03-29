'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CicloSchema extends Schema {
  up () {
    this.create('ciclos', (table) => {
      table.increments('ciclo_id')
      table.integer('ciclo_numero').notNullable()
      table.integer('ciclo_ano').notNullable()
      table.boolean('ciclo_ativo').notNullable()
    })
  }

  down () {
    this.drop('ciclos')
  }
}

module.exports = CicloSchema
