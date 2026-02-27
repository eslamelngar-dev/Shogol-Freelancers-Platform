import { Requests } from "@/app/data/Request";
import { Clock, Tag, DollarSign } from "lucide-react";

interface Props {
  request: (typeof Requests)[0];
}

export default function RequestCard({ request }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition duration-200 cursor-pointer flex flex-row justify-between items-center gap-4">
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-base font-bold text-gray-800">{request.title}</p>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {request.content}
        </p>
        <div className="flex flex-wrap gap-2">
          {request.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#f0fafa] text-[#1EAAAD] border border-[#1EAAAD] text-xs px-2 py-1 rounded-full flex items-center gap-1"
            >
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="w-px h-16 bg-gray-100 shrink-0" />

      <div className="flex flex-col items-center gap-3 shrink-0 text-sm text-gray-500">
        <div className="flex items-center gap-1 text-[#1EAAAD] font-bold">
          <DollarSign size={15} />
          {request.price} دولار
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          {new Date(request.postedAt).toLocaleDateString("ar-EG")}
        </div>
        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
          {request.offersCount} عرض
        </span>
      </div>
    </div>
  );
}
