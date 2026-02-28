"use client";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md flex flex-col gap-6">
        <div className="flex flex-col gap-1 text-center">
          <p className="text-2xl font-bold text-gray-800">مرحباً بك</p>
          <p className="text-sm text-gray-400">سجل دخولك للمتابعة</p>
        </div>

        <div className="flex flex-col gap-4" dir="rtl">
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
                placeholder="ادخل كلمة المرور"
                className="flex-1 py-3 px-2 text-sm outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-xs text-[#1EAAAD] hover:underline"
            >
              نسيت كلمة المرور؟
            </Link>
          </div>

          <button className="w-full bg-[#1EAAAD] hover:bg-[#189799] text-white font-bold py-3 rounded-xl transition cursor-pointer">
            تسجيل الدخول
          </button>

          <div className="flex items-center gap-3">
            <hr className="flex-1 border-gray-200" />
            <span className="text-xs text-gray-400">أو</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <button className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 text-sm">
            تسجيل الدخول بـ Google
            <GoogleIcon/>
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          ليس لديك حساب؟{" "}
          <Link
            href="/register"
            className="text-[#1EAAAD] font-bold hover:underline"
          >
            إنشاء حساب
          </Link>
        </p>
      </div>
    </div>
  );
}
