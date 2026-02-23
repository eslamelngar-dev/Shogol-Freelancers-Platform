"use client";
import { BellRing, Menu, MessageSquareText, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "الاعلانات", href: "/ads" },
    { name: "الطلبات", href: "/requests" },
    { name: "المشتغلين", href: "/freelancers" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-[#70707040] sticky top-0 z-99">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-[#29B1BE] to-[#6B79B9]" />
      <div className="h-[5.31rem] flex justify-between items-center px-4 sm:px-6 lg:px-20">
        <button
          className="lg:hidden w-[2.81rem] h-[2.81rem] bg-[#e5ebee] hover:bg-[#d5dbde] transition flex justify-center items-center rounded-xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X color="#31b0b3" /> : <Menu color="#31b0b3" />}
        </button>
        <div className="hidden lg:flex gap-6 xl:gap-15">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="no-underline">
              <p
                className={`text-[1.1rem] text-black ${
                  pathname === link.href ? "font-bold" : "font-normal"
                }`}
              >
                {link.name}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-5">
          <div className="flex gap-2 sm:gap-3">
            <button className="w-10 h-[2.81rem] sm:h-[2.81rem] bg-[#e5ebee] hover:bg-[#d5dbde] transition flex justify-center items-center rounded-xl cursor-pointer">
              <MessageSquareText color="#31b0b3" size={20} />
            </button>
            <button className="w-10 h-[2.81rem] sm:h-[2.81rem] bg-[#e5ebee] hover:bg-[#d5dbde] transition flex justify-center items-center rounded-xl cursor-pointer">
              <BellRing color="#31b0b3" size={20} />
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-5">
            <button className="bg-[#1EAAAD] text-white rounded-xl w-28 md:w-[10.06rem] h-[2.81rem] hover:bg-[#189799] cursor-pointer transition duration-200 text-sm md:text-base">
              كن مشتغل
            </button>
            <button className="text-[#1EAAAD] bg-white w-28w-[10.06rem] h-[2.81rem] hover:text-[#189799] cursor-pointer transition duration-200 text-sm md:text-base">
              تسجيل الدخول
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-[#70707020] px-4 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              <p
                className={`text-[1.1rem] text-black py-3 px-4 rounded-xl transition-colors ${
                  pathname === link.href
                    ? "font-bold bg-[#e5ebee]"
                    : "font-normal hover:bg-[#f5f5f5]"
                }`}
              >
                {link.name}
              </p>
            </Link>
          ))}

          <div className="sm:hidden flex flex-col gap-2 mt-2 border-t border-[#70707020] pt-4">
            <button className="bg-[#1EAAAD] text-white rounded-xl w-full h-[2.81rem] hover:bg-[#189799] cursor-pointer transition duration-200">
              كن مشتغل
            </button>
            <button className="text-[#1EAAAD] bg-white border border-[#1EAAAD] rounded-xl w-full h-[2.81rem] hover:text-[#189799] cursor-pointer transition duration-200">
              تسجيل الدخول
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}