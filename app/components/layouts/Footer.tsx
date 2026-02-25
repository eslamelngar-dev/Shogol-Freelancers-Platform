import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "الخدمات", href: "/services" },
  { label: "المستقلون", href: "/freelancers" },
  { label: "المدونة", href: "/blog" },
  { label: "من نحن", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

const contactInfo = [
  { icon: Mail, text: "support@shaghel.com" },
  { icon: Phone, text: "+20 100 123 4567" },
  { icon: MapPin, text: "الاسكندرية، جمهورية مصر العربية" },
];

export default function Footer() {
  return (
    <footer className="bg-[#02385a] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-bold">
                شغ<span className="text-[#1EAAAD]">ل</span>
              </h2>
              <p className="text-gray-400 text-sm mt-3 leading-7">
                منصة عربية متخصصة في ربط أصحاب الأعمال بأفضل المستقلين المحترفين
                لتطوير مشاريعهم وتنمية أعمالهم.
              </p>
            </div>
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="bg-white/10 hover:bg-[#1EAAAD] p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold border-b border-[#1EAAAD] pb-3">
              روابط سريعة
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-[#1EAAAD] transition-colors duration-300 text-sm group"
                  >
                    <ChevronLeft
                      size={14}
                      className="group-hover:-translate-x-1 transition-transform duration-300 text-[#1EAAAD]"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold border-b border-[#1EAAAD] pb-3">
              تواصل معنا
            </h3>
            <ul className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, text }, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-400 text-sm"
                >
                  <div className="bg-[#1EAAAD]/20 p-2 rounded-full shrink-0">
                    <Icon size={15} className="text-[#1EAAAD]" />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 mt-1">
              <p className="text-sm text-gray-400">اشترك في نشرتنا البريدية</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 bg-white/10 text-white placeholder:text-gray-500 text-sm px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#1EAAAD] transition-all min-w-0"
                />
                <button className="bg-[#1EAAAD] hover:bg-[#178a8d] px-4 py-2 rounded-lg text-sm font-bold transition-colors duration-300 shrink-0">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} شغل. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-[#1EAAAD] text-xs transition-colors duration-300"
            >
              سياسة الخصوصية
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-[#1EAAAD] text-xs transition-colors duration-300"
            >
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
