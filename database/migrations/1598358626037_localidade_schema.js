'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocalidadeSchema extends Schema {
    up() {
        this.create('localidades', (table) => {
            table.increments('localidade_id')
            table.string('localidade_nome_localidade', 45).notNullable()
            table.string('localidade_rua', 45)
            table
                .integer('municipio_municipio_id')
                .unsigned()
                .notNullable()
                .references('municipio_id')
                .inTable('municipios')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
    }

    down() {
        this.drop('localidades')
    }
}

module.exports = LocalidadeSchema