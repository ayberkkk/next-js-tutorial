"use client";
import React from "react";

const Page = () => {
  console.log(process.env.API_KEY);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>Road</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
