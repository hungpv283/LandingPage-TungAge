import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import listContentMenu from '@/constants/menu/listContentMenu';

const SlideComponent = () => {
  return (
    <>
      <p className=' w-auto h-auto text-center mt-8 text-2xl md:text-3xl font-bold pl-2'>COOPERATED WITH THE BRANDS:
      </p>
      <div className="relative">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {Array.from({ length: Math.ceil(listContentMenu.length / 9) }, (_, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-3 grid-rows-3 gap-4">
                {listContentMenu.slice(i * 9, (i + 1) * 9).map((item, index) => (
                  <div key={index} className={
                    `${item.className} flex justify-center items-center gap-8`
                  }>
                    <img
                      src={item.img}
                      alt={item.title}
                      className={`${item.className} w-1/2 h-1/2 object-contain md:w-full md:h-full`}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SlideComponent;
