const jwt = require('jsonwebtoken')

const connection = require('../database/connection')
const bcrypt = require('bcrypt')

module.exports={
  async create(req, res){
    const {email, password, passwordConfirmation} = req.body;

    const account = await connection('user').where('email', email).first()

    if(account){
      return res.json('Email já existente')
    }

    if(password != passwordConfirmation){
      return res.json({error: "Senhas diferentes "})
    }

    const passwordHash = bcrypt.hashSync(password, 10)

    await connection('user').insert({
      email,
      password: passwordHash
    })
  return res.json('Conta cadastrada com sucesso')
  },

  async login(req, res){
    const {email, password} = req.body

    const user = await connection('user').where('email', email).first()
    
    if(!user){
      return res.status(400).json({error: 'Email não encontrado'})
    }

    const isValidPassword = bcrypt.compareSync(password, user.password)

    if(!isValidPassword){
      return res.status(401).json({error: 'Senha informada errada'})
    }

    const token = jwt.sign({id: user.id}, 'secret',{expiresIn: '1d'})
    const refreshToken = jwt.sign({id: user.id}, 'secret2', {expiresIn: '30d'})

    delete user.password

    return res.json({
      user,
      token,
      refreshToken
    })

  }
}