import { MAIL_TO } from "@/constants/directions/contact-direct.direction";
import { listMenu } from "@/constants/menu/listMenu.menu";
import listSocialMenu from "@/constants/menu/listSocial.menu";

const Footer = () => {
    return (
        <div className="bg-black mt-20 border-t-2 pt-10">
            <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
                <div className="p-5 sm:w-2/12">
                    <div className="text-xl text-indigo-600 font-bold w-auto md:text-left text-center">Menu</div>
                    <ul className="text-xl text-white flex flex-wrap justify-center gap-4 md:flex-col md:gap-0">
                        {listMenu.map((menu, index) => (
                            <li key={index} className="my-2">
                                <a className="hover:text-indigo-600" href={menu.href}>
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="p-5 sm:w-7/12 text-center sm:pl-20">
                    <h3 className="font-bold text-xl text-indigo-600 mb-4">Description</h3>
                    <p className="text-white text-xl mb-10">The sport guy who enjoys creating the frames</p>
                </div>
                <div className="p-5 sm:w-3/12">
                    <div className="text-xl text-indigo-600 font-bold w-auto md:text-left text-center ">Contact Us</div>
                    <ul>
                        <li className="my-2 text-xl">
                            <a className="text-xl text-white flex flex-wrap justify-center gap-4 md:flex-col md:gap-0">
                                DISTRICT 2, HO CHI MINH CITY
                            </a>
                        </li>
                        <li className="my-2 text-white no-underline text-xl">
                            <a
                                href={`${MAIL_TO}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl text-white flex flex-wrap justify-center gap-4 md:flex-col md:gap-0"
                            >
                                {listMenu[5]?.title} thanhtung2888@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center space-x-5 bg-black text-white p-4">
                {listSocialMenu.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-slate-100 underline"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
            <div className="bg-black w-full text-white text-center py-5">
                © Copyright 2024. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;
