import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { Input } from "../components";

const createAd = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className="bg-[#f2f4f5] px-4 md:px-0">
      <div className="container mx-auto">
        <h4 className="heading py-8 text-left">{t("create-ad:elon_joylashtirish")}</h4>

        <div className="space-y-4">
          <div className="">
            <div className="rounded-md bg-white p-6">
              <h5 className="heading text-left text-lg">
              {t("create-ad:elon_haqida")}
              </h5>
              <p className="py-2 text-sm text-gray-400">{t("create-ad:sarlavhani_kiriting")}*</p>
              <Input w="w-[20rem] md:w-[40rem]" placeholder={t("create-ad:masalan_iPhone_11_kafolati_bilan")} />
            </div>

            <div className="rounded-md bg-white p-6">
              <p className="py-2 text-sm text-gray-400">{t("create-ad:rukn")}*</p>
              <div className="flex w-[20rem] md:w-[30rem] items-center rounded-md bg-gray-200">
                <input
                  className="flex-grow md:w-full bg-transparent text-sm outline-none p-3"
                  required
                  type="email"
                  placeholder={t("create-ad:bolimni_tanlangn")}
                />
                <div className="hover:bg-gray-300 p-3 cursor-pointer">
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="rounded-md bg-white p-6">
              <h5 className="heading text-left text-lg">
              {t("create-ad:rasmlar")}
              </h5>
              <p className="py-2 text-sm text-gray-400">{t("create-ad:rasmlar_p")}*</p>
              <input
                className="rounded-md bg-gray-200 p-3 text-sm outline-none"
                required
                type="file"
                placeholder={t("create-ad:description_placeholder")}
              />
            </div>
          </div>

          <div className="rounded-md bg-white p-6">
            <p className="py-2 text-sm text-gray-400">{t("create-ad:tavsif")}*</p>
            <textarea
              placeholder={t("create-ad:description_placeholder")}
              rows="8"
              className="w-[20rem] md:w-[40rem] text-primary rounded-md bg-[#e5e7eb] bg-transparent p-3 outline-none"
              spellcheck="false"
            ></textarea>
            <p className="py-2 text-sm text-gray-400">{t("create-ad:description_warning")}*</p>
          </div>

          <div className="">
            <div className="rounded-md bg-white p-6">
              <h5 className="heading text-left text-lg">
              {t("create-ad:aloqa_uchun_malumotlar")}
              </h5>
              <p className="py-2 text-sm text-gray-400">{t("create-ad:joylashuv")}*</p>
              <Input w="w-[20rem] md:w-[40rem]" placeholder="Jizzax" />
            </div>

            <div className="rounded-md bg-white p-6">
              <p className="py-2 text-sm text-gray-400">{t("create-ad:email_манзил")}*</p>
                <Input w="w-[20rem] md:w-[40rem]" placeholder="" />
            </div>

            <div className="my-4 rounded-md bg-white p-6 md:p-8">
              <div className="flex cursor-pointer items-center justify-end space-x-2 md:space-x-4">
                <a onClick={() => router.push("/")} className="underline__link">
                  {t("create-ad:bekor_qilish")}
                </a>
                <button className="btn__trans border-primary bg-primary text-white hover:bg-white hover:text-primary">
                  {t("create-ad:elon_joylashtirish")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createAd;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "create-ad"])),
    },
  };
};