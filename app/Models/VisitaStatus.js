'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class VisitaStatus extends Model {
    static boot () {
        super.boot()
        this.addTrait('NoTimestamp')
    }

    static get primaryKey() {
        return 'visita_status_id'
    }

    visitas() {
        return this.hasMany('App/Models/Visita')
    }
}

module.exports = VisitaStatus