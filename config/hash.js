'use strict'

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Driver
  |--------------------------------------------------------------------------
  |
  | Driver a ser usado para valores de hash. O mesmo driver é usado pelo
  | módulo de autenticação junto.
  |
  */
  driver: Env.get('HASH_DRIVER', 'bcrypt'),

  /*
  |--------------------------------------------------------------------------
  | Bcrypt
  |--------------------------------------------------------------------------
  |
  | Config related to bcrypt hashing. https://www.npmjs.com/package/bcrypt
  | package is used internally.
  |
  */
  bcrypt: {
    rounds: 10
  },

  /*
  |--------------------------------------------------------------------------
  | Argon
  |--------------------------------------------------------------------------
  |
  | Config related to argon. https://www.npmjs.com/package/argon2 package is
  | used internally.
  |
  | Since argon is optional, you will have to install the dependency yourself
  |
  |============================================================================
  | npm i argon2
  |============================================================================
  |
  */
  argon: {
    type: 1
  }
}
