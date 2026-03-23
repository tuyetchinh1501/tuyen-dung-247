import { Rocket, Users, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Rocket,
    title: "Startup Tiên Phong",
    description:
      "Tham gia từ giai đoạn đầu, đóng góp trực tiếp vào việc xây dựng nền tảng dịch vụ lắp đặt số 1 Việt Nam.",
  },
  {
    icon: Users,
    title: "Đội Ngũ Đam Mê",
    description:
      "Làm việc cùng những người trẻ, năng động, sáng tạo và luôn hướng đến giải pháp.",
  },
  {
    icon: TrendingUp,
    title: "Cơ Hội Phát Triển",
    description:
      "Tăng trưởng nhanh cùng công ty. Vị trí lead và quản lý luôn mở cho người có năng lực.",
  },
  {
    icon: Shield,
    title: "Phúc Lợi Đảm Bảo",
    description:
      "Lương cạnh tranh, thưởng KPI, bảo hiểm đầy đủ, và môi trường làm việc linh hoạt.",
  },
];

export function Why247() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Tại Sao Chọn{" "}
          <span className="text-brand-teal">247</span>?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-body">
          Lắp Đặt 247 là nền tảng công nghệ kết nối đại lý — thợ lắp đặt —
          khách hàng, mang lại trải nghiệm dịch vụ nhanh chóng và chuyên nghiệp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="border-border hover:border-brand-teal/50 transition-colors group"
            >
              <CardContent className="pt-6">
                <div className="h-12 w-12 flex items-center justify-center bg-brand-teal/10 text-brand-teal mb-4 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
