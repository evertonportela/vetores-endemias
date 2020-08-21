'use strict'
const Localidade = use('App/Models/Localidade');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with localidades
 */
class LocalidadeController {
  /**
   * Show a list of all localidades.
   * GET /localidades
   */
  async index () {
    const localidade = await Localidade.all();
    return localidade;
  }

  /**
   * Create/save a new localidade.
   * POST /localidades
   */
  async store ({ request }) {
    const data = request.only( ['localidade_minicipio', 'localidade_nome_localidade']);
    const localidade = await Localidade.create(data);
    return localidade;
  }

  /**
   * Display a single localidade.
   * GET /localidades/:id
   */
  async show ({ params }) {
    const localidade = await Localidade.findOrFail(params.id)
    return localidade;
  }

  /**
   * Update localidade details.
   * PUT or PATCH /localidades/:id
   */
  async update ({ params, request }) {
    const data = request.only([ 'localidade_municipio', 'localidade_nome_localidade' ]);
    const localidade = await Localidade.findOrFail(params.id);

    localidade.merge(data);
    await localidade.save();

    return localidade;
  }

  /**
   * Delete a localidade with id.
   * DELETE /localidades/:id
   */
  async destroy ({ params }) {
    const localidade = await Localidade.findOrFail(params.id);
    await localidade.delete();
  }
}

module.exports = LocalidadeController
