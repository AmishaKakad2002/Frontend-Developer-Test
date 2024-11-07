import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get dynamic params

const SinglePost = () => {
  const { id } = useParams(); // Get the dynamic post ID from the URL
  const [post, setPost] = useState(null); // State to store the post data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch post data when the component mounts or when the `id` changes
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch post data");
        }

        const data = await response.json();
        setPost(data); // Store the fetched post data
      } catch (err) {
        setError(err.message); // Handle error
      } finally {
        setLoading(false); // Set loading to false after fetching data or on error
      }
    };

    fetchPostData();
  }, [id]); // Dependency array: runs whenever `id` changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 border border-gray-200 rounded-lg shadow-md bg-slate-400">
      <h1 className="text-3xl font-semibold text-gray-800">{post.title}</h1>
      <p className="text-gray-600 mt-4">{post.body}</p>
    </div>
  );
};

export default SinglePost;
