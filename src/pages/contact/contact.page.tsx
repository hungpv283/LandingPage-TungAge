import ContactForm from "./components/contact-form.component";
import MotionInView from "@/components/ui/motion-in-view";


const Contact = () => {
  return (
    <section className="bg-black text-white h-screen flex flex-col md:flex-row ">
      <MotionInView direction="left" className="md:w-1/2 h-full flex flex-col text-left px-6 space-y-6">
        <MotionInView as="div" direction="up" className="text-5xl md:text-9xl font-extrabold tracking-wider text-center">THANKS</MotionInView>

        <MotionInView as="p" direction="up" delay={0.1} className="mt-6 md:mt-10 text-2xl md:text-4xl lg:text-5xl text-red-500 space-y-2 text-center">SEE YOU NEXT TIME          </MotionInView>

        <MotionInView direction="up" delay={0.15}><ContactForm /></MotionInView>
      </MotionInView>

      <MotionInView direction="right" className="w-full md:w-1/2 h-full flex items-center justify-center mt-6 md:mt-0 overflow-hidden">
        <MotionInView as="img"
          src="/images/Contact.jpg"
          alt="TUNGAGE Portfolio"
          className="w-full h-full object-cover bg-black"
        />
      </MotionInView>
    </section >
  );
};

export default Contact;
