'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class VisitaTipo extends Model {
    static boot () {
        super.boot()
        this.addTrait('NoTimestamp')
    }

    static get primaryKey() {
        return 'visita_tipo_id'
    }

    visitas() {
        return this.hasMany('App/Models/Visita')
    }
}

module.exports = VisitaTipo
