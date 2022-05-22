import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import toast, { Toaster } from "react-hot-toast";

import { Input } from "../components";
import { signup } from '../firebase'
import { client } from "../lib/client";

const Signup = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleSignup = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;

      console.log(email);
      try {
        
        router.push("/");
        toast.success("Successfully signed up");
      } catch (err) {
        alert(err);
      }
    },
    [router]
  );

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#3a77ff]">
      <div className="w-80 rounded-md bg-white md:w-96">
        <div className="flex items-center justify-between">
          <span
            onClick={() => router.push("/login")}
            className="login__signup_text border-gray-300 text-gray-400"
          >
            {t("register:tizimga_kirish")}
          </span>
          <span className="login__signup_text border-primary text-primary ">
            {t("register:royhatdan_otish")}
          </span>
        </div>
        <div className="p-8">
          <form onSubmit={handleSignup}>
            <div>
              <p className="py-2 text-sm text-gray-400">
                {t("register:email_yoki_telefon_raqami")}
              </p>
              <Input
                name="email"
                type="email"
                placeholder={t("register:email_yoki_telefon_raqami")}
                w="w-full"
              />
            </div>
            <div>
              <p className="py-2 text-sm text-gray-400">
                {t("register:parolni_kirting")}
              </p>
              <Input
                name="password"
                type="password"
                placeholder={t("register:parolni_kirting")}
                w="w-full"
              />
            </div>
            <p className="py-3 text-sm text-red-500">
              Maxfiy belgi 6 taan iborat bo'lishi kerak
            </p>

            <button
              className="my-2 w-full rounded-md bg-primary p-2 text-white"
              type="submit"
            >
              {t("register:royhatdan_otish")}
            </button>
            <p className="py-2 text-center text-xs text-gray-400">
              {t("register:warning_registr")}
            </p>
            <button
              type="button"
              className="flex w-full items-center rounded-lg bg-gray-200 py-2 shadow-2xl active:bg-gray-300"
            >
              <div className="mx-auto flex items-center">
                <FcGoogle className="text-3xl" />
                <span className="font-medium text-primary">oogle</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "register"])),
    },
  };
};
