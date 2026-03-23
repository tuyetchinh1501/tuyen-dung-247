import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <Image
              src="/logo-247.png"
              alt="Lắp Đặt 247"
              width={150}
              height={60}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 font-body text-sm leading-relaxed">
              Nền tảng kết nối dịch vụ lắp đặt hàng đầu Việt Nam. Kết nối đại
              lý — thợ lắp đặt — khách hàng một cách nhanh chóng và chuyên
              nghiệp.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Hệ</h3>
            <ul className="space-y-3 font-body text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-teal shrink-0" />
                <a
                  href="mailto:tuyendung@lapdat247.vn"
                  className="hover:text-brand-teal transition-colors"
                >
                  tuyendung@lapdat247.vn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-teal shrink-0" />
                <a
                  href="tel:0906894816"
                  className="hover:text-brand-teal transition-colors"
                >
                  0906 894 816
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Kết</h3>
            <ul className="space-y-3 font-body text-sm text-gray-400">
              <li>
                <a
                  href="#positions"
                  className="hover:text-brand-teal transition-colors"
                >
                  Vị trí đang tuyển
                </a>
              </li>
              <li>
                <a
                  href="https://lapdat247.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-teal transition-colors"
                >
                  Website chính
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-sm text-gray-500 font-body">
          <p>&copy; {new Date().getFullYear()} Lắp Đặt 247. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
