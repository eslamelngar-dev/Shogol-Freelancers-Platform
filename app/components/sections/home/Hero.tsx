import { BriefcaseBusiness, CircleStar, Clock8, HandCoins } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const features = [
    { title: "مفهوم جديد", icon: CircleStar },
    { title: "حرية في التعامل", icon: BriefcaseBusiness },
    { title: "تثمين الوقت", icon: Clock8 },
    { title: "شمولية في الخدمات", icon: HandCoins },
  ];

  return (
    <div className="relative w-full min-h-[41.87rem] rounded-br-[4rem] sm:rounded-br-[6rem] lg:rounded-br-[10rem] flex justify-center items-center py-16 px-4 sm:px-8 overflow-hidden">
      <video
        src="/homePage/laptopBackground.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 w-full max-w-5xl flex flex-col justify-center items-start text-white gap-10">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-4">
            <p className="text-[2.5rem] sm:text-[3.2rem] lg:text-[4.2rem] font-bold leading-tight">
              منصة شغل
            </p>
            <p className="text-[1rem] sm:text-[1.2rem] lg:text-[1.56rem] font-light leading-relaxed max-w-2xl">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها
            </p>
          </div>
          <Link href="/services">
            <button className="bg-white text-[#02385A] w-48 sm:w-[15.43rem] h-14 sm:h-[4.06rem] rounded-2xl font-semibold text-[1rem] sm:text-[1.1rem] hover:bg-[#f0f0f0] transition duration-200 cursor-pointer">
              تصفح الخدمات
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-2 items-center font-bold text-[0.95rem] sm:text-[1rem]"
            >
              <feature.icon className="shrink-0" size={22} />
              <p>{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
