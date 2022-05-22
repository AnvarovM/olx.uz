import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import GoogleLogin from "react-google-login";

import { Input } from "../components";
import { useAuthContext } from "../context/Auth";
import app from "../firebase";
import { client } from "../lib/client";

const notify = () => toast.success("It is not added yet.");

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const router = useRouter();
  const { t } = useTranslation();
  const { currentUser } = useAuthContext();

  // const handleLogin = useCallback(
  //   async event => {
  //     event.preventDefault();
  //     const { email, password } = event.target.elements;
  //     try {
  //       await app
  //         .auth()
  //         .signInWithEmailAndPassword(email.value, password.value);
  //       history.push("/");
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },
  //   [router]
  // );

  // google singIn
  const signInWithGoogle = () => {
    const provider = new app.auth.GoogleAuthProvider();
    app
      .auth()
      .signInWithPopup(provider)
      .then((re) => {
        console.log(re);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#3a77ff]">
      <div className="w-80 rounded-md bg-white md:w-96">
        <div className="flex items-center justify-between">
          <span className="login__signup_text border-primary text-primary">
            {t("register:tizimga_kirish")}
          </span>
          <span
            onClick={() => router.push("/signup")}
            className="login__signup_text border-gray-300 text-gray-400"
          >
            {t("register:royhatdan_otish")}
          </span>
        </div>
        <div className="p-8">
          <form>
            <div>
              <p className="py-2 text-sm text-gray-400">
                {t("register:email_yoki_telefon_raqami")}
              </p>
              <Input
                name="email"
                type="email"
                onChange={(event) => setLoginEmail(event.target.value)}
                placeholder={t("register:email_yoki_telefon_raqami")}
                w="w-full"
              />
            </div>
            <div>
              <p className="py-2 text-sm text-gray-400">
                {t("register:parolni_kirting")}
              </p>
              <Input
                name="email"
                type="password"
                onChange={(event) => setLoginPassword(event.target.value)}
                placeholder={t("register:parolni_kirting")}
                w="w-full"
              />
            </div>
            <p className="cursor-pointer py-3 text-sm text-primary hover:underline">
              {t("register:yangi_parolni_yaratish")}
            </p>

            <button
              className="my-2 w-full rounded-md bg-primary p-2 text-white"
              type="submit"
            >
              {t("register:tizimga_kirish")}
            </button>
            <p className="py-2 text-center text-xs text-gray-400">
              {t("register:warning_registr")}
            </p>

            <GoogleLogin
              clientId="498262116043-j8afv5ttuup981dqqd7k9b0lenif7hem.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  type="button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="flex w-full items-center rounded-lg bg-gray-200 py-2 shadow-2xl active:bg-gray-300"
                >
                  <div className="mx-auto flex items-center">
                    <FcGoogle className="text-3xl" />
                    <span className="font-medium text-primary">oogle</span>
                  </div>
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "register"])),
    },
  };
};
