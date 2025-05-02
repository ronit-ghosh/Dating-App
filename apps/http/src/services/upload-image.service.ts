import { Messages } from "@repo/common";
import { S3Client } from "bun";

async function createPreSignedUrl() {
    const key = `user/lume_${Date.now()}_${String(Math.random()).split('.')[1]}.zip`

    const preSignedUrl = S3Client.presign(key, {
        method: "PUT",
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
        endpoint: process.env.ENDPOINT,
        bucket: process.env.BUCKET_NAME,
        expiresIn: 60 * 5,
        type: "image/png"
    });

    return { preSignedUrl, key }
}

export default async function uploadImage() {
    const preSignedUrl = createPreSignedUrl()
    
    if (!preSignedUrl) throw new Error(Messages.ERROR.PRESIGNED_NOT_GENERATED)

    return preSignedUrl
}