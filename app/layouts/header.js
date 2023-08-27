import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="p-4 border-bottom">
      <div className="container">
        <div className="row">
          <div className="col">
            <Image
              className="img-fluid"
              src="next.svg"
              width={100}
              height={100}
            />
          </div>
          <div className="col text-center">
            <nav className="nav justify-content-evenly">
              <Link href="/" className="nav-item">
                Home
              </Link>
              <Link href="../products" className="nav-item">
                Products
              </Link>
              <Link href="../pages/about" className="nav-item">
                About
              </Link>
              <Link href="../pages/contact" className="nav-item">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
