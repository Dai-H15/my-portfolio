import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuBar from "@/app/ui/menubar";
import Header from "@/app/ui/header";
import Footer from "./ui/footer";
import { GoogleAnalytics } from "@next/third-parties/google";


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
<GoogleAnalytics gaId="G-ECZZMKGZ00"/>
      <body className={inter.className}>
        <div className="container-fluid p-0">
          <div className="row "><Header/></div>
          <div className="row d-block pb-4">
            <MenuBar/>
          </div>
          <div className = "container">
            <div className="row ">
            <div className="">{children}</div>
          </div>
          </div>
          <div className="row"><Footer/></div>
        </div>
        </body>
    </html>
  );
}
