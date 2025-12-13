import React from "react";
import { useQuery } from "@tanstack/react-query";

const url = "https://jsonplaceholder.typicode.com/posts";

function PostsComponent() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["fetchPosts"],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch posts...");
      }
      return response.json();
    },
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error fetching posts... {error.message}</h2>;
  }
  return (
    <div>
      {data?.map((posts) => (
        <div key={posts.id}>
          <p>{posts.title}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;
