import { MAIL_TO } from "@/constants/directions/contact-direct.direction";
import listSocialMenu from "@/constants/menu/listSocial.menu";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        <section className="bg-black text-white h-screen flex flex-col md:flex-row items-center justify-center text-center">
            <motion.div
                className="w-full md:w-1/2 h-full flex flex-col items-center justify-center text-left px-6 space-y-6"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.div className="text-5xl md:text-9xl font-extrabold tracking-wider" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>TUNGAGE</motion.div>

                <motion.div className="mt-6 md:mt-10 text-2xl md:text-4xl lg:text-5xl text-red-500 space-y-2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
                    <p>| Athlete</p>
                    <p>| Director</p>
                    <p>| MC - TV Host | Content Creator</p>
                </motion.div>

                <motion.div className="mt-6 md:mt-10 text-2xl md:text-2xl lg:text-5xl space-y-2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
                    <a
                        href={`${MAIL_TO}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-slate-100 underline-none"
                    >
                        {listSocialMenu.find(social => social.title === "Gmail")?.icon} thanhtung2888@gmail.com
                    </a>
                </motion.div>
                <motion.div className="flex items-center justify-center space-x-5 mt-6" initial="hidden" animate="show" variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}>
                    {listSocialMenu.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            className={`hover:underline decoration-slate-100 underline w-8 h-8`}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

            </motion.div>

            <motion.div
                className="w-full md:w-1/2 h-full flex items-center justify-center mt-6 md:mt-0 relative overflow-hidden"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.img
                    src="/images/header.png"
                    alt="TUNGAGE Portfolio"
                    className="w-full h-full object-cover bg-black"
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                />
            </motion.div>

        </section >
    );
};

export default HomePage;
