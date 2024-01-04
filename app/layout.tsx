import type { Metadata } from "next";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { inter } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "データ分析研究会",
  description:
    "Official website of the Data Analysis Club at the University of Hyogo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ scrollPaddingTop: "64px" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
