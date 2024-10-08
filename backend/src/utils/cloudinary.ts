import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

class Cloudinary {
    async saveToCloudinary(file: any): Promise<string> {
        const result = await cloudinary.uploader.upload(file?.path);
        file = result.secure_url;
        return file as string;
    }
}

export default Cloudinary;
