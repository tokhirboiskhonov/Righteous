import React from 'react'
import Righteous from "../assets/img/logotip.svg"
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();
    return (
        <div className='home-bg md:h-screen w-full h-72'>
            <img className='righteous__img' src={Righteous} alt="righteous-logo" width={600} height={300}/>
            <h1 className='legal__text'>{t("Юридические услуги для Вашего Бизнеса в Узбекистане")}</h1>
        </div>
    )
}

export default Home