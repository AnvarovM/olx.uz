import React from "react";
import { useTranslation } from "next-i18next";

const Categories = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto py-10 md:py-16">
      <h4 className="heading">{t("home:bosh_toifalar")}</h4>
      <div className="grid grid-cols-3 justify-items-center gap-2 space-x-4 py-10 px-4 md:px-0 lg:grid-cols-7 xl:grid-cols-9">
        <div className="group flex cursor-pointer flex-col">
          <img className="w-28 p-4 md:w-32" src="person02.png" alt="" />
          <a
            className="link mx-auto group-hover:bg-primary group-hover:text-white"
            href="#!"
          >
            {t("home:bolalar_dunyosi")}
          </a>
        </div>
        <div className="group flex cursor-pointer flex-col">
          <img className="w-28 p-4 md:w-32" src="person04.png" alt="" />
          <a
            className="link mx-auto group-hover:bg-primary group-hover:text-white"
            href="#!"
          >
            {t("home:ko'chmas_mulk")}
          </a>
        </div>
        <div className="group flex cursor-pointer flex-col">
          <img className="w-28 p-4 md:w-32" src="person04.png" alt="" />
          <a
            className="link mx-auto group-hover:bg-primary group-hover:text-white"
            href="#!"
          >
            {t("home:transport")}
          </a>
        </div>
        <div className="group flex cursor-pointer flex-col">
          <img className="w-28 p-4 md:w-32" src="person02.png" alt="" />
          <a
            className="link mx-auto group-hover:bg-primary group-hover:text-white"
            href="#!"
          >
            {t("home:ish")}
          </a>
        </div>
        <div className="group flex cursor-pointer flex-col">
          <img className="w-28 p-4 md:w-32" src="person04.png" alt="" />
          <a
            className="link mx-auto group-hover:bg-primary group-hover:text-white"
            href="#!"
          >
            {t("home:hayvonlar")}
          </a>
        </div>
        <div className="group flex cursor-pointer flex-col">
          <img className="w-28 p-4 md:w-32" src="person02.png" alt="" />
          <a
            className="link mx-auto group-hover:bg-primary group-hover:text-white"
            href="#!"
          >
            {t("home:elektr_jihozlari")}
          </a>
        </div>
        <div className="group flex cursor-pointer flex-col">
          <img className="w-28 p-4 md:w-32" src="person04.png" alt="" />
          <a
            className="link mx-auto group-hover:bg-primary group-hover:text-white"
            href="#!"
          >
            {t("home:xizmatlar")}
          </a>
        </div>
        <div className="group flex cursor-pointer flex-col">
          <img className="w-28 p-4 md:w-32" src="person02.png" alt="" />
          <a
            className="link mx-auto group-hover:bg-primary group-hover:text-white"
            href="#!"
          >
            {t("home:moda_va_stil")}
          </a>
        </div>
        <div className="group flex cursor-pointer flex-col">
          <img className="w-28 p-4 md:w-32" src="person04.png" alt="" />
          <a
            className="link mx-auto group-hover:bg-primary group-hover:text-white"
            href="#!"
          >
           {t("home:xobbi")}
          </a>
        </div>
        <div className="group flex cursor-pointer flex-col">
          <img className="w-28 p-4 md:w-32" src="person02.png" alt="" />
          <a
            className="link mx-auto group-hover:bg-primary group-hover:text-white"
            href="#!"
          >
            {t("home:tekinga_beraman")}
          </a>
        </div>
        <div className="group flex cursor-pointer flex-col">
          <img className="w-28 p-4 md:w-32" src="person04.png" alt="" />
          <a
            className="link mx-auto group-hover:bg-primary group-hover:text-white"
            href="#!"
          >
            {t("home:ayirboshlash")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
