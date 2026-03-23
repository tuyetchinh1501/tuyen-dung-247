import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tuyển Dụng | Lắp Đặt 247",
  description:
    "Gia nhập đội ngũ Lắp Đặt 247 - Nền tảng kết nối dịch vụ lắp đặt hàng đầu Việt Nam",
  keywords: ["tuyển dụng", "247", "lắp đặt", "việc làm", "HCM"],
  openGraph: {
    title: "Tuyển Dụng | Lắp Đặt 247",
    description:
      "Gia nhập đội ngũ Lắp Đặt 247 - Nền tảng kết nối dịch vụ lắp đặt hàng đầu Việt Nam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${montserrat.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
