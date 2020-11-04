'use strict'

const Visita = use('App/Models/Visita');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with visitas
 */
class VisitaController {
  /**
   * Show a list of all visitas.
   * GET /visitas
   */
  async index () {
    const visita = await Visita.all();
    return visita;
  }

  /**
   * Create/save a new visita.
   * POST /visitas
   */
  async store ({ request }) {
    const data = request.only([
      'visita_lado_da_rua', 
      'visita_n_casa', 
      'visita_observacao', 
      'visita_cns_responsavel', 
      'visita_data_nasc_responsavel', 
      'regiao_id', 
      'visita_tipo_id', 
      'imovel_tipo_id', 
      'visita_status_id', 
      'agente_id', 
      'atv_dia_id'
    ]);
    const visita = await Visita.create(data);
    return visita;
  }

  /**
   * Display a single visita.
   * GET /visitas/:id
   */
  async show ({ params }) {
    const visita = await Visita.findOrFail(params.id);
    return visita;
  }

  /**
   * Update visita details.
   * PUT or PATCH /visitas/:id
   */
  async update ({ params, request }) {
    const data = request.only([
      'visita_lado_da_rua', 
      'visita_n_casa', 
      'visita_observacao', 
      'visita_cns_responsavel', 
      'visita_data_nasc_responsavel', 
      'regiao_id', 
      'visita_tipo_id', 
      'imovel_tipo_id', 
      'visita_status_id', 
      'agente_id', 
      'atv_dia_id'
    ]);
    const visita = await Visita.findOrFail(params.id);

    visita.merge(data);
    await visita.save();

    return visita;
  }

  /**
   * Delete a visita with id.
   * DELETE /visitas/:id
   */
  async destroy ({ params }) {
    const visita = await Visita.findOrFail(params.id);
    await visita.delete();
  }
}

module.exports = VisitaController
