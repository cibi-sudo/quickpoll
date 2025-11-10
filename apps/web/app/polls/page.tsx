import { pollServices } from "../api/services/pollServices";

export default async function PollListPage() {
    const polls = await pollServices.getAllPolls();

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-semibold tracking-tight">All Polls</h1>

            <div className="space-y-4">
                {polls.map((poll) => {
                    const totalVotes = poll.options.reduce(
                        (sum, o) => sum + o._count.votes,
                        0
                    );

                    return (
                        <a
                            key={poll.id}
                            href={`/polls/${poll.id}`}
                            className="block border bg-white p-5 rounded-lg hover:shadow-md transition"
                        >
                            <div className="text-lg font-medium">{poll.question}</div>
                            <div className="text-sm text-gray-600 mt-1">
                                {poll.options.length} options · {totalVotes} votes
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
