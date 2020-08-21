'use strict'
const Regiao = use('App/Models/Regiao');
const Localidade = use('App/Models/Localidade');

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
  async store ({ request }) {
    
    const data = request.only([ 'agente_cns', 'agente_apelido', 'agente_nome_completo' ]);
    
    const localidade = await Localidade.find();

    const regiao = await localidade
      .regioes()
      .create(data);
    
    return regiao;


  }

  /**
   * Display a single regiao.
   * GET regiaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing regiao.
   * GET regiaos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update regiao details.
   * PUT or PATCH regiaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a regiao with id.
   * DELETE regiaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = RegiaoController
