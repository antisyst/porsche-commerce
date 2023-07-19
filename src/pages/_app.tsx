import "@/styles/globals.scss";
import "@/styles/swiper.scss";
import NProgress from "nprogress";
import type { AppProps } from "next/app";
import Router from "next/router";
import { CartProvider } from "@/contexts/cartContext";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
