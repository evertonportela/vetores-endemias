'use strict'

const ImovelTipo = use('App/Models/ImovelTipo');

/**
 * Resourceful controller for interacting with ImmobileType
 */
class ImovelTipoController {
    /**
     * Show a list of all ImmobileType.
     * GET /imovel/tipos
     */
    async index () {
        const imovel = await ImovelTipo.all();
        return imovel;
    }

    /**
     * Create/save a new ImmobileType.
     * POST /imovel/tipos
     */
    async store ({ request}) {
        const data = request.only( 'imovel_tipo_descricao' );
        const imovel = await ImovelTipo.create(data);
        return imovel;
    }

    /**
     * Display a single ImmobileType.
     * GET /imovel/tipos/:id
     */
    async show ({ params }) {
        const imovel = await ImovelTipo.findOrFail(params.id);
        return imovel;
    }

    /**
     * Update ImmobileType details.
     * PUT or PATCH /imovel/tipos/:id
     */
    async update ({ params, request }) {
        const data = request.only( 'imovel_tipo_descricao' );
        const imovel = await ImovelTipo.findOrFail(params.id);
        
        imovel.merge(data);
        await imovel.save();
        
        return imovel;
    }

    /**
     * Delete a ImmobileType with id.
     * DELETE /imovel/tipos/:id
     */
    async destroy ({ params }) {
        const imovel = await ImovelTipo.findOrFail(params.id);
        await imovel.delete();
    }
}

module.exports = ImovelTipoController
