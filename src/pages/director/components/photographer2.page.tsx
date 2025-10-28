import MotionInView from "@/components/ui/motion-in-view";

const Photographer2 = () => {

  return (
    <section className="w-full pt-20">
      <div className="mx-6 md:mx-8 lg:mx-12 flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Left block: tall image + big poster + thumbnails */}
        <div className="w-full lg:w-3/5 flex flex-col">
          <MotionInView direction="up" className="flex gap-4 md:gap-6 items-stretch">
            <MotionInView as="img" direction="none"
              src="/images/Pho1.jpg"
              alt=""
              className="w-1/3 h-[60vh] md:h-[70vh] object-cover"
            />
            <MotionInView as="img" direction="none" delay={0.05}
              src="/images/Pho2.jpg"
              alt=""
              className="w-2/3 h-[60vh] md:h-[70vh] object-cover"
            />
          </MotionInView>

          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-6">
            <MotionInView as="img" direction="up" src="/images/Pho3.jpg" alt="" className="w-full h-44 md:h-52 lg:h-56 object-cover" />
            <MotionInView as="img" direction="up" delay={0.05} src="/images/Pho4.jpg" alt="" className="w-full h-44 md:h-52 lg:h-56 object-cover" />
            <MotionInView as="img" direction="up" delay={0.1} src="/images/Pho5.jpg" alt="" className="w-full h-44 md:h-52 lg:h-56 object-cover" />
          </div>
        </div>

        {/* Right block: title + description + large image */}
        <div className="w-full lg:w-2/5 text-white flex flex-col justify-start lg:justify-between">
          <div className="px-1 lg:px-0 space-y-4 md:space-y-6">
            <MotionInView as="p" direction="up" className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wider uppercase">PHOTOGRAPHER</MotionInView>
            <MotionInView as="p" direction="up" delay={0.1} className="text-base md:text-xl lg:text-2xl leading-relaxed">
              With the power of athletics. Tungage is also a sports photographer with extensive experience, having
              worked on projects for big sports brands in Vietnam.
            </MotionInView>
          </div>

          <MotionInView direction="up" className="mt-8 md:mt-10">
            <MotionInView as="img"
              src="/images/Pho6.jpg"
              alt=""
              className="w-full h-[40vh] md:h-[55vh] object-cover"
            />
          </MotionInView>
        </div>
      </div>
    </section>
  );

}
export default Photographer2;
