'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VisitasSchema extends Schema {
  up () {
    this.create('visitas', (table) => {
      table.increments('visita_id')
      table.string('visita_lado_da_rua', 45)
      table.integer('visita_n_casa')
      table.string('visita_observacao', 45)
      table.string('visita_cns_responsavel', 45)
      table.string('visita_data_nasc_responsavel', 45)

      table.integer('regiao_id')
        .unsigned()
        .notNullable()
        .references('regiao_id')
        .inTable('regiaos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('visita_tipo_id')
        .unsigned()
        .notNullable()
        .references('visita_tipo_id')
        .inTable('visita_tipos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('imovel_tipo_id')
        .unsigned()
        .notNullable()
        .references('imovel_tipo_id')
        .inTable('imovel_tipos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('visita_status_id')
        .unsigned()
        .notNullable()
        .references('visita_status_id')
        .inTable('visita_statuses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('agente_id')
        .unsigned()
        .notNullable()
        .references('agente_id')
        .inTable('agentes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('atv_dia_id')
        .unsigned()
        .notNullable()
        .references('atv_dia_id')
        .inTable('atividade_do_dias')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')


    })
  }

  down () {
    this.drop('visitas')
  }
}

module.exports = VisitasSchema
