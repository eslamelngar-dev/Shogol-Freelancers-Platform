"use client";
import BreadCramp from "@/app/components/UI/BreadCramp";
import Carousel from "@/app/components/UI/Carousel";
import ServiceCard from "@/app/components/UI/ServiceCard";
import { Services } from "@/app/data/Services";
import { Container, Grid } from "@mui/material";
import { Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = Services.find((s) => s.id === Number(id));
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
            <div className="bg-white"></div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
