
'use client'
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import store from "./redux/store"; 
// const inter = Inter({ subsets: ["latin"] });


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`flex flex-col min-h-screen ${inter.className} font-montserrat`}>
        <Provider store={store}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
} 