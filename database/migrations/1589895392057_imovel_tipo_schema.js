'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImovelTipoSchema extends Schema {
  up () {
    this.create('imovel_tipos', (table) => {
      table.increments('imovel_tipo_id')
      table.string('imovel_tipo_descricao', 45).notNullable()
    })
  }

  down () {
    this.drop('imovel_tipos')
  }
}

module.exports = ImovelTipoSchema
