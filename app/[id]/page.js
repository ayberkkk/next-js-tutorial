import React from "react";

const fetchPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const Page = async ({ params }) => {
  const data = await fetchPost();
  console.log("data", data);
  return <div>Page-details-{params.id}</div>;
};

export default Page;

export async function generateStaticParams() {
  const posts = await fetchPost();
  return posts.map((post) => ({ id: post.id.toString()}));
}
