'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Localidade extends Model {
    regioes() {
        return this.hasMany('App/Models/Regiao')
    }
}

module.exports = Localidade
