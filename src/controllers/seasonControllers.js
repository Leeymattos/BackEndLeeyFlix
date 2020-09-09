const connection = require('../database/connection')

module.exports={
  async create(req, res){
    const {season_number, link, color} = req.body

    const hasSeason = await connection('seasons').where('season_number', season_number).first()
    
    if(hasSeason){
      return res.status(400).json({error: "A temporada já foi cadastrada"})
    }

    const season = await connection('seasons').insert({
      season_number,
      link,
      color
    })

   
    
    return res.json(`${season_number}-temporada Foi adicionada com sucesso`)

  },

  async list(req, res){

    const seasons = await connection('seasons').select('*')

    return res.json(seasons)
  },

}


