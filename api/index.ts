import {router, withNamespace} from 'microrouter'
import handler from './handler'

const user = withNamespace('/user')

module.exports = router(
  ...handler.root,
  user(...handler.user),
)
