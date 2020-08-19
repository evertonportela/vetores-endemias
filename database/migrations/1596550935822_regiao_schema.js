'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegiaoSchema extends Schema {
  up () {
    this.create('regiaos', (table) => {
      table.increments('regiao_id')
      table.integer('regiao_ciclo').notNullable()
      table.integer('regiao_ano').notNullable()
      table.string('regiao_categoria', 45).notNullable()
      table.string('regiao_zona', 45).notNullable()
      table
        .integer('localidade_localidade_id')
        .unsigned()
        .notNullable()
        .references('localidade_id')
        .inTable('localidades')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('regiaos')
  }
}

module.exports = RegiaoSchema
