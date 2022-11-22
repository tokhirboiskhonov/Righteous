import React from 'react'
import { logo } from '../assets/data'

import { useTranslation } from "react-i18next";

function Footer() {

    const { t } = useTranslation();

    return (
        <div className="w-full bg-blue">
            <div className="container py-12 md:px-6 px-5">
                <div className="flex items-center justify-between">
                    <img src={logo} alt="footer logo" />
                    <ul className='text-white flex w-1/2 justify-between flex-col gap-5 md:flex-row '>
                        <li>
                            <a href="#">{t("home")}</a>
                        </li>
                        <li>
                            <a href="#">{t("about")}</a>
                        </li>
                        <li>
                            <a href="#">{t("contact")}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer