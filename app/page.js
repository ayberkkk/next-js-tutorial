import Image from "next/image";
import Trial from "./trial";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const Home = async () => {
  await sleep(1000);
  const newCookies = cookies();
  console.log(newCookies.getAll());

  let nav1 = false;
  if (nav1) {
    redirect("./pages/about");
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 mt-5 mb-5">
          <p>
            In the header area, redirects are made with the next/link feature.
            Pay attention to the path of the address you will forward to.
          </p>
        </div>
        <div className="col-lg-4 col-12">
          <Image
            className="img-fluid m-auto d-table"
            src="https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={300}
            height={300}
          />
        </div>
        <div className="col-lg-8 col-12">
          <ul>
            <li>
              <p>First, we import our next/image property for the image.</p>
            </li>
            <li>
              <p>
                But the thing we need to pay attention to is that we have to
                specify some protocols in our config.js section.
              </p>
            </li>
            <li>
              <p>Finally, don't forget to give width-height to our image.</p>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <Trial />
        </div>
      </div>
    </div>
  );
};
export default Home;
