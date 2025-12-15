"use client";

import { useState } from "react";
import { Mail, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/contact-form-dialog";

export function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <ContactFormDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-[42px] leading-[50px] md:text-[64px] font-bold md:leading-[85px]">
              Tôi là{" "}
              <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">
                Hòa Nguyễn,
              </span>{" "}
              một nhà thiết kế đồ họa đến từ{"  "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">
                Việt Nam
              </span>
            </h1>

            <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
              Chuyên tạo ra những trải nghiệm web độc đáo và sáng tạo, kết hợp
              giữa nghệ thuật và công nghệ để mang lại giá trị cho khách hàng.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
              <Button
                onClick={() => setIsContactOpen(true)}
                className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                Liên hệ với tôi
              </Button>
              <Button
                variant="outline"
                className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px] cursor-pointer"
              >
                <FolderOpen className="w-5 h-5" />
                Xem portfolio
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png"
                alt="Ảnh đại diện nhân vật minh họa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
