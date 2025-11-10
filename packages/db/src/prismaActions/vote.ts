import { prisma } from "../client";
import { voteType } from "@repo/validation";

export const voteActions = {
        voteOnOption: async (data: voteType) => {
            const { pollId, optionId } = data;

            return prisma.$transaction(async (tx) => {
                const option = await tx.option.findUnique({
                    where: { id: optionId },
                    select: { pollId: true },
                });

                if (!option || option.pollId !== pollId) {
                    throw new Error("Invalid poll or option relationship.");
                }

                await tx.vote.create({
                    data: {
                        pollId,
                        optionId,
                    },
                });

                const updatedPoll = await tx.poll.findUnique({
                    where: { id: pollId },
                    include: {
                        options: {
                            include: {
                                _count: { select: { votes: true } },
                            },
                        },
                    },
                });

                return {
                    success: true,
                    message: "Vote recorded successfully.",
                    poll: updatedPoll,
                };
            });
        },
};
