import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const chat = () => {
  const [wallet, setWallet] = useState(false);
  const router = useRouter();

  const toggleWallet = () => {
    setWallet(!wallet);
  };
  return (
    <div className="bg-white px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h4 className="heading py-8 text-left">Xabarlar</h4>
          <div className="flex items-center space-x-2">
            <div className="relative flex items-center space-x-2">
              <p>
                Hisobingiz balansi: <small className="text-sm">0 сум</small>
              </p>
              <small
                onClick={toggleWallet}
                className="flex h-5 w-5 cursor-pointer items-start justify-center rounded-full border-2 border-primary font-semibold"
              >
                i
              </small>
              <div
                className={
                  wallet
                    ? "absolute top-8 right-0 w-[15rem] rounded-md bg-white p-4 shadow-lg md:w-[20rem]"
                    : "hidden"
                }
              >
                <div className="flex items-center justify-between py-2 text-primary">
                  <p>Hamyon</p>
                  <strong>0 сум</strong>
                </div>
                <small className="text-center text-primary">
                  pдоступны для всех платных услуг (рекламы, размещения
                  объявлений и покупки пакетов)
                </small>
              </div>
            </div>
            <div>
              <button
                onClick={() => router.push("/premium-ads")}
                className="btn__trans border-4 border-primary bg-primary text-white hover:bg-white hover:text-primary"
              >
                Hisobni to'ldirish
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="underline__link w-fit py-2">Xabarlar</p>
        </div>
      </div>
      <div className="bg-[#f2f4f5] h-screen">
        <div className="container mx-auto flex items-center space-x-4">
          <div className="w-[25rem] rounded-md bg-white mt-4">salom</div>
          <div className="rounded-md bg-white w-full mt-4">salom2</div>
        </div>
      </div>
    </div>
  );
};

export default chat;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "create-ad"])),
    },
  };
};
