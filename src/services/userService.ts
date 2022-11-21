import { userRepository, UserRepository } from "../repositories/userRepository";
import { verificationRules } from "../../config/rules/verificationRules";
import { rule } from "../../config/rules/rules";

export class UserService {
  userRepository: UserRepository;
  verificationRules: rule;

  constructor(userRepository: UserRepository, verificationRules: any) {
    this.userRepository = userRepository;
    this.verificationRules = verificationRules;
  }

  async serveUserById(userId: number) {
    return this.userRepository.findById(userId);
  }

  async serveUserByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async serveUserByVerificationToken(verificationToken: string) {
    return this.userRepository.findByVerificationToken(verificationToken);
  }

  async saveNewUser(user: any) {
    user.verificationToken = Math.round(Math.random() * 9000000000);
    user.verificationTokenExpiry = this.verificationRules.expiry;
    return this.userRepository.saveNew(user);
  }

  async verifyUserByVerificationToken(verificationToken: string) {
    const user: any = await this.serveUserByVerificationToken(verificationToken);
    if (user) {
      user.verified = true;
    }
  }
}

export const userService = new UserService(userRepository, verificationRules);
