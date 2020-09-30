'use strict'

const VisitaTipo = use('App/Models/VisitaTipo');

/**
 * Resourceful controller for interacting with Visit Type
 */
class VisitaTipoController {
    /**
     * Show a list of all visit type.
     * GET /visita/tipo
     */
    async index () {
      const visita_tipo = await VisitaTipo.all();
      return visita_tipo;
    }
  
    /**
     * Create/save a new visit type.
     * POST /visita/tipo
     */
    async store ({ request}) {
      const data = request.only( 'visita_tipo_descricao' );
      const visita_tipo = await VisitaTipo.create(data);
      return visita_tipo;
    }
  
    /**
     * Display a single visit type.
     * GET /visita/tipo/:id
     */
    async show ({ params }) {
      const visita_tipo = await VisitaTipo.findOrFail(params.id);
      return visita_tipo;
    }
  
    /**
     * Update visit type details.
     * PUT or PATCH /visita/tipo/:id
     */
    async update ({ params, request }) {
      const data = request.only( 'visita_tipo_descricao' );
      const visita_tipo = await VisitaTipo.findOrFail(params.id);
      
      visita_tipo.merge(data);
      await visita_tipo.save();
      
      return visita_tipo;
    }
  
    /**
     * Delete a visit type with id.
     * DELETE /visita/tipo/:id
     */
    async destroy ({ params }) {
      const visita_tipo = await VisitaTipo.findOrFail(params.id);
      await visita_tipo.delete();
    }
  }

module.exports = VisitaTipoController
