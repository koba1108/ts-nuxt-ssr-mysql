import {get, post} from "microrouter"
import {RequestHandler, json, send} from 'micro'
import moment from '../../plugins/moment'
import db from '../models'

const microQuery = require('micro-query')

const list: RequestHandler = async (req: any, res: any) => {
  const {id} = microQuery(req)
  const option = id ? {
    where: {
      id: id
    },
  } : {}
  const users = await db.Users.findAll(option)
  return send(res, 200, users)
}

const create: RequestHandler = async (req: any, res: any) => {
  const params: any = await json(req)
  const newUser = await db.Users.create({
    name: params.name,
    birthday: moment(params.birthday, 'YYYY/MM/DD').format('YYYY-MM-DD'),
  })
  return send(res, 200, newUser)
}

export default [
  get('/', list),
  post('/', create),
]
