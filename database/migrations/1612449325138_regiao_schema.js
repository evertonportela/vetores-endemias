'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegiaoSchema extends Schema {
  up () {
    this.table('regiaos', (table) => {
      // alter table
    })
  }

  down () {
    this.drop('regiaos')
  }
}

module.exports = RegiaoSchema
