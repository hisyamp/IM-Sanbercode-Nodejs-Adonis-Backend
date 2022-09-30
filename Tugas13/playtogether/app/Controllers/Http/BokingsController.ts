// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BokingValidator from 'App/Validators/BokingValidator'

export default class BokingsController {
    public async store({request,response}: HttpContextContract){
        try {
            const data = await request.validate(BokingValidator)
            response.ok({
                message: data
            })
        } catch (error) {
            response.badRequest(error.messages)
        }
    }
}
