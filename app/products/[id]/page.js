import React from "react";

const Page = ({ params }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h5>
            Dynamic Page Products Page - {params.id}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Page;
