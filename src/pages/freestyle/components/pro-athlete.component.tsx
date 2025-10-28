import listFreestyleMenu from "@/constants/menu/listFreeMenu"
import MotionInView from "@/components/ui/motion-in-view"

const ProAthleteComponent = () => {
  return (
    <section className="bg-black text-white">
      <div className="my-10 mx-8">
        <MotionInView as="h1" direction="up" className="border-b-[4px] border-[#dc143c] text-white text-3xl font-bold inline-block">
          Pro Athlete
        </MotionInView>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-4">
        <div className="w-full h-full lg:w-3/4 flex flex-col items-center justify-center overflow-hidden">
          <MotionInView as="img"
            src="/images/FreeStyle1.jpg"
            className="w-[85%] h-[85%] object-cover bg-black"
            alt="Freestyle Image"
          />
        </div>
        <div className="w-full h-full md:w-3/4 flex flex-col items-center justify-center text-left">
          <MotionInView direction="up" className="lg:text-4xl md:text-4xl text-2xl font-extrabold tracking-wider">
            FOOTBALL FREESTYLE
          </MotionInView>
          <MotionInView direction="up" delay={0.1} className="lg:mt-8 lg:text-3xl md:text-2xl text-xl text-red-500">
            <p>| Vận động viên</p>
          </MotionInView>
          <div className="flex flex-row mx-12">
            <MotionInView direction="up" delay={0.15} className="mt-10 md:mt-10 text-2xl md:text-4xl lg:text-5xl flex flex-col gap-4">
              {listFreestyleMenu.map((freestyle, index) => (
                <MotionInView key={index} direction="up" delay={0.2 + index * 0.05}>
                  <div className="flex flex-row gap-3">
                    <div className="items-stretch">{freestyle.icon}</div>
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">
                      <strong className="text-red-500">
                        {freestyle.title}
                      </strong>{" "}
                      {freestyle.content}
                    </span>
                  </div>
                </MotionInView>
              ))}
            </MotionInView>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProAthleteComponent;