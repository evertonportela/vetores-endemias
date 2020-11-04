'use strict'

const Deposito = use('App/Models/Deposito');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with depositos
 */
class DepositoController {
  /**
   * Show a list of all depositos.
   * GET /depositos
   */
  async index () {
    const deposito = await Deposito.all();
    return deposito;
  }

  /**
   * Create/save a new deposito.
   * POST /depositos
   */
  async store ({ request }) {
      const data = request.only(['depositos_sigla', 'depositos_descricao']);
      const deposito = await Deposito.create(data);
      return deposito;
  }

  /**
   * Display a single deposito.
   * GET /depositos/:id
   */
  async show ({ params }) {
      const deposito = await Deposito.findOrFail(params.id);
      return deposito;
  }

  /**
   * Update deposito details.
   * PUT or PATCH /depositos/:id
   */
  async update ({ params, request }) {
      const data = request.only(['depositos_sigla', 'depositos_descricao']);
      const deposito = await Deposito.findOrFail(params.id);

      deposito.merge(data);
      await deposito.save()
      
      return deposito;
  }

  /**
   * Delete a deposito with id.
   * DELETE /depositos/:id
   */
  async destroy ({ params }) {
    const deposito = await Deposito.findOrFail(params.id);
    await deposito.delete();
  }
}

module.exports = DepositoController
