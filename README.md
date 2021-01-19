# VetoresEndemiasAPI

<img src="https://img.shields.io/static/v1?label=ADONISJS&message=APIVetoresEndemias&color=<COLOR>&logo=ADONISJS&style=for-the-badge"/>

API desenvolvida para o aplicativo CLIC - Agente no projeto VETORES. O aplicativo CLIC - Agente é focado no agente municipal de endemias e buscou simplificar ações rotineiras do dia a dia de trabalho do agente. 

_O Aplicativo está sendo desenovolvido pelo Centro Integrado de Tecnologia da Informação do Itanhy - CITI². Versão Android disponível em: https://play.google.com/store/apps/details?id=br.org.ipti.vetores.endemias_

Para conferir documentação referente ao desenvolvimento da API, acesse a Wiki no repositório do projeto no Github. https://github.com/ipti/br.vetores.endemias.api/wiki


## Instalação 
Use o comando abaixo para instalar o AdonisJS globalmente.

```bash
npm i -g @adonisjs/cli
```
Para conferir se a instalação ocorreu corretamente, execute o comando 
```bash 
adonis --help
```
Após clonar o repositório,  execute o comando:
```bash
npm install
```

Será necessário configurar o arquivo `.env` para as condições do seu ambiente de desenvolvimento ou produção. 

## Execução
Use o comando a seguir para criar o banco de dados: <br>
*(Obs.: As configurações que apontam para o banco de dados devem estar corretamente descritas no arquivo .env)*
```bash
adonis migration:run
```

Use o comando para executar o projeto em modo desenvolvimento.
```bash
adonis serve --dev
```