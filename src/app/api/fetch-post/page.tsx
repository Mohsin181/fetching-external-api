"use client";

import { useState, useEffect } from "react";

export default function FetchPostPage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    // Fetch function to get posts
    const fetchPosts = () => {
        setLoading(true);
        setError("");
        fetch("/api/external")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setPosts(data.data);
                } else {
                    setError(data.message);
                }
            })
            .catch(() => setError("An Expected Error"))
            .finally(() => setLoading(false));
    };

    // Use effect to call fetchPosts initially
    useEffect(() => {
        fetchPosts();
    }, []);

    // Reload the posts on button click
    const reloadPosts = () => {
        fetchPosts(); // Recalling the fetchPosts function
    };

    if (loading) return <p className="text-xl text-center text-blue-500">Loading...</p>;
    if (error) return <p className="text-xl text-center text-red-500">Error: {error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Posts</h1>
            
            <ul className="space-y-4">
                {posts.map((post: { id: number; title: string; body: string }) => (
                    <li
                        key={post.id}
                        className="bg-slate-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-600">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
