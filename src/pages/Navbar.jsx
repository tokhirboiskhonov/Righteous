import React from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { logoUz } from "../assets/data";

const Navbar = () => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const ChangeLang = () => {
    let lang = document.getElementById("select").value;
    i18next.changeLanguage(lang);
  };

  const ChangeLang2 = () => {
    let lang = document.getElementById("select2").value;
    i18next.changeLanguage(lang);
  };

  return (
    <div className="w-full top-0 left-0 bg-blue text-white">
      <div className="md:flex items-center justify-between pb-6 pt-6 md:px-10 px-7 container">
        <div className="font-bold text-2xl cursor-pointer flex items-center  text-gray-800 ">
          <logoUz />
          <img className="w-20 h-7 md:h-[40px] md:w-[80px]" src={logoUz} alt="logo" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute  right-8 top-5 cursor-pointer md:hidden sm:block "
        >
          <i className={`text-white bx ${open ? "bx-x" : "bx-menu"}`}></i>
        </div>

        <div className="lang">
          <select
            className="block mobile absolute top-6 right-20 md:hidden h-8"
            id="select"
            onChange={ChangeLang}
          >
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
        </div>

        <ul
          className={`text-white md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto gap-10  ${
            open
              ? "flex flex-col  top-[60px] bg-blue z-10 w-[100%] h-auto text-center pt-8 transition-all delay-200"
              : "top-[-490px] "
          }`}
        >
          <li>
            <a href="#link">{t("home")}</a>
          </li>
          <li>
            <a href="#link">{t("about")}</a>
          </li>
          <li>
            <a href="#link">{t("contact")}</a>
          </li>
        </ul>
        <div className="flex gap-4">
          <select className="hidden md:block" id="select2" onChange={ChangeLang2}>
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
          <button className="rounded-md text-black py-2 px-12 text-16 bg-yellow hidden md:block">
            Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
