import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Header from "./layouts/header";

const roboto = Roboto({
  subsets: ["latin"],
  display: "optional",
  weight: "400",
});

export const metadata = {
  title: "Learn next.JS",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
