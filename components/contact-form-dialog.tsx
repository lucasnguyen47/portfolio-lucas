"use client";

import { useState } from "react";
import { X, Mail, Phone, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactFormDialog({
  open,
  onOpenChange,
}: ContactFormDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý submit form ở đây
    console.log("Form submitted:", formData);
    // Reset form và đóng dialog
    setFormData({ name: "", email: "", message: "" });
    onOpenChange(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="bg-white border-4 border-black rounded-3xl p-0 max-w-2xl max-h-[90vh] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="p-6 md:p-8 overflow-y-auto max-h-[90vh]">
          <div className="flex items-center justify-between mb-6">
            <DialogHeader className="flex-1">
              <DialogTitle className="text-3xl md:text-4xl font-bold text-[#0B0B0B] text-left">
                Liên hệ với tôi
              </DialogTitle>
            </DialogHeader>
            <button
              onClick={() => onOpenChange(false)}
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer shrink-0"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-base md:text-lg font-semibold text-[#0B0B0B]"
              >
                Tên của bạn
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Nhập tên của bạn"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-4 border-black rounded-xl px-4 md:px-6 h-14 md:h-16 text-base md:text-lg placeholder:text-gray-500 focus-visible:ring-4 focus-visible:ring-black/20"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-base md:text-lg font-semibold text-[#0B0B0B]"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-4 border-black rounded-xl px-4 md:px-6 h-14 md:h-16 text-base md:text-lg placeholder:text-gray-500 focus-visible:ring-4 focus-visible:ring-black/20"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-base md:text-lg font-semibold text-[#0B0B0B]"
              >
                Tin nhắn
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Nhập tin nhắn của bạn..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="border-4 border-black rounded-xl px-4 md:px-6 py-3 md:py-4 text-base md:text-lg placeholder:text-gray-500 focus-visible:ring-4 focus-visible:ring-black/20 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0B0B0B] text-white hover:bg-black/90 rounded-xl py-5 md:py-6 text-base md:text-lg font-semibold h-auto cursor-pointer"
            >
              Gửi tin nhắn
            </Button>
          </form>

          {/* Thông tin liên hệ ở cuối */}
          <div className="mt-8 pt-8 border-t-4 border-black">
            <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0B] mb-4">
              Thông tin liên hệ
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a
                  href="mailto:nikhil@helpinggeeks.com"
                  className="text-base md:text-lg text-[#393939] hover:text-[#0B0B0B] transition-colors cursor-pointer"
                >
                  nikhil@helpinggeeks.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <a
                  href="tel:+919000057810"
                  className="text-base md:text-lg text-[#393939] hover:text-[#0B0B0B] transition-colors cursor-pointer"
                >
                  +91-9000057810
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
