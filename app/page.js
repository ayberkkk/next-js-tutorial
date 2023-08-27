import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import Trial from "./trial";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const Home = async () => {
  await sleep(1000);
  const newCookies = cookies();
  console.log(newCookies.getAll());
  return (
    <div>
       Main Page
      <Link href="./pages/about">About</Link>
      <Link
        href={{
          pathname: "./pages/user",
          query: {
            name: "ayberk",
          },
        }}
      >
        About
      </Link>
      <Image
        src="https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={300}
        height={300}
      />
      <Trial/>
    </div>
  );
};
export default Home;
