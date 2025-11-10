import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Poll App",
    description: "Create & vote on polls.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-gray-50 text-gray-900">
        <header className="border-b bg-white sticky top-0 z-40">
            <nav className="max-w-4xl mx-auto flex justify-between items-center px-6 py-4">
                <a href="/polls" className="text-xl font-semibold">Polls</a>
                <a
                    href="/polls/create"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    + Create Poll
                </a>
            </nav>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-10">
            {children}
        </main>
        </body>
        </html>
    );
}
