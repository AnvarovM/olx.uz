import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import { Ads } from "./";
import { client } from "../lib/client";

const PremiumAds = ({ pins }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-secondary">
      <Ads />
      <div className="container mx-auto py-10 md:py-16">
        <h4 className="heading">{t("home:premium_takliflar")}</h4>
        <div className="grid grid-cols-1 p-5 py-10 md:grid-cols-2 md:p-0 md:py-16 lg:grid-cols-4">
          <div className="group m-2 cursor-pointer bg-white">
            <img
              className="mx-auto w-72"
              src="https://images.satu.kz/65252891_kolyaska-3v1-anex.jpg"
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
          <div className="group m-2 cursor-pointer bg-white">
            <img
              className="mx-auto w-72"
              src="https://images.satu.kz/65252891_kolyaska-3v1-anex.jpg"
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
          <div className="group m-2 cursor-pointer bg-white">
            <img
              className="mx-auto w-72"
              src="https://images.satu.kz/65252891_kolyaska-3v1-anex.jpg"
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
          <div className="group m-2 cursor-pointer bg-white">
            <img
              className="mx-auto w-72"
              src="https://images.satu.kz/65252891_kolyaska-3v1-anex.jpg"
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
        </div>
      </div>
    </div>
  );
};

export default PremiumAds;
