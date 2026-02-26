import { Search } from "lucide-react";

export default function SearchBar() {
    return (
      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[#39b2bf] transition-all duration-300">
        <Search size={18} className="text-[#39b2bf] shrink-0" />
        <input
          type="text"
          placeholder="ابحث عن خدمة..."
          className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent text-right"
        />
      </div>
    );
  }
