import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { RiChat1Line } from "react-icons/ri";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { useTranslation } from "next-i18next";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(true);
  const [lang, setLang] = useState(true);
  const { t } = useTranslation();
  const router = useRouter();

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="bg-primary py-2 transition duration-150 md:py-3">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        <Link href="/">
          <Image
            className="cursor-pointer object-contain"
            src="/logo.png"
            width={60}
            height={50}
          />
        </Link>
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="items-ce flex divide-x">
            <span onClick={() => router.push("/uz", "/uz", { locale: "uz" })}>
              <p onClick={() => setLang(true)} className=" nav__lang">O`Z</p>
            </span>
            <span onClick={() => router.push("/ru", "/ru", { locale: "ru" })}>
              <p onClick={() => setLang(false)} className="nav__lang">РУ</p>
            </span>
          </div>
          <div className="group hidden md:inline-flex cursor-pointer items-center space-x-2">
            <RiChat1Line className="text-xl text-white group-hover:text-gray-500" />
            <p className="nav__link">{t("home:xabarlar")}</p>
          </div>
          <div onClick={() => router.push("/favorites")} className="group relative flex cursor-pointer items-center space-x-2">
            <FaRegHeart className="text-xl text-white group-hover:text-gray-500" />
            <span className="absolute -top-3 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#2769ff] text-xs text-white group-hover:opacity-70">
              0
            </span>
          </div>
          <div className="group relative flex cursor-pointer items-center space-x-1 md:space-x-2">
            <FaRegUser className="text-xl text-white group-hover:text-gray-500" />
            <div onClick={toggleDropdown} className="flex items-center">
            <p className="nav__link">
            {t("home:mening_profilim")}
            </p>
            <MdOutlineKeyboardArrowDown className="text-lg text-white group-hover:text-gray-500" />
            </div>
            <div
              className={
                dropdown
                  ? "hidden"
                  : "absolute top-10 right-0 flex w-[11rem] flex-col rounded-md bg-white"
              }
            >
              <div className="flex items-center p-3">
                <img
                  className="mr-1 h-12 w-12 rounded-full object-contain"
                  src="/facemask.svg"
                  alt="nav avatar"
                />
                <span className="flex flex-col">
                  <small className="text-sm font-semibold text-primary">
                    username
                  </small>
                  <small className="text-xs text-gray-500">id:82745623</small>
                </span>
              </div>
              <ul className="list-none z-50">
                <li
                  onClick={() => router.push("/login")}
                  className="nav__dropdown__li hover:bg-[#cbf7ee] hover:text-blue-500"
                >
                  {t("home:kirish")}
                </li>
                <li className="nav__dropdown__li whitespace-nowrap">
                  {t("home:elonlar")} <sup className="text-blue-400 truncate">{t("home:yangi_versiya")}</sup>
                </li>
                <li className="nav__dropdown__li">{t("home:nomzod_profili")}</li>
                <li onClick={() => router.push("/chat")} className="nav__dropdown__li">{t("home:xabarlar")}</li>
                <li onClick={() => router.push("/create-ad")} className="nav__dropdown__li">{t("home:elon_berish")}</li>
                <li
                  onClick={() => router.push("/premium-ads")}
                  className="nav__dropdown__li"
                >
                  {t("home:premium_rek")}
                </li>
                <li className="nav__dropdown__li">{t("home:sozlamalar")}</li>
                <li className="nav__dropdown__li hover:bg-[#ffd6c9] hover:text-red-600">
                {t("home:chiqish")}
                </li>
              </ul>
            </div>
          </div>
          <button onClick={() => router.push("/create-ad")} className="btn__trans hidden md:block border-white bg-white px-4 text-xs text-primary hover:bg-primary hover:text-white md:text-base">
            {t("home:elon_berish")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
