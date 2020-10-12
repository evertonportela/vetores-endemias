'use strict'

const DepositosVisita = use('App/Models/DepositosVisita');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with depositosvisitas
 */
class DepositosVisitaController {
  /**
   * Show a list of all depositosvisitas.
   * GET /depositosvisitas
   */
  async index ({ request }) {
    const depositosvisita = await DepositosVisita.all();
    return depositosvisita;
  }

  /**
   * Create/save a new depositosvisita.
   * POST /depositosvisitas
   */
  async store ({ request}) {
    const data = request.only([
      'depositosvisitas_larv1_tipo',
      'depositosvisitas_larv1_qtd',
      'depositosvisitas_larv1_qtd_dep_tratados',
      'depositosvisitas_larv2_tipo',
      'depositosvisitas_larv2_qtd',
      'depositosvisitas_larv2_qtd_dep_tratados',
      'depositosvisitas_adulticida_tipo',
      'depositosvisitas_larv1_qtd_cargas',
      'depositos_id',
      'visita_id'
    ]);
    const depositosvisita = await DepositosVisita.create(data);
    return depositosvisita;
  }

  /**
   * Display a single depositosvisita.
   * GET /depositosvisitas/:id
   */
  async show ({ params }) {
    const depositosvisitas = await DepositosVisita.findOrFail(params.id);
    return depositosvisitas;
  }

  /**
   * Update depositosvisita details.
   * PUT or PATCH /depositosvisitas/:id
   */
  async update ({ params, request }) {
    const data = request.only([
      'depositosvisitas_larv1_tipo',
      'depositosvisitas_larv1_qtd',
      'depositosvisitas_larv1_qtd_dep_tratados',
      'depositosvisitas_larv2_tipo',
      'depositosvisitas_larv2_qtd',
      'depositosvisitas_larv2_qtd_dep_tratados',
      'depositosvisitas_adulticida_tipo',
      'depositosvisitas_larv1_qtd_cargas',
      'depositos_id',
      'visita_id'
    ]);
    const depositosvisita = await DepositosVisita.findOrFail(params.id);

    depositosvisita.merge(data);
    await depositosvisita.save();

    return depositosvisita;
  }

  /**
   * Delete a depositosvisita with id.
   * DELETE /depositosvisitas/:id
   */
  async destroy ({ params, request, response }) {
    const depositosvisita = await DepositosVisita.findOrFail(params.id);
    await depositosvisita.delete();
  }
}

module.exports = DepositosVisitaController
