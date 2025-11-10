"use client";

import { useTransition } from "react";
import { voteOnOption } from "../../api/services/voteServices";

export default function VoteForm({ poll }: { poll: any }) {
    const [isPending, startTransition] = useTransition();

    const handleVote = (optionId: string) => {
        startTransition(() => {
            void voteOnOption({ pollId: poll.id, optionId });
        });
    };

    return (
        <div className="space-y-3">
            {poll.options.map((option: any) => (
                <button
                    key={option.id}
                    onClick={() => handleVote(option.id)}
                    disabled={isPending}
                    className="w-full border bg-white rounded-lg px-4 py-3 text-left hover:bg-gray-100 transition disabled:opacity-50"
                >
                    {option.text}
                    <span className="float-right text-sm text-gray-600">
            {option._count.votes} votes
          </span>
                </button>
            ))}
        </div>
    );
}
