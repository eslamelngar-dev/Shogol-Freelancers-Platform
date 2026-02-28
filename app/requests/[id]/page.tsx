"use client";
import BreadCramp from "@/app/components/UI/BreadCramp";
import { Requests } from "@/app/data/Request";
import { Container } from "@mui/material";
import { Clock, DollarSign, Tag, MessageCircle, Users } from "lucide-react";
import { useParams } from "next/navigation";

export default function RequestDetails() {
  const { id } = useParams();
  const request = Requests.find((r) => r.id === Number(id));

  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <Container maxWidth="lg">
        <BreadCramp
          Links={[
            { title: "الرئيسية", Link: "/" },
            { title: "الطلبات", Link: "/requests" },
            { title: request?.title ?? "...", Link: "" },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-4 pb-10" dir="rtl">
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-3">
              <p className="text-xl font-bold text-gray-800">
                {request?.title}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Users size={15} />
                  <span>{request?.offersCount} عرض</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={15} />
                  <span>
                    {request?.postedAt
                      ? new Date(request.postedAt).toLocaleDateString("ar-EG", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : ""}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#1EAAAD] font-bold">
                  <DollarSign size={15} />
                  <span>{request?.price} دولار</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-3">
              <p className="font-bold text-gray-800">تفاصيل الطلب</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                {request?.content}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-3">
              <p className="font-bold text-gray-800 flex items-center gap-2">
                <Tag size={16} />
                الكلمات المفتاحية
              </p>
              <div className="flex flex-wrap gap-2">
                {request?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#f0fafa] text-[#1EAAAD] border border-[#1EAAAD] text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <p className="font-bold text-gray-800 p-4 border-b border-gray-100">
                تقديم عرض
              </p>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600 font-medium">
                    رسالتك
                  </label>
                  <textarea
                    rows={4}
                    placeholder="اكتب عرضك هنا..."
                    className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none resize-none"
                  />
                </div>

                <button className="w-full bg-[#1EAAAD] hover:bg-[#189799] text-white font-bold py-2 rounded-xl transition cursor-pointer">
                  إرسال العرض
                </button>
              </div>
            </div>

            <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold py-3 rounded-2xl transition cursor-pointer flex items-center justify-center gap-2 shadow-sm">
              <MessageCircle size={18} className="text-[#1EAAAD]" />
              تواصل مع صاحب الطلب
            </button>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <p className="font-bold text-gray-800 p-4 border-b border-gray-100">
                معلومات الطلب
              </p>
              <div className="p-4 flex flex-col gap-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>الميزانية</span>
                  <span className="font-bold text-[#1EAAAD]">
                    ${request?.price}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>عدد العروض</span>
                  <span className="font-bold text-gray-800">
                    {request?.offersCount} عرض
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>تاريخ النشر</span>
                  <span className="font-bold text-gray-800">
                    {request?.postedAt
                      ? new Date(request.postedAt).toLocaleDateString("ar-EG")
                      : ""}
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
