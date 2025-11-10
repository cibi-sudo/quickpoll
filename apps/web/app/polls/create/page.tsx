import CreatePollForm from "./poll-form";

export default function CreatePollPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-semibold">Create Poll</h1>
            <CreatePollForm />
        </div>
    );
}
