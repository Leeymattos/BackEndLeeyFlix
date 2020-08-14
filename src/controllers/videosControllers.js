const connection = require("../database/connection");

module.exports = {
  async create(req,res){
    const {categories_id, title, url} = req.body

    const hasCategory = await connection('categories').where('id', categories_id).first()

    if(!hasCategory){
      return res.status(400).json({error: "A categoria não existe"})
    }

    const hasVideo = await connection('videos').where('url', url).first()

    if(hasVideo){
      return res.status(400).json({error: "Video já existe"})
    }

    await connection('videos').insert({
      categories_id,
      title,
      url
    })

    return res.json(`O Episódio ${title} foi adicionado com sucesso!`)

  },

  async list(req, res){
    const videos = await connection('videos').select('*')

    return res.json(videos)
  },

  async listEspecfic(req, res){
    const {id} = req.params

    const videos = await connection('videos')
    .where('categories_id', id).select('*')

    return res.json(videos)
  }

}
