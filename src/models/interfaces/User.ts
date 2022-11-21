import { DataTypes, Model, Optional } from 'sequelize';
import { db } from "../../../config/databse";


export interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
    verificationToken: string;
    verificationTokenExpiry: Date;
    verified: boolean;
}

export interface UserInput extends Optional<UserAttributes, 'id' | 'verificationToken' | 'verificationTokenExpiry' | 'verified'> {}
// export interface UserOutput extends Required<UserAttributes> {};