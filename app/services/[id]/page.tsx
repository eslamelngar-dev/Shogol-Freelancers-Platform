"use client";
import BreadCramp from "@/app/components/UI/BreadCramp";
import Carousel from "@/app/components/UI/Carousel";
import ServiceCard from "@/app/components/UI/ServiceCard";
import { Freelancers } from "@/app/data/Freelancers";
import { Services } from "@/app/data/Services";
import { Avatar, Container, Grid } from "@mui/material";
import { Clock9, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = Services.find((s) => s.id === Number(id));
  const freelancer = Freelancers.find((f) => f.id === service?.freelancerId);

  const [randomServices] = useState(() => {
    const filtered = Services.filter((s) => s.id !== Number(id));
    return filtered.sort(() => Math.random() - 0.5).slice(0, 6);
  });

  return (
    <div className="bg-[#f1f1f1] min-h-screen">
      <Container maxWidth="lg">
        <BreadCramp
          Links={[
            { title: "الرئيسية", Link: "/" },
            { title: "الخدمات", Link: "/services" },
            { title: service?.title ?? "...", Link: "" },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-4 pb-10" dir="rtl">
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-xl font-bold text-gray-800 mb-2">
                {service?.title}
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star size={15} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-gray-700">
                    {service?.avgRating}
                  </span>
                  <span>({service?.totalReviews} تقييم)</span>
                </div>
                <span>•</span>
                <span>{service?.ordersCount} طلب</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <Carousel Images={service?.images} />
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="font-bold text-gray-800 mb-2">وصف الخدمة</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service?.description}
              </p>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-5 justify-center">
              <p className="text-black p-2">خدمات قد تنال إعجابك</p>
              <hr className="border-gray-200 p-2" />
              <Grid container spacing={2}>
                {randomServices.map((service) => (
                  <Grid key={service.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <Link href={`/services/${service.id}`}>
                      <ServiceCard service={service} />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>

          <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
            <Link href={`/freelancers/${freelancer?.id}`}>
              <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 hover:shadow-md transition duration-200">
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    fontSize: "1.2rem",
                    bgcolor: "#1EAAAD",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {freelancer?.name.charAt(0).toUpperCase()}
                </Avatar>
                <div className="flex flex-col gap-0.5 flex-1">
                  <p className="font-bold text-gray-800 text-sm">
                    {freelancer?.name}
                  </p>
                  <p className="text-xs text-gray-400">{freelancer?.job}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <Star size={13} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-gray-700">
                    {freelancer?.rating}
                  </span>
                </div>
              </div>
            </Link>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <p className="text-black font-bold p-4 border-b border-gray-100">
                شراء الخدمة
              </p>
              <div className="flex flex-col divide-y divide-gray-100">
                {service?.packages.map((pkg) => (
                  <div key={pkg.tier} className="p-4 flex flex-col gap-3">
                    <p className="text-base font-bold text-gray-800">
                      {pkg.tier === "basic"
                        ? "أساسي"
                        : pkg.tier === "standard"
                          ? "متوسط"
                          : "مميز"}
                    </p>
                    <ul className="flex flex-col gap-1">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span className="text-[#1EAAAD] font-bold">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between text-sm text-[#777777]">
                      <p className="flex items-center gap-1 font-bold text-[#1EAAAD]">
                        ${pkg.price}
                        <span className="text-gray-400 font-normal">دولار</span>
                      </p>
                      <p className="flex items-center gap-1">
                        <Clock9 size={15} />
                        {pkg.deliveryDays} أيام
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <p className="text-black font-bold p-4 border-b border-gray-100">
                معلومات
              </p>
              <div className="p-4 flex flex-col gap-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>متوسط الرد</span>
                  <span className="font-bold text-gray-800">
                    {service?.avgResponse} دقيقة
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>وقت التسليم</span>
                  <span className="font-bold text-gray-800">
                    {service?.DeliverTime} أيام
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>عدد الطلبات</span>
                  <span className="font-bold text-gray-800">
                    {service?.ordersCount} طلب
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>التقييم</span>
                  <span className="font-bold text-gray-800">
                    ⭐ {service?.avgRating}
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
