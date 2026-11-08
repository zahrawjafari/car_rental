"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#F5F7F6] flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-lg">
        <Link href="/login/home" className="text-2xl font-bold text-[#123D32]">
          CarRental
        </Link>

        <h1 className="text-3xl font-bold mt-10">خوش آمدید!</h1>

        <p className="text-gray-500 mt-3">
          برای ورود به حساب خود اطلاعات را وارد کنید.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/login/home";
          }}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">ایمیل</label>

            <input
              type="email"
              required
              placeholder="example@email.com"
              className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">رمز عبور</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="رمز عبور"
                className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:border-green-600"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-3 text-sm text-gray-500"
              >
                {showPassword ? "مخفی" : "نمایش"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#16835D] text-white rounded-xl p-3 font-semibold hover:bg-[#116B4B]"
          >
            ورود
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          حساب کاربری ندارید؟{" "}
          <Link href="/login/signup" className="text-green-700 font-semibold">
            ثبت‌نام
          </Link>
        </p>
      </div>
    </main>
  );
}
