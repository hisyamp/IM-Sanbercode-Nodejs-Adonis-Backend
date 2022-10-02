import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class GenresController {
  public async index({response}: HttpContextContract) {
    try {
      const data = await Database.from('genres').select('*')
      response.ok({
        status: "success",
        data: data,
      });
    } catch (error) {
      response.badRequest(error)
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {
    try {
      await Database.table('genres').insert({
        name: request.input('name')
      })
      response.ok({
        status: true,
        message:"sukses"
      })
    } catch (error) {
      
    }
  }

  public async show({params,response}: HttpContextContract) {
    try {
      const data = await Database.from('genres').where('id',params.id)
      const movies = await Database.from('movies').select('movies.id','title','resume','release_date').where('genre_id',params.id)
      data[0]["movies"] = movies
      response.ok({
        status: "success",
        data: data,
      });
    } catch (error) {
      
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({params,request,response}: HttpContextContract) {
    try {
    const data = await Database.from('genres').where('id',params.id).update({
      name: request.input('name')
    })
    response.ok({
      status: "success",
      data: data,
    });
  } catch (error) {
    
  }}

  public async destroy({params,response}: HttpContextContract) {
    await Database.from('genres').where('id', params.id)
    .delete()
    response.ok({
      status: "success",
    });
  }
}
