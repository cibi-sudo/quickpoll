import { pollServices } from "../../api/services/pollServices";
import VoteForm from "./vote-form";

export default async function PollDetailPage({ params }: { params: { id: string } }) {
    const poll = await pollServices.getAllPolls()
        .then((list) => list.find((p) => p.id === params.id));

    if (!poll) return <div>Poll not found.</div>;

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">{poll.question}</h1>
            <VoteForm poll={poll} />
        </div>
    );
}
