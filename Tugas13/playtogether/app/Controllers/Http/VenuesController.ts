// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/http-server/build/src/HttpContext"
import VenueValidator from "App/Validators/VenueValidator"


export default class VenuesController {
    public async store({request,response}: HttpContext){
        try {
            const data = await request.validate(VenueValidator)
            response.ok({
                message:data
            })
        } catch (error) {
            response.badRequest(error.messages)
        }
    }
}
