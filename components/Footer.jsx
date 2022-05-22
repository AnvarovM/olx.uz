import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="border-t border-primary bg-[#f2f4f5] px-4 md:px-0">
      <div className="container mx-auto grid grid-cols-1 py-10 md:grid-cols-2 md:py-20">
        <div>
          <div className="grid grid-cols-1 space-y-4 md:grid-cols-2 md:space-y-0">
            <div className="flex flex-col space-y-2">
              <a href="#!" className="link">
                {t("home:footer1_1")}
              </a>
              <a href="#!" className="link">
                {t("home:footer1_2")}
              </a>
              <a href="#!" className="link">
              {t("home:footer1_3")}
              </a>
              <a href="#!" className="link">
              {t("home:footer1_4")}
              </a>
              <a href="#!" className="link">
              {t("home:footer1_5")}
              </a>
              <a href="#!" className="link">
              {t("home:footer1_6")}
              </a>
              <a href="#!" className="link">
              {t("home:footer1_7")}
              </a>
              <a href="#!" className="link flex items-center">
                <p>{t("home:footer1_8")}</p>
                <MdOutlineKeyboardArrowDown />
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#!" className="link">
              {t("home:footer2_1")}
              </a>
              <a href="#!" className="link">
              {t("home:footer2_2")}
              </a>
              <a href="#!" className="link">
              {t("home:footer2_3")}
              </a>
              <a href="#!" className="link">
              {t("home:footer2_4")}
              </a>
              <a href="#!" className="link">
              {t("home:footer2_5")}
              </a>
              <a href="#!" className="link">
              {t("home:footer2_6")}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3 pt-4">
            <div className="group flex cursor-default items-center space-x-1">
              <img
                className="w-4 grayscale group-hover:grayscale-0"
                src="https://flagpedia.net/data/flags/h240/mf.webp"
                alt=""
              />
              <small className="text-[0.65rem] text-gray-500">OLX.fr</small>
            </div>
            <div className="group flex cursor-default items-center space-x-1">
              <img
                className="w-4 grayscale group-hover:grayscale-0"
                src="https://flagpedia.net/data/flags/h240/gb-eng.webp"
                alt=""
              />
              <small className="text-[0.65rem] text-gray-500">OLX.en</small>
            </div>
            <div className="group flex cursor-default items-center space-x-1">
              <img
                className="w-4 grayscale group-hover:grayscale-0"
                src="https://flagpedia.net/data/flags/h240/sa.webp"
                alt=""
              />
              <small className="text-[0.65rem] text-gray-500">OLX.sa</small>
            </div>
            <div className="group flex cursor-default items-center space-x-1">
              <img
                className="w-4 grayscale group-hover:grayscale-0"
                src="https://flagpedia.net/data/flags/h240/ie.webp"
                alt=""
              />
              <small className="text-[0.65rem] text-gray-500">OLX.irl</small>
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-2 pt-4 md:pt-0">
          <img
            className="w-[7.5rem] cursor-pointer"
            src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
            alt=""
          />
          <img
            className="w-28 cursor-pointer"
            src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
            alt=""
          />
          <span class="fi fi-gr"></span> <span class="fi fi-gr fis"></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
