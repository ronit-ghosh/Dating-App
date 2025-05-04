import { Messages } from "@lume/common"
import { prisma } from "@lume/db"
import type { CreatePromptsTypes } from "@lume/validation"

interface DataTypes extends CreatePromptsTypes {
    userId: string
}

export default async function createPrompt(data: DataTypes) {
    const { title, desc, userId } = data

    const response = await prisma.prompts.create({
        data: {
            title,
            desc,
            user: {
                connect: {
                    id: userId
                }
            }
        }
    })

    if (!response) throw new Error(Messages.ERROR.PROMPT_NOT_CREATED)

    return response.id
}