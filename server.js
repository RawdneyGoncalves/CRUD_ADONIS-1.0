'use strict'

/*
|--------------------------------------------------------------------------
| Http server
|--------------------------------------------------------------------------
|
| Este arquivo inicializa o Adonisjs para iniciar o servidor HTTP. Você é livre para
| personalizar o processo de inicialização do servidor http.
|
| """ Loading ace commands """
|     Às vezes, você pode querer carregar comandos ace ao iniciar o servidor HTTP.
| O mesmo pode ser feito encadeando o método `loadCommands ()` após
|
| """ Preloading files """
|    Além disso, você pode pré-carregar arquivos chamando o método `preLoad ('path / to / file')`.
| Certifique-se de passar o caminho relativo da raiz do projeto.
*/

const { Ignitor } = require('@adonisjs/ignitor')

new Ignitor(require('@adonisjs/fold'))
  .appRoot(__dirname)
  .fireHttpServer()
  .catch(console.error)
