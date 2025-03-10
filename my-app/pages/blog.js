import React from "react";

const Blog = ({ posts }) => {
    return (
        <div>
            <h1>Blog Saya</h1>
            {posts.map((posts) => (
                <div key={posts.id}>
                    <h2>{posts.title}</h2>
                    <p>{posts.body}</p>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}

export default Blog;
