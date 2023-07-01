import { ReactNode, useState } from "react";
import { Roboto } from "next/font/google";
import Footer from "./Footer";
import { clsx } from "clsx";
import ModalProvider from "../context/ModalContext";
import ModalCall from "./ModalCall";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: "normal",
  subsets: ["cyrillic", "latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export default function Layout({ children }: { children: ReactNode }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalProvider value={{ openModal,setOpenModal }}>
      <div className={clsx(roboto.className, "layout")}>
        {openModal && <ModalCall />}
        {children}
        <Footer />
      </div>
    </ModalProvider>
  );
}
