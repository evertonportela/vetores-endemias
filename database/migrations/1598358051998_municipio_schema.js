'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MunicipioSchema extends Schema {
    up() {
        this.create('municipios', (table) => {
            table.increments('municipio_id')
            table.string('municipio_nome', 45).notNullable()
            table.integer('municipio_cod_ibge').notNullable()
            table.string('municipio_sigla_uf', 2).notNullable()
        })
    }

    down() {
        this.drop('municipios')
    }
}

module.exports = MunicipioSchema