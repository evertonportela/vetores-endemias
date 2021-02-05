'use strict'

const Ciclo = use('App/Models/Ciclo');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with Ciclos
 */
class CicloController {
  /**
   * Show a list of all ciclos.
   * GET /ciclos
   */
  async index () {
    const ciclo = await Ciclo.all();
    return ciclo;
  }

  /**
   * Create/save a new ciclo.
   * POST /ciclos
   */
  async store({ request }) {
      const data = request.only(['ciclo_numero', 'ciclo_ano', 'ciclo_ativo']);
      const ciclo = await Ciclo.create(data);
      return ciclo;
}

  /**
   * Display a single ciclo.
   * GET /ciclos/:id
   */
  async show ({ params }) {
      const ciclo = await Ciclo.findOrFail(params.id);
      return ciclo;
  }

  /**
   * Update regiao details.
   * PUT or PATCH /ciclos/:id
   */
  async update ({ params, request }) {
      const data = request.only(['ciclo_numero', 'ciclo_ano', 'ciclo_ativo']);
      const ciclo = await Ciclo.findOrFail(params.id);

      ciclo.merge(data);
      await ciclo.save();

      return ciclo;
  }

  /**
   * Delete a regiao with id.
   * DELETE /ciclos/:id
   */
  async destroy({ params }) {
    const ciclo = await Ciclo.findOrFail(params.id);
    await ciclo.delete();
  }
}

module.exports = CicloController
