import { prisma } from "../client";
import { pollType } from "@repo/validation";

export const pollActions = {
    createPoll: async (data: pollType) => {
        const { question, options } = data;

        return prisma.poll.create({
            data: {
                question,
                options: {
                    create: options.map((text) => ({ text })),
                },
            },
            include: { options: true },
        });
    },

    findByQuestion: async ({ question }: Pick<pollType, "question">) => {
        return prisma.poll.findFirst({
            where: { question },
        });
    },

    getAllPolls: async () => {
        return prisma.poll.findMany({
            include: {
                options: {
                    include: {
                        _count: { select: { votes: true } },
                    },
                },
            },
            orderBy: { createdAt: "desc" },
        });
    },
};
