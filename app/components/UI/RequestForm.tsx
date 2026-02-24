// RequestForm.tsx
"use client";
import { CircularProgress } from "@mui/material";
import { useState } from "react";

export default function RequestForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    describtion: "",
  });

  async function handleSendRequest() {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setForm({ ...form, title: "", describtion: "" });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-[#f8fafc] p-2 sm:p-3 md:p-4 flex flex-col rounded-2xl md:rounded-3xl">
      <div className="mb-2 md:mb-3">
        <label className="text-[#02385A] font-medium text-sm md:text-base">
          عنوان الطلب
        </label>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          type="text"
          className="w-full bg-white h-10 md:h-[3.43rem] mt-2 md:mt-3 rounded-lg px-3 border border-gray-200 focus:outline-none focus:border-[#1eaaad]"
        />
      </div>
      <div>
        <label className="text-[#02385A] font-medium text-sm md:text-base">
          اكتب تفاصيل الطلب
        </label>
        <textarea
          value={form.describtion}
          onChange={(e) => setForm({ ...form, describtion: e.target.value })}
          className="w-full bg-white h-24 md:h-[8.81rem] mt-2 md:mt-3 rounded-lg p-3 border border-gray-200 focus:outline-none focus:border-[#1eaaad] resize-none"
          placeholder="صف مشروعك هنا"
        />
      </div>
      <div className="w-full flex justify-center my-2 md:my-3 items-center">
        <button
          onClick={handleSendRequest}
          className="bg-[#1eaaad] w-full sm:w-48 md:w-[15.43rem] h-10 md:h-[3.43rem] text-white rounded-xl md:rounded-2xl cursor-pointer text-sm md:text-base hover:bg-[#179a9d] transition-colors flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <CircularProgress size={16} sx={{ color: "white" }} />
              <span>جاري الإرسال...</span>
            </>
          ) : (
            <span>التالي</span>
          )}
        </button>
      </div>
    </div>
  );
}