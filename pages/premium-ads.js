import React, { useState } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

const premiumAds = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [activePrice, setActivePrice] = useState(0);
  const [activePayment, setActivePayment] = useState(1);

  const toggleTab = (index) => {
    setActivePrice(index);
  };

  const togglePayment = (index) => {
    setActivePayment(index);
  };

  const data = [
    {
      id: 0,
      price: "6 000",
    },
    {
      id: 2,
      price: "12 000",
    },
    {
      id: 3,
      price: "28 000",
    },
    {
      id: 42313,
      price: "48 000",
    },
    {
      id: 41312,
      price: "92 000",
    },
    {
      id: 421,
      price: "115 000",
    },
    {
      id: 444231,
      price: "300 000",
    },
    {
      id: 43141,
      price: "800 000",
    },
  ];
  return (
    <div className="bg-[#f2f4f5]">
      <div className="container mx-auto p-4 md:px-0">
        <span className="flex items-center space-x-2 py-8 md:space-x-6">
          <p className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white md:h-12 md:w-12">
            1
          </p>
          <h4 className="text-prmary text-lg font-semibold">
            {t("premium-ads:hisobni_toldirish")}
          </h4>
        </span>

        <ul className="w-[25rem] md:w-[40rem]">
          {data.map((item) => (
            <div
              className={
                activePrice === `${item.id}`
                  ? "my-2 flex cursor-pointer items-center rounded-md bg-[#3a77ff] p-6 text-white"
                  : "my-2 flex cursor-pointer items-center rounded-md bg-white p-6 text-primary"
              }
              onClick={() => toggleTab(`${item.id}`)}
            >
              <div
                className={
                  activePrice === `${item.id}`
                    ? "prices bg-white"
                    : "prices border-2 border-primary"
                }
              >
                <span
                  className={
                    activePrice === `${item.id}`
                      ? "h-2 w-2 rounded-full bg-[#3a77ff]"
                      : "h-2 w-2 rounded-full"
                  }
                ></span>
              </div>
              <li className="text-semibold text-lg">{item.price} сум</li>
            </div>
          ))}
        </ul>

        <span className="flex items-center space-x-2 py-8 md:space-x-6">
          <p className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white md:h-12 md:w-12">
            2
          </p>
          <h4 className="text-prmary text-lg font-semibold">
            {t("premium-ads:payment_method")}
          </h4>
        </span>

        <div className="flex items-center space-x-2">
          <img
            onClick={() => togglePayment(1)}
            className={
              activePayment === 1
                ? "price_payment_img border-blue-500"
                : "price_payment_img"
            }
            src="https://www.spot.uz/media/img/2017/12/hR3qbp15121014741213_l.jpg"
            alt=""
          />
          <img
            onClick={() => togglePayment(2)}
            className={
              activePayment === 2
                ? "price_payment_img border-blue-500"
                : "price_payment_img"
            }
            src="https://storage.kun.uz/source/4/S4953ZyJnGPaaUgLesfs_jDXvpHaTwqM.jpg"
            alt=""
          />
          <img
            onClick={() => togglePayment(3)}
            className={
              activePayment === 3
                ? "price_payment_img border-blue-500"
                : "price_payment_img"
            }
            src="http://uzdaily.uz/storage/img/logo/paynet.jpg"
            alt=""
          />
        </div>

        <div className="my-4 rounded-md bg-white p-6 md:p-8">
          <div className="flex cursor-pointer items-center justify-end space-x-2 md:space-x-4">
            <a onClick={() => router.push("/")} className="underline__link">
              {t("premium-ads:cancel")}
            </a>
            <button className="btn__trans border-primary bg-primary text-white hover:bg-white hover:text-primary">
              {t("premium-ads:pay")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default premiumAds;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "premium-ads"])),
    },
  };
};
