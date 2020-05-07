import {get} from "microrouter"
import {RequestHandler, send} from "micro"
import user from './user'

const indexHandler: RequestHandler = async (req, res) => {
  return send(res, 200, 'OK')
}

const root = [get('/', indexHandler)]

export default {
  root: root,
  user: user,
}
