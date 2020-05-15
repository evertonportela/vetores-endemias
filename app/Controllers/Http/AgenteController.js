'use strict'

const Agente = use('App/Models/Agente');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with agentes
 */
class AgenteController {
  /**
   * Show a list of all agentes.
   * GET /agentes
   */
  async index () {
    const agente = await Agente.all();
    return agente;
  }

  /**
   * Create/save a new agente.
   * POST /agentes
   */
  async store ({ request}) {
    const data = request.only([ 'agente_cns', 'agente_apelido', 'agente_nome_completo' ]);
    const agente = await Agente.create(data);
    return agente;
  }

  /**
   * Display a single agente.
   * GET /agentes/:id
   */
  async show ({ params }) {
    const agente = await Agente.findOrFail(params.id);
    return agente;
  }

  /**
   * Update agente details.
   * PUT or PATCH /agentes/:id
   */
  async update ({ params, request }) {
    const data = request.only( ['agente_cns', 'agente_apelido', 'agente_nome_completo'] );
    const agente = await Agente.findOrFail(params.id);
    
    agente.merge(data);
    await agente.save();
    
    return agente;
  }

  /**
   * Delete a agente with id.
   * DELETE /agentes/:id
   */
  async destroy ({ params }) {
    const agente = await Agente.findOrFail(params.id);
    await agente.delete();
  }
}

module.exports = AgenteController
