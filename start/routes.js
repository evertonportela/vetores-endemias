'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group( 
  () => {
    // *GET /agente  *POST /agente  * GET /agente/:id  * PUT /agente/:id  * DELETE /agente/:id
    Route.resource('agente', 'AgenteController').apiOnly()

    // *GET /atividade  *POST /atividade  * GET /atividade/:id  * PUT /atividade/:id  * DELETE /atividade/:id
    Route.resource('atividade', 'AtividadeDoDiaController').apiOnly()
  } 
)