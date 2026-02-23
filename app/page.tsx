import Hero from "./components/sections/home/Hero";
import Container from "@mui/material/Container";
import RequestForm from "./components/UI/RequestForm";
import { CalendarClock } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <Container maxWidth="lg">
          <div className="relative mb-5 py-10 w-full after:content-[''] after:absolute after:bottom-0 after:w-15 after:h-1.5 after:rounded-2xl after:bg-[#17B8BC] flex justify-center">
            <p className=" text-[#02385A] font-bold text-[2.81rem]">
              لماذا طلب عرض سعر افضل؟
            </p>
          </div>
          <div className="flex gap-2">
            <div>
              <div>
                <p className="text-[#1EAAAD] text-[2.5rem]">معلومات</p>
              </div>
              <div className="relative my-5 py-10 w-full after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-15 after:h-1.5 after:rounded-2xl after:bg-[#17B8BC] flex justify-center">
                <p className="text-[#37383B] text-[3.5rem] font-bold">
                  لماذا طلب عرض السعر ..؟
                </p>
              </div>
              <div className="text-[#8F8F8F] font-normal text-[1.5rem]">
                <p>اولا : ستطلب ولن تبحث وستوفر عنا البحث</p>
                <p>ثانيا : ستكشف سعر السوق للخدمة التى تبحث عنها</p>
                <p>ثالثا : ستتصفح السيرة الذكية للمشتغلين الجاهزين لخدمتك</p>
                <p>
                  رابعا : ستختار السعر و المشتغل الانسب لك بكل ثقه وراحه بال
                </p>
              </div>
            </div>

            <div className="w-[45%]">
              <div className="bg-[#f8fafc] p-5 flex flex-col ">
                <RequestForm />
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-10 justify-between items-center">
            <div className="relative w-fit mt-10">
              <Image
                src="/homePage/teamWork.jpg"
                width={500}
                height={500}
                alt="teamWork"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-[#02385A] opacity-40 rounded-2xl"></div>
            </div>
            <div className="flex gap-5 mt-10 justify-center items-center">
              <div className="bg-white flex flex-col gap-5 justify-center items-center w-[15.31rem] h-[20.12rem] shadow-2xl rounded-2xl">
                <CalendarClock color="#1EAAAD" size={70} />
                <p className="text-[#02385A] text-[1.5rem]">توفير الوقت</p>
              </div>
              <div className="bg-white flex flex-col gap-5 justify-center items-center w-[15.31rem] h-[20.12rem] shadow-2xl rounded-2xl">
                <CalendarClock color="#1EAAAD" size={70} />
                <p className="text-[#02385A] text-[1.5rem]">توفير الوقت</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
