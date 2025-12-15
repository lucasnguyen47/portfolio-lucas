"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ContactFormDialog } from "@/components/contact-form-dialog";

export function ServicesSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const services = [
    {
      title: "Thiết kế web",
      description:
        "Tạo ra những website hiện đại, đẹp mắt và tối ưu trải nghiệm người dùng với công nghệ mới nhất.",
      image: "/images/web-design.svg",
    },
    {
      title: "Thiết kế UI/UX",
      description:
        "Thiết kế giao diện và trải nghiệm người dùng chuyên nghiệp, tập trung vào tính khả dụng và thẩm mỹ.",
      image: "/images/ui-ux-design.svg",
    },
    {
      title: "Thiết kế sản phẩm",
      description:
        "Phát triển và thiết kế sản phẩm số từ ý tưởng đến hiện thực, đảm bảo chất lượng và hiệu quả.",
      image: "/images/product-design.svg",
    },
    {
      title: "Nghiên cứu người dùng",
      description:
        "Phân tích hành vi và nhu cầu người dùng để tạo ra giải pháp thiết kế phù hợp và hiệu quả nhất.",
      image: "/images/user-research.svg",
    },
    {
      title: "Đồ họa chuyển động",
      description:
        "Tạo ra những animation và motion graphics sống động, thu hút và tăng tính tương tác cho sản phẩm.",
      image: "/images/motion-graphics.svg",
    },
  ];

  return (
    <>
      <ContactFormDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
                Bộ dịch vụ{" "}
                <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">
                  đa dạng của tôi
                </span>
              </h2>
              <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
                Tôi cung cấp các dịch vụ thiết kế chuyên nghiệp, từ thiết kế web
                đến nghiên cứu người dùng, đáp ứng mọi nhu cầu của bạn.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
                >
                  <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={382}
                      height={328}
                      className="w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="px-8 pb-8 flex-1 flex flex-col">
                    <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">
                      {service.title}
                    </h3>
                    <p className="text-[18px] leading-[30px] font-medium text-[#393939]">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-8">
                  <Image
                    src="/images/get-in-touch.svg"
                    alt="Liên hệ"
                    width={92}
                    height={92}
                    className="w-[92px] h-[92px]"
                  />
                </div>
                <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">
                  Liên hệ với tôi
                </h3>
                <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                  Bạn đang tìm kiếm một dịch vụ khác? Hãy liên hệ với tôi, rất
                  có thể tôi sẽ có thể giúp đỡ bạn!
                </p>
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px] cursor-pointer"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Liên hệ với tôi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
