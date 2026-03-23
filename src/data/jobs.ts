export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Contract";
  summary: string;
  description: string[];
  requirements: string[];
  benefits: string[];
  larkFormUrl: string;
}

export const jobs: Job[] = [
  {
    id: "admin-ops-hcm",
    title: "Admin Vận Hành (OPS)",
    department: "Vận Hành",
    location: "TP. Hồ Chí Minh",
    salary: "10 - 14.2 triệu",
    type: "Full-time",
    summary:
      "Hỗ trợ xử lý đơn hàng, gán thợ thủ công khi hệ thống timeout, giám sát chất lượng dịch vụ lắp đặt.",
    description: [
      "Tiếp nhận và xử lý đơn hàng lắp đặt từ đại lý trên hệ thống",
      "Gán thợ thủ công khi hệ thống tự động không match được trong thời gian quy định",
      "Giám sát tiến độ và chất lượng đơn hàng",
      "Phối hợp với team CSKH (Hà Nội) xử lý khiếu nại, sự cố",
      "Báo cáo vận hành hàng ngày cho COO",
    ],
    requirements: [
      "Tốt nghiệp Cao đẳng trở lên",
      "Có kinh nghiệm vận hành, logistics, hoặc CSKH tối thiểu 1 năm",
      "Thành thạo Excel/Google Sheets, quen làm việc trên các hệ thống CRM",
      "Giao tiếp tốt, chịu được áp lực, có thể làm việc theo ca",
      "Ưu tiên: có kinh nghiệm trong ngành dịch vụ lắp đặt, sửa chữa",
    ],
    benefits: [
      "Lương cạnh tranh 10 - 14.2 triệu/tháng",
      "Thưởng KPI theo hiệu suất vận hành",
      "Được đào tạo bài bản về hệ thống và quy trình",
      "Cơ hội thăng tiến trong môi trường startup tăng trưởng nhanh",
      "Bảo hiểm theo quy định",
    ],
    larkFormUrl: "https://lapdat247.jp.larksuite.com/share/base/form/shrjpjkxqvHuLyMoEcSbeNUJiVb",
  },
  {
    id: "bd-specialist",
    title: "Chuyên Viên Phát Triển Kinh Doanh (BD)",
    department: "Kinh Doanh",
    location: "TP. Hồ Chí Minh",
    salary: "Thỏa thuận",
    type: "Full-time",
    summary:
      "Tìm kiếm, tiếp cận và onboarding đại lý mới lên nền tảng 247. Xây dựng mối quan hệ B2B bền vững.",
    description: [
      "Tìm kiếm và tiếp cận đại lý tiềm năng (cửa hàng điện máy, nhà phân phối, đại lý lắp đặt)",
      "Tư vấn, giới thiệu nền tảng 247 và hỗ trợ đại lý đăng ký, onboarding",
      "Quản lý tài khoản đại lý (Account Manager), hỗ trợ đại lý sử dụng hệ thống",
      "Đàm phán chính sách hợp tác, theo dõi doanh số đại lý",
      "Báo cáo kinh doanh và đề xuất chiến lược phát triển kênh",
    ],
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành Kinh doanh, Marketing hoặc tương đương",
      "Tối thiểu 2 năm kinh nghiệm B2B sales hoặc phát triển kênh phân phối",
      "Kỹ năng đàm phán, thuyết trình và xây dựng quan hệ tốt",
      "Có phương tiện di chuyển, sẵn sàng đi thị trường",
      "Ưu tiên: có network trong ngành điện lạnh, điện máy, xây dựng",
    ],
    benefits: [
      "Lương cứng + hoa hồng hấp dẫn theo doanh số",
      "Được đào tạo sản phẩm và kỹ năng bán hàng B2B",
      "Môi trường startup năng động, tự chủ trong công việc",
      "Cơ hội trở thành Team Lead khi mở rộng",
      "Bảo hiểm theo quy định + phụ cấp di chuyển",
    ],
    larkFormUrl: "https://lapdat247.jp.larksuite.com/share/base/form/shrjpjkxqvHuLyMoEcSbeNUJiVb",
  },
];
