'use strict'

const VisitaStatus = use('App/Models/VisitaStatus');

/**
 * Resourceful controller for interacting with Visit Status
 */
class VisitaStatusController {
    /**
     * Show a list of all Visit Status.
     * GET /visita/status
     */
    async index () {
        const status = await VisitaStatus.all();
        return status;
    }

    /**
     * Create/save a new Visit Status.
     * POST /visita/status
     */
    async store ({ request}) {
        const data = request.only( 'visita_status_descricao' );
        const status = await VisitaStatus.create(data);
        return status;
    }

    /**
     * Display a single Visit Status.
     * GET /visita/status/:id
     */
    async show ({ params }) {
        const status = await VisitaStatus.findOrFail(params.id);
        return status;
    }

    /**
     * Update Visit Status details.
     * PUT or PATCH /visita/status/:id
     */
    async update ({ params, request }) {
        const data = request.only( 'visita_status_descricao' );
        const status = await VisitaStatus.findOrFail(params.id);
        
        status.merge(data);
        await status.save();
        
        return status;
    }

    /**
     * Delete a Visit Status with id.
     * DELETE /visita/status/:id
     */
    async destroy ({ params }) {
        const status = await VisitaStatus.findOrFail(params.id);
        await status.delete();
    }
}

module.exports = VisitaStatusController
