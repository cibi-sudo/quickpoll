"use client";

import { useState } from "react";
import { pollSchema } from "@repo/validation";
import { createPoll } from "../../api/actions/poll/createPoll";
import { useRouter } from "next/navigation";

export default function CreatePollForm() {
    const router = useRouter();
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", ""]);
    const [error, setError] = useState<string | null>(null);

    const submit = async () => {
        const cleaned = {
            question: question.trim(),
            options: options.map((o) => o.trim()),
        };

        const validation = pollSchema.safeParse(cleaned);
        if (!validation.success) {
            setError(validation.error.message);
            return;
        }

        const res = await createPoll(cleaned);
        if (!res.success) {
            setError(res.error ?? "Something went wrong");
            return;
        }

        router.push("/polls");
    };

    const updateOption = (value: string, index: number) => {
        const next = [...options];
        next[index] = value;
        setOptions(next);
    };

    const addOption = () => setOptions([...options, ""]);

    return (
        <div className="space-y-4 max-w-xl">
            {error && <div className="p-2 bg-red-100 border border-red-300 text-red-800 rounded">{error}</div>}

            <input
                className="w-full border px-3 py-2 rounded"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Poll question..."
            />

            {options.map((opt, i) => (
                <input
                    key={i}
                    className="w-full border px-3 py-2 rounded"
                    value={opt}
                    onChange={(e) => updateOption(e.target.value, i)}
                    placeholder={`Option ${i + 1}`}
                />
            ))}

            <button onClick={addOption} className="text-blue-600 underline text-sm">+ Add option</button>

            <button
                onClick={submit}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
                Create Poll
            </button>
        </div>
    );
}
