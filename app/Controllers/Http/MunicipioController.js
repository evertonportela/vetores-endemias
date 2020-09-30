'use strict'

const Municipio = use('App/Models/Municipio');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with municipios
 */
class MunicipioController {
    /**
     * Show a list of all municipios.
     * GET /municipios
     */
    async index() {
        const municipio = await Municipio.all();
        return municipio;
    }

    /**
     * Create/save a new municipio.
     * POST /municipios
     */
    async store({ request }) {
        const data = request.only(['municipio_nome', 'municipio_cod_ibge', 'municipio_sigla_uf']);
        const municipio = await Municipio.create(data);
        return municipio;
    }

    /**
     * Display a single municipio.
     * GET /municipios/:id
     */
    async show({ params }) {
        const municipio = await Municipio.findOrFail(params.id);
        return municipio;
    }

    /**
     * Update municipio details.
     * PUT or PATCH /municipios/:id
     */
    async update({ params, request }) {
        const data = request.only(['municipio_nome', 'municipio_cod_ibge', 'municipio_sigla_uf']);
        const municipio = await Municipio.findOrFail(params.id);

        municipio.merge(data);
        await municipio.save();

        return municipio;
    }

    /**
     * Delete a municipio with id.
     * DELETE /municipios/:id
     */
    async destroy({ params }) {
        const municipio = await Municipio.findOrFail(params.id);
        await municipio.delete();
    }
}

module.exports = MunicipioController