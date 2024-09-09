import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable}  font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="sm:flex h-full w-full">

        <div className="grid">
          <h1 className="sm:w-[700px] p-10 font-bold text-[50px] sm:text-[82px] sm:leading-[5rem] text-[#0b0a09]">
            List on sol and Pay with QR code
          </h1>  
          <div className="p-10 space-x-8">

          <button className="!bg-gradient-to-r from-[#35d6ab] to-[#cd32fc] px-5 py-3 rounded-md">
            List Now
          </button>

          <button className="!bg-gradient-to-r from-[#35d6ab] to-[#cd32fc] px-5 py-3 rounded-md">
            Buy a product
          </button>

          </div> 
        </div>
        
        <div className="w-1/2 center pt-10 ">
          <img src="./images/images.png" alt="hero" />
        </div>
      </div>
    </div>
  );
}
