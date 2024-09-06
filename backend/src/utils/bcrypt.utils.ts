import bcrypt from "bcryptjs";
export class BcryptUtils {
    async comparePassword(password:string,hashedPassword:string): Promise<boolean> {
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        return passwordMatch;
    }
    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
}