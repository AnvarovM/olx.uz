import React, { useState } from "react";
import { IoWarningOutline, IoCloseSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

import { useTranslation } from "next-i18next";

const Search = () => {
  const [modal, setModal] = useState(true);
  const { t } = useTranslation();

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="bg-secondary">
      <div
        className={
          modal
            ? "m-2 block flex items-center justify-between rounded-md bg-[#ffd6c9] p-2"
            : "hidden"
        }
      >
        <div className="flex items-center space-x-2 px-4">
          <IoWarningOutline className="text-3xl text-[#ff5636]" />
          <p className="text-sm text-primary">{t("home:ogohlantirish")}</p>
        </div>
        <div className="group flex items-center space-x-2">
          <a href="#!" className="underline__link">
          {t("home:batafsil_malumot")}
          </a>
          <IoCloseSharp
            onClick={closeModal}
            className="cursor-pointer text-xl text-primary hover:text-red-500"
          />
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl py-10 px-4">
        <div className="flex items-center rounded-md bg-white p-2">
          <FiSearch className="px-4 text-7xl text-primary" />
          <input
            className="mx-2 w-full bg-transparent outline-none"
            type="text"
            placeholder={t("home:home_qidiruv")}
          />
          <div className="flex items-center border-x border-gray-200 p-3">
            <GrLocation className="text-2xl text-primary" />
            <input
              className="mx-0 w-full bg-transparent p-2 outline-none md:mx-2"
              type="text"
              placeholder={t("home:home_qidiruv_viloyat")}
            />
          </div>
          <button className="group ml-2 box-border flex items-center space-x-2 rounded-md p-3 transition-all duration-200 hover:bg-primary">
            <p className="font-medium text-primary group-hover:text-white">
            {t("home:qidiruv")}
            </p>
            <FiSearch className="text-xl text-primary group-hover:text-white md:text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
