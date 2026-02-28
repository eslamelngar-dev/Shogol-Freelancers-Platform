"use client";
import { Lock, Mail, User, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";

export default function RegisterPage() {
  const [role, setRole] = useState<"client" | "freelancer">("client");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md flex flex-col gap-6">
        <div className="flex flex-col gap-1 text-center">
          <p className="text-2xl font-bold text-gray-800">إنشاء حساب</p>
          <p className="text-sm text-gray-400">أنشئ حسابك وابدأ رحلتك</p>
        </div>

        <div
          className="flex rounded-xl overflow-hidden border border-gray-200"
          dir="rtl"
        >
          <button
            onClick={() => setRole("client")}
            className={`flex-1 py-2.5 text-sm font-bold transition cursor-pointer ${
              role === "client"
                ? "bg-[#1EAAAD] text-white"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            صاحب عمل
          </button>
          <button
            onClick={() => setRole("freelancer")}
            className={`flex-1 py-2.5 text-sm font-bold transition cursor-pointer ${
              role === "freelancer"
                ? "bg-[#1EAAAD] text-white"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            مستقل
          </button>
        </div>

        <div className="flex flex-col gap-4" dir="rtl">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              الاسم الكامل
            </label>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#1EAAAD] transition">
              <span className="px-3 text-gray-400">
                <User size={18} />
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="أدخل اسمك الكامل"
                className="flex-1 py-3 px-2 text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              البريد الإلكتروني
            </label>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#1EAAAD] transition">
              <span className="px-3 text-gray-400">
                <Mail size={18} />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="flex-1 py-3 px-2 text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              رقم الهاتف
            </label>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#1EAAAD] transition">
              <span className="px-3 text-gray-400">
                <Phone size={18} />
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+20 1234567890"
                className="flex-1 py-3 px-2 text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              كلمة المرور
            </label>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#1EAAAD] transition">
              <span className="px-3 text-gray-400">
                <Lock size={18} />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ادخل كلمة مرور"
                className="flex-1 py-3 px-2 text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              تأكيد كلمة المرور
            </label>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#1EAAAD] transition">
              <span className="px-3 text-gray-400">
                <Lock size={18} />
              </span>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="ادخل كلمة المرور مجددا"
                className="flex-1 py-3 px-2 text-sm outline-none"
              />
            </div>
          </div>

          <button className="w-full bg-[#1EAAAD] hover:bg-[#189799] text-white font-bold py-3 rounded-xl transition cursor-pointer">
            إنشاء الحساب
          </button>

          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-200" />
            <span className="text-xs text-gray-400">أو</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <button className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 text-sm">
            التسجيل بـ Google
            <GoogleIcon />
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          لديك حساب بالفعل؟{" "}
          <Link
            href="/login"
            className="text-[#1EAAAD] font-bold hover:underline"
          >
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}
