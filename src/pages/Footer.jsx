import React from "react";
import { Link } from "react-scroll";

import LogoRu from "../assets/icons/logo";

import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-blue text-white">
      <div className="container py-12 md:px-6 px-5">
        <div className="flex items-center justify-between">
          <LogoRu width={100} height={50} />

          <ul className="text-white flex w-1/2 justify-between flex-col gap-5 md:flex-row ">
            <li>
              <Link to={"home"}>{t("home")}</Link>
            </li>
            <li>
              <Link to={"about"}>{t("about")}</Link>
            </li>
            <li>
              <Link to={"contact"}>{t("contact")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
