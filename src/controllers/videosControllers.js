const connection = require("../database/connection");

module.exports = {
  async create(req,res){
    const {season_id, title, url} = req.body

    const hasSeason = await connection('seasons').where('season_number', season_id).first()

    if(!hasSeason){
      return res.status(400).json({error: "A temporada não existe ou não está cadastrada"})
    }

    const hasVideo = await connection('videos').where('url', url).first()

    if(hasVideo){
      return res.status(400).json({error: "Video já existe"})
    }

    await connection('videos').insert({
      season_id,
      title,
      url
    })

    return res.json(`O Episódio ${title} foi adicionado com sucesso!`)

  },

  async list(req, res){
    const videos = await connection('videos').select('*')

    return res.json(videos)
  }
}
