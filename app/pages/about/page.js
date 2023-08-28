"use client"
import React from "react";
import { useSearchParams,usePathname } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname()
  const name = searchParams.get("name");
  console.log(name);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h5>About Page</h5>
        </div>
        <p>Current pathname: {pathname}</p>
        <div className="col-12">
          <p>
            Next.js is a JavaScript framework based on React. It provides a
            structure that supports various rendering methods such as SSR
            (Server-Side Rendering), CSR (Client-Side Rendering), and Static
            Site Generation. This allows you to enhance the performance of web
            applications, deliver SEO-friendly content, and provide better user
            experiences.
          </p>

          <div className="mt-5 mb-5">
            <h6 className="mt-4 mb-4">Why Use Next.js?</h6>
            <ul>
              <li>
                <p>
                  <strong>Speed and Performance:</strong> Next.js renders on the
                  server side, enabling faster loading times and reduced initial
                  loading delays. This significantly enhances the user
                  experience.
                </p>
              </li>
              <li>
                <p>
                  <strong>SEO Friendly:</strong> By utilizing features like SSR
                  and static page generation, you can improve SEO performance as
                  your content becomes more visible to search engines.
                </p>
              </li>
              <li>
                <p>
                  <strong>Code Splitting:</strong> Next.js automatically splits
                  pages and components into smaller pieces. Users only receive
                  the code they need, resulting in faster loading times.
                </p>
              </li>
              <li>
                <p>
                  <strong>Universal Applications:</strong> You can build
                  applications that work on both the client and server sides.
                  This leads to faster starts and improved performance.
                </p>
              </li>
              <li>
                <p>
                  <strong>Data Fetching and Processing:</strong> Tasks like API
                  calls and file processing can be easily performed on the
                  server side, reducing page loading times.
                </p>
              </li>
              <li>
                <p>
                  <strong>Development Ease:</strong> Next.js provides a rapid
                  development process with features such as hot reloading,
                  extensibility, and compatibility with the React ecosystem.
                </p>
              </li>
              <li>
                <p>
                  <strong>Frontend and Backend Integration:</strong> Next.js
                  provides the necessary infrastructure to seamlessly integrate
                  frontend and backend code, making the process smoother.
                </p>
              </li>
            </ul>
          </div>
          <p className="mt-5 mb-5">
            In summary, Next.js offers developers a fast, performance-oriented,
            SEO-friendly, and flexible way to build web applications. It is
            suitable for simple blog sites as well as complex web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
