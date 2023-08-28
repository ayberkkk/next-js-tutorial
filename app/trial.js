"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Trial = () => {
  const routerRed = useRouter();

  console.log("trial");
  return (
    <>
      <div className="mt-5">
        <h4>Trial</h4>
        <p>SSR example on different pages and look at console on home page.</p>
      </div>
      <div onClick={() => routerRed.push("./pages/about")}>Push</div>
      <div onClick={() => routerRed.back()}>Back</div>
      <div onClick={() => routerRed.forward()}>Forward</div>
      <div onClick={() => routerRed.refresh()}>Refresh</div>
    </>
  );
};

export default Trial;
