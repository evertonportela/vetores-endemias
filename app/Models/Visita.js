'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Visita extends Model {
    static boot() {
        super.boot()
        this.addTrait('NoTimestamp')
    }

    static get primaryKey() {
        return 'visita_id'
    }
}

module.exports = Visita
