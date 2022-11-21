import {CRUDRepository} from './CRUDRepository'
import {User} from '../models/User';

export class UserRepository extends CRUDRepository {

    constructor(User: any) {
        super(User);
    }

    async findByEmail(email:string) {
        return User.findOne({where: {email: email}});
    }

    async findByVerificationToken(verificationToken:string) {
        return User.findOne({where: {verificationToken: verificationToken}});
    }

}

export const userRepository = new UserRepository(User);