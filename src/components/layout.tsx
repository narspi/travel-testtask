import { ReactNode } from "react";
import { Roboto } from 'next/font/google';
import Footer from "./Footer";

const roboto = Roboto({
    weight: ['100','300','400','500','700','900'],
    style: 'normal',
    subsets: ['cyrillic','latin'],
    display: 'swap',
    fallback: ['sans-serif']
})
 
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={roboto.className}>
      {children}
      <Footer />
    </div>
  )
}