import React, { useState } from "react";
import { FaListUl, FaHeart } from 'react-icons/fa';
import { AiOutlineAppstore } from 'react-icons/ai';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const favorites = () => {
    const [isList, setIsList] = useState(true);
    const { t } = useTranslation();
  return (
    <div className="bg-[#f2f4f5]">
      <div className="bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <h4 className="heading py-4 md:py-8 text-left">{t("favorites:saralanganlar")}</h4>
          <div className="flex items-center justify-between">
            <p className="underline__link w-fit py-2">
            {t("favorites:saralanganlar")} (1)
            </p>
            <button className="btn__trans border-1 mb-3 border-primary bg-white py-1 px-8 text-primary hover:bg-primary hover:text-white">
            {t("favorites:o'chirish")}
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex items-center justify-end space-x-2 py-4 md:space-x-4">
          <p className="text-sm text-primary">{t("favorites:ro‘yxat_ko‘rinishi")}:</p>
          <FaListUl onClick={() => setIsList(true)} className={isList ? "text-lg text-primary" : "text-lg text-[#7f9799]"} />
          <AiOutlineAppstore onClick={() => setIsList(false)} className={isList ? "text-lg text-[#7f9799]" : "text-lg text-primary"} />
        </div>

        <div className={isList ? "flex flex-col gap-y-2 pb-10" : "w-full sm:w-fit p-4 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}>
            <div className={isList ? "group m-2 flex justify-between bg-white" : "group m-2 cursor-pointer bg-white"}>
                <div className="">
                    <img
                    className={isList ? "p-3 w-36" : "mx-auto w-72"}
                    src="https://mediapark.uz/upload/file/mp/products/images/ZiUWDlmoC7kHHL2gDV3uIDHUJhPZ-TmU.jpg"
                    alt=""
                    />
                    <p className="link m-3 cursor-pointer group-hover:bg-primary group-hover:text-white">
                    Коляска 3в1 Anex Sport Foxy 2017
                    </p>
                    <span className="flex items-center space-x-2 p-3">
                    <p className="text-primary">Eshonguzar</p>
                    <small className="text-gray-500">7 may</small>
                    </span>
                </div>
                <div className={isList ?  "flex flex-col items-center p-4 justify-between": "hidden"}>
                    <p className="font-semibold text-primary">50 000 у.е.</p>
                    <FaHeart className="text-primary text-2xl ml-auto cursor-pointer" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default favorites;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "favorites"])),
    },
  };
};