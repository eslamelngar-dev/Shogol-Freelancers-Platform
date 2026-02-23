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
    <>
      <div className="bg-[#f8fafc] p-2 flex flex-col rounded-3xl">
        <div className="mb-3">
          <label className="text-[#02385A] font-medium">عنوان الطلب</label>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            type="text"
            className="w-full bg-white h-[3.43rem] mt-3"
          />
        </div>
        <div>
          <label className="text-[#02385A] font-medium">
            اكتب تفاصيل الطلب
          </label>
          <textarea
            value={form.describtion}
            onChange={(e) => setForm({ ...form, describtion: e.target.value })}
            className="w-full bg-white h-[8.81rem] mt-3"
            placeholder="صف مشروعك هنا"
          />
        </div>
        <div className="w-full flex justify-center my-3 items-center">
          <button
            onClick={handleSendRequest}
            className="bg-[#1eaaad] w-[15.43rem] h-[3.43rem] text-white rounded-2xl cursor-pointer"
          >
            {isLoading ? (
              <>
                <CircularProgress size={20} sx={{ color: "white" }} />
                <span>جاري الإرسال...</span>
              </>
            ) : (
              <span>التالي</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
