'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Deposito extends Model {
    static boot () {
        super.boot()
        this.addTrait('NoTimestamp')
    }

     static get primaryKey() {
        return 'depositos_id'
    }

    visitas () {
        return this
            .belongsToMany('App/Models/Visita')
            .withPivot(['is_current_owner'])
            .pivotModel('App/Models/UserCar')
    }
}

module.exports = Deposito
