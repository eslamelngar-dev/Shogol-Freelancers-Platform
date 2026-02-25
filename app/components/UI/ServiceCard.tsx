"use client";
import { Categories } from "@/app/data/Categories";
import { Freelancers } from "@/app/data/Freelancers";
import { Avatar } from "@mui/material";
import { Banknote, Calendar, Star } from "lucide-react";
import Image from "next/image";

interface serviceCardProp {
  service: {
    title: string;
    freelancerId: number;
    thumbnail: string;
    categorysId: number;
    description: string;
    avgRating: number;
    totalReviews: number;
    packages: {
      price: number;
      deliveryDays: number;
    }[];
  };
}

export default function ServiceCard({ service }: serviceCardProp) {
  const category = Categories.find((c) => c.id === service.categorysId);
  const freelancer = Freelancers.find((f) => f.id === service.freelancerId);

  return (
    <div className="group w-full max-w-[18.62rem] h-[25.68rem] mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="relative w-full h-44 overflow-hidden">
        <Image
          src={service.thumbnail}
          fill
          alt={service.title}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-[#1eaaad] text-[0.65rem] font-bold px-2 py-1 rounded-full">
          {category?.name || "غير محدد"}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar
              sx={{
                width: 34,
                height: 34,
                fontSize: "1rem",
                bgcolor: "#1eaaad",
                fontWeight:800
              }}
            >
              {freelancer?.name.charAt(0).toUpperCase()}
            </Avatar>
            <p className="font-bold text-[0.8rem] text-gray-700">
              {freelancer?.name}
            </p>
          </div>

          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
            <Star size={13} color="#fcbf29" fill="#fcbf29" />
            <p className="font-bold text-[0.8rem] text-gray-700">
              {service.avgRating}
            </p>
            <p className="text-[0.7rem] text-gray-400">
              ({service.totalReviews})
            </p>
          </div>
        </div>

        <hr className="border-gray-100" />

        <div className="flex flex-col gap-1">
          <h5 className="text-[0.95rem] font-bold text-gray-800 line-clamp-2 text-right leading-snug ">
            {service.title}
          </h5>
          <p className="text-[0.78rem] text-gray-400 line-clamp-2 text-right leading-relaxed">
            {service.description}
          </p>
        </div>

        <hr className="border-gray-100" />

        <div className="flex items-center justify-around">
          <div className="flex items-center gap-1 bg-teal-50 px-3 py-1.5 rounded-full">
            <Banknote size={15} color="#1eaaad" />
            <p className="text-[0.8rem] font-bold text-[#1eaaad]">
              ${service.packages[0]?.price}
            </p>
          </div>

          <div className="flex items-center gap-1 bg-teal-50 px-3 py-1.5 rounded-full">
            <Calendar size={15} color="#1eaaad" />
            <p className="text-[0.8rem] font-bold text-[#1eaaad]">
              {service.packages[0]?.deliveryDays} يوم
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
