import {Sequelize} from 'sequelize'
import Users from './users'

// todo: env
const config = {
  host: 'localhost',
  user: 'local',
  password: 'local',
  database: 'public',
  port: 3306,
}

const conn = new Sequelize(config.database, config.user, config.password, {
  dialect: 'mysql',
  host: config.host,
  port: config.port,
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  },
  timezone: '+09:00',
})

const db = {
  Users: Users.initialize(conn),
}

// migrationは下記でできるっぽい
// db.Users.sync({ force: true })

export default db
