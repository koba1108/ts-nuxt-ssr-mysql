import {Sequelize, Model, DataTypes} from 'sequelize'

export default class Users extends Model {
  public id!: number
  public name!: string
  public birthday?: Date
  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
        },
        name: {type: DataTypes.STRING},
        birthday: {type: DataTypes.DATEONLY},
      },
      {sequelize, tableName: 'users'}
    )
    return this
  }

  public static associate() {}
}
