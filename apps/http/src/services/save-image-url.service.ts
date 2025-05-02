import { Messages } from "@repo/common"
import { prisma } from "@repo/db"

interface DataTypes {
    userId: string
    imageUrl: string
}

export default async function saveImageUrl(data: DataTypes) {
    const { userId, imageUrl } = data

    const response = await prisma.images.create({
        data: {
            imageUrl,
            user: {
                connect: { id: userId }
            }
        }
    })

    if (!response) throw new Error(Messages.ERROR.IMAGE_NOT_UPLOADED)

    return response.id
}