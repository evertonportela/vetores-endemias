'use strict'
const AtividadeDoDia = use('App/Models/AtividadeDoDia');


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with Day Activities
 */
class AtividadeDoDiaController {
    /**
     * Show a list of all Day Activities.
     * GET /atividade
     */
    async index () {
      const atividade = await AtividadeDoDia.all();
      return atividade;
    }

    /**
     * Create/save a new Day Activities.
     * POST /atividade
     */
    async store ({ request}) {
        const data = request.only([ 'atv_dia_sigla', 'atv_dia_descricao' ]);
        const atividade = await AtividadeDoDia.create(data);
        return atividade;
    }

    /**
     * Display a single Day Activities.
     * GET /atividade/:id
     */
    async show ({ params }) {
        const atividade = await AtividadeDoDia.findOrFail(params.id);
        return atividade;
    }

    /**
     * Update Day Activities details.
     * PUT or PATCH /atividade/:id
     */
    async update ({ params, request }) {
        const data = request.only([ 'atv_dia_sigla', 'atv_dia_descricao' ]);
        const atividade = await AtividadeDoDia.findOrFail(params.id);
        
        atividade.merge(data);
        await atividade.save();
        
        return atividade;
    }

    /**
     * Delete a Day Activities with id.
     * DELETE /atividade/:id
     */
    async destroy ({ params }) {
        const atividade = await AtividadeDoDia.findOrFail(params.id);
        await atividade.delete();
    }
}
module.exports = AtividadeDoDiaController
