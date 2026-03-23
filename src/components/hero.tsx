import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-brand-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #008B98 25%, transparent 25%), linear-gradient(-45deg, #008B98 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #008B98 75%), linear-gradient(-45deg, transparent 75%, #008B98 75%)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo-247.png"
            alt="Lắp Đặt 247"
            width={200}
            height={80}
            priority
            className="h-20 w-auto"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Gia Nhập Đội Ngũ{" "}
          <span className="text-brand-yellow">Lắp Đặt 247</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-body">
          Cùng xây dựng nền tảng kết nối dịch vụ lắp đặt hàng đầu Việt Nam.
          Chúng tôi đang tìm kiếm những đồng đội tài năng và đam mê.
        </p>

        <a href="#positions">
          <Button
            size="lg"
            className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-6 text-lg font-semibold uppercase tracking-wider"
          >
            Xem Vị Trí Đang Tuyển
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
