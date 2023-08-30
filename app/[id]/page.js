import React from "react";
import Head from "next/head";

const fetchPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const Page = async ({ params }) => {
  const data = await fetchPost();
  console.log("data", data);

  return (
    <>
      <Head>
        <title>Details Page - Post {id}</title>
      </Head>
      <div>Page-details-{id}</div>
    </>
  );
};

export default Page;

export async function generateStaticParams() {
  const posts = await fetchPost();
  return posts.map((post) => ({ id: post.id.toString() }));
}
