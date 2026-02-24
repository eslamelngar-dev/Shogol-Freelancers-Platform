import {
  Check,
  DollarSign,
  HandCoins,
  Lightbulb,
  Mails,
  MapPinned,
  Star,
  UserSearch,
} from "lucide-react";
import Stepper from "../../UI/Stepper";

export default function StepSection(){
  return(
    <>
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
    </>
  )
}