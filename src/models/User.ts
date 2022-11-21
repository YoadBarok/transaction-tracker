import { Model, InferAttributes, DataTypes, InferCreationAttributes, CreationOptional } from 'sequelize';
import { db } from "../../config/databse";


export class User extends Model<InferAttributes<User>, CreationOptional<User>> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare email: string;
  declare password: string;
  declare verified: CreationOptional<boolean>;
  declare verificationToken: CreationOptional<string>;
  declare verificationTokenExpiry: CreationOptional<Date>;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    verificationToken: {
      type: DataTypes.STRING,
    },
    verificationTokenExpiry: {
      type: DataTypes.DATE,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    paranoid: true,
  }
);
