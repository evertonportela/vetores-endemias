'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepositosVisitasSchema extends Schema {
  up () {
    this.create('depositos_visitas', (table) => {
      table.increments('depositosvisitas_id')

      table.string('depositosvisitas_larv1_tipo', 45)
      table.integer('depositosvisitas_larv1_qtd')
      table.integer('depositosvisitas_larv1_qtd_dep_tratados')

      table.string('depositosvisitas_larv2_tipo', 45)
      table.integer('depositosvisitas_larv2_qtd')
      table.integer('depositosvisitas_larv2_qtd_dep_tratados')

      table.string('depositosvisitas_adulticida_tipo', 45)
      table.integer('depositosvisitas_larv1_qtd_cargas')
      
      table.integer('depositos_id')
        .unsigned()
        .notNullable()
        .references('depositos_id')
        .inTable('depositos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('visita_id')
        .unsigned()
        .notNullable()
        .references('visita_id')
        .inTable('visitas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      
    })
  }

  down () {
    this.drop('depositos_visitas')
  }
}

module.exports = DepositosVisitasSchema