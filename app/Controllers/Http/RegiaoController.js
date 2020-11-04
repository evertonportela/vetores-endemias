'use strict'

const Regiao = use('App/Models/Regiao');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with regiaos
 */
class RegiaoController {
  /**
   * Show a list of all regiaos.
   * GET /regioes
   */
  async index () {
    const regiao = await Regiao.all();
    return regiao;
  }

  /**
   * Create/save a new regiao.
   * POST /regioes
   */
  async store({ request }) {
      const data = request.only(['regiao_ciclo', 'regiao_ano', 'regiao_categoria', 'regiao_zona', 'localidade_localidade_id']);
      const regiao = await Regiao.create(data);
      return regiao;
}

  /**
   * Display a single regiao.
   * GET /regioes/:id
   */
  async show ({ params }) {
      const regiao = await Regiao.findOrFail(params.id);
      return regiao;
  }

  /**
   * Update regiao details.
   * PUT or PATCH /regioes/:id
   */
  async update ({ params, request }) {
      const data = request.only(['regiao_ciclo', 'regiao_ano', 'regiao_categoria', 'regiao_zona', 'localidade_localidade_id']);
      const regiao = await Regiao.findOrFail(params.id);

      regiao.merge(data);
      await regiao.save();

      return regiao;
  }

  /**
   * Delete a regiao with id.
   * DELETE /regioes/:id
   */
  async destroy({ params }) {
    const regiao = await Regiao.findOrFail(params.id);
    await regiao.delete();
  }
}

module.exports = RegiaoController
