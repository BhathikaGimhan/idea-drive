import "@/styles/globals.css";
import Footer from "./tools/footer/footer";
import Header from "./tools/folder/Header";
import SideBar from "./tools/sideBar/SideBar";
import NextNProgress from "nextjs-progressbar";
import Bot from "./tools/qt/bot";
import Background from "./tools/background/Background";
import Providers from "./components/Providers";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Background />
      <Providers>
        <Bot />
        <SideBar />

        <div className="file-container">
          <div className="file-explor ">
            <Header />
            <div className="folder-boody mt-10  ">
              <div className={`folder-view ${inter.className}`}>
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </div>
      </Providers>
      <NextNProgress
        color="#0aff7069"
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Footer />
    </>
  );
}
