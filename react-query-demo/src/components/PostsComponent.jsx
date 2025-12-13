import React from "react";
import { useQuery } from "@tanstack/react-query";

const url = "https://jsonplaceholder.typicode.com/posts";

function PostsComponent() {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return fetch(url).then((data) => data.json());
    },
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
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
