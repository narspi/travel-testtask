import Header from "@/components/Header";
import ModalCall from "@/components/ModalCall";
import Top from "@/components/Top";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

export default function Home() {
  return (
    <>
      <Header />
      <Top />
    </>
  );
}
