import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BokingValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    nama: schema.string({},[
      // rules.alpha(),
      // rules.minLength(3),
    ]),
    venue: schema.string({},[
      // rules.minLength(2),
    ]),
    date: schema.date({
      format: 'sql',
    },[
      rules.after('today'),
    ])
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {v
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    required: "kolom input {{field}} wajib diisi",
    "nama.alpha": "Input {{field}} harus berupa alphabet",
    "nama.minLength": "Input {{field}} harus lebih dari 3",
    "venue.minLength": "Input {{field}} harus lebih dari 2",
    "rules.date": "Input tanggal minimal adalah besok"
  }
}
