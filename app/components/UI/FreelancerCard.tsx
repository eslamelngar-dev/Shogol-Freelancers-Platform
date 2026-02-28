import { Freelancers } from "@/app/data/Freelancers";
import { Avatar } from "@mui/material";
import { MapPin, Star, ShoppingBag, Clock, Users } from "lucide-react";

interface Props {
  freelancer: (typeof Freelancers)[0];
}

export default function FreelancerCard({ freelancer }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-200 cursor-pointer p-4 flex flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <Avatar
          sx={{
            width: 64,
            height: 64,
            fontSize: "1.5rem",
            bgcolor: "#1EAAAD",
            fontWeight: 800,
            flexShrink: 0,
          }}
        >
          {freelancer.name.charAt(0).toUpperCase()}
        </Avatar>

        <div className="flex flex-col gap-1">
          <p className="font-bold text-gray-800">{freelancer.name}</p>
          <p className="text-sm text-gray-400">{freelancer.job}</p>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-1">
            {freelancer.bio}
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <MapPin size={12} />
            {freelancer.country}
          </div>
        </div>
      </div>

      <div className="w-px h-16 bg-gray-100 shrink-0" />

      <div className="flex flex-col items-center gap-3 shrink-0 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Star size={14} className="text-yellow-400 fill-yellow-400" />
          <span className="font-bold text-gray-700">{freelancer.rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <ShoppingBag size={14} className="text-[#1EAAAD]" />
          <span>{freelancer.ordersCompleted} طلب</span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={14} />
          <span>{freelancer.costumersCount} عميل</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>
            {freelancer.lastOnline === 0
              ? "متصل الآن"
              : `منذ ${freelancer.lastOnline} ساعة`}
          </span>
        </div>
      </div>
    </div>
  );
}
