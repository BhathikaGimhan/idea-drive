import "@/styles/globals.css";
import Footer from "./tools/footer/footer";
import Header from "./tools/folder/Header";
import SideBar from "./tools/sideBar/SideBar";
import NextNProgress from "nextjs-progressbar";
import Bot from "./tools/qt/bot";
import Background from "./tools/background/Background";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Providers from "./components/Providers";
import { getSession } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log("Loading", url);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
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
              <div className="folder-view">
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
