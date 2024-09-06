import { AdminDocument, AdminModel } from "../models/admin.model";

export class AdminService {
    async findByEmail(email: string): Promise<AdminDocument | null> {
        const admin = await AdminModel.findOne({ email });
        return admin;
    }
    async createAdmin(adminData: { name: string; email: string; password: string }): Promise<AdminDocument> {
        const newAdmin = new AdminModel(adminData);
        return await newAdmin.save();
    }
}
