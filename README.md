# VetoresEndemiasAPI

<img src="https://img.shields.io/static/v1?label=ADONISJS&message=APIVetoresEndemias&color=<COLOR>&logo=ADONISJS&style=for-the-badge"/>



API desenvolvida para o aplicativo CLIC - Agente no projeto VETORES. O aplicativo CLIC - Agente é focado no agente municipal de endemias e buscou simplificar ações rotineiras do dia a dia de trabalhos do agente. 

_Aplicativo Android desenvolvido pelo Centro Integrado de Tecnologia da Informação do Itanhy - CITII_

# Endpoints

> <br>
> Rotas para o recurso AGENTE <br>
> <br>
<br>

Path        | Request
----------- | ------
/agente     | GET e POST
/agente/:id | GET e UPDATE

Com o *endpoint* a seguir é possível acessar uma lista com todos os usuários cadastrados na base de dados.
```
GET /agente
```
Com o *endpoint* a seguir é possível cadastrar um registro na base de dados.
```
POST /agente
```
Com o *endpoint* a seguir é possível acessar um único registro cadastrado na base de dados. Passando como parâmetro o ID do usuário.
```
GET /agente/:id
```
Com o *endpoint* a seguir é possível alterar um registro cadastrado na base de dados. Passando como parâmetro o ID do usuário.
```
UPDATE /agente/:id
```

<br> 

> <br>
> Rotas para o recurso ATIVIDADE DO DIA <br>
> <br>
<br>

Path        | Request
----------- | ------
/atividade     | GET e POST
/atividade/:id | GET e UPDATE

Com o *endpoint* a seguir é possível acessar uma lista com todos os dados sobre *atividade do dia* cadastrados na base de dados.
```
GET /atividade
```
Com o *endpoint* a seguir é possível cadastrar um registro na base de dados.
```
POST /atividade
```
Com o *endpoint* a seguir é possível acessar um único registro cadastrado na base de dados. Passando como parâmetro o ID da atividade do dia.
```
GET /atividade/:id
```
Com o *endpoint* a seguir é possível alterar um registro cadastrado na base de dados. Passando como parâmetro o ID da atividade do dia.
```
UPDATE /atividade/:id
```

<br> 

> <br>
> Rotas para o recurso TIPO DE VISITA <br>
> <br>
<br>

Path        | Request
----------- | ------
/visita/tipo     | GET e POST
/visita/tipo/:id | GET e UPDATE

Com o *endpoint* a seguir é possível acessar uma lista com todos os dados sobre *Tipos de Visita* cadastrados na base de dados.
```
GET /visita/tipo
```
Com o *endpoint* a seguir é possível cadastrar um registro na base de dados.
```
POST /visita/tipo
```
Com o *endpoint* a seguir é possível acessar um único registro cadastrado na base de dados. Passando como parâmetro o ID do Tipo de Visita.
```
GET /visita/tipo/:id
```
Com o *endpoint* a seguir é possível alterar um registro cadastrado na base de dados. Passando como parâmetro o ID do Tipo da Visita.
```
UPDATE /visita/tipo/:id
```

<br> 

> <br>
> Rotas para o recurso STATUS DE VISITA <br>
> <br>
<br>

Path        | Request
----------- | ------
/visita/status     | GET e POST
/visita/status/:id | GET e UPDATE

Com o *endpoint* a seguir é possível acessar uma lista com todos os dados sobre *Status de Visita* cadastrados na base de dados.
```
GET /visita/status
```
Com o *endpoint* a seguir é possível cadastrar um registro na base de dados.
```
POST /visita/status
```
Com o *endpoint* a seguir é possível acessar um único registro cadastrado na base de dados. Passando como parâmetro o ID do status de Visita.
```
GET /visita/status/:id
```
Com o *endpoint* a seguir é possível alterar um registro cadastrado na base de dados. Passando como parâmetro o ID do Status da Visita.
```
UPDATE /visita/status/:id
```

<br> 

> <br>
> Rotas para o recurso TIPO DE IMOVEL <br>
> <br>
<br>

Path        | Request
----------- | ------
/imovel/tipos     | GET e POST
/imovel/tipos/:id | GET e UPDATE

Com o *endpoint* a seguir é possível acessar uma lista com todos os dados sobre *Tipos de Imoveis* cadastrados na base de dados.
```
GET /imovel/tipos
```
Com o *endpoint* a seguir é possível cadastrar um registro na base de dados.
```
POST /imovel/tipos
```
Com o *endpoint* a seguir é possível acessar um único registro cadastrado na base de dados. Passando como parâmetro o ID do Tipo de Imovel.
```
GET /imovel/tipos/:id
```
Com o *endpoint* a seguir é possível alterar um registro cadastrado na base de dados. Passando como parâmetro o ID do Tipo de Imovel.
```
UPDATE /imovel/tipos/:id
```




1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Instalação

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
