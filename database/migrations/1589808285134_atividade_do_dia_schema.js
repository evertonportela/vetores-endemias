'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AtividadeDoDiaSchema extends Schema {
  up () {
    this.create('atividade_do_dias', (table) => {
      table.increments('atv_dia_id')
      table.string('atv_dia_sigla', 45).notNullable().unique()
      table.string('atv_dia_descricao', 45).notNullable().unique()
    })
  }

  down () {
    this.drop('atividade_do_dias')
  }
}

module.exports = AtividadeDoDiaSchema
