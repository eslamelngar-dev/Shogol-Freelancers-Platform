import Hero from "./components/sections/home/Hero";
import Container from "@mui/material/Container";
import RequestForm from "./components/UI/RequestForm";
import {
  CalendarClock,
  Check,
  Coins,
  DollarSign,
  HandCoins,
  Lightbulb,
  Mails,
  MapPinned,
  Star,
  UserSearch,
} from "lucide-react";
import Image from "next/image";
import Stepper from "./components/UI/Stepper";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <Container maxWidth="lg">
          <div className="relative mb-5 py-6 md:py-10 w-full after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-15 after:h-1.5 after:rounded-2xl after:bg-[#17B8BC] flex justify-center">
            <p className="text-[#02385A] font-bold text-xl sm:text-2xl md:text-3xl lg:text-[2.81rem] text-center px-4">
              لماذا طلب عرض سعر افضل؟
            </p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-2">
            <div className="flex-1">
              <div>
                <p className="text-[#1EAAAD] text-xl sm:text-2xl md:text-[2.5rem] text-center lg:text-right">
                  معلومات
                </p>
              </div>
              <div className="relative my-3 md:my-5 py-6 md:py-10 w-full after:content-[''] after:absolute after:bottom-0 after:right-1/2 lg:after:right-0 after:translate-x-1/2 lg:after:translate-x-0 after:w-15 after:h-1.5 after:rounded-2xl after:bg-[#17B8BC] flex justify-center">
                <p className="text-[#37383B] text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-bold text-center lg:text-right">
                  لماذا طلب عرض السعر ..؟
                </p>
              </div>
              <div className="text-[#8F8F8F] font-normal text-sm sm:text-base md:text-lg lg:text-[1.5rem] space-y-2 text-center lg:text-right px-4 lg:px-0">
                <p>اولا : ستطلب ولن تبحث وستوفر عنا البحث</p>
                <p>ثانيا : ستكشف سعر السوق للخدمة التى تبحث عنها</p>
                <p>ثالثا : ستتصفح السيرة الذكية للمشتغلين الجاهزين لخدمتك</p>
                <p>
                  رابعا : ستختار السعر و المشتغل الانسب لك بكل ثقه وراحه بال
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[45%]">
              <div className="bg-[#f8fafc] p-3 md:p-5 flex flex-col">
                <RequestForm />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-6 md:mt-10 justify-between items-center">
            <div className="relative w-full md:w-fit mt-6 md:mt-10">
              <Image
                src="/homePage/teamWork.jpg"
                width={500}
                height={500}
                alt="teamWork"
                className="rounded-2xl w-full md:w-125 h-auto"
              />
              <div className="absolute inset-0 bg-[#02385A] opacity-40 rounded-2xl"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-6 md:mt-10 justify-center items-center w-full md:w-auto">
              <div className="bg-white flex flex-col gap-3 md:gap-5 justify-center items-center w-full sm:w-48 md:w-[15.31rem] h-60 md:h-[20.12rem] shadow-2xl rounded-2xl">
                <Coins
                  color="#1EAAAD"
                  size={50}
                  className="md:w-17.5 md:h-17.5"
                />
                <p className="text-[#02385A] text-base md:text-[1.5rem] text-center">
                  تكشف اسعار السوق
                </p>
              </div>
              <div className="bg-white flex flex-col gap-3 md:gap-5 justify-center items-center w-full sm:w-48 md:w-[15.31rem] h-60 md:h-[20.12rem] shadow-2xl rounded-2xl">
                <CalendarClock
                  color="#1EAAAD"
                  size={50}
                  className="md:w-17.5 md:h-17.5"
                />
                <p className="text-[#02385A] text-base md:text-[1.5rem] text-center">
                  توفير الوقت
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-10">
            <div className="w-full text-center p-3 md:p-5">
              <p className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.75rem] text-[#21b3b6] font-bold">
                كل اللي عليك!
              </p>
            </div>
            <div className="h-full w-full p-4 md:p-10 mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
              <div className="flex flex-col gap-4 md:gap-5 w-full lg:w-[90%] items-center lg:items-start">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-[3rem] text-[#21b3b6] font-extrabold max-w-full lg:max-w-60 text-center lg:text-right">
                  كل اللي عليك كونك مشتغل
                </p>
                <div className="w-full flex justify-center lg:justify-start px-1">
                  <Stepper
                    steps={[
                      { title: "اكتشف نفسك", Icon: Lightbulb },
                      { title: "أبرز مهاراتك", Icon: Star },
                      { title: "استقبل طلباتك", Icon: Mails },
                      { title: "استلم فلوسك", Icon: HandCoins },
                    ]}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 md:gap-5 items-center lg:items-start">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-[3rem] text-[#21b3b6] font-extrabold max-w-full lg:max-w-60 text-center lg:text-right">
                  كل اللي عليك كونك عميل
                </p>
                <div className="w-full flex justify-center lg:justify-start px-1">
                  <Stepper
                    steps={[
                      { title: "اطلب مشتغل", Icon: UserSearch },
                      { title: "اكتشف سعر السوق", Icon: DollarSign },
                      { title: "اختر المناسب لك", Icon: MapPinned },
                      { title: "اغلق طلبك", Icon: Check },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
