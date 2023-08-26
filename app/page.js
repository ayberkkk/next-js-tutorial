import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
    </div>
  );
}
