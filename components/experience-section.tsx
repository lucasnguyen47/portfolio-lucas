import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ExperienceSection() {
  const experiences = [
    {
      period: "Tháng 1/2023 - Hiện tại",
      title: "Nhà Thiết Kế Sản Phẩm Di Động",
      description:
        "Chịu trách nhiệm thiết kế và phát triển các sản phẩm di động, tập trung vào trải nghiệm người dùng và giao diện hiện đại.",
      icon: "/images/agency.png",
    },
    {
      period: "Tháng 1/2021 - Tháng 12/2022",
      title: "Phó Giám Đốc Thiết Kế",
      description:
        "Lãnh đạo đội ngũ thiết kế, định hướng chiến lược thiết kế và đảm bảo chất lượng sản phẩm đạt tiêu chuẩn cao nhất.",
      icon: "/images/company.png",
    },
    {
      period: "Tháng 3/2020 - Tháng 12/2020",
      title: "Trưởng Phòng Thiết Kế Sản Phẩm",
      description:
        "Quản lý và phát triển các dự án thiết kế sản phẩm, phối hợp với các team khác để đảm bảo tính nhất quán và chất lượng.",
      icon: "/images/busines.png",
    },
    {
      period: "Tháng 9/2017 - Tháng 2/2020",
      title: "Nhà Thiết Kế Web",
      description:
        "Thiết kế và phát triển các website chuyên nghiệp, tối ưu hóa trải nghiệm người dùng và giao diện đẹp mắt.",
      icon: "/images/startup.png",
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Hãy xem qua{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">
                kinh nghiệm của tôi
              </span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Với nhiều năm kinh nghiệm trong ngành thiết kế, tôi đã làm việc
              với nhiều công ty và dự án đa dạng, tích lũy được kiến thức và kỹ
              năng chuyên sâu.
            </p>
            <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] cursor-pointer">
              <FileText className="w-5 h-5" />
              Xem CV đầy đủ
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]"
              >
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={exp.title}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[#393939] text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
