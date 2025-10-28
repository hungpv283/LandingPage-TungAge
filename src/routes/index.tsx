import {
  CONTACT_PAGE,
  CONTENT_CREATOR_PAGE,
  DIRECTOR_PAGE,
  FREESTYLE_FOOTBALL_PAGE,
  HOME_PAGE,
} from "@/constants/directions/link.direction";
import HomePage from "@/pages/home/home.page";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import FreestylePage from "@/pages/freestyle/freestyle.page";
import Director from "@/pages/director/director.page";
import Contact from "@/pages/contact/contact.page";
import Content from "@/pages/content-creator/content.page";
import { AnimatePresence, motion } from "framer-motion";


const MotionPage: React.FC<React.PropsWithChildren> = ({ children }) => (
  <motion.div
    initial={{ opacity: 1, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const AppRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to={HOME_PAGE} replace />} />
        <Route path={HOME_PAGE} element={<MotionPage><HomePage /></MotionPage>} />
        <Route
          path={FREESTYLE_FOOTBALL_PAGE}
          element={<MotionPage><FreestylePage /></MotionPage>}
        />
        <Route
          path={DIRECTOR_PAGE}
          element={<MotionPage><Director /></MotionPage>}
        />
        <Route
          path={CONTENT_CREATOR_PAGE}
          element={<MotionPage><Content /></MotionPage>}
        />
        <Route
          path={CONTACT_PAGE}
          element={<MotionPage><Contact /></MotionPage>}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
