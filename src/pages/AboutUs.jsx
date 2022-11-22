import React from 'react'

import { useTranslation } from "react-i18next";


function AboutUs() {

    const { t } = useTranslation();

    return (
        <div className='container text-center text-24 md:px-10 px-6 lg:px-64 py-9'>
            <h1 className='text-center text-blue md:text-42 text-24'>{t("about")}</h1>

            <p className='py-3 text-blue text-16 md:text-24'>{t("text1")}</p>
            <p className='py-3 text-blue text-16 md:text-24'>{t("text2")}</p>
            <p className='py-3 text-blue text-16 md:text-24'>{t("text3")}</p>
            <p className='py-3 text-blue text-16 md:text-24'>{t("text4")}</p>
            <p className='py-3 text-blue text-16 md:text-24'>{t("text5")}</p>
            <p className='py-3 text-blue text-16 md:text-24'>{t("text6")}</p>
            <p className='py-3 text-blue text-16 md:text-24'>{t("text7")}</p>
            <p className='py-3 text-blue text-16 md:text-24'>{t("text8")}</p>
            <p className='py-3 text-blue text-16 md:text-24'>{t("text9")}</p>
            <p className='py-3 text-blue text-16 md:text-24'>{t("text10")}</p>
            <p className='py-3 text-blue text-16 md:text-24'>{t("text11")}</p>
        </div>
    )
}

export default AboutUs