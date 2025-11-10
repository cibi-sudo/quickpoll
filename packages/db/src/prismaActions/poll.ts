import {prisma} from "../client";
import {pollType} from "@repo/validation";

export const pollDal = {
    async createPoll(data: pollType) {
        const { question, options } = data;
        return await prisma.poll.create({
            data: {
                question,
                options: {
                    create: options.map((text) => ({text})),
                },
            },
            include: {options: true},
        });
    },
};
