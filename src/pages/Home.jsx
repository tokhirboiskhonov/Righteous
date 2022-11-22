import React from "react";
import { useTranslation } from "react-i18next";

import Logo from "../assets/icons/logo";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-bg w-full text-blue flex flex-col justify-center items-center">
      <Logo className="righteous__img" width={600} height={300} />
      <h1 className="legal__text">{t("Юридические услуги для Вашего Бизнеса в Узбекистане")}</h1>
    </div>
  );
}

export default Home;
