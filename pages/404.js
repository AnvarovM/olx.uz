import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const notFound = () => {
  return <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-primary">404</h1>
        <p className="text-lg font-semibold text-primary">Page not found</p>
      </div>
  </div>;
};

export default notFound;

export const getStaticProps = async ({ locale }) => {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["home"])),
      },
    };
  };
  