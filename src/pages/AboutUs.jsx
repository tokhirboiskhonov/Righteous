import React from "react";

import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <section className="container text-center text-24 md:px-10 px-6 lg:px-64 py-9" id="about">
      <h2 className="text-center text-blue md:text-42 text-24">{t("about")}</h2>

      <p className="py-3 text-blue text-16 md:text-24">
        <b>
          <i>{t("text1")}</i>
        </b>
      </p>
      <p className="py-3 text-blue text-16 md:text-24">
        <i>{t("text2")}</i>
      </p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text3")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text4")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text5")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text6")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text7")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text8")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text9")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text10")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text11")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text12")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text13")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text14")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text15")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text16")}</p>
      <p className="py-3 text-blue text-16 md:text-24">{t("text17")}</p>
      <p className="py-3 text-blue text-16 md:text-24">
        <b>{t("text18")}</b>
      </p>
    </section>
  );
}

export default AboutUs;
