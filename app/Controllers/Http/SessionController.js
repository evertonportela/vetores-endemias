'use strict'

class SessionController {
    async create ({ request, auth }) {
        const { agente_cns, agente_apelido } = request.all()
        
        console.log(agente_apelido)

        const token = await auth.attempt(agente_apelido, agente_cns)

        return token

    }
}

module.exports = SessionController
