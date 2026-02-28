"use client";
import BreadCramp from "@/app/components/UI/BreadCramp";
import ServiceCard from "@/app/components/UI/ServiceCard";
import { Freelancers } from "@/app/data/Freelancers";
import { Services } from "@/app/data/Services";
import { Avatar, Container, Grid } from "@mui/material";
import {
  MapPin,
  Star,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function FreelancerDetails() {
  const { id } = useParams();
  const freelancer = Freelancers.find((f) => f.id === Number(id));
  const freelancerServices = Services.filter(
    (s) => s.freelancerId === Number(id),
  );
  const [activeTab, setActiveTab] = useState<"services" | "about">("services");

  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <Container maxWidth="lg">
        <BreadCramp
          Links={[
            { title: "الرئيسية", Link: "/" },
            { title: "المستقلون", Link: "/freelancers" },
            { title: freelancer?.name ?? "...", Link: "" },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-4 pb-10" dir="rtl">
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4">
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  fontSize: "2rem",
                  bgcolor: "#1EAAAD",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {freelancer?.name.charAt(0).toUpperCase()}
              </Avatar>

              <div className="flex flex-col gap-1 flex-1">
                <p className="text-xl font-bold text-gray-800">
                  {freelancer?.name}
                </p>
                <p className="text-sm text-gray-400">{freelancer?.job}</p>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <MapPin size={12} />
                  {freelancer?.country}
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="font-bold text-gray-800">
                  {freelancer?.rating}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => setActiveTab("services")}
                  className={`flex-1 py-3 text-sm font-bold transition cursor-pointer ${
                    activeTab === "services"
                      ? "text-[#1EAAAD] border-b-2 border-[#1EAAAD]"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  الخدمات ({freelancerServices.length})
                </button>
                <button
                  onClick={() => setActiveTab("about")}
                  className={`flex-1 py-3 text-sm font-bold transition cursor-pointer ${
                    activeTab === "about"
                      ? "text-[#1EAAAD] border-b-2 border-[#1EAAAD]"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  نبذة عني
                </button>
              </div>

              <div className="p-4">
                {activeTab === "services" ? (
                  freelancerServices.length > 0 ? (
                    <Grid container spacing={2}>
                      {freelancerServices.map((service) => (
                        <Grid key={service.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                          <Link href={`/services/${service.id}`}>
                            <ServiceCard service={service} />
                          </Link>
                        </Grid>
                      ))}
                    </Grid>
                  ) : (
                    <p className="text-center text-gray-400 py-10">
                      لا توجد خدمات بعد
                    </p>
                  )
                ) : (
                  <div className="flex flex-col gap-4">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {freelancer?.bio}
                    </p>
                    <hr className="border-gray-100" />
                    <div className="flex justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={15} className="text-[#1EAAAD]" />
                        <span>انضم في</span>
                      </div>
                      <span className="font-bold text-gray-700">
                        {new Date(
                          freelancer?.joinDate ?? "",
                        ).toLocaleDateString("ar-EG", {
                          year: "numeric",
                          month: "long",
                        })}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <p className="font-bold text-gray-800 p-4 border-b border-gray-100">
                تواصل معي
              </p>
              <div className="p-4 flex flex-col gap-3">
                <button className="w-full bg-[#1EAAAD] hover:bg-[#189799] text-white font-bold py-2 rounded-xl transition cursor-pointer">
                  إرسال رسالة
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 rounded-xl transition cursor-pointer">
                  طلب خدمة مخصصة
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <p className="font-bold text-gray-800 p-4 border-b border-gray-100">
                معلومات
              </p>
              <div className="p-4 flex flex-col gap-3 text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>الدولة</span>
                  <div className="flex items-center gap-1 font-bold text-gray-700">
                    <MapPin size={13} className="text-[#1EAAAD]" />
                    {freelancer?.country}
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>التخصص</span>
                  <span className="font-bold text-gray-700">
                    {freelancer?.job}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>تاريخ الانضمام</span>
                  <span className="font-bold text-gray-700">
                    {new Date(freelancer?.joinDate ?? "").toLocaleDateString(
                      "ar-EG",
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>آخر ظهور</span>
                  <span className="font-bold text-gray-700">
                    {freelancer?.lastOnline === 0
                      ? "متصل الآن"
                      : `منذ ${freelancer?.lastOnline} ساعة`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>الطلبات المكتملة</span>
                  <span className="font-bold text-gray-700">
                    {freelancer?.ordersCompleted} طلب
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>عدد العملاء</span>
                  <span className="font-bold text-gray-700">
                    {freelancer?.costumersCount} عميل
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
