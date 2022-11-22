import React from "react";

import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();

  const Send = (e) => {
    e.preventDefault();
  };
  
  return (
    <div id="contact" className="container">
      <h1 className="text-center md:text-42 text-24 pb-6">{t("contactus")}</h1>
      <form
        onSubmit={(e) => Send(e)}
        className="bg-white w-11/12 lg:w-6/12 mx-auto py-5 px-4 md:px-8 rounded-[20px]"
        action="#"
      >
        <div className="flex flex-col md:flex-row w-full justify-between md:gap-5">
          <input type="text " placeholder={t("name")} />
          <input type="text " placeholder={t("name")} />
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between md:gap-5">
          <input type="text" placeholder={t("name")} />
          <input type="text" placeholder={t("name")} />
        </div>
        <input type="text" placeholder={t("name")} />
        <textarea placeholder={t("name")} />
        <div className="flex w-full justify-end">
          <button type="submit" className="rounded-md text-black py-2 px-12 text-16 bg-yellow">
            {t("submit")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
