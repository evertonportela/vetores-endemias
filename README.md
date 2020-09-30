# VetoresEndemiasAPI

<img src="https://img.shields.io/static/v1?label=ADONISJS&message=APIVetoresEndemias&color=<COLOR>&logo=ADONISJS&style=for-the-badge"/>



API desenvolvida para o aplicativo CLIC - Agente no projeto VETORES. O aplicativo CLIC - Agente é focado no agente municipal de endemias e buscou simplificar ações rotineiras do dia a dia de trabalho do agente. 

_O Aplicativo está sendo desenovolvido pelo Centro Integrado de Tecnologia da Informação do Itanhy - CITI². Versão Android disponível em: https://play.google.com/store/apps/details?id=br.org.ipti.vetores.endemias_

# Endpoints

> <br>
> Rotas para o recurso AGENTE <br>
> <br>

> Path        | Request
> ----------- | ------
> /agente     | GET e POST
> /agente/:id | GET e UPDATE

<br/>Com o *endpoint* a seguir é possível acessar uma lista com todos os usuários cadastrados na base de dados.

```
Request
GET /agente

Example
URL_BASE/agente

Response
[
  {
    "agente_id": 1,
    "agente_cns": "222224444466666",
    "agente_apelido": "Eloi",
    "agente_nome_completo": "Jose Eloi"
  }
]
```
Com o *endpoint* a seguir é possível cadastrar um registro na base de dados.
```
Request
POST /agente

Example
URL_BASE/agente
Body Request
{
  "agente_cns": "333335555577777",
  "agente_apelido": "Matias",
  "agente_nome_completo": "Jose Matias"
}

Response
{
  "agente_cns": "333335555577777",
  "agente_apelido": "Matias",
  "agente_nome_completo": "Jose Matias",
  "agente_id": 3
}
```
Com o *endpoint* a seguir é possível acessar um único registro cadastrado na base de dados. Passando como parâmetro o ID do usuário.
```
Request
GET /agente/:id

Example
URL_BASE/agente/1

Response
{
  "agente_id": 1,
  "agente_cns": "222224444466666",
  "agente_apelido": "Eloi",
  "agente_nome_completo": "Jose Eloi"
}
```
Com o *endpoint* a seguir é possível alterar um registro cadastrado na base de dados. Passando como parâmetro o ID do usuário.
```
Request
UPDATE /agente/:id

Example
URL_BASE/agente/1
Body Request
{
  "agente_cns": "222224444477777",
  "agente_apelido": "eloi",
  "agente_nome_completo": "Jose Eloi"
}

Response
{
  "agente_id": 1,
  "agente_cns": "222224444477777",
  "agente_apelido": "eloi",
  "agente_nome_completo": "Jose Eloi"
}
```

<br> 

> <br>
> Rotas para o recurso ATIVIDADE DO DIA <br>
> <br>

> Path        | Request
> ----------- | ------
> /atividade     | GET e POST
> /atividade/:id | GET e UPDATE

<br/>Com o *endpoint* a seguir é possível acessar uma lista com todos os dados sobre *atividade do dia* cadastrados na base de dados.
```
Request
GET /atividade

Response
[
  {
    "atv_dia_id": 3,
    "atv_dia_sigla": "T + AQ",
    "atv_dia_descricao": "Tô aqui"
  }
]
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


## Instalação 
Use o comando abaixo para instalar o AdonisJS globalmente.

```bash
npm i -g @adonisjs/cli
```
Para conferir se a instalação ocorreu corretamente, execute o comando 
```bash 
adonis --help
```
Uma outra opção é clocar o repositório executar
```bash
npm install
```

Será necessário configurar o arquivo `.env` para as condições do seu ambiente de desenvolvimento ou produção. 

## Execução
Use o comando para executar o projeto.
```bash
adonis serve --dev
```