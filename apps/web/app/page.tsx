export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-semibold">Welcome to the Poll App 🎯</h1>

            <p className="text-gray-600 mt-2">
                Create polls and vote instantly, anonymously.
            </p>

            <a
                href="/polls"
                className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
                View Polls
            </a>
        </main>
    );
}
