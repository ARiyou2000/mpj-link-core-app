import "./globals.css";
import localFont from "next/font/local";
import RegisterServiceWorker from "@/components/RegisterServiceWorker";
import getDocumentDir from "@/utils/getDocumentDir";

const YekanBakhFont = localFont({
  src: "./fonts/YekanBakh-VF.ttf",
  variable: "--font-YekanBakh",
});

export const metadata = {
  title: "MPJ Link App",
  description: "Modern product jahan-ara",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"fa"} dir={getDocumentDir("fa")}>
      <body className={`${YekanBakhFont.variable} font-sans`}>
        <RegisterServiceWorker />
        <div
          className={
            "max-w-[24.375rem] landscape:max-w-[52.75rem] h-full min-h-full mx-auto mainBackground portraitMainBackground landscape:landscapeMainBackground text-white"
          }>
          {children}
        </div>
      </body>
    </html>
  );
}
