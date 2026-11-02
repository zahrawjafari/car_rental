"use client";
import { useState } from "react";
import Link from "next/link";
export default function LoginPage() {
  const [language, setLanguage] = useState<"fa" | "en">("fa");
  const [showPassword, setShowPassword] = useState(false);

  const isFa = language === "fa";

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className="min-h-screen bg-[#F5F7F6] flex items-center justify-center p-5"
    >
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* بخش معرفی */}
        <section className="hidden md:flex flex-col justify-between bg-[#123D32] text-white p-12">
          <div>
            <h1 className="text-3xl font-bold">CarRental</h1>
            <p className="mt-2 text-green-100 text-sm">
              {isFa
                ? "اجاره خودرو، آسان و مطمئن"
                : "Easy and reliable car rental"}
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold leading-relaxed">
              {isFa
                ? "سفر بعدی تو از اینجا شروع می‌شود."
                : "Your next journey starts here."}
            </h2>

            <p className="mt-5 text-green-100 leading-8">
              {isFa
                ? "خودروی مورد علاقه‌ات را انتخاب کن و با خیال راحت به مقصدت برس."
                : "Choose your favorite car and enjoy a comfortable journey."}
            </p>
          </div>

          <p className="text-xs text-green-200">© 2026 CarRental</p>
        </section>

        {/* فرم ورود */}
        <section className="p-7 sm:p-12">
          <div className="flex justify-between items-center mb-10">
            <Link
              href="/login/home"
              className="text-2xl font-bold text-[#123D32]"
            >
              CarRental
            </Link>

            <button
              onClick={() => setLanguage(isFa ? "en" : "fa")}
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm hover:bg-gray-50"
            >
              {isFa ? "English" : "فارسی"}
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {isFa ? "خوش آمدید!" : "Welcome back!"}
            </h2>

            <p className="text-gray-500 mt-3">
              {isFa
                ? "برای ورود به حساب کاربری خود اطلاعات را وارد کنید."
                : "Enter your details to access your account."}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/login/home";
            }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isFa ? "ایمیل" : "Email"}
              </label>

              <input
                type="email"
                required
                placeholder={isFa ? "example@email.com" : "example@email.com"}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#16835D] focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isFa ? "رمز عبور" : "Password"}
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder={
                    isFa ? "رمز عبور خود را وارد کنید" : "Enter your password"
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#16835D] focus:ring-2 focus:ring-green-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute top-1/2 -translate-y-1/2 text-sm text-gray-500 ${
                    isFa ? "left-4" : "right-4"
                  }`}
                >
                  {showPassword
                    ? isFa
                      ? "مخفی کردن"
                      : "Hide"
                    : isFa
                      ? "نمایش"
                      : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-[#16835D]" />
                {isFa ? "مرا به خاطر بسپار" : "Remember me"}
              </label>

              <button type="button" className="text-[#16835D] hover:underline">
                {isFa ? "فراموشی رمز عبور؟" : "Forgot password?"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#16835D] hover:bg-[#116B4B] text-white font-semibold py-3.5 rounded-xl transition"
            >
              {isFa ? "ورود به حساب" : "Sign in"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            {isFa ? "حساب کاربری ندارید؟" : "Don't have an account?"}{" "}
            <Link
              href="/login/signup"
              className="text-[#16835D] font-semibold hover:underline"
            >
              {isFa ? "ثبت‌نام کنید" : "Sign up"}
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
