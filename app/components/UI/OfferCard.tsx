import { Offers } from "@/app/data/Offers";
import { Freelancers } from "@/app/data/Freelancers";
import { Clock, DollarSign, Star } from "lucide-react";

interface Props {
  offer: (typeof Offers)[0];
}

export default function OfferCard({ offer }: Props) {
  const freelancer = Freelancers.find((f) => f.id === offer.freelancerId);

  return (
    <div className="bg-white rounded-2xl p-5 w-full shadow-sm border border-gray-100 hover:shadow-md transition duration-200 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#1EAAAD] flex items-center justify-center text-white font-bold text-lg">
            {freelancer?.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-800 text-sm">
              {freelancer?.name}
            </p>
            <p className="text-xs text-gray-400">{freelancer?.job}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span className="font-bold text-gray-700">
                {freelancer?.rating}
              </span>
              <span>({freelancer?.costumersCount} عميل)</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={13} className="text-gray-400" />
          <span className="text-xs text-gray-400">
            {new Date(offer.postedAt).toLocaleDateString("ar-EG")}
          </span>
        </div>
      </div>

      <hr className="border-gray-100" />

      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
        {offer.message}
      </p>

      <hr className="border-gray-100" />

      <div className="flex items-center justify-between">
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-1 text-[#1EAAAD] font-bold">
            <DollarSign size={15} />
            {offer.price} دولار
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Clock size={14} />
            {offer.deliveryDays} أيام
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#1EAAAD] hover:bg-[#189799] text-white text-xs font-bold px-4 py-2 rounded-xl transition cursor-pointer">
            قبول العرض
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-4 py-2 rounded-xl transition cursor-pointer">
            تواصل
          </button>
        </div>
      </div>
    </div>
  );
}
