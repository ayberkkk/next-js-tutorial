import React from "react";

const Page = ({ params }) => {
  return <div>Dynamic Page Products - {params.id}</div>;
};

export default Page;
