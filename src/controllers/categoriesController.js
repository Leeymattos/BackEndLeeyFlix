const connection = require('../database/connection')

module.exports={
  async create(req, res){
    const {categoryName, link, cor} = req.body

    const hasCaregory = await connection('categories').where('categoryName', categoryName).first()
    
    if(hasCaregory){
      return res.json({error: "A categoria já existe"})
    }

    const category = await connection('categories').insert({
      categoryName,
      link,
      cor
    })

   
    
    return res.json(`${categoryName} Foi adicionada com sucesso`)

  },

  async list(req, res){

    const categories = await connection('categories').select('*')

    return res.json(categories)
  },


}


