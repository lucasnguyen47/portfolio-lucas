"use client";

import { useState } from "react";
import { Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/contact-form-dialog";

export function Navigation() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <ContactFormDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
      <div className="container mx-auto px-4 pt-8 pb-4">
        <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>

          <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
            <a
              href="#home"
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity cursor-pointer"
            >
              Trang chủ
            </a>
            <a
              href="#about"
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity cursor-pointer"
            >
              Giới thiệu
            </a>
            <a
              href="#portfolio"
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity cursor-pointer"
            >
              Portfolio
            </a>
            {/* <button className="flex items-center gap-1 text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity cursor-pointer">
            Trang
            <ChevronDown className="w-4 h-4" />
          </button> */}
            <a
              href="#cart"
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity cursor-pointer"
            >
              Blog
            </a>
          </div>

          <Button
            onClick={() => setIsContactOpen(true)}
            className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] shrink-0 cursor-pointer"
          >
            <Mail className="w-10 h-10" strokeWidth={2.5} />
          </Button>
        </nav>
      </div>
    </>
  );
}
