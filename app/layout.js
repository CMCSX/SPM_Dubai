import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "SPM Dubai — Debt Recovery Solutions for the GCC",
  description:
    "Built for the region. Delivered with local expertise, multilingual capability, and proven recovery performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
