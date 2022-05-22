import React from "react";
import { useTranslation } from "next-i18next";

const FooterHero = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-primary py-7">
        <div className="mx-auto px-4 md:px-0 flex max-w-5xl items-center justify-between">
          <h4 className="text-lg font-semibold text-white">
            {t("home:footer_banner_text")}
          </h4>
          <button className="btn__trans border-white bg-white px-4 text-xs text-primary hover:bg-primary hover:text-white md:text-base">
          {t("home:batafsil")}
          </button>
        </div>
      </div>
      <div className="flex flex-col px-4 md:px-0 items-center justify-center bg-[#cbf7ee] py-10 md:py-16">
        <img
          className="py-4"
          src="https://upload.wikimedia.org/wikipedia/commons/9/9e/OLX_green_logo.svg"
          alt=""
        />
        <p className="mx-auto max-w-3xl text-center text-sm text-primary">
          {t("home:about_olx")}
        </p>
      </div>
      <div className=" px-4 md:px-0 bg-gray-100 py-8 md:py-16">
        <p className="text-center text-sm text-primary">
        {t("home:footer_banner_text2")}
        </p>
      </div>
    </div>
  );
};

export default FooterHero;
