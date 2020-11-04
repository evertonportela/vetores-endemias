'use strict'

const Agente = use('App/Models/Agente');

class SessionController {
    async create ({ request, auth }) {
        const { agente_cns } = request.all()
        
        console.log(agente_cns)

        /*
        const token = await auth.attempt(agente_apelido, agente_cns)

        return token 
        */
       
       const agente = await Agente.findBy('agente_cns', agente_cns);
       return agente;

    }
}

module.exports = SessionController
