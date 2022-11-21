import { Model, DataTypes } from "sequelize";
import { db } from "../../config/databse";
import { UserInput, UserAttributes } from "./interfaces/User";

export class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public verificationToken!: string;
  public verificationTokenExpiry!: Date;
  public verified!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

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
