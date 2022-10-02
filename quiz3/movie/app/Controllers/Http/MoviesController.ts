import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class MoviesController {
  public async index({response}: HttpContextContract) {
    try {
      const data = await Database.from('movies')
      .join('genres', 'genres.id', 'movies.genre_id')
      .select('movies.*')
      response.ok({
        status: "success",
        data: data,
      });
    } catch (error) {
      response.badRequest(error)
    }
  }

  public async store({request,response}: HttpContextContract) {
    try {
      await Database.table('movies').insert({
        title: request.input('title'),
        resume: request.input('resume'),
        release_date: request.input('release_date'),
        genre_id: request.input('genre_id'),
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
      const data = await Database.from('movies')
      .join('genres', 'genres.id', 'movies.genre_id')
      .select('movies.id','title','resume','release_date')
      .select('genres.name as genre')
      .where('genres.id',params.id)
    response.ok({
        status: "success",
        data: data,
      });
    } catch (error) {
      response.badRequest(error)
    }

  }

  public async edit({}: HttpContextContract) {}

  public async update({params,request,response}: HttpContextContract) {
    try {
      await Database.from('movies').where('id',params.id).update({
        title: request.input('title'),
        resume: request.input('resume'),
        release_date: request.input('release_date'),
        genre_id: request.input('genre_id'),
      })
      response.ok({
        status: "success",
      });
    } catch (error) {
      
    }
  }
  

  public async destroy({params,response}: HttpContextContract) {
    await Database.from('movies').where('id', params.id)
    .delete()
    response.ok({
      status: "success",
    });
  }
}
