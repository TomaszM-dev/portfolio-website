import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hydrate from "./components/Hydrate";
import Head from "@/node_modules/next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TM-portfolio",
  description: "Tomasz Malocha porftolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <body className={inter.className}>
        <div className="container ">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
