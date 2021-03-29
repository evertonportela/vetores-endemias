'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Municipio extends Model {
    static boot() {
        super.boot()
        this.addTrait('NoTimestamp')
    }

    static get primaryKey() {
        return 'municipio_id'
    }

    localidades() {
        return this.manyThrough('App/Models/Localidade', 'visitas')
    }
}

module.exports = Municipio