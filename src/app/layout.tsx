import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuBar from "@/app/ui/menubar";
import Header from "@/app/ui/header";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Dai-H15's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="container-fluid p-0">
          <div className="row"><Header/></div><MenuBar/>
          <div className = "container p-3">
            <div className="row">
            {children}
            <div className="row"><Footer/></div>
          </div>
          </div>
        </div>
        </body>
    </html>
  );
}
