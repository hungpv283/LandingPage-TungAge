

import listSocialMenu from "@/constants/menu/listSocial.menu";
import SlideComponent from "./components/slide.component";
import MotionInView from "@/components/ui/motion-in-view";

const Content = () => {
  return (
    <>
      <section className="flex flex-row w-auto justify-between pt-12 mx-auto">
        <MotionInView direction="left" className="w-1/2 flex flex-col px-6 space-y-6 text-white text-left">
          <MotionInView as="p" direction="up" className="lg:text-6xl md:text-4xl text-3xl font-extrabold tracking-wider">
            CONTENT CREATOR
          </MotionInView>
          <MotionInView as="p" direction="up" delay={0.1} className="lg:text-2xl text-red-500 md:text-xl text-sm font-extrabold tracking-wider">
            1 MILIONS FOLLOWER
          </MotionInView>
          <div>
            <MotionInView direction="up" delay={0.15} className="flex items-center justify-start md:space-x-6 mt-6 flex-wrap gap-3">
              {listSocialMenu.map((social, index) => (
                <MotionInView as="a" direction="up" delay={0.2 + index * 0.05}
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline decoration-slate-100 underline w-10 h-10"
                >
                  {social.icon}
                </MotionInView>
              ))}
            </MotionInView>

            <MotionInView direction="up" delay={0.2} className="md:block hidden"><SlideComponent /></MotionInView>
          </div>
        </MotionInView>
        <MotionInView direction="right" className="justify-center items-center flex w-1/2 md:justify-center md:items-end">
          <MotionInView as="img" direction="none"
            src="/images/width_800.webp"
            alt=""
            className="w-full md:w-[92%] h-[70vh] md:h-[90vh] object-cover"
          />
        </MotionInView>


      </section>

      <div className="md:hidden block"><SlideComponent /></div>
    </>
  );
};

export default Content;
